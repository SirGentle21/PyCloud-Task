import './Home.css';
import background from '../src/background.png';
import logo from '../src/logo.png';
import leftArrow from '../src/r-arrow.png';
import men from '../src/men.png';
import program from '../src/program.png';
import devops from '../src/devops.png';
import blue from '../src/blue.png';
import training from '../src/training.png';
import project from '../src/project.png';
import cloud from '../src/cloud.png';
import support from '../src/support.png';
import client from '../src/client.png';
import collab from '../src/collab.png';
import innovate from '../src/innovate.png';
import contact from '../src/contact.png';
import register from '../src/register.png';
import tech from '../src/tech.png';
import world from '../src/world.png';
import linkedin from '../src/linkedin.png';
import instagram from '../src/instagram.png';
import facebook from '../src/facebook.png';
import arrow from '../src/arrow.png';

const Home = () => {
    return (
        <div className='overall-div'>
            <section className='navbar'>
                <img src={logo} alt='logo' className='logo' />

                <div id='li-div'>
                    <ul className='ul'>
                        <li>Home</li>
                        <li>About PyCloud</li>
                        <li>What We Do</li>
                        <li>Training</li>
                        <li>Insights</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </section>

            {/* 2nd section */}

            <section className='container'>
             <img src={background} alt='background' className='background-img'/>
             <div id='paragraph'>
                <p>Your <span>IT partner</span> for the heavy lifting,<br />
                    so you have time to <span>focus</span> on providing<br/>
                    business <span>value</span> to your <span>customers.</span>
                </p>
             </div>
             <div id='button-div'>
                <p id='p-more'>Learn More</p>
                <img src={leftArrow} alt='left arrow' className='left-arrow'/>
             </div>
            </section> 

            {/* 3rd section */}

            <section className='digital-sec'>
                <div className='digital-div'>
                    <h1 className='digital-h'>Pycloud - Empowering Your<br/> Digital Transformation </h1>
                    <p>Welcome to Pycloud, your trusted partner in navigating the ever-evolving<br/>
                     landscape of Information Technology. Based in Canada, Pycloud is a leading<br/>
                      provider of comprehensive IT solutions, catering to a diverse range of<br/>
                       businesses and industries. Our commitment lies in empowering<br/>
                        organizations to achieve their digital transformation goals through<br/>
                         innovative, reliable, and customized services.</p>

                    <p>Embark on a transformative journey with Pycloud, where innovation meets<br/>
                     expertise. Explore our comprehensive suite of IT solutions designed to<br/>
                      propel your organization into a digital future. From coding excellence to<br/>
                       cloud consulting, we have the tools and expertise to drive your success.</p>

                    <p>At Pycloud, we are more than just an IT solutions provider – we are your<br/>
                     dedicated partner in achieving digital excellence. Learn about our values,<br/>
                      commitment to innovation, and how we collaborate with clients to deliver<br/>
                       tailored solutions that redefine possibilities.</p>
                </div>

                <div>
                    <img src={men} alt='men' id='men'/>
                </div>
            </section>

                {/* 4th section */}

            <section id='normal-div'>
                <div className='main-div'>
                    <div id='program'>
                        <img src={program} alt='program' />
                        <p>Programming</p>
                    </div>

                    <div id='devops'>
                        <img src={devops} alt='devops' />
                        <p>DevOps</p>
                    </div>

                    <div id='core'>
                        <h1>Our Core Offerings</h1>
                        <p>Explore our diverse range of services, including coding, DevOps and IT training,<br />
                            project management consulting, cloud consulting, and IT support. Find the right<br />
                            solution to propel your business forward and stay ahead in the competitive IT<br />
                            landscape.
                        </p>
                    <div>
                        <img src={blue} alt='left arrow' />
                    </div>
                    </div>
                </div>

                <div className='minor-div'>
                    <div id='train'>
                        <img src={training} alt='training' />
                        <p>IT Training</p>
                    </div>

                    <div id='project'>
                        <img src={project} alt='project' />
                        <p>Project Management<br/> Consulting</p>
                    </div>

                    <div id='same'>
                        <img src={cloud} alt='cloud' />
                        <p>Cloud Consulting</p>
                    </div>

                    <div id='same'>
                        <img src={support} alt='support' />
                        <p>IT Support</p>
                    </div>
                </div>
            </section>

            {/* 5th section */}

            <section className='PY-sec'>
                <div id='IT-div'>
                    <h2>Why Choose Pycloud for <br/>Unparalleled IT Success?</h2>
                        <p>Discover the reasons why leading organizations trust Pycloud for their IT needs. From<br/>
                             our client-centric approach to our commitment to innovation and collaborative<br/>
                                partnerships, find out why Pycloud is the preferred choice for businesses aiming to<br/>
                                    excel in the digital era.
                        </p>
                </div>

                <div className='initial-div'>
                    <div id='client'>
                        <img src={client} alt='client' />
                        <h3>Client-Centric Approach: </h3>
                        <p>Your success is our priority. Pycloud is dedicated to<br />
                           understanding your unique challenges and goals,<br />
                           tailoring our solutions to address your specific needs..
                        </p>
                    </div>

                    <div id='client' className='cli'>
                        <img src={innovate} alt='innovate' />
                        <h3>Innovation and Expertise: </h3>
                        <p>We stay at the forefront of technological<br />
                           advancements, combining innovation with deep<br />
                           industry expertise to deliver solutions that position<br />
                           you ahead of the curve...
                        </p>
                    </div>

                    <div id='client' className='cli'>
                        <img src={collab} alt='collab' />
                        <h3>Collaborative Partnerships: </h3>
                        <p>Pycloud believes in fostering long-term, collaborative<br />
                           partnerships. We work hand-in-hand with our clients<br />
                           to ensure sustained growth and success.
                        </p>
                    </div>
                </div>
            </section>

            {/* 6th section */}

            <section className='contact-div'>
                <div id='contact'>
                    <img src={contact} alt='contact' />
                </div>

                <div id='ahead'>
                    <p>Stay ahead in the<br />
                       dynamic IT landscape<br />
                       with our  IT training<br />
                       programs
                    </p>
                    <img src={register} alt='register' />
                </div>
            </section>

            {/* 7th section */}

            <section id='final-sec'>
                <div className='insight'>
                    <h4>Insights</h4>
                    <p>Read top industry articles, from top developers and teams</p>
                </div>
                <div className='cloud-divs'>
                    <div>
                        <img src={tech} alt='tech' />
                        <p>What Is Cloud Computing? Definition, Benefits, Types, and <br /> Trends</p>
                    </div>
                    <div id='world'>
                        <img src={world} alt='world' />
                        <p>16 Ways The Cloud Will Change Our Lives</p>
                    </div>
                </div>
            </section>

            {/* footer */}

            <footer>
            <div className='footer-div'>
                <div className='footer-div-1'>
                    <img src={logo} alt='logo' />
                    <p>Your trusted partner in navigating<br />
                       the ever-evolving landscape of<br />
                       Information Technology.
                    </p>
                </div>
                <div>
                        <p><strong>Site Links</strong></p>
                        <p>Home</p>
                        <p>About PyCloud</p>
                        <p>What We Do</p>
                        <p>Training</p>
                        <p>Insights</p>
                        <p>Contact Us</p>
                </div>
                <div>
                        <p><strong>Services</strong></p>
                        <p>Coding</p>
                        <p>DevOps</p>
                        <p>IT Training</p>
                        <p>Project Management Consulting</p>
                        <p>Cloud Consulting</p>
                        <p>IT Support</p>
                </div>
                <div id='connect'>
                    <p><strong>Connect</strong></p>
                    <div id='icons'>
                        <img src={linkedin} alt='linkedin' />
                        <img src={instagram} alt='instagram' />
                        <img src={facebook} alt='facebook' />
                    </div>
                    <p id='news'>Subscribe to our newsletter</p>
                    <input type='text' />
                <div id='sign-div'>
                    <p id='signup'>SignUp</p>
                    <img src={arrow} alt='left arrow' className='arrow'/>
                </div>
                </div>
            </div>
            </footer>

            {/* copyright */}

            <copyright id='copy'>
                <p>&copy; 2023 Pycloud Solutions</p>
            </copyright>
        </div>
    );
}

export default Home;