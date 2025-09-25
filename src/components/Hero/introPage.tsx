import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import GalaxyBackground from "../Hero/galaxyBackground";

export default function IntroPage() {
    const [isShow, setIsShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShow(false);
        }, 3000); // 3 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isShow && (
                <motion.div
                    key="intro"
                    className="fixed inset-0 z-50 flex items-center justify-center text-white flex-col gap-4 bg-black bg-opacity-75 backdrop-blur-sm"
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                >
                    <GalaxyBackground />
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl font-bold"
                    >
                        Hi, My name is Danh!
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8 }}

                    >
                        I'm a fullstack Developer
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}   