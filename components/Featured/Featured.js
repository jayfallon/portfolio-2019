import Link from "next/link";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FeaturedStyles from "./FeaturedStyles";
var ReactGA = require("react-ga");

const FeaturedLink = props => (
	<ReactGA.OutboundLink rel="noreferrer" eventLabel={props.label} to={props.href} target="_blank">
		{props.title}
	</ReactGA.OutboundLink>
);
const FeaturedImageLink = props => (
	<ReactGA.OutboundLink rel="noreferrer" eventLabel={props.label} to={props.href} target="_blank">
		<img alt={props.alt} src={props.src} />
	</ReactGA.OutboundLink>
);

const Featured = () => (
	<>
		<Header />
		<FeaturedStyles>
			<section>
				<h2>Featured Work</h2>
				<article>
					<h3>Most Recent</h3>
					<p>
						The work presented here reflects my most recent client work. It's hard to point out every single
						design element I would be responsible for given that most of the work occurred as a member of
						teams following the agile methodology, so it wouldn't be right to claim credit for work not
						entirely my own but all of the HTML, CSS and JavaScript is.
					</p>
				</article>
				<article>
					<h4>
						<FeaturedLink
							href={"https://tetris.jayfallon.dev/"}
							label={"Tetris Game"}
							title={"Web-based Tetris Game using React Hooks"}
						/>
					</h4>
					<div className="featured__grid--onesie">
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://tetris.jayfallon.dev/"}
								label={"Tetris Game Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/tetris-01.png"}
								alt={"Web-based Tetris in React using Hooks"}
							/>
						</div>
					</div>
					<p>
					Would you like to play a game? Of course you would! Why not play a web-based (sorry, no mobile) version of a longtime nemesis of mine: Tetris. I was never good at it back in th' day. Now, I'm pretty much an expert because I can control the speed and it doesn't cost any money to play. The whole point was to learn React Hooks and with the help of <FeaturedLink
							href={
								"https://www.youtube.com/watch?v=ZGOaCxX8HIU"
							}
							label={"How to Build Tetris in React - GameDev Tutorial (with React Hooks!)"}
							title={"Thomas Weibenfalk"}
						/>{" "}, I was able to do that very thing. A lot the gaming stuff was over my head but otherwise it was a very interesting tutorial and day-long project.
					</p>
					<p>
						The site is written using React.js, JSX, Next.js and it's based off of the
						the wonderful tutorial mentioned above. Since it's keyboard based there really isn't a mobile version and I don't have a keyboard for my seven-year old iPad, so testing and optimizing it would be a challenge.{" "}
						<FeaturedLink
							href={"https://github.com/jayfallon/react-tetris"}
							label={"Web Tetris - Repo"}
							title={"The GitHub repo is here."}
						/>
					</p>
				</article>
				<article>
					<h4>
						<FeaturedLink
							href={"https://github.com/jayfallon/portfolio-2019"}
							label={"Portfolio Site"}
							title={"This Site"}
						/>
					</h4>
					<div className="featured__grid--onesie">
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://github.com/jayfallon/portfolio-2019"}
								label={"Portfolio Site Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/jayfallon-01.png"}
								alt={"Jay Fallon's 2019 Portfolio Audit Results"}
							/>
						</div>
					</div>
					<p>
						I have to be honest, doing my portfolio site produces high levels of anxiety. My personal belief
						is that they rarely convey a true sense of the author's experience of skill level. Everyone
						else's, yes. But not my own. Unless it's that I'm always all over the place, which is probably
						the case.
					</p>
					<p>
						For this site I wanted to get as close to all{" "}
						<FeaturedLink
							href={
								"https://developers.caffeina.com/how-to-get-a-100-lighthouse-score-with-nextjs-c2fa4d35a90b"
							}
							label={"Lighthouse 100"}
							title={"100's on the Chrome Audit for PWA's"}
						/>{" "}
						and I'm almost there, when viewed in Incognito mode. My site is hosted on Zeit's Now so I'm
						somewhat limited as to what I can do from a hosting perspective in terms of performance, but I'm
						content for now with writing accessible code and following best practices.
					</p>
					<p>
						The site is written using React.js, JSX, Styled Components, Next.js and it's based off of the
						Next.js PWA Boilerplate. All code is responsive but I'm sure there'll be a device, OS or browser
						out there that refuses to display properly so I'll have to figue that out.{" "}
						<FeaturedLink
							href={"https://github.com/jayfallon/portfolio-2019"}
							label={"Portfolio Site - Repo"}
							title={"The GitHub repo is here."}
						/>
					</p>
				</article>
				<article>
					<h4>
						<FeaturedLink
							href={"https://sapphire-maritza.now.sh"}
							label={"Sapphire Maritza"}
							title={"Rewards Program"}
						/>
					</h4>
					<div className="featured__grid">
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://sapphire-maritza.now.sh"}
								label={"Sapphire Maritza Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/rewards-01.png"}
								alt={"Rewards Program Home"}
							/>
						</div>
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://sapphire-maritza.now.sh/dashboard"}
								label={"Sapphire Maritza Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/rewards-02.png"}
								alt={"Rewards Program Dashboard"}
							/>
						</div>
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://sapphire-maritza.now.sh/submissions/submission-01"}
								label={"Sapphire Maritza Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/rewards-03.png"}
								alt={"Rewards Program Submissions"}
							/>
						</div>
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://sapphire-maritza.now.sh/faq"}
								label={"Sapphire Maritza Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/rewards-04.png"}
								alt={"Rewards Program FAQ"}
							/>
						</div>
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://sapphire-maritza.now.sh/activity01/page01"}
								label={"Sapphire Maritza Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/rewards-05.png"}
								alt={"Rewards Program Activity"}
							/>
						</div>
					</div>
					<p>
						Working alongside a cross-functional team, this project focused on establishing the need for a
						rewards-based loyalty experience where customers could earn points towards prizes based on a set
						of activities that measured engagement with the client's products and other online activities.
					</p>
					<p>
						The frontend for this project was build using Next.js with Styled Components driving the CSS.
						Depicted is a static mockup of how the rewards program would appear to the customer.
					</p>
				</article>

				<article>
					<h4>
						<FeaturedLink
							href={"https://kirk-landing.now.sh/"}
							label={"Kirk Landing Page"}
							title={"Landing Page"}
						/>
					</h4>
					<div className="featured__grid">
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://kirk-landing.now.sh/"}
								label={"Sapphire Maritza Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/landing-01-01.png"}
								alt={"Landing Page 01"}
							/>
						</div>
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://kirk-landing.now.sh/"}
								label={"Sapphire Maritza Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/landing-01-02.png"}
								alt={"Landing Page 02"}
							/>
						</div>
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://kirk-landing.now.sh/"}
								label={"Sapphire Maritza Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/landing-01-03.png"}
								alt={"Landing Page 03"}
							/>
						</div>
					</div>
					<p>
						This is a standard landing page built using HTML and the Bootstrap CSS library. On a project
						like this I would normally acquire the visual designs and build the page in a manner that could
						easily be worked on or finished by a junior developer, hence the Bootstrap, and then hosted in a
						environment alongside other landing pages in order to capture engagement data.
					</p>
				</article>
				<article>
					<h4>
						<FeaturedLink
							href={"https://dr-promotions-02.now.sh/"}
							label={"Promotions Tab"}
							title={"Promotions Tab"}
						/>
					</h4>
					<div className="featured__grid">
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://dr-promotions-02.now.sh/"}
								label={"Promotions Tab Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/promotions-01.png"}
								alt={"Promotions Tab"}
							/>
						</div>
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://dr-promotions-02.now.sh/"}
								label={"Promotions Tab Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/promotions-02.png"}
								alt={"Promotions Tab"}
							/>
						</div>
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://dr-promotions-02.now.sh/"}
								label={"Promotions Tab Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/promotions-03.png"}
								alt={"Promotions Tab"}
							/>
						</div>
					</div>
					<p>
						This is a classic example of what I would present at the end of a day's work that would include
						basic conceptualization and sketching with the client followed up with a functional yet static
						prototype of a feature set. In this case it's a component that enables a user to set a promotion
						on a product based on time, pricing and available stock.
					</p>
					<p>
						This particular prototype was built using vanilla Javascript and CSS with nothing fancier than
						localStorage. This was a second prototype based on the same requirements yet with some minor
						changes to the interface and some code re-write.
					</p>
					<p>
						<FeaturedLink
							href={"https://invis.io/D3Q6W32THUN/"}
							label={"Promotions Tab Invision"}
							title={"The preliminary InVision sketches can be viewed here."}
						/>
					</p>
				</article>
				<article>
					<h4>
						<FeaturedLink
							href={"https://invis.io/WUQ6W3XZAVM"}
							label={"Order Management Dashboard"}
							title={"Order Management Dashboard"}
						/>
					</h4>
					<div className="featured__grid">
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://invis.io/WUQ6W3XZAVM"}
								label={"CTA Steps Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/oms-01.png"}
								alt={"CTA Steps"}
							/>
						</div>
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://invis.io/WUQ6W3XZAVM"}
								label={"CTA Steps Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/oms-02.png"}
								alt={"CTA Steps"}
							/>
						</div>
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://invis.io/WUQ6W3XZAVM"}
								label={"CTA Steps Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/oms-03.png"}
								alt={"CTA Steps"}
							/>
						</div>
					</div>
					<p>
						The requirements for this project were to redesign the dashboard for an order management system
						while simultaneously rewriting the frontend. Also, I had to make use of the Bootstrap CSS
						library in order to ensure that future development could make use of Bootstrap's learning curve.
					</p>
					<p>
						The work performed for a project such as this would be very typical of an engagement where an
						existing application needs to be either redesigned or have their frontend rewritten in a short
						timeline.
					</p>
				</article>
			</section>
			<section>
				<article>
					<h3>Past Work</h3>
					<p>
						This is a smattering of my past work. For these projects I usually worked as a combination of
						designer/developer in order to speed up the production process or fill gaps where I was needed
						most at any given time.
					</p>
				</article>
				<article>
					<h4>
						<FeaturedLink
							href={"https://www.cengage.com/dashboard/#/login"}
							label={"Student Portal"}
							title={"Student Portal"}
						/>
					</h4>
					<div className="featured__grid--onesie">
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://www.cengage.com/dashboard/#/login"}
								label={"Student Portal Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/student-portal-lg.png"}
								alt={"Student Portal"}
							/>
						</div>
					</div>
					<p>
						MyCengage was a front-end implementation project based on an existing design to allow for
						students to easily purchase the appropriate material for their courses along with supplemental
						product bundles that were not easily available in the Cengage's system. The html and css were
						implemented in components to allow for easy implementation and reusability.
					</p>
				</article>
				<article>
					<h4>
						<FeaturedLink
							href={"https://www.cengage.com/4ltr-press"}
							label={"Learning Management System"}
							title={"Learning Management System"}
						/>
					</h4>
					<div className="featured__grid--onesie">
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://www.cengage.com/4ltr-press"}
								label={"Learning Management System Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/4ltr-lg.png"}
								alt={"Learning Management System"}
							/>
						</div>
					</div>
					<p>
						4LTR Press Online is a Cengage product for students who are looking for a high-value, low-cost
						solution. While utilizing Cengage's core licensed content, it is an entirely separate solution
						managed and developed outside of the company's traditional workflow. My responsibilities
						included extensive development to the existing codebase along with providing design solutions
						and implementation for multiple components for the platform.
					</p>
				</article>
				<article>
					<h4>
						<FeaturedLink
							href={"https://www.cengage.com/training/mindtap"}
							label={"Learning Management Platform"}
							title={"Learning Management Platform"}
						/>
					</h4>
					<div className="featured__grid--onesie">
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://www.cengage.com/training/mindtap"}
								label={"Learning Management Platform Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/mindtap-lg.png"}
								alt={"Learning Management Platform"}
							/>
						</div>
					</div>
					<p>
						MindTap is a personal learning environment that contains Activities (Readings, Assignments,
						Apps) that instructors and students use in a course. As a platform, it enables instructors to
						add activites for students in both a reading and homework environment along with associated
						data, grading and behavior tracking applications as add-ons. My responsibilities for MindTap 3
						was bug-fixing while converting the platform's code from JavaScriptMVC to Angular. For MindTap
						versions 4 and 5, I worked alongside various design and development teams to ensure html, css
						and functionality standards were followed and implemented.
					</p>
				</article>
				<article>
					<h4>
						<FeaturedLink
							href={"https://support.fiftythree.com/hc/en-us"}
							label={"Support Website"}
							title={"Support Website"}
						/>
					</h4>
					<div className="featured__grid--onesie">
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://support.fiftythree.com/hc/en-us"}
								label={"Support Website Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/paper-lg.png"}
								alt={"Support Website"}
							/>
						</div>
					</div>
					<p>
						I helped Fiftythree rebuild and transform their existing support website by architecting a
						framework coupled with workflows that would allow non-technical support team members to update
						and deploy content without the aid of content management systems or blogging frameworks.
					</p>
				</article>
				<article>
					<h4>
						<FeaturedLink
							href={"https://www.mineraltree.com/"}
							label={"Accounts Payable Application"}
							title={"Accounts Payable Application"}
						/>
					</h4>
					<div className="featured__grid--onesie">
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://www.mineraltree.com/"}
								label={"Accounts Payable Application Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/mineral-lg.png"}
								alt={"Accounts Payable Application"}
							/>
						</div>
					</div>
					<p>
						Coming onto the project during a critical phase, I worked alongside the design and product team
						to update, rework and create dashboard views for integration in a JSF platform while providing
						user experience guidance and consultation.
					</p>
				</article>
				<article>
					<h4>
						<FeaturedLink
							href={"https://www.stylemepretty.com/"}
							label={"Wedding Inspiration"}
							title={"Wedding Inspiration"}
						/>
					</h4>
					<div className="featured__grid--onesie">
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://www.stylemepretty.com/"}
								label={"Wedding Inspiration Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/wedding-lg.png"}
								alt={"Wedding Inspiration"}
							/>
						</div>
					</div>
					<p>
						Working alongside Style Me Pretty's ownership, design, engineering and customer service teams, I
						helped craft a solution that would transform the company's website from a static offering to a
						more interactive and responsive approach.
					</p>
				</article>
				<article>
					<h4>
						<FeaturedLink
							href={"http://www.ringboxingclub.com/"}
							label={"Boxing Club Website"}
							title={"Boxing Club Website"}
						/>
					</h4>

					<div className="featured__grid--onesie">
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"http://www.ringboxingclub.com/"}
								label={"Boxing Club Website Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/boxing-lg.png"}
								alt={"Boxing Club Website"}
							/>
						</div>
					</div>
					<p>
						One of those projects I'll pick up in between things to keep the bills paid. I did the work for
						The Ring back in 2010-2011, and am kind of surprised it's stood the test of time.
					</p>
					<p>
						Given a finalized visual design, I developed the website using the Radiant CMS, extending basic
						functionality with jQuery to enable customer engagement with free trials and class appointments.
					</p>
				</article>
			</section>
			<section>
				<article>
					<h3>Experimental Work</h3>
					<p>
						A small collection of projects I'll work on every once in awhile, either related to school or a
						technology I'm trying to wrap my head around.
					</p>
				</article>
				<article>
					<h4>
						<FeaturedLink
							href={"https://jayfallon-assignment-3.now.sh/"}
							label={"Recipe Website"}
							title={"Recipe Website"}
						/>
					</h4>

					<div className="featured__grid--onesie">
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://jayfallon-assignment-3.now.sh/"}
								label={"Recipe Website Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/khaosoi-lg.png"}
								alt={"Recipe Website"}
							/>
						</div>
					</div>
					<p>
						Khao Soi is a popular coconut curry and noodles street food dish found in Northern Thailand that
						has many regional variants depending on where you're ordering it. In Chiang Mai, it is
						traditionally served with chicken, however I've seen it served with beef and minced pork as
						well. While my version is made with egg noodles, you can also substitute for rice noodles as
						well.
					</p>
					<p>
						Just a fun website I made to showcase my Thai cooking skills, part of a course in CSS I was
						taking in 2017. It needs a revamp, whenever I get a chance. Nothing fancy here, just a static
						website. What really pains me is that I locked myself out of my Vimeo account somehow and it's
						not fair.
					</p>
				</article>
				<article>
					<h4>
						<FeaturedLink
							href={"https://bradyvsworld.com/"}
							label={"Football Fan Page"}
							title={"Football Fan Page"}
						/>
					</h4>

					<div className="featured__grid--onesie">
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://bradyvsworld.com/"}
								label={"Football Fan Page Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/brady-lg.png"}
								alt={"Football Fan Page"}
							/>
						</div>
					</div>
					<p>
						Completed in record time and launched three hours prior to Super Bowl LII, this site takes a
						serious look at displaying data in card-like format with the CSS Grid Layout Module. The intent
						is to consolidate relevant data into an easily consumed format that can late be used for a
						gateway into extended data displays, comparisons and other visualizations not restricted by a
						tabular format.
					</p>
					<p>
						The site was built using Node.js and Express.js. It includes an authentication-based back-end UI
						for data entry and a simplified, publicly available front-end version. Tom Brady has probably
						not seen this website.
					</p>
				</article>
				<article>
					<h4>
						<FeaturedLink
							href={"https://haymarket-superette.com/"}
							label={"Bitcoin Price Checker"}
							title={"Bitcoin Price Checker"}
						/>
					</h4>

					<div className="featured__grid--onesie">
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://haymarket-superette.com/"}
								label={"Bitcoin Price Checker Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/haymarket-lg.png"}
								alt={"Bitcoin Price Checker"}
							/>
						</div>
					</div>
					<p>
						When I was getting into Next.js it coincided with the huge upswing and subsequent drop in
						Bitcoin prices. I thought it would be fun to track the craziness as folks sold off their
						holdings.
					</p>
					<p>
						A small experiment using Next.js to query the Coindesk API and retrieve real-time cryptocurrency
						price quotes. There isn't much to it, but a roadmap would include displaying historical data for
						both Bitcoin and other currencies using my soon-to-be perfected data card format.
					</p>
				</article>
				<article>
					<h4>
						<FeaturedLink
							href={"https://lookuptv.now.sh/"}
							label={"TV Show Finder"}
							title={"TV Show Finder"}
						/>
					</h4>

					<div className="featured__grid--onesie">
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://lookuptv.now.sh/"}
								label={"TV Show Finder Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/lookup-lg.png"}
								alt={"TV Show Finder"}
							/>
						</div>
					</div>
					<p>
						A very basic app that utilizes the TVMAZE API to look up TV shows and display a list of results,
						some of which may not be exactly what you're looking for but interesting nonetheless for
						discovery purposes.
					</p>
					<p>
						The site was built using Node.js and Angular.js and uses the RxJS library to display results. It
						is part of my experimentation with the CSS Grid displaying data in a card-based format for
						responsive websites.
					</p>
				</article>
				<article>
					<h4>
						<FeaturedLink
							href={"https://gitriculum.now.sh/"}
							label={"GitHub User Lookup"}
							title={"GitHub User Lookup"}
						/>
					</h4>

					<div className="featured__grid--onesie">
						<div className="featured__grid--item">
							<FeaturedImageLink
								href={"https://gitriculum.now.sh/"}
								label={"GitHub User Lookup Image"}
								src={"https://s3.amazonaws.com/jayfallon-portfolio-2019/featured/gitriculum-lg.png"}
								alt={"GitHub User Lookup"}
							/>
						</div>
					</div>
					<p>
						A somewhat* useful single-serving app to retrieve relevant data from a particular GitHub user's
						account. It's not very smart and it requires to know the user's name in advance, but it's simple
						and quick, avoiding all the cruft you'd get from GitHub. I have some great ideas for this app.
						Built using Next.js and the GitHub API.
					</p>
					<p>* That's in the eye of the beholder.</p>
				</article>
			</section>
		</FeaturedStyles>
		<Footer />
	</>
);

export default Featured;
