const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

const port = process.env.PORT || 5000;

app.use(express.static(__dirname + "/dist/"));

app.get(/.*/, function(req, res){
    res.sendFile(__dirname + "/dist/index.html")
});

app.listen(port, () => console.log(`Server running on port ${port}`));