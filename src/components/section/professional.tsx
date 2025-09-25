
import { Card } from "../ui/card";
import LayoutSection from "./layoutsection";
import { ProfileData } from "@/data/person.data";
import ProgressBar from "../Hero/progressBar";
import { useEffect, useRef, useState } from "react";
import { IMAGES } from "@/constants/images";



export default function ProfessionalSection() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.3 } // 30% section xuất hiện thì trigger
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);


    return (
        <LayoutSection id="about" sectionRef={sectionRef}>
            <div className="basis-1/3  ">
                <img src={IMAGES.portfolio} alt="profile" className="w-full h-auto rounded-lg" />
            </div>
            <div className="basis-2/3 justify-center gap-4 grid grid-cols-1 md:grid-cols-2">

                <Card className=" bg-black/60 border-md border-sky-700 text-left p-4 justify-start h-full text-white ">
                    <h2 className="mb-4 text-2xl"><strong>Main skills</strong> </h2>
                    <div className="grid grid-cols-2 gap-4">
                        {ProfileData.skills.map((skill) => ( 
                                <ProgressBar
                                    icon={skill.icon}
                                    name={skill.name}
                                    percentage={skill.percentage}
                                    color={skill.color}
                                    active={isVisible}
                                />
                        ))}
                    </div>

                </Card>
                <Card className="  bg-black/60 border-md border-sky-700 text-left p-4 justify-start h-full text-white ">
                    <h2 className="mb-4 text-2xl "><strong>Sub skills</strong> </h2>
                    <div className="mb-4 grid grid-cols-6 gap-6">
                        {ProfileData.subSkills.map((skill) => (
                            <div key={skill.name} className="h-full">
                                <img src={skill.icon} className="h-10 w-10" />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>

                </Card>
            </div>
        </LayoutSection>

    )
}