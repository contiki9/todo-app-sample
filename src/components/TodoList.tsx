import { Todo } from "./Todo";

/**
 * モックデータ（後でAPIから取得するデータを想定）
 */
const mockTodos = [
	{
		id: 1,
		title: "React学習",
		completed: false,
		priority: "high" as const,
		dueDate: "2024-03-25",
	},
	{
		id: 2,
		title: "買い物リスト作成",
		completed: true,
		priority: "medium" as const,
		dueDate: "2024-03-23",
	},
	{
		id: 3,
		title: "部屋の掃除",
		completed: false,
		priority: "low" as const,
	},
];

/**
 * Todoリストを表示するコンポーネント
 */
export const TodoList = () => {
	return (
		<>
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold text-gray-800">Todoリスト</h1>
				<button
					type="button"
					className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm transition-all duration-200 flex items-center"
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
							{mockTodos.map((todo) => (
								<Todo key={todo.id} todo={todo} />
							))}
						</tbody>
					</table>
				</div>
			</div>

			{mockTodos.length === 0 && (
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
