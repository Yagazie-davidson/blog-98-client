import React, { useState } from "react";
import { Checkbox, Form, Input, Select } from "antd";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Alert, Space } from "antd";

function Login() {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const handleLogin = () => {
		if (
			username.toLocaleLowerCase() === "admin" &&
			password.toLocaleLowerCase() === "admin"
		) {
			setError(false);
			navigate("/admin/dashboard");
		} else {
			console.log("Invalid user");
			setError(true);
		}
		setUsername("");
		setPassword("");
	};
	return (
		<div className="flex flex-col justify-center items-center h-screen">
			{error && (
				<Alert
					message="Invalid username or password"
					// description="This is an error message about copywriting."
					type="error"
					showIcon
				/>
			)}
			<h1 className="text-2xl font-semibold mt-2">LOGIN</h1>
			<Form className="mt-5 w-1/2">
				<Form.Item>
					<Input
						value={username}
						placeholder="Username"
						onChange={e => setUsername(e.target.value)}
					/>
				</Form.Item>
				<Form.Item>
					<Input
						value={password}
						type="password"
						placeholder="Password"
						onChange={e => setPassword(e.target.value)}
					/>
				</Form.Item>
				<Form.Item className="flex justify-center">
					<Button
						onClick={handleLogin}
						text="Login"
						className="bg-bl text-white py-2 px-5 rounded-md"
					/>
				</Form.Item>
			</Form>
		</div>
	);
}

export default Login;
