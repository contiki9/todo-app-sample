import { useState } from "react";
import { Todo } from "./Todo";

// TodoItemの型定義
export interface TodoItem {
	id: number;
	title: string;
	completed: boolean;
	priority?: "low" | "medium" | "high";
	dueDate?: string;
}

/**
 * モックデータ（後でAPIから取得するデータを想定）
 */
const initialTodos: TodoItem[] = [
	{
		id: 1,
		title: "React学習",
		completed: false,
		priority: "high",
		dueDate: "2024-03-25",
	},
	{
		id: 2,
		title: "買い物リスト作成",
		completed: true,
		priority: "medium",
		dueDate: "2024-03-23",
	},
	{
		id: 3,
		title: "部屋の掃除",
		completed: false,
		priority: "low",
	},
];

/**
 * Todoリストを表示するコンポーネント
 */
export const TodoList = () => {
	// Todoリストの状態管理
	const [todos, setTodos] = useState<TodoItem[]>(initialTodos);

	// 新規Todoの追加ハンドラ
	const handleAddTodo = () => {
		// TODO: 新規Todo追加モーダルの表示などを実装する
		// TODO: APIと連携して追加・保存する処理を実装する
		console.log("新規Todoを追加します");
	};

	// Todo完了状態の切り替えハンドラ
	const handleToggleComplete = (id: number, completed: boolean) => {
		// TODO: APIと連携して保存する処理を実装する
		setTodos(
			todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo)),
		);
	};

	// Todo削除ハンドラ
	const handleDeleteTodo = (id: number) => {
		// TODO: APIと連携して削除する処理を実装する
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<>
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold text-gray-800">Todoリスト</h1>
				<button
					type="button"
					className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm transition-all duration-200 flex items-center"
					onClick={handleAddTodo}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-4 w-4 mr-1"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<title>追加アイコン</title>
						<path
							fillRule="evenodd"
							d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
							clipRule="evenodd"
						/>
					</svg>
					新規追加
				</button>
			</div>

			<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
				<div className="overflow-x-auto">
					<table className="w-full table-fixed">
						<colgroup>
							<col className="w-[7%]" />
							<col className="w-[43%]" />
							<col className="w-[20%]" />
							<col className="w-[20%]" />
							<col className="w-[10%]" />
						</colgroup>
						<thead>
							<tr className="bg-gray-50 text-left">
								<th className="py-3 px-6 border-b" />
								<th className="py-3 px-6 text-xs font-medium uppercase tracking-wider text-gray-500 border-b">
									タスク名
								</th>
								<th className="py-3 px-6 text-xs font-medium uppercase tracking-wider text-gray-500 border-b">
									優先度
								</th>
								<th className="py-3 px-6 text-xs font-medium uppercase tracking-wider text-gray-500 border-b">
									期日
								</th>
								<th className="py-3 px-6 border-b" />
							</tr>
						</thead>
						<tbody>
							{todos.map((todo) => (
								<Todo
									key={todo.id}
									todo={todo}
									onToggleComplete={handleToggleComplete}
									onDelete={handleDeleteTodo}
								/>
							))}
						</tbody>
					</table>
				</div>
			</div>

			{todos.length === 0 && (
				<div className="text-center p-8 text-gray-500 bg-white rounded-xl border border-gray-200 shadow-sm mt-4">
					<svg
						className="mx-auto h-12 w-12 text-gray-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1}
							d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
						/>
					</svg>
					<p className="mt-2 text-sm">
						タスクがありません。新しいタスクを追加してください。
					</p>
				</div>
			)}
		</>
	);
};
