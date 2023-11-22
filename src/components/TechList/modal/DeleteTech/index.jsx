import { useContext } from "react"
import { LoginContext } from "../../../../providers/LoginContext"
import styles from "./styles.module.scss"

export const DeleteTech = () => {
    const { deleteTech, setDeleteTech, setDeleteTechOpen, deleteTechnologi } = useContext(LoginContext)
    return (
        <div role="dialog" className={styles.modalOverlay}>
            <div className={styles.modalBox}>
                <h2>Tem certeza que você quer deletar {deleteTech.title} ?</h2>
                <div>
                    <button className={styles.buttonDelete} onClick={() => {
                        deleteTechnologi(deleteTech)
                    }}>Deletar</button>
                    <button className={styles.buttonCancel} onClick={() => {
                        setDeleteTech(null)
                        setDeleteTechOpen(false)
                    }}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}