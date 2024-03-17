import React from "react";
import ListingBox from "../../components/ListingBox/ListingBox";
import Menu from "../../components/Menu/menu";
import NavBar from "../../components/NavBar/NavBar";
import { ViewBox,MenuBox } from "./style";

const BriefingListing = ()=>{
    return(
        <ViewBox>
        <NavBar/>
            <MenuBox>
                <Menu/>
                <ListingBox/>
            </MenuBox>
        </ViewBox>
    )
}

export default BriefingListing;