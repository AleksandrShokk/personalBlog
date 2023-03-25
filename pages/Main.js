import Stories from '../Blocks-html/Stories';
import Post from '../Blocks-html/Post';

function Main() {
	return React.createElement(
		'main',
		{ className: 'main' },
		React.createElement(
			'div',
			{ className: 'container' },
			React.createElement(Stories, null),
			React.createElement(Post, null)
		)
	);
}
export default Main;
