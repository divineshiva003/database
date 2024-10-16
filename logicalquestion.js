const questions = [
    {
        question: "Logical Reasoning: John can speak English and French. If someone can speak English, they can speak Spanish. Can John speak Spanish?",
        options: ["Yes, definitely", "No, definitely", "Maybe", "Cannot be determined"],
        answer: "Maybe",
        correct: 2
    },
    {
        question: "Data Analysis: A company's sales increase every year. There is a positive correlation between sales and marketing budget. Can we conclude that increasing the marketing budget will always increase sales?",
        options: ["Yes", "No, correlation doesn't imply causation", "Maybe", "Need more data"],
        answer: "No, correlation doesn't imply causation",
        correct: 1
    },
    {
        question: "Analogy: Cup is to saucer as spoon is to:",
        options: ["Soup", "Fork", "Plate", "Knife"],
        answer: "Plate",
        correct: 2
    },
    {
        question: "Series Completion: 2, 4, 8, 16, ... What is the next number in the series?",
        options: ["20", "24", "32", "40"],
        answer: "32",
        correct: 2
    },
    {
        question: "Coding Decoding: If APPLE is coded as 11110000, how is CAT coded?",
        options: ["030120", "100001", "000100", "110001"],
        answer: "030120",
        correct: 0
    },
    {
        question: "Statement and Assumption: Statement: All programmers drink coffee. Assumption: John is a programmer. Does the assumption imply the statement is true?",
        options: ["Yes", "No", "Maybe", "Need more information"],
        answer: "No",
        correct: 1
    },
    {
        question: "Statement and Argument: Statement: We should invest in cybersecurity training. Argument: Hackers are becoming more sophisticated. Does the argument support the statement?",
        options: ["Yes", "No", "Maybe", "Need more information"],
        answer: "Yes",
        correct: 0
    },
    {
        question: "Strengthening Arguments: Which answer choice strengthens the argument: 'We should use cloud storage. It's more secure.'",
        options: ["Cloud storage is cheaper than traditional storage.", "Security breaches are on the rise.", "Everyone else is using cloud storage.", "There are many different cloud storage providers."],
        answer: "Security breaches are on the rise.",
        correct: 1
    },
    {
        question: "Weakening Arguments: Which answer choice weakens the argument: 'Self-driving cars are safer. They don't get distracted.'",
        options: ["Self-driving cars are still under development.", "Human drivers can be reckless.", "Self-driving cars are expensive.", "There are no traffic laws for self-driving cars."],
        answer: "Self-driving cars are still under development.",
        correct: 0
    },
    {
        question: "Syllogism: All programmers are logical thinkers. Some logical thinkers are mathematicians. Thus, some mathematicians are programmers. Is the conclusion valid?",
        options: ["Yes", "No"],
        answer: "No",
        correct: 1
    },
    {
        question: "Odd One Out: In a group of shapes: circle, square, triangle, pentagon, rectangle. Which one doesn't belong?",
        options: ["Circle", "Square", "Triangle", "Pentagon"],
        answer: "Circle",
        correct: 0
    },
    {
        question: "Blood Relations: If A is the father of B, and B is the sister of C, how is A related to C?",
        options: ["Uncle", "Brother", "Father", "Cousin"],
        answer: "Uncle",
        correct: 0
    },
    {
        question: "Direction Sense: You are facing north. You turn 135 degrees to the right. What direction are you facing now?",
        options: ["North-west", "West", "South-west", "South-east"],
        answer: "South-west",
        correct: 2
    },
    {
        question: "Calendar and Time: If today is Wednesday, what day will it be 10 days from now?",
        options: ["Friday", "Saturday", "Sunday", "Monday"],
        answer: "Friday",
        correct: 0
    },
    {
        question: "Work and Wages: If 6 people can paint a room in 4 hours, how many people can paint the same room in 2 hours?",
        options: ["3", "8", "12", "Cannot be determined with the given information"],
        answer: "12",
        correct: 2
    },
    {
        question: "Four defensive football players are chasing the opposing wide receiver, who has the ball. Calvin is directly behind the ball carrier. Jenkins and Burton are side by side behind Calvin. Zeller is behind Jenkins and Burton. Calvin tries for the tackle but misses and falls. Burton trips. Which defensive player tackles the receiver?",
        options: ["Burton", "Zeller", "Jenkins", "Calvin"],
        answer: "Jenkins",
        correct: 2
    },
    {
        question: "Ms. Forest likes to let her students choose who their partners will be; however, no pair of students may work together more than seven class periods in a row. Adam and Baxter have studied together seven class periods in a row. Carter and Dennis have worked together three class periods in a row. Carter does not want to work with Adam. Who should be assigned to work with Baxter?",
        options: ["Carter", "Adam", "Dennis", "Forest"],
        answer: "Carter",
        correct: 0
    },
    {
        question: "Coding Logic: A function takes an integer as input and returns twice the number. If the function is called with the number 5, what is the output?",
        options: ["2", "5", "10", "Cannot be determined"],
        answer: "10",
        correct: 2
    },
    {
        question: "Data Sufficiency: Is the information sufficient to determine the average age of a group of 5 people if the total age is 150 years?",
        options: ["Yes", "No"],
        answer: "No",
        correct: 1
    },
    {
        question: "Analogy: Bug is to software as:",
        options: ["Disease is to body", "Error is to program", "Key is to lock", "Wrench is to tool"],
        answer: "Error is to program",
        correct: 1
    },
    {
        question: "Series Completion: 2, 5, 8, 11, ... What is the next number in the series?",
        options: ["13", "14", "15", "16"],
        answer: "15",
        correct: 2
    },
    {
        question: "Statement and Assumption: Statement: All web developers can write code. Assumption: John is a web developer. Does the assumption imply the statement is true?",
        options: ["Yes", "No", "Maybe", "Need more information"],
        answer: "No",
        correct: 1
    },
    {
        question: "Statement and Argument: Statement: Companies should invest in cybersecurity training for employees. Argument: Cyberattacks are becoming more sophisticated. Does the argument support the statement?",
        options: ["Yes", "No", "Maybe", "Need more information"],
        answer: "Yes",
        correct: 0
    },
    {
        question: "Strengthening Arguments: Which answer choice strengthens the argument: 'We should use cloud storage. It's more scalable.'",
        options: ["Cloud storage is cheaper than traditional storage.", "Data breaches are on the rise.", "Everyone else is using cloud storage.", "There are many different cloud storage providers."],
        answer: "Cloud storage is cheaper than traditional storage.",
        correct: 0
    },
    {
        question: "Weakening Arguments: Which answer choice weakens the argument: 'Self-driving cars are safer. They don't get distracted.'",
        options: ["Self-driving cars are still under development.", "Human drivers can be reckless.", "Self-driving cars are expensive.", "There are no traffic laws for self-driving cars."],
        answer: "Self-driving cars are still under development.",
        correct: 0
    },
    {
        question: "Syllogism: All programmers are logical thinkers. Some logical thinkers are mathematicians. Thus, some mathematicians are programmers. Is the conclusion valid?",
        options: ["Yes", "No"],
        answer: "No",
        correct: 1
    },
    {
        question: "Odd One Out: In a group of words: bug, feature, update, fix, crash. Which one doesn't belong?",
        options: ["Bug", "Feature", "Update", "Crash"],
        answer: "Crash",
        correct: 3
    },
    {
        question: "Blood Relations: If Sarah is the daughter of Michael, and Michael is the brother of David, how is David related to Sarah?",
        options: ["Uncle", "Brother", "Father", "Cousin"],
        answer: "Uncle",
        correct: 0
    },
    {
        question: "Direction Sense: You are facing south. You turn 180 degrees to the right. What direction are you facing now?",
        options: ["North", "East", "South", "West"],
        answer: "East",
        correct: 1
    },
    {
        question: "Calendar and Time: If today is Tuesday, what day will it be 15 days from now?",
        options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        answer: "Wednesday",
        correct: 1
    },
    {
        question: "Work and Wages: If 8 workers can complete a task in 12 hours, how long will it take 4 workers to complete the same task?",
        options: ["24 hours", "30 hours", "36 hours", "48 hours"],
        answer: "24 hours",
        correct: 0
    },
    {
        question: "Four defensive football players are chasing the opposing wide receiver, who has the ball. Calvin is directly behind the ball carrier. Jenkins and Burton are side by side behind Calvin. Zeller is behind Jenkins and Burton. Calvin tries for the tackle but misses and falls. Burton trips. Which defensive player tackles the receiver?",
        options: ["Burton", "Zeller", "Jenkins", "Calvin"],
        answer: "Jenkins",
        correct: 2
    },
    {
        question: "Ms. Forest likes to let her students choose who their partners will be; however, no pair of students may work together more than seven class periods in a row. Adam and Baxter have studied together seven class periods in a row. Carter and Dennis have worked together three class periods in a row. Carter does not want to work with Adam. Who should be assigned to work with Baxter?",
        options: ["Carter", "Adam", "Dennis", "Forest"],
        answer: "Carter",
        correct: 0
    },
    {
        question: "Coding Logic: A function takes an integer as input and returns twice the number. If the function is called with the number 10, what is the output?",
        options: ["20", "10", "5", "Cannot be determined"],
        answer: "20",
        correct: 0
    },
    {
        question: "Data Sufficiency: Is the information sufficient to determine the total height of a group of people if each person's height is known?",
        options: ["Yes", "No"],
        answer: "Yes",
        correct: 0
    },
    {
        question: "Analogy: Cat is to feline as dog is to:",
        options: ["Canine", "Mammal", "Pet", "Animal"],
        answer: "Canine",
        correct: 0
    },
    {
        question: "Series Completion: 3, 6, 9, 12, ... What is the next number in the series?",
        options: ["13", "15", "18", "21"],
        answer: "15",
        correct: 1
    },
    {
        question: "Statement and Assumption: Statement: All programmers can code. Assumption: John is a programmer. Does the assumption imply the statement is true?",
        options: ["Yes", "No", "Maybe", "Need more information"],
        answer: "No",
        correct: 1
    },
    {
        question: "Statement and Argument: Statement: Companies should invest in renewable energy. Argument: Climate change is a serious issue. Does the argument support the statement?",
        options: ["Yes", "No", "Maybe", "Need more information"],
        answer: "Yes",
        correct: 0
    },
    {
        question: "Strengthening Arguments: Which answer choice strengthens the argument: 'Investing in education is essential for economic growth.'",
        options: ["Education increases job opportunities.", "The economy is currently stable.", "Most people finish high school.", "There are many online courses available."],
        answer: "Education increases job opportunities.",
        correct: 0
    },
    {
        question: "Weakening Arguments: Which answer choice weakens the argument: 'Eating fruits is beneficial for health.'",
        options: ["Fruits contain sugar.", "Many people don't like fruits.", "Fruits are expensive.", "Fruits can cause allergies."],
        answer: "Fruits can cause allergies.",
        correct: 3
    },
    {
        question: "Syllogism: All humans are mortal. Socrates is a human. Therefore, Socrates is mortal. Is the conclusion valid?",
        options: ["Yes", "No"],
        answer: "Yes",
        correct: 0
    },
    {
        question: "Odd One Out: In a group of items: apple, banana, carrot, orange, grape. Which one doesn't belong?",
        options: ["Carrot", "Apple", "Banana", "Grape"],
        answer: "Carrot",
        correct: 0
    },
    {
        question: "Blood Relations: If Maria is the mother of Lucas, and Lucas is the son of Anna, how is Anna related to Maria?",
        options: ["Sister", "Daughter", "Mother-in-law", "Friend"],
        answer: "Mother-in-law",
        correct: 2
    },
    {
        question: "Direction Sense: You are facing east. You turn 270 degrees to the right. What direction are you facing now?",
        options: ["North", "West", "South", "East"],
        answer: "South",
        correct: 2
    },
    {
        question: "Calendar and Time: If today is Monday, what day will it be 21 days from now?",
        options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        answer: "Monday",
        correct: 0
    },
    {
        question: "Work and Wages: If 10 workers can complete a task in 15 hours, how long will it take 5 workers to complete the same task?",
        options: ["30 hours", "45 hours", "60 hours", "75 hours"],
        answer: "30 hours",
        correct: 0
    },
    {
        question: "Four defensive football players are chasing the opposing wide receiver, who has the ball. Calvin is directly behind the ball carrier. Jenkins and Burton are side by side behind Calvin. Zeller is behind Jenkins and Burton. Calvin tries for the tackle but misses and falls. Burton trips. Which defensive player tackles the receiver?",
        options: ["Calvin", "Burton", "Zeller", "Jenkins"],
        answer: "Jenkins",
        correct: 3
    },
    {
        question: "Ms. Forest likes to let her students choose who their partners will be; however, no pair of students may work together more than seven class periods in a row. Adam and Baxter have studied together seven class periods in a row. Carter and Dennis have worked together three class periods in a row. Carter does not want to work with Adam. Who should be assigned to work with Baxter?",
        options: ["Carter", "Adam", "Dennis", "Forest"],
        answer: "Carter",
        correct: 0
    },
    {
        question: "Coding Logic: A function takes an integer as input and returns the square of the number. If the function is called with the number 4, what is the output?",
        options: ["8", "16", "4", "Cannot be determined"],
        answer: "16",
        correct: 1
    },
    {
        question: "Data Sufficiency: Is the information sufficient to determine if a number is even if it is known to be divisible by 4?",
        options: ["Yes", "No"],
        answer: "Yes",
        correct: 0
    }
];