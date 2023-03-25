import { React, useState } from 'react';
import send from '../images/send.svg';

export const AddPost = ({ setPost, modalActive, setModalActive }) => {
	const [text, setText] = useState('');

	const addPost = text => {
		setPost(prev => [
			{
				id: new Date(),
				text,
			},
			...prev,
		]);
		setText('');
	};

	return (
		<div className='add-post'>
			<form className='add-post__form' action='' method='get'>
				<input
					className='add-post__textarea'
					type='text'
					placeholder='Напишите что-нибудь'
					onChange={e => setText(e.target.value)}
					value={text}
				/>
				<div className='add-post__form-actions'>
					<button
						className='add-post__file'
						type='button'
						onClick={() => setModalActive(!modalActive)}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='23'
							height='23'
							fill='currentColor'
							className='bi bi-send'
							viewBox='0 0 16 16'
						>
							<path d='M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z' />
						</svg>
					</button>
					<button
						className='add-post__send'
						type='button'
						onClick={() => addPost(text)}
					>
						<img src={send} alt='Отправить'></img>
					</button>
				</div>
			</form>
		</div>
	);
};
