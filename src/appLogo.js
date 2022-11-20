import Icons from './icons';

const LOGO_HEIGHT = 190;
const LOGO_WIDTH = 190;

const appLogo = new Image();
appLogo.src = Icons.logoIcon;
appLogo.height = LOGO_HEIGHT;
appLogo.width = LOGO_WIDTH;
appLogo.className = 'app-logo';

export default appLogo;
