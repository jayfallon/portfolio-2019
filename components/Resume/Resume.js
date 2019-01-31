import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import ResumeStyles from "./ResumeStyles";

const Resume = () => (
	<>
		<Header />
		<ResumeStyles>
			<section>
				<h2>Summary</h2>
				<p>
					Jay Fallon is a User Experience professional with years of experience in product design and
					development for a list of clients that includes large enterprises, small businesses and start-up
					ventures. Jay's interests lie in customer focused application design and development, rapid and
					iterative prototyping, user-centric design and testing methodologies, the responsive experience and
					courseware design and development.
				</p>
			</section>
			<section>
				<h2>Technical Skills</h2>
				<p>
					User experience design, interaction design, information architecture, usability testing, front-end
					development to include modern CSS, HTML, React (React, React Native, Next.js, Gatsby.js), AngularJS,
					GraphQL, Node/Express, JSX, Jade/Pug, Styled Components, PostCSS, Sass/Scss, LESS, Stylus, Git,
					responsive design, Python, Ruby/Rails, Java-based frameworks; audio-visual creation and design to
					include Sketch, InVision, OmniGraffle, Framer, Adobe Premiere, After Effects, Illustrator, Photoshop
					and Audition. Agile methodologies. Fluent in English and Spanish.
				</p>
			</section>
			<section>
				<h2>Education</h2>
				<article>
					<h3>
						<span>Harvard University Extension School</span>
						<span>Cambridge, MA</span>
					</h3>
					<p className="period">Master of Liberal Arts, Digital Design, expected May 2019</p>
					<p className="description">
						Concentration in Digital Design, with coursework in information systems, software development,
						instructional design and digital production.
					</p>
				</article>
				<article>
					<h3>
						<span>Northeastern University</span>
						<span>Boston, MA</span>
					</h3>
					<p className="period">Bachelor of Science in Business Administration, June 1998</p>
					<p className="description">
						Majored in International Business and Finance. Completed cooperative education assignments at
						Boston’s Better Snacks, FMRC and PictureTel with learning opportunities and responsibilities in
						operations, marketing, technical documentation and internationalization.
					</p>
				</article>
			</section>
			<section>
				<h2>Details Of Experience</h2>
				<article>
					<h3>
						<span>Syrinx Consulting</span>
						<span>Boston, MA</span>
					</h3>
					<p className="period">June 2018 - Present</p>
					<p className="title">User Experience Designer and Developer.</p>
					<p className="description">
						As a UI/UX developer for a Syrinx client, Jay is responsible for providing technical direction,
						training and support for a fifty-person research department focused on enhancing the client's
						future capabilities in personalized customer experience. In this role, Jay provides not only
						daily deliverable work but also works across teams and disciplines to design, test and provide
						tangible results for further iterations via web applications, landing pages and emails.
					</p>
				</article>
				<article>
					<h3>
						<span>James Fallon Consulting</span>
						<span>Boston, MA</span>
					</h3>
					<p className="period">
						September 2009 - December 2010, March 2012 - March 2013, June 2016 – June 2018
					</p>
					<p className="title">User Experience Designer and Developer.</p>
					<p className="description">
						Responsible for assisting clients with web-based strategies, product research, design and
						development. Project engagements include working with Style Me Pretty on their upcoming website
						release, a ground-up overhaul of their existing products. Jay's responsibilities included
						working closely with the client to craft and implement a comprehensive experience strategy in
						addition to providing research, design and demonstration deliverables.
					</p>
				</article>
				<article>
					<h3>
						<span>Cengage Learning</span>
						<span>Boston, MA</span>
					</h3>
					<p className="period">March 2014 – June 2016</p>
					<p className="title">User Experience Designer and Developer.</p>
					<p className="description">
						In addition to creating an in-house CSS framework and reusable component library, Jay was also
						tasked with providing design and development on multiple Cengage projects that included legacy
						code conversion, cross-platform CSS standardization, component design and user testing.
					</p>
				</article>
				<article>
					<h3>
						<span>Boston Technologies, Inc.</span>
						<span>Boston, MA</span>
					</h3>
					<p className="period">December 2010 – March 2012</p>
					<p className="title">Software Engineer, User Experience Designer and Developer.</p>
					<p className="description">
						Working in conjunction with a development team, Jay was responsible for the user experience and
						front-end architecture, design and development on a foreign exchange trading platform. Duties
						included research, development and testing for both internal and external product offerings in
						the form of web-based dashboards, trading applications and analysis.
					</p>
				</article>
				<article>
					<h3>
						<span>State Street Global Advisors, Inc.</span>
						<span>Boston, MA</span>
					</h3>
					<p className="period">June 2007 – September 2008</p>
					<p className="title">User Experience Developer.</p>
					<p className="description">
						As a consultant, Jay worked closely with multiple internal teams on projects requiring design,
						development and ongoing maintenance for existing, new and transitioning web-based products.
						Jay's responsibilities included the design, production and deployment of deliverables along with
						providing testing and technical support.
					</p>
				</article>
				<article>
					<h3>
						<span>Netnumina Solutions, Inc.</span>
						<span>Cambridge, MA</span>
					</h3>
					<p className="period">June 2000 – December 2006</p>
					<p className="title">User Experience Designer and Developer.</p>
					<p className="description">
						Duties include providing technical expertise to account managers, user experience and
						development teams as well as executing the user experience requirements into deliverables for
						integration with web applications or standalone websites. Client list includes Fidelity
						Management & Resource Company, State Street Global Advisors, Johnson & Johnson, Pfizer and
						ADQSR.
					</p>
				</article>
				<article>
					<p>
						I also have a soft spot for early-stage startups and I've worked either for or with Formworx,
						eGrad, MallNetworks, Rapid7, Gobi, Wis.dm, Drync, FiftyThree, MineralTree, StyleMePretty and
						RapidMiner in some form or another.
					</p>
				</article>
			</section>
		</ResumeStyles>
		<Footer />
	</>
);

export default Resume;
