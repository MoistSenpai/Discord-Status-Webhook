// Import libs
import { WebhookClient, Message, MessageEmbedOptions } from 'discord.js';
import request from 'request';
import moment from 'moment';

import config from './config';

// Create webhook client
const hook: WebhookClient = new WebhookClient(config.id, config.token);

// Send status function
const sendStatus = async (m?: Message) => {
	let d: any = await getData();

	// The data to send
	let em: MessageEmbedOptions = {
		description: `**Status** -> \`${d.status.description}\``,
		fields: [
			// API
			{
				name: `🤖 ${d.components[0].name[0].toUpperCase() + d.components[0].name.slice(1)}`,
				value: `Status -> **${d.components[0].status[0].toUpperCase() +
					d.components[0].status.slice(1)}**\nUpdated At -> \`${moment(d.components[0].updated_at).format(
					'llll'
				)}\``
			},
			// Gateway
			{
				name: `🚪 ${d.components[2].name[0].toUpperCase() + d.components[2].name.slice(1)}`,
				value: `Status -> **${d.components[2].status[0].toUpperCase() +
					d.components[2].status.slice(1)}**\nUpdated At -> \`${moment(d.components[2].updated_at).format(
					'llll'
				)}\``
			},
			// Cloudflare
			{
				name: `☁ ${d.components[4].name[0].toUpperCase() + d.components[4].name.slice(1)}`,
				value: `Status -> **${d.components[4].status[0].toUpperCase() +
					d.components[4].status.slice(1)}**\nUpdated At -> \`${moment(d.components[4].updated_at).format(
					'llll'
				)}\``
			},
			// Media Proxy
			{
				name: `📷 ${d.components[5].name[0].toUpperCase() + d.components[5].name.slice(1)}`,
				value: `Status -> **${d.components[5].status[0].toUpperCase() +
					d.components[5].status.slice(1)}**\nUpdated At -> \`${moment(d.components[5].updated_at).format(
					'llll'
				)}\``
			}
		],
		image: {
			url: `https://i.imgur.com/XumK1By.png`
		},
		color: getColor(d.status.indicator)
	};

	// Handle edit
	if (m)
		return m.edit({
			embeds: [ em ]
		});

	await hook.send({
		embeds: [ em ]
	});
};
// Get JSON data
const getData = () => {
	return new Promise((resolve) => {
		request(`https://srhpyqt94yxb.statuspage.io/api/v2/summary.json`, (err, resp, bod) => {
			if (err) return console.log(`ERROR\n${err}`);
			resolve(JSON.parse(bod));
		});
	});
};
// Generate embed color
const getColor = (type: string) => {
	switch (type) {
		case 'major':
			return 15820136;
		case 'minor':
			return 16768768;
		case 'none':
			return 5367852;
		case 'ciritcal':
			return 16711685;
	}
};
// Run
const _run = async () => {
	// Send status
	let m = await sendStatus();

	console.log(`Webhook Ready`);

	// Wait an hour and sendAgain
	setInterval(() => sendStatus(m), 1e3 * 60 * 60);
};

_run();
