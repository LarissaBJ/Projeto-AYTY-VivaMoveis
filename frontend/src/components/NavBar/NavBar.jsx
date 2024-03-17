import React from "react";
import { Bar, Logo,Title} from "./style";
import LogoImg from "../../assets/Logo.png";
const NavBar = () =>{
    return(
        <Bar>
            <Logo src={LogoImg}  alt="logo" />
            <Title>SISTEMA DE GERENCIAMENTO DE BRIEFINGS</Title>
        </Bar>
    )
}

export default NavBar;