import { ITask } from "./Task.interface";

export interface IProject  {
    id : number,
    name : string,
    count : number,
    tasks : Array<Partial<ITask>>
}