import { React, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Burger from './Blocks-html/Burger'
import Header from './Blocks-html/Header'
import Modal from './Blocks-html/Modal'
import Sidebar from './Blocks-html/Sidebar'
import About from './pages/About'
import Advertising from './pages/Advertising.jsx'
import Main from './pages/Main'
import Read from './pages/Read'

const App = () => {
	const [modalActive, setModalActive] = useState(false)
	return (
		<BrowserRouter>
			<div className='main-burger'>
				<Burger />
			</div>
			<div className={modalActive ? 'wrapper' : 'wrapper active'}>
				<Header />
				<Sidebar />
				<Routes>
					<Route
						exact
						path={'/'}
						element={
							<Main modalActive={modalActive} setModalActive={setModalActive} />
						}
					></Route>
					<Route
						exact
						path={'/Main'}
						element={
							<Main modalActive={modalActive} setModalActive={setModalActive} />
						}
					></Route>
					<Route exact path={'/Read'} element={<Read />} />
					<Route exact path={'/About'} element={<About />} />
					<Route exact path={'/Advertising'} element={<Advertising />} />
				</Routes>
			</div>
			<Modal modalActive={modalActive} setModalActive={setModalActive} />
		</BrowserRouter>
	)
}

export default App
