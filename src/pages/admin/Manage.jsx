import React, { useEffect, useState, useContext } from "react";
import NavBar from "../../components/NavBar";
import { checkUser } from "../../services/Authentication";
import { useNavigate } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { BsPencil } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Alert } from "antd";
import Badge from "../../components/Badge";
function Manage() {
	const navigate = useNavigate();
	const user = localStorage.getItem("user");
	const [posts, setPosts] = useState();
	const [success, setSuccess] = useState(false);
	useEffect(() => {
		checkUser(user, navigate);
	}, []);
	// get all posts
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

	// Delete post function
	const deletePost = async postName => {
		try {
			const res = await fetch("http://localhost:8000/api/admin/post/delete", {
				method: "delete",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ postName }),
			});
			const data = await res.json();
			setSuccess(true);
		} catch (err) {
			console.log(err);
			setSuccess(false);
		}
	};
	useEffect(() => {
		getPosts();
	}, [deletePost]);
	return (
		<div>
			<NavBar />
			<h1 className="text-center my-10 text-2xl">MANAGE POSTS</h1>
			<div className="flex flex-col gap-y-10 mx-32">
				<div className="flex justify-center">
					{success && (
						<Alert
							message="Post successfully deleted"
							type="success"
							className="w-fit"
							showIcon
						/>
					)}
				</div>
				{posts &&
					posts.map((post, index) => {
						return (
							<div key={index} className="flex justify-between">
								<div>
									<h1>{post.postName}</h1>
									<Badge tag={post.tag} />
								</div>
								<div className="flex gap-x-5">
									<button>
										<IconContext.Provider value={{ color: "green" }}>
											<BsPencil />
										</IconContext.Provider>
									</button>
									<button onClick={() => deletePost(post.postName)}>
										<IconContext.Provider value={{ color: "red" }}>
											<FiTrash2 />
										</IconContext.Provider>
									</button>
								</div>
							</div>
						);
					})}
			</div>
			{!posts && <h3>No posts at the moment</h3>}
		</div>
	);
}
export default Manage;
