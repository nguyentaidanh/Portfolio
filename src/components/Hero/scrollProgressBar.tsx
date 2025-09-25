import { useEffect, useState } from "react";


export default function ScrollProgressBar() {

    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;// chiều cao hiện tại đã cuộn
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // tổng chiều cao của tài liệu - đi chiều cao của viewport
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScrollPercentage(scrollPercent);

        };
        window.addEventListener("scroll", handleScroll);

        // cleanup khi component unmount
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
            <div
                className="h-1 bg-gradient-to-r from-green-400 to-blue-600 transition-all duration-500"
                style={{ width: `${scrollPercentage}%` }}
            />
        </div>
    );
}