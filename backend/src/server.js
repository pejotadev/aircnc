const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@servidorteste.krdfl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true
});

app.use(cors()); // depois fechar origin
app.use(express.json());
app.use(routes);

app.listen(3333);
