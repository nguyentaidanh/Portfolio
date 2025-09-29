


import ContactSection from "../section/contact";
import GeneralSession from "../section/general";
import ProfessionalSection from "../section/professional";


export default function BodyPage() {
    return (
        <div className="snap-y snap-mandatory h-screen ">
            <GeneralSession />
            <p className=" m-12 " />
            <ProfessionalSection />

            <p className=" m-12 " />
            <GeneralSession />
            <p className=" m-12 " />
            <ContactSection />
        </div>
    )
}