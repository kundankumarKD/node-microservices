const express = require('express');
const sequelize = require('./shared/db-config');
const User = require('./models/User');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/users', userRoutes);

sequelize.sync().then(() => {
  console.log('User DB synced');
  app.listen(3002, () => console.log('User service running on port 3002'));
});
