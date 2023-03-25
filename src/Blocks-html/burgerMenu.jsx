import React from 'react'

const Menu = ({ items, menuActive, setMenuActive }) => {
	return (
		<div
			key={1}
			className={menuActive ? 'menu active' : 'menu'}
			onClick={setMenuActive}
		>
			<div className='menu__content'>
				<ul key={2}>
					{items.map(item => (
						<li className='menu__section' key={item.id}>
							<a className='menu__link' href={item.href}>
								{item.value}
							</a>
						</li>
					))}
				</ul>
				<div className='menu__buttons'>
					<a href='/' className='btn btn--red'>
						Мои работы
					</a>
					<button className='btn btn--blue' type='button'>
						Написать мне
					</button>
				</div>
			</div>
		</div>
	)
}
export default Menu
