export const checkUser = (user, navigate) => {
	if (user === "admin") {
	} else {
		navigate("/admin/login");
	}
};
