import React, { useEffect, useState, useContext } from "react";
import NavBar from "../../components/NavBar";
import { checkUser } from "../../services/Authentication";
import { useNavigate } from "react-router-dom";
function Manage() {
	const navigate = useNavigate();
	const user = localStorage.getItem("user");
	const [posts, setPosts] = useState();
	const getPosts = async () => {
		try {
			const res = await fetch(`http://localhost:8000/api/posts`, {
				method: "get",
				headers: { "Content-Type": "application/json" },
			});
			const data = await res.json();
			setPosts(data);
		} catch (err) {
			console.log("Something went wrong");
		}
	};
	useEffect(() => {
		checkUser(user, navigate);
		getPosts();
	}, []);
	return (
		<div>
			<NavBar />
			Manage
			{posts &&
				posts.map((post, index) => {
					return <h1 key={index}>{post.postName}</h1>;
				})}
			{!posts && <h3>No posts at the moment</h3>}
		</div>
	);
}
export default Manage;
