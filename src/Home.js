import {useState, useEffect} from 'react'
import BlogList from './BlogList'

const Home = () => {

	const [blogs, setBlogs] = useState(null)

	const [name, setName] = useState('mario')

	useEffect(() => {
		fetch('http://localhost:8000/blogs')
			.then(res => {
				return res.json()
			})
			.then(data => {
				setBlogs(data)
			})
	}, [])

	return (
		<div className="Home">
			{ blogs && <BlogList blogs={blogs} title="All Blogs!" />}
			<button onClick={() => setName('luigi')}>Change Name</button>
			<p>{name}</p>
		</div>
	)
}

export default Home