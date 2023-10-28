import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import 'boxicons';
import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    const { register: registerEdit, handleSubmit: handleSubmitEdit, setValue: setValueEdit, reset: resetEdit} = useForm();
    const navigate = useNavigate();

    function login(data){
        // fetch('url',{
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // })
        console.log(data);
        if(data.level === 'admin'){
            navigate('/dashboard');
            return
        }
        if(data.level !== 'admin'){
            navigate('/');
            return
        }

    }

    function setarDados(){
        setValue('email', 'melissa@gmail.com');
        setValue('senha', 'abcd1234');
        setTimeout(() => {
            reset();
        }, 2000);
    }

    return (
        <>
            <LoginContainer>
                <LoginForm autoComplete="off" onSubmit={handleSubmit(login)}>
                    <h3>Acesse sua conta</h3>
                    <p>Novo cliente? Então registre-se <Link onClick={setarDados}>aqui</Link></p>
                    <div className="input-field">
                        <input
                            type="text"
                            id="email"
                            placeholder="Digite seu email"
                            autoComplete="off"
                            {...register('email', { required: true })}
                            required
                        />
                        <label htmlFor="email">Login *{errors.email?.type === 'required' && '(Este campo é obrigatório)'}</label>
                    </div>
                    <div className="input-field">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="senha"
                            placeholder="******"
                            autoComplete="new-password"
                            {...register('senha', { required: true })}
                            required
                        />
                        <label htmlFor="senha">Senha *</label>
                        <box-icon
                            name={ showPassword ? 'show' : 'hide'}
                            onClick={() => setShowPassword(!showPassword)}
                        ></box-icon>
                    </div>
                    <Link to={'/auth/remenber-password'}>Esqueci minha senha</Link>
                    <button type="submit">Acessar conta</button>
                    <div className="social-login">
                        Ou faça login com
                        <box-icon type='logo' name='gmail'></box-icon>
                        <box-icon type='logo' name='facebook-circle'></box-icon>
                    </div>
                </LoginForm>
                <LoginBG />
            </LoginContainer>
        </>
    );
}

const LoginContainer = styled.div`
    padding: 120px 100px 160px 100px;
    background-image: linear-gradient(#B5B6F2, #EFEFFF);
    display: flex;
    align-items: center;
`;
const LoginForm = styled.form`
    width: 500px;
    background-color: #FFFFFF;
    border-radius: 4px;
    padding: 30px;

    & h3{
        font-size: 32px;
        line-height: 36px;
        letter-spacing: 1px;
        color: #1f1f1f;
        margin-bottom: 20px;
    }

    & p {
        font-size: 16px;
        line-height: 28px;
        letter-spacing: .75px;
        color: #474747;
        margin-bottom: 30px;
        & a{
            display: initial;
            margin: 0;
        }
    }

    & .input-field{
        width: 100%;
        height: 90px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin-bottom: 16px;
        & input{
            height: 60px;
            border-radius: 4px;
            background-color: #47474710;
            padding-left: 16px;
            &::placeholder{
                color: transparent;
                transition-duration: 200ms;
            }
            &:focus::placeholder{
                color: #47474770;
            }
            &:focus + label,
            &:valid + label{
                bottom: 60px;
                left: 0;
                transform: scale(.7,.7);
            }
        }
        & label{
            font-weight: bold;
            color: #474747;
            font-size: 16px;
            letter-spacing: .75px;
            line-height: 30px;
            position: absolute;
            bottom: 15px;
            left: 16px;
            transition-duration: 200ms;
        }
        & box-icon{
            position: absolute;
            bottom: 18px;
            right: 16px;
            opacity: .6;
            cursor: pointer;
            transition-duration: 200ms;
            &[name='show']{
                opacity: 1;
            }
        }
    }

    & a{
        display: block;
        margin: 30px 0;
        color: #474747;
        text-decoration: underline;
        &:hover{
            color: var(--pink);
        }
    }

    & button{
        width: 100%;
        height: 48px;
        border-radius: 4px;
        background-color: var(--pink);
        color: #FFFFFF;
        font-weight: bold;
        font-size: 16px;
        letter-spacing: .75px;
        margin-bottom: 30px;
        cursor: pointer;
        transition-duration: 200ms;
        &:hover{
            background-color: var(--dark-pink);
        }
    }

    & .social-login{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        & box-icon:hover{
            fill: var(--pink);
            cursor: pointer;
        }
    }

`;
const LoginBG = styled.img``;


export default LoginPage;