import { TimelineItem } from '../types/types';

export const translations = {
  en: {
    header: {
      nav: {
        about: "Home",
        skills: "Skills",
        projects: "Projects",
        journey: "Journey",
        contact: "Contact",
      }
    },
    hero: {
      greeting: "Hi, I'm",
      title: "Software Engineer",
      introduction:
        "I'm Nguyễn Tài Danh, a Software Engineer based in Ho Chi Minh City, Vietnam. I specialize in building modern, high-performance web and desktop applications using React, Next.js, TypeScript and .NET technologies. I focus on creating scalable, maintainable solutions that deliver real value to users and businesses.",
      contactBtn: "Contact Me",
      cvBtn: "Download CV",
    },
    about: {
      title: "About Me",
      imageAlt: "A photo of Nguyễn Tài Danh working at a desk",
      description1:
        "Hello! I'm Danh, a Software Engineer from Ho Chi Minh City, Vietnam. I build efficient, maintainable, and scalable web applications and desktop software.",
      description2:
        "With experience across frontend and backend stacks, I enjoy solving problems, learning new technologies, and shipping practical products that improve user experience.",
      interestsTitle: "Beyond the Code",
      interests: [
        "Playing board games with friends.",
        "Watching and following sports.",
        "Learning about personal finance.",
        "Building personal tech projects."
      ]
    },
    skills_section: {
      title: "My Skills"
    },
    skills: [
      { key: "react", name: "React" },
      { key: "nextjs", name: "Next.js" },
      { key: "tailwind", name: "Tailwind CSS" },
      { key: "typescript", name: "TypeScript" },
      { key: "csharp", name: "C#" },
      { key: "dotnetcore", name: ".NET Core / ASP.NET" },
      { key: "sqlserver", name: "SQL Server" },
      { key: "postgresql", name: "PostgreSQL" },
      { key: "aws", name: "AWS" },
      { key: "git", name: "Git" },
      { key: "docker", name: "Docker" },
      { key: "linux", name: "Linux" },
      { key: "nodejs", name: "Node.js" },
    ],
    projects_section: {
      title: "My Projects"
    },
    projects: [
      {
        id: "p1",
        title: "Zenith",
        description:
          "An e-commerce web application with a React frontend and Node.js backend. The project is split into frontend/ (Vite + TypeScript) for customer UI and admin dashboard, and backend/ (Node.js + Express) exposing a REST API connected to PostgreSQL.",
        technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Redis", "JWT", "bcryptjs"],
        github: "https://github.com/nguyentaidanh/Zenith.git"
      },
      {
        id: "p2",
        title: "FinTrax",
        description:
          "FinTrax is a personal finance tracker: Next.js frontend + Node.js/Express backend. It helps users track income/expenses and visualize financial data.",
        technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
        github: "https://github.com/nguyentaidanh/FINTRAX.git"
      },
      {
        id: "p3",
        title: "Fuaha-AI",
        description:
          "Fuaha-AI is an ongoing chatbot project using AI to automate customer communication and support.",
        technologies: ["React", "Node.js", "OpenAI API", "TypeScript"],
        // add github or demo when available
      }
      // ,
      // {
      //   id: "p4",
      //   title: "Personal Tools & Utilities",
      //   description:
      //     "Various small utilities and tools I built for productivity, monitoring, and data processing — often combining Node.js backends with React frontends.",
      //   technologies: ["Node.js", "React", "TypeScript", "Docker"],
      // }
    ],
    project_card: {
      demo: "Live Demo",
      github: "GitHub",
    },
    github_stats: {
      title: "GitHub Stats",
      repos: "Repositories",
      followers: "Followers",
      stars: "Stars",
      error: "Could not fetch GitHub stats.",
    },
    experience_section: {
      title: "My Journey"
    },
    timeline: [
      {
        type: 'experience',
        data: {
          title: "Software Developer",
          company: "ITD Solutions JSC",
          location: "Ho Chi Minh City, Vietnam",
          date: "2021 - 2025",
          description: [
            "Optimized system performance, improving processing speed by 30%.",
            "Designed and implemented backend components, facilitating data collection from camera devices.",
            "Led deployments ensuring stable production operation.",
            "Provided timely technical support, resolving customer issues within 2 hours.",
            "Produced troubleshooting documentation, reducing repeated support requests by 25%."
          ],
          technologies: ["C#", "ASP.NET", "WPF", "SQL Server", "React", "Node.js"]
        }
      },
      {
        type: 'education',
        data: {
          degree: "Bachelor of Information Technology",
          institution: "University of Natural Resources and Environment",
          location: "Ho Chi Minh City, Vietnam",
          date: "2018 - 2022",
          description: "Graduated with Good classification, focused on web and app development."
        }
      }
    ] as TimelineItem[],
    contact: {
      title: "Get In Touch",
      subtitle: "Contact Me",
      description: "I'm currently open to new opportunities. If you have a project in mind or want to say hi, feel free to reach out!",
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        submit: "Send Message",
        validation: {
          nameRequired: "Name is required.",
          emailRequired: "Email is required.",
          invalidEmail: "Email address is invalid.",
          messageRequired: "Message is required."
        }
      },
      status: {
        sending: "Sending...",
        error: "Failed to send message. Please try again."
      },
      success: {
        title: "Thank You!",
        message: "Your message has been sent successfully. I will get back to you as soon as possible.",
        button: "Send Another Message"
      }
    },
    footer: {
      rights: "All Rights Reserved."
    }
  },

  vi: {
    header: {
      nav: {
        about: "Trang chủ",
        skills: "Kỹ năng",
        projects: "Dự án",
        journey: "Hành trình",
        contact: "Liên hệ",
      }
    },
    hero: {
      greeting: "Chào, tôi là",
      title: "Kỹ sư Phần mềm",
      introduction:
        "Tôi là Nguyễn Tài Danh, Kỹ sư Phần mềm tại TP. Hồ Chí Minh, Việt Nam. Tôi chuyên xây dựng các ứng dụng web và desktop hiện đại, hiệu suất cao bằng React, Next.js, TypeScript và .NET. Tôi hướng tới các giải pháp có thể mở rộng và dễ bảo trì, mang lại giá trị thực cho người dùng và doanh nghiệp.",
      contactBtn: "Liên hệ",
      cvBtn: "Tải CV",
    },
    about: {
      title: "Về bản thân",
      imageAlt: "Ảnh của Nguyễn Tài Danh đang làm việc",
      description1:
        "Xin chào! Tôi là Danh, Kỹ sư Phần mềm tại TP. Hồ Chí Minh. Tôi xây dựng các ứng dụng web và phần mềm desktop hiệu quả, dễ bảo trì và có khả năng mở rộng.",
      description2:
        "Với kinh nghiệm full-stack, tôi thích giải quyết vấn đề, học công nghệ mới và phát triển sản phẩm thực tế cải thiện trải nghiệm người dùng.",
      interestsTitle: "Ngoài công việc",
      interests: [
        "Chơi board game với bạn bè.",
        "Xem thể thao.",
        "Tìm hiểu về tài chính cá nhân.",
        "Phát triển các dự án cá nhân."
      ]
    },
    skills_section: {
      title: "Kỹ năng của tôi"
    },
    skills: [
      { key: "react", name: "React" },
      { key: "nextjs", name: "Next.js" },
      { key: "tailwind", name: "Tailwind CSS" },
      { key: "typescript", name: "TypeScript" },
      { key: "csharp", name: "C#" },
      { key: "dotnetcore", name: ".NET Core / ASP.NET" },
      { key: "wpf", name: "WPF" },
      { key: "sqlserver", name: "SQL Server" },
      { key: "postgresql", name: "PostgreSQL" },
      { key: "aws", name: "AWS" },
      { key: "git", name: "Git" },
      { key: "docker", name: "Docker" },
      { key: "linux", name: "Linux" },
      { key: "nodejs", name: "Node.js" },
    ],
    projects_section: {
      title: "Các dự án"
    },
    projects: [
      {
        id: "p1",
        title: "Zenith",
        description:
          "Website thương mại điện tử gồm frontend React và backend Node.js. Dự án chia thành frontend (Vite + TypeScript) cho khách hàng và quản trị viên, và backend (Node.js + Express) kết nối PostgreSQL.",
        technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Redis", "JWT"],
        github: "https://github.com/nguyentaidanh/Zenith.git"
      },
      {
        id: "p2",
        title: "FinTrax",
        description:
          "FinTrax là ứng dụng quản lý tài chính cá nhân với frontend Next.js và backend Node.js/Express, giúp theo dõi thu chi và trực quan hóa dữ liệu.",
        technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
        github: "https://github.com/nguyentaidanh/FINTRAX.git"
      },
      {
        id: "p3",
        title: "Fuaha-AI",
        description:
          "Fuaha-AI là dự án chatbot AI đang trong giai đoạn phát triển để tự động hóa giao tiếp và hỗ trợ khách hàng.",
        technologies: ["React", "Node.js", "OpenAI API", "TypeScript"],
      }
      // ,
      // {
      //   id: "p4",
      //   title: "Công cụ cá nhân & Tiện ích",
      //   description:
      //     "Các công cụ nhỏ và tiện ích phục vụ năng suất, giám sát và xử lý dữ liệu mà tôi tự phát triển, thường kết hợp backend Node.js với frontend React.",
      //   technologies: ["Node.js", "React", "TypeScript", "Docker"],
      // }
    ],
    project_card: {
      demo: "Xem Demo",
      github: "GitHub",
    },
    github_stats: {
      title: "Thống kê GitHub",
      repos: "Kho lưu trữ",
      followers: "Người theo dõi",
      stars: "Sao",
      error: "Không thể tải thống kê GitHub.",
    },
    experience_section: {
      title: "Hành trình của tôi"
    },
    timeline: [
      {
        type: 'experience',
        data: {
          title: "Lập trình viên Phần mềm",
          company: "Công ty Cổ phần Giải pháp ITD",
          location: "TP. Hồ Chí Minh, Việt Nam",
          date: "2021 - 2025",
          description: [
            "Tối ưu hiệu năng hệ thống, tăng tốc xử lý lên 30%.",
            "Phát triển backend và hệ thống thu thập dữ liệu từ camera.",
            "Triển khai hệ thống ổn định, đảm bảo vận hành sau khi đi vào sản xuất.",
            "Hỗ trợ kỹ thuật kịp thời, xử lý sự cố trong vòng 2 giờ.",
            "Xây dựng tài liệu xử lý sự cố, giảm 25% yêu cầu hỗ trợ lặp lại."
          ],
          technologies: ["C#", "ASP.NET", "WPF", "SQL Server", "React", "Node.js"]
        }
      },
      {
        type: 'education',
        data: {
          degree: "Cử nhân Công nghệ Thông tin",
          institution: "Đại học Tài nguyên và Môi trường",
          location: "TP. Hồ Chí Minh, Việt Nam",
          date: "2018 - 2022",
          description: "Tốt nghiệp loại khá, tập trung vào phát triển web và ứng dụng."
        }
      }
    ] as TimelineItem[],
    contact: {
      title: "Liên hệ",
      subtitle: "Liên hệ với tôi",
      description: "Tôi hiện đang mở cho các cơ hội mới. Nếu bạn có dự án hoặc muốn trao đổi, hãy liên hệ!",
      form: {
        name: "Tên của bạn",
        email: "Email của bạn",
        message: "Nội dung tin nhắn",
        submit: "Gửi tin nhắn",
        validation: {
          nameRequired: "Tên là bắt buộc.",
          emailRequired: "Email là bắt buộc.",
          invalidEmail: "Địa chỉ email không hợp lệ.",
          messageRequired: "Nội dung tin nhắn là bắt buộc."
        }
      },
      status: {
        sending: "Đang gửi...",
        error: "Gửi tin nhắn thất bại. Vui lòng thử lại."
      },
      success: {
        title: "Cảm ơn bạn!",
        message: "Tin nhắn của bạn đã được gửi thành công. Tôi sẽ phản hồi sớm nhất có thể.",
        button: "Gửi tin nhắn khác"
      }
    },
    footer: {
      rights: "Bảo lưu mọi quyền."
    }
  }
};
