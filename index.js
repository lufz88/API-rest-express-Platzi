const express = require('express');
const routerApi = require('./routes');

const app = express();
const PORT = 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola, mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy otra ruta');
});

routerApi(app);

app.listen(PORT, () => {
  console.log(`Corriendo en puerto ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
