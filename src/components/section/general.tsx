import { ProfileData } from "@/data/personal.data";
import { Mail, Phone } from "lucide-react";
import { TypingText, TypingTextConst } from "../Hero/TypingText";
import { Card } from "../ui/card";
import LayoutSection from "./layoutsection";

export default function GeneralSession() {
  return (
    <LayoutSection id="home">
      <div className="lg:basis-1/3 items-end justify-end lg:items-center lg:justify-center">
        <img
          src={ProfileData.avatar}
          alt="profile"
          className="lg:w-full w-32 "
        />
      </div>
      <Card className=" lg:basis-2/3 bg-black/60 border-md border-sky-700 text-left p-2 lg:p-4 justify-start  text-white">
        <TypingText fullText={`Hello, I'am ${ProfileData.fullName}`} />
        <span className="text-md lg:text-2xl font-bold">
          <h2 className="  text-center">
            <strong>{ProfileData.career}</strong>{" "}
          </h2>
          <h2 className=" text-center">
            <strong>{ProfileData.title}</strong>{" "}
          </h2>
        </span>
        <div className=" h-36  flex items-center text-sm lg:text-2xl">
          <TypingTextConst
            fullText={ProfileData.introduction}
            typingSpeed={20}
          />
        </div>
        {/* <p className="mb-2"> {ProfileData.introduction}</p> */}
        <span className="text-md lg:text-2xl font-bold flex flex-col gap-2 lg:gap-4">
          <p className=" inline-flex items-center gap-2 text-xs lg:text-xl">
            <Mail className="w-5 h-5" />
            {ProfileData.email}
          </p>

          <p className=" inline-flex items-center gap-2 text-xs lg:text-xl">
            <Phone className="w-5 h-5" />
            {ProfileData.phone}
          </p>
        </span>
      </Card>
    </LayoutSection>
  );
}
