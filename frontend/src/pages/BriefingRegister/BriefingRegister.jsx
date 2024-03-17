import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Menu from "../../components/Menu/menu";
import RegisterBox from "../../components/RegisterBox/RegisterBox";
import { ViewBox,MenuBox } from "./style";
const BriefingRegister = () =>{
    return(
        <ViewBox>
        <NavBar/>
            <MenuBox>
                <Menu/>
                <RegisterBox/>
            </MenuBox>
        </ViewBox>
    )
}

export default BriefingRegister;