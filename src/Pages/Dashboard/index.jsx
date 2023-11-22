import { useContext } from "react"
import { Header } from "../../components/Header"
import { Infos } from "../../components/Infos"
import { TechList } from "../../components/TechList"
import styles from "./styles.scss"
import { LoginContext } from "../../providers/LoginContext"
import { CreateTech } from "../../components/TechList/modal/CreateTech"
import { EditTech } from "../../components/TechList/modal/EditTech"
import { DeleteTech } from "../../components/TechList/modal/DeleteTech"

export const Dashboard = () => {
    const {createTechOpen, editTechOpen, deleteTechOpen} = useContext(LoginContext)
    return(
        <>
        <Header/>
        <main className="mainDashboard">
            <Infos/>
            <TechList/>
            {createTechOpen ? <CreateTech/> : null}
            {editTechOpen ? <EditTech/> : null}
            {deleteTechOpen ? <DeleteTech/> : null}
        </main>
        </>
    )
}