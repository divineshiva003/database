const question = [
    {
      "question": "A train 120 meters long passes a telegraph post in 10 seconds. What is the speed of the train?",
      "options": ["12 m/s", "15 m/s", "20 m/s", "25 m/s"],
      "answer": "12 m/s",
      "correct": 0
    },
    {
      "question": "Two trains are moving in opposite directions at 60 km/h and 90 km/h respectively. How long will it take for the trains to cross each other completely if their lengths are 120 m and 150 m?",
      "options": ["5 seconds", "6 seconds", "7 seconds", "8 seconds"],
      "answer": "6 seconds",
      "correct": 1
    },
    {
      "question": "A car travels 180 km in 4 hours. What is the speed of the car?",
      "options": ["45 km/h", "50 km/h", "55 km/h", "60 km/h"],
      "answer": "45 km/h",
      "correct": 0
    },
    {
      "question": "A cyclist covers a distance of 72 km in 4 hours. What is his speed in km/h?",
      "options": ["16 km/h", "18 km/h", "20 km/h", "24 km/h"],
      "answer": "18 km/h",
      "correct": 1
    },
    {
      "question": "A train moving at 72 km/h crosses a bridge in 30 seconds. If the length of the train is 150 meters, what is the length of the bridge?",
      "options": ["450 meters", "500 meters", "600 meters", "650 meters"],
      "answer": "450 meters",
      "correct": 0
    },
    {
      "question": "Two trains of equal length are running parallel to each other at speeds of 50 km/h and 70 km/h respectively. If they cross each other in 12 seconds, what is the length of each train?",
      "options": ["100 meters", "120 meters", "140 meters", "150 meters"],
      "answer": "120 meters",
      "correct": 1
    },
    {
      "question": "A boat takes 2 hours to travel 8 km downstream and 4 hours to travel the same distance upstream. What is the speed of the stream?",
      "options": ["1 km/h", "2 km/h", "3 km/h", "4 km/h"],
      "answer": "1 km/h",
      "correct": 0
    },
    {
      "question": "A man can row downstream at 6 km/h and upstream at 4 km/h. How far can he row downstream in 3 hours?",
      "options": ["12 km", "15 km", "18 km", "24 km"],
      "answer": "18 km",
      "correct": 2
    },
    {
      "question": "A train passes a platform 150 meters long in 15 seconds and a man standing on the platform in 10 seconds. What is the length of the train?",
      "options": ["100 meters", "120 meters", "130 meters", "150 meters"],
      "answer": "150 meters",
      "correct": 3
    },
    {
      "question": "A person covers a certain distance at a speed of 45 km/h and returns at 30 km/h. What is his average speed for the whole journey?",
      "options": ["36 km/h", "37.5 km/h", "40 km/h", "42 km/h"],
      "answer": "36 km/h",
      "correct": 0
    },
    {
      "question": "A train 120 meters long is running at a speed of 54 km/h. How much time will it take to pass a platform 180 meters long?",
      "options": ["15 seconds", "18 seconds", "20 seconds", "22 seconds"],
      "answer": "20 seconds",
      "correct": 2
    },
    {
      "question": "Two trains 200 meters and 150 meters long are moving in the same direction at 40 km/h and 60 km/h respectively. How long will it take for the faster train to completely pass the slower one?",
      "options": ["25 seconds", "27 seconds", "30 seconds", "32 seconds"],
      "answer": "30 seconds",
      "correct": 2
    },
    {
      "question": "A car travels a distance of 100 km in 2 hours and 30 minutes. What is its average speed?",
      "options": ["35 km/h", "38 km/h", "40 km/h", "45 km/h"],
      "answer": "40 km/h",
      "correct": 2
    },
    {
      "question": "A train moving at 60 km/h takes 1 minute to pass a man standing on the platform. What is the length of the train?",
      "options": ["500 meters", "600 meters", "700 meters", "800 meters"],
      "answer": "1000 meters",
      "correct": 3
    },
    {
      "question": "A boat can travel with a speed of 13 km/h in still water. If the speed of the stream is 4 km/h, what is the time taken by the boat to go 68 km downstream?",
      "options": ["3 hours", "4 hours", "5 hours", "6 hours"],
      "answer": "4 hours",
      "correct": 1
    },
    {
      "question": "A person takes 4 hours to row a distance of 24 km downstream and 6 hours to row the same distance upstream. What is the speed of the boat in still water?",
      "options": ["4 km/h", "5 km/h", "6 km/h", "7 km/h"],
      "answer": "5 km/h",
      "correct": 1
    },
    {
      "question": "A cyclist covers a distance of 15 km in 45 minutes. What is his speed in km/h?",
      "options": ["18 km/h", "20 km/h", "22 km/h", "24 km/h"],
      "answer": "20 km/h",
      "correct": 1
    },
    {
      "question": "A train crosses another train moving in the opposite direction in 12 seconds. If their lengths are 200 meters and 300 meters respectively and the speed of the first train is 60 km/h, what is the speed of the second train?",
      "options": ["70 km/h", "80 km/h", "90 km/h", "100 km/h"],
      "answer": "80 km/h",
      "correct": 1
    },
    {
      "question": "A man can row 20 km downstream in 2 hours and 12 km upstream in 3 hours. What is the speed of the stream?",
      "options": ["2 km/h", "3 km/h", "4 km/h", "5 km/h"],
      "answer": "2 km/h",
      "correct": 0
    },
    {
      "question": "A train passes a man standing on a platform in 7 seconds and passes the platform in 20 seconds. If the platform is 130 meters long, what is the length of the train?",
      "options": ["70 meters", "90 meters", "100 meters", "110 meters"],
      "answer": "90 meters",
      "correct": 1
    },
    {
      "question": "Two trains 120 meters and 150 meters long are moving in the same direction at 45 km/h and 60 km/h respectively. How long will it take for the faster train to completely pass the slower one?",
      "options": ["18 seconds", "20 seconds", "22 seconds", "25 seconds"],
      "answer": "20 seconds",
      "correct": 1
    },
    {
      "question": "A boat covers 40 km upstream and 60 km downstream in 12 hours. If the speed of the boat in still water is 10 km/h, what is the speed of the stream?",
      "options": ["2 km/h", "3 km/h", "4 km/h", "5 km/h"],
      "answer": "2 km/h",
      "correct": 0
    },
    {
      "question": "A car covers 150 km in 3 hours 20 minutes. What is its average speed?",
      "options": ["40 km/h", "45 km/h", "50 km/h", "55 km/h"],
      "answer": "45 km/h",
      "correct": 1
    },
    {
      "question": "Two trains running in opposite directions cross each other in 15 seconds. The length of the first train is 100 meters and the second train is 150 meters. If the first train runs at a speed of 36 km/h, what is the speed of the second train?",
      "options": ["54 km/h", "60 km/h", "72 km/h", "84 km/h"],
      "answer": "60 km/h",
      "correct": 1
    },
    {
      "question": "A train 110 meters long is running at a speed of 54 km/h. How long will it take to pass a man standing on the platform?",
      "options": ["5 seconds", "6 seconds", "7 seconds", "8 seconds"],
      "answer": "7 seconds",
      "correct": 2
    },
    {
      "question": "A boat can cover 45 km downstream in 3 hours and 30 km upstream in 5 hours. What is the speed of the boat in still water?",
      "options": ["8 km/h", "9 km/h", "10 km/h", "11 km/h"],
      "answer": "9 km/h",
      "correct": 1
    },
    {
      "question": "A car covers 200 km in 4 hours and 300 km in 5 hours. What is its average speed?",
      "options": ["50 km/h", "52 km/h", "55 km/h", "60 km/h"],
      "answer": "55 km/h",
      "correct": 2
    },
    {
      "question": "Two boats are moving in opposite directions. The speed of the first boat is 12 km/h and the speed of the second boat is 8 km/h. How long will it take for them to be 50 km apart?",
      "options": ["2 hours", "2.5 hours", "3 hours", "3.5 hours"],
      "answer": "2.5 hours",
      "correct": 1
    },
  {
    "question": "If the present age of A is twice that of B and the difference between their ages is 12 years, what is the age of B?",
    "options": ["12 years", "24 years", "6 years", "8 years"],
    "answer": "12 years",
    "correct": 0
  },
  {
    "question": "In 5 years, the age of John will be three times the age of his son. If the sum of their current ages is 40, what is John's present age?",
    "options": ["30 years", "25 years", "20 years", "35 years"],
    "answer": "30 years",
    "correct": 0
  },
  {
    "question": "The sum of the present ages of a father and his son is 60 years. Six years ago, the father's age was four times the age of the son. What is the present age of the son?",
    "options": ["12 years", "14 years", "16 years", "18 years"],
    "answer": "12 years",
    "correct": 0
  },
  {
    "question": "A person is 24 years older than his son. In two years, his age will be twice that of his son. What is the son's current age?",
    "options": ["20 years", "22 years", "26 years", "28 years"],
    "answer": "22 years",
    "correct": 0
  },
  {
    "question": "A person was born in 1980. What will his age be in the year 2040?",
    "options": ["40 years", "60 years", "50 years", "55 years"],
    "answer": "60 years",
    "correct": 0
  },
  {
    "question": "The difference between the ages of a mother and her daughter is 30 years. If the ratio of their ages is 5:2, how old is the daughter?",
    "options": ["10 years", "12 years", "15 years", "18 years"],
    "answer": "12 years",
    "correct": 0
  },
  {
    "question": "Ten years ago, the age of A was half of what B's age is now. If B is currently 40 years old, what was A's age ten years ago?",
    "options": ["20 years", "15 years", "10 years", "25 years"],
    "answer": "20 years",
    "correct": 0
  },
  {
    "question": "A father is three times as old as his son. After 15 years, he will be twice as old as his son. What is the son's current age?",
    "options": ["10 years", "15 years", "20 years", "25 years"],
    "answer": "15 years",
    "correct": 0
  },
  {
    "question": "A man says, 'The age of my father 10 years ago was three times my age at that time.' If the sum of their current ages is 100, what is the son's present age?",
    "options": ["25 years", "30 years", "35 years", "40 years"],
    "answer": "25 years",
    "correct": 0
  },
  {
    "question": "If 6 years ago, the age of A was twice the age of B, and the sum of their current ages is 36, what is A's present age?",
    "options": ["20 years", "22 years", "24 years", "26 years"],
    "answer": "24 years",
    "correct": 0
  },
  {
    "question": "The sum of the ages of a father and his son is 50 years. Five years ago, the father's age was four times the son's age. What is the present age of the father?",
    "options": ["36 years", "40 years", "45 years", "50 years"],
    "answer": "40 years",
    "correct": 0
  },
  {
    "question": "A man is currently four times as old as his daughter. In 20 years, he will be twice as old as her. What is the present age of the daughter?",
    "options": ["10 years", "15 years", "20 years", "25 years"],
    "answer": "10 years",
    "correct": 0
  },
  {
    "question": "The ages of A and B are in the ratio 7:5. Four years ago, the ratio was 11:7. What is the present age of A?",
    "options": ["28 years", "32 years", "36 years", "40 years"],
    "answer": "28 years",
    "correct": 0
  },
  {
    "question": "A father is currently three times as old as his son. After 15 years, the sum of their ages will be 70. What is the father's current age?",
    "options": ["30 years", "45 years", "50 years", "55 years"],
    "answer": "45 years",
    "correct": 0
  },
  {
    "question": "The ratio of the present ages of a mother and her daughter is 5:3. After 10 years, the ratio of their ages will be 7:5. What is the current age of the daughter?",
    "options": ["15 years", "20 years", "25 years", "30 years"],
    "answer": "15 years",
    "correct": 0
  },
  {
    "question": "A person is 24 years older than his son. In two years, his age will be twice that of his son. What is the son's current age?",
    "options": ["20 years", "22 years", "24 years", "26 years"],
    "answer": "22 years",
    "correct": 0
  },
  {
    "question": "The present ages of A and B are in the ratio 8:5. Five years ago, the ratio of their ages was 11:7. What is the present age of B?",
    "options": ["25 years", "20 years", "15 years", "30 years"],
    "answer": "25 years",
    "correct": 0
  },
  {
    "question": "A mother is three times as old as her son. In 12 years, she will be twice as old as her son. What is the present age of the mother?",
    "options": ["36 years", "40 years", "42 years", "48 years"],
    "answer": "36 years",
    "correct": 0
  },
  {
    "question": "The ratio of the present ages of A and B is 5:4. After 6 years, the ratio of their ages will be 7:6. What is the present age of A?",
    "options": ["25 years", "20 years", "30 years", "35 years"],
    "answer": "25 years",
    "correct": 0
  },
  {
    "question": "The sum of the ages of a father and son is 56 years. Six years ago, the father's age was four times the son's age. What is the son's present age?",
    "options": ["10 years", "12 years", "14 years", "16 years"],
    "answer": "14 years",
    "correct": 0
  },
  {
    "question": "A person says, 'My father's age is four times mine, but in 20 years, his age will be twice mine.' What is the current age of the person?",
    "options": ["20 years", "15 years", "10 years", "25 years"],
    "answer": "20 years",
    "correct": 0
  },
  {
    "question": "The age of a father is currently three times that of his son. In 12 years, their ages will be in the ratio of 5:2. What is the son's current age?",
    "options": ["10 years", "12 years", "15 years", "20 years"],
    "answer": "12 years",
    "correct": 0
  },
  {
    "question": "Five years ago, a father was 7 times older than his son. Now, their ages are in the ratio of 5:2. What is the son's present age?",
    "options": ["10 years", "12 years", "15 years", "20 years"],
    "answer": "12 years",
    "correct": 0
  },
  {
    "question": "A person says, 'My mother's age is five times my age. In 15 years, it will be three times my age.' What is the current age of the person?",
    "options": ["10 years", "15 years", "20 years", "25 years"],
    "answer": "10 years",
    "correct": 0
  },
  {
    "question": "In 8 years, a father will be three times as old as his son. Currently, the father is four times as old as his son. What is the son's current age?",
    "options": ["6 years", "8 years", "10 years", "12 years"],
    "answer": "8 years",
    "correct": 0
  },
  {
    "question": "The ratio of the present ages of a mother and her daughter is 6:1. After 8 years, the ratio of their ages will be 4:1. What is the current age of the daughter?",
    "options": ["4 years", "6 years", "8 years", "10 years"],
    "answer": "8 years",
    "correct": 2
  },
  {
    "question": "The sum of the ages of a mother and her daughter is 60 years. Four years ago, the ratio of their ages was 4:1. What is the current age of the daughter?",
    "options": ["10 years", "12 years", "14 years", "16 years"],
    "answer": "12 years",
    "correct": 1
  },
  {
    "question": "A father is twice as old as his son. Ten years ago, the father's age was three times that of his son. What is the present age of the son?",
    "options": ["10 years", "15 years", "20 years", "25 years"],
    "answer": "20 years",
    "correct": 2
  },
  {
    "question": "A man is 24 years older than his son. In 8 years, the man's age will be twice the age of his son. What is the current age of the son?",
    "options": ["12 years", "16 years", "18 years", "20 years"],
    "answer": "16 years",
    "correct": 1
  }
]
