import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  LandingPage from "./pages/LandingPage";


const router = createBrowserRouter([
    {path:"/" , element:<LandingPage/>}
])

export default function RouterConfig(){
    return(
        <RouterProvider router={router}/>
    )
}  