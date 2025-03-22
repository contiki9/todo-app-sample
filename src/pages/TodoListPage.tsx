import { TodoList } from "../components/TodoList";

/**
 * Todoリストページコンポーネント
 */
export const TodoListPage = () => {
	return (
		<div className="min-h-screen bg-gray-50">
			<header className="bg-white shadow-sm">
				<div className="container mx-auto py-4 px-4">
					<h1 className="text-lg font-semibold text-gray-700">
						Todo管理アプリ
					</h1>
				</div>
			</header>

			<main className="container mx-auto py-8 px-4 sm:px-6 max-w-4xl">
				<TodoList />
			</main>

			<footer className="bg-white py-4 mt-auto border-t">
				<div className="container mx-auto px-4 text-center text-gray-500 text-sm">
					&copy; {new Date().getFullYear()} Todoアプリ
				</div>
			</footer>
		</div>
	);
};
