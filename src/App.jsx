import { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import EmployeeForm from "./pages/EmployeeForm";
import EmployerForm from "./pages/EmployerForm";
import Attendance from "./pages/Attendance";
import Profile from "./pages/Profile";
import Complaint from "./pages/Complaint";
import DashboardLayout from "./layouts/DashboardLayout";
import Minutes from "./pages/Minutes";
import Register from "./pages/Register";

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
          <Route path="/employee-form" element={<EmployeeForm />} />
          <Route path="/employer-form" element={<EmployerForm />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="complaint" element={<Complaint />} />
          <Route path="minutes" element={<Minutes />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
