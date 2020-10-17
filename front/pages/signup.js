import React, { useState, useCallback } from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import { Form, Input, Checkbox, Button } from "antd";
import useInput from '../hooks/useInput';

// export const useInput = (initValue = null) => {
//     const [value, setter] = useState(initValue);
//     const handler = useCallback((e) => {
//         setter(e.target.value);
//     }, []);
//     return [value, handler];
// };


const Signup = () => {
    const [id, onChangeId] = useInput("");
    const [nick, onChangeNick] = useInput("");
    const [password, onChangePassword] = useInput("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);


    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }

        console.log("회원 가입 정보 : id, nick : ", id, nick);

    },[password, passwordCheck, term]);

    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
    }, []);
    const onChangePasswordCheck = useCallback(
        (e) => {
            setPasswordError(e.target.value !== password);
            setPasswordCheck(e.target.value);
        },
        [password]
    );

    return (
        <AppLayout>
            <Head>
                <title>회원 가입 | NodeBird</title>
            </Head>
            <Form onFinish={onSubmit} style={{ padding: 10 }}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input
                        name="user-id"
                        value={id}
                        required
                        onChange={onChangeId}
                    />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br />
                    <Input
                        name="user-nick"
                        value={nick}
                        required
                        onChange={onChangeNick}
                    />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input
                        name="user-password"
                        type="password"
                        value={password}
                        required
                        onChange={onChangePassword}
                    />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br />
                    <Input
                        name="user-password-check"
                        type="password"
                        value={passwordCheck}
                        required
                        onChange={onChangePasswordCheck}
                    />
                    {passwordError && (
                        <div style={{ color: "red" }}>
                            비밀번호가 일치하지 않습니다.
                        </div>
                    )}
                </div>
                <div>
                    <Checkbox
                        name="user-term"
                        checked={term}
                        onChange={onChangeTerm}
                    >
                        제로초 말을 잘 들을 것을 동의합니다.
                    </Checkbox>
                    {termError && (
                        <div style={{ color: "red" }}>
                            약관에 동의하셔야 합니다.
                        </div>
                    )}
                </div>
                <div style={{ marginTop: 10 }}>
                    <Button type="primary" htmlType="submit">
                        가입하기
                    </Button>
                </div>
            </Form>
        </AppLayout>
    );
};

export default Signup;

