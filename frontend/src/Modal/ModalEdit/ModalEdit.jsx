import React, { useEffect, useState } from "react";
import { EditView, ModalFrame, Head, Box1, Box2, Name, Selector, Choice, Description, Confirm, Close, Title, BoxD } from "./style";
import briefingService from "../../services/request";

const ModalEdit = ({ handleCloseModal, editBriefing, fetchBriefings }) => {
    const [state, setState] = useState('');
    const [clientName, setClientName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setClientName(editBriefing.clientName)
        setState(editBriefing.state)
        setDescription(editBriefing.description)
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            
            const briefing= {
                id: editBriefing.id,
                clientName,
                description,
                state,
                dateTime:editBriefing.dateTime
            }
          await briefingService.editBriefing(briefing);
          fetchBriefings();
          alert('Briefing atualizado com sucesso!');
          setClientName('');
          setDescription('');
          setState('');
          handleCloseModal();


        } catch (error) {
          console.error(error);
          alert('Erro ao cadastrar briefing: ' + error.message);
        }
      };

      
    return (
        <EditView>
            <ModalFrame>
                <Head>
                    <Title>Editor de Briefing</Title>
                    <Close onClick={() => handleCloseModal()}>fechar</Close>
                </Head>
                <form onSubmit={handleSubmit}>

                    <Box1>
                        <Name type="text" name="" id="" value={clientName}  onChange={(e) => setClientName(e.target.value)}/>
                        <Selector value={state} onChange={(e) => setState(e.target.value)}>
                            <Choice value="" disabled>Status</Choice>
                            <Choice value="Negociação">Negociação</Choice>
                            <Choice value="Aprovado">Aprovado</Choice>
                            <Choice value="Finalizado">Finalizado</Choice>
                        </Selector>
                    </Box1>
                    <Box2>
                        <BoxD>
                            <Description
                                type="text"
                                placeholder="Descrição da necessidade do cliente"
                                value={description} 
                                onChange={(e) => setDescription(e.target.value)} 
                            />
                        </BoxD>
                        <Confirm>Confirmar</Confirm>
                    </Box2>
                </form>
            </ModalFrame>
        </EditView>

    )

}

export default ModalEdit;