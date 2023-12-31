import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");

    const handelSubmitAddTodo = e => {
        e.preventDefault();

        if (title.trim().length > 0) {
            createTodo(title);
            setTitle("");
        } else {
            setTitle("");
        }
    };
    return (
        <form
            onSubmit={handelSubmitAddTodo}
            className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4 transition-all duration-1000 dark:bg-gray-800 dark:text-gray-600">
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                className="w-full text-gray-400 outline-none transition-all duration-1000 dark:bg-gray-800"
                type="text"
                placeholder="Create a new toDo"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
