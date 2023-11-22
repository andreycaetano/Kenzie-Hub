import { useContext } from "react"
import { Input } from "../../../Input"
import { LoginContext } from "../../../../providers/LoginContext"
import { useForm } from "react-hook-form"
import { editTechSchema } from "./editTechSchema";
import styles from "./styles.module.scss"

export const EditTech = () => {
    const { setEditTechOpen, editingTech, setEditingTech, updateTech } = useContext(LoginContext)
    const { register, handleSubmit } = useForm({
        values: {
            title: editingTech.title,
            status: editingTech.status
        }
    })

    const submit = (formData) => {
        updateTech({ status: formData.status }, editingTech.id)
    }

    return (
        <div role="dialog" className={styles.modalOverlay}>
            <div className={styles.modalBox}>
                <div className={styles.modalHeader}>
                    <h2>Tecnologia Detalhes</h2>
                    <button onClick={() => {
                        setEditTechOpen(false)
                        setEditingTech(null)
                    }}>X</button>
                </div>
                <form className={styles.modalForm} onSubmit={handleSubmit(submit)}>
                    <Input label="title" id="title" disabled {...register("title")} />
                    <label htmlFor="status">Status</label>
                    <select name="status" id="status" {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <button type="submit">Salvar alterações</button>
                </form>
            </div>
        </div>
    )
}