import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { BoxText, ViewWelcome, Text, Message, Button } from "../Welcome/style";

const Welcome = () => {
    return (
        <ViewWelcome>
            <NavBar />
            <BoxText>
                <Text>BEM VINDO AO GERENCIADOR DE BRIEFING!!!!!</Text>
                <Message>Pronto para começar? Clique no botão abaixo:</Message>
                <Link to="/cadastrar"> <Button>LEST GO!!</Button> 
                </Link>
            </BoxText>
        </ViewWelcome>
    )
}

export default Welcome;
