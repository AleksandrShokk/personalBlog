import React from 'react';
import Post from '../Blocks-html/Post';

const Main = ({ modalActive, setModalActive }) => {
	return (
		<main className='main'>
			<div className='container'>
				<Post modalActive={modalActive} setModalActive={setModalActive} />
			</div>
		</main>
	);
};
export default Main;
