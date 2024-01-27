import { useMutation, useQuery } from "react-query"
import { API, queryClient } from "../service";

export const useUsers = () => {
    return useQuery(['get-users'], async () => {
        const response = await API.get('users');
        return response.data;
    });
}

export const useUserCreate = () => {
    return useMutation(async (data) => {
        const response = await API.post('users', data);
        return response.data;
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(['get-users']);
        }
    });
};

export const useUserDelete = () => {
    return useMutation(async (id) => {
        return await API.delete(`users/${id}`);
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(['get-users']);
        }
    });
}