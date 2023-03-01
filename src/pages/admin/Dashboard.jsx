import React from "react";
import AddNewPost from "../../components/AddNewPost";
import NavBar from "../../components/NavBar";
function Dashboard() {
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
