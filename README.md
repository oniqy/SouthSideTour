# Đi Một Vòng

Ứng dụng theo dõi lộ trình cá nhân từ vị trí hiện tại qua Long Hải, Kê Gà, Bàu Trắng, Vịnh Vĩnh Hy, Cam Ranh, Bãi Dài, Đèo Cù Hin, Lương Sơn, Đèo Cổ Mã, Mũi Điện, Gành Đá Đĩa, Sông Cầu, Quy Nhơn và Bồng Sơn. Có flow, mô phỏng, tìm kiếm, đánh dấu điểm đã ghé, lưu ảnh kỷ niệm và quản lý chi phí. Các liên kết Google Maps hiện có được giữ nguyên; ứng dụng không cần Google Maps API key.

## Chạy trên Windows

Mở PowerShell trong thư mục dự án rồi chạy:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\start-server.ps1
```

Trang web sẽ mở tại `http://127.0.0.1:8000`. Khi chạy trên `localhost`, ứng dụng tự dùng dữ liệu trên thiết bị. Giữ terminal mở khi sử dụng và nhấn **Ctrl+C** để dừng.

## Đồng bộ công khai bằng Cloudflare

Backend dùng **Cloudflare Pages Functions** cho API, **D1** cho trạng thái lộ trình/chi phí và **R2** cho ảnh. Người có liên kết được xem dữ liệu; chỉ chủ sở hữu đăng nhập mới được chỉnh sửa. Thông tin đăng nhập và khóa ký phiên nằm trong Cloudflare Secrets, không nằm trong JavaScript phía trình duyệt.

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

### 2. Tạo và gắn cơ sở dữ liệu, kho ảnh

Trong Cloudflare:

1. Tạo một database **D1**. Mở database **Console** và chạy nội dung `migrations/0001_init.sql`.
2. Tạo một bucket **R2**.
3. Mở Pages project → **Settings → Bindings → Add**; thêm D1 binding tên `DB` và chọn database vừa tạo, rồi thêm R2 binding tên `MEMORIES` và chọn bucket vừa tạo.
4. Thêm các biến dưới dạng **Secrets** cho môi trường Production:
   - `OWNER_EMAIL`: email đăng nhập của bạn.
   - `OWNER_PASSWORD`: mật khẩu mạnh do bạn tự chọn.
   - `SESSION_SECRET`: chuỗi ngẫu nhiên dài, không dùng lại mật khẩu.
5. Triển khai lại project sau khi thêm bindings và Secrets.

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

Ảnh tối đa 20 MB mỗi tệp và tối đa 3 ảnh cho mỗi điểm đến. Ảnh được lưu riêng trong R2; không bật truy cập công khai trực tiếp cho bucket.

### Giới hạn gói miễn phí

Cloudflare không tự tạm dừng ứng dụng chỉ vì ít người truy cập, nhưng gói miễn phí có giới hạn dung lượng và lượt sử dụng, và điều khoản/giá có thể thay đổi. Hạn mức hiện tại gồm D1 Free tối đa 500 MB mỗi database (5 GB tổng dung lượng D1 của tài khoản), R2 Standard Free 10 GB-tháng lưu trữ, 1 triệu thao tác Class A và 10 triệu thao tác Class B mỗi tháng; Pages Functions dùng hạn mức Workers Free 100.000 yêu cầu/ngày. Theo dõi hạn mức trên Dashboard để tránh vượt mức miễn phí. Đây không phải cam kết lưu trữ miễn phí vô hạn.

Tài liệu chính thức: [Pages Git integration](https://developers.cloudflare.com/pages/get-started/git-integration/), [Pages bindings](https://developers.cloudflare.com/pages/functions/bindings/), [D1 limits](https://developers.cloudflare.com/d1/platform/limits/), [R2 pricing](https://developers.cloudflare.com/r2/pricing/) và [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/).

## Sử dụng

- Tìm kiếm và lọc điểm đến theo trạng thái.
- Vuốt thẻ điểm đến từ trái sang phải để đánh dấu đã ghé theo đúng thứ tự; chỉ điểm kế tiếp được mở khóa.
- Flow cập nhật điểm hiện tại, chặng tiếp theo, thời gian dự kiến và tổng thời gian còn lại. Các liên kết Google Maps trong `app.js` không bị thay đổi.
- Điểm đã ghé có tối đa 3 khung ảnh; có thể xóa ảnh hoặc hủy đánh dấu điểm.
- Tab **Chi phí** lưu các khoản VND theo danh mục Ăn uống, Xe cộ, Phạt và Chi phí khác; có thể vuốt để xóa khoản chi.
- Mô phỏng đường đi dùng khoảng cách ước tính và tốc độ 55 km/h, nên có thể khác thời gian/đường thực tế. GPS chỉ được yêu cầu khi người dùng bấm nút.
