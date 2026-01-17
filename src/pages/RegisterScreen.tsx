import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";
import {
    PageContainer,
    SocialLoginSection,
    AuthInput,
    PrimaryButton,
    SecondaryButton
} from "@/components";
import bgObjects from "@/assets/bg-objects.png";

const { Title, Text } = Typography;

const RegisterScreen: FC = () => {
    const navigate = useNavigate();

    return (
        <PageContainer>
            {/* Background blur */}
            <div className="absolute backdrop-blur-[35px] h-full left-0 top-0 w-full" />

            {/* Background decorative objects */}
            <div className="absolute h-[1417px] left-[-320px] top-[-356px] w-[1069px]">
                <img alt="" className="w-full h-full object-contain" src={bgObjects} />
            </div>

            {/* Header */}
            <div className="absolute left-0 right-0 text-center top-[97px] px-8">
                <Title
                    level={1}
                    style={{
                        color: "#1f41bb",
                        fontSize: 30,
                        fontWeight: 700,
                        fontFamily: "'Poppins', sans-serif",
                        marginBottom: 0
                    }}
                >
                    Create Account
                </Title>
                <Text
                    style={{
                        display: "block",
                        fontSize: 14,
                        fontWeight: 500,
                        color: "black",
                        marginTop: 21,
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: 1.6
                    }}
                >
                    Create an account so you can explore all the existing jobs
                </Text>
            </div>

            {/* Form */}
            <div className="absolute flex flex-col gap-[53px] left-[31px] right-[40px] top-[243px]">
                {/* Input fields */}
                <div className="flex flex-col gap-[26px] w-full">
                    <AuthInput type="email" placeholder="Email" focused />
                    <AuthInput type="password" placeholder="Password" />
                    <AuthInput type="password" placeholder="Confirm Password" />
                </div>

                {/* Action buttons */}
                <div className="flex flex-col gap-[30px] w-full">
                    <PrimaryButton block>Sign up</PrimaryButton>
                    <SecondaryButton block onClick={() => navigate("/login")}>
                        Already have an account
                    </SecondaryButton>
                </div>
            </div>

            {/* Social login */}
            <SocialLoginSection className="absolute left-0 right-0 top-[736px]" />
        </PageContainer>
    );
};

export default RegisterScreen;