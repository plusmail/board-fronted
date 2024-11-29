import client from './client';

// 로그인
export const login = ({ username, password }) => {

    return client.post('http://localhost:8080/member/login-proc', {username, password});
}

// 회원가입
export const register = ({
                             mid,
                             name,
                             password,
                             email,
                             phone,
                             tel,
                             retirement,
                             social,
                             zipCode,
                             address,
                             detailAddress,
                             note,
                             regDate,
                             roles }) =>
    client.post('http://localhost:8080/admin_management/save', { mid,
        name,
        password,
        email,
        phone,
        tel,
        retirement,
        social,
        zipCode,
        address,
        detailAddress,
        note,
        regDate,
        roles });

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');

// 로그아웃
export const logout = () => client.post('/api/auth/logout');