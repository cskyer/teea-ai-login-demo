import type { FC, ReactNode } from "react";

interface PageContainerProps {
    children: ReactNode;
}

const PageContainer: FC<PageContainerProps> = ({ children }) => {
    return (
        <div className="bg-white overflow-hidden relative w-full h-screen max-w-[428px] mx-auto">
            {children}
        </div>
    );
};

export default PageContainer;
