import { Client, ChatUserstate } from "tmi.js";

export type CommandExecution = (payload: CommandPayload) => void

export interface CommandList {
  [command: string]: CommandExecution
}

export interface CommandPayload {
  cmdArgs: string[]
  client: Client
  channel: string,
  userstate: ChatUserstate,
  msg: string
}

export interface Command {
  command: string
  run: CommandExecution
}
