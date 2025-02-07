/**
 * Send track event
 * @param {String} eventName
 * @param {Object} eventProperty
 */
 function track(eventName, eventProperty){
    console.log('eventName', eventName, 'eventProperty', eventProperty)
    window.ptengine && window.ptengine.track(eventName, eventProperty);
    window.mixpanel && window.mixpanel.track(eventName, eventProperty);
}

function useMixpanel(eventName, eventProperty){
    window.mixpanel && window.mixpanel.track(eventName, eventProperty);
}

function useGtag(actionType, sendTo, transactionId){
    window.gtag && (
        actionType === 'conversion' ?
            sendTo &&
                window.gtag('event', 'conversion', {
                    send_to: sendTo,
                    transaction_td: transactionId || ''
                }) : window.gtag('event', actionType)
        );
}

function getUrlParams(url) {
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
    var obj = {};
    if (queryString) {
        queryString = queryString.split('#')[0];
        var arr = queryString.split('&');
        for (var i = 0; i < arr.length; i++) {
            var a = arr[i].split('=');
            var paramName = a[0];
            var paramValue = typeof a[1] === 'undefined' ? true : a[1];

            paramName = paramName.toLowerCase();
            if (typeof paramValue === 'string') {
                paramValue = paramValue.toLowerCase();
            }

            if (paramName.match(/\[(\d+)?\]$/)) {
                var key = paramName.replace(/\[(\d+)?\]/, '');
                if (!obj[key]) obj[key] = [];

                if (paramName.match(/\[\d+\]$/)) {
                    var index = /\[(\d+)\]/.exec(paramName)[1];
                    obj[key][index] = paramValue;
                } else {
                    obj[key].push(paramValue);
                }
            } else {
                if (!obj[paramName]) {
                    obj[paramName] = paramValue;
                } else if (obj[paramName] && typeof obj[paramName] === 'string') {
                    obj[paramName] = [obj[paramName]];
                    obj[paramName].push(paramValue);
                } else {
                    obj[paramName].push(paramValue);
                }
            }
        }
    }
    return obj;
}

(function(){
    if (typeof window === 'undefined') return;

    var isDev = location.host.indexOf('dev.ptmind') !== -1;
    if (isDev) {
        // Yandex.Metrika counter
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(79696396, "init", {
            // trustedDomains: ["dev.ptmind.cn", "devinsight.ptengine.jp", "devx.ptengine.jp"],
            // childIframe:true,
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
        });
    }

    // 默认存储访问参数, 注册时提取(app/signup)
    var urlParams = getUrlParams(location.href);
    var utmParams = {};
    [{
        key: 'utmCampaign',
        val: urlParams.utm_campaign
    }, {
        key: 'utmSource',
        val: urlParams.utm_source
    }, {
        key: 'utmContent',
        val: urlParams.utm_content
    }, {
        key: 'utmMedium',
        val: urlParams.utm_medium
    }, {
        key: 'utmTerm',
        val: urlParams.utm_term
    }].forEach(function(item){
        if (item.val) utmParams[item.key] = item.val;
    })
    Object.keys(utmParams).length > 0 && localStorage.setItem('PT_UTM_PARAMS', JSON.stringify(utmParams))
})();
