/**
 * @returns true => Light theme
 * @returns false => Dark theme
 */
import { ref } from 'vue';

let macTheme = ref(true);

const MacThemeDetector = () => {
    // 通过媒体查询来获取 和 系统主题相关的obj
    const themeObj = window.matchMedia('(prefers-color-scheme: light)');
    // 监听系统主题的变化 如果有变化则也使应用主题 跟随变化
    themeObj.addEventListener('change', (event) => {
        if(event.matches) {
            macTheme.value = true;
            return true;
        } else {
            macTheme.value = false;
            return false;
        }
    })
    // 判断当前系统是 dark/light theme
    if(window.matchMedia && themeObj.matches) {
        macTheme.value = true;
        return true;
    }
    macTheme.value = false;
    return false;
}

const WindowsThemeDetector = () => {
    // 通过时间来查询 当前系统 "应该是" dark/light theme
    const time = new Date();
    let hour = time.getHours();
    // console.log("Hour: ", hour);
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
        return MacThemeDetector();
    } else {
        return WindowsThemeDetector();
    }
}

export {
    themeDetector,
    macTheme,
}