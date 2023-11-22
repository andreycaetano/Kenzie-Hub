import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api"
import {toast} from "react-toastify"

export const LoginContext = createContext({})

export const LoginProvider = ({children}) => {
    const navigate = useNavigate()

    const [user, setUser] = useState(null)
    const [techs, setTechs] = useState([])
    const [createTechOpen, setCreateTechOpen] = useState(false)
    const [editTechOpen, setEditTechOpen] = useState(false)
    const [deleteTechOpen, setDeleteTechOpen] = useState(false)
    const [editingTech, setEditingTech] = useState(null)
    const [deleteTech, setDeleteTech] = useState(null)


    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("@KenzieHub")
            if(token){
                try {
                    const {data} = await api.get("/profile", {
                        headers: {
                            Authorization: `Barear ${token}`
                        }
                    })
                    setUser(data)
                    setTechs(data.techs)
                    navigate("/dashboard")
                } catch (error) {
                    console.log(error)
                    localStorage.removeItem("@KenzieHub")
                }
            }
        }
        loadUser()
    }, [])

    const requestLogin = async (formData) => {
        try {
            const {data} = await api.post("/sessions", formData)
            setUser(data.user)
            localStorage.setItem("@KenzieHub", data.token)
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
        }
    }

    const userRegister = async (formData) => {
        try {
            const {data} = await api.post("/users", formData)
            toast.success("Conta criada com sucesso!")
            setTimeout(() => {
                navigate("/")
            }, 3*1000);
        } catch (error) {
            console.log(error)
            toast.error("Ops! Algo deu errado")
        }
    }

    const logout = () => {
        setUser(null)
        setTechs([])
        localStorage.removeItem("@KenzieHub")
        navigate("/")
    }
    
    const createTechForm = async (formData) => {
        const token = localStorage.getItem("@KenzieHub")
        try {
            const {data} = await api.post("/users/techs", formData,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTechs([...techs, data])
            setCreateTechOpen(false)
            toast.success("Tecnologia adicionada com sucesso")
        } catch (error) {
            console.log(error)
        }
    }

    const updateTech = async(formData, id) => {
        const token = localStorage.getItem("@KenzieHub")
       try {
        const {data} = await api.put(`/users/techs/${id}`, formData,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const newTechList = techs.map((tech) => {
            if(tech.id === editingTech.id){
                return data
            }else{
                return tech
            }
        })
        setTechs(newTechList)
        setEditTechOpen(false)
        setEditingTech(null)    
       } catch (error) {
        console.log(error)
       }
    }

    const deleteTechnologi = async (technologi) => {
        try {
            const token = localStorage.getItem("@KenzieHub")
            await api.delete(`/users/techs/${technologi.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const newTechList = techs.filter((tech) => tech.id !== technologi.id)
            setTechs(newTechList)
            toast.success(`${technologi.title} deletado com sucesso`)
            setDeleteTechOpen(false)
            setDeleteTech(null)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <LoginContext.Provider value={{user, setUser, requestLogin, userRegister, logout, createTechOpen, setCreateTechOpen, editTechOpen, setEditTechOpen, techs, setTechs, createTechForm, editingTech, setEditingTech, updateTech, deleteTechOpen, setDeleteTechOpen, setDeleteTech, deleteTech, deleteTechnologi}}>
            {children}
        </LoginContext.Provider>
    )
}