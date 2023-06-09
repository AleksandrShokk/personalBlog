import instagram from '../images/instagram.svg'
import avatar from '../images/myphoto.jpg'
import background from '../images/Rectangle1.jpg'
import vk from '../images/vk.svg'

function Sidebar() {
	return (
		<aside className='sidebar'>
			<div className='sidebar__header'>
				<img src={background} alt=''></img>
			</div>
			<div className='sidebar__content'>
				<div className='profile'>
					<img className='profile__avatar' src={avatar} alt=''></img>
					<div className='profile__name'>Чапайкин Александр</div>
					<div className='profile__prof'>Начинающий FrontEnd разработчик</div>
					<ul className='social'>
						<li className='social__items'>
							<a href='/' className='social__link' target='_blank'>
								<img src={instagram} alt='Мой instagram'></img>
							</a>
						</li>
						<li className='social__items'>
							<a href='/' className='social__link' target='_blank'>
								<img src={vk} alt='Мой vk'></img>
							</a>
						</li>
						<li className='social__items'>
							<a href='/' className='social__link' target='_blank'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									fill='currentColor'
									className='bi bi-github'
									viewBox='0 0 16 16'
								>
									<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
								</svg>
							</a>
						</li>
					</ul>
					<div className='profile__text'>
						<p>
							Front-end разработчик. Практик верстки сайтов. Созданием сайтов
							занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и
							наработал более 10 000 часов в создании сайтов различной
							сложности.
						</p>
					</div>
				</div>
			</div>
			<div className='sidebar__footer'>
				<a href='/' className='btn btn--red'>
					Мои работы
				</a>
				<button className='btn btn--blue' type='button'>
					Написать мне
				</button>
			</div>
		</aside>
	)
}
export default Sidebar
