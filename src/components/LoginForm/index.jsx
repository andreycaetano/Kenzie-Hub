import { Form } from "../Form";
import { Input } from "../Input";
import { Link } from "react-router-dom";
import { LoginContext } from "../../providers/LoginContext";
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { loginSchema } from "../../scripts/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./styles.scss"



export const LoginForm = () => {
    const {requestLogin} = useContext(LoginContext)
    
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(loginSchema)
    })

    return(
        <>
            <Form className="formLogin" onSubmit={handleSubmit(requestLogin)}>
                <h3>Login</h3>
                <Input id="email" label="Email" placeholder="Digite aqui seu email" {...register("email")}/>
                {errors.email ? <p>{errors.email.message}</p> : null}
                <Input type="password" id="password" label="Senha" placeholder="Digite aqui sua senha" {...register("password")}/>
                {errors.password ? <p>{errors.password.message}</p> : null}
                <button type="submit" className="buttonLogin">Entrar</button>
                <span>Ainda não possui uma conta?</span>
                <Link to={"/register"}>
                    <button className="buttonRegister">Cadastre-se</button>
                </Link>
            </Form>
        </>
    )
}