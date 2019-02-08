<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Bokmal</title>
    <link rel="stylesheet" href="styles/normalize.css">
    <link rel="stylesheet" href="styles/fonts.css">
    <link rel="stylesheet" href="dist/styles/style.scss">
</head>
<body>
    <div class="container">
        <header class="upper">
            <picture>
                <source media="" srcset="">
                <img src="" alt="logo" class="upper__logo">
            </picture>
            <div class="upper__info">
                <select class="upper__select">
                    <option value="">Для усіх</option>
                </select>
                <ul class="upper__links">
                    <li class="links__item">Про Букмоль</li>
                    <li class="links__item">Співпраця</li>
                    <li class="links__item">Підтримка</li>
                </ul>
            </div>
            <div class="upper__other">
                <div class="upper__icon icon icon--search"></div>
                <div class="upper__icon icon icon--bookmark"></div>
            </div> 
        </header>

        <section class="header">
            <div class="header__info">
                <h3 class="header__title--small title--small">Корисні статті</h3>  
                <h1 class="header__title">Тварини Патрика Джорджа: врятуй їх усіх</h1> 
                <div class="header__date date">1 жовтня, 2017</div> 
                <div class="header__views views">980</div>
                <button class="header__button button">Читати</button>
                <div class="header__bookmark bookmark"></div>
            </div>
        </section>
        
        <section class="sidebar">
            <ul class="sidebar__nav nav">
                <li class="nav__item">
                    <a href="#" class="nav__link nav__link--active">Головна</a>
                </li>
                <li class="nav__item">
                    <a href="#" class="nav__link">Топ</a>
                </li>
                <li class="nav__item">
                    <a href="#" class="nav__link">Огляди</a>
                </li>
                <li class="nav__item">
                    <a href="#" class="nav__link">Корисні статті</a>
                </li>
                <li class="nav__item">
                    <a href="#" class="nav__link">Новини</a>
                </li>
                <li class="nav__item">
                    <a href="#" class="nav__link">Авторська колонка</a>
                </li>
                <li class="nav__item">
                    <a href="#" class="nav__link">Інтерактив</a>
                </li>
                <li class="nav__item">
                    <a href="#" class="nav__link">Літклуб</a>
                </li>    
            </ul>
        </section>

        <section class="sort block">
            <div class="block__wrapper">
                <ul class="sort__list">
                    <li class="sort__item">Сортувати за:</li>
                    <li class="sort__item">
                        <a href="#" class="sort__link">Популярністю</a>
                    </li>
                    <li class="sort__item">
                        <a href="#" class="sort__link">Новизною</a>
                    </li>
                </ul>
            </div>
        </section>

        <section class="article block">
            <div class="block__wrapper">
                <picture>
                    <source media="" srcset="">
                    <img src="" alt="article-image" class="article__image">
                </picture>
                <h3 class="article__title--small title--small">Огляди</h3>
                <div class="article__info">
                    <div class="article__date date">Сьогодні</div>
                    <div class="article__views views">32</div>
                    <h2 class="article__title">Шість пригодницьких історій для літнього читання</h2>
                    <button class="article__button button">Читати</button>
                    <div class="article__bookmark bookmark"></div>
                </div>
            </div>
        </section>

        <section class="subthemes block">
            <div class="block__wrapper">
                <div class="subthemes__item">
                    <h3 class="subthemes__title--small title--small">Корисні статті</h3>
                    <picture>
                        <source media="" srcset="">
                        <img src="" alt="article-image" class="subthemes__image">
                    </picture>
                    <div class="subthemes__bookmark bookmark"></div>
                    <div class="subthemes__date date">1 жовтня, 2017</div> 
                    <div class="subthemes__views views">980</div>
                    <h3 class="subthemes__text">Найкращі дитячі ілюстратори незалежної України</h3>
                </div>
                <div class="subthemes__item">
                    <h3 class="subthemes__title--small title--small">Афіша</h3>
                    <picture>
                        <source media="" srcset="">
                        <img src="" alt="article-image" class="subthemes__image">
                    </picture>
                    <div class="subthemes__bookmark bookmark"></div>
                    <div class="subthemes__date date">22 вересня, 2017</div> 
                    <div class="subthemes__views views">145</div>
                    <h3 class="subthemes__text">Вихідні з дітьми: 9-10 вересня</h3>
                </div>
                <div class="subthemes__item">
                    <h3 class="subthemes__title--small title--small">Літклуб</h3>
                    <picture>
                        <source media="" srcset="">
                        <img src="" alt="article-image" class="subthemes__image">
                    </picture>
                    <div class="subthemes__bookmark bookmark"></div>
                    <div class="subthemes__date date">28 вересня, 2017</div> 
                    <div class="subthemes__views views">2045</div>
                    <h3 class="subthemes__text">Літклуб букмоль: розклад на квітень</h3>
                </div>
            </div>
        </section>

        <section class="advice block advice--underlined">
            <h3 class="advice__title--small title--small">Корисні статті</h3>
            <div class="block__wrapper background">
                <div class="advice__info">
                    <div class="advice__date date">28 вересня, 2017</div> 
                    <div class="advice__views views">2045</div>
                    <h1 class="advice__title">"Любий щоденнику..." ваш "настільний" психоаналітик</h1>               
                    <button class="advice__button button">Читати</button>
                    <div class="advice__bookmark bookmark"></div>
                </div>
            </div>
        </section>

        <section class="subthemes block subthemes--colored">
            <div class="block__wrapper">
                <h2 class="subthemes__title--main">Teen review</h2>
                <div class="subthemes__item">
                    <h3 class="subthemes__title--small title--small">Огляди</h3>
                    <picture>
                        <source media="" srcset="">
                        <img src="" alt="article-image" class="subthemes__image">
                    </picture>
                    <div class="subthemes__bookmark bookmark"></div>
                    <div class="subthemes__date date">28 вересня, 2017</div> 
                    <div class="subthemes__views views">2045</div>
                    <h3 class="subthemes__text">Найкращі дитячі ілюстратори незалежної України</h3>
                </div>
                <div class="subthemes__item">
                    <h3 class="subthemes__title--small title--small">Новини</h3>
                    <picture>
                        <source media="" srcset="">
                        <img src="" alt="article-image" class="subthemes__image">
                    </picture>
                    <div class="subthemes__bookmark bookmark"></div>
                    <div class="subthemes__date date">8 листопада, 2017</div> 
                    <div class="subthemes__views views">3045</div>
                    <h3 class="subthemes__text">У столиці запустили соціальний проект "Київ читає"</h3>
                </div>
                <div class="subthemes__item">
                    <h3 class="subthemes__title--small title--small">Фільми</h3>
                    <picture>
                        <source media="" srcset="">
                        <img src="" alt="article-image" class="subthemes__image">
                    </picture>
                    <div class="subthemes__bookmark bookmark"></div>
                    <div class="subthemes__date date">28 вересня, 2017</div> 
                    <div class="subthemes__views views">6345</div>
                    <h3 class="subthemes__text">12 фільмів для дітей, знятих за мотивами відомих книжок</h3>
                </div>
            </div>
        </section>

        <section class="article block">
            <div class="block__wrapper">
                <picture>
                    <source media="" srcset="">
                    <img src="" alt="article-image" class="article__image article__image--right">
                </picture>
                <h3 class="article__title--small article__title--left title--small">Авторська колонка</h3>
                <div class="article__info article__info--left">
                    <div class="article__date date">22 вересня, 2017</div>
                    <div class="article__views views">3045</div>
                    <h2 class="article__title">Бути собою разом із Туве Янссон: 5 диваків Долини мумі-тролів</h2>
                    <button class="article__button button">Читати</button>
                    <div class="article__bookmark bookmark"></div>
                </div>
            </div>
        </section>

        <section class="subthemes block">
            <div class="block__wrapper">
                <div class="subthemes__item">
                    <h3 class="subthemes__title--small title--small">Огляди</h3>
                    <picture>
                        <source media="" srcset="">
                        <img src="" alt="article-image" class="subthemes__image">
                    </picture>
                    <div class="subthemes__bookmark bookmark"></div>
                    <div class="subthemes__date date">15 вересня, 2017</div> 
                    <div class="subthemes__views views">569</div>
                    <h3 class="subthemes__text">Альтернативна історія: 4 аніме серіали, які граються з подіями ХХ століття</h3>
                </div>
                <div class="subthemes__item">
                    <h3 class="subthemes__title--small title--small">Афіша</h3>
                    <picture>
                        <source media="" srcset="">
                        <img src="" alt="article-image" class="subthemes__image">
                    </picture>
                    <div class="subthemes__bookmark bookmark"></div>
                    <div class="subthemes__date date">28 вересня, 2017</div> 
                    <div class="subthemes__views views">2045</div>
                    <h3 class="subthemes__text">Що робити на вихідних у Києві</h3>
                </div>
                <div class="subthemes__item">
                    <h3 class="subthemes__title--small title--small">Корисні статті</h3>
                    <picture>
                        <source media="" srcset="">
                        <img src="" alt="article-image" class="subthemes__image">
                    </picture>
                    <div class="subthemes__bookmark bookmark"></div>
                    <div class="subthemes__date date">28 вересня, 2017</div> 
                    <div class="subthemes__views views">2045</div>
                    <h3 class="subthemes__text">Як вивчають літературу там: досвід Швеції</h3>
                </div>
            </div>
        </section>

        <section class="more">
            <div class="more__wrapper">
                <h2 class="more__text">Показати ще</h2>
            </div>
        </section>

        <footer class="footer block">
            <div class="block__wrapper">
                <div class="footer__item">
                    <h3 class="footer__title"></h3>
                    <form class="footer__form">
                        <input type="text" placeholder="E-Mail" class="footer__search">
                        <input type="submit" class="footer__submit"></input>
                    </form>
                </div>
                <div class="footer__item">
                    <h3 class="footer__title"></h3>
                    <div class="footer__social">
                        <a href="#">
                            <img src="" alt="facebook-icon" class="footer__icon">
                        </a>
                        <a href="#">
                            <img src="" alt="twitter-icon" class="footer__icon">
                        </a>
                        <a href="#">
                            <img src="" alt="instagram-icon" class="footer__icon">
                        </a>    
                    </div>
                </div>
                <div class="footer__item">
                    <div class="footer__text">
                        &copy; Букмоль. Незалежний культурний проект для дітей, 
                        їхніх батьків та усіх-усіх небайдужих й охочих до читання. 
                        Всі права захищені. Використання будь-яких матеріалів, 
                        розміщених на сайті, дозволяється за умови посилання на Bokmal.com.ua
                    </div>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>