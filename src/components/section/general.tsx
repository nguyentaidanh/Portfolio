import { ProfileData } from "@/data/person.data";
import { Card } from "../ui/card";
import { Cake, Mail, MapPinHouse, Phone } from "lucide-react";
import LayoutSection from "./layoutsection";

export default function GeneralSession() {

    return (
        <LayoutSection id="home" >
        
            <div className="basis-1/3  ">
                <img src={ProfileData.avatar} alt="profile" className="w-full h-auto rounded-lg" />
            </div>
            <Card className="basis-2/3 bg-black/60 border-md border-sky-700 text-left p-4 justify-start  text-white">

                <h2 className="mb-2  text-2xl"><strong>{ProfileData.fullName} – {ProfileData.career}</strong> </h2>

                <p className="mb-2 inline-flex items-center gap-2">
                    <MapPinHouse className="w-5 h-5" />
                    {ProfileData.address}
                </p>

                <p className="mb-2 inline-flex items-center gap-2">
                    <Cake className="w-5 h-5" />
                    {ProfileData.birthDate}
                </p>

                <p className="mb-2 inline-flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    {ProfileData.email}
                </p>

                <p className="mb-2 inline-flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    {ProfileData.phone}
                </p>
                
                <p className="mb-2"> {ProfileData.introduction}</p>

                <span></span>
            </Card>

        </LayoutSection>
    )
}
