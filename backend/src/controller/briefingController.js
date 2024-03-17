const Briefing = require('../model/briefingModel');
const BriefingService = require('../services/briefingServices');

async function getAllBriefings(req, res) {
    try {
        const briefings = await BriefingService.getAllBriefings();
        res.json(briefings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function addBriefing(req, res) {
    try {
        
        const {clientName, description, state} = req.body;
        const briefing = new Briefing(clientName, description, state);
        await BriefingService.addBriefing(briefing);
        res.status(201).json({ message: 'Briefing added successfully.'});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function removeBriefing(req, res) {
    try {
        const briefingId = req.params.id;
        await BriefingService.removeBriefing(briefingId);
        res.json({ message: 'Briefing removido com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function editeBriefing(req, res) {
    try {
        const briefingId = req.params.id;
        const body = req.body;
        await BriefingService.updateBriefing(briefingId, body);
        res.json({ message: 'Briefing removido com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllBriefings,
    addBriefing,
    removeBriefing,
    editeBriefing
};
