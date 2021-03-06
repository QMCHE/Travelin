import React, { ChangeEvent } from "react";
import "./Auth.scss";
import { Link } from "react-router-dom";

interface Props {
    id: string;
    password: string;
    handleChange(type: string, e: ChangeEvent<HTMLInputElement>): void;
    login(): any;
}

const Login: React.SFC<Props> = ({ id, password, handleChange, login }) => {
    const handleClick = async () => {
        const data = await login();

        if(data === undefined) {
            alert("서버에 연결할 수 없습니다.");
        } else if(data.status === 200) {
            localStorage.setItem("token", data.data.token);
            window.location.href = "/";
        } else {
            alert(data.message);
        }
    }

    return (
        <div className="Form">
            <div className="Form-Content">
                <div className="Form-Content-Title">
                    <Link to="/">Travelin</Link>
                </div>
                <input type="text" value={id} placeholder="ID" onChange={e => handleChange("id", e)} />
                <input type="password" value={password} placeholder="PASSWORD" onChange={e => handleChange("password", e)} />
                <button onClick={() => handleClick()}>LOGIN</button>
                <div className="Form-Content-Register">
                    <span>If you don't have an account, <a href="/auth/register">Click here!</a></span>
                </div>
            </div>
        </div>
    );
}

export default Login;