import React, { useEffect } from "react";
import AddNewPost from "../../components/AddNewPost";
import NavBar from "../../components/NavBar";
import { checkUser } from "../../services/Authentication";
import { useNavigate } from "react-router-dom";

function Dashboard() {
	const navigate = useNavigate();
	const user = localStorage.getItem("user");
	useEffect(() => {
		checkUser(user, navigate);
	}, []);
	return (
		<div>
			<NavBar />
			<h1 className="text-center mt-10 text-2xl">Welcome Back Admin</h1>
			{/** <AddNewPost />**/}
			<AddNewPost />
		</div>
	);
}

export default Dashboard;
