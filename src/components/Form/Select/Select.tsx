import Select, { type Props } from "react-select";

const CutomSelect = (props: Props & { label: string }) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={props.name} className="dark:text-white">
      {props.label}
    </label>
    <Select
      {...props}
      getOptionLabel={(opt) => (opt as { label: string; value: string }).label}
      getOptionValue={(opt) => (opt as { label: string; value: string }).value}
      id={props.name}
      classNames={{
        container: () => "w-full",
        control: () =>
          "!bg-transparent dark:!border-gray-500 dark:hover:!border-white/80 !outline-0 !shadow-none",
        input: () => "text-white dark:!text-white h-8",
        singleValue: () => "dark:!text-white",
      }}
    />
  </div>
);

export default CutomSelect;
