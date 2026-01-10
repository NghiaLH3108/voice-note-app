require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoute = require('./routes/auth.route');
const noteRoute = require('./routes/note.route');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoute);
app.use('/api/notes', noteRoute);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
