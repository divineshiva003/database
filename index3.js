const mongoose = require("mongoose");

main().then(() => {
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/clang");
}

const userSchema = new mongoose.Schema({
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    c_option: String
});
const q_a = mongoose.model("QandA", userSchema);

q_a.insertMany([
    {question: "Test", option1: "a", option2: "b", option3: "c", option4: "d", c_option: "t"},
    {question: "Test", option1: "a", option2: "b", option3: "c", option4: "d", c_option: "t"},
    {question: "Test", option1: "a", option2: "b", option3: "c", option4: "d", c_option: "t"},

]).then((res) =>{
    console.log(res);
});
// {question: "Test", option1: "a", option2: "b", option3: "c", option4: "d", c_option: "t"},
//     {question: "Test", option1: "a", option2: "b", option3: "c", option4: "d", c_option: "t"},
//     {question: "Test", option1: "a", option2: "b", option3: "c", option4: "d", c_option: "t"},
