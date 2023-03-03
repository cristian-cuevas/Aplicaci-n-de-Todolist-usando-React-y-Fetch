import React from "react";
import {Todo} from "./Todo.jsx";
import "../../styles/todo.css";

const Home = () => {
	return (
		<div className="container text-center bg-image" id="div1">
			<Todo/>
		</div>
	);
};

export default Home;