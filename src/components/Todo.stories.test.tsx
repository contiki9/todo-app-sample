import { composeStories } from "@storybook/react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import * as stories from "./Todo.stories";

// すべてのストーリーをコンポーズして、引数やデコレーターを適用した状態のコンポーネントを取得
const { 完了状態, 未完了状態 } = composeStories(stories);

describe("Todo コンポーネント", () => {
	it("完了状態のTodoが正しくレンダリングされること", () => {
		render(<完了状態 />);

		// チェックボックスが選択されていることを確認
		const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
		expect(checkbox.checked).toBe(true);

		// テキストが取り消し線で表示されていることを確認
		const title = screen.getByText("React学習");
		expect(title).toHaveClass("line-through");
	});

	it("未完了状態のTodoが正しくレンダリングされること", () => {
		render(<未完了状態 />);

		// チェックボックスが選択されていないことを確認
		const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
		expect(checkbox.checked).toBe(false);

		// テキストが通常表示されていることを確認
		const title = screen.getByText("買い物リスト作成");
		expect(title).not.toHaveClass("line-through");
	});

	it("チェックボックスをクリックすると状態が変わること", () => {
		const onToggleComplete = vi.fn();
		render(<未完了状態 onToggleComplete={onToggleComplete} />);

		// チェックボックスをクリック
		const checkbox = screen.getByRole("checkbox");
		fireEvent.click(checkbox);

		// コールバック関数が呼ばれることを確認
		expect(onToggleComplete).toHaveBeenCalledWith(2, true);
	});

	it("削除ボタンをクリックすると削除イベントが発火すること", () => {
		const onDelete = vi.fn();
		render(<未完了状態 onDelete={onDelete} />);

		// 削除ボタンをクリック
		const deleteButton = screen.getByRole("button", { name: "削除" });
		fireEvent.click(deleteButton);

		// コールバック関数が呼ばれることを確認
		expect(onDelete).toHaveBeenCalledWith(2);
	});
});
