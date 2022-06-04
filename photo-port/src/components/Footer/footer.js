import React from 'react';

function Footer() {
	return (
		<footer>
			<ul>
				<li className='footer-list'>
					<a
						className='footer-link'
						href='https://github.com/somaiahuthappa'
						target='_blank'>
						Github
					</a>
				</li>
				<li className='footer-list'>
					<a
						className='footer-link'
						href='https://www.linkedin.com/in/somaiahuthappa/'
						target='_blank'>
						LinkedIn
					</a>
				</li>
				<li className='footer-list'>
					<a className='footer-link'>Twitter</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;