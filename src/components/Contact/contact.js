import React, { useState } from "react";
import "./contact.css";

function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	function validateEmail(email) {
		var regex = /.+@.+\..+/;
		return regex.test(String(email).toLowerCase());
	}

	const [errorMessage, setErrorMessage] = useState("");
	const { name, email, message } = formState;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!errorMessage) {
			setFormState({ [e.target.name]: e.target.value });
			console.log("Form", formState);
		}
	};

	const handleChange = (e) => {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("Please eneter a valid email.");
			} else {
				setErrorMessage("");
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(
					`${e.target.name} is required.`
				);
			} else {
				setErrorMessage("");
			}
		}
	};

	return (
		<div class="contact">
			<form id="contact-form" onSubmit={handleSubmit}>
				<h1 data-testid="h1tag">Contact me</h1>
				<div class="contact-form-item">
					<label type="name">Name:</label>
					<br />
					<input
						type="text"
						name="name"
						defaultValue={name}
						onBlur={handleChange}
						class="contact-form-input"
					/>
				</div>
				<div class="contact-form-item">
					<label type="email">
						Email address:
					</label>
					<br />
					<input
						type="email"
						name="email"
						defaultValue={email}
						onBlur={handleChange}
						class="contact-form-input"
					/>
				</div>
				<div class="contact-form-item">
					<label type="message">
						Message:
					</label>
					<br />
					<textarea
						name="message"
						rows="5"
						defaultValue={message}
						onBlur={handleChange}
						class="contact-form-input"
					/>
				</div>
				{errorMessage && (
					<div>
						<p class="error-text">
							{errorMessage}
						</p>
					</div>
				)}
				<button
					type="submit"
					class="contact-form-item"
					id="btn">
					Submit
				</button>
			</form>
		</div>
	);
}

export default Contact;