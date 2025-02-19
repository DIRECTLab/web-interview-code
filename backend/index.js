import express from "express";
import router from './routes/index.js';

const app = express();
const port = 8050;

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Running!');
});

app.use('/api', router);


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
