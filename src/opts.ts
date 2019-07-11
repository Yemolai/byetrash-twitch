import { Options as TMIOptions } from 'tmi.js'
const {
  BOT_USERNAME: username,
  OAUTH_TOKEN: password,
  CHANNEL_NAME: channelList = ''
} = process.env

if (!username) {
  throw new Error('missing BOT_USERNAME on env variable')
}

if (!password) {
  throw new Error('missing OAUTH_TOKEN on env variable')
}

const channels: string[] = channelList.split(',').map((channelName: string) => channelName.trim())

if (!channels.length) {
  throw new Error('no channel name provided in CHANNEL_NAME list')
}

// Define configuration options
export const opts: TMIOptions = {
  identity: {
    username,
    password
  },
  channels
};

export default { opts }
