import 'dotenv/config';
import express from 'express';
import * as matches from './model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post('/log', (req, res) => {
    matches.createMatch(
        req.body.agent,
        req.body.kills,
        req.body.deaths,
        req.body.assists,
        req.body.acs,
        req.body.date
    )
        .then(match => {
            res.status(201).json(match);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Create a document failed.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/log', (req, res) => {
    matches.retrieveMatches()
        .then(match => {
            if (match !== null) {
                res.json(match);
            } else {
                res.status(404).json({ Error: 'Document not found.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Retrieve document failed.' });
        });
});


// UPDATE controller ************************************
app.put('/log/:id', (req, res) => {
    matches.updateMatch(
        req.params.id,
        req.body.agent,
        req.body.kills,
        req.body.deaths,
        req.body.assists,
        req.body.acs,
        req.body.date
    )
        .then(match => {
            res.json(match);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Document update failed.' });
        });
});

// RETRIEVE by ID controller
app.get('/log/:id', (req, res) => {
    matches.retrieveMatchByID(req.params.id)
        .then(match => {
            if (match !== null) {
                res.json(match);
            } else {
                res.status(404).json({ Error: 'Document not found.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Retrieve document by ID failed.' });
        });

});

// DELETE Controller ******************************
app.delete('/log/:id', (req, res) => {
    matches.deleteMatchById(req.params.id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Document no longer exists.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Delete document by ID failed.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});