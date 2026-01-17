import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import { antdTheme } from "@/styles/theme";
import WelcomeScreen from "@/pages/welcome-screen";
import LoginScreen from "@/pages/login-screen";
import RegisterScreen from "@/pages/register-screen";

function App() {
    return (
        <ConfigProvider theme={antdTheme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<WelcomeScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/register" element={<RegisterScreen />} />
                </Routes>
            </BrowserRouter>
        </ConfigProvider>
    );
}

export default App;
