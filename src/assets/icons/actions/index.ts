import hamburger from './hamburger.svg';
import home from './home.svg';
import upload from './upload.svg';

const icons = { hamburger, home, upload };

export type IconType = keyof typeof icons;

export default icons;
