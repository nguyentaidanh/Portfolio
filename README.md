# Portfolio

Một portfolio cá nhân build bằng React + TypeScript và Vite. Tài liệu này hướng dẫn cách chạy, build, deploy và cách tùy chỉnh nhanh cho dự án.

## Mô tả

Trang portfolio thể hiện thông tin cá nhân, kỹ năng, dự án, trải nghiệm, và có các tiện ích như thay đổi theme (sáng/tối), chuyển ngôn ngữ, và thống kê GitHub.

Dự án sử dụng:
- React 19 + TypeScript
- Vite (dev server, build)
- Một số thư viện: `lucide-react`, `react-icons`

## Điểm nổi bật

- Tối ưu cho developer portfolio: sections cho Projects, Experience, Skills, Contact.
- Theme toggle và language switcher (đa ngôn ngữ).
- Component-based, dễ mở rộng.

## Yêu cầu hệ thống

- Node.js >= 18 (khuyến nghị LTS)
- npm / pnpm / yarn (ví dụ dưới dùng npm)

## Cài đặt nhanh

Mở terminal trong thư mục dự án và chạy:

```bash
# cài dependencies
npm install

# hoặc dùng pnpm
# pnpm install

# hoặc yarn
# yarn
```

## Chạy ở chế độ phát triển

```bash
npm run dev
```

Mặc định Vite sẽ chạy dev server (http://localhost:5173). Mở trình duyệt để xem thay đổi khi phát triển.

## Build cho production

```bash
npm run build

# để preview build tĩnh
npm run preview
```

Scripts có trong `package.json` (đã áp dụng trong dự án):

- `dev`: khởi chạy vite dev server
- `build`: tạo build production (vite build)
- `preview`: preview build production (vite preview)

## Cấu trúc dự án (tóm tắt)

- `index.html` — entry HTML
- `index.tsx` — entry React (mount root)
- `src/` — mã nguồn chính
  - `App.tsx` — root app
  - `components/` — các component UI (Hero, Header, Projects, Footer...)
  - `constants/` — hằng số, cấu hình nội dung
  - `contexts/` — context (ví dụ LanguageContext)
  - `translate/` — file dịch (translations)
  - `types/` — định nghĩa TypeScript
  - `assets/` — hình ảnh và file tĩnh

Một số file/điểm quan trọng:
- `src/components/LanguageSwitcher.tsx` — chuyển ngôn ngữ
- `src/components/ThemeToggle.tsx` — chuyển theme sáng/tối
- `src/constants/constants.tsx` — chỗ để cập nhật nội dung (tên, mô tả, links)
- `src/translate/translations.ts` — nội dung đa ngôn ngữ

## Tùy chỉnh nội dung nhanh

- Thay đổi tên, mô tả, link mạng xã hội và nội dung hiển thị trong `src/constants/constants.tsx`.
- Thêm/điều chỉnh chuỗi dịch trong `src/translate/translations.ts`.
- Thêm hoặc chỉnh card dự án trong `src/components/Projects.tsx` hoặc file dữ liệu tương ứng nếu bạn tách data.

## Thêm ảnh/asset

Đặt hình ảnh vào `src/assets/images/` hoặc `src/assets/files/` và tham chiếu tương đối từ component.

## Triển khai (deployment)

Gợi ý nhanh cho deploy static site (Vercel / Netlify / GitHub Pages):

- Vercel: tạo project mới trỏ tới repository, build command: `npm run build`, publish dir: `dist`.
- Netlify: chọn repo, build command: `npm run build`, publish dir: `dist`.
- GitHub Pages: có thể dùng workflow để build và publish folder `dist`.

## Kiểm tra & Lint

Hiện repo không kèm sẵn scripts cho lint hoặc test (nếu cần, có thể thêm ESLint, Prettier và Jest/Playwright cho tests). Nếu muốn, mình có thể giúp cấu hình.

## Bảo mật & Environment

Tài liệu gốc có đề cập `VITE_API_KEY` trong `.env.local` — nếu dự án cần API key, tạo file `.env.local` (thêm vào `.gitignore`) và thêm biến theo format `VITE_API_KEY=your_key_here`.

Nếu không dùng biến môi trường nào, bỏ qua bước này.

## Cách đóng góp

1. Fork repo
2. Tạo branch `feature/your-change`
3. Tạo PR với mô tả thay đổi

Mình có thể review và hợp nhất.

## Liên hệ

- GitHub: https://github.com/nguyentaidanh
- Email: (thêm email của bạn nếu muốn hiển thị)

## License

Chưa có file LICENSE trong repo; khuyến nghị: thêm `LICENSE` (ví dụ MIT) nếu bạn muốn công khai dưới giấy phép.

---

Nếu bạn muốn mình viết phiên bản README bằng tiếng Anh hoặc bổ sung ảnh minh họa/screenshot, hoặc thêm badge (build, license, deploy), mình sẽ cập nhật ngay.
