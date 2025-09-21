import Select, { type Props } from "react-select";

/**
 * Custom select component built on top of `react-select`.
 *
 * @param props - Props for the select component, including all `react-select` props and a `label` for the input.
 * @returns A labeled select input with custom styling for dark mode and accessibility.
 *
 * @remarks
 * - The component expects options with `{ label: string; value: string }` shape.
 * - Applies custom class names for styling in dark mode and transparent backgrounds.
 *
 * @example
 * ```tsx
 * <CutomSelect
 *   label="Choose an option"
 *   name="my-select"
 *   options={[
 *     { label: "Option 1", value: "1" },
 *     { label: "Option 2", value: "2" }
 *   ]}
 * />
 * ```
 */

const CutomSelect = (
  props: Props<{ label: string; value: string }> & { label: string },
) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={props.name} className="dark:text-white">
      {props.label}
    </label>
    <Select
      {...props}
      getOptionLabel={(opt) => opt.label}
      getOptionValue={(opt) => opt.value}
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
