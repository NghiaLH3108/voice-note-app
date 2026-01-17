require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoute = require('./src/routes/auth.route.js');
const userRoute = require('./src/routes/user.route.js');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
