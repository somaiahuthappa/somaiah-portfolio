import React from 'react';
import './footer.css';

function Footer() {
	return (
		<footer>
			<ul>
				<li className='footer-list'>
					<a
						className='footer-link text-white'
						href='https://github.com/somaiahuthappa'
						target='_blank'>
						<h4>Github</h4>
					</a>
				</li>
				<li className='footer-list'>
					<a
						className='footer-link text-white'
						href='https://www.linkedin.com/in/somaiahuthappa/'
						target='_blank'>
						<h4>LinkedIn</h4>
					</a>
				</li>
				<li className='footer-list text-white'>
					<a className='footer-link'><h4>Twitter</h4></a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;