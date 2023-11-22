import logo from "../../assets/logo.svg";
import styles from "./styles.scss"
import { useContext } from "react";
import { LoginContext } from "../../providers/LoginContext";

export const Header = () => {
    const { logout } = useContext(LoginContext)

    return (
        <header>
            <div>
                <figure>
                    <img src={logo} alt="KenzieHub" />
                </figure>
                <button onClick={() => logout()}>Sair</button>
            </div>
        </header>
    )
}