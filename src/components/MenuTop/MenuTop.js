import React from 'react';
import {Menu} from "antd"
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "../../assets/images/logo.svg"
import "./Menutop.scss"

export default function MenuTop(){

return(

<div className="menu-top">
<div className="menu-top__logo"> 
<Logo/>
</div>

<Menu  
theme="dark"
mode="horizontal"
defaultSelectedKeys={["1"]} //para que?
style={{ lineHeight:"64px" }}
>

    <Menu.Item key="2">
        <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="1">
        <Link to="/New_movies">Ultimas peliculas recientes</Link>
    </Menu.Item>
    <Menu.Item key="3">
        <Link to="/Popular">Mas Populares</Link>
    </Menu.Item>
    <Menu.Item key="4">
        <Link to="/Search"></Link>Buscar
    </Menu.Item>

</Menu>



</div>
)}