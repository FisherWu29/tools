var ua = navigator.userAgent;

var uaTest = {
    /**
     * 检测是否移动设备
     * @returns {boolean}
     */
    isMobile: function () {
        return /Mobile/i.test(ua);
    },
    /**
     * 检测是否Android平台
     * @returns {boolean}
     */
    isAndroid: function () {
        return /Android/i.test(ua);
    },
    /**
     * 检测是否iOS平台
     * @returns {boolean}
     */
    isiOS: function () {
        return /iPhone OS/i.test(ua);
    },
    /**
     * 检测是否iPhone设备
     * @returns {boolean}
     */
    isiPhone: function () {
        return /iPhone/i.test(ua);
    },
    /**
     * 检测是否iPad设备
     * @returns {boolean}
     */
    isiPad: function () {
        return /iPad/i.test(ua);
    },
    /**
     * 检测是否通过浏览器访问
     * @returns {boolean}
     */
    isBrowser: function () {
        return !$$.isNative();
    },
    /**
     * 检测是否通过WebView访问
     * @returns {boolean}
     */
    isNative: function () {
        return /WebView/i.test(ua);
    }
}
