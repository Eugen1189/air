import React from 'react';
import BookingSidebar from '../BookingSidebar/BookingSidebar';

const TourPageDemo = () => {
  return (
    <div className="tour-page-layout" style={{ padding: '60px 20px' }}>
      {/* Основний контент */}
      <div className="tour-content">
        <h1 className="tour-header__title" style={{ marginBottom: '20px' }}>
          Смарагдове узбережжя Італії
        </h1>
        
        <p className="tour-header__subtitle" style={{ marginBottom: '30px', color: '#6c757d' }}>
          8 днів незабутньої подорожі італійським узбережжям
        </p>

        <h3>Про тур</h3>
        <p>
          Пориньте в атмосферу розкоші та краси на узбережжі Амальфі. 
          Цей тур ідеально поєднує пляжний відпочинок, вишукану кухню та дослідження стародавніх містечок.
        </p>

        <h3>Що включено</h3>
        <ul style={{ lineHeight: '2' }}>
          <li>✈️ Авіапереліт туди-назад</li>
          <li>🏨 Проживання в готелі 4* (7 ночей)</li>
          <li>🥐 Сніданки щодня</li>
          <li>🚐 Трансфери аеропорт-готель</li>
          <li>👨‍🏫 Супровід україномовного гіда</li>
        </ul>

        <h3>Маршрут</h3>
        <p>
          День 1-2: Неаполь - знайомство з містом<br/>
          День 3-4: Острів Капрі та Блакитний грот<br/>
          День 5-6: Позітано та Амальфі<br/>
          День 7-8: Вільний час та відліт
        </p>

        <h3>Деталі</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse 
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h3>Важлива інформація</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
      </div>

      {/* Sticky Sidebar з формою бронювання */}
      <BookingSidebar price="950" />
    </div>
  );
};

export default TourPageDemo;

