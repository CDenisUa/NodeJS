// **** 1 example ****

// import { characters, greet } from "./characters.mjs";
// for(const c of characters) {
//     greet(c);
// }

// **** 2 example ****

// import * as char from "./characters.mjs";
// for(const c of char.characters) {
//     char.greet(c);
// }

// **** 3 example ****

// import log, {characters, greet} from './characters.mjs'
// for(const c of characters) {
//     greet(c);
// }
// log()

// **** 4 example ****

// import log, * as char from './characters.mjs';
// for(const c of char.characters) {
//     char.greet(c);
//     log();
// }

// **** 5 example ****

// import log, {characters, greet as hello} from './characters.mjs'
// for(const c of characters) {
//     hello(c);
// }
// log()

// **** 6 example ****

// async function main() {
//     const { characters, greet } = await import('./characters.mjs');
//     for(const c of characters) {
//         greet(c);
//     }
// }
//
// main();

// **** 7 example ****

// async function main() {
//     try {
//         const { characters, greet } = await import('./characterserr.mjs');
//         for(const c of characters) {
//             greet(c);
//         }
//     }catch(e) {
//         console.warn('My error!');
//     }
//
// }
//
// main();
