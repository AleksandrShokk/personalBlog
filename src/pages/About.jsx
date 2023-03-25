import React from 'react';
import AboutMain from '../Blocks-html/aboutMain';

const About = () => {
	return (
		<main className='main'>
			<div className='container'>
				<AboutMain />
			</div>
			<footer className='about__call'>
				Связь со мной:
				<div>Написать мне на сайте</div>
				<div>
					Gmail: <a href='/'>canatic243@gmail.com</a>
				</div>
				<div>Tel Russia: +79950455596</div>
			</footer>
		</main>
	);
};
export default About;
