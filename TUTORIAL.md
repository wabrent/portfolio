# Как создать современное портфолио для Web3 специалиста

## Полное руководство по созданию портфолио с нуля

---

## Оглавление

1. [Введение](#введение)
2. [Что мы создали](#что-мы-создали)
3. [Технологии и инструменты](#технологии-и-инструменты)
4. [Пошаговая инструкция](#пошаговая-инструкция)
5. [Структура проекта](#структура-проекта)
6. [Дизайн и стиль](#дизайн-и-стиль)
7. [Мобильная оптимизация](#мобильная-оптимизация)
8. [Публикация в интернете](#публикация-в-интернете)
9. [Заключение](#заключение)

---

## Введение

В этом туториале мы расскажем, как создали современное, адаптивное портфолио для Web3 специалиста с использованием HTML, CSS и JavaScript. Портфолио включает в себя секции с проектами, достижениями в Discord, вирусными твитами и контактной информацией.

**Цель:** Создать профессиональное портфолио без использования тяжёлых фреймворков, с отличной производительностью и полной адаптивностью для мобильных устройств.

---

## Что мы создали

**Готовое портфолио включает:**

- ✅ **Hero секцию** с приветствием, статистикой и анимированным фоном
- ✅ **About секцию** с информацией о специалисте
- ✅ **Builders секцию** с личными проектами (Wallet Reputation, OpenGradient, PolyEdge)
- ✅ **Twitter Highlights** с вирусными твитами
- ✅ **Discord Roles** с ролями из различных проектов
- ✅ **Skills секцию** с навыками
- ✅ **Contact секцию** с контактной информацией
- ✅ **Полную мобильную оптимизацию** для всех устройств

**Ссылка на портфолио:** [graanit.com](https://graanit.com) (пример)

---

## Технологии и инструменты

### Основные технологии

| Технология | Версия | Назначение |
|------------|--------|------------|
| HTML5 | - | Структура страницы |
| CSS3 | - | Стили и анимации |
| JavaScript | ES6+ | Интерактивность |

### Библиотеки и фреймворки

| Библиотека | Версия | Назначение |
|------------|--------|------------|
| Bootstrap 5 | 5.3.2 | Адаптивная сетка и компоненты |
| Bootstrap Icons | 1.11.1 | Иконки |
| Google Fonts | Inter | Шрифты |

### Инструменты разработки

- **Редактор кода:** VS Code / Trae
- **Хостинг кода:** GitHub
- **Хостинг сайта:** Vercel
- **Домен:** Кастомный домен (например, graanit.com)

---

## Пошаговая инструкция

### Шаг 1: Создание структуры проекта

Создайте папку проекта и следующую структуру файлов:

```
portfolio/
├── index.html          # Главный HTML файл
├── css/
│   └── style.css       # Все стили
├── js/
│   └── main.js         # JavaScript код
├── images/             # Изображения и скриншоты
├── icons/              # Иконки
└── README.md           # Документация
```

### Шаг 2: Создание HTML структуры

Создайте файл `index.html` с базовой структурой:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio by Graanit</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" rel="stylesheet">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <!-- Меню навигации -->
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero-section">
        <!-- Приветствие и статистика -->
    </section>

    <!-- About Section -->
    <section id="about">
        <!-- Информация о себе -->
    </section>

    <!-- Projects Sections -->
    <section id="builders">
        <!-- Проекты -->
    </section>

    <!-- Contact Section -->
    <section id="contact">
        <!-- Контакты -->
    </section>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Custom JS -->
    <script src="js/main.js"></script>
</body>
</html>
```

### Шаг 3: Добавление контента

#### Hero секция

Добавьте приветствие, статистику и кнопки призыва к действию:

```html
<div class="hero-content">
    <div class="portfolio-label">
        <i class="bi bi-folder2-open"></i>
        <span>Portfolio</span>
    </div>
    <div class="hero-badge">
        <i class="bi bi-geo-alt-fill"></i> Ukraine
    </div>
    <h1 class="hero-title">
        Hi! I'm <span class="gradient-text">Graanit</span>
    </h1>
    <p class="hero-lead">
        Web3 Content Creator & Builder
    </p>
    
    <!-- Stats Counter -->
    <div class="hero-stats-counter">
        <div class="stat-counter-item">
            <div class="stat-icon">
                <i class="bi bi-people"></i>
            </div>
            <div class="stat-value">2,034+</div>
            <div class="stat-label">Followers</div>
        </div>
        <div class="stat-counter-item">
            <div class="stat-icon">
                <i class="bi bi-clock-history"></i>
            </div>
            <div class="stat-value">2+</div>
            <div class="stat-label">Years Experience</div>
        </div>
    </div>
</div>
```

#### Секция проектов

Добавьте карточки проектов:

```html
<div class="project-card">
    <div class="project-image">
        <img src="images/project.png" alt="Project Name">
        <div class="project-overlay">
            <a href="https://project.com" class="btn btn-light btn-sm">
                <i class="bi bi-box-arrow-up-right"></i> Visit Project
            </a>
        </div>
    </div>
    <div class="project-content">
        <h4 class="project-title">Project Name</h4>
        <p class="project-description">Description</p>
        <div class="project-tags">
            <span class="tag">Web3</span>
            <span class="tag">DeFi</span>
        </div>
    </div>
</div>
```

### Шаг 4: Стилизация (CSS)

#### CSS переменные

Определите цветовую схему в начале CSS файла:

```css
:root {
    --dark-bg: #000000;
    --dark-card: #111111;
    --text-primary: #ffffff;
    --text-secondary: #aaaaaa;
    --accent-color: #ff0000;
    --gradient-1: linear-gradient(135deg, #ffffff 0%, #888888 100%);
    --shadow-glow: 0 0 40px rgba(255, 255, 255, 0.1);
}
```

#### Анимации

Добавьте анимации для интерактивности:

```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0) rotate(0deg);
    }
    50% {
        transform: translateY(-20px) rotate(10deg);
    }
}
```

#### Адаптивный дизайн

Добавьте медиа-запросы для мобильных устройств:

```css
@media (max-width: 767px) {
    .hero-title {
        font-size: 1.75rem;
    }
    
    .hero-cta {
        flex-direction: column;
        width: 100%;
    }
    
    .btn-primary {
        width: 100%;
    }
}

@media (max-width: 575px) {
    .hero-section {
        padding-top: 85px;
    }
    
    .avatar {
        width: 150px;
        height: 150px;
    }
}
```

### Шаг 5: JavaScript функциональность

Добавьте интерактивность:

```javascript
// Navbar scroll effect
const navbar = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Reveal on scroll
const revealElements = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight * 0.85) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});
```

---

## Структура проекта

```
portfolio/
├── index.html              # Главная страница
├── css/
│   └── style.css          # Все стили (1900+ строк)
├── js/
│   └── main.js            # JavaScript (260+ строк)
├── images/
│   ├── logo.jpg           # Логотип
│   ├── project1.png       # Скриншоты проектов
│   └── tweet1.png         # Скриншоты твитов
├── icons/
│   └── accessibility.svg  # Иконки
└── README.md              # Документация
```

---

## Дизайн и стиль

### Цветовая схема

Мы выбрали **Black White Dark Futuristic** стиль:

| Элемент | Цвет | HEX |
|---------|------|-----|
| Фон | Чёрный | #000000 |
| Карточки | Тёмно-серый | #111111 |
| Текст основной | Белый | #FFFFFF |
| Текст вторичный | Серый | #AAAAAA |
| Акцент | Красный | #FF0000 |

### Типографика

- **Шрифт:** Inter (Google Fonts)
- **Заголовки:** 700-800 weight
- **Основной текст:** 400-500 weight
- **Межбуквенный интервал:** 0.5-1px

### Визуальные эффекты

1. **Градиенты:** Белый → Серый
2. **Свечение:** White glow для текста и элементов
3. **Тени:** Мягкие белые тени
4. **Анимации:** Плавное появление, парение, пульсация

---

## Мобильная оптимизация

### Что мы оптимизировали

1. **Адаптивные шрифты** — уменьшаются для маленьких экранов
2. **Гибкая сетка** — Bootstrap grid система
3. **Оптимизированные изображения** — `object-fit: contain/cover`
4. **Сенсорные кнопки** — увеличенные области нажатия
5. **Мобильное меню** — hamburger меню
6. **Производительность** — минимальный JavaScript

### Breakpoints

```css
/* Планшеты */
@media (max-width: 991px) { }

/* Большие телефоны */
@media (max-width: 767px) { }

/* Средние телефоны */
@media (max-width: 575px) { }

/* Маленькие телефоны */
@media (max-width: 375px) { }
```

### Советы по мобильной оптимизации

- ✅ Используйте `viewport` meta тег
- ✅ Делайте кнопки достаточно большими (минимум 44x44px)
- ✅ Оптимизируйте изображения для мобильных
- ✅ Избегайте горизонтального скролла
- ✅ Тестируйте на реальных устройствах

---

## Публикация в интернете

### Шаг 1: GitHub

1. Создайте репозиторий на GitHub
2. Загрузите все файлы проекта
3. Сделайте репозиторий public

### Шаг 2: Vercel

1. Зарегистрируйтесь на [vercel.com](https://vercel.com)
2. Войдите через GitHub
3. Нажмите **"Add New Project"**
4. Выберите ваш репозиторий
5. Нажмите **"Deploy"**

### Шаг 3: Домен

1. Купите домен (любой регистратор)
2. В Vercel перейдите в **Settings → Domains**
3. Добавьте ваш домен
4. Настройте DNS у регистратора:

```
Тип    Имя    Значение
A      @      76.76.21.21
CNAME  www    cname.vercel-dns.com
```

### Шаг 4: Обновление

После каждого изменения:
1. Загрузите файлы на GitHub
2. Vercel автоматически обновит сайт через 1-2 минуты

---

## Заключение

### Что мы получили

✅ **Профессиональное портфолио** с современным дизайном
✅ **Полностью адаптивное** для всех устройств
✅ **Быстрая загрузка** без тяжёлых фреймворков
✅ **Легко обновлять** — просто загрузите новые файлы
✅ **Бесплатный хостинг** на Vercel

### Ключевые моменты

1. **Простота** — HTML/CSS/JS без сложных фреймворков
2. **Производительность** — быстрая загрузка
3. **Адаптивность** — работает на всех устройствах
4. **Стиль** — современный футуристический дизайн

### Что дальше?

- Добавьте больше проектов
- Обновляйте статистику
- Добавляйте новые секции по мере необходимости
- Следите за производительностью

---

## Ресурсы

- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Google Fonts](https://fonts.google.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Pages](https://pages.github.com/)

---

**Автор:** Anatolii Graanit  
**Дата:** Март 2026  
**Версия:** 1.0

---

*Спасибо за чтение! Если у вас есть вопросы — обращайтесь.*
