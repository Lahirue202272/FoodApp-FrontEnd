import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navigate } from "react-router-dom";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import RegisterPage from "./components/auth/RegisterPage";
import LoginPage from "./components/auth/LoginPage";
import HomePage from "./components/home_menu/HomePage";
import CategoriesPage from "./components/home_menu/CategoriesPage";
import MenuPage from "./components/home_menu/MenuPage";
import MenuDetailsPage from "./components/home_menu/MenuDetailsPage";
import ProfilePage from "./components/profile_cart/ProfilePage";
import UpdateProfilePage from "./components/profile_cart/UpdateProfilePage";
import OrderHistoryPage from "./components/profile_cart/OrderHistoryPage";
import { AdminRoute, CustomerRoute } from "./services/Guard";
import LeaveReviewPage from "./components/profile_cart/LeaveReviewPage";
import CartPage from "./components/profile_cart/CartPage";
import AdminLayout from "./components/admin/navbar/AdminLayout";
import AdminCategoriesPage from "./components/admin/AdminCategoriesPage";
import AdminCategoryFormPage from "./components/admin/AdminCategoryFormPage";
import AdminMenuPage from "./components/admin/AdminMenuPage";
import AdminMenuFormPage from "./components/admin/AdminMenuFormPage";
import AdminOrdersPage from "./components/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./components/admin/AdminOrderDetailsPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="content">
        <Routes>
          {/* AUTH PAGES */}
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu/:id" element={<MenuDetailsPage />} />

          {/* CUSTOMER ROUTES */}
          <Route path="/profile" element={<CustomerRoute element={<ProfilePage />} />} />
          <Route path="/update" element={<CustomerRoute element={<UpdateProfilePage />} />} />
          <Route path="/my-order-history" element={<CustomerRoute element={<OrderHistoryPage />} />} />
          <Route path="/leave-review" element={<CustomerRoute element={<LeaveReviewPage />} />} />
          <Route path="/cart" element={<CustomerRoute element={<CartPage />} />} />

           {/* ADMIN ROUTES */}
          <Route path="/admin" element={<AdminRoute element={<AdminLayout />} />}>
             <Route path="categories" element={<AdminCategoriesPage />} />
             <Route path="categories/new" element={<AdminCategoryFormPage />} />
             <Route path="categories/edit/:id" element={<AdminCategoryFormPage />} />

             <Route path="menu-items" element={<AdminMenuPage />} />
             <Route path="menu-items/new" element={<AdminMenuFormPage />} />
             <Route path="menu-items/edit/:id" element={<AdminMenuFormPage />} />

             <Route path="orders" element={<AdminOrdersPage />} />
             <Route path="orders/:id" element={<AdminOrderDetailsPage />} />
          </Route>


          <Route path="*" element={<Navigate to={"/home"} />} />

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
