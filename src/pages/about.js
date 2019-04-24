import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


const AboutPage = () => {
	return(
		<Layout>
			<h1>Hello. This is me</h1>
			<p>I'm eager to learn more and work with you</p>
			<p><Link to='/contact'>Contact me</Link></p>
			</Layout>
	)
}

export default AboutPage 