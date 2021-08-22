const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please, review this entry, no name specified."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const Person = mongoose.model("Person", personSchema);


const fruit = new Fruit({
    rating: 4,
    review: "Peaches are meh"
});

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 5,
    review: "Not a big fan, but the fruit looks pleasing"
});

const banana = new Fruit({
    name: "Banana",
    rating: 10,
    review: "Just Awesome!"
});

const orange = new Fruit({
    name: "Orange",
    rating: 6,
    review: "Kind of tricky, you never know if it would be sweet or sour."
});



const pineapple = new Fruit({
    name: "Pineapple",
    rating: 8,
    review: "Love, Loveeeee!"
});

//fruit.save();
//pineapple.save();

const person = new Person({
    name: "Amy",
    age: 12,
    favoriteFruit: pineapple
});

Fruit.find(function (err, fruits){
    if (err) {
        console.log(err);
    }
    else {
        mongoose.connection.close();
        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
        //console.log(fruits);
    }
});

/**Fruit.updateOne({_id: "60f97a0e3b65552580645e7b"}, {name: "Peach"}, function (err) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("The document has been updated successfully!");
    }
});*/

/*Fruit.deleteOne({_id: "60f97a0e3b65552580645e7b"}, function (err) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("The document has been deleted successfully!");
    }
}); */

/*Fruit.insertMany([kiwi, banana, orange], function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Successfully saved all the fruits to the FruitsDB!");
    }
}); */

//person.save();

/*Person.deleteMany({name: "Dave"}, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Deleted all records successfully!");
    }
});*/


/*Person.updateOne({_id: "60f94b4377c9e13844e5a392"}, {favoriteFruit: banana}, function (err) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("The document has been updated successfully!");
    }
});*/