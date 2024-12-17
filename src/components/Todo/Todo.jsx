import './Todo.css';

export const Todo = ({ todo, onChange }) => {
	return (
		<div className="todo-container">
			<div className="container-checkbox">
				<input
					className="toggle-todo"
					type="checkbox"
					checked={todo.completed}
					onChange={() => onChange(todo.id)}
				/>
			</div>

			{todo.completed ? (
				<s>
					<p className="title-todo">{todo.title}</p>
				</s>
			) : (
				<p className="title-todo">{todo.title}</p>
			)}
		</div>
	);
};
