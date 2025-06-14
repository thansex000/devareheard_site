import { useDispatch, useSelector, } from 'react-redux';
import type { RootState } from '../store';
import { useNavigate } from 'react-router-dom';
import type { IStoreUser } from '@/models/IUser';
import { login, logout } from '@/store/userSlice';
import { PATH } from '@/lib/config';


// chỉ xử lý sau khi giải quyết từ backend 

export const useAuth = () => {
    const auth = useSelector((state: RootState) => state.userSlice.user);
    return auth;
};
export const useUser = () => {
    const user = useSelector((state: RootState) => state.userSlice.user);
    return user;
};
export const useRefreshToken = () => {
    const refreshToken = useSelector((state: RootState) => state.userSlice.user.refreshtoken);
    return refreshToken;
};
export const useAccessToken = () => {
    const accessToken = useSelector((state: RootState) => state.userSlice.accesstoken);
    return accessToken;
};
export const useLogin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (user: IStoreUser) => {
        dispatch(login(user))
        navigate(PATH.HOME)
    }
}
export const useLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return () => {
        dispatch(logout());
        navigate(PATH.LOGIN);
    };
};
export const useUpdateUser = (user: IStoreUser) => {
    const dispatch = useDispatch();
    dispatch(login(user));
};