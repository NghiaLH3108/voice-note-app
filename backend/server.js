require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoute = require('./src/routes/auth.route.js');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoute);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
