import Beer from './images/drinks/beer.png';
import Water from './images/drinks/whater.png';
import Soda from './images/drinks/sode.png';
import RedBull from './images/drinks/red-bull.png';
import Clamato from './images/drinks/clamato.png';
import WhaterSoda from './images/drinks/whater-soda.png';

const drinksES = [
    {
        name: 'Cerveza Pequeña (Presidente, Bohemia, One)',
        description: 'Una refrescante cerveza dominicana.',
        price: 'RD$175',
        image: Beer,
    },
    {
        name: 'Cerveza Grande (Presidente, Bohemia, One)',
        description: 'Una refrescante cerveza dominicana.',
        price: 'RD$250',
        image: Beer,
    },
    {
        name: 'Agua',
        description: 'Una bebida refrescante hecha con agua.',
        price: 'RD$50',
        image: Water,
    },
    {
        name: 'Acua con soda',
        description: 'Una bebida gaseosa hecha con agua carbonatada y saborizantes.',
        price: 'RD$100',
        image: WhaterSoda,
    },
    {
        name: 'Coca-Cola, Sprite',
        description: 'Una refrescante bebida gaseosa.',
        price: 'RD$50',
        image: Soda,
    },
    {
        name: 'Red Bull',
        description: 'Una popular bebida energética.',
        price: 'RD$150',
        image: RedBull,
    },
    {
        name: 'Clamato',
        description: 'Una bebida de jugo de tomate y almeja.',
        price: 'RD$150',
        image: Clamato,
    },
    {
        name: 'Jugos (Piña, Limón, china)',
        description: 'Una bebida refrescante hecha con jugo de frutas.',
        price: 'RD$150'
    }
];

export default drinksES;