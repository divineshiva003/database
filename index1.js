const mongoose = require("mongoose");

main().then(() => {
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/reasoning");
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
    {question: "Logical Reasoning: John can speak English and French. If someone can speak English, they can speak Spanish. Can John speak Spanish? ", option1: "(a) Yes, definitely ", option2: "(b) No, definitely ", option3: "(c) Maybe ", option4: "(d) Cannot be determined ", c_option: "(c) Maybe "},
    {question: "Data Analysis: A company's sales increase every year. There is a positive correlation between sales and marketing budget. Can we conclude that increasing the marketing budget will always increase sales? ", option1: "(a) Yes ", option2: "(b) No, correlation doesn't imply causation ", option3: "(c) Maybe ", option4: "(d) Need more data ", c_option: "(b) No, correlation doesn't imply causation "},
    {question: "Analogy: Cup is to saucer as spoon is to: ", option1: "(a) Soup ", option2: "(b) Fork ", option3: "(c) Plate ", option4: "(d) Knife ", c_option: "(c) Plate "},
    {question: "Series Completion: 2, 4, 8, 16, ... What is the next number in the series? ", option1: "(a) 20 ", option2: "(b) 24 ", option3: "(c) 32 ", option4: "(d) 40 ", c_option: "(c) 32 "},
    {question: "Coding Decoding: If APPLE is coded as 11110000, how is CAT coded? ", option1: "(a) 030120 ", option2: "(b) 100001 ", option3: "(c) 000100 ", option4: "(d) 110001 ", c_option: "(a) 030120 "},
    {question: "Statement and Assumption: Statement: All programmers drink coffee. Assumption: John is a programmer. Does the assumption imply the statement is true? ", option1: "(a) Yes ", option2: "(b) No ", option3: "(c) Maybe ", option4: "(d) Need more information ", c_option: "(b) No "},
    {question: "Statement and Argument: Statement: We should invest in cybersecurity training. Argument: Hackers are becoming more sophisticated. Does the argument support the statement? ", option1: "(a) Yes ", option2: "(b) No ", option3: "(c) Maybe ", option4: "(d) Need more information ", c_option: "(a) Yes "},
    {question: "Strengthening Arguments: Which answer choice strengthens the argument: 'We should use cloud storage. It's more secure.' ", option1: "(a) Cloud storage is cheaper than traditional storage. ", option2: "(b) Security breaches are on the rise. ", option3: "(c) Everyone else is using cloud storage. ", option4: "(d) There are many different cloud storage providers. ", c_option: "(b) Security breaches are on the rise. "},
    {question: "Weakening Arguments: Which answer choice weakens the argument: 'Self-driving cars are safer. They don't get distracted.' ", option1: "(a) Self-driving cars are still under development. ", option2: "(b) Human drivers can be reckless. ", option3: "(c) Self-driving cars are expensive. ", option4: "(d) There are no traffic laws for self-driving cars. ", c_option: "(a) Self-driving cars are still under development. "},
    {question: "Syllogism: All programmers are logical thinkers. Some logical thinkers are mathematicians. Thus, some mathematicians are programmers. Is the conclusion valid? ", option1: "(a) Yes ", option2: "(b) No ", c_option: "(b) No "},
    {question: "Odd One Out: In a group of shapes: circle, square, triangle, pentagon, rectangle. Which one doesn't belong?", option1: "(a) Circle ", option2: "(b) Square ", option3: "(c) Triangle ", option4: "(d) Pentagon ", c_option: "(a) Circle "},
    {question: "Blood Relations: If A is the father of B, and B is the sister of C, how is A related to C? ", option1: "(a) Uncle ", option2: "(b) Brother ", option3: "(c) Father ", option4: "(d) Cousin ", c_option: "(a) Uncle "},
    {question: "Direction Sense: You are facing north. You turn 135 degrees to the right. What direction are you facing now? ", option1: "(a) North-west ", option2: "(b) West ", option3: "(c) South-west ", option4: "(d) South-east ", c_option: "(c) South-west "},
    {question: "Calendar and Time: If today is Wednesday, what day will it be 10 days from now? ", option1: "(a) Friday ", option2: "(b) Saturday ", option3: "(c) Sunday ", option4: "(d) Monday ", c_option: "(a) Friday "},
    {question: "Work and Wages: If 6 people can paint a room in 4 hours, how many people can paint the same room in 2 hours? ", option1: "(a) 3 ", option2: "(b) 8 ", option3: "(c) 12 ", option4: "(d) Cannot be determined with the given information ", c_option: "(c) 12 "},
    {question: "Four defensive football players are chasing the opposing wide receiver, who has the ball. Calvin is directly behind the ball carrier. Jenkins and Burton are side by side behind Calvin. Zeller is behind Jenkins and Burton. Calvin tries for the tackle but misses and falls. Burton trips. Which defensive player tackles the receiver?", option1: "(a) Burton ", option2: "(b) Zeller ", option3: "(c) Jenkins ", option4: "(d) Calvin", c_option: "(c) Jenkins "},
    {question: "Ms. Forest likes to let her students choose who their partners will be; however, no pair of students may work together more than seven class periods in a row. Adam and Baxter have studied together seven class periods in a row. Carter and Dennis have worked together three class periods in a row. Carter does not want to work with Adam. Who should be assigned to work with Baxter? ", option1: "(a) Carter ", option2: "(b) Adam ", option3: "(c) Dennis ", option4: "(d) Forest", c_option: "(a) Carter "},
    {question: "Coding Logic: A function takes an integer as input and returns twice the number. If the function is called with the number 5, what is the output?", option1: "(a) 2 ", option2: "(b) 5 ", option3: "(c) 10 ", option4: "(d) Cannot be determined ", c_option: "(c) 10 "},
    {question: "Data Sufficiency: Is the information sufficient to determine the average age of a group of 5 people if the total age is 150 years?", option1: "(a) Yes ", option2: "(b) No ", c_option: "(b) No "},
    {question: "Analogy: Bug is to software as: ", option1: "(a) Disease is to body ", option2: "(b) Error is to program ", option3: "(c) Key is to lock ", option4: "(d) Wrench is to tool ", c_option: "(b) Error is to program "},
    {question: "Series Completion: 2, 5, 8, 11, ... What is the next number in the series?", option1: "(a) 13 ", option2: "(b) 14 ", option3: "(c) 15 ", option4: "(d) 16 ", c_option: "(c) 15 "},
    {question: "Statement and Assumption: Statement: All web developers can write code. Assumption: John is a web developer. Does the assumption imply the statement is true?", option1: "(a) Yes ", option2: "(b) No ", option3: "(c) Maybe ", option4: "(d) Need more information", c_option: "(b) No "},
    {question: "Statement and Argument: Statement: Companies should invest in cybersecurity training for employees. Argument: Cyberattacks are becoming more sophisticated. Does the argument support the statement?", option1: "(a) Yes ", option2: "(b) No ", option3: "(c) Maybe ", option4: "(d) Need more information ", c_option: "(a) Yes "},
    {question: "Strengthening Arguments: Which answer choice strengthens the argument: 'We should use cloud storage. It's more scalable.'", option1: "(a) Cloud storage is cheaper than traditional storage. ", option2: "(b) Data breaches are on the rise. ", option3: "(c) Everyone else is using cloud storage. ", option4: "(d) There are many different cloud storage providers. ", c_option: "(a) Cloud storage is cheaper than traditional storage. "},
    {question: "Weakening Arguments: Which answer choice weakens the argument: 'Self-driving cars are safer. They don't get distracted.'", option1: "(a) Self-driving cars are still under development. ", option2: "(b) Human drivers can be reckless. ", option3: "(c) Self-driving cars are expensive. ", option4: "(d) There are no traffic laws for self-driving cars.", c_option: "(a) Self-driving cars are still under development. "},
    {question: "Syllogism: All programmers are logical thinkers. Some logical thinkers are mathematicians. Thus, some mathematicians are programmers. Is the conclusion valid?", option1: "(a) Yes ", option2: "(b) No ", c_option: "(b) No "},
    {question: "Odd One Out: In a group of words: bug, feature, update, fix, crash. Which one doesn't belong? ", option1: "(a) Bug ", option2: "(b) Feature ", option3: "(c) Update ", option4: "(d) Crash", c_option: "(d) Crash"},
    {question: "Blood Relations: If Sarah is the daughter of Michael, and Michael is the brother of David, how is David related to Sarah?", option1: "(a) Uncle ", option2: "(b) Brother ", option3: "(c) Father ", option4: "(d) Cousin ", c_option: "(a) Uncle "},
    {question: "Direction Sense: You are facing south. You turn 180 degrees to the right. What direction are you facing now?", option1: "(a) North ", option2: "(b) East ", option3: "(c) South ", option4: "(d) West ", c_option: "(b) East "},
    {question: "Calendar and Time: If today is Monday, what day will it be 3 days from now?", option1: "(a) Wednesday ", option2: "(b) Thursday ", option3: "(c) Friday ", option4: "(d) Saturday ", c_option: "(c) Friday "},
    {question: "Strengthening Arguments: Which answer choice strengthens the argument: 'We should use code reviews. They help identify bugs.' ", option1: "(a) Code reviews are time-consuming. ", option2: "(b) Bugs can cause security vulnerabilities. ", option3: "(c) Debuggers are already available. ", option4: "(d) Unit testing can also find bugs. ", c_option: "(b) Bugs can cause security vulnerabilities. "},
    {question: "Logical Reasoning: A company's website traffic increases during weekends. There is a positive correlation between website traffic and online sales. Can we conclude that online sales will always be higher on weekends? ", option1: "(a) Yes ", option2: "(b) No, correlation doesn't imply causation ", option3: "(c) Maybe ", option4: "(d) Need more information ", c_option: "(b) No, correlation doesn't imply causation "},
    {question: "Series Completion: 2, 5, 8, 11, ... What is the next number in the series? ", option1: "(a) 13 ", option2: "(b) 14 ", option3: "(c) 15 ", option4: "(d) 16 ", c_option: "(c) 15 "},
    {question: "Analogy: Key is to lock as password is to: ", option1: "(a) Website ", option2: "(b) Account ", option3: "(c) Security ", option4: "(d) Encryption ", c_option: "(b) Account "},
    {question: "Syllogism: All web developers can write code. Some programmers can write code. Thus, some programmers are web developers. Is the conclusion valid?", option1: "(a) Yes ", option2: "(b) No ", c_option: "(b) No "},
    {question: "Blood Relations: If John is the brother of Mary, and Mary is the daughter of Sarah, how is John related to Sarah? ", option1: "(a) Uncle ", option2: "(b) Son ", option3: "(c) Grandson ", option4: "(d) Nephew ", c_option: "(d) Nephew "},
    {question: "Direction Sense: You are facing west. You turn 180 degrees to the right. What direction are you facing now? ", option1: "(a) North ", option2: "(b) East ", option3: "(c) South ", option4: "(d) West ", c_option: "(a) North "},
    {question: "Work and Rates: If 3 painters can paint a room in 2 hours, how many painters can paint the same room in 1 hour? ", option1: "(a) 2 ", option2: "(b) 4 ", option3: "(c) 6 ", option4: "(d) Cannot be determined with the given information ", c_option: "(c) 6 "},
    {question: "Coding Decoding: In a certain code language,'CAT' is written as 'XZG' & 'DOG' is written as 'PLT'. How is 'MAT' written in that code language ? ", option1: "(a) ZGL", option2: "(b) ZGO", option3: "(c) ZLP", option4: "(d) ZPL", c_option: "(a)ZGL"},
    {question: "Fact 1: All drink mixes are beverages. Fact 2: All beverages are drinkable. Fact 3: Some beverages are red. If the first three statements are facts, which of the following statements must also be a fact? I: Some drink mixes are red. II: All beverages are drink mixes. III: All red drink mixes are drinkable.", option1: "(a) I and II only  ", option2: "(b) II only ", option3: "(c) I and III only ", option4: "(d) III only ", c_option: "(d) III only "},
]).then((res) =>{
    console.log(res);
});
// {question: "Test", option1: "a", option2: "b", option3: "c", option4: "d", c_option: "t"},
//     {question: "Test", option1: "a", option2: "b", option3: "c", option4: "d", c_option: "t"},
//     {question: "Test", option1: "a", option2: "b", option3: "c", option4: "d", c_option: "t"},
