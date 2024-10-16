import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
            path:"/",
            element: <div>Home</div>
        },
        {
            path:"/about",
            element: <div>About page</div>
        },
        {
            path:"/all-books",
            element: <div>All books</div>
        },
        {
            path:"/contact-us",
            element: <div>contact us</div>
        },
      ]
    },
  ]);
   
  export default  router ;
  