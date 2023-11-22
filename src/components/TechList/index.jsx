import { useContext, useState } from "react"
import buttonPlus from "../../assets/button-plus.svg"
import { LoginContext } from "../../providers/LoginContext"
import { TechCard } from "./TechCard"
import styles from "./styles.module.scss"

export const TechList = () => {
    const {techs, setCreateTechOpen} = useContext(LoginContext)
    console.log(techs)
    console.log(techs.length === 0)
    return(
        <section>
            <div className={styles.sectionTechList}>
            <div className={styles.techListHeader}>
                <h2>Tecnologias</h2>
                <button onClick={() => setCreateTechOpen(true)}><img src={buttonPlus} alt="Adicionar Tarefa" /></button>
            </div>
            <ul>
                {techs.length !== 0 ? techs.map(tech => {
                    return <TechCard key={tech.id} tech={tech}/>
                }) : <span className={styles.listAlert}>Nenhuma tecnologia foi adicionada</span>}
            </ul>
            </div>
        </section>
    )
}