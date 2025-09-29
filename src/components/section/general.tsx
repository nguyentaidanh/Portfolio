import { ProfileData } from "@/data/personal.data";
import { Card } from "../ui/card";
import { Mail, Phone } from "lucide-react";
import LayoutSection from "./layoutsection";
import { TypingText, TypingTextConst } from "../Hero/TypingText";
 
export default function GeneralSession() {

    return (
        <LayoutSection id="home" >

            <div className="basis-1/3 flex-1 ">
                <img src={ProfileData.avatar} alt="profile" className="w-full h-auto rounded-lg" />
            </div>
            <Card className=" basis-2/3 bg-black/60 border-md border-sky-700 text-left p-4 justify-start  text-white">
                <TypingText fullText={`Hello, I'am ${ProfileData.fullName}`} />
                <h2 className="  text-2xl text-center"><strong>{ProfileData.career}</strong> </h2>
                <h2 className="  text-2xl text-center"><strong>{ProfileData.title}</strong> </h2>
            
                <div className="h-full">
                <TypingTextConst fullText={ProfileData.introduction} typingSpeed={20} />
                </div>
                {/* <p className="mb-2"> {ProfileData.introduction}</p> */}
                <p className="mt-2 inline-flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    {ProfileData.email}
                </p>

                <p className=" inline-flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    {ProfileData.phone}
                </p>

            </Card>

        </LayoutSection>
    )
}
