import { Command, CommandList, CommandPayload } from 'Command.type';
import RollDice from './rollDice';

const commandModules: Command[] = [
  RollDice
];

const emptyCommandList: CommandList = {};

const commandList = commandModules.reduce((acc: CommandList, curr: Command): CommandList => {
  acc[curr.command] = curr.run;
  return acc;
}, emptyCommandList);

export const runCommand = (command: string, payload: CommandPayload) => {
  if (command in commandList) {
    const commandExecution = commandList[command];
    commandExecution(payload);
  }
};

export default commandList;
