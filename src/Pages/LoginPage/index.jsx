import logo from "../../assets/logo.svg"
import { LoginForm } from "../../components/LoginForm"
import styles from "./styles.scss"

export const LoginPage = () => {

    return(
        <main className="mainLogin">
            <figure>
                <img src={logo} alt="KenzieHub" />
            </figure>
            <LoginForm/>
        </main>
    )
}