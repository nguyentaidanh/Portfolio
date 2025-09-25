import { motion } from "framer-motion";


interface ProgressBarProps {
    icon?: string;
    name?: string;
    percentage: number;
    color: string;
    active: boolean;
    iconSize?: string;
    className?: string;
}

export default function ProgressBar({ ...props }: ProgressBarProps) {

    return (
        <div className={`space-y-1  w-full flex gap-2 items-center ${props.className} }`}>
            <div className={` flex flex-col justify-center  gap-2 basis-1/3  items-center`} >
                {(props.icon) && <img src={props.icon} className={` text-purple-500 ${(props.iconSize) && (props.iconSize)||('w-10 h-10')}`} /> || <> </>}
                {(props.name) && <span className="font-medium">{props.name}</span> || <> </>}
            </div>

            <div className='bg-gray-300 rounded h-2 flex-grow'>
                <motion.div
                    className="h-2 bg-purple-500 rounded asis-2/3 "
                    initial={{ width: 0 }}
                    animate={{ width: props.active ? `${props.percentage}%` : 0 }}
                    transition={{ duration: 2 }}
                />
            </div>

        </div>
    )
}