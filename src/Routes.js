import {LOGIN_ROUTE, CREATE_ROUTE, INFO_ROUTE, EDIT_ROUTE, MENU_ROUTE} from "./utils/Consts";
import Menu from "./components/Menu/Menu";
import Create from "./pages/Create";
import Diaries from "./pages/Diaries";
import Login from "./pages/Login";


export const privateRoutes=[
    {path:MENU_ROUTE,component:Menu, exact:true},
    {path:INFO_ROUTE,component:Diaries, exact:true},
    {path:CREATE_ROUTE,component:Create, exact:true},
]
export const publicRoutes=[
    {path:LOGIN_ROUTE,component:Login,exact:true}
]