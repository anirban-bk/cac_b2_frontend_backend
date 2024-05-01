import express from 'express';
const app = express();
const port = process.env.PORT || 3700;

app.get('/', (req, res)=>{
    res.send('this is a response from server');
});

//get a list of 5 quotes
const quotes = [
    {id:1, title: "1st quote", content:"this is the first quote"},
    {id:2, title: "2nd quote", content:"this is the second quote"},
    {id:3, title: "3rd quote", content:"this is the third quote"},
    {id:4, title: "4th quote", content:"this is the fourth quote"},
    {id:5, title: "5th quote", content:"this is the fifth quote"}
];
app.get('/api/quotes', (req, res)=>{
    res.json(quotes);
})

app.listen(port, ()=>{
    console.log(`the server has started on port ${port}`);
})