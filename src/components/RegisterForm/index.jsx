import { useForm } from "react-hook-form"
import { Form } from "../Form"
import { Input } from "../Input"
import { registerSchema } from "../../scripts/formSchema"
import {zodResolver} from "@hookform/resolvers/zod"
import styles from "./styles.scss"
import { useContext } from "react"
import { LoginContext } from "../../providers/LoginContext"


export const RegisterForm = () => {
    const {userRegister} = useContext(LoginContext)

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(registerSchema)
    })

    return (
        <Form className="form" onSubmit={handleSubmit(userRegister)} noValidate>
            <div>
                <h3>Crie sua conta</h3>
                <span>Rapido e grátis, vamos nessa</span>
            </div>
            <Input id="name" label="Nome" placeholder="Digite aqui seu nome" {...register("name")}/>
            {errors.name ? <p>{errors.name.message}</p> : null}
            <Input id="email" label="Email" placeholder="Digite aqui seu email" {...register("email")}/>
            {errors.email ? <p>{errors.email.message}</p> : null}
            <Input type="password" id="password" label="Senha" placeholder="Digite aqui sua senha" {...register("password")}/>
            {errors.password ? <p>{errors.password.message}</p> : null}
            <Input type="password" id="confirmPassword" label="Confirmar Senha" placeholder="Digite novamente sua senha" {...register("confirmPassword")}/>
            {errors.confirmPassword ? <p>{errors.confirmPassword.message}</p> : null}
            <Input id="bio" label="Bio" placeholder="Fale sobre você" {...register("bio")}/>
            {errors.bio ? <p>{errors.bio.message}</p> : null}
            <Input id="contact" label="contato" placeholder="Opção de contato" {...register("contact")}/>
            {errors.contact ? <p>{errors.contact.message}</p> : null}
            <label htmlFor="module">Selecionar módulo</label>
            <select id="module" {...register("course_module")}>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
            </select>
            {errors.curse_module ? <p>{errors.curse_module.message}</p> : null}
            <button type="submit">Cadastrar</button>
        </Form>
    )
}