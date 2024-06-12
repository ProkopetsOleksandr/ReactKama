import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "7d8b5cc8-cfe7-4834-82df-3634a9fb87d3"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
});

const getUsers = (currentPage = 1, pageSize = 10) => {
    return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
}

const follow = (userId) => {
    return axiosInstance.post(`follow/${userId}`);
}

const unfollow = (userId) => {
    return axiosInstance.delete(`follow/${userId}`);
}

const getUserProfile = (userId = 31315) => {
    return axiosInstance.get(`profile/${userId}`)
        .then((response) => {
            console.log(response.data);
            return response.data;
        });
}

const getCurrentUserData = () => {
    return axiosInstance.get(`auth/me`)
        .then((response) => {
            console.log(response.data);
            return response.data;
        });
}

const getStatus = (userId = 31315) => {
    return axiosInstance.get(`profile/status/${userId}`)
        .then((response) => {
            console.log(response.data);
            return response.data;
        });
}

const updateStatus = (status) => {
    return axiosInstance.put("profile/status", {
        status: status
    })
        .then((response) => {
            return response.data;
        });
}

const usersAPI = {
    getUsers,
    follow,
    unfollow,
    getUserProfile,
    getCurrentUserData,
    getStatus,
    updateStatus
};

export default usersAPI;