import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'flowbite/dist/flowbite';

import '@styles/global.scss';

// gatsby-remark-embed-gist
import '@styles/gist/common.scss';
import '@styles/gist/dark.scss';
import '@styles/gist/light.scss';

// gatsby-remark-interactive-gifs
import '@styles/interactive-gifs.scss';

// gatsby-remark-prismjs
import '@styles/prismjs/dark.scss';
import '@styles/prismjs/light.scss';

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
