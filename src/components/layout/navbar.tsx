import {
  Briefcase,
  FileText,
  Home,
  Image,
  Lightbulb,
  Mail,
  Menu,
  Settings,
  User,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function NavbarDock() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Lắng nghe thay đổi kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // gọi 1 lần khi mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menus = [
    { icon: Home, name: "home" },
    { icon: User, name: "about" },
    { icon: Settings, name: "portfolio" },
    { icon: Briefcase, name: "contact" },
    { icon: Mail, name: "mail" },
    { icon: Image, name: "gallery" },
    { icon: Lightbulb, name: "ideas" },
    { icon: FileText, name: "docs" },
  ];

  // ---------------------- RENDER ----------------------
  if (isDesktop) {
    // --- Desktop Dock Navbar ---
    return (
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-4 px-6 py-3 bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg">
          {menus.map((menu, i) => {
            const Icon = menu.icon;
            const isActive = active === menu.name;
            return (
              <a
                href={`#${menu.name}`}
                key={i}
                onClick={() => setActive(menu.name)}
                className={`relative w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300
                  ${
                    isActive
                      ? "bg-white text-black scale-110"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }
                `}
                title={menu.name}
              >
                <Icon className="w-6 h-6" />
                {isActive && (
                  <span className="absolute -bottom-1 w-2 h-2 bg-blue-400 rounded-full"></span>
                )}
              </a>
            );
          })}
        </div>
      </div>
    );
  } else {
    // --- Mobile Navbar ---
    return (
      <>
        {/* Toggle button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setOpen(!open)}
            className="p-3 bg-gray-900/90 rounded-full shadow-lg"
          >
            {open ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Panel menu */}
        {open && (
          <div className="fixed bottom-20 right-6 z-40 flex flex-col gap-4 px-4 py-6 bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-lg">
            {menus.map((menu, i) => {
              const Icon = menu.icon;
              const isActive = active === menu.name;
              return (
                <a
                  href={`#${menu.name}`}
                  key={i}
                  onClick={() => {
                    setActive(menu.name);
                    setOpen(false);
                  }}
                  className={`relative w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300
                    ${
                      isActive
                        ? "bg-white text-white scale-110"
                        : "text-gray-300 hover:text-white hover:bg-gray-700"
                    }
                  `}
                  title={menu.name}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        )}
      </>
    );
  }
}
