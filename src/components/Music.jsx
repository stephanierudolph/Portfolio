import ArrangementsTable from "./Arrangements";
import arrangements from "./ArrangementsData";

export default function Music() {
    return (
        <div>
            <h1>Music</h1>
            <p>Over the years, I have been involved in various music projects involving performing, arranging, transcribing, mentoring, and recording. </p>
            <h2>Arrangements</h2>
            <ArrangementsTable arrangements={arrangements}/>
            <h2>Mentorship</h2>
            <img src="/sirens/sirens-arranging.jpg" style={{height: 15 + 'em'}} alt="Stephanie smiling in front of arranging presentation."></img>
            <video src="/videos/Motions.mp4" style={{height: 15 + 'em'}} controls></video>
            <p>Starting in 2024, I started mentoring my peers in a cappella arranging. I hosted a workshop on a cappella arranging to guide my a cappella group in writting an acappella arrangement together. Since then, I have mentored individuals and small groups of students in a cappella arranging music theory, sheet music writing software, recording, and editing. </p>
            <h2>The Sirens</h2>
            <video src="/videos/eatYourYoung.mp4" style={{height: 15 + 'em'}} controls></video>
            <p>The Sirens is a Boston-based treble a cappella group comprised of 12-18 members from Simmons Univeristy, Emmanuel College, Wentworth College, Massachussetts College of Art and Design, and Massachusetts College of Pharmacy and Health Sciences. The Sirens perform at local gigs, record EPs, and perform in the ICCA. I was a member for all 8 semesters of my time at Simmons University, rotating through executive baord positions of Treasurer, Student Government Representative, and President. In addition to the duties of my roles, I focused on fostering an environment of learning and growth. I wrote 6 arrangements for the Sirens (some collaboratively) and edited 3 arrangements from other members. Whether it was compiling resources into our google drive, creating music theory bingos, or going through the Sirens' archive at the library, I was always eager to expand the the group into new territories.</p>
        </div>
    );
}