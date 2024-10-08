// Projects.js
const Projects = () => {
    return (
        <section>
            <h2>Projects</h2>
            <div className="project">
                <h3>Aider - Hospital Booking App</h3>
                <p>
                    A web application that allows users to view hospital details, book appointments, and interact with doctors. Built using React, this app features user authentication, a chatbot, and easy navigation.
                </p>
                <a href="https://vercel.live/link/aider-k231.vercel.app/?via=team-dashboard-project-entity&p=1" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
            <div className="project">
                <h3>MANGALURU SMART CITY</h3>
                <p>
                    A project aimed at creating an interactive website to showcase the services and initiatives of Mangalore city. It includes service cards, user interaction, and dynamic content.
                </p>
                <a href="https://msc-gilt.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
            <div className="project">
                <h3>Musical Recognition System</h3>
                <p>
                    A Python-based system that distinguishes between voice and musical inputs using Fast Fourier Transform. This project explores audio categorization with potential applications in music detection and speech recognition.
                </p>
                
            </div>
        </section>
    );
};

export default Projects;
