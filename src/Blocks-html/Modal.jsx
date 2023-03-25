import { React, useState } from 'react';

const Modal = ({ modalActive, setModalActive, setPost }) => {
	const [title, setTitle] = useState('');

	const addPost = title => {
		setPost(prev => [
			{
				id: new Date(),
				title,
			},
			...prev,
		]);
		setTitle('');
	};

	console.log(setTitle);
	return (
		<div className={modalActive ? 'modal active' : 'modal'}>
			<div className='modal__item'>
				<div className='modal__title'>
					<h1 className='send-title'>Какой заголовок будет у поста?</h1>
					<input
						type='text'
						placeholder='Введите заголовок поста'
						className='send-input add-post__textarea'
						onChange={e => setTitle(e.target.value)}
						value={title}
					/>
				</div>
				<div className='modal__text'>
					<h1 className='send-title'>Какой текст будет у поста?</h1>
					<input
						type='text'
						placeholder='Введите текст поста'
						className='send-input__text add-post__textarea'
					/>
				</div>
				<div className='modal__img'>
					<h1 className='send-title'>Какая картинка будет у поста?</h1>
					<button className='btn send-button' type='file'>
						Загрузить картинку
					</button>
				</div>
				<div className='modal__button'>
					<button
						className='btn button-cancel btn--red'
						type='button'
						onClick={() => setModalActive(!modalActive)}
					>
						Отменить
					</button>
					<button
						className='btn btn-accept btn--blue'
						type='button'
						onClick={() => {
							addPost(title);
							setModalActive(!modalActive);
						}}
					>
						Отправить
					</button>
				</div>
				<button
					className='button-close'
					onClick={() => setModalActive(!modalActive)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='30'
						height='30'
						fill='currentColor'
						className='bi bi-x'
						viewBox='0 0 16 16'
					>
						<path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Modal;
