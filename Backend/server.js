const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Uncomment this

const app = express();
const port = 3001;

app.use(cors()); // Add this line
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/submit', (req, res) => {
    const { Fname, LName, Age, Gender } = req.body;
    console.log(`Received data: Fname=${Fname}, LName=${LName}, Age=${Age}, Gender=${Gender}`);

    if (!Fname || !LName || !Age || !Gender) {
        console.log("Missing fields");
        return res.status(400).json({ message: 'Missing fields' });
    }

    res.status(200).json({ message: 'Data received successfully!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
