import { useContext } from "react"
import styles from "./styles.scss"
import { LoginContext } from "../../providers/LoginContext"

export const Infos = () => {
    const {user} = useContext(LoginContext)
    return (
        <div className="divInfo">
            <h3>Olá, {user.name}</h3>
            <span>{user.course_module}</span>
        </div>
    )
}