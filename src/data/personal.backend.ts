import { IMAGES } from "@/constants/images";
import type { ProgressType } from "@/types/progress.type";

export const backend: ProgressType[] = [  

    {
        icon: IMAGES.sqlServer,
        name: "SQL Server",
        percentage: 90,
    },
    {
        icon: IMAGES.postgresql,
        name: "PostgreSQL",
        percentage: 90,
        
    },{
        icon: IMAGES.cSharp,
        name: "C#",
        percentage: 90,
    }
]