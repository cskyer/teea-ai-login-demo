import { Button, Typography } from "antd";
import { GoogleOutlined, FacebookFilled, AppleFilled } from "@ant-design/icons";
import type { FC, ReactNode, CSSProperties } from "react";
import { COLORS, SIZES } from "@/styles/theme";

const { Text } = Typography;

const SOCIAL_BUTTON_STYLE: CSSProperties = {
    width: 60,
    height: SIZES.buttonHeight.medium,
    borderRadius: SIZES.borderRadius,
    backgroundColor: COLORS.background.gray,
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

interface SocialButtonProps {
    icon: ReactNode;
}

const SocialButton: FC<SocialButtonProps> = ({ icon }) => {
    return (
        <Button
            icon={icon}
            style={SOCIAL_BUTTON_STYLE}
        />
    );
};

interface SocialLoginSectionProps {
    className?: string;
}

const SocialLoginSection: FC<SocialLoginSectionProps> = ({ className = "" }) => {
    return (
        <div className={`flex flex-col gap-5 items-center ${className}`}>
            <Text style={{ color: COLORS.primary }}>
                Or continue with
            </Text>
            <div className="flex gap-2.5">
                <SocialButton icon={<GoogleOutlined style={{ fontSize: 24 }} />} />
                <SocialButton icon={<FacebookFilled style={{ fontSize: 24 }} />} />
                <SocialButton icon={<AppleFilled style={{ fontSize: 24 }} />} />
            </div>
        </div>
    );
};

export default SocialLoginSection;