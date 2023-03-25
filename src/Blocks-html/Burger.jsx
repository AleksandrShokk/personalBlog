import React, { useState } from 'react'
import Menu from './burgerMenu'

const Burger = () => {
	const [menuActive, setMenuActive] = useState(false)
	const items = [
		{ id: 1, value: 'Главная', href: '/' },
		{ id: 2, value: 'Обо мне', href: '/About' },
		{ id: 3, value: 'Реклама', href: '/About' },
		{ id: 4, value: 'Профиль', href: '/About' },
	]
	return (
		<div>
			<nav className='burger'>
				<div className='burger__btn' onClick={() => setMenuActive(!menuActive)}>
					<span />
				</div>
				<input placeholder='Поиск по блогу' className='burger__input' />
			</nav>
			<Menu
				key={3}
				menuActive={menuActive}
				setMenuActive={setMenuActive}
				items={items}
			/>
		</div>
	)
}
export default Burger
