import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from "../components/Footer";
import Products from "../components/Products";
const Main = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Products />
            <Footer />
           
        </div>
    );
};

export default Main;