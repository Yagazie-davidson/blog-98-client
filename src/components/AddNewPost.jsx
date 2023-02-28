import React, { useState } from "react";
import { Checkbox, Form, Input, Select } from "antd";
import Button from "./Button";
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
			setTitle("");
			setBody("");
			setTag("");
		} catch {}
	};
	return (
		<div className="flex flex-col justify-center items-center mt-10">
			<h1 className="text-xl">ADD NEW POST</h1>
			<Form className="mt-5 w-1/2">
				<Form.Item>
					<Input
						value={title}
						placeholder="Enter Title"
						onChange={e => setTitle(e.target.value)}
					/>
				</Form.Item>
				<Form.Item>
					<select
						value={tag}
						placeholder="Tag"
						onChange={e => setTag(e.target.value)}
					>
						<option value="politics">Politics</option>
						<option value="entertainment">Entertainment</option>
						<option value="sport">Sport</option>
					</select>
				</Form.Item>
				<Form.Item>
					<TextArea
						placeholder="Enter Post"
						rows={4}
						onChange={e => setBody(e.target.value)}
					/>
				</Form.Item>
				<Form.Item className="flex justify-center">
					<Button
						onClick={addPost}
						text="Add Post"
						className="bg-bl text-white py-2 px-5 rounded-md"
					/>
				</Form.Item>
			</Form>
		</div>
	);
}
// #0182FF

export default AddNewPost;
