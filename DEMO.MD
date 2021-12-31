# DELIVERSITY

## 1.0 Introduction

The sudden Pandemic caused havoc among the people and when they were forced to stay inside of their residences as a precautionary measure to the pandemic, people agreed , but after a while , the situation took a turn for the worse .

Many people lost their loved ones and have lost many great idols too due to Covid-19. Having to worry about life constantly and also there was no proper treatment for the situation , which caused more panic among the masses , people started getting stressed and overthinking about the inevitable.

This caused students to lack concentration on their studies , less physical activities and also the connections with people which they could have built by being around the people if covid wouldn't have happened , was lost. Talking to someone (or a specialist) might help the person get out of that state, and that’s where I decided to go for this idea. The web app will let the user to submit a message and then he/she will be scheduled a meeting with the therapist.

#### Problem Statement

Students of the university are facing mental issues due to this unexpected lockdown and the loss of people around them , ans most of them don't have someone to talk to.

## 2.0 Methods/Methodology

### 2.1 Overarching Methodology

#### Design Thinking Process

While searching for the methodology , I started searching from Design Thinking methodology as it was mentioned in the assessment details , and as I gathered more information about it , I realised this is the-one . Given it's four principles that were laid out by Harry Leifer ,Christoph Meinel from Stanford University.certain this is ideal for the project.

##### The Four Rules Of

1. The human rule:

   - "All design activity is social in nature”
   - As this project is created for a specific human need, it is important to satisfy their requirements
   - As this project is focused towards students and their mental health , this rule corresponds with the project

2. The ambiguity rule

   - "Ambiguity is inevitable"
   - I will encounter some situations where I would be bound by some technologies , there will be ambiguity. I would learn those technologies and integrate it into the project. So this rule is also applicable in the project

3. The redesign rule

   - "All design is redesign"

   - As this app is centered around the mental health , the design part of the web app is also important , as consumers/students should feel comfortable to share personal details

4. The tangibility rule
   - "Making ideas tangible enables effective communication"
   - Even though you have identified the problem and have a solution for it , it is useless if you cannot put into a product , a tangible product that will solve the identified problem
   - This rule correlates with the need of this assignment as we are supposed to prepare a mockup , which is a tangible product.

##### The Five Phases

While conducting my research over the Design Thinking i came across the modern 5 phase approach by Hasso-Plattner Institute of Design at Stanford University.And it seemed very relevant to my project

Given that this methodology is not linear , there is no say as to what will be the end point of the development cycle, there will always be some room for improvement and resolving issues.

1. Empathize

   - This is the most important and first phase , where we create an understanding of the problem and try to find solution from there
   - Personally i feel like if we have a emotional connect with the project , we can come up with a better and human-friendly approach to the problem
   - Being a student myself who faced the same problems , I can relate and empathize with others too.
   - This phase is completely user-based and research-based.

2. Define

   - After identifying the problem , the next phase is to put that problem in words , creating a problem statement to solve.
   - This phase focuses on framing the question that needs to be solved.This phase defines the problem.
   - Then using this statement , i can create a solution in the form of a web app mockup

3. Ideate

   - When we have successfully identified the problem and have framed the problem statement , and adequate information have been accumulated , we can move to the ideate phase.
   - This stage will allow me to employ a solution and create a solution.
   - This will be a web app(or mockup ) and from there we can move forward

4. Prototype

   - After all the stages/phases mentioned above are done , the next phase is to put all these things into action, in some form of consumable product.
   - For the mockup i have chosen [Figma](facebook.com) - an free-to-use service for mockups and wireframes

5. Test

   - After completing all the phases , we take the feedback from the end users and make necessary changes and modification
   - This is the final phase of this methodology.

### 2.2 Methods

After initial discussions took place with my peers and I was able to empathise then identify a problem I could attempt to solve, I decided to move on to the next design thinking phase and define the problem further. To accomplish this, I ran 2 different focus groups of 6 and 12 members respectively to get a grasp on what different users would require in a delivery solution.

#### Focus Groups 1

The best way to talk about the product is to ask to the people who are going to be the potential user of that product. Therefore,
I conducted a focus group of 7 students from my class and noted down their problems. The focus group was centered around the features , what should be included in the web app and what should be the flow of the web app. Below are the findings and the key features that i have decided to finally put into the web app

