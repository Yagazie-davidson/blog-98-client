import React from "react";
import { Link } from "react-router-dom";
// import { Button, ButtonGroup } from "@chakra-ui/react";
import { Button, Space } from "antd";
import { ArrowForwardIcon } from "@chakra-ui/icons";
function NavBar() {
	const links = [
		{ title: "Dashboard", link: "/admin/dashboard" },
		{ title: "Manage Posts", link: "/admin/manage" },
	];
	return (
		<div className="flex justify-between mx-20 mt-5">
			<h1>BLOG 98</h1>
			<section className="flex gap-x-10 items-center">
				{links.map(link => {
					return (
						<div>
							<Link to={link.link}>{link.title}</Link>
						</div>
					);
				})}
				<Button danger>
					<Link to="/admin/login">Log out</Link>
				</Button>
			</section>
		</div>
	);
}

export default NavBar;
