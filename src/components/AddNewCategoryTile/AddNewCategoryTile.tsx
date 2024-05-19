import { FunctionComponent, MouseEventHandler } from "react";

type AddNewCategoryProps = {
  onClick? : MouseEventHandler<HTMLDivElement>
}

export const AddNewCategoryTile : FunctionComponent<AddNewCategoryProps> = () => {
    
  return (
    <section className="flex flex-col justify-center max-w-[90%] w-full sm:w-2/3 md:w-3/5 lg:w-3/5 xl:w-2/6 h-20 p-2 items-center cursor-pointer rounded border border-dashed border-slate-400 shadow-md transition-colors duration-100   hover:opacity-50">
      <p className="font-semibold">Add New Project</p>
    </section>
  );
};
