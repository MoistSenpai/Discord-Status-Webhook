# Discord-Status Webhook

Discord bot that grabs the status and other data from [Discord Status](https://status.discordapp.com/). 


## Getting Started

```
git clone https://github.com/MoistSenpai/Discord-Status-Webhook
cd Discord-Status-Webhook
```

### Prerequisites

* Node.js 10.0.0 or newer

* TypeScript 3.6.0 or newer

* Discord Bot Token

### Installing

Remove 'example.' from example.config.ts and fill it in.
```ts
{
	token: 'TOKEN', // Webhook token
	id: 'ID', // Webhook ID
	host: 'HOST', // Host ip
	port: 6980 // Express webserver port
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
