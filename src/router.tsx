import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Projects from "./components/projetos";
import Stacks from "./components/stacks";


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
  },
  {
    path: "/stacks",
    element: (
      <Stacks />
    )
  }
])

export default router;