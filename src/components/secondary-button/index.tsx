import { Button } from "antd";
import type { FC, ReactNode, CSSProperties } from "react";
import { COLORS, SIZES } from "@/styles/theme";

interface SecondaryButtonProps {
    children: ReactNode;
    onClick?: () => void;
    block?: boolean;
    width?: number;
    variant?: "outline" | "text";
}

const SecondaryButton: FC<SecondaryButtonProps> = ({
    children,
    onClick,
    block = false,
    width,
    variant = "text"
}) => {
    const isOutline = variant === "outline";

    const style: CSSProperties = isOutline
        ? {
            width: block ? undefined : width,
            height: SIZES.buttonHeight.large,
            backgroundColor: COLORS.background.white,
            color: COLORS.text.primary,
            border: "none"
        }
        : {
            width: block ? undefined : width,
            height: SIZES.buttonHeight.medium,
            color: COLORS.text.secondary
        };

    return (
        <Button
            type={isOutline ? "default" : "text"}
            size="large"
            block={block}
            onClick={onClick}
            style={style}
        >
            {children}
        </Button>
    );
};

export default SecondaryButton;