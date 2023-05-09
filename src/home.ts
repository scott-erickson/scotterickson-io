import luxy from 'luxy.js';

console.log('hi');

const fireRoot = document.querySelector('#fire-root');

console.log(fireRoot);

const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
if (!isMobile) {
  luxy.init({
    wrapper: '#luxy',
    wrapperSpeed: 0.0865,
  });
}
