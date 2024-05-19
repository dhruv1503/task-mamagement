import { useEffect} from "react";

type OutsideClckProps = {
  ref: React.RefObject<HTMLElement>;
  handler: () => void;
};

export const useOutsideClick = ({ ref, handler }: OutsideClckProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      console.log("unmoounted");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
};
