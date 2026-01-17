import { Input } from "antd";
import type { FC, CSSProperties, ChangeEvent } from "react";
import { COLORS } from "@/styles/theme";

interface AuthInputProps {
    type?: "text" | "email" | "password";
    placeholder: string;
    focused?: boolean;
    value?: string;
    onChange?: (value: string) => void;
}

const AuthInput: FC<AuthInputProps> = ({
    type = "text",
    placeholder,
    focused = false,
    value,
    onChange
}) => {
    const style: CSSProperties = {
        backgroundColor: COLORS.primaryLight,
        borderColor: focused ? COLORS.primary : "transparent"
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        onChange?.(e.target.value);
    };

    if (type === "password") {
        return (
            <Input.Password
                placeholder={placeholder}
                size="large"
                value={value}
                onChange={handleChange}
                style={style}
            />
        );
    }

    return (
        <Input
            type={type}
            placeholder={placeholder}
            size="large"
            value={value}
            onChange={handleChange}
            style={style}
        />
    );
};

export default AuthInput;