const express = require('express');
const bodyParser = require('body-parser');
const jobRoutes = require('./routes/jobRoutes');
const { sequelize } = require('./db');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api/jobs', jobRoutes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
