
import { IMAGES } from "@/constants/images"
import type { ProgressType } from "@/types/progress.type"

const skills: ProgressType[] = [
    {
        icon: IMAGES.cSharp,
        name: "C#",
        percentage: 90,
        color: "bg-blue-500"
    },
    {
        icon: IMAGES.js,
        name: "Javascript",
        percentage: 70,
        color: "bg-blue-500"
    },
    {
        icon: IMAGES.react,
        name: "ReactJS",
        percentage: 90,
        color: "bg-blue-500"
    }
    ,
    {
        icon: IMAGES.sqlServer,
        name: "SqlServer",
        percentage: 90,
        color: "bg-blue-500"
    } ,
    {
        icon: IMAGES.postgresql,
        name: "Postgresql",
        percentage: 90,
        color: "bg-blue-500"
    }
]

const subSkill:ProgressType[] = [
    {
        icon: IMAGES.prometheus,
        name: "Prometheus",
        percentage: 90,
        color: "bg-blue-500"
    },
    {
        icon: IMAGES.html,
        name: "HTML",
        percentage: 70,
        color: "bg-blue-500"
    },
    {
        icon: IMAGES.kotlin,
        name: "Kotlin",
        percentage: 90,
        color: "bg-blue-500"
    },
    {
        icon: IMAGES.tailwind,
        name: "Tailwind",
        percentage: 90,
        color: "bg-blue-500"
    },
    {
        icon: IMAGES.java,
        name: "Java",
        percentage: 90,
        color: "bg-blue-500"
    }
]


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
    skills: skills, 
    subSkills: subSkill,
}