const express = require('express');
const mongoose = require('mongoose');
// const employeeRouter = require('./routes/EmployeeRoutes.js');
const restaurantRouter = require('./routes/RestaurantRoutes.js');


const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://dbAdmin:<password>@cluster0.shjls.mongodb.net/gbc-full-stack?retryWrites=true&w=majority', {
  useCreateIndex: true,  
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// app.use(employeeRouter);
app.use(restaurantRouter);

app.listen(3000, () => { console.log('Server is running...') });
