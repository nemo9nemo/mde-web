import { useState } from "react";
import api from "../api/axios";

function Login() {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();
        
        try {
            const res = await api.post("/login", { id, pw });
        
            localStorage.setItem("access_token", res.data.access_token);
            localStorage.setItem("refresh_token", res.data.refresh_token);

            setMessage("[Success] 로그인 성공");
        }
        catch (err) {
        setMessage(`[Error] ${err.response?.data?.error || "로그인 실패"}`);
        }
    };

    return (
        <div style={{ alignItems: "center", width: "100%" }}>
            <div style={{ margin: "80px auto", textAlign: "center" }}>
                <h2>로그인</h2>
                <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <input
                        type="text"
                        value={id}
                        placeholder="아이디"
                        onChange={(e) => setId(e.target.value)}
                        style={{ padding: "10px", fontSize: "14px" }}
                    />
                    
                    <input
                        type="password"
                        value={pw}
                        placeholder="비밀번호"
                        onChange={(e) => setPw(e.target.value)}
                        style={{ padding: "10px", fontSize: "14px" }}
                    />
                    <button
                        type="submit"
                        style={{
                            padding: "10px",
                            fontSize: "16px",
                            cursor: "pointer",
                            backgroundColor: "#007bff",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                        }}
                    >
                    로그인
                    </button>
                </form>
                <p style={{ marginTop: "20px", fontWeight: "bold" }}>{message}</p>
            </div>
        </div>
    );
}

export default Login;
