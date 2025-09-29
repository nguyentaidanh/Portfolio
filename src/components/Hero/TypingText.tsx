import { useEffect, useState } from "react";


type TypingTextProps = {
    fullText: string;
    typingSpeed?: number; // Speed in milliseconds for each character
    deletingSpeed?: number; // Speed in milliseconds for each character
    pauseDelay?: number; // time to pause after full text is typed (ms)
};

const TypingText: React.FC<TypingTextProps> = ({ fullText, typingSpeed = 100, deletingSpeed = 50, pauseDelay = 4000 }) => {


    const [displayed, setDisplayed] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);


    useEffect(() => {
        let timer: NodeJS.Timeout;

        const updateText = () => {
            setDisplayed((prev) => {
                if (!isDeleting) {
                    // Đang gõ
                    const next = fullText.slice(0, prev.length + 1);
                    if (next === fullText) {
                        // Gõ xong: chờ rồi bắt đầu xoá
                        setTimeout(() => setIsDeleting(true), pauseDelay);
                    }
                    return next;
                } else {
                    // Đang xoá
                    const next = fullText.slice(0, prev.length - 1);
                    if (next === "") {
                        // Xoá hết: bắt đầu gõ lại
                        setIsDeleting(false);
                    }
                    return next;
                }
            });
        };

        // eslint-disable-next-line prefer-const
        timer = setTimeout(updateText, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [displayed, isDeleting]);

    return (
        <div className="h-12 flex items-center"> {/* ✅ Chiều cao cố định */}
      <span className="text-2xl font-bold leading-none 
                 bg-gradient-to-r from-pink-500 via-green-500 to-blue-500
                 bg-clip-text text-transparent">
        {displayed}
        <span className="animate-pulse">|</span>
      </span>
    </div>

    )
}
const TypingTextConst: React.FC<TypingTextProps> = ({ fullText, typingSpeed = 30 }) => {
 
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(timer);
    }, typingSpeed); // tốc độ gõ (ms/1 ký tự)

    return () => clearInterval(timer);
  }, []);


    return(
 <div className="h-12 flex items-center"> {/* ✅ Chiều cao cố định */}
      <span >
        {displayed}
        <span className="animate-pulse">|</span>
      </span>
    </div>

    );


}

export { TypingText, TypingTextConst };