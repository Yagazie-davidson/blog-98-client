import React from "react";

function Badge({ tag }) {
	return (
		<div className="bg-blue-800 text-white text-xs px-3 py-1 rounded-md">
			<p>{tag}</p>
		</div>
	);
}

export default Badge;
