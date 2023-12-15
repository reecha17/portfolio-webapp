// Import dependencies
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm the database has connected by printing a message in the console
db.once("open", (err) => {
    if (err) {
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else {
        console.log('Successfully connected to MongoDB Valorant collection.');
    }
});

// Define the collection's schema.
const matchSchema = mongoose.Schema({
    agent: { type: String, required: true },
    kills: { type: Number, required: true },
    deaths: { type: Number, required: true },
    assists: { type: Number, required: true },
    acs: { type: Number, required: true },
    date: { type: Date, required: true, default: Date.now }
});

// Compile the model from the schema
const Match = mongoose.model('Match', matchSchema);

// CREATE model *****************************************
const createMatch = async (agent, kills, deaths, assists, acs, date) => {
    const match = new Match({
        agent: agent,
        kills: kills,
        deaths: deaths,
        assists: assists,
        acs: acs,
        date: date
    });
    return match.save();
}


// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const retrieveMatches = async () => {
    const query = Match.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveMatchByID = async (id) => {
    const query = Match.findById(id);
    return query.exec();
}


// UPDATE model *****************************************************
const updateMatch = async (id, agent, kills, deaths, assists, acs, date) => {
    const result = await Match.replaceOne({ _id: id }, {
        agent: agent,
        kills: kills,
        deaths: deaths,
        assists: assists,
        acs: acs,
        date: date
    });
    return {
        id: id,
        agent: agent,
        kills: kills,
        deaths: deaths,
        assists: assists,
        acs: acs,
        date: date
    }
}


// DELETE model based on id  *****************************************
const deleteMatchById = async (id) => {
    const result = await Match.deleteOne({ _id: id });
    return result.deletedCount;
};


// Export our variables for use in the controller file.
export { createMatch, retrieveMatches, retrieveMatchByID, updateMatch, deleteMatchById }