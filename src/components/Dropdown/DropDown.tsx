import { CheckIcon } from "@heroicons/react/20/solid";
import { FunctionComponent, ReactNode, useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";

type DropDownItemProps = {
  id: number | string;
  value: string;
  prefix?: HTMLElement | string;
  postfix?: HTMLElement;
};

type DropDownProps = {
  value: string | number | undefined;
  options?: Array<DropDownItemProps>;
  label?: string;
  placeholder?: string;
  onSelect: (value: string | number | undefined) => void;
  children?: ReactNode | Array<ReactNode>;
  prefix?: string;
};

export const DropDown: FunctionComponent<DropDownProps> = ({
  value,
  options = [],
  placeholder = "",
  onSelect,
  prefix = "",
}) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: dropdownRef,
    handler: () => setShowDropdown(false),
  });

  const handleOptionSelected = (value: number | string | undefined) => {
    onSelect(value);
    setShowDropdown(false);
  };

  return (
    <div className="relative cursor-pointer border rounded border-gray-500" ref={dropdownRef}>
      <p
        className={
          value ? "text-gray-600 italic p-1" : "text-gray-500 not-italic p-1"
        }
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {!value
          ? placeholder
          : prefix
          ? `${prefix} ${value}`
          : value}
      </p>
      <div
        className={`absolute ${showDropdown ? "block" : "hidden"} rounded min-w-36 z-[999]`}
      >
        <ul className="bg-white border border-gray-300 rounded">
          {options && options.length > 0 ? (
            options.map(({ id, value, prefix }: DropDownItemProps) => (
              <li
                key={id}
                className={`hover:bg-gray-300 px-3 py-2 cursor-pointer rounded`}
                role="option"
                data-value={id}
                onClick={() => handleOptionSelected(id)}
              >
                <div className="flex gap-0.5 items-center">
                  <p>{prefix ? `${prefix} ${value}` : value}</p>
                  {value === id && (
                    <CheckIcon className="stroke-2 h-3" />
                  )}
                </div>
              </li>
            ))
          ) : (
            <p className="italics">No options available</p>
          )}
        </ul>
      </div>
    </div>
  );
};
