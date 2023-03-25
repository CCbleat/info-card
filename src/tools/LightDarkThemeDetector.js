/**
 * @returns true => Light theme
 * @returns false => Dark theme
 */

const MacThemeDetector = () => {
    // 通过媒体查询来获取 当前系统是 dark/light theme
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return true;
    }
    return false;
}

const WindowsThemeDetector = () => {
    // 通过时间来查询 当前系统 "应该是" dark/light theme
    const time = new Date();
    let hour = time.getHours();
    console.log("Hour: ", hour);
    if(hour >= 17 || hour <= 7) {
        return true;
    }
    return false;
}

const deviceDetector = () => {
    const ua = navigator.userAgent;
    const mac = 'Mac';
    const windows = 'Windows';
    if(ua.includes(mac)) {
        return true;
    }
    if(ua.includes(windows)) {
        return false;
    }
    return false;
}

const themeDetector = () => {
    if(deviceDetector()) {
        console.log(1, MacThemeDetector());
        return MacThemeDetector();
    } else {
        console.log(2, WindowsThemeDetector());
        return WindowsThemeDetector();
    }
}

export default themeDetector