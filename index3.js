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
    {question: "What will be the output of the following Python code snippet? <br> print(2 * 3 ** 3 / 4 + 5)", option1: "a) 10.5", option2: "b) 18.0", option3: "c) 31.5", option4: "d) 46.0", c_option: "b) 18.0"},
    {question: "Which of the following statements creates a dictionary in Python? ", option1: "a) dict = {}", option2: "b) dict = {1:'one', 2:'two'}", option3: "c) dict = {1,2}", option4: "d) dict = ()", c_option: "b) dict = {1:'one', 2:'two'}"},
    {question: "What will be the output of the following Python code snippet? <br> a = [1, 2, 3, 4]<br>print(a[-3:])", option1: "a) [1, 2]", option2: "b) [2, 3, 4]", option3: "c) [2, 3]", option4: "d) [1, 2, 3, 4]", c_option: "c) [2, 3]"},
    {question: "Which of the following is a correct way to open a file data.txt in Python? ", option1: "a) file = open('data.txt')", option2: "b) file = open('data.txt', 'r')", option3: "c) file = open('data.txt', mode='r')", option4: "d) All of the above", c_option: "d) All of the above"},
    {question: "What will be the output of the following Python code snippet?<br>a = [1, 2, 3]<br>b = a<br>b[0] = 5<br>print(a)", option1: "a) [1, 2, 3]", option2: "b) [5, 2, 3]", option3: "c) [5, 2, 3, 5]", option4: "d) [5, 2, 3, 1]", c_option: "b) [5, 2, 3]"},
    {question: "What does the pass statement do in Python? ", option1: "a) It terminates the program", option2: "b) It skips to the next iteration of a loop", option3: "c) It raises an exception", option4: "d) It does nothing; it's a null operation", c_option: "d) It does nothing; it's a null operation"},
    {question: "Which of the following statements is true about Python?", option1: " a) It must be compiled before execution", option2: "b) It is both interpreted and compiled", option3: "c) It is purely compiled", option4: "d) It is purely interpreted", c_option: "b) It is both interpreted and compiled"},
    {question: "What is the output of the following Python code?<br>print('abc'.replace('a', 'z'))", option1: "a) 'abc'", option2: "b) 'zbc'", option3: "c) 'abz'", option4: "d) 'zabc'", c_option: "b) 'zbc'"},
    {question: "Which of the following functions returns the length of a list in Python? ", option1: "a) length(list)", option2: "b) list.length()", option3: "c) len(list)", option4: "d) list.len()", c_option: "c) len(list)"},
    {question: "What will be the value of x after execution of the following code? image 1", option1: "a) 5", option2: "b) 6", option3: "c) 10", option4: "d) 15", c_option: "b) 6"},
    {question: "What will be the output of the following Python code? <br> a = [1, 2, 3]<br>b = a[:]<br>b[0] = 5<br>print(a)", option1: "a) [1, 2, 3]", option2: "b) [5, 2, 3]", option3: "c) [5, 2, 3, 1]", option4: "d) [1, 2, 3, 5]", c_option: "a) [1, 2, 3]"},
    {question: "In Python, which keyword is used to define a function? ", option1: "a) func", option2: "b) define", option3: "c) def", option4: "d) function", c_option: "c) def"},
    {question: "What will be the output of the following Python code? a = {1, 2, 3} <br> b = {3, 4, 5} <br> print(a & b)", option1: "a) {1, 2}", option2: "b) {3}", option3: "c) {3, 4, 5}", option4: "d) Error: sets do not support '&' operator", c_option: "b) {3}"},
    {question: "Which of the following is used to generate a random number in Python? ", option1: "a) random.random()", option2: "b) rand.randint()", option3: "c) random.randint()", option4: "d) rand.random()", c_option: "a) random.random()"},
    {question: "What will be the output of the following Python code? <br> a = 5 <br> b = 2 <br> print(a // b)", option1: "a) 2.5", option2: "b) 2", option3: "c) 2.0", option4: "d) 2.2", c_option: "b) 2"},
    {question: "In Python, which of the following is NOT a valid data type?", option1: " a) int", option2: "b) double", option3: "c) list", option4: "d) tuple", c_option: "b) double"},
    {question: "What will be the output of the following Python code? <br> a = 'Hello' <br> b = 'World' <br> print(a + ' ' + b)", option1: "a) HelloWorld", option2: "b) Hello World", option3: "c) Hello+World", option4: "d) Error: cannot concatenate str and int objects", c_option: "b) Hello World"},
    {question: "What will the print function in Python 3.x print? ", option1: "a) The values passed to it", option2: "b) The sum of the values passed to it", option3: "c) The expression evaluated", option4: "d) The result of the last expression evaluated", c_option: "a) The values passed to it"},
    {question: "Which of the following is used to read user input in Python? ", option1: "a) input()", option2: "b) read()", option3: "c) getInput()", option4: "d) userInput()", c_option: "a) input()"},
    {question: "What will be the output of the following Python code? <br> a = [1, 2, 3]<br> b = a <br> b.append(4)<br> print(a)", option1: "a) [1, 2, 3]", option2: "b) [1, 2, 3, 4]", option3: "c) [1, 2, 3, 1, 2, 3, 4]", option4: "d) Error: lists do not support 'append()' method", c_option: "b) [1, 2, 3, 4]"},
    {question: "What will be the output of the following Python code? <br> a = (1, 2, 3)<br> b = (4, 5)<br> print(a + b)", option1: "a) (1, 2, 3, 4, 5)", option2: "b) (5, 7, 8)", option3: "c) (1, 2, 3, 5, 4)", option4: "d) Error: tuples do not support '+' operator", c_option: "a) (1, 2, 3, 4, 5)"},
    {question: "What is the output of the following code? <br> x = 5 <br> y = 10 <br> print(x if x > y else y)", option1: "a) 5", option2: "b) 10  ", option3: "c) Error", option4: "d) None", c_option: "b) 10  "},
    {question: "Which of the following is the correct way to define a function in Python?", option1: "a) func x: print('Hello') ", option2: "b) def func(x): print('Hello')  ", option3: "c) func(x) = print('Hello') ", option4: "d) function x() { print('Hello') } ", c_option: "b) def func(x): print('Hello')  "},
    {question: "What is the data type of a variable declared with name = 'John'?", option1: "a) Integer ", option2: "b) Float ", option3: "c) String  ", option4: "d) Boolean", c_option: "c) String  "},
    {question: "4.	What is the purpose of the in keyword in Python?", option1: "a) To perform arithmetic operations", option2: "b) To check if a value exists in a sequence  ", option3: "c) To define a loop ", option4: "d", c_option: "b) To check if a value exists in a sequence  "},
    {question: "Test", option1: "a", option2: "b", option3: "c", option4: "d", c_option: "t"},
    {question: "Test", option1: "a", option2: "b", option3: "c", option4: "d", c_option: "t"},

]).then((res) =>{
    console.log(res);
});
// {question: "Test", option1: "a", option2: "b", option3: "c", option4: "d", c_option: "t"},
//     {question: "Test", option1: "a", option2: "b", option3: "c", option4: "d", c_option: "t"},
//     {question: "Test", option1: "a", option2: "b", option3: "c", option4: "d", c_option: "t"},
