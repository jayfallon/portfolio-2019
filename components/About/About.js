import Link from "next/link";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AboutStyles from "./AboutStyles";

const About = () => (
	<>
		<Header />
		<AboutStyles>
			<section>
				<h2>About</h2>
				<article>
					<h3>My name is Jay Fallon and I am a User Experience Engineer.</h3>

					<p>
						It may seem like job titles, team roles and personal interest focus is in constant flux inside
						the community one would think falls under the umbrella of that weird department everyone calls
						UX. Well, it’s true.{" "}
					</p>

					<p>
						User Experience as a whole is an exciting discipline in which to work and there are many
						different roles that a person can fill at any given time or even simultaneously. As I write this
						in January, ’19 the spectrum ranges everywhere from product management to system engineers with
						designers, developers and data scientists sandwiched in between, all dedicated to providing an
						experience centered around empathy, code, design and communication.
					</p>

					<p>
						Finding a toehold, let alone a niche, in this environment can be daunting for anyone and I’m no
						stranger to being overwhelmed by ever increasing knowledge gaps and declining timelines. Over
						time, my method for addressing this boils down to defining what you do well, what you’re
						struggling with and who you’re interested in becoming as you perfect your domain knowledge,
						overcome your intellectual hurdles and identify areas of interest that had been outside of scope
						until they revealed themselves to not only being interesting options to explore, but also
						helpful in rounding out your education.
					</p>

					<p>
						All of that sounds great and is easier said than done but what exactly do you do as a User
						Experience Engineer?
					</p>

					<p>
						The simple answer is that on any given project my role is to provide project management and team
						mentoring, user research, information architecture, wireframe design, interaction design and
						frontend development to include all HTML, CSS and JavaScript deliverables. As a bonus, I also
						provide deployment expertise during the development phase of the project along with quality
						assurance testing, bug fixing and a host of other odd jobs that at one time were considered
						nice-to-haves but have now become micro-roles in themselves.
					</p>

					<p>
						What I do not do is visual design, system architecture or production infrastructure and
						deployment. I am also not a backend developer. All of the aforementioned are interesting to me
						and to some extent I do the work during development or can at least understand and speak to it,
						but those roles are outside of my area of expertise and are best left to those folks whose
						experience and focus is in those disciplines.
					</p>
				</article>
				<article>
					<h3>What tools do you use?</h3>
					<div className="about__grid">
						<div>
							<i className="fal fa-graduation-cap" />
							<span>Learning</span>
						</div>
						<div>
							<i className="fal fa-ear" />
							<span>Listening</span>
						</div>
						<div>
							<i className="fal fa-question-square" />
							<span>Testing</span>
						</div>
						<div>
							<i className="fal fa-chalkboard" />
							<span>Whiteboard</span>
						</div>
						<div>
							<i className="fal fa-sticky-note" />
							<span>Planning</span>
						</div>
					</div>
					<p>
						That would depend mostly on the phase of the project and what my role is. The one commonality of
						most projects I’ve worked recently is agile. Design and development, it’s all agile. Learn it,
						live it, love it. Okay, maybe not love it because it doesn’t afford you the luxury of the
						timeless navel gazing that water flow does, but agile has become the prevalent methodology and
						it’s de facto standard. A highly motivated team coupled with a smart scrum master and following
						some form of agile methodology is a recipe for success.
					</p>

					<p>Tl;dr: Agile.</p>

					<p>
						I could write an entire blog post about what happens in each for each role in every phase of the
						project but for the reader’s benefit I’ll keep it short and sweet. I’ve compiled a list of
						processes, applications or services that I’ve used over the past two years in conjunction with
						my everyday job or school requirements in the hopes of making it clear where I best fit in with
						a design and/or development team.
					</p>

					<p>
						In the initial phase of the project, I tend to do a lot listening, asking questions and
						validating answers. As a designer, it’s not my role to validate the client’s hypothesis but to
						understand the depth and scope, identify my strengths and weaknesses as they pertain to the
						project requirements and also identify any gaps and challenges that team will have in realizing
						their goals. This phase requires communication, white-boarding and estimation skills along with
						a healthy dose of humility. Before you create anything, understand your role, your capacity for
						output and how this will affect the team goals.
					</p>
				</article>
				<article>
					<h3>Design Tools</h3>
					<div className="about__grid">
						<div>
							<i className="fab fa-sketch" />
							<span>Sketch</span>
						</div>
						<div>
							<i className="fab fa-invision" />
							<span>InVision</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/zeplin.png" alt="Zeplin" />
							<span>Zeplin</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/photoshop.png" alt="Photoshop" />
							<span>Photoshop</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/illustrator.png" alt="Illustrator" />
							<span>Illustrator</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/premiere.png" alt="Premiere Pro" />
							<span>Premiere Pro</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/after-effects.png" alt="After Effects" />
							<span>After Effects</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/audition.png" alt="Audition" />
							<span>Audition</span>
						</div>
					</div>
					<p>
						While I’m trying to simplify as much as possible, it’s important to understand that designers
						aren’t born. They are formed over a long period of time that involves interest, education,
						experience and inevitably critique. And of ton of editing, moments of brilliance and unending
						periods of imposter syndrome. Many of them are incorrigible people pleasers and others will
						appear distant and aloof but for the most part they possess that weird empathy gene that allows
						them to focus on making something else look and feel better to an anonymous audience. If you
						develop an eye for this, it becomes second nature to distinguish between works that have your
						best interests at heart versus those who have no desire to help you or worse.{" "}
					</p>

					<p>
						Oh, the tools I use? Sorry, I was pontificating about the importance of the movie editor, the
						floral arranger and the chef who’s work is who they are. For the most part, in the creation of
						design deliverables I primarily use Sketch paired up with InVision and Zeplin. For image editing
						I use Photoshop, Illustrator for vector graphics and a combination of Premiere Pro, Audition and
						After Effects for video.
					</p>
				</article>
				<article>
					<h3>Development Tools</h3>
					<div className="about__grid">
						<div>
							<i className="fab fa-html5" />
							<span>HTML5</span>
						</div>
						<div>
							<i className="fab fa-css3-alt" />
							<span>CSS3</span>
						</div>
						<div>
							<i className="fab fa-js" />
							<span>JavaScript</span>
						</div>
					</div>
					<p>
						My main frontend development deliverables tend to be in the form of HTML, CSS and JavaScript.
						That’s the baseline for today’s developer. I tend to be as agnostic as possible towards the
						framework, library or stack that seems to the ultimate solution for any given project. I’ve
						learned that the Big Three haven’t changed much at all since I started doing this and to master
						them is to make it easier to adopt different approaches or techniques as they manifest
						themselves.
					</p>

					<div className="about__grid">
						<div>
							<i className="fab fa-markdown" />
							<span>Markdown</span>
						</div>
						<div>
							<i className="fab fa-python" />
							<span>Python</span>
						</div>
						<div>
							<i className="fab fa-react" />
							<span>React</span>
						</div>
						<div>
							<i className="fas fa-meteor" />
							<span>Meteor</span>
						</div>
						<div>
							<i className="fab fa-git" />
							<span>Git</span>
						</div>
						<div>
							<i className="fab fa-node-js" />
							<span>Node.js</span>
						</div>
						<div>
							<i className="fab fa-angular" />
							<span>Angular</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/vs-code.png" alt="VS Code" />
							<span>VS Code</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/graphql.png" alt="GraphQL" />
							<span>GraphQL</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/apollo.png" alt="Apollo" />
							<span>Apollo</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/typescript.png" alt="TypeScript" />
							<span>TypeScript</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/elm.png" alt="Elm" />
							<span>Elm</span>
						</div>

						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/ruby.png" alt="Ruby" />
							<span>Ruby</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/pug.png" alt="Pug Templates" />
							<span>Pug</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/gatsby.png" alt="gatsby.js" />
							<span>Gatsby.js</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/handlebars.png" alt="Handlebars" />
							<span>Handlebars</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/postman.png" alt="Postman" />
							<span>Postman</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/spring.png" alt="Spring" />
							<span>Spring</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/mongo.png" alt="MongoDB" />
							<span>MongoDB</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/mysql.png" alt="MySQL" />
							<span>MySQL</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/firebase.png" alt="Firebase" />
							<span>Firebase</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/nextjs-black-logo.svg" width="75" alt="Next.js" />
							<span>Next.js</span>
						</div>

						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/d3.png" alt="D3" />
							<span>D3</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/rails.png" alt="rails" />
							<span>Rails</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/express.png" alt="Express" />
							<span>Express</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/jsx.png" alt="JSX" />
							<span>JSX</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/jquery.png" alt="jQuery" />
							<span>jQuery</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/travis.png" alt="Travis CI" />
							<span>Travis CI</span>
						</div>
						<div>
							<i className="fas fa-hockey-mask" />
							<span>JSON</span>
						</div>
					</div>

					<p>
						That’s not to say I don’t have my preferences. Yes, jQuery is no longer in vogue but you should
						probably understand what it is and what it does because I still come across it now and again.
						I’ve worked with the MEAN, MERN and JAM stacks. I’ve done frontend with Java and Scala
						frameworks on the backend and like everyone who cut their teeth through Web 2.0 I have
						experience with Rails but at the moment I’m feeling really comfortable developing PWA’s with
						Next.js.
					</p>

					<p>
						While I appreciate Elm, Angular and TypeScript, I don’t think I’d get into them too much unless
						I was working with a team that had already selected that approach. For right now, the React
						ecosystem seems to be meeting my needs but as always, that will change in the future.
					</p>
					<div className="about__grid">
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/stylus.png" alt="Stylus" />
							<span>Stylus</span>
						</div>
						<div>
							<i className="fab fa-sass" />
							<span>Sass</span>
						</div>
						<div>
							<i className="fab fa-less" />
							<span>Less</span>
						</div>
						<div>
							<i className="fab fa-twitter" />
							<span>Bootstrap</span>
						</div>

						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/styled-components.png" alt="Styled Components" />
							<span>Styled Components</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/postcss.png" alt="PostCSS" />
							<span>PostCSS</span>
						</div>
					</div>
					<p>
						In terms of CSS expertise, I’ve traveled across the spectrum of pre and post processors,
						libraries, frameworks and approaches. As of late, I’ve found comfort in Styled Components and
						really enjoy working with it but my philosophy is to make it as simple and reducible as possible
						with the knowledge that someone else will eventually have to work with your code and forcing
						them to learn a new process because you had to satisfy a shiny itch isn’t the best way of making
						friends.
					</p>
				</article>
				<article>
					<h3>Build Tools</h3>
					<div className="about__grid">
						<div>
							<i className="fab fa-grunt" />
							<span>Grunt</span>
						</div>
						<div>
							<i className="fab fa-gulp" />
							<span>Gulp</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/webpack.png" alt="Webpack" />
							<span>Webpack</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/babel.png" alt="Babel" />
							<span>Babel</span>
						</div>
					</div>
					<p>
						Back in my day, you had to look at your code in the browser and then FTP it up to the server so
						that you could then rewrite it all over again because you used absolute paths everywhere. Kids
						these days take the marvels of progress for granted.
					</p>
				</article>
				<article>
					<h3>Deployment Tools</h3>
					<div className="about__grid">
						<div>
							<i className="fab fa-aws" />
							<span>AWS</span>
						</div>

						<div>
							<i className="fab fa-digital-ocean" />
							<span>Digital Ocean</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/pm2.png" alt="PM2" />
							<span>PM2</span>
						</div>
						<div>
							<i className="fab fa-docker" />
							<span>Docker</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/heroku.png" alt="Heroku" />
							<span>Heroku</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/firebase.png" alt="Firebase" />
							<span>Firebase</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/now-black.svg" height="60" alt="Zeit Now" />
							<span>Zeit Now</span>
						</div>
						<div>
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/logos/surge.png" alt="Surge" />
							<span>Surge</span>
						</div>
					</div>
					<p>
						It’s an exciting time to be a UX Engineer. We can now write apps and deploy with a Git commit.
						Seems like a simple thing but it wasn’t that long ago where one had to be server proficient in
						order to configure a solution and deploy a working application to it. It used to be a whole
						separate role from development but today’s PAAS providers give development a whole new meaning.
						I’ve worked with some of the most popular and tried many but my current model is to use Zeit’s
						Now as my staging platform so that I can easily deploy my work and share it with the team.
						Depending on the requirements one may have to get into the more *serious work* of configuring
						their hosting via one of AWS’s many solutions but it’s at that point where I raise my hand and
						ask the experts for help.
					</p>
					<p>
						Thanks for reading all the way to the end. While these are the tools, languages, libraries and
						processes that I've worked with over the past two years, my hope is to return a year from now
						and make an intelligent comparison and determine what worked really well, what I should've
						worked on more and what I should've left well alone.
					</p>
				</article>
			</section>
		</AboutStyles>
		<Footer />
	</>
);

export default About;
