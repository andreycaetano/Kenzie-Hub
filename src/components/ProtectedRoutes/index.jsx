import { useContext } from "react"
import { LoginContext } from "../../providers/LoginContext"
import { Outlet, Navigate } from "react-router-dom"

export const ProtectedRoutes = () => {
    const {user} = useContext(LoginContext)


    return user ? <Outlet/> : <Navigate to="/"/>
}