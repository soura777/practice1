import express from 'express';
const app = express();
const PORT = 4000;

app.listen(PORT, (req ,res ) => {
    console.log(`Server Started: ${PORT}`);
});