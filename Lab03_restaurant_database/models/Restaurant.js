const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  address:[{building:Number,street:String,zipcode:String}],
  city:String,
  cuisine:String,
  name:String,
  restaurant_id:Number
});


RestaurantSchema.post('init', (doc) => {
  console.log('%s has been initialized from the db', doc._id);
});

RestaurantSchema.post('validate', (doc) => {
  console.log('%s has been validated (but not saved yet)', doc._id);
});

RestaurantSchema.post('save', (doc) => {
  console.log('%s has been saved', doc._id);
});

RestaurantSchema.post('remove', (doc) => {
  console.log('%s has been removed', doc._id);
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;