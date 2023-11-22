import "./style/index.scss"
import { MainRoutes } from "./Routes/MainRoutes"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
 

  return (
    <>
      <MainRoutes/>
      <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />
    </>
  )
}

export default App
