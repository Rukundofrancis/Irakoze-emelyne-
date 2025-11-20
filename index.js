
const express = require("express")
const port = 3000;
const app = express();

// get mothode
app.get('/', (req, res) => {
    res.send("this is node js and express js  ");
});
// post method
app.post('/createdata', (req, res) => {
    res.send('data created are success');
});
// put method
app.put('/updatedata', (req, res) => {
    res.send('the data are updated successfully');
});
// head method
app.head('/retreivedata', (req, res) => {
    res.send('the data retreived are successfully');

});
//delete method
app.delete('/removedata', (req, res) => {
    res.send('data removed are sucussfully');

});

//listening the server
app.listen(port, () => {
    console.log(`the server is running at localhost:${port}`);
});