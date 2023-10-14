import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/header";


export default function MainLayout () {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}