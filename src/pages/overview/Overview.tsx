import { FunctionComponent, useEffect, useState } from "react";
import { SidebarLayout } from "../../layout/SidebarLayout/SidebarLayout";
import { CategoryTile } from "../../components/CategoryTile/CategoryTile";
import { AddNewCategoryTile } from "../../components/AddNewCategoryTile/AddNewCategoryTile";
import { Analytics } from "../../components/Analytics/Analytics";
import { useSelector } from "react-redux";
import { IProject } from "../../interface/Project.interface";

export const Overview: FunctionComponent = () => {
  const [projects, setProjects] = useState<IProject[] | null>(null);

  const getTodaysDate = (): string => {
    const date: Date = new Date();
    const day: string = date.getDate() <= 9 ? `0${date.getDate()}` : `${date.getDate()}`;
    const month: string = date.getMonth() + 1 <= 9 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
    const year: string = `${date.getFullYear()}`;
    return [day, month, year].join(" / ");
  };

  const loggedInUser = useSelector((state: any) => state.loggedInUser);
  const users = useSelector((state: any) => state.usersDatabase);

  useEffect(() => {
    if (loggedInUser && users) {
      const requiredUser = users.find((user: any) => user.id === loggedInUser);
      if (requiredUser) {
        setProjects(requiredUser.projects);
      } else {
        console.error("User not found");
      }
    }
  }, [loggedInUser, users]);

  return (
    <SidebarLayout>
      <section>
        <h1 className="text-2xl font-extrabold text-gray-800">Today</h1>
        <p className="text-sm text-gray-700 mt-2">{getTodaysDate()}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-gray-800">Analytics</h2>
        <Analytics />
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-gray-800">Projects</h2>
        <section className="flex flex-wrap my-3 gap-2">
          {projects && projects.length > 0 ? (
            projects.map((project) => (
              <CategoryTile key={project.name} name={project.name.split("_").join(" ")} url={`/project/${project.name}`} />
            ))
          ) : (
            <></>
          )}
          <AddNewCategoryTile />
        </section>
      </section>
    </SidebarLayout>
  );
};
