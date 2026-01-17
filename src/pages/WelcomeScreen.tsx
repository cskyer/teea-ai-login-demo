import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";
import { PageContainer, PrimaryButton, SecondaryButton } from "@/components";
import ellipse1 from "@/assets/ellipse1.png";
import ellipse2 from "@/assets/ellipse2.png";
import floor from "@/assets/floor.png";
import plant from "@/assets/plant.png";
import person from "@/assets/person.png";
import element from "@/assets/element.png";

const { Title, Text } = Typography;

const WelcomeScreen: FC = () => {
    const navigate = useNavigate();

    return (
        <PageContainer>
            {/* Background blur overlay */}
            <div className="absolute backdrop-blur-[25px] bg-white/47 h-full left-0 top-0 w-full" />

            {/* Decorative borders at bottom left */}
            <div className="absolute flex items-center justify-center left-[-323px] w-[500px] h-[500px] top-[625px]">
                <div className="rotate-[27deg]">
                    <div className="border-2 border-[#f1f4ff] w-[372px] h-[372px]" />
                </div>
            </div>
            <div className="absolute border-2 border-[#f1f4ff] left-[-265px] w-[372px] h-[372px] top-[684px]" />

            {/* Background ellipses */}
            <div className="absolute left-[57px] w-[496px] h-[496px] top-[-142px]">
                <img alt="" className="w-full h-full" src={ellipse2} />
            </div>
            <div className="absolute left-[148px] w-[635px] h-[635px] top-[-327px]">
                <img alt="" className="w-full h-full" src={ellipse1} />
            </div>

            {/* Welcome illustration */}
            <div className="absolute flex items-center justify-center left-[22px] px-[11px] py-[52px] top-[50px] w-[384px] h-[422px]">
                <div className="relative w-[363px] h-[370px] overflow-hidden">
                    <div className="absolute bottom-[23px] left-0 right-[5px]">
                        <img alt="" className="w-full" src={floor} />
                    </div>
                    <div className="absolute right-[-6px] bottom-[23px] w-[162px]">
                        <img alt="" className="w-full" src={plant} />
                    </div>
                    <div className="absolute left-[31px] top-[16px] w-[218px]">
                        <img alt="" className="w-full" src={person} />
                    </div>
                    <div className="absolute right-[-6px] top-[197px] w-[77px]">
                        <img alt="" className="w-full" src={element} />
                    </div>
                </div>
            </div>

            {/* Text content */}
            <div className="absolute left-0 right-0 text-center top-[519px] px-[42px]">
                <Title
                    level={1}
                    style={{
                        color: "#1f41bb",
                        fontSize: 35,
                        fontWeight: 600,
                        fontFamily: "'Poppins', sans-serif",
                        marginBottom: 16,
                        lineHeight: 1.2
                    }}
                >
                    Discover Your Dream Job here
                </Title>
                <Text
                    style={{
                        fontSize: 14,
                        color: "black",
                        fontFamily: "'Poppins', sans-serif"
                    }}
                >
                    Explore all the existing job roles based on your interest and study major
                </Text>
            </div>

            {/* Action buttons */}
            <div className="absolute flex gap-[30px] left-[39px] top-[778px]">
                <PrimaryButton width={160} onClick={() => navigate("/login")}>
                    Login
                </PrimaryButton>
                <SecondaryButton width={160} variant="outline" onClick={() => navigate("/register")}>
                    Register
                </SecondaryButton>
            </div>
        </PageContainer>
    );
};

export default WelcomeScreen;
