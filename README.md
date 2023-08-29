# **Star Trek: The Next Generation Quiz**
## **Site Overview**
Ever since I was a child, I've been a huge fan of Star Trek, especially the Next Generation series featuring Patrick Stewart.

The Star Trek: The Next Generation Quiz is a fun and interactive web-based quiz application where you can test your knowledge about the iconic Star Trek series. The quiz is designed to challenge both casual fans and Star Trek aficionados.

![Site view across devices](/documentation/design/responsivnes.png)

## Table of Contents: 

* [Site Overview](#User-Experience-UX)
  * [Initial Discussion](#Initial-Discussion)
  * [Targeted Audiance](#Targeted-Audiance)
  * [How to Play](#How-To-Play)
  * [User Stories](#User-Stories)
  * [Site Aims](#Site-Aims)
  * [How Can This Be Achived](#How-Can-This-Be-Achived)

* [Design](#Design)

  * [Colour Scheme](#Colour-Scheme)
  * [Typography](#Typography)
  * [Imagery](#Imagery)
  * [Wireframes](#wireframes)
  * [Features](#Features)
     * [Initial Load Page](#Initial-Load-Page)
     * [Username Modal](#Username-Modal)
     * [Main Game Page](#Main-Game-Page)
     * [Timeut Modal](#Timeout-Modal)
     * [Show Score Page](#Show-Score-Page)
     * [Footer](#Footer)
  * [Accessibilty](#Accessibilty)
  * [Future Implementations](#Future-Implementations)

* [Technologies Used](#Technologies-Used)
  * [Languages Used](#Languages-Used)
  * [Frameworks, Libraries & Programs Used](#Frameworks,-Libraries-&-Programs-Used)

* [Deployment & Local Development](#Deployment-&-Local-Development)
  * [Deployment](#Deployment)
  * [Local Development](#Local-Development)
    * [How to Fork](#How-to-Fork)

* [Testing](#Testing)
  * [W3C Validator](#W3C-Validator)
  * [Solved Bugs](#Solved-Bugs)
  * [Lighthouse](#Lighthouse)
  * [Index Page](#Index-Page)
  * [Full Testing](#Full-Testing)

* [Credits](#Credits) 
  * [Content](#Content)
    * [Full Disclaimer](#Full-Disclaimer)
  * [Media](#Media)
  * [Code Help](#Code-Help)
  * [Acknowledgments](#Acknowledgments)

## **Initial Discussion**

This project aims to provide a fun and interactive quiz game centered around the Star Trek: The Next Generation series. The quiz has 10 questios.

### **Targeted Audience**

The primary goal is to create an engaging and visually pleasing quiz game that tests users' knowledge about Star Trek: The Next Generation,although everyone can play and learn a bit about startrek.

### **How to Play**

1. Enter your desired username to get started.
2. Read the quiz rules listed on the welcome page.
3. Each question has four answer choices. Select the answer you believe is correct.
4. You have 15 seconds to answer each question before time runs out.
5. After answering a question, the correct answer will be highlighted if you chose incorrectly.
6. Click the "Next" button to move to the next question.
7. The quiz ends after all questions are answered. Your total score will be displayed.

### **User Stories**

* As a user, I want to test my knowledge about Star Trek: TNG.
* As a user, I want an intuitive UI for a seamless gaming experience.
* As a user, I want to see my score at the end of the quiz.

### Site Aims

1. To provide a simple quiz game.
2. A simple and easy-to-find set of instructions.
3. To keep track of the current game scores.
4. To give the user feedback of total score.

### How Can This Be Achieved

1. Keep the game as simple as possible.
2. Game rules are shown straight on the welcome page.
3. To keep score increasing by one evrytime user click the right answer.
4. By showing total score at the end of the quiz.

## **Design**

### Colour scheme

For text i picked black colour.<br>
For next button i put darkish blue colour:<br>

![colour of buttons](/documentation/design/buttons-color.png)<br>
For answer buttons i picked light green and light red:

![Answer buttons colour](/documentation/design/answer-buttons.png)

### Typography

The quiz utilizes the "Heebo" font from Google Fonts, which adds a modern and clean look to the user interface. This font choice ensures readability across different devices and screen sizes.

### Imagery

The quiz interface is enhanced with carefully selected imagery related to the Star Trek universe. The use of imagery creates an immersive experience for participants, making them feel like they're on a space adventure.

![Background image](/documentation/design/space.png)

### Wireframes

Before developing the quiz, wireframes were created to plan the layout and structure of the application. These wireframes served as a guide to ensure a consistent and user-friendly design throughout the quiz.

![Wireframes](/documentation/design/wireframes.png)

### features

#### Initial Load Page

The initial page welcomes users with a visually appealing layout and an option to enter their desired username. It sets the tone for the quiz and immediately engages users.

![Initial Load Page](/documentation/design/initial-load.png)

#### Username Modal

The username modal appears when the user attempts to start the quiz without entering a username. This ensures that each participant's progress and score are uniquely identified. User can close modal by clikc on "x" or click anywhere outside modal.

![Username Modal](/documentation/design/username-modal.png)

#### Main Game Page

The heart of the application is the quiz section. Each question is presented with multiple-choice answers, and a countdown timer adds an element of excitement and urgency to the gameplay.

![Main Game Page](/documentation/design/main-game-page.png)

#### Timeout Modal

In case a user doesn't answer a question within the time limit, a timeout modal displays to inform them and reveal the correct answer. This encourages users to keep up the pace and stay engaged.

![Timeout Modal](/documentation/design/timeout-modal.png)

#### Showscore Page

Once all questions are answered, the user's total score is displayed along with a personalized message. The option to play again encourages users to improve their score and enjoy the quiz once more. The option "Quit Game" brings user into first page and game is completely restarted.

![Show Score Page](/documentation/design/show-score.png)

#### Footer

Footer is just one github icon, when clicked it opens new page with repositary of this project.

![Footer](/documentation/design/footer.png)

### Accessibility

Great effort has been put into ensuring the quiz is accessible to a wide range of users, including those with disabilities. Semantic HTML elements, appropriate ARIA roles, and high contrast color choices contribute to an inclusive experience.

### Future Implementations

As the quiz gains popularity and feedback from users, there are plans to expand its features. This may include adding more questions, introducing different difficulty levels.


## Technologies used 

### Languages Used

* HTML5
* CSS3
* JavaScript (ES6)

### Frameworks, Libraries & Programs Used

* Google Fonts
* Font Awesome
* GitHub - to save and store code for the app
* GitPod - for version control
* VS Code - to write a code
* Chrome Developer Tools - to help with troubleshooting
* https://ui.dev/amiresponsive - to show a website on a different devices
* https://www.pexels.com - for my background image
* https://icons8.com/ - for startrek favicon


## Deployment & Local Development

### Deployment

The quiz is hosted on GitHub Pages, allowing users to access it through a web browser. The deployment process involves pushing code to the main branch of the repository, and GitHub takes care of the rest.

You can find the live site here -[StarTrek Quiz](https://matus42.github.io/StarTrek-Quiz/) 

### Local Development

#### How to Fork

If you'd like to contribute to the quiz or customize it for your own use, you can fork the repository to create your own copy. From there, you can make changes, additions, and improvements as you see fit.



















  