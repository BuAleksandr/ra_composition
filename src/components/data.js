const newsCategories = [
    { name: "Сейчас в СМИ" },
    { name: "в Германии" },
    { name: "Рекомендуем" }
]

const news = [
    {
        img: "http://placehold.it/15x15/",
        title: "Путин упростил получение автомобильных номеров",
        link: "#"
    },
    {
        img: "http://placehold.it/15x15/",
        title: "В команде Зеленского раскрыли план реформ на Украине",
        link: "#"
    },
    {
        img: "http://placehold.it/15x15/",
        title: 'Турпомощь" прокомментировала гибель десятков россиян в Анталье',
        link: "#"
    },
    {
        img: "http://placehold.it/15x15/",
        title: "Суд закрыл дело Демпартии США против России",
        link: "#"
    },
]

const currencies = [
    {
        name: "USD",
        rate: "63,52",
        difference: "+0,09"
    },
    {
        name: "EUR",
        rate: "70,86",
        difference: "+0,14" },
    {
        name: "НЕФТЬ",
        rate: "64,90",
        difference: "+1,63%"
    },
]

const searchCategories = [
    { name: "Видео" },
    { name: "Картинки" },
    { name: "Новости" },
    { name: "Карты" },
    { name: "Эфир" },
    { name: "ещё" }
]

const weather = {
    icon: "http://placehold.it/30x30/",
    value: "+17"
}

const popular = [
    {
        title: "Недвижимость",
        text: "о сталинках"
    },
    {
        title: "Маркет",
        text: "люстры и светильники"
    },
    {
        title: "Авто.ру",
        text: "привод 4х4 до 500 000"
    }
]

const germanyMapData = [
    { name: "Расписания" }
]

const program = [
    {
        time: "02:00",
        name: "ТНТ.Best",
        channel: "ТНТ.International" },
    {
        time: "02:15",
        name: "Джинглики",
        channel: "Карусель INT" },
    {
        time: "02:25",
        name: "Наедине со всеми",
        channel: "Первый" },
];

const broadcast = [
    {
        name: "Управление как искусство",
        channel: "Успех" },
    {
        name: "Ночь. Мир в это время",
        channel: "earthTV" },
    {
        name: "Андрей Вознесенский",
        channel: "Совершенно секретно" }
]

export { newsCategories, news, currencies, searchCategories, weather, popular, germanyMapData, program, broadcast }