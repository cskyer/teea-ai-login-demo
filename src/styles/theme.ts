import type { ThemeConfig } from "antd";

// 设计系统颜色
export const COLORS = {
    primary: "#1f41bb",
    primaryLight: "#f1f4ff",
    primaryShadow: "#cbd6ff",
    text: {
        primary: "#0a0a0a",
        secondary: "#494949",
        muted: "#626262"
    },
    background: {
        white: "#ffffff",
        gray: "#ececec"
    }
} as const;

// 设计系统尺寸
export const SIZES = {
    borderRadius: 10,
    buttonHeight: {
        large: 54,
        medium: 44
    },
    fontSize: {
        xs: 14,
        sm: 16,
        md: 20,
        lg: 30,
        xl: 35
    }
} as const;

// Ant Design 主题配置
export const antdTheme: ThemeConfig = {
    token: {
        // 主色调
        colorPrimary: COLORS.primary,
        colorLink: COLORS.primary,

        // 圆角
        borderRadius: SIZES.borderRadius,
        borderRadiusLG: SIZES.borderRadius,

        // 字体
        fontFamily: "'Poppins', sans-serif",
        fontSize: SIZES.fontSize.sm,

        // 控件尺寸
        controlHeight: SIZES.buttonHeight.medium,
        controlHeightLG: SIZES.buttonHeight.large
    },
    components: {
        Button: {
            primaryShadow: `0px 10px 20px 0px ${COLORS.primaryShadow}`,
            fontWeight: 600,
            contentFontSizeLG: SIZES.fontSize.md
        },
        Input: {
            activeBorderColor: COLORS.primary,
            hoverBorderColor: COLORS.primary,
            paddingBlock: 16,
            paddingInline: 20
        },
        Typography: {
            fontWeightStrong: 700
        }
    }
};
