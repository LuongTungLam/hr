// core components
import Dashboard from "views/admin/Dashboard.js";
import Tables from "views/admin/Tables.js";
// @material-ui/icons components
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import Tv from "@material-ui/icons/Tv";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: Tv,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/vacancies",
    name: "Vacancies",
    icon: FormatListBulleted,
    iconColor: "Error",
    component: Tables,
    layout: "/admin",
  },
  {
    divider: true,
  },
];
export default routes;
