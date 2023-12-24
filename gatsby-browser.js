import './src/styles/global.scss';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'flowbite/dist/flowbite';

const loader = document.querySelector('.loader-wrapper');

export const onClientEntry = () => {
  loader.style.display = 'block';
  if (typeof window !== 'undefined') {
    window.document.body.style = 'none';
  }
};

export const onInitialClientRender = () => {
  if (typeof window !== 'undefined') {
    window.document.body.style.display = 'block';
  }
};

export const onPreRouteUpdate = () => {
  loader.style.display = 'block';
};

export const onRouteUpdateDelayed = () => {
  loader.style.display = 'block';
};

export const onRouteUpdate = () => {
  loader.style.display = 'none';
};
