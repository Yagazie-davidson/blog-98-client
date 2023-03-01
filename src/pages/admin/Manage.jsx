import React, { useEffect, useState, useContext } from "react";
import NavBar from "../../components/NavBar";
import { checkUser } from "../../services/Authentication";
import { useNavigate } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { IconContext } from "react-icons";
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
			<h1 className="text-center my-10 text-2xl">MANAGE POSTS</h1>
			<div className="flex flex-col gap-y-10">
				{posts &&
					posts.map((post, index) => {
						return (
							<div key={index} className="flex justify-between mx-32">
								<h1>{post.postName}</h1>
								<IconContext.Provider value={{ color: "red" }}>
									<FiTrash2 />
								</IconContext.Provider>
							</div>
						);
					})}
			</div>
			{!posts && <h3>No posts at the moment</h3>}
		</div>
	);
}
export default Manage;
