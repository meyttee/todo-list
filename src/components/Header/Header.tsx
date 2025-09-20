import { ThemeSwitch } from "../ThemeSwitch";

const Header = () => {
  const date = new Date();
  const today = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  return (
    <header className="flex items-center justify-between bg-white px-8 py-7 dark:bg-[#2a2b2f]">
      <h1 className="text-xl font-bold dark:text-white">Todo List</h1>
      <div className="flex items-center gap-2">
        <h2 className="font-semibold text-[#1C1D22]/50 dark:text-white/50">
          {today}
        </h2>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
