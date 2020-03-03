import Deamon from './characters/Daemon';
import Magician from './characters/Magician';

const elise = new Deamon('Elise Trouw');
const jared = new Magician('Jared Falk');

console.log(elise);
console.log(elise.attack);

jared.stoned = true;

console.log(jared);

console.log(jared.attack);

console.log(jared.stoned);
