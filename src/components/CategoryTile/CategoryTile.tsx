import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

type CategoryProps = {
  name: string;
  url?: string;
};

export const CategoryTile: FunctionComponent<CategoryProps> = ({
  name = "Project Name",
  url = "",
}) => {
  return (
    <Link
      className="max-w-[90%] w-full sm:w-1/3 md:w-1/5 lg:w-1/5 xl:w-1/6"
      to={url}
    >
      <section className="flex flex-col justify-center  h-20 p-2 items-center cursor-pointer rounded border border-slate-300 transition-colors duration-100  shadow-md  hover:bg-slate-300  hover:border-none">
        <p className="font-semibold">{name}</p>
      </section>
    </Link>
  );
};
