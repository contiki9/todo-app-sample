import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import * as stories from "./TodoList.stories";

// すべてのストーリーをコンポーズして、引数やデコレーターを適用した状態のコンポーネントを取得
const { デフォルト } = composeStories(stories);

describe("TodoList コンポーネント", () => {
	it("Todoリストが正しくレンダリングされること", () => {
		render(<デフォルト />);

		// ヘッダーが表示されていることを確認
		expect(screen.getByText("Todoリスト")).toBeInTheDocument();

		// 新規追加ボタンが表示されていることを確認
		expect(screen.getByText("新規追加")).toBeInTheDocument();

		// テーブルヘッダーが表示されていることを確認
		expect(screen.getByText("タスク名")).toBeInTheDocument();
		expect(screen.getByText("優先度")).toBeInTheDocument();
		expect(screen.getByText("期日")).toBeInTheDocument();

		// 初期データが表示されていることを確認
		expect(screen.getByText("React学習")).toBeInTheDocument();
		expect(screen.getByText("買い物リスト作成")).toBeInTheDocument();
		expect(screen.getByText("部屋の掃除")).toBeInTheDocument();
	});

	it("データの優先度が正しく表示されていること", () => {
		render(<デフォルト />);

		// 優先度のラベルが表示されていることを確認
		expect(screen.getByText("高")).toBeInTheDocument();
		expect(screen.getByText("中")).toBeInTheDocument();
		expect(screen.getByText("低")).toBeInTheDocument();
	});
});
