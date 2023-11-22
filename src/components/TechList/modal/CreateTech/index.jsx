import styles from "./styles.module.scss"
import { useContext } from "react"
import { Input } from "../../../Input"
import { LoginContext } from "../../../../providers/LoginContext"
import { useForm } from "react-hook-form"
import { createTechSchema } from "./createTechSchema"
import { zodResolver } from "@hookform/resolvers/zod";

export const CreateTech = () => {
    const { setCreateTechOpen, createTechForm } = useContext(LoginContext)


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(createTechSchema)
    })

    return (
        <div role="dialog" className={styles.modalOverlay}>
            <div className={styles.modalBox}>
                <div className={styles.modalHeader}>
                    <h2>Cadastrar Tecnologia</h2>
                    <button onClick={() => setCreateTechOpen(false)}>X</button>
                </div>
                <form className={styles.modalForm} onSubmit={handleSubmit(createTechForm)}>
                    <Input label="Nome" id="title" placeholder="Descreva a tecnologia aqui..." {...register("title")} />
                    {errors.title ? <span>{errors.title.message}</span> : null}
                    <label htmlFor="status">Selecionar status</label>
                    <select name="status" id="status" {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <button type="submit">Cadastrar Tecnologia</button>
                </form>
            </div>
        </div>
    )
}