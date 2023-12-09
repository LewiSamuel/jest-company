import { iUser } from "./iUser"

export interface iReturn{
  status: string,
  message: string,
  data: iUser | Array<iUser> | null | any
}