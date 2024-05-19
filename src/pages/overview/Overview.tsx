import { FunctionComponent } from "react";
import { SidebarLayout } from "../../layout/SidebarLayout/SidebarLayout";
import data from "../../data/data.json";
import { CategoryTile } from "../../components/CategoryTile/CategoryTile";
import {v4 as uuid} from "uuid"
import { AddNewCategoryTile } from "../../components/AddNewCategoryTile/AddNewCategoryTile";
import { Analytics } from "../../components/Analytics/Analytics";

export const Overview: FunctionComponent = () => {
  
const getTodaysDate = () : string => {
    const date: Date = new Date();
    const day : string = date.getDate() <= 9 ? `0${date.getDate()}` : `${date.getDate()}` ;
    const month : string = date.getMonth() + 1 <= 9 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`
    const year : string = `${date.getFullYear()}`;
    return [day, month, year].join(" / ")
  }
  return (
    <SidebarLayout>
      <section>
        <h1 className="text-2xl font-extrabold text-gray-800">Today</h1>
        <p className="text-sm text-gray-700 mt-2">{getTodaysDate()}</p>
      </section>

       <section className="mt-8">
        <h2 className="text-xl font-bold text-gray-800">Analytics</h2>
       <Analytics/>
        </section>

      <section  className="mt-8">
        <h2 className="text-xl font-bold text-gray-800">Projects</h2>
        <section className="flex flex-wrap my-3 gap-2">
          {data && Array.isArray(data.projects) ? (
            data.projects.map((project) => {
              return (
               
                <CategoryTile key={uuid()} name={project.name.split("_").join(" ")} url={`/project/${project.name}`}/>
              );
            })
          ) : (
            <></>
          )}
          <AddNewCategoryTile/>
        </section>
      </section>
    </SidebarLayout>
  );
};
