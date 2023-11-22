import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { RegisterForm } from "../../components/RegisterForm";
import styles from "./styles.module.scss"

export const RegisterPage = () => {

    return(
        <main className={styles.main}>
            <header>
                <figure>
                    <img src={logo} alt="KenzieHub" />
                </figure>
                <Link to={"/"}>
                    <button>Voltar</button>
                </Link>
            </header>
            <RegisterForm/>
        </main>
    )
}