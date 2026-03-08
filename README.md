# 🌤️ Vue Weather App

Приложение погоды с прогнозом на 3 дня, построенное на Vue 3.

## 🛠️ Стек

- **Vue 3** — Composition API
- **JavaScript**
- **Vite** — сборщик
- **Bun** — пакетный менеджер
- **WeatherAPI** — источник данных

## 🌐 Demo

[rakhzar.github.io/vue-app](https://rakhzar.github.io/vue-app/)

## 🚀 Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/rakhzar/vue-app.git

# Перейти в папку
cd vue-app

# Установить зависимости
bun install

# Запустить проект
bun run dev
```

## 📦 Деплой

```bash
bun run deploy
```

## ✨ Функционал

- 🌍 Погода по любому городу
- 📅 Прогноз на 3 дня
- 💾 Сохранение города через localStorage
- ❌ Обработка ошибок API
- 🎨 Динамические иконки погоды

## 📁 Структура проекта

```
src/
├── components/
│   ├── PanelLeft.vue    # левая панель
│   ├── PanelRight.vue   # правая панель
│   ├── DayCard.vue      # карточка дня
│   ├── CitySelect.vue   # выбор города
│   ├── Stat.vue         # статистика
│   ├── Button.vue       # кнопка
│   ├── Input.vue        # инпут
│   └── Error.vue        # ошибки
├── icons/
│   └── weather/         # иконки погоды
├── constants.js         # константы
└── App.vue              # корневой компонент
```

## 🔑 API

Используется [WeatherAPI](https://www.weatherapi.com/)
