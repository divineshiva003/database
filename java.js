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
    {question: "What is the size of the int data type in Java?", option1: "(a) 4 bytes", option2: "(b) 2 bytes", option3: "(c) 8 bytes", option4: "(d) 1 byte", c_option: "(a) 4 bytes"},
    {question: "Which of the following is a reserved keyword in Java?", option1: "(a) run", option2: "(b) goto", option3: "(c) catcher", option4: "(d) hello", c_option: "(b) goto"},
    {question: "Which method is used to start a thread in Java?", option1: "(a) init()", option2: "(b) run()", option3: "(c) start()", option4: "(d) begin()", c_option: "(c) start()"},
    {question: "Which of the following is not a primitive data type in Java?", option1: "(a) int", option2: "(b) float", option3: "(c) String", option4: "(d) boolean", c_option: "(c) String"},
    {question: "Which of these access specifiers can be used for a class in Java?", option1: "(a) protected", option2: "(b) private", option3: "(c) public", option4: "(d) transient", c_option: "(c) publict"},
    {question: "Which of the following is the correct way to declare an array in Java?", option1: "(a) int arr[] = new int[5];", option2: "(b) int arr = new int[5];", option3: "(c) int arr[5] = new int[];", option4: "(d) int arr() = new int[5];", c_option: "(a) int arr[] = new int[5];"},
    {question: "Which of the following is not a Java feature?", option1: "(a) Objectoriented", option2: "(b) Portable", option3: "(c) Dynamic", option4: "(d) Use of pointers", c_option: "(d) Use of pointers"},
    {question: "What is the default value of a boolean variable in Java?", option1: "(a) true", option2: "(b) false", option3: "(c) 1", option4: "(d) 0", c_option: "(b) false"},
    {question: "Which of these is a superclass of all classes in Java?", option1: "(a) java.util", option2: "(b) java.lang.String", option3: "(c) java.lang.Object", option4: "(d) java.awt", c_option: "(c) java.lang.Object"},
    {question: "Which of the following loops will execute at least once?", option1: " (a) for", option2: "(b) while", option3: "(c) dowhile", option4: "(d) foreach", c_option: "(c) dowhile"},
    {question: "Which of the following statements is true about a constructor?", option1: "(a) A constructor must have a return type.", option2: "(b) A constructor is called only once during an object's lifetime.", option3: "(c) A constructor can be inherited.", option4: "(d) A constructor cannot have the same name as the class.", c_option: "(b) A constructor is called only once during an object's lifetime."},
    {question: "What is the output of the following code?<br>System.out.println(5 + 3 + `Hello`);", option1: "(a) Hello8", option2: "(b) 8Hello", option3: "(c) 53Hello", option4: "(d) Hello53", c_option: "(b) 8Hello"},
    {question: "Which keyword is used to prevent a class from being subclassed?", option1: "(a) final", option2: "(b) static", option3: "(c) protected", option4: "(d) transient", c_option: "(a) final"},
    {question: "How can you make a class immutable in Java?", option1: "(a) By declaring all fields as final.", option2: "(b) By providing only getter methods and no setter methods.", option3: "(c) By making the class final.", option4: "(d) All of the above", c_option: "(d) All of the above"},
    {question: "Which of the following can be used to create an instance of an abstract class?", option1: "(a) Direct instantiation", option2: "(b) Anonymous inner class", option3: "(c) Using new keyword", option4: "(d) None of the above", c_option: "(b) Anonymous inner class"},
    {question: "Which method is used to find the length of a string in Java?", option1: "(a) length()", option2: "(b) size()", option3: "(c) getSize()", option4: "(d) count()", c_option: "(a) length()"},
    {question: "What will be the result of the following code? <br> String str = `Hello`; <br> String newStr = str.concat(`World`); <br> System.out.println(str);", option1: "(a) HelloWorld", option2: "(b) World", option3: "(c) Hello", option4: "(d) Hello World", c_option: "(c) Hello"},
    {question: "Which exception is thrown when an array is accessed with an illegal index?", option1: "(a) ArrayStoreException", option2: "(b) NullPointerException", option3: "(c) ArrayIndexOutOfBoundsException", option4: "(d) IllegalArgumentException", c_option: "(c) ArrayIndexOutOfBoundsException"},
    {question: "Which of the following is not a valid way to create a thread in Java?", option1: "(a) Extending the Thread class", option2: "(b) Implementing the Runnable interface", option3: "(c) Implementing the Callable interface", option4: "(d) Using the Thread interface", c_option: "(d) Using the Thread interface"},
    {question: "What is the output of the following code? <br> int x = 5; <br> int y = 10; <br> System.out.println(x > y ? x : y);", option1: "(a) 5", option2: "(b) 10", option3: "(c) x", option4: "(d) y", c_option: "(b) 10"},
    {question: "What is the purpose of the transient keyword?", option1: "(a) To mark a variable as volatile", option2: "(b) To prevent a variable from being serialized", option3: "(c) To declare a method as synchronized", option4: "(d) To make a variable threadsafe", c_option: "(b) To prevent a variable from being serialized"},
    {question: "Which of the following correctly declares a generic class in Java?", option1: "(a) class MyClass<> {}", option2: "(b) class MyClass<T> {}", option3: "(c) class MyClass<T, U> {}", option4: "(d) Both B and C", c_option: "(d) Both B and C"},
    {question: "What will be the output of the following code? <br> List<Integer> list = Arrays.asList(1, 2, 3); <br> for (int i : list) { <br> System.out.print(i + ` `); <br> }", option1: "(a) 123", option2: "(b) 1 2 3", option3: "(c) 3 2 1", option4: "(d) 1, 2, 3", c_option: "(b) 1 2 3"},
    {question: "What does the hashCode() method do in Java?", option1: "(a) Returns a unique integer for each object", option2: "(b) Converts an object into a string", option3: "(c) Returns an integer representation of the object", option4: "(d) Compares two objects for equality", c_option: "(c) Returns an integer representation of the object"},
    {question: "What is the time complexity of inserting an element into a HashMap in Java?", option1: "(a) O(1)", option2: "(b) O(n)", option3: "(c) O(log n)", option4: "(d) O(n log n)", c_option: "(a) O(1)"},
    {question: "Which of the following is not a part of Java's memory management model?", option1: "(a) Stack", option2: "(b) Queue", option3: "(c) Heap", option4: "(d) Garbage Collection", c_option: "(b) Queue"},
    {question: "Which of these is a valid lambda expression in Java?", option1: "(a) ()>System.out.println(`Hello`)", option2: "(b) System.out.println(`Hello`)", option3: "(c) ()>{return `Hello`;}", option4: "(d) String s = ()>`Hello`", c_option: "(a) ()>System.out.println(`Hello`)"},
    {question: "What is the result of 10 >> 2 in Java?", option1: "(a) 20", option2: "(b) 5", option3: "(c) 2", option4: "(d) 40", c_option: "(c) 2"},
    {question: "Which method is called by the garbage collector before an object is destroyed?", option1: "(a) dispose()", option2: "(b) delete()", option3: "(c) finalize()", option4: "(d) destroy()", c_option: "(c) finalize()"},
    {question: "Which of the following can be used to create a synchronized block of code?", option1: "(a) synchronized(this){}", option2: "(b) synchronized(class){}", option3: "(c) synchronized(Object o){}", option4: "(d) All of the above", c_option: "(a) synchronized(this){}"},
]).then((res) =>{
    console.log(res);
});
//  {question: "Test", option1: "a", option2: "b", option3: "c", option4: "d", c_option: "t"},
//     {question: "Test", option1: "a", option2: "b", option3: "c", option4: "d", c_option: "t"},
//     {question: "Test", option1: "a", option2: "b", option3: "c", option4: "d", c_option: "t"},
