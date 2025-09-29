import type { SectionID } from "../../types/Section.id";

interface LayoutSectionProps {
  id: SectionID;
  children: React.ReactNode;
  className?: string;
  sectionRef?: React.RefObject<HTMLDivElement | null>;
}

const LayoutSection: React.FC<LayoutSectionProps> = ({ ...Props }) => {
  return (
    <section
      id={Props.id}
      ref={Props.sectionRef}
      className={`snap-start w-full flex flex-col lg:flex-row gap-4 justify-center items-center !p-0
            ${Props.className}`}
    >
      {Props.children}
    </section>
  );
};

export default LayoutSection;
