var klaroConfig = {
    elementID: 'klaro',
    storageMethod: 'cookie',
    cookieName: 'klaro',
    cookieExpiresAfterDays: 365,
    privacyPolicy: '/top/privacy',

    // Defines the default state for applications (true=enabled by default).
    default: false,

    // If "mustConsent" is set to true, Klaro will directly display the consent
    // manager modal and not allow the user to close it before having actively
    // consented or declines the use of third-party apps.
    mustConsent: false,

    // Show "accept all" to accept all apps instead of "ok" that only accepts
    // required and "default: true" apps
    acceptAll: true,

    // replace "decline" with cookie manager modal
    hideDeclineAll: false,

    // You can define the UI language directly here. If undefined, Klaro will
    // use the value given in the global "lang" variable. If that does
    // not exist, it will use the value given in the "lang" attribute of your
    // HTML tag. If that also doesn't exist, it will use 'en'.
    //lang: 'en',

    translations: {
        de: {
            consentModal: {
                description:
                    'Diese Seite nutzt Services und Skripte von Drittanbietern, um Ihre Nutzererfahrung zu verbessern.',
            },
            googleanalytics: {
                description: 'Besucherstatistik von Google',
            },
            purposes: {
                analytics: 'Besucher-Statistiken',
            },
        },
        en: {
            consentModal: {
                description:
                    'This site uses third-party services and scripts to increase your user experience.',
            },
            googleanalytics: {
                description: 'Analytics by Google',
            },
            purposes: {
                analytics: 'Analytics',
            },
        },
    },

    apps: [
        {
            name: 'googleanalytics',
            default: false,
            title: 'Google Analytics',
            purposes: ['analytics'],

            // An optional callback function that will be called each time
            // the consent state for the app changes (true=consented). Passes
            // the `app` config as the second parameter as well.
            callback: function(consent, app) {
              // This is an example callback function.
              console.log(
                'Active User consent for app ' + app.name + ': consent=' + consent
              );
              if (consent) {
                console.log('consented');
                window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
                ga('create', 'UA-158910325-1', 'auto');
                ga('set', 'anonymizeIp', true);
                ga('send', 'pageview');
                var gascript = document.createElement("script");
                gascript.async = true;
                gascript.src = "https://www.google-analytics.com/analytics.js";
                var h = document.getElementsByTagName("head");
                document.getElementsByTagName("head")[0].appendChild(gascript, document.getElementsByTagName("head")[0]);
              }
            },
            required: false,
            optOut: false,
            onlyOnce: true,
        },

    ],
};
