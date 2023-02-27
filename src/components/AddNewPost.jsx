import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
// const base_url = process.env.REACT_APP_BASE_URL;

function AddNewPost() {
	const { TextArea } = Input;
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [tag, setTag] = useState("");

	const addPost = async () => {
		const date = `${new Date().getDate()}-${
			new Date().getMonth() + 1
		}-${new Date().getFullYear()}`;
		const payload = {
			postName: title,
			body,
			tag,
			date,
		};
		console.log(payload);
		try {
			const res = await fetch(`http://localhost:8000/api/admin/add/post`, {
				method: "post",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});
			const data = await res.json();
			console.log(data);
		} catch {}
	};
	return (
		<div>
			<h1>ADD NEW POST</h1>
			<Form className="">
				<Form.Item label="Input">
					<Input value={title} onChange={e => setTitle(e.target.value)} />
				</Form.Item>
				<Form.Item label="Select">
					<select value={tag} onChange={e => setTag(e.target.value)}>
						<option value="politics">Politics</option>
						<option value="entertainment">Entertainment</option>
						<option value="sport">Sport</option>
					</select>
				</Form.Item>
				<Form.Item label="TextArea">
					<TextArea rows={4} onChange={e => setBody(e.target.value)} />
				</Form.Item>
				<Form.Item>
					<Button onClick={addPost}>Add New Post </Button>
				</Form.Item>
			</Form>
		</div>
	);
}

export default AddNewPost;
