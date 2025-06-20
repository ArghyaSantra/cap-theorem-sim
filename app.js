const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const capRoutes = require('./src/routes/cap.routes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/cap', capRoutes);

app.get('/', (req, res) => {
  res.send('CAP Theorem Simulator is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
