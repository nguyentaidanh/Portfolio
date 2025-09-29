
import { IMAGES } from "@/constants/images"
import { experiences } from "./personal.experience"
import { fontend } from "./personal.fontend"
import { backend } from "./personal.backend"
import { devOps } from "./personal.devops"
 
export const ProfileData = {
    birthDate: "13/03/2000",
    career:"Fullstack",
    name: "Danh",
    fullName:"Nguyễn Tài Danh",
    title: "Web - App Developer",
    email: "nguyentaidanh1303@gmail.com",
    phone: "(+84) 832 308 947",
    address: "Hoà Thành Town, Tây Ninh City, Vietnam",
    description: "Passionate about React, Tailwind, and UI/UX.",
    introduction:"I am a Software Developer with strong expertise in C# and React.js, experienced in building modern, high-performance applications and websites. Proficient in TypeScript, Tailwind CSS, and Next.js, I consistently focus on delivering stable, scalable solutions that create real value for businesses.",
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