import hamburger from './hamburger.svg';
import home from './home.svg';
import thunder from './thunder.svg';
import upload from './upload.svg';
import refresh from './refresh.svg';
import stars from './stars.svg';
import options from './options.svg'
import chevronDown from './chevron-down.svg';

const icons = { hamburger, home, thunder,upload, refresh, stars, options, chevronDown };

export type IconType = keyof typeof icons;

export default icons;
