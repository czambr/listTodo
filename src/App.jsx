import { DragDropContext } from "@hello-pangea/dnd";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];
const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = title => {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };
    const updateTodo = id => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };
    const removeTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    const computedItemsLeft = todos.filter(todo => !todo.completed).length;
    const clearComplete = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };
    const [filter, setFilter] = useState("all");
    const changeFilter = filter => setFilter(filter);
    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter(todo => !todo.completed);
            case "completed":
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    };

    const handelDragEnd = result => {
        const { destination, source } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId == destination.ddroppableId
        )
            return;
        setTodos(prevTask =>
            reorder(prevTask, source.index, destination.index)
        );
    };

    return (
        <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:md:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
            <Header />

            <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                <TodoCreate createTodo={createTodo} />

                <DragDropContext onDragEnd={handelDragEnd}>
                    <TodoList
                        todos={filteredTodos()}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    />
                </DragDropContext>

                <TodoComputed
                    computedItemsLeft={computedItemsLeft}
                    clearComplete={clearComplete}
                />
                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>

            <footer className="mt-4 text-center transition-all duration-1000 dark:text-gray-400">
                Todo list By TaskManager
            </footer>
        </div>
    );
};

export default App;
