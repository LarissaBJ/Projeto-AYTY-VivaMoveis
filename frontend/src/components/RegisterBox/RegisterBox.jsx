import React, { useState } from "react";
import { FormBox, Name, Selector, Box, Description, Button, Title,Choice,BoxD } from "./style";
import briefingService from '../../services/request';
const RegisterBox = () =>{
    const [state, setState] = useState('');
    const [clientName, setClientName] = useState('');
    const [description, setDescription] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          await briefingService.createBriefing(clientName, description, state);
          alert('Briefing cadastrado com sucesso!');
          setClientName('');
          setDescription('');
          setState('');
        } catch (error) {
          console.error(error);
          alert('Erro ao cadastrar briefing: ' + error.message);
        }
      };

    return(
        <FormBox>
            <Title>Cadastramento de Briefing</Title>
            <form onSubmit={handleSubmit}>
                <Box>
                    <Name type="text" value={clientName} onChange={(e) => setClientName(e.target.value)}placeholder="Nome do cliente" />
                    <Selector value={state} onChange={(e) => setState(e.target.value)}>
                        <Choice value="" disabled>Status</Choice>
                        <Choice value="Negociação">Negociação</Choice>
                        <Choice value="Aprovado">Aprovado</Choice>
                        <Choice value="Finalizado">Finalizado</Choice>
                    </Selector>
                </Box>
                <BoxD>
                    <Description 
                        type="text"
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        placeholder="Descrição da necessidade do cliente" 
                    />
                </BoxD>
                <Button onClick={handleSubmit}>Register</Button>
            </form>
        </FormBox>
    )
}
export default RegisterBox;