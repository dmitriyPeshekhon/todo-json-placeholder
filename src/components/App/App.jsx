import './App.css';
import { useRequestGetTodo } from '../../hooks/use-request-get-todo';
import { Todo } from '../index';

export const App = () => {
	const { todos, changeCompletedTodo, isLoading, isError } = useRequestGetTodo();
	return (
		<div className="container">
			<div className="tablo">
				{isLoading ? <span className="loader"></span> : null}
				{isError ? (
					<p className="error">Нам не удалось загрузить даннные</p>
				) : null}
				{!isLoading && !isError
					? todos.map((todo) => (
							<Todo
								key={todo.id}
								todo={todo}
								onChange={changeCompletedTodo}
							/>
					  ))
					: null}
			</div>
		</div>
	);
};
