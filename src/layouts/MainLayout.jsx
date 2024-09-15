import { Outlet } from "react-router-dom";
import Navi from "../components/Navi";
import Footer from "../components/Footer";
// import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div>
      <Navi />

      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
