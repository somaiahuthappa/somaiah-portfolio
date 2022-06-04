import React from 'react';
import './footer.css';

function Footer() {
	return (
		<div class="footer-container">
			<footer>
				<ul>
					<li class='footer-list'>
						<a
							class='footer-link text-white'
							href='https://github.com/somaiahuthappa'
							target='_blank'>
							<h4>Github</h4>
						</a>
					</li>
					<li class='footer-list'>
						<a
							class='footer-link text-white'
							href='https://www.linkedin.com/in/somaiahuthappa/'
							target='_blank'>
							<h4>LinkedIn</h4>
						</a>
					</li>
					<li class='footer-list text-white'>
						<a class='footer-link'><h4>Twitter</h4></a>
					</li>
				</ul>
			</footer>
		</div>

	);
}

export default Footer;