const question = [
    {
      "question": "If A is the brother of B, B is the sister of C, and C is the father of D, how is A related to D?",
      "options": ["Uncle", "Brother", "Father", "Cousin"],
      "answer": "Uncle",
      "correct": 0
    },
    {
      "question": "Complete the series: 2, 6, 12, 20, ?",
      "options": ["30", "28", "32", "36"],
      "answer": "30",
      "correct": 0
    },
    {
      "question": "Find the odd one out: Apple, Banana, Grapes, Carrot",
      "options": ["Apple", "Banana", "Grapes", "Carrot"],
      "answer": "Carrot",
      "correct": 3
    },
    {
      "question": "What comes next in the series: A, C, F, J, ?",
      "options": ["M", "N", "O", "P"],
      "answer": "O",
      "correct": 2
    },
    {
      "question": "If 1 = 3, 2 = 3, 3 = 5, and 4 = 4, what is 5 equal to?",
      "options": ["4", "5", "3", "2"],
      "answer": "4",
      "correct": 0
    },
    {
      "question": "Ravi is older than Sanjay. Sanjay is older than Kiran. Who is the youngest?",
      "options": ["Ravi", "Sanjay", "Kiran", "Cannot determine"],
      "answer": "Kiran",
      "correct": 2
    },
    {
      "question": "Choose the correct pattern: 4, 9, 16, 25, ?",
      "options": ["36", "49", "30", "40"],
      "answer": "36",
      "correct": 0
    },
    {
      "question": "Which word does not belong to the group? Cat, Dog, Lion, Eagle",
      "options": ["Cat", "Dog", "Lion", "Eagle"],
      "answer": "Eagle",
      "correct": 3
    },
    {
      "question": "If RAM is coded as 27, what is the code for CAT?",
      "options": ["24", "27", "29", "30"],
      "answer": "27",
      "correct": 1
    },
    {
      "question": "Pointing to a woman, John said, 'She is the daughter of my grandfather's only son.' Who is the woman?",
      "options": ["Mother", "Sister", "Cousin", "Daughter"],
      "answer": "Sister",
      "correct": 1
    },
    {
      "question": "Complete the analogy: Book : Read :: Pen : ?",
      "options": ["Write", "Ink", "Paper", "Pencil"],
      "answer": "Write",
      "correct": 0
    },
    {
      "question": "In a code language, TREE is written as UQFD. How is FLOWER written?",
      "options": ["GNQXFS", "EMNVFS", "GNMXFS", "GKQXFT"],
      "answer": "GNQXFS",
      "correct": 0
    },
    {
      "question": "If P + Q = R, R + S = T, and T + U = V, then P + Q + S + U equals?",
      "options": ["R + S + U", "T + U", "V - P", "V"],
      "answer": "V",
      "correct": 3
    },
    {
      "question": "If 12 is related to 144, how is 7 related to?",
      "options": ["49", "343", "28", "21"],
      "answer": "49",
      "correct": 0
    },
    {
      "question": "Which of the following is a leap year?",
      "options": ["2000", "1900", "2100", "2200"],
      "answer": "2000",
      "correct": 0
    },
    {
      "question": "In a family of six, A is the father of B. B is the mother of C. How is A related to C?",
      "options": ["Father", "Grandfather", "Uncle", "Brother"],
      "answer": "Grandfather",
      "correct": 1
    },
    {
      "question": "Complete the series: 3, 6, 11, 18, ?",
      "options": ["25", "27", "28", "35"],
      "answer": "27",
      "correct": 1
    },
    {
      "question": "If 5 apples cost $15, what will 10 apples cost?",
      "options": ["$30", "$25", "$50", "$35"],
      "answer": "$30",
      "correct": 0
    },
    {
      "question": "Which figure is different: Triangle, Rectangle, Square, Circle?",
      "options": ["Triangle", "Rectangle", "Square", "Circle"],
      "answer": "Circle",
      "correct": 3
    },
    {
      "question": "What comes next: AZ, BY, CX, ?",
      "options": ["DW", "DZ", "CW", "DWZ"],
      "answer": "DW",
      "correct": 0
    },
    {
      "question": "Find the next number in the sequence: 2, 4, 8, 16, ?",
      "options": ["24", "32", "64", "128"],
      "answer": "32",
      "correct": 1
    },
    {
      "question": "A clock shows 5:30. What is the angle between the hour and minute hand?",
      "options": ["15°", "30°", "45°", "90°"],
      "answer": "15°",
      "correct": 0
    },
    {
      "question": "What is the next number in the series: 121, 144, 169, 196, ?",
      "options": ["225", "256", "324", "289"],
      "answer": "225",
      "correct": 0
    },
    {
      "question": "If BLUE is coded as ELYB, how is GREEN coded?",
      "options": ["NEERG", "RENEG", "NERGE", "EERNG"],
      "answer": "NEERG",
      "correct": 0
    },
    {
      "question": "Pointing to a photo, Sarah said, 'He is the son of my father's only son.' Who is the person in the photo?",
      "options": ["Sarah's Brother", "Sarah's Cousin", "Sarah's Nephew", "Sarah's Son"],
      "answer": "Sarah's Brother",
      "correct": 0
    },
    {
      "question": "If DOG is coded as 4157, how is CAT coded?",
      "options": ["3157", "3127", "5147", "3147"],
      "answer": "3157",
      "correct": 0
    },
    {
      "question": "Complete the analogy: Day : Night :: White : ?",
      "options": ["Black", "Bright", "Light", "Dark"],
      "answer": "Black",
      "correct": 0
    },
    {
      "question": "If A = 1, B = 3, C = 5, what is E?",
      "options": ["7", "9", "11", "13"],
      "answer": "9",
      "correct": 1
    },
    {
      "question": "In a certain code, JUMP is written as PLUM. How is HAND written?",
      "options": ["DNHA", "NDHA", "DANH", "NHAD"],
      "answer": "DNHA",
      "correct": 0
    },
    {
      "question": "Choose the odd one out: 81, 121, 100, 144, 169",
      "options": ["81", "121", "100", "144"],
      "answer": "81",
      "correct": 0
    }
  ]
  