- A system to visit the landing page , there would be some information about the challenges faced by other people which will make them feel like they aren't the only one suffering and help them open-up
- A contact form/page to contact and a input field to leave a message using which we will contact them and have them recommended to the available therapist
- A map where students can locate the places where they can go to talk to.
- A about page where the whos and whys of the website is are answered

### 2.3 Proposed Solution

Given all the information gathered from the focus group and perosnal experience , the solution will be to make a web app for the students where they can drop the problem they are facing and we will try to recommend them to the therapist .They can schedule the meeting whenever the concerned therapist is free.

With the use of Design Thinking methodology we will keep making improvements to the web app . As this project is end-user based , having human centric design is most relevant.

## 3.0 Ethics

Given that this project is centered around students, there will be some personal details that would need to be shared with the web app.I will be adding T&C and privacy policies, as well as making sure my project is GDPR compliant.

## 4.0 Discussion, Results and Prototype

You can find the link to the mockup of the web app , you can navigate in the mockup as if it were a real website , but it does not have any kind of response as a real website will have which we will build in the next assessment.

<!-- LINK TO MOCKUP -->

The mockup clearly provides a basic idea of how the web app will look and also the flow(navigation) of the web app. The screenshots have been attached and also the use and structure of pages have been discussed below , the web app have been developed according to the key points noted from the focus group

### Homepage

![Example banner](./assets/home.PNG)

- The homepage is generic and has all the functionality a landing page should have
- The homepage has multiple sections . Navbar , banner ,some information about mental health.
- The navbar has 4 links: Home , About , Map , Contact. These can be used for easy navigation throughout the website
- The homepage is the most important , ao it is also important to gain the trust of the user to make sure that they feel free to open up about themselves in the Message

### Contact

![Example banner](./assets/contact.png)

- This page is for the users to send a message to the admin , user will additionally have to add their name and email
- We can use this message and identify the kind of help the students need and then appropriately take decision
- This is the most important and crucial page of our website and will be the only ahe where we will need the trust of the user to share their condition and from there we will decide the proper way to proceed from there.

### Map

![Example banner](./assets/map.png)

- On this page , the user can see where he can get help , and also will get a pictorial view of all the present centers
- This page will be implemented using `leaflet.js` which is js library built for the sole purpose of integrating map into website
- This will be only a static page and users can only see where the centres are , further along maybe we can directly schedule meetings from this page.

### About

![Example banner](./assets/about.png)

- The About page has some basic info about the website , like what is this website and who is this website for
- Further , we can add more information about the milestones of the website , and maybe add some feedback of students
- The about page will also have all the extended privacy policy displayed

### User Response/Feedbacks

The mockup was shown to the people of the focus group and they were happy to see the product. And they said the UI is good and that it would get the job done , But they mentioned that there is still room for some improvements and that improvements will help the project reach the next level and prove more useful to the people. Below are the improvements they pointed out :-

- On the homepage people want to see some feedback of some people who have used the website and have received proper guidance and would help them knowing that they are not alone.
- One of them also suggested that on the contact page ,we can take the phone number of the user and send them the confirmation of them sending the message , and when we actually schedule the meeting we can send them a notification on mail as well as their phone

Other than this the satisfaction was overall high for my project, and I would deem it a success to solving the issue as it is an example of a functional ordering application. Where users can place, purchase, and track their orders to their specified class locations.

Apart from this , I would say that this project was a success and I also learned about many things like the importance of mental health of the masses and ourselves. Also about the Design Thinking methodology

## 5.0 Conclusion

The design thinking methodology helped me structure the project flow and also the report.I learnt the empathise, define , and also ideate.This methodology is great for the process of development and to report.It covers all the aspects a project should hold when being created for people’s use

In this I have developed a web app wherein students can look for the help they need in order to get better mental health. The contact page will be able to send a message to the team who’s handling the backend of the app and then according to the message we can schedule a meeting with the therapist and then htan that can be linked and can have the students problem solved

# Reference List

- https://voltagecontrol.com/blog/5-steps-of-the-design-thinking-process-a-step-by-step-guide/
- https://uxplanet.org/figma-all-you-need-to-know-156b52b88e54
-
