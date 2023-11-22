import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../Pages/LoginPage";
import { RegisterPage } from "../Pages/RegisterPage";
import { Dashboard } from "../Pages/Dashboard";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

export const MainRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/dashboard" element={<ProtectedRoutes/>}>
                <Route index element={<Dashboard/>}/>
            </Route>
        </Routes>
    )
}