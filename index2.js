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
    {question: "Which of the following special symbol allowed in a variable name?", option1: "(a) * (asterisk)", option2: "(b) | (pipeline)", option3: "(c)	- (hyphen)", option4: "(d) _ (underscore)", c_option: "(d) _ (underscore)"},
    {question: "When we mention the prototype of a function?", option1: "(a) Defining", option2: "(b) Declaring", option3: "(c)	Prototyping", option4: "(d)	Calling", c_option: "(a) Defining"},
    {question: "Point out the error in the following program (if it is compiled with Turbo C compiler). image 1", option1: "(a)	No error", option2: "(b) display() doesn't get invoked", option3: "(c) display() is called before it is defined", option4: "(d)	None of these", c_option: "(c) display() is called before it is defined"},
    {question: "Point out the error in the following program. image 2", option1: "(a) Error: Declaration syntax error 'v' (or) Size of v is unknown or zero.", option2: "(b) Program terminates abnormally.", option3: "(c)	No error.", option4: "(d) None of these.", c_option: "(a) Error: Declaration syntax error 'v' (or) Size of v is unknown or zero."},
    {question: "A long double can be used if range of a double is not enough to accommodate a real number.", option1: "(a) True", option2: "(b)	False", c_option: "(a) True"},
    {question: "A float is 4 bytes wide, whereas a double is 8 bytes wide.", option1: "(a) True", option2: "(b)	False", c_option: "(a) True"},
    {question: "Size of short integer and long integer can be verified using the sizeof() operator.", option1: "(a)	True", option2: "(b) False", c_option: "(a)	True"},
    {question: "Which of the following is the correct order of evaluation for the below expression? z = x + y * z / 4 % 2-1", option1: "(a)	* / % +=", option2: "(b) = * / % + -", option3: "(c) / * %+ =", option4: "(d) * % /+ =", c_option: "(a)	* / % +="},
    {question: "Which of the following are unary operators in C ? 1. !   2.	sizeof  3.	~   4.	&&", option1: "(a) 1, 2", option2: "(b)	1, 3", option3: "(c) 2, 4", option4: "(d) 1, 2, 3", c_option: "(d) 1, 2, 3"},
    {question: "In which order do the following gets evaluated 1. Relational  2. Arithmetic  3.	Logical 4. Assignment", option1: "(a) 2134", option2: "(b) 1234", option3: "(c) 4321", option4: "(d) 3214", c_option: "(a) 2134"},
    {question: "Operators: What is the output of the following code snippet? int x = 5; printf('%d\n', x++); ", option1: "(a) 4 ", option2: "(b) 5 ", option3: "(c)	Compilation Error ", option4: "(d) Unexpected Behavior ", c_option: "(b) 5 "},
    {question: "Pointers: What does the following code do? int *ptr; ptr = &x; *ptr = 10; ", option1: "(a) Assigns 10 to x ", option2: "(b)	Creates an array ", option3: "(c) Assigns the address of x to ptr ", option4: "(d) None of the above ", c_option: "(c) Assigns the address of x to ptr "},
    {question: "Arrays: How can you access the third element of an array named data with 10 elements? ", option1: "(a) data[2] ", option2: "(b)	data(3) ", option3: "(c) data.3", option4: "(d)	None of the above ", c_option: "(a) data[2] "},
    {question: "Loops: What is an infinite loop in C? ", option1: "(a) for (int i = 0; i < 10; i++) { } ", option2: "(b) while (true) { } ", option3: "(c) do { } while (false); ", option4: "(d) for (int i = 10; i > 0; i--) { } ", c_option: "(b) while (true) { } "},
    {question: "Functions: What is the purpose of a function prototype? ", option1: "(a) To declare a variable ", option2: "(b)	To define a function body ", option3: "(c) To declare a function's signature ", option4: "(d) To call a function ", c_option: "(c) To declare a function's signature "},
    {question: "String Manipulation: What function is used to print a string to the console? ", option1: "(a) getline() ", option2: "(b) scanf() ", option3: "(c) printf() ", option4: "(d)	strlen() ", c_option: "(c) printf() "},
    {question: "Preprocessor Directives: What does #include <stdio.h> do in C code? ", option1: "(a) Defines a macro ", option2: "(b) Includes the standard input/output library ", option3: "(c) Declares a variable ", option4: "(d) Starts a comment block ", c_option: "(b) Includes the standard input/output library "},
    {question: "Memory Management: How can you allocate memory dynamically in C? ", option1: "(a) Using arrays ", option2: "(b)	Using malloc() ", option3: "(c)	Using variables ", option4: "(d) Using free()", c_option: "(b) Using malloc() "},
    {question: "Output: Which code snippet will print 'Hello, World!'? ", option1: "(a) printf('Hello, World!'); ", option2: "(b) cout << 'Hello, World!'; ", option3: "(c) int main() { ... } ", option4: "(d) #include <stdio.h>", c_option: "(a) printf('Hello, World!'); "},
    {question: "Data Types: What is the size of an int variable in C on a 32-bit system? ", option1: "(a) 1 byte ", option2: "(b) 2 bytes ", option3: "(c) 4 bytes ", option4: "(d) 8 bytes", c_option: "(b) 2 bytes "},
    {question: "Arrays: How do you access the third element of an array named numbers with 10 elements? ", option1: "(a) numbers[2] ", option2: "(b) numbers(3) ", option3: "(c) 3[numbers] ", option4: "(d) getnumbers(2);", c_option: "(a) numbers[2] "},
    {question: "Pointers: What does the following code print: int x = 5; int *ptr = &x; printf('%d', *ptr); ", option1: "(a) Memory address of x", option2: "(b) Compilation error", option3: "(c) Garbage value", option4: "(d) 5", c_option: "(d) 5"},
    {question: "Functions: What is the purpose of the return statement in a function? ", option1: "(a) To declare variables ", option2: "(b) To define a function ", option3: "(c) To control program flow and optionally return a value ", option4: "(d) To access global variables", c_option: "(c) To control program flow and optionally return a value "},
    {question: "Loops: What will the following code print: for (int i = 0; i < 5; i++) { printf('%d', i); } ", option1: "(a) 0 1 2 3 4 ", option2: "(b) 1 2 3 4 5 ", option3: "(c) 5 4 3 2 1 ", option4: "(d) Infinite loop", c_option: "(a) 0 1 2 3 4 "},
    {question: "Strings: How do you declare a character array to store the string 'Hello'? ", option1: "(a) char message = 'Hello'; ", option2: "(b) char message[] = 'Hello'; ", option3: "(c) string message = 'Hello'; ", option4: "(d) int message[5] = {'H', 'e', 'l', 'l', 'o'};", c_option: "(b) char message[] = 'Hello'; "},
    {question: "Input/Output: How do you read an integer from the user in C? ", option1: "(a) int num = scanf('%d'); ", option2: "(b) int num = getchar(); ", option3: "(c) cin >> num; ", option4: "(d) int num = input('%d'); ", c_option: "(d) int num = input('%d'); "},
    {question: "Operators: What is the output of 5 % 2? ", option1: "(a) 0 ", option2: "(b) 2 ", option3: "(c) 3 ", option4: "(d) Compile Error", c_option: "(a) 0 "},
    {question: "Conditional Statements: What does the if statement check for? ", option1: "(a) Loop condition ", option2: "(b) Function call ", option3: "(c) Conditional execution based on a boolean expression ", option4: "(d) Variable declaration", c_option: "(c) Conditional execution based on a boolean expression "},
    {question: "Bitwise Operators: What is the result of 10 & 7 (bitwise AND)? ", option1: "(a) 3 ", option2: "(b) 10 ", option3: "(c) 7 ", option4: "(d) 17", c_option: "(a) 3 "},
    {question: "Structures: What is the purpose of structures in C? ", option1: "(a) To define arrays ", option2: "(b) To group related variables under a single name ", option3: "(c) To define functions ", option4: "(d) To perform memory allocation", c_option: "(b) To group related variables under a single name "},
    {question: "Recursion: What is recursion? ", option1: "(a) A function calling itself ", option2: "(b) A loop that iterates a fixed number of times ", option3: "(c) A way to define constants ", option4: "(d) A method for memory management", c_option: "(a) A function calling itself "},
    {question: "Preprocessor Directives: What does #include <stdio.h> do? ", option1: "(a) Declares user-defined functions ", option2: "(b) Includes standard input/output library ", option3: "(c) Defines a macro ", option4: "(d) Starts the main function", c_option: "(b) Includes standard input/output library "},
    {question: "Memory Management: How do you allocate memory dynamically in C? ", option1: "(a) Using new keyword", option2: "(b) By declaring a variable", option3: "(c) Using malloc function ", option4: "(d) Through inheritance", c_option: "(c) Using malloc function "},
    {question: "What is the output of the following code snippet? image 3", option1: "(a) x is 10  ", option2: "(b) x is not 10  ", option3: "(c) Compiler Error  ", option4: "(d) Runtime Error  ", c_option: "(a) x is 10  "},
    {question: "What is the result of sizeof(char) in C?", option1: "(a) 1 ", option2: "(b) 2 ", option3: "(c) 4 ", option4: "(d) Depends on the compiler ", c_option: "(a) 1 "},
    {question: "Which of the following is not a valid variable name in C?", option1: "(a) my_var  ", option2: "(b) _myVar  ", option3: "(c) 1st_variable  ", option4: "(d) myVar2  ", c_option: "(c) 1st_variable  "},
    {question: "What is the output of the following code snippet? image 4", option1: "(a) 5, 7  ", option2: "(b) 5, 6  ", option3: "(c) 6, 7  ", option4: "(d) 6, 6  ", c_option: "(c) 6, 7  "},
    {question: "What will be the output of the following code? image 5", option1: "(a) Hello  ", option2: "(b) Compiler Error  ", option3: "(c) Undefined behavior  ", option4: "(d) Null character  ", c_option: "(d) Null character  "},
    {question: "What is the value of *(ptr + 2) where ptr is an integer pointer pointing to the base address of an integer array?", option1: "(a) Value at the third element of the array  ", option2: "(b) Address of the third element of the array  ", option3: "(c) Value at the address stored in the third element  ", option4: "(d) Address of the array  ", c_option: "(a) Value at the third element of the array  "},
    {question: "Which of the following is not a valid way to declare a structure in C?", option1: "(a) struct point { int x, y; };  ", option2: "(b) typedef struct { int x, y; } Point;  ", option3: "(c) typedef { int x, y; } Point;  ", option4: "(d) struct { int x, y; } point;  ", c_option: "(c) typedef { int x, y; } Point;  "},
    {question: "What does the fgets() function in C do?", option1: "(a) Reads a string from standard input  ", option2: "(b) Reads an integer from standard input  ", option3: "(c) Reads a character from standard input  ", option4: "(d) Reads a line from a file  ", c_option: "(a) Reads a string from standard input  "},
    {question: "What is the output of the following code snippet? image 6", option1: "(a) 5 6 7  ", option2: "(b) 7 6 5  ", option3: "(c) 6 7 5  ", option4: "(d) Compiler Error  ", c_option: "(c) 6 7 5  "},
    {question: "What is the result of 2 << 2 in C?", option1: "(a) 4  ", option2: "(b) 8  ", option3: "(c) 2  ", option4: "(d) 16  ", c_option: "(b) 8  "},
    {question: "Which of the following is a correct way to define a macro in C?", option1: "(a) #define MAX(a, b) { a > b ? a : b }  ", option2: "(b) #define MAX(a, b) (a > b ? a : b)  ", option3: "(c) #define MAX(a, b) if (a > b) a else b  ", option4: "(d) #define MAX(a, b) [a > b ? a : b]  ", c_option: "(b) #define MAX(a, b) (a > b ? a : b)  "},
    {question: "What is the output of the following code snippet? image 7", option1: "(a) 0 1 2 3 4  ", option2: "(b) 0 1 2 3  ", option3: "(c) 1 2 3 4 5  ", option4: "(d) Infinite loop  ", c_option: "(a) 0 1 2 3 4  "},
    {question: "Which of the following is true about NULL in C?", option1: "(a) It represents an empty character  ", option2: "(b) It is equivalent to an empty string  ", option3: "(c) It is used to indicate that a pointer does not point to a valid object  ", option4: "(d) It is a keyword for an undefined value  ", c_option: "(c) It is used to indicate that a pointer does not point to a valid object  "},
    {question: "What does the sizeof operator return in C?", option1: "(a) Size of a variable  ", option2: "(b) Size of a function  ", option3: "(c) Size of a structure  ", option4: "(d) Size of a type  ", c_option: "(d) Size of a type  "},
    {question: "What is the correct way to allocate memory dynamically for an integer in C?", option1: "(a) malloc(int)  ", option2: "(b) malloc(sizeof(int))  ", option3: "(c) malloc(4)  ", option4: "(d) malloc(sizeof(int*)) ", c_option: "(b) malloc(sizeof(int))  "},
    {question: "What will be the output of the following code? image 8 ", option1: "(a) 1  ", option2: "(b) 2  ", option3: "(c) 3  ", option4: "(d) 4  ", c_option: "(c) 3  "},
    {question: "What is the output of the following code snippet? image 9", option1: "(a) 0  ", option2: "(b) 10  ", option3: "(c) Address of x  ", option4: "(d) Compiler Error  ", c_option: "(b) 10  "},
    {question: "Which of the following is not a valid way to declare a function pointer in C?", option1: "(a) int (*funcPtr)(int, int);  ", option2: "(b) int *funcPtr(int, int);  ", option3: "(c) int (*funcPtr[])(int, int);  ", option4: "(d) typedef int (*funcPtr)(int, int);  ", c_option: "(b) int *funcPtr(int, int);  "},
    {question: "What is the output of the following code snippet? image 10", option1: "(a) H  ", option2: "(b) e  ", option3: "(c) Hello  ", option4: "(d) Compiler Error  ", c_option: "(a) H  "},
    {question: "What is the correct way to declare a constant pointer to an integer in C?", option1: "(a) const int *ptr;  ", option2: "(b) int * const ptr;  ", option3: "(c) const int * const ptr;  ", option4: "(d) const int * const *ptr;  ", c_option: "(b) int * const ptr;  "},
]).then((res) =>{
    console.log(res);
});
// {question: "Test", option1: "a", option2: "b", option3: "c", option4: "d", c_option: "t"},
//     {question: "Test", option1: "a", option2: "b", option3: "c", option4: "d", c_option: "t"},
//     {question: "Test", option1: "a", option2: "b", option3: "c", option4: "d", c_option: "t"},
