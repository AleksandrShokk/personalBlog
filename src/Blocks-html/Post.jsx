import { useState } from 'react'
import { Link } from 'react-router-dom'
import postpic from '../images/postpic.jpg'
import { AddPost } from './addPost'
import Modal from './Modal'

const data = [
	{
		id: 'qieoje',
		title: 'Как писать код быстро и безболезненно?',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat',
		photo: postpic,
	},
]

const Post = ({ modalActive, setModalActive }) => {
	let dateNow = new Date()
	let timeString =
		(dateNow.getDate() < 10 ? '0' + dateNow.getDate() : dateNow.getDate()) +
		'-' +
		(dateNow.getMonth() + 1 < 10
			? '0' + (dateNow.getMonth() + 1)
			: dateNow.getMonth() + 1) +
		'-' +
		dateNow.getFullYear()

	const [post, setPost] = useState(data)

	return (
		<div className='main-post'>
			<AddPost
				setPost={setPost}
				modalActive={modalActive}
				setModalActive={setModalActive}
			/>
			<Modal setPost={setPost} />
			{post.map(item => (
				<div key={item.id} className='post'>
					<img className='post__pic' src={item.photo} alt='' />
					<div className='post__items'>
						<h1 className='post__title'>{item.title}</h1>
						<p className='post__text'>{item.text}</p>
					</div>
					<div className='underpost-text'>
						<div className='post__date'>{timeString}</div>
						<Link to='Read' className='post__read'>
							Читать
						</Link>
					</div>
				</div>
			))}
		</div>
	)
}
export default Post
