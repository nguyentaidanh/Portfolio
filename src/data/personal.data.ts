
import { IMAGES } from "@/constants/images"
import { experiences } from "./personal.experience"
import { fontend } from "./personal.fontend"
import { backend } from "./personal.backend"
import { devOps } from "./personal.devops"
 
export const ProfileData = {
    birthDate: "13/03/2000",
    career:"Software Developer",
    name: "Danh",
    fullName:"Nguyễn Tài Danh",
    title: "Fullstack Developer",
    email: "nguyentaidanh1303@gmail.com",
    phone: "(+84) 832 308 947",
    address: "Hoà Thành Town, Tây Ninh City, Vietnam",
    description: "Passionate about React, Tailwind, and UI/UX.",
    introduction:"Tôi là Software Developer với thế mạnh C# và React.js, có kinh nghiệm xây dựng ứng dụng web hiện đại, hiệu suất cao. Thành thạo TypeScript, Tailwind CSS và Next.js, tôi luôn hướng đến giải pháp ổn định, mở rộng tốt và mang lại giá trị thực cho doanh nghiệp.",
    socialLinks: {
        github: "https://github.com/nguyentaidanh",
        facebook: ""
    },
    avatar: IMAGES.ico_dev, 
    experience: experiences, 
    fontend: fontend,
    backend: backend,
    devOps: devOps,
}