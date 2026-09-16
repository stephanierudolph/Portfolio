export default function CodingProjects() {
    return (
        <div>
            <h1>Coding Projects</h1>

            <h2>This Website (WIP)</h2>
            <img src="Projects/this-website.jpg" style={{height: 13 + 'em'}}></img>
            <img src="/Projects/logo-designs.png" style={{height: 13 + 'em'}} ></img>
            <p>I built (or am bulding) this website with HTML/CSS and React. I wanted a way to showcase my professional skills and services in a centralized place with complete agency over what I shared and how. I designed the logo as combination of the logical operator && and the treble clef to encapsulate both of my passions. Here, you can see my brain dump process of how I got from picking out music and coding symbols to the final design.</p>


            <h2>Music Player with Embedded Systems (WIP)</h2>
            <img src="grad/grad-hat.jpg" style={{height: 13 + 'em'}} alt="Stephanie smiling holding graduation hat with lights."></img>
            <video src="Projects/Grad Cap Demo.mp4" style={{height: 13 + 'em'}} controls></video>
            <img src="Projects/hat-diagram.png" style={{height: 13 + 'em'}} alt="Electronics Diagram."></img>
            <p>For graduation, I wanted to decorate my graduation cap in a way that would fully encapsulate me and my majors. While I unfortuntely was not able to complete it in time, due to a lack of consistent access to soldering equipment. I still hope to finish it! This project involved designing the cap with the microcontroller, LEDs and speaker, writing the code for the microcontroller, and developing my soldering skills. To make sound, I calculated the sine waves of each pitch to modify the PWM.</p>

            <h2>Meal Planner (2026)</h2>
            <img src="Projects/meal-planner-preview.png" style={{height: 15 + 'em'}}></img>
            <p>This was a group project with Rue Starsja for our Web-Centric Programming class final project. We wanted to make a website that could help people with meal planning and grocery shopping, by automatically generating meals for the week and adding those items to your grocery list. We used HTML/CSS, Express, Node, Postman, and Mongo.</p>
 
            <h2>Vocal Harmonizer (2025)</h2>
            <img src="Projects/harmonizer-gui.jpeg" style={{height: 15 + 'em'}}></img>
            <video src="Projects/Harmonizer Demo.mp4" style={{height: 15 + 'em'}} controls></video>
            <h2>HFOSS Food Pantry (2024)</h2>
            <p>I worked on this project for a semester, as a part of a class on Humanitarian and Open Source Software. The goal of this class was to work towards building a website for our school's student resource center. We worked on developing the API for the inventory management system and studied microservices archtechture. Focusing on group learning, I worked in a team of 5 to write endpoints and tests for the website. Unfortuntely do not have access to any image previews or website demos.</p>

            <h2>Derailed (2024)</h2>
            <img src="Projects/derailed-gui.jpeg" style={{height: 15 + 'em'}}></img>
            <p>Derailed is a java-based video game created with Christine Felt and Cressida Michaloski. This game combines the concept of tomogotchi pets, malware, and Boston's MBTA, to create a simple pet simulator. Take care of your train by feeding it batteries to keep it happy, otherwise it will create files telling you how upset it is, and eventually delete its own save file. </p>

            <h2>I Survived a Sleepless Night! (WIP)</h2>
            <img src="Projects/sheep-design.png" style={{height: 15 + 'em'}} alt=""></img>
            <img src="Projects/sheep-python.png" style={{height: 15 + 'em'}} alt="."></img>
            <img src="Projects/sheep-design-sky.png" style={{height: 15 + 'em'}} alt=""></img>
            <p>A game for insomniacs. This project is still very underdeveloped, but as someone who struggles with insomnia, I wanted to create a game based on the idea of couting sheep to fall asleep because if you can't fall asleep, at least you can tend to a herd of sheep in the meantime. </p>

            <h2>Sleep Tracker (2023)</h2>
            <img src="Projects/gui.jpg" style={{height: 15 + 'em'}} alt=""></img>
            <p>This was a project surrounding Swift and exploring the structure of the programming language. As a final project, I made an app to log sleep, after finding that I personally was not a fan of most of the sleep tracking apps on the market. </p>
            <h2>Silly Clock (2023)</h2>
            <img src="Projects/silly-clock.png" style={{height: 15 + 'em'}}></img>
            <p>Silly Clock: a website, a unit of time, a philosophy, really. Silly Clock Time uses the daylight cycle to calculate the time, but making sunrise always occur at 6:00am and sunset at 6:00pm, and calculating the rest of the time from there. This means that the unit of a second, minute, and hour are subjuect to change each day, as the Earth's rotation manipulates the length of daylight. I came up for the idea for the website and coded the frontend, while my friend Christine did the math for calculating the time based on user location. </p>
        </div>
    );
}