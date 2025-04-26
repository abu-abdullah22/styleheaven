import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from "../components/Footer";
const Main = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Footer />
        </div>
    );
};

export default Main;