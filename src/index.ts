import VkBot from "node-vk-bot-api";
import cron from 'node-cron';

const message: string = "Привет";
const date: string = "29.07.2021, 23:29";
const ToId: number = 267319094;

const date_options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
};


const bot: VkBot = new VkBot("твой токен группы");
console.log("Бот запущен");

cron.schedule('* * * * *', () => {
    if(new Date().toLocaleString('ru-RU', date_options) == date) {
        bot.sendMessage(ToId, message);
  }
});
