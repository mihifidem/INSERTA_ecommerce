const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/productos', require('./routes/productos.routes'));
app.use('/api/pedidos', require('./routes/pedidos.routes'));
app.use('/api/detalle-pedidos', require('./routes/detallePedidos.routes'));

app.get('/', (req, res) => {
    res.send('APImini ecommerce funcionando');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});