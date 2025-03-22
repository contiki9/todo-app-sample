import type { Meta, StoryObj } from "@storybook/react";
import { TodoList } from "./TodoList";

const meta = {
	title: "コンポーネント/TodoList",
	component: TodoList,
	parameters: {
		layout: "fullscreen",
		// 背景色を設定
		backgrounds: {
			default: "light",
			values: [
				{ name: "light", value: "#f8f9fa" }, // 薄いグレー
				{ name: "white", value: "#ffffff" }, // 白
			],
		},
	},
	// コンポーネントを適切に表示するためのデコレーター
	decorators: [
		(Story) => (
			<div className="container mx-auto p-6 max-w-4xl bg-gray-50">
				<Story />
			</div>
		),
	],
	tags: ["autodocs"],
} satisfies Meta<typeof TodoList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const デフォルト: Story = {};

// タスクが空の状態をシミュレートする例
export const タスクなし: Story = {
	parameters: {
		// 初期タスクを空の配列に設定するために必要なモックを記述します
		// 実装にはMSWなどのモックサーバーが必要になるため、ここではコメントのみ記載
	},
};

// カスタムレンダラーを使用した例を作成するにはuseStateのモックが必要なため、今回は基本的な例のみ実装しています
