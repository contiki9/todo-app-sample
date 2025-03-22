import { useState } from "react";

interface TodoItem {
	id: number;
	title: string;
	completed: boolean;
	priority?: "low" | "medium" | "high";
	dueDate?: string;
}

interface TodoProps {
	todo: TodoItem;
}

/**
 * 個々のTodoアイテムを表示するコンポーネント
 */
export const Todo = ({ todo }: TodoProps) => {
	// 表示用のstate
	const [isCompleted, setIsCompleted] = useState(todo.completed);

	// 優先度のラベルとその色を取得
	const getPriorityLabel = () => {
		switch (todo.priority) {
			case "high":
				return { text: "高", bgColor: "bg-red-100 text-red-800" };
			case "medium":
				return { text: "中", bgColor: "bg-yellow-100 text-yellow-800" };
			case "low":
				return { text: "低", bgColor: "bg-green-100 text-green-800" };
			default:
				return { text: "", bgColor: "" };
		}
	};

	const priorityLabel = getPriorityLabel();

	return (
		<tr
			className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${isCompleted ? "bg-gray-50" : ""}`}
		>
			<td className="py-4 px-6 text-center">
				<input
					type="checkbox"
					checked={isCompleted}
					onChange={() => setIsCompleted(!isCompleted)}
					className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
				/>
			</td>
			<td className="py-4 px-6">
				<span
					className={`text-sm font-medium ${isCompleted ? "line-through text-gray-400" : "text-gray-700"}`}
				>
					{todo.title}
				</span>
			</td>
			<td className="py-4 px-6">
				{todo.priority && (
					<span
						className={`inline-block text-xs px-2.5 py-0.5 rounded-full ${priorityLabel.bgColor} font-medium`}
					>
						{priorityLabel.text}
					</span>
				)}
			</td>
			<td className="py-4 px-6">
				{todo.dueDate ? (
					<span className="text-xs text-gray-500">
						{new Date(todo.dueDate).toLocaleDateString("ja-JP")}
					</span>
				) : (
					<span className="text-xs text-gray-400">-</span>
				)}
			</td>
			<td className="py-4 px-6 text-center">
				<button
					type="button"
					className="text-gray-400 hover:text-red-500 focus:outline-none hover:scale-110 transition-transform"
					aria-label="削除"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<title>削除</title>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1.5}
							d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
						/>
					</svg>
				</button>
			</td>
		</tr>
	);
};
