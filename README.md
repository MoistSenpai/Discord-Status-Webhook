# Discord-Status Webhook

Discord bot that grabs the status and other data from [Discord Status](https://status.discordapp.com/). 

A guide for creating a webhook can be found [here](https://support.discordapp.com/hc/en-us/articles/228383668-Intro-to-Webhooks).

## Getting Started

```
git clone https://github.com/MoistSenpai/Discord-Status-Webhook
cd Discord-Status-Webhook
```

### Prerequisites

* Node.js 10.0.0 or newer

* TypeScript 3.6.0 or newer

* Discord Bot Token

* Discord Webhook

### Installing

Remove 'example.' from example.config.ts and fill it in.
```ts
{
	token: 'TOKEN', // Webhook token
	id: 'ID', // Webhook id
	bToken: 'BOT TOKEN', // Bot token
	channelId: 'CID', // Channel ID
}
```

Install required dependencies.

```
npm i
```

Running the bot.

```
ts-node index.ts
```

## Built With

* [Discord.JS](https://github.com/discordjs/discord.js/) - The framework used.

## Authors

* **Anish B.** - *Initial Work* - [MoistSenpai](https://github.com/MoistSenpai)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
