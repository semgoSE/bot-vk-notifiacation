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


const bot: VkBot = new VkBot("6448add9b4da9f4038c9c423bcd1a4588f5e592e854a153711216e7cdfb54534800921bab71f962ab32bb");
console.log("Бот запущен");

cron.schedule('* * * * *', () => {
    if(new Date().toLocaleString('ru-RU', date_options) == date) {
        bot.sendMessage(ToId, message);
  }
});
