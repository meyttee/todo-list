import clsx from "clsx";
import { useState } from "react";
import { periorityMap } from "../../../constants";

/**
 * RangeInput component allows users to select a priority value visually.
 *
 * @param onChange - Callback function invoked when the priority value changes.
 * @param value - The current priority value (number).
 * @param label - Label displayed above the input.
 *
 * The component displays three selectable circles, each representing a priority level.
 * Clicking a circle updates the selected value and highlights the active priority.
 * The priority label is displayed using the `periorityMap` constant.
 */

const RangeInput = ({
  onChange,
  value,
  label,
}: {
  onChange: (value: number) => void;
  value: number;
  label: string;
}) => {
  const [rangeValue, setRangeValue] = useState(value || 1);

  return (
    <div className="flex flex-col gap-1">
      <span className="dark:text-white">{label}</span>
      <div className="flex items-center gap-3">
        <div
          className={clsx(
            "size-5 cursor-pointer rounded-full bg-gray-300 hover:bg-green-400 dark:bg-gray-600",
            {
              "!bg-green-400": rangeValue === 1,
            },
          )}
          onClick={() => {
            onChange(1);
            setRangeValue(1);
          }}
        />
        <div
          className={clsx(
            "size-5 cursor-pointer rounded-full bg-gray-300 hover:bg-blue-400 dark:bg-gray-600",
            {
              "!bg-blue-400": rangeValue === 2,
            },
          )}
          onClick={() => {
            onChange(2);
            setRangeValue(2);
          }}
        />
        <div
          className={clsx(
            "size-5 cursor-pointer rounded-full bg-gray-300 hover:bg-red-400 dark:bg-gray-600",
            {
              "!bg-red-400": rangeValue === 3,
            },
          )}
          onClick={() => {
            onChange(3);
            setRangeValue(3);
          }}
        />
        <span className="text-gray-700 dark:text-gray-200">
          {periorityMap[value]}
        </span>
      </div>
    </div>
  );
};

export default RangeInput;
