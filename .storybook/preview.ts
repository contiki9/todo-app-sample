import type { Preview } from "@storybook/react";
import "../src/index.css";
import "./styles/tailwind.css";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			default: "light",
			values: [
				{ name: "light", value: "#f8f9fa" },
				{ name: "white", value: "#ffffff" },
			],
		},
	},
};

export default preview;
