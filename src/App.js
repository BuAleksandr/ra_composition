import React from 'react';
import './App.css';

import Cards from './components/Cards';
import NewsBlock from './components/newsBlock/NewsBlock';
import SearchBlock from './components/searchBlock/SearchBlock';
import WidgetsBlock from './components/WidgetsBlock/WidgetsBlock';
import Advertising from './components/Advertising';

import * as data from './components/data';

function App() {
    const [value, setValue] = React.useState('');
    return (
    <div>
        <div>
            <Cards image="https://i.pinimg.com/736x/fd/94/9e/fd949e0306d13356343a8715cf26ab68.jpg">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#1" className="btn btn-primary">Go somewhere</a>
            </Cards>
            <Cards>
                <h5 className="card-title">Special title title treatment</h5>
                <p className="card-text">With supportintg text bellow as a natural lead-in to additional content.</p>
                <a href="#1" className="btn btn-primary">Go somewhere</a>
            </Cards>
            <div className="App">
                <header>
                    <NewsBlock
                    newsCategories={data.newsCategories}
                    news={data.news}
                    currencies={data.currencies}
                />
                <Advertising img="http://placehold.it/80x80/" link="http://placehold.it/80x80/">
                    <h5 className="advertising-title">Работа над ошибками</h5>
                    <p className="advertising-text">Смотрите на Яндексе и запоминайте</p>
                </Advertising>
                </header>
                <main>
                <SearchBlock
                    logo="http://placehold.it/40x40/"
                    searchCategories={data.searchCategories}
                />
                <Advertising img="http://placehold.it/600x60/" link="http://placehold.it/600x60/" />
                <WidgetsBlock
                    weather={data.weather}
                    popular={data.popular}
                    mapData={data.germanyMapData}
                    program={data.program}
                    broadcast={data.broadcast}
                />
              </main>
            </div>
        </div>
    </div>
  );
}

export default App;