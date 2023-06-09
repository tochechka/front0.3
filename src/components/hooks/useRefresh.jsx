import useAuth from "./useAuth";
import apiClient from "../../api";

const UseRefresh = () => {
    const {setAuth} = useAuth();

    const refresh = async () => {
        const info = {'refreshToken': localStorage.refresh_token}

        apiClient
            .post('/auth/refresh', info)
            .then((response) =>{
                setAuth(prev => {
                    return { ...prev, access_token: response.data.access_token}
                });
                localStorage.refresh_token = response.data.refresh_token;
                return response.data.access_token;
            })
    }
    return refresh;
};

export default UseRefresh;