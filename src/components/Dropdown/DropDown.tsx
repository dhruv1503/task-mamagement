import { CheckIcon } from "@heroicons/react/20/solid";
import { FunctionComponent, ReactNode, useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";

type DropDownItemProps = {
  id: number | string;
  value: string;
  prefix?: HTMLElement;
  postfix?: HTMLElement;
};

type DropDownProps = {
  value?: string | number | null;
  options?: Array<DropDownItemProps> | [];
  label?: string;
  placeholder?: string;
  seletedId?: string;
  onSelect?: (value: string | number) => void | string | number;
  children?: ReactNode | Array<ReactNode>;
  prefix?: string;
};

export const DropDown: FunctionComponent<DropDownProps> = ({
  value = null,
  options = [],
  placeholder = "",
  onSelect = () => {},
  prefix = "",
}) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<number | string | null>(
    value
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: dropdownRef,
    handler: () => setShowDropdown(false),
  });

  const handleOptionSelected = (value: number | string) => {
    setSelectedValue(value);
    onSelect(value);
    setShowDropdown(false);
  };

  return (
    <div className="relative border rounded border-gray-500" ref={dropdownRef}>
      <p
        className={
          selectedValue
            ? "text-gray-600 italic p-1"
            : "text-gray-500 not-italic p-1"
        }
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {!selectedValue
          ? placeholder
          : prefix
          ? `${prefix} ${selectedValue}`
          : selectedValue}
      </p>
      <div
        className={`absolute ${
          showDropdown ? "block" : "hidden"
        } rounded min-w-36 z-[999]`}
      >
        <ul className="bg-white border border-gray-300 rounded">
          {options && options.length > 0 ? (
            options.map(({ id, value, prefix }: DropDownItemProps) => (
              <li
                key={value}
                className={`hover:bg-gray-300 px-3 py-2 cursor-pointer rounded`}
                role="option"
                data-value={id}
                onClick={() => handleOptionSelected(id)}
              >
                <div className="flex gap-0.5 items-center">
                  <p>{prefix ? `${prefix} ${value}` : `${value}`}</p>
                  {selectedValue === id && (
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
