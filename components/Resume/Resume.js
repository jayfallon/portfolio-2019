import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import ResumeStyles from "./ResumeStyles";

const Resume = () => (
	<>
		<Header />
		<ResumeStyles>
			<section>
				<h2>Summary of Experience</h2>
				<p>
					Jay Fallon is a User Experience professional with years of experience in product design and
					development for a list of clients that includes large enterprises, small businesses and start-up
					ventures. Jay's interests lie in mobile application development, rapid and iterative prototyping,
					user-centric design and testing methodologies, the responsive experience and gesture-based
					navigation.
				</p>
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
			<section>
				<h2>Education</h2>
				<article>
					<h3>
						<span>Master of Liberal Arts, Extension Studies</span>
						<span>Harvard University, Cambridge MA</span>
					</h3>
					<p className="period">January, 2017 - May, 2019 (Expected)</p>
					<p className="status">Degree Candidate</p>
					<p className="description">
						Concentration in Digital Media Design, performing coursework and research in audio-visual
						creation and production, usability research and design, courseware development, programming,
						interaction design and information architecture, along with front and back end development.
					</p>
				</article>
				<article>
					<h3>
						<span>Bachelor of Science in Business Administration</span>
						<span>Northeastern University, Boston, MA</span>
					</h3>
					<p className="period">September, 1993 - June, 1998</p>
					<p className="description">
						Majored in International Business and Finance. Completed cooperative education assignments at
						Boston’s Better Snacks, FMRC and PictureTel with learning opportunities and responsibilities in
						operations, marketing, technical documentation and internationalization.
					</p>
				</article>
			</section>
			<section>
				<h2>Military Service</h2>
				<article>
					<h3>United States Marine Corps</h3>
					<p className="period">April, 1988 - August, 1993</p>
					<p className="title">Infantry Rifleman (0311) &amp; Security Guard (8151).</p>
					<p className="status">Sergeant (E-5), Honorable Dishcharge</p>
					<p className="description">
						Served with Marine Detachments aboard USS Enterprise CVN-65 and USS Eisenhower CVN-69 while a
						member of Marine Corps Security Forces. Subsequently assigned to I MEF in Saudi Arabia during
						Operation Desert Storm and ending his enlistment with 3rd Battalion, 2nd Marine Regiment in Camp
						Lejeune, NC.
					</p>
				</article>
			</section>
		</ResumeStyles>
		<Footer />
	</>
);

export default Resume;
