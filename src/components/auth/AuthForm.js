import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";
import {Link} from "react-router-dom";


const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: ${palette.gray[8]};
        margin-bottom: 1rem;
    }
`;

/**
 * 스타일링된 input
 */
const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${palette.gray[5]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;

    &:focus {
        color: $oc-teal-7;
        border-bottom: 1px solid ${palette.gray[7]};
    }

    & + & {
        margin-top: 1rem;
    }
`;

// Styled Select
const StyledSelect = styled.select`
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: #f9f9f9;
    color: #333;

    &:focus {
        outline: none;
        border-color: #007bff;
        background-color: #fff;
    }

    option {
        font-size: 14px;
        color: #333;
        padding: 10px;
        background-color: #fff;

        &:hover {
            background-color: #007bff;
            color: #fff;
        }
    }
`;

// Styled Option (선택적으로 사용)
const StyledOption = styled.option`
  padding: 10px;
  font-size: 14px;
  color: #333;
  background-color: #fff;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;


/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
 */
const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;

    a {
        color: ${palette.gray[6]};
        text-decoration: underline;

        &:hover {
            color: ${palette.gray[9]};
        }
    }
`;

const ButtonWithMarginTop = styled(Button)`
    margin-top: 1rem;
`

const textMap = {
    login: '로그인',
    register: '회원가입'
}


const AuthForm = ({type, form, onChange, onSubmit}) => {

    const text = textMap[type];

    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <StyledInput
                    autoComplete={"mid"}
                    name={"mid"}
                    placeholder={"아이디 입력"}
                    onChange={onChange}
                    value={form.mid}

                />

                <StyledInput
                    type={"password"}
                    autoComplete={"password"}
                    name={"password"}
                    placeholder={"비밀번호 입력"}
                    onChange={onChange}
                    value={form.password}
                />
                {/*<Button cyan fullWidth style={{marginTop : '1rem'}}>로그인</Button>*/}

                {type === 'register' && (
                    <>
                        <StyledInput
                            type={"password"}
                            autoComplete={"passwordConfirm"}
                            name={"passwordConfirm"}
                            placeholder={"비밀번호 재입력"}
                            onChange={onChange}
                            value={form.passwordConfirm}
                        />
                        <StyledInput
                            type={"text"}
                            autoComplete={"name"}
                            name={"name"}
                            placeholder={"이름입력"}
                            onChange={onChange}
                            value={form.name}
                        />

                        <StyledInput
                            type={"text"}
                            autoComplete={"email"}
                            name={"email"}
                            placeholder={"메일입력"}
                            onChange={onChange}
                            value={form.email}
                        />
                        <StyledInput
                            type={"text"}
                            autoComplete={"phone"}
                            name={"phone"}
                            placeholder={"전화입력"}
                            onChange={onChange}
                            value={form.phone}
                        />
                        <StyledInput
                            type={"text"}
                            autoComplete={"tel"}
                            name={"tel"}
                            placeholder={"전화2입력"}
                            onChange={onChange}
                            value={form.tel}
                        />

                        <StyledInput
                            type={"checkbox"}
                            autoComplete={"retirement"}
                            name={"retirement"}
                            placeholder={"퇴직"}
                            onChange={onChange}
                            value={form.retirement}
                        />

                        <StyledInput
                            type={"text"}
                            autoComplete={"social"}
                            name={"social"}
                            placeholder={"SNS"}
                            onChange={onChange}
                            value={form.social}
                        />

                        <StyledInput
                            type={"text"}
                            autoComplete={"zipCode"}
                            name={"zipCode"}
                            placeholder={"ZIP"}
                            onChange={onChange}
                            value={form.zipCode}
                        />
                        <StyledInput
                            type={"text"}
                            autoComplete={"address"}
                            name={"address"}
                            placeholder={"address"}
                            onChange={onChange}
                            value={form.address}
                        />

                        <StyledInput
                            type={"text"}
                            autoComplete={"detailAddress"}
                            name={"detailAddress"}
                            placeholder={"detailAddress"}
                            onChange={onChange}
                            value={form.detailAddress}
                        />

                        <StyledInput
                            type={"text"}
                            autoComplete={"note"}
                            name={"note"}
                            placeholder={"note"}
                            onChange={onChange}
                            value={form.note}
                        />
                        <StyledInput
                            type={"text"}
                            autoComplete={"regDate"}
                            name={"regDate"}
                            placeholder={"regDate"}
                            onChange={onChange}
                            value={form.regDate}
                        />
                        <StyledSelect
                            type={"text"}
                            autoComplete={"roles"}
                            name={"roles"}
                            placeholder={"roles"}
                            onChange={onChange}
                            value={form.roles}
                        >
                            <StyledOption value="EMP">EMP</StyledOption>
                            <StyledOption value="ADMIN">ADMIN</StyledOption>
                        </StyledSelect>

                    </>

                )}


                <ButtonWithMarginTop cyan={"true"} fullWidth>{text}</ButtonWithMarginTop>
            </form>
            <Footer>
                {type === 'login' ? (
                    <Link to={"/register"}>{textMap['register']}</Link>
                ) : (
                    <Link to={"/login"}>{textMap['login']}</Link>
                )}

            </Footer>
        </AuthFormBlock>
    )
}

export default AuthForm;