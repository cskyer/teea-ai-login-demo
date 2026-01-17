import { Button } from "antd";
import type { FC, ReactNode } from "react";

interface PrimaryButtonProps {
    children: ReactNode;
    onClick?: () => void;
    block?: boolean;
    width?: number;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
    children,
    onClick,
    block = false,
    width
}) => {
    return (
        <Button
            type="primary"
            size="large"
            block={block}
            onClick={onClick}
            style={{ width: block ? undefined : width }}
        >
            {children}
        </Button>
    );
};

export default PrimaryButton;