import avatar from '../images/myphoto.jpg';

function AboutMain() {
	return (
		<div className='about'>
			<div className='about__items'>
				<h1 className='about__head'>Информация обо мне</h1>
				<img className='about__my-photo' src={avatar} alt='my photo' />
				<p className='about__text'>
					Front-end разработчик. Практик верстки сайтов. Созданием сайтов
					занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал
					более 10 000 часов в создании сайтов различной сложности.
				</p>
				<ul className='about__list'>
					Мои работы:
					<li className='about__link'>
						<a href='/'>lol</a>
					</li>
					<li className='about__link'>
						<a href='/'>kek</a>
					</li>
					<li className='about__link'>
						<a href='/'>cheburek</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
export default AboutMain;
