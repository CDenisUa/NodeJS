const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const logDBConnection = () => {
    console.log('DB connected');
};
myEmitter.addListener('connected', logDBConnection);
myEmitter.emit('connected');

// myEmitter.removeListener('connected', logDBConnection);
myEmitter.off('connected', logDBConnection);
// myEmitter.removeAllListeners('connected');
myEmitter.emit('connected');

myEmitter.prependListener('msg', data => console.log('Prepend'));

myEmitter.on('msg', (data) => console.log(`Get ${data}`));
myEmitter.emit('msg', 'Hello, get my message');

myEmitter.once('off', () => console.log(`I called once!`));

myEmitter.emit('off');
myEmitter.emit('off');

console.log(myEmitter.getMaxListeners());
myEmitter.setMaxListeners(1);
console.log(myEmitter.getMaxListeners());
console.log(myEmitter.listenerCount('msg'));
console.log(myEmitter.listenerCount('off'));
console.log(myEmitter.listeners('msg'));

myEmitter.on('error', error => console.log(`Error: ${error}`));

myEmitter.emit('error', new Error('BOOM!'));

const target = new EventTarget();

const logTarget = () => console.log('Connected to target');

target.addEventListener('connected', logTarget);
target.dispatchEvent(new Event('connected'));