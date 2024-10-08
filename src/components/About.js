// src/components/About.js
import React from 'react';
import profilePhoto from './WhatsApp Image 2024-05-02 at 00.50.19_3c233879.jpg'; // Import your profile photo

const About = () => {
    return (
        <section>
            <h2>About Me</h2>
            <img src={profilePhoto} alt="Vian Dsouza" style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
            <p> am Vian Dsouza, an ambitious and detail-oriented student with hands-on experience in web development, project management, and team leadership. Currently studying for a Bachelor of Computer Applications at St. Aloysius College, I have honed my skills in React and modern web technologies, focusing on creating user-friendly and innovative applications that foster collaboration and solve real-world problems effectively.

            <br></br>Key Projects:
<br></br>Aider Hospital Booking App: Developed a React-based application to streamline hospital and doctor appointments, featuring a user-friendly design with smart notifications, appointment scheduling, and PDF download capabilities.

<br></br> MANGALURU SMART CITY Website: Designed a blueprint for a website to showcase Mangaluru's smart city services and infrastructure, emphasizing user interaction and an engaging service section.

<br></br> Musical Instrument Recognition System Using Frequency Approach: Created a Python program leveraging Fast Fourier Transform to distinguish between voice and musical input, exploring potential applications in music detection and speech recognition.

<br></br>Skills:
<br></br>Time Management: Experienced in balancing academic responsibilities with project deadlines.
<br></br>Leadership Skills: Expert in guiding teams towards achieving common goals through effective collaboration and motivation.
<br></br>Strong Communication Skills: Proven ability to convey ideas clearly and facilitate discussions.
<br></br>Problem-Solving Skills: Experienced in analyzing challenges and devising innovative solutions.
Leadership & Extracurricular Activities:
<br></br>Founder of The Loyal Ones: Established a non-profit animal care organization.
<br></br>President, ICYM Moodbidri Unit: Spearheaded ICYM Moodbidri's 50th-anniversary celebrations, managing over 100 participants.
<br></br>Secretary, Sahodya Association (St. Aloysius College): Engaged in organizational activities to promote community welfare.</p>

        </section>
    );
};

export default About;
