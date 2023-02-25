import { createBrowserRouter } from "react-router-dom";
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
]);

export {router}