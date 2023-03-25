import AboutMain from '../Blocks-html/aboutMain';

function About() {
	return React.createElement(
		'div',
		{ className: 'wrapper' },
		React.createElement(
			'main',
			{ className: 'main' },
			React.createElement(
				'div',
				{ className: 'container' },
				React.createElement(AboutMain, null)
			),
			React.createElement(
				'footer',
				{ className: 'about__call' },
				'\u0421\u0432\u044F\u0437\u044C \u0441\u043E \u043C\u043D\u043E\u0439:',
				React.createElement(
					'div',
					null,
					'\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043C\u043D\u0435 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435'
				),
				React.createElement(
					'div',
					null,
					'Gmail: ',
					React.createElement('a', { href: '' }, 'canatic243@gmail.com')
				),
				React.createElement('div', null, 'Tel Russia: +79950455596')
			)
		)
	);
}
export default About;
