import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Projects from "./components/projetos";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    )
  },

  {
    path: "/projetos",
    element: (
      <Projects />
    )
  }
])

export default router;