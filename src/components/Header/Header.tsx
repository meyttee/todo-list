import { ThemeSwitch } from "../Form";

const Header = () => {
  const date = new Date();
  const today = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  return (
    <header className="flex items-center justify-between bg-white px-8 py-7 dark:bg-neutral-800">
      <h1 className="text-md font-bold sm:text-xl dark:text-white">
        Todo List
      </h1>
      <div className="flex items-center gap-2">
        <h2 className="text-[10px] font-medium text-neutral-500 sm:text-sm dark:text-white/50">
          {today}
        </h2>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
