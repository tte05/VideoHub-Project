import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {path: '/sign-up', element: <SignUp/>},
    {path: '/sign-in', element: <SignIn/>}
])