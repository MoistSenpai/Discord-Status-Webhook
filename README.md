# Discord-API Webhook

Discord Webhook that grabs the status and other data from [Discord Status](https://status.discordapp.com/). 

A guide for making a webhook can be found [here](https://gist.github.com/jagrosh/5b1761213e33fc5b54ec7f6379034a22)

## Getting Started

```
git clone https://github.com/MoistSenpai/Discord-API-Webhook
cd Discord-API-Webhook
```

### Prerequisites

* Node.js 10.0.0 or newer

* TypeScript 3.6.0 or newer

* Discord Webhook

### Installing

Remove 'example.' from example.config.ts and fill it in.
```ts
{
	url: `URL`, // Webhook URL
	token: 'TOKEN', // Webhook token
	id: 'ID', // Webhook ID
	guildId: 'GID', // Guild ID
	channelId: 'CID', // Channel ID
	host: 'HOST', // Host ip
	port: 6980 // Express webserver port
}
```

Install required dependencies.

```
npm i
```

Running the webhook.

```
ts-node index.ts
```

## Built With

* [Discord.JS](https://github.com/discordjs/discord.js/) - The framework used.

## Authors

* **Anish B.** - *Initial Work* - [MoistSenpai](https://github.com/MoistSenpai)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
