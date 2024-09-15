import { Outlet } from "react-router-dom";
import DashNavi from "../components/DashNavi";
import Footer from "../components/Footer";

const DashboardLayout = () => {
  return (
    <div>
      <DashNavi />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DashboardLayout;
