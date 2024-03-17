const uuid = require('uuid');
const { format } = require('date-fns');

class Briefing {
    constructor(clientName, description, state) {
        this.id = uuid.v4(); 
        this.clientName = clientName;
        this.description = description;
        this.state = state;
        this.dateTime = this.getCurrentDate();
    }

    getCurrentDate() {
        return format(new Date(), 'dd/MM/yyyy');
    }
}

module.exports = Briefing;
