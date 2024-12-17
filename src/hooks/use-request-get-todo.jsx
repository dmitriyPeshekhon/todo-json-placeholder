import { useState, useEffect } from 'react';

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

export const useRequestGetTodo = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const changeCompletedTodo = (id) => {
		setTodos((prevTodos) =>
			prevTodos.map((e) => (e.id === id ? { ...e, completed: !e.completed } : e)),
		);
	};

	useEffect(() => {
		try {
			fetch(TODOS_URL)
				.then((resp) => {
					if (!resp.ok) {
						throw new Error('Не удалось загрузить данные');
					}
					return resp.json();
				})
				.then((listTodo) => {
					setTodos(listTodo);
					setIsLoading(false);
				});
		} catch (error) {
			console.log(error);
			setIsLoading(false);
			setIsError(true);
		}
	}, []);

	return {
		todos,
		changeCompletedTodo,
		isLoading,
		isError,
	};
};
