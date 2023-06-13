const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="mx-autopx-4 container mt-8">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4">
                <button
                    className={`${
                        filter === "all"
                            ? "text-blue-500 hover:text-gray-400"
                            : "text-gray-500 hover:text-blue-500"
                    }`}
                    onClick={() => changeFilter("all")}>
                    All
                </button>
                <button
                    className={`${
                        filter === "active"
                            ? "text-blue-500 hover:text-gray-400"
                            : "text-gray-500 hover:text-blue-500"
                    }`}
                    onClick={() => changeFilter("active")}>
                    Active
                </button>
                <button
                    className={`${
                        filter === "completed"
                            ? "text-blue-500 hover:text-gray-400"
                            : "text-gray-500 hover:text-blue-500"
                    }`}
                    onClick={() => changeFilter("completed")}>
                    Complete
                </button>
            </div>
        </section>
    );
};
export default TodoFilter;
