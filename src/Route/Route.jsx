import { createBrowserRouter } from "react-router-dom";
import Layout from "../LayOut/Layout";
import Home from "../Pages/Home/Home";
import MainMenu from "../Pages/Home/MainMenu/MainMenu";
import Order from "../Pages/OrderPage/Order";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import Private from "../Private/Private";
import DasingBord from "../LayOut/DasingBord";
import MyCard from "../Pages/DashBord/MyCard/MyCard";
import AllUsers from "../Pages/DashBord/AllUsers/AllUsers";
import Additem from "../Pages/DashBord/AddItem/Additem";
import AdminPrivate from "../Private/AdminPrivate";
import ManageItems from "../Pages/DashBord/ManageItems/ManageItems";
import Payment from "../Pages/DashBord/AddItem/Payment/Payment";
import UserHome from "../Pages/DashBord/UserHome/UserHome";
import AdminHome from "../Pages/DashBord/Admin/AdminHome";
import Manage from "../Pages/DashBord/Admin/Manage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element:<> <MainMenu /></>,
        },
        {
          path: "/order",
          element: <Order />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/singup",
          element: <SingUp />,
        },
      ],
    },
    {
      path:'/dashbord',
      element:<Private><DasingBord></DasingBord></Private>,
      children:[
        {
          path:'userhome',
          element:<UserHome/>,
        },
     {
      path:'mycart',
      element:<Private><MyCard></MyCard></Private>
     },
     {
      path:'users',
      element:<AllUsers></AllUsers>
     },
     {
      path:'payment',
      element:<Private><Payment></Payment></Private>
     },
    //  admin
     {
      path:'additem',
      element:<AdminPrivate><Additem></Additem></AdminPrivate>
     },
     {
      path:'manageitem',
      element:<AdminPrivate><ManageItems></ManageItems></AdminPrivate>
     },
    {
      path:"adminhome",
      element:<AdminPrivate><AdminHome/></AdminPrivate>,
    },
    {
      path:"managebooking",
      element:<AdminPrivate><Manage/></AdminPrivate>,
    }

      ]
    }
  ]);