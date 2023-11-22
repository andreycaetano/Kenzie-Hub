import buttonEdit from "../../../assets/buttonEdit.svg"
import buttonDelete from "../../../assets/buttonDelete.svg"
import { useContext } from "react"
import { LoginContext } from "../../../providers/LoginContext"
import styles from "./styles.module.scss"

export const TechCard = ({tech}) => {
    const {setEditTechOpen, setEditingTech, setDeleteTechOpen, setDeleteTech} = useContext(LoginContext)
    return(
        <li className={styles.techItem}>
            <h2>{tech.title}</h2>
            <div className={styles.divInfoTech}>
                <span>{tech.status}</span>
                <button onClick={() => {
                    setEditTechOpen(true)
                    setEditingTech(tech)
                }}><img src={buttonEdit} alt="Editar Tecnologia" /></button>
                <button onClick={() => {
                    setDeleteTech(tech)
                    setDeleteTechOpen(true)
                }}><img src={buttonDelete} alt="Deletar Tecnologia" /></button>
            </div>
        </li>
    )
}