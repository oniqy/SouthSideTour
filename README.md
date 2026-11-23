# Đi Một Vòng

Ứng dụng theo dõi lộ trình cá nhân từ vị trí hiện tại qua Long Hải, Kê Gà, Bàu Trắng, Vịnh Vĩnh Hy, Cam Ranh, Bãi Dài, Đèo Cù Hin, Lương Sơn, Đèo Cổ Mã, Mũi Điện, Gành Đá Đĩa, Sông Cầu, Quy Nhơn và Bồng Sơn. Có flow, mô phỏng, tìm kiếm, đánh dấu điểm đã ghé, lưu ảnh kỷ niệm và quản lý chi phí. Các liên kết Google Maps hiện có được giữ nguyên; ứng dụng không cần Google Maps API key.

## Chạy trên Windows

Mở PowerShell trong thư mục dự án rồi chạy:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\start-server.ps1
```

Trang web sẽ mở tại `http://127.0.0.1:8000`. Khi chạy trên `localhost`, ứng dụng tự dùng dữ liệu trên thiết bị. Giữ terminal mở khi sử dụng và nhấn **Ctrl+C** để dừng.

## Đồng bộ công khai bằng Cloudflare

Backend dùng **Cloudflare Pages Functions** cho API và **D1** để lưu trạng thái lộ trình, chi phí cùng ảnh đã nén. Không cần tạo R2 bucket hoặc đăng ký R2 subscription. Người có liên kết được xem dữ liệu; chỉ chủ sở hữu đăng nhập mới được chỉnh sửa. Thông tin đăng nhập và khóa ký phiên nằm trong Cloudflare Secrets, không nằm trong JavaScript phía trình duyệt.

### 1. Push mã nguồn lên GitHub

