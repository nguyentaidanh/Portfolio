import { navHeader } from "@/data/nav.header";
import { ProfileData } from "@/data/personal.data";
import type { SectionID } from "@/types/Section.id";
import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState<SectionID>("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navHeader.forEach((id) => {
      const el = document.getElementById(id.ref);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id.ref);
          }
        },
        {
          root: null,
          rootMargin: "-64px 0px -40% 0px", // trừ 64px header và cho phép đổi sớm
          threshold: 0.3,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    // <header className="fixed  top-0 h-16 left-0 w-full bg-black backdrop-blur text-white z-50 p-4">
    <header className="fixed  top-1 h-16 left-0 w-full bg-black backdrop-blur text-white z-50 p-4">
      {/* <ScrollProgressBar /> */}
      <span className="flex items-center justify-between mx-auto">
        <div className="font-bold text-lg mx-4 ">{ProfileData.fullName}</div>
        <nav className="flex gap-6 p-4 justify-center">
          {navHeader.map((id) => (
            <a
              key={id.ref}
              href={`#${id.ref}`}
              className={`px-3 py-2 rounded transition-colors duration-300
                            ${
                              activeSection === id.ref
                                ? "bg-purple-500 !text-white !font-bold"
                                : "text-gray-700 hover:text-purple-500"
                            }`}
            >
              {id.name.toUpperCase()}
            </a>
          ))}
        </nav>
      </span>
    </header>
  );
}
