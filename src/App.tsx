import React from "react";
import "./App.css";
import PageInfo from "./components/PageInfo";
import PageLayout from "./components/PageLayout";

function App() {
	return (
		<PageLayout name="Andres">
			<PageInfo />
		</PageLayout>
	);
}

export default App;
