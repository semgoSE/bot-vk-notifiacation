"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_vk_bot_api_1 = __importDefault(require("node-vk-bot-api"));
const node_cron_1 = __importDefault(require("node-cron"));
const message = "Привет";
const date = new Date("29.07.2021 22:52");
const ToId = 267319094;
const bot = new node_vk_bot_api_1.default("4eb8f4c4b15a9b8145e7792e016106afeb72009d96605e8d7ff7753eaef090a7112d0f3627eee0e2a19d5");
node_cron_1.default.schedule('* * * * *', () => {
    console.log(new Date());
    if (date === new Date()) {
        console.log("Время пришло!");
    }
});
//# sourceMappingURL=index.js.map