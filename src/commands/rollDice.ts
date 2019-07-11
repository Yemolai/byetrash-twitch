import { CommandPayload } from "Command.type";

// Function called when the "dice" command is issued
function rollDice () {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}

export default {
  command: 'dice',
  run: ({ client, channel }: CommandPayload) => {
    const num = rollDice();
    client.say(channel, `You rolled a ${num}`);
  }
}
