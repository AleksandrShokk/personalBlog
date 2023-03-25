import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className='header'>
			<div className='header__left'>
				<nav className='nav'>
					<ul className='nav__list'>
						<li className='nav__item'>
							<Link className='nav__link' to='Main'>
								Главная
							</Link>
						</li>
						<li className='nav__item'>
							<Link className='nav__link has-subnav' to=''>
								Статьи
							</Link>
							<ul className='subnav'>
								<li className='nav__item'>
									<Link className='subnav__link' to=''>
										Создание сайтов
									</Link>
								</li>
								<li className='nav__item'>
									<Link className='subnav__link' to=''>
										Интернет-магазин
									</Link>
								</li>
								<li className='nav__item'>
									<Link className='subnav__link' to=''>
										Продвижение видео
									</Link>
								</li>
							</ul>
						</li>
						<li className='nav__item'>
							<Link className='nav__link' to='About'>
								Обо мне
							</Link>
						</li>
						<li className='nav__item'>
							<Link className='nav__link' to='Advertising'>
								Реклама
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className='header__right'>
				<nav className='nav'>
					<ul className='nav__list'>
						<li>
							<Link className='nav__link' to=''>
								Профиль
							</Link>
						</li>
						<li>
							<Link className='nav__link' to=''>
								Выйти
							</Link>
						</li>
					</ul>
				</nav>
				<form className='search' action='/' method='post'>
					<input
						className='search__input'
						type='text'
						placeholder='Поиск по блогу'
					></input>
				</form>
			</div>
		</header>
	);
}
export default Header;
