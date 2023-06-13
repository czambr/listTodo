import IconMoon from "./icons/IconMoon";

const Header = () => {
    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[1.3rem] text-white">
                    todo
                </h1>
                <button>
                    <IconMoon />
                </button>
            </div>
        </header>
    );
};

export default Header;
