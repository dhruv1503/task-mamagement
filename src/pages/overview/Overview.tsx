import { FunctionComponent } from "react";
import { SidebarLayout } from "../../layout/SidebarLayout/SidebarLayout";
import data from "../../data/data.json";
import { Link } from "react-router-dom";

export const Overview: FunctionComponent = () => {
  const date: string = new Date().toLocaleDateString();
  return (
    <SidebarLayout>
      {/* <div className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5">
        <div className="pointer-events-none">
          <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
            <svg
              aria-hidden="true"
              className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
            >
              <defs>
                <pattern
                  id=":R56hdsqla:"
                  width="72"
                  height="56"
                  patternUnits="userSpaceOnUse"
                  x="50%"
                  y="16"
                >
                  <path d="M.5 56V.5H72" fill="none"></path>
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                strokeWidth="0"
                fill="url(#:R56hdsqla:)"
              ></rect>
              <svg x="50%" y="16" className="overflow-visible">
                <rect
                  strokeWidth="0"
                  width="73"
                  height="57"
                  x="0"
                  y="56"
                ></rect>
                <rect
                  strokeWidth="0"
                  width="73"
                  height="57"
                  x="72"
                  y="168"
                ></rect>
              </svg>
            </svg>
          </div>
          <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
            <svg
              aria-hidden="true"
              className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
            >
              <defs>
                <pattern
                  id=":R56hdsqla:"
                  width="72"
                  height="56"
                  patternUnits="userSpaceOnUse"
                  x="50%"
                  y="16"
                >
                  <path d="M.5 56V.5H72" fill="none"></path>
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                strokeWidth="0"
                fill="url(#:R56hdsqla:)"
              ></rect>
              <svg x="50%" y="16" className="overflow-visible">
                <rect
                  strokeWidth="0"
                  width="73"
                  height="57"
                  x="0"
                  y="56"
                ></rect>
                <rect
                  strokeWidth="0"
                  width="73"
                  height="57"
                  x="72"
                  y="168"
                ></rect>
              </svg>
            </svg>
          </div>
          <div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
            style={{
              maskImage:
                "radial-gradient(180px at 0px 0px, white, transparent)",
            }}
          ></div>
          <div
            className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
            style={{
              maskImage:
                "radial-gradient(180px at 0px 0px, white, transparent)",
            }}
          >
            <svg
              aria-hidden="true"
              className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
            >
              <defs>
                <pattern
                  id=":R1d6hdsqla:"
                  width="72"
                  height="56"
                  patternUnits="userSpaceOnUse"
                  x="50%"
                  y="16"
                >
                  <path d="M.5 56V.5H72" fill="none"></path>
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                strokeWidth="0"
                fill="url(#:R1d6hdsqla:)"
              ></rect>
              <svg x="50%" y="16" className="overflow-visible">
                <rect
                  strokeWidth="0"
                  width="73"
                  height="57"
                  x="0"
                  y="56"
                ></rect>
                <rect
                  strokeWidth="0"
                  width="73"
                  height="57"
                  x="72"
                  y="168"
                ></rect>
              </svg>
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"></div>
        <div className="relative rounded-2xl px-4 pb-4 pt-16">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400"
            >
              <path
                strokeWidth="0"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 .5a9.5 9.5 0 0 1 5.598 17.177C14.466 15.177 12.383 13.5 10 13.5s-4.466 1.677-5.598 4.177A9.5 9.5 0 0 1 10 .5ZM12.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
              ></path>
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 .5a9.5 9.5 0 0 1 5.598 17.177A9.458 9.458 0 0 1 10 19.5a9.458 9.458 0 0 1-5.598-1.823A9.5 9.5 0 0 1 10 .5Z"
              ></path>
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.402 17.677C5.534 15.177 7.617 13.5 10 13.5s4.466 1.677 5.598 4.177M10 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              ></path>
            </svg>
          </div>
          <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
            <a href="/contacts">
              <span className="absolute inset-0 rounded-2xl"></span>Contacts
            </a>
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Learn about the contact model and how to create, retrieve, update,
            delete, and list contacts.
          </p>
        </div>
      </div> */}
      <section className="">
        <h1 className="text-2xl font-extrabold text-gray-800">Today</h1>
        <p className="text-sm text-gray-700">{date}</p>
      </section>

       <section>
        <h2 className="text-xl font-bold text-gray-800">Analytics</h2>
        <section className="flex justify-center items-center my-3 w-full max-w-[90%] bg-slate-300 rounded h-52">
            <p className="italic">Coming Soon</p>

        </section>
        </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800">Projects</h2>
        <section className="flex flex-wrap my-3 gap-2">
          {data && Array.isArray(data.projects) ? (
            data.projects.map((project) => {
              return (
                <Link className="max-w-[90%] w-full sm:w-1/3 md:w-1/5 lg:w-1/5 xl:w-1/6" to={`/project/${project.name}`}>
                <section className="flex flex-col justify-center  h-20 p-2 items-center cursor-pointer rounded border border-slate-300 transition-colors duration-100   hover:bg-slate-300  hover:border-none">
                  <p className="font-semibold">{project.name.split("_").join(" ")}</p>
                  {/* <section className="bg-slate-500 text-slate-100 px-2 rounded">
                  <p className="font-thin">{`Count : ${project.count}`}</p>
                  </section> */}
                </section>
                </Link>
              );
            })
          ) : (
            <></>
          )}
        </section>
      </section>
    </SidebarLayout>
  );
};
