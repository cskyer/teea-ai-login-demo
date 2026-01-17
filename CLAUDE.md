# CLAUDE.md

此文件为 Claude Code (claude.ai/code) 提供本仓库的开发指南。

## 项目概述

TEEA 登录页面演示项目。基于 Figma 设计的移动端优先登录/引导页面 UI 实现。

## 技术栈

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- React Router DOM 7
- Ant Design 5 + @ant-design/icons

## 项目结构

```
src/
├── assets/          # 图片资源（图标、背景、插图）
├── components/      # 公共组件
│   ├── index.ts           # 组件导出入口
│   ├── PageContainer.tsx  # 页面容器组件
│   ├── AuthInput.tsx      # 认证输入框组件
│   ├── PrimaryButton.tsx  # 主按钮组件
│   ├── SecondaryButton.tsx # 次按钮组件
│   └── SocialLoginSection.tsx # 社交登录组件
├── pages/           # 页面组件
│   ├── WelcomeScreen.tsx   # 欢迎/引导页面
│   ├── LoginScreen.tsx     # 登录页面
│   └── RegisterScreen.tsx  # 注册页面
├── styles/          # 样式配置
│   └── theme.ts          # Ant Design 主题配置
├── App.tsx          # 主应用组件（ConfigProvider）
├── main.tsx         # 入口文件
└── index.css        # 全局样式（Tailwind）
```

## 公共组件

| 组件 | 说明 |
|------|------|
| PageContainer | 页面容器，包含最大宽度限制和居中 |
| AuthInput | 带样式的认证输入框，支持 email/password 类型 |
| PrimaryButton | 主要操作按钮（蓝色，带阴影） |
| SecondaryButton | 次要操作按钮（outline/text 变体） |
| SocialLoginSection | 社交登录区域（Google/Facebook/Apple） |

## 开发命令

```bash
npm install    # 安装依赖
npm run dev    # 启动开发服务器 (http://localhost:5173)
npm run build  # 生产环境构建
npm run preview # 预览生产构建
```

## 设计参考

Figma: https://www.figma.com/design/UF131xDrOBPAtcdkbIGz6Z/Onboarding--Login---Register---App-Ui--Community-

## 路由

| 路径 | 页面 | 说明 |
|------|------|------|
| `/` | WelcomeScreen | 欢迎/引导页面 |
| `/login` | LoginScreen | 登录页面 |
| `/register` | RegisterScreen | 注册页面 |

## 主题配置

项目使用 Ant Design ConfigProvider 统一管理全局样式，配置文件位于 `src/styles/theme.ts`。

### 设计令牌（Design Tokens）

```typescript
COLORS = {
    primary: "#1f41bb",        // 主色调
    primaryLight: "#f1f4ff",   // 浅色背景
    primaryShadow: "#cbd6ff",  // 按钮阴影
    text: { primary, secondary, muted },
    background: { white, gray }
}

SIZES = {
    borderRadius: 10,
    buttonHeight: { large: 54, medium: 44 },
    fontSize: { xs: 14, sm: 16, md: 20, lg: 30, xl: 35 }
}
```

### 样式规范

- 移动端优先设计（最大宽度：428px）
- 主色调：#1f41bb
- 字体：Poppins（Google Fonts）
- 圆角：按钮/输入框使用 10px