Repository [SouthSideTour](https://github.com/oniqy/SouthSideTour) hiện đang trống. Trên Windows, cách dễ nhất là dùng **GitHub Desktop**:

1. Cài GitHub Desktop từ [desktop.github.com](https://desktop.github.com/) và đăng nhập tài khoản GitHub có quyền với repository `oniqy/SouthSideTour`.
2. Chọn **File → Add Local Repository** và chọn thư mục dự án `MapTourProject`. Nếu GitHub Desktop báo thư mục chưa phải repository Git, chọn liên kết tạo repository ngay trong thư mục đó. Không tạo thư mục dự án lồng bên trong `MapTourProject`.
3. Nếu được hỏi mẫu `.gitignore`, chọn **None** để giữ file `.gitignore` đã có trong dự án.
4. Mở **Repository → Repository Settings → Remote** và đặt remote `origin` thành `https://github.com/oniqy/SouthSideTour.git`.
5. Trong tab **Changes**, kiểm tra danh sách file. Giữ các file mã nguồn và thư mục `functions`, `migrations`; không thêm file bí mật hoặc dữ liệu cá nhân. Nhập nội dung commit, ví dụ `Initial project upload`, rồi chọn **Commit to main**.
6. Chọn **Push origin** để tải commit lên GitHub. Repository hiện trống nên lần push đầu sẽ tạo nhánh `main`.

Không chọn **Publish repository** để tạo repository mới; hãy kết nối remote `origin` với repository đã gửi ở trên. Không gửi mật khẩu GitHub, token đăng nhập hoặc Cloudflare Secrets trong chat hay commit.

Các file cần push gồm `.gitignore`, `README.md`, `index.html`, `app.js`, `styles.css`, `backend-config.js`, `cloud-storage.js`, `start-server.ps1`, toàn bộ `functions/` và `migrations/`. `backend-config.js` chỉ bật kết nối Cloudflare, không chứa mật khẩu. `.gitignore` loại trừ `.env`, `.dev.vars`, `.wrangler/`, thư viện cài đặt, file build, database cục bộ và log.

**Không push** `OWNER_EMAIL`, `OWNER_PASSWORD`, `SESSION_SECRET`, Cloudflare API token, Supabase `service_role` key, file `.env`/`.dev.vars`, ảnh riêng tư hoặc bản sao dữ liệu cá nhân. Hãy nhập thông tin chủ sở hữu vào mục **Secrets** của Cloudflare Dashboard; không viết chúng vào mã nguồn.

Sau khi push, trong Cloudflare Dashboard chọn **Workers & Pages → Create application → Pages → Connect to Git**, kết nối repository `oniqy/SouthSideTour` và chọn:

- Build command: để trống.
- Build output directory: `.`.
- Root directory: thư mục gốc của dự án.

Pages Functions cần triển khai qua Git integration hoặc Wrangler; không chọn cách kéo-thả trang tĩnh. Cloudflare không cho đổi một dự án Direct Upload thành Git-integrated sau này.

### 2. Tạo và gắn cơ sở dữ liệu

Trong Cloudflare:

1. Tạo một database **D1**. Nếu chưa chạy schema, mở tệp `migrations/0001_init.sql`, sao chép nội dung SQL và chạy trong database **Console**.
2. Tiếp tục mở `migrations/0002_store_memory_images_in_d1.sql`, sao chép nội dung và chạy trong Console. Migration này tạo bảng lưu ảnh trong D1. Chỉ chạy nội dung SQL, không nhập tên hoặc đường dẫn tệp vào Console. Nếu đã chạy `0001_init.sql` trước đó thì **chỉ cần chạy `0002`**, không chạy lại `0001`.
3. Mở Pages project → **Settings → Bindings → Add**; thêm D1 binding tên `DB` và chọn database vừa tạo. Binding chỉ kết nối project với database, không phải đăng ký subscription. Giữ tài khoản ở **Workers Free**; không thêm payment method hoặc nâng cấp Paid nếu bạn không muốn bật thanh toán. Không cần thêm R2 binding.
4. Trong Pages project, mở **Settings → Variables and Secrets → Production**. Thêm từng mục sau với loại **Secret**:
   - `OWNER_EMAIL`: email bạn sẽ nhập ở form đăng nhập chủ sở hữu.
   - `OWNER_PASSWORD`: mật khẩu mạnh do bạn tự chọn.
   - `SESSION_SECRET`: chuỗi ngẫu nhiên ở hướng dẫn bên dưới.
   Nhập tên và giá trị riêng cho từng Secret, rồi lưu. Không đặt các giá trị này trong GitHub.
5. Sau khi thêm binding và Secrets, triển khai lại để Functions nhận cấu hình mới: vào **Deployments → Production**, chọn deployment gần nhất rồi bấm **Retry deployment**. Nếu vừa push commit mới lên nhánh production `main`, Pages sẽ tự tạo deployment mới; chờ trạng thái **Success**.
6. Chờ trạng thái deployment là **Success**, rồi mở URL Production để kiểm tra website.

Nếu đang cập nhật một website đã triển khai, hãy chạy migration `0002` trước khi push phiên bản mã mới để bảng ảnh tồn tại trước khi API sử dụng.

Có thể tạo chuỗi ngẫu nhiên `SESSION_SECRET` bằng PowerShell:

```powershell
$bytes = New-Object byte[] 32
$rng = [Security.Cryptography.RandomNumberGenerator]::Create()
$rng.GetBytes($bytes)
$rng.Dispose()
[Convert]::ToBase64String($bytes)
```

Không gửi mật khẩu hoặc `SESSION_SECRET` vào mã nguồn, GitHub, hay cho người khác.

### 3. Nhập dữ liệu và chia sẻ

Mở website đã triển khai, chọn **Đăng nhập chủ sở hữu** và dùng `OWNER_EMAIL`/`OWNER_PASSWORD`. Lần đăng nhập đầu tiên sẽ nhập lộ trình, khoản chi và ảnh đang lưu trên thiết bị đó lên cloud. Chỉ đánh dấu hoàn tất nhập sau khi ảnh tải lên thành công; nếu bị gián đoạn, đăng nhập lại để thử tiếp. Sau đó có thể chia sẻ địa chỉ website; người xem không cần tài khoản.

Ảnh gốc tối đa 20 MB và tối đa 3 ảnh mỗi điểm đến. Ảnh xem trước sẽ hiện ngay khi chọn và hiển thị trạng thái trong lúc tải; trình duyệt nén sang JPEG tối đa 1,2 MB trước khi lưu vào D1. Người xem nhận ảnh qua API công khai, không cần đăng nhập.

### Giới hạn gói miễn phí

Cloudflare không tự tạm dừng ứng dụng chỉ vì ít người truy cập, nhưng gói miễn phí có giới hạn và điều khoản có thể thay đổi. Hạn mức D1 Free hiện tại là 500 MB mỗi database (5 GB tổng dung lượng D1 của tài khoản), 5 triệu dòng đọc/ngày và 100.000 dòng ghi/ngày; một dòng dữ liệu tối đa 2 MB. Pages Functions dùng hạn mức Workers Free 100.000 yêu cầu/ngày. Khi chạm hạn mức miễn phí, thao tác D1 có thể bị từ chối đến khi hạn mức được giải phóng hoặc reset; không có cam kết miễn phí vô hạn. Ảnh được nén để nằm dưới giới hạn mỗi dòng.

Tài liệu chính thức: [Pages Git integration](https://developers.cloudflare.com/pages/get-started/git-integration/), [Pages bindings](https://developers.cloudflare.com/pages/functions/bindings/), [D1 pricing](https://developers.cloudflare.com/d1/platform/pricing/), [D1 limits](https://developers.cloudflare.com/d1/platform/limits/) và [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/).

## Sử dụng

- Tìm kiếm và lọc điểm đến theo trạng thái.
- Vuốt thẻ điểm đến từ trái sang phải để đánh dấu đã ghé theo đúng thứ tự; chỉ điểm kế tiếp được mở khóa.
- Flow cập nhật điểm hiện tại, chặng tiếp theo, thời gian dự kiến và tổng thời gian còn lại. Các liên kết Google Maps trong `app.js` không bị thay đổi.
- Điểm đã ghé có tối đa 3 khung ảnh; có thể xóa ảnh hoặc hủy đánh dấu điểm.
- Tab **Chi phí** lưu các khoản VND theo danh mục Ăn uống, Xe cộ, Phạt và Chi phí khác; có thể vuốt để xóa khoản chi.
- Mô phỏng đường đi dùng khoảng cách ước tính và tốc độ 55 km/h, nên có thể khác thời gian/đường thực tế. GPS chỉ được yêu cầu khi người dùng bấm nút.
