import type {ReactNode} from "react";

interface SubBoxProps {
    titleIcon: ReactNode | null;
    title: string;
    content: ReactNode;
    boxWidth: string;
}

const SubBox = ({titleIcon, title, content, boxWidth}: SubBoxProps) => {
    return <>
        <div className={`border ${boxWidth} shadow-xl`}>
            <div className="flex items-center gap-[8px] pl-[14px] h-[40px] border-b bg-[var(--bg-gray)]">
                {titleIcon}
                <span className="text-[16px]">{title}</span>
            </div>
            <div className="px-[16px] py-[14px] bg-[var(--background)]">
                {content}
            </div>
        </div>
    </>;
}
export { SubBox }