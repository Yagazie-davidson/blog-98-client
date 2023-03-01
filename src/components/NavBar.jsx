import React from "react";
import { Link } from "react-router-dom";
// import { Button, ButtonGroup } from "@chakra-ui/react";
import { Button, Space } from "antd";
import Divider from "@mui/material/Divider";
import { ArrowForwardIcon } from "@chakra-ui/icons";
function NavBar() {
	const links = [
		{ title: "Dashboard", link: "/admin/dashboard" },
		{ title: "Manage Posts", link: "/admin/manage" },
	];
	const handleLogOut = () => {
		localStorage.removeItem("user");
	};
	return (
		<>
			<div className="flex justify-between mx-20 mt-5 mb-5">
				<h1>BLOG 98</h1>
				<section className="flex gap-x-10 items-center">
					{links.map(link => {
						return (
							<div key={link.link}>
								<Link to={link.link}>{link.title}</Link>
							</div>
						);
					})}
					<Button danger onClick={handleLogOut}>
						<Link to="/admin/login" className="font-lato">
							Log out
						</Link>
					</Button>
				</section>
			</div>
			<Divider />
		</>
	);
}

export default NavBar;
