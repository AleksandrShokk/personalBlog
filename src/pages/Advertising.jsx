import React from 'react';

const Advertising = () => {
	return (
		<main className='main'>
			<div className='ad'>
				<div className='ad__items'>
					<h1 className='ad__title'>Написать по поводу рекламы</h1>
					<form className='ad-form'>
						<input
							autoFocus
							className='ad-input'
							type='text'
							placeholder='Введите свою почту'
						></input>
						<input
							className='ad-input'
							type='text'
							placeholder='Введите текст сообщения'
						></input>
						<button className='btn btn--blue'>Отправить</button>
					</form>
				</div>
			</div>
		</main>
	);
};

export default Advertising;
