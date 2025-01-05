import './project.css';
import food from './assets/food.jpg';
import spa from './assets/spa.jpg';
import mail from './assets/mail.jpg';

function Project() {
    return (
        <div>
            <h1 className='project-title'>Projects</h1>
            <div className='project-container'>
                <div className='card'>
                    <img className="card-image" src={food} alt="Food Application" />
                    <div className='card-content'>
                        <h4>Food Application</h4>
                        <h5>Tools: HTML, CSS, JavaScript</h5>
                        <p>
                            A user-friendly web app to explore and search food items and recipes,
                            built with HTML, CSS, and JavaScript for an interactive experience.
                        </p>
                    </div>
                </div>
                <div className='card'>
                    <img className="card-image" src={spa} alt="SPA" />
                    <div className='card-content'>
                        <h4>SPA</h4>
                        <h5>Tools: HTML, CSS, JavaScript</h5>
                        <p>
                            A modern Single Page Application (SPA) offering seamless navigation
                            and smooth user experiences, built with HTML, CSS, and JavaScript.
                        </p>
                    </div>
                </div>
                <div className='card'>
                    <img className="card-image" src={mail} alt="Voice Based Email" />
                    <div className='card-content'>
                        <h4>Voice Based Email For Impaired</h4>
                        <h5>Tools: HTML, CSS, Python</h5>
                        <p>
                            A voice-based email system for visually impaired users, enabling
                            hands-free email management using voice commands. Built with HTML, CSS, and Python.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
