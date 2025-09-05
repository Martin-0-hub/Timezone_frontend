import api from "../api/axios"

export const register = async (username:string,email:string,password:string,confirmpassword:string) => {
    const response = await api.post("/api/auth/register",{
        username,
        email,
        password,
        confirmpassword
    });
    return response.data;
}

export const login = async (username:string,password:string) => {
    const response = await api.post("/login",{
        username,
        password,
    });
    return response.data;
}

export const getMe = async (token: string) => {
    const response = await api.get("/me/", {
        headers: {Authorization:`Bearer ${token}`},
    });
    return response.data;
}