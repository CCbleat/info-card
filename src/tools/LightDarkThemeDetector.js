/**
 * @returns true => Light theme
 * @returns false => Dark theme
 */

const themeDetector = () => {
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return true;
    }
    return false;
}

export default themeDetector