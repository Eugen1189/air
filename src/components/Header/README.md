# Header Components

Два варіанти Header з різними підходами до плавної прокрутки.

## Header.jsx (CSS Scroll)
Використовує нативний CSS `scroll-behavior: smooth`

### Переваги:
- ✅ Без додаткових залежностей
- ✅ Легкий та швидкий
- ✅ Працює з HTML якорями

### Використання:
```jsx
import Header from './components/Header/Header';
<Header />
```

## HeaderWithScroll.jsx (react-scroll)
Використовує бібліотеку `react-scroll` для розширеного контролю

### Переваги:
- ✅ Налаштування швидкості анімації (duration)
- ✅ Налаштування відступу (offset)
- ✅ Автоматичне підсвічування активного посилання (spy)
- ✅ Програматичний контроль прокрутки
- ✅ Callbacks (onSetActive, onSetInactive)

### Налаштування:
```jsx
const scrollConfig = {
  spy: true,           // Підсвічує активне посилання
  smooth: true,        // Плавна прокрутка
  offset: -70,         // Відступ від header (70px)
  duration: 800,       // Тривалість анімації (800ms)
};
```

### Використання:
```jsx
import HeaderWithScroll from './components/Header/HeaderWithScroll';
<HeaderWithScroll />
```

## Порівняння

| Функція | CSS Scroll | react-scroll |
|---------|-----------|--------------|
| Плавна прокрутка | ✅ | ✅ |
| Налаштування швидкості | ❌ | ✅ |
| Налаштування відступу | CSS only | ✅ Динамічно |
| Активне посилання | ❌ | ✅ |
| Розмір bundle | 0 KB | ~6 KB |
| Підтримка старих браузерів | Частково | ✅ |

## Як перемкнутися

В `App.jsx` замініть:
```jsx
// Базовий варіант
import Header from './components/Header/Header';

// Розширений варіант
import HeaderWithScroll from './components/Header/HeaderWithScroll';
```


