import userService from "./users";
import { v4 as uuid } from "uuid";

export const getProjects = (userId: string) => {
  return new Promise(async (resolve, reject) => {
    if (!userId) {
      reject({ message: "Unauthorised Access." });
    }
    try {
      const user: any = await userService.getUserById(userId);
      if (user) {
        return resolve({
          data: user.projects,
          message: "Projects found successfully",
        });
      } else {
        reject({ message: "Users not found" });
      }
    } catch (error) {
      reject({ message: error });
    }
  });
};

export const getProjectById = (userId: string, projectId: string) => {
  return new Promise(async (resolve, reject) => {
    if (!userId) {
      reject({ message: "Unauthorised Access." });
    }
    try {
      const user: any = await userService.getUserById(userId);
      if (user) {
        const requestedProject = user.projects.find(
          (project: any) => project.id === projectId
        );
        if (requestedProject) {
          return resolve({
            data: requestedProject,
            message: "Project found successfully",
          });
        } else {
          reject({ message: "Requested Project does not exist" });
        }
      } else {
        reject({ message: "Users not found" });
      }
    } catch (error) {
      reject({ message: error });
    }
  });
};

export const createNewProject = (userId: string, projectDetails: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const projects: any = await getProjects(userId);
      const duplicateProject = projects.map(
        (project: any) => project.name === projectDetails.name
      );
      if (duplicateProject) {
        reject({ message: "Project already exists" });
      } else {
        const newProjectList = [...projects, { ...projectDetails, id: uuid() }];
        try {
          const data: any = await userService.updateUser(userId, {
            projects: newProjectList,
          });
          resolve({
            data: data.projects,
            message: "Project created successfully!",
          });
        } catch (error: any) {
          if (error?.message) {
            reject(error);
          }
          reject({ message: error });
        }
      }
    } catch (error: any) {
      if (error?.message) {
        reject(error);
      }
      reject({ message: error });
    }
  });
};
