import Link from "next/link";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomeStyles from "./HomeStyles";

const Home = props => (
	<>
		<Header />
		<HomeStyles>
			<section>
				<h2>Welcome to my humble site!</h2>
				<article>
					<h3>My name is Jay Fallon and I am a User Experience Engineer.</h3>
					<div className="home__grid">
						<div className="home__grid--item">
							<img src="https://s3.amazonaws.com/jayfallon-portfolio-2019/graphics/work.jpg" alt="Meaningful Work" />
						</div>
					</div>
					<p>
						That's a highfalutin job title to give oneself, but suffice to say that my job entails using a
						combination of empathy, code, design and communication to work alongside a team in designing and
						developing web applications. I'm not sure what name the community will give the position in the
						future, but I think for all intents and purposes it works for 2019.
					</p>
					<p>
						I am currently seeking honest employment in the realm of User Experience. Over time I have
						worked in multiple UX disciplines but I feel most comfortable using my skills in all facets of
						the design cycle except visual design. I'm limited to an aesthetic which I call "Enhanced
						Wireframes" and while I truly admire those who can execute visual design, I'm best left to
						writing the code that translates that work to the web.
					</p>
					<p>
						I write a lot of frontend code. My focus is on accessibility, portability and responsive design,
						and while I tend to be opinionated on some things, I'm mostly open to trying new experiences
						whether they be in design, development or how we can work together to produce excellent
						products.
					</p>
				</article>
			</section>
		</HomeStyles>
	</>
);

export default Home;
