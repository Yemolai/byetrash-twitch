/* based on https://dev.twitch.tv/docs/irc/ example */
import * as tmi from 'tmi.js'
import { opts } from './opts'
import { runCommand } from './commands/index'

// Create a client with our options
const client = tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Called every time a message comes in
function onMessageHandler (channel: string, userstate: tmi.ChatUserstate, msg: string, self: boolean) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName: string = msg.trim();

  // Ensure the message has the command preceded with exclamation point
  if (/^!/.test(commandName) === false ) { return; }

  // to get the comman and the arguments
  const parts: string[] = commandName.split(' ').map(v => v.trim()).filter(v => v.length > 0);

  const command: string = parts[0];

  const cmdArgs: string[] = parts.slice(1);

  runCommand(command, { cmdArgs, client, channel, msg, userstate });
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (address: string, port: number) {
  console.log(`* Connected to ${address}:${port}`);
}

export default client;
