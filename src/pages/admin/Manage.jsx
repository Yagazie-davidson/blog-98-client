import React, { useEffect, useState, useContext } from "react";
import NavBar from "../../components/NavBar";
// import PostContext from "../../context/postsContext";
function Manage() {
	// const { addPostCon, postList, sePostList } = useContext(PostContext);
	const [posts, setPosts] = useState();
	// const posts = localStorage.getItem("posts");
	// console.log(posts);
	// const [items, setItems] = useState([]);

	useEffect(() => {
		const posts = JSON.parse(localStorage.getItem("posts"));
		if (posts) {
			setPosts(posts);
		}
	}, []);
	const getPosts = async () => {
		try {
			const res = await fetch(`http://localhost:8000/api/posts`, {
				method: "get",
				headers: { "Content-Type": "application/json" },
			});
			const data = await res.json();
			localStorage.setItem("posts", JSON.stringify(data));
			// setPosts(data);
			// sePostList(data);
			// console.log(postList);
			// console.log(data);
		} catch (err) {
			console.log("Something went wrong");
		}
	};
	useEffect(() => {
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
