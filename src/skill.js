import './skill.css';
import html from './assets/html.png';
import css from './assets/css.png';
import js from './assets/js.png';
import boot from './assets/boot.png';
import react from './assets/react.png';
import angular from './assets/angular.png';
import vs from './assets/vs.png';
import figma from './assets/figma.png';
import sheet from './assets/sheet.png';
import ppt from './assets/ppt.png';
import word from './assets/word.jpg';

function Skill() {
    return (
        <>
            <div>
                <h1 className='skill'>Skills</h1>
                <p className='skilline'>Here are some of the skills I have learned:</p>
            </div>

            <div className="skills-container">
                <div className="skills-category">
                    <h2 className='title'>Front End</h2>

                   
                    <div className="skills-row">
                        <div className="img">
                            <img src={html} alt="HTML logo" />
                            <p>HTML</p>
                        </div>
                        <div className="img">
                            <img src={css} alt="CSS logo" />
                            <p>CSS</p>
                        </div>
                        <div className="img">
                            <img src={js} alt="JavaScript logo" />
                            <p>JavaScript</p>
                        </div>
                    </div>

                  
                    <div className="skills-row no-border">
                        <div className="img">
                            <img src={boot} alt="Bootstrap logo" />
                            <p>Bootstrap</p>
                        </div>
                        <div className="img">
                            <img src={react} alt="React logo" />
                            <p>React</p>
                        </div>
                        <div className="img">
                            <img src={angular} alt="Angular logo" />
                            <p>Angular</p>
                        </div>
                    </div>
                </div>

                <div className='skills-category'>
                    <h2 className='title'>Tools</h2>

                   
                    <div className="skills-row">
                        <div className="img">
                            <img src={vs} alt="VSCode logo" />
                            <p>VS Code</p>
                        </div>
                        <div className="img">
                            <img src={figma} alt="Figma logo" />
                            <p>Figma</p>
                        </div>
                        <div className="img">
                            <img src={sheet} alt="Spreadsheet logo" />
                            <p>Spreadsheet</p>
                        </div>
                    </div>

                  
                    <div className="skills-row">
                        <div className="img">
                            <img src={ppt} alt="PowerPoint logo" />
                            <p>PowerPoint</p>
                        </div>
                        <div className="img" id="word">
                            <img src={word} alt="Word logo" />
                            <p>MS Word</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skill;
