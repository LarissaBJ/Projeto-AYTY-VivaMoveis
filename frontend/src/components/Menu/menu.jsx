import React from "react";
import { MenuBox, Button } from "./style";
import { Link } from "react-router-dom";

const Menu = ()=>{
    return(
        <MenuBox> 
            <Link to="/cadastrar"> <Button>Cadastrar Briefing</Button> </Link>
            <Link to="/listar"> <Button>Lista de Briefing</Button> </Link>
            
        </MenuBox>
    )
}
export default Menu;