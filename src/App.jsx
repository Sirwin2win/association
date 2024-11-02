import { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import MainLayout from "./layouts/MainLayout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import EmployeeForm from "./pages/EmployeeForm";
import EmployerForm from "./pages/EmployerForm";
import AttendancePage from "./pages/AttendancePage";
import Profile from "./pages/Profile";
import ComplaintPage from "./pages/ComplaintPage";
import DashboardLayout from "./layouts/DashboardLayout";
import MinutePage from "./pages/MinutePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import EditProfile from "./pages/EditProfile";
// import BranchPage from "./pages/BranchPage";
import BlackListPage from "./pages/BlackListPage";
import ContributionPage from "./pages/ContributionPage";
import City from "./components/City";
import Branch from "./components/Branch";
import ManageComplaint from "./pages/ManageComplaint";
//
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/city" element={<City />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/employee-form" element={<EmployeeForm />} />
          <Route path="/employer-form" element={<EmployerForm />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="edit-profile/:id" element={<EditProfile />} />
          <Route path="attendance" element={<AttendancePage />} />
          <Route path="complaint" element={<ComplaintPage />} />
          <Route path="minutes" element={<MinutePage />} />
          <Route path="black-list" element={<BlackListPage />} />
          <Route path="contributions" element={<ContributionPage />} />
          <Route path="manage-complaint" element={<ManageComplaint />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
