const express = require("express");
const app = express();
const cors = require('cors');
const apiRoutes = require('./routes/routes.js');
const proxy = require('./config/proxy.js');

app.use(express.json());
app.use(cors());

// Use the API routes
app.use('/', apiRoutes);

proxy(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




