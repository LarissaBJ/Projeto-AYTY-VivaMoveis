import React, { useState, useEffect } from "react";
import { ListBox, FilterBox, Selector, Choice, Title, Table, Row, Column, Button } from "./style";
import briefingService from '../../services/request';
import { RiEdit2Fill } from "react-icons/ri";
import { IoTrashBin } from "react-icons/io5";
import { IoInformationCircle } from "react-icons/io5";
import ModalEdit from "../../Modal/ModalEdit/ModalEdit";

const ListingBox = () => {
    const [briefings, setBriefings] = useState([]);
    const [editBriefing, setEditBriefing] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEditButtonClick = (editBriefing) => {
        setIsModalOpen(true);
        setEditBriefing(editBriefing);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        fetchBriefings();
    }, []); 

    const fetchBriefings = async () => {
        try {
            const data = await briefingService.getAllBriefings();
            setBriefings(data);
        } catch (error) {
            console.error('Erro ao obter lista de briefings:', error);
        }
    };

    const handleRemoveBriefing = async (briefingId) => {
        try {
            await briefingService.removeBriefing(briefingId);
            // Atualiza a lista de briefings após remover
            fetchBriefings();
        } catch (error) {
            console.error('Erro ao remover briefing:', error);
        }
    };

    return (
        <ListBox>
            <FilterBox>
                <Selector name="filtro" id="">
                    <Choice value="negociação"></Choice>
                    <Choice value="aprovado"></Choice>
                    <Choice value="finalizado"></Choice>
                </Selector>
                <Title>Listagem de Briefing</Title>
            </FilterBox>
            <Table>
                <thead>
                    <Row>
                        <Column scope="col">Client</Column>
                        <Column scope="col">State</Column>
                        <Column scope="col">Creation Date</Column>
                        <Column scope="col">Settings</Column>
                    </Row>
                </thead>
                <tbody>
                    {briefings.map((briefing, index) => (
                        <Row key={index}>
                            <Column scope="col">{briefing.clientName}</Column>
                            <Column scope="col">{briefing.state}</Column>
                            <Column scope="col">{briefing.dateTime}</Column>
                            <Column scope="col"> 
                                <Button><IoInformationCircle /></Button>
                                <Button onClick={()=> handleEditButtonClick(briefing)}>{<RiEdit2Fill />}</Button>
                                <Button onClick={() => handleRemoveBriefing(briefing.id)}><IoTrashBin/></Button>
                            </Column>
                        </Row>
                    ))}
                </tbody>
            </Table>

            {isModalOpen && <ModalEdit handleCloseModal={handleCloseModal} editBriefing={editBriefing} fetchBriefings={fetchBriefings}/>}
        </ListBox>
    );
}

export default ListingBox;