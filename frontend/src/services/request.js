import axios from 'axios';

const API_URL = 'http://localhost:5000';

const briefingService = {
    createBriefing: async (clientName, description, state) => {
      try {
        const response = await axios.post(`${API_URL}/cadastrar`, {
          clientName,
          description,
          state
        });
        return response.data;
      } catch (error) {
        throw new Error('Erro ao cadastrar briefing: ' + error.message);
      }
    },
    
    getAllBriefings: async () => {
      try {
        const response = await axios.get(`${API_URL}/listar`);
        return response.data;
      } catch (error) {
        throw new Error('Erro ao obter lista de briefings: ' + error.message);
      }
    },
    
    removeBriefing: async (briefingId) => {
      try {
        await axios.delete(`${API_URL}/remover/${briefingId}`);
        console.log('Briefing removido com sucesso!');
      } catch (error) {
        throw new Error('Erro ao remover briefing: ' + error.message);
      }
    },

   editBriefing: async (briefing) => {
      try {
        console.log(briefing)
        const body={
          clientName:briefing.clientName,
          dateTime:briefing.dateTime,
          description:briefing.description,
          state:briefing.state
        }
        await axios.put(`${API_URL}/update/${briefing.id}`, body);
        console.log('Briefing editado com sucesso!');
      } catch (error) {
        throw new Error('Erro ao editar briefing: ' + error.message);
      }
    }
};

export default briefingService;
