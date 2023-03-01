export const checkUser = (user, navigate) => {
	if (user === "admin") {
		console.log("valid");
	} else {
		navigate("/admin/login");
	}
};
