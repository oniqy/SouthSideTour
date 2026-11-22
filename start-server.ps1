param(
  [switch]$NoBrowser,
  [ValidateRange(1, 65535)]
  [int]$Port = 8000
)

$ErrorActionPreference = "Stop"

$root = (Resolve-Path -LiteralPath $PSScriptRoot).Path
$rootPrefix = $root.TrimEnd('\') + '\'
$listener = $null
$lastStartError = $null
$lastPort = [Math]::Min(65535, $Port + 9)

for ($candidatePort = $Port; $candidatePort -le $lastPort; $candidatePort++) {
  $candidateListener = New-Object System.Net.HttpListener
  $candidateListener.Prefixes.Add("http://127.0.0.1:$candidatePort/")
  try {
    $candidateListener.Start()
    $listener = $candidateListener
    $Port = $candidatePort
    break
  } catch {
    $lastStartError = $_
    $candidateListener.Close()
  }
}

if (-not $listener) {
  throw "Could not start the local server on ports $($Port)-$lastPort. Close another server or choose a free port. Details: $lastStartError"
}

$baseUrl = "http://127.0.0.1:$Port"
Write-Host "Website is running at $baseUrl"
Write-Host "Keep this terminal open. Press Ctrl+C to stop the server."
if (-not $NoBrowser) {
  Start-Process $baseUrl
}

try {
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    if ($context.Request.HttpMethod -ne "GET") {
      $context.Response.StatusCode = 405
    } else {
      $relativePath = [Uri]::UnescapeDataString($context.Request.Url.AbsolutePath.TrimStart('/'))
      if ([string]::IsNullOrWhiteSpace($relativePath)) {
        $relativePath = "index.html"
      }

      $filePath = [IO.Path]::GetFullPath((Join-Path $root $relativePath))
      if ($filePath.StartsWith($rootPrefix, [StringComparison]::OrdinalIgnoreCase) -and (Test-Path -LiteralPath $filePath -PathType Leaf)) {
        $bytes = [IO.File]::ReadAllBytes($filePath)
        $context.Response.ContentType = switch ([IO.Path]::GetExtension($filePath).ToLowerInvariant()) {
          ".html" { "text/html; charset=utf-8" }
          ".css" { "text/css; charset=utf-8" }
          ".js" { "text/javascript; charset=utf-8" }
          default { "application/octet-stream" }
        }
        $context.Response.ContentLength64 = $bytes.Length
        $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
      } else {
        $context.Response.StatusCode = 404
      }
    }

    $context.Response.Close()
  }
} finally {
  $listener.Stop()
  $listener.Close()
}
