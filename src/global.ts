import luxy from 'luxy.js';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('hello global script!');
});

const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
if (!isMobile) {
  luxy.init({
    wrapper: '#luxy',
    wrapperSpeed: 0.0865,
  });
}
