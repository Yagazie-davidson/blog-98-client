import React from "react";
import AddNewPost from "../../components/AddNewPost";
import NavBar from "../../components/NavBar";
function Dashboard() {
	return (
		<div>
			<NavBar />
			<h1 className="text-center mt-10">Welcome Back John Doe</h1>
			{/** <AddNewPost />**/}
		</div>
	);
}

export default Dashboard;
