import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('WELCOME TO E-COM-APIs!');
});

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});