import DrawPage from "@/pages/DrawPage/DrawPage";
import HomePage from "@/pages/Home/HomePage";
import JsonPage from "@/pages/JsonPage/JsonPage";
const routes = [
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/draw",
    component: DrawPage,
  },
  {
    path: "/format/json",
    component: JsonPage,
  },
];

export default routes;
