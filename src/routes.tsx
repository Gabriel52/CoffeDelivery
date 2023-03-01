import { createBrowserRouter } from "react-router-dom";
import { Checkout } from "./page/CheckOut";
import { Home } from "./page/Home";
import { Success } from "./page/Success";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/success",
        element: <Success />,
    },
    {
        path: "/checkout",
        element: <Checkout />,
    },
]);

export {router}