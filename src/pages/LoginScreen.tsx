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

const { Title, Text, Link } = Typography;

const LoginScreen: FC = () => {
    const navigate = useNavigate();

    return (
        <PageContainer>
            {/* Background blur */}
            <div className="absolute backdrop-blur-[35px] h-full left-0 top-0 w-full" />

            {/* Background decorative objects */}
            <div className="absolute h-[1431px] left-[-364px] top-[-356px] w-[1113px]">
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
                    Login here
                </Title>
                <Text
                    style={{
                        display: "block",
                        fontSize: 20,
                        fontWeight: 600,
                        color: "black",
                        marginTop: 41,
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: 1.4
                    }}
                >
                    Welcome back you've
                    <br />
                    been missed!
                </Text>
            </div>

            {/* Form */}
            <div className="absolute flex flex-col gap-[30px] items-end left-[31px] right-[40px] top-[302px]">
                {/* Input fields */}
                <div className="flex flex-col gap-[29px] w-full">
                    <AuthInput type="email" placeholder="Email" focused />
                    <AuthInput type="password" placeholder="Password" />
                </div>

                {/* Forgot password */}
                <Link
                    style={{
                        color: "#1f41bb",
                        fontSize: 14,
                        fontWeight: 600,
                        fontFamily: "'Poppins', sans-serif"
                    }}
                >
                    Forgot your password?
                </Link>

                {/* Action buttons */}
                <div className="flex flex-col gap-[30px] w-full">
                    <PrimaryButton block>Sign in</PrimaryButton>
                    <SecondaryButton block onClick={() => navigate("/register")}>
                        Create new account
                    </SecondaryButton>
                </div>
            </div>

            {/* Social login */}
            <SocialLoginSection className="absolute left-0 right-0 top-[736px]" />
        </PageContainer>
    );
};

export default LoginScreen;