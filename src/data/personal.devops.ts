import { IMAGES } from "@/constants/images";
import type { ProgressType } from "@/types/progress.type";

export const devOps: ProgressType[] = [
  {
    icon: IMAGES.git,
    name: "Git",
    percentage: 90,
  },
  {
    icon: IMAGES.aws,
    name: "AWS",
    percentage: 90,
    color: "bg-white rounded-lg ",
  },
  {
    icon: IMAGES.docker,
    name: "Docker",
    percentage: 90,
  },
  {
    icon: IMAGES.linux,
    name: "Linux",
    percentage: 90,
    color: "bg-white rounded-lg",
  },
];
