import axios from "axios";

const api = axios.create({
    // TODO: 실제 서버 주소로 변경 필요
    baseURL: "http://localhost:8080",    // mde-api-server 서버 주소
    header: {
        "Content-Type": "application/json"
    }
})

export default api;