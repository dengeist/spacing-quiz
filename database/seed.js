var connect = require('./db/connect');
var Question = require('./models/Question.js');

var seedTerms = [
    {
        question_pos: 1,
        german: "Apfel",
        english: "Apple",
        definition: "A fruit."
    },
    {
        question_pos: 2,
        german: "Pferd",
        english: "Horse",
        definition: "A quadripedal animal which may or may not kick you to death."
    },
    {
        question_pos: 3,
        german: "Schwanz",
        english: "Dick",
        definition: "A reference to male anatomy as well as a name to call someone."
    },
    {
        question_pos: 4,
        german: "Arsch",
        english: "Ass",
        definition: "The bum."
    },
    {
        question_pos: 5,
        german: "Morden",
        english: "To murder (infinitive)",
        definition: "To impose involuntary and hopefully swift death on someone."
    }
]

Question.create(seedTerms[0], function(err){
    if(err) {console.log(err)}
    mongoose.disconnect();

});
