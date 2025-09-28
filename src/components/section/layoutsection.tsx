import type { SectionID } from "../../types/Section.id";


interface LayoutSectionProps {
    id: SectionID;
    children: React.ReactNode;
    className?: string;
    sectionRef?: React.RefObject<HTMLDivElement |null>;
}

const LayoutSection: React.FC<LayoutSectionProps> = ({ ...Props }) => {
    return (
        <section id={Props.id} ref={Props.sectionRef}
            className={`snap-start w-full flex flex-col lg:flex-row gap-4 justify-between items-center 
            ${Props.className}`}>
                
            {Props.children}
        </section>
    );
};

export default LayoutSection;