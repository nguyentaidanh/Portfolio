import { ProfileData } from "@/data/personal.data";
import { Card } from "../ui/card";
import LayoutSection from "./layoutsection";
// import ProgressBar from "../Hero/progressBar";
import { theme } from "@/assets/theme/themeColor";
import { useRef } from "react";
import { Separator } from "../ui/separator";

export default function ProfessionalSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <LayoutSection
      id="about"
      sectionRef={sectionRef}
      className="!items-start !pt-10 "
    >
      <div className="justify-center w-full gap-2 grid grid-cols-1 ">
        <h1 className="text-white font-bold">What I Do</h1>
        <h2 className="text-white">Service & Expertise</h2>
        <div className=" grid lg:grid-cols-3 w-full gap-2">
          {ProfileData.experience.map((skill) => (
            <Card
              className=" flex flex-row items-center justify-start gap-2 bg-black/60 border-md border-sky-700 text-left p-2 h-full text-white "
              key={skill.name}
            >
              <img src={skill.icon} className="h-10 w-10" />
              <span>{skill.name}</span>
            </Card>
          ))}
        </div>
        <h1 className="text-white">Tech Stack</h1>
        <div className="grid lg:grid-cols-3 gap-2">
          <Card className="bg-black/60 border-md  text-center p-4 h-full text-white justify-center">
            <h2>Fontend</h2>
            <Separator className={`bg-[${theme.colors.border}] `} />
            <div className="grid grid-cols-2 gap-2 mt-2">
              {ProfileData.fontend.map((skill) => (
                <div
                  className="flex flex-row gap-2 rounded-lg "
                  key={skill.name}
                >
                  <img
                    src={skill.icon}
                    className={`h-5 w-5 rounded-lg ${skill.color}`}
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="bg-black/60 border-md border-sky-700 text-center p-4 h-full text-white">
            <h2>Backend & Database</h2>
            <Separator className={`bg-[${theme.colors.border}] `} />
            <div className="grid grid-cols-2 gap-2 mt-2">
              {ProfileData.backend.map((skill) => (
                <div
                  className="flex flex-row gap-2 rounded-lg "
                  key={skill.name}
                >
                  <img
                    src={skill.icon}
                    className={`h-5 w-5 rounded-lg ${skill.color}`}
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="bg-black/60 border-md border-sky-700 text-center p-4 h-full text-white">
            <h2>Tools & DevOps</h2>
            <Separator className={`bg-[${theme.colors.border}] `} />
            <div className="grid grid-cols-2 gap-2 mt-2">
              {ProfileData.devOps.map((skill) => (
                <div
                  className="flex flex-row gap-2 rounded-lg "
                  key={skill.name}
                >
                  <img
                    src={skill.icon}
                    className={`h-5 w-5 rounded-lg ${skill.color}`}
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </LayoutSection>
  );
}
