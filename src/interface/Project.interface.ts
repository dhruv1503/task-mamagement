import { ITask } from "./Task.interface";

export interface IProject  {
    name : string,
    count : number,
    tasks : Array<Partial<ITask>>
}