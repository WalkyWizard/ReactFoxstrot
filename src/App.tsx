import "./App.css"

import add from "./assets/add.webp"
import banner from "./assets/banner.webp"
import notebook from "./assets/notebook.webp"

import logo from "./assets/logo-white.svg"


import credit from "./assets/credit.svg"
import installments from "./assets/pay_installments.svg"
import sales from "./assets/sales.svg"
import salesOnline from "./assets/sales_online.svg"

import appStore from "./assets/app_store.svg"
import googlePlay from "./assets/google_play.svg"

import telegram from "./assets/telegram.svg"
import viber from "./assets/viber.svg"
import visa from "./assets/visa.svg"

import euronics from "./assets/euronics.png"
import barer from "./assets/barer_free.png"
import infoCenter from "./assets/info_center.png"

import mono from "./assets/mono_ceshbek.png"

function App(){

const products = [
{
name:"Ноутбук DURABOOK S14 Standard Black (S4E23A3BXE)",
price:"131 695 ₴",
rating:"4.5",
code:"714858",
month:"от 4389 ₴ / мес",
pay:"125 110 ₴"
},
{
name:"Ноутбук DURABOOK Z14 Basic Black (Z4E10D43BXX)",
price:"221 999 ₴",
rating:"4.8",
code:"700851",
month:"от 7400 ₴ / мес",
pay:"210 899 ₴"
},
{
name:"Ноутбук DURABOOK Z14 Basic Black (Z4E20D53BXX)",
price:"242 999 ₴",
rating:"4.9",
code:"700852",
month:"от 8100 ₴ / мес",
pay:"230 849 ₴"
},
{
name:"Ноутбук DURABOOK Z14I Basic Black (Z4E2R3DE3BXX)",
price:"224 978 ₴",
rating:"4.8",
code:"714859",
month:"от 7499 ₴ / мес",
pay:"213 729 ₴"
},
{
name:"Ноутбук DURABOOK S15 Standard Black (S5G203A3EBXE)",
price:"158 499 ₴",
rating:"4.5",
code:"700859",
month:"от 5283 ₴ / мес",
pay:"150 574 ₴"
},
{
name:"Ноутбук DURABOOK S14 Standard Black (S4E20A3A3BXE)",
price:"137 999 ₴",
rating:"4.8",
code:"700857",
month:"от 4600 ₴ / мес",
pay:"131 099 ₴"
}
]

return(

<div className="app">

<div className="topAdd">
<img src={add}/>
</div>


<header>

<div className="headerTop">

<div className="logoBlock">
<img src={logo} className="logo"/>
<span className="city">Киев</span>
</div>

<div className="headerLinks">
<span>Все акции</span>
<span>Распродажа до 80%</span>
<span>Trade-in</span>
<span>Магазины</span>
<span>Покупателям</span>
<span>Связаться</span>
</div>

<div className="login">Войти в личный кабинет</div>

</div>

<div className="headerMain">

<button className="catalog">Каталог товаров</button>

<div className="search">
<input placeholder="Поиск"/>
<button>Найти</button>
</div>

<div className="icons">
<span>Обране</span>
<span>Порівняння</span>
<span>Кошик</span>
</div>

</div>

</header>

<div className="container">

<h1 className="title">Ноутбуки DURABOOK</h1>

<div className="banner">
<img src={banner}/>
</div>

<div className="layout">

<aside className="filters">

<h3>Цена, ₴</h3>

<div className="priceInputs">
<input value="131695" readOnly/>
<input value="242999" readOnly/>
</div>

<button className="apply">ПРИМЕНИТЬ</button>

<h3>Популярные фильтры</h3>

<label><img src={credit}/> Кредит 0,01%</label>
<label><img src={installments}/> Оплата частями</label>
<label><img src={sales}/> Акция</label>
<label><img src={salesOnline}/> Скидка онлайн</label>

<h3>Тип накопителя</h3>
<h3>Объем SSD</h3>
<h3>Операционная система</h3>
<h3>Вес</h3>
<h3>Цвет корпуса</h3>

</aside>

<div className="products">

{products.map((p,i)=>(

<div className="card" key={i}>

<div className="badges">
<img src={salesOnline}/>
<img src={mono}/>
</div>

<div className="iconsCard">
<span>Обране</span>
<span>Порівняння</span>
</div>

<img src={notebook} className="productImage"/>

<div className="payment">
Оплата картой
<span>{p.pay}</span>
</div>

<div className="code">Код: {p.code}</div>

<div className="name">{p.name}</div>

<div className="rating">⭐ {p.rating}</div>

<div className="priceRow">

<div className="price">{p.price}</div>

<button className="buy">Купити</button>

</div>

<div className="month">{p.month}</div>

</div>

))}

</div>

</div>

</div>


<footer className="footer">

<div className="footerTop">

<div className="footerApp">

<h3>Фокстрот в приложении</h3>

<div className="stores">
<img src={appStore}/>
<img src={googlePlay}/>
</div>

<p className="appText">
Загружай наше приложение и отслеживай статус заказа
</p>

</div>

<div className="footerColumns">

<div className="column">
<h4>Покупателям</h4>
<p>Адреса магазинов «Фокстрот»</p>
<p>Режим роботы сети Фокстрот</p>
<p>Партнёры</p>
<p>Оплата</p>
<p>Возврат товара</p>
<p>Доставка</p>
<p>Акции</p>
<p>Сервисная сеть</p>
<p>Екстра Сервіс</p>
<p>ФоксFan</p>
<p>Найс Прайс</p>
<p>Бренды</p>
<p>Правила публикации отзывов</p>
</div>

<div className="column">
<h4>Компания</h4>
<p>О компании</p>
<p>Информация о продавце</p>
<p>Группа компаний Фокстрот</p>
<p>Отдел корпоративной продажи</p>
<p>Вакансии</p>
<p>Тендеры</p>
<p>Новости Фокстрот</p>
<p>Торговая недвижимость</p>
<p>Корпоративно-социальная ответственность</p>
<p>Помощь ЗСУ</p>
<p>Подари частичку добра</p>
<p>Контакты пресс-службы</p>
<p>Условия использования сайта</p>
<p>Политика конфединциальности</p>
</div>

</div>

<div className="footerContacts">

<img src={infoCenter} className="infoCenter"/>

<div className="messengers">
<img src={telegram}/>
<img src={viber}/>
</div>

</div>

</div>

<div className="footerMenu">

<p>Телевизоры</p>
<p>Смартфоны</p>
<p>Ноутбуки</p>
<p>Планшеты</p>
<p>Игровые приставки</p>
<p>Бытовая техника</p>
<p>Наушники</p>

</div>

<div className="footerBottom">

<img src={visa}/>
<img src={euronics}/>
<img src={barer}/>

</div>

</footer>

</div>

)

}

export default App