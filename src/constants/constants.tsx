import React from 'react';
import { BiLogoAws } from 'react-icons/bi';
import { DiMsqlServer } from 'react-icons/di';
import {    SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiVercel, SiFigma, SiDotnet, SiDocker, SiLinux, SiGit, SiPostgresql } from "react-icons/si";
import { TbBrandCSharp } from 'react-icons/tb';
import avatar from '../assets/images/avatar.jpg';
import zenith from '../assets/images/zenith.png';
import finTrax from '../assets/images/finTrax1.png';
import fuaha from '../assets/images/fuaha.png';
import Cv from '../assets/files/Nguyen-Tai-Danh-CV_F.pdf'

export const PERSONAL_INFO = {
    name: "Nguyễn Tài Danh",
    headerName: "Danh",
    profilePicture: avatar,
    email: "nguyentaidanh1303@gmail.com",
    linkedin: "https://www.linkedin.com/in/danh-nguyen-8a02b838b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/nguyentaidanh",
    githubUsername: "nguyentaidanh",
    cvPath: Cv,
};

const iconClass = "w-12 h-12 text-highlight group-hover:scale-105 transition-transform duration-300";
export const SKILL_ICONS: { [key: string]: React.ReactElement } = {
  react: <SiReact className={iconClass} />,
  nextjs: <SiNextdotjs className={iconClass} />,
  tailwind: <SiTailwindcss className={iconClass} />,
  typescript: <SiTypescript className={iconClass} />,
  csharp: < TbBrandCSharp className={iconClass} />,
  dotnetcore: <SiDotnet className={iconClass} />,
  sqlserver: <DiMsqlServer className={iconClass} />,
  postgresql: <SiPostgresql className={iconClass} />,
  aws: <BiLogoAws className={iconClass} />,
  git: <SiGit className={iconClass} />,
  docker: <SiDocker className={iconClass} />,
  linux: <SiLinux className={iconClass} />,
  nodejs: <SiNodedotjs className={iconClass} />,
};
export const PROJECT_ASSETS: { [key: string]: { imageUrl: string; demoUrl: string; githubUrl: string; } } = {
    p1: {
        imageUrl: zenith,
        demoUrl: "#",
        githubUrl: "https://github.com/nguyentaidanh/Zenith.git"
    },
    p2: {
        imageUrl: finTrax,
        demoUrl: "https://fintrax-rouge.vercel.app",
        githubUrl: "https://github.com/nguyentaidanh/FINTRAX.git",
    },
    p3: {
        imageUrl: fuaha,
        demoUrl: "#",
        githubUrl: "#",
    },
    // p4: {
    //     imageUrl: "https://picsum.photos/seed/project4/500/300",
    //     demoUrl: "#",
    //     githubUrl: "#",
    // },
};