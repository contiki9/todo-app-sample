import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn } from "@storybook/test";
import { userEvent, within } from "@storybook/testing-library";
import { Todo } from "./Todo";

const meta = {
	title: "コンポーネント/Todo",
	component: Todo,
	parameters: {
		layout: "padded-inline",
		backgrounds: {
			default: "light",
		},
	},
	decorators: [
		(Story) => (
			<table className="w-full table-fixed">
				<tbody>
					<Story />
				</tbody>
			</table>
		),
	],
	tags: ["autodocs"],
} satisfies Meta<typeof Todo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 完了状態: Story = {
	args: {
		todo: {
			id: 1,
			title: "React学習",
			completed: true,
			priority: "high",
			dueDate: "2024-03-25",
		},
	},
};

export const 未完了状態: Story = {
	args: {
		todo: {
			id: 2,
			title: "買い物リスト作成",
			completed: false,
			priority: "medium",
			dueDate: "2024-03-23",
		},
		onToggleComplete: fn(),
		onDelete: fn(),
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		// チェックボックスをクリック
		const checkbox = canvas.getByRole("checkbox");
		await userEvent.click(checkbox);

		// onToggleCompleteが呼び出されたことを確認
		await expect(args.onToggleComplete).toHaveBeenCalledWith(2, true);
	},
};

export const 削除操作: Story = {
	args: {
		todo: {
			id: 3,
			title: "部屋の掃除",
			completed: false,
			priority: "low",
		},
		onToggleComplete: fn(),
		onDelete: fn(),
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		// 削除ボタンをクリック
		const deleteButton = canvas.getByRole("button", { name: "削除" });
		await userEvent.click(deleteButton);

		// onDeleteが呼び出されたことを確認
		await expect(args.onDelete).toHaveBeenCalledWith(3);
	},
};

export const 低優先度: Story = {
	args: {
		todo: {
			id: 3,
			title: "部屋の掃除",
			completed: false,
			priority: "low",
		},
	},
};

export const 期日なし: Story = {
	args: {
		todo: {
			id: 4,
			title: "メールの返信",
			completed: false,
			priority: "medium",
		},
	},
};

export const 優先度なし: Story = {
	args: {
		todo: {
			id: 5,
			title: "資料の確認",
			completed: false,
			dueDate: "2024-04-01",
		},
	},
};
