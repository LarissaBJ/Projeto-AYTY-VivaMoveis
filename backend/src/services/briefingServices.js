const fs = require('fs');
const path = require('path');
const Briefing = require('../model/briefingModel');
const briefingsFilePath = path.join(__dirname, '../data/briefings.json');

async function getAllBriefings() {
    try {
        const data = fs.readFileSync(briefingsFilePath, 'utf8');
        const briefings = JSON.parse(data);
        return briefings;
    } catch (error) {
        throw new Error('Erro ao obter lista de briefings: ' + error.message);
    }
}

async function addBriefing(briefing) {
    try {
        let briefings = await getAllBriefings();
        briefings.push(briefing);
        fs.writeFile(briefingsFilePath, JSON.stringify(briefings), (err) => {
            if (err) {
              console.error(err);
              return;
            }});
    } catch (error) {1
        throw new Error('Erro ao adicionar briefing: ' + error.message);
    }
}
async function updateBriefing(briefingId, body) {
    try {
        let briefings = await getAllBriefings();
        const updatedBriefings = briefings.filter(briefing => briefing.id !== briefingId);
        const updatedBriefing = new Briefing();
        updatedBriefing.id=briefingId
        updatedBriefing.clientName=body.clientName;
        updatedBriefing.state=body.state;
        updatedBriefing.description=body.description;
        updatedBriefing.dateTime=body.dateTime;
        updatedBriefings.push(updatedBriefing)
        fs.writeFile(briefingsFilePath, JSON.stringify(updatedBriefings), (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
    } catch (error) {
        throw new Error('Erro ao remover briefing: ' + error.message);
    }
}
async function removeBriefing(briefingId) {
    try {
        let briefings = await getAllBriefings();
        const updatedBriefings = briefings.filter(briefing => briefing.id !== briefingId);
        fs.writeFile(briefingsFilePath, JSON.stringify(updatedBriefings), (err) => {
            if (err) {
                console.error(err)
                return;
            }
        });
    } catch (error) {
        throw new Error('Erro ao remover briefing: ' + error.message);
    }
}
module.exports = {
    getAllBriefings,
    addBriefing,
    removeBriefing,
    updateBriefing
};
