import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayOut/MainLayout";
import Home from "./Home/Home";
import AllTreatment from "./AllTreatment/AllTreatment";
import Datails from "./Datails/Datails";
import Register from "./Register/Register";
import Login from "./Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const serviceRes = await fetch("/script.json");
          const services = await serviceRes.json();
          const feedBackRes = await fetch("/huppyClients.json");
          const feedBack = await feedBackRes.json();

          return { services, feedBack }
        },
      },
      {
        path: "/allTreatment",
        element: <AllTreatment></AllTreatment>,
        loader: () => fetch("/script.json"),
      },
      {
        path: "/myAppoinments",
        element: <h2>About</h2>,
      },
      {
        path: "/profile",
        element: <h2>About</h2>,
      },
      {
        path:"details/:id",
        element:<Datails></Datails>,
        loader:async({params})=>{
          const res =await fetch("/script.json")
          const data  = await res.json()
          const singleData = data.find(d=>d.id==params.id)
          return singleData;
        }
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      }
        ],
  },
]);
export default router;
