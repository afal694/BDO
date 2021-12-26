import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

const TabsComponent = ({
	tabs,
}: {
	tabs: { component: React.ReactElement; title: string }[];
}) => {
	const [key, setKey] = useState(tabs[0].title);
	return (
		<Tabs
			id="controlled-tab-example"
			activeKey={key}
			onSelect={(k) => {
				if (k) setKey(k);
			}}
			className="mb-3 d-flex justify-content-between tab-component">
			{tabs.map(({ title, component }) => {
				return (
					<Tab eventKey={title} title={title}>
						{component}
					</Tab>
				);
			})}
		</Tabs>
	);
};

export default TabsComponent;
