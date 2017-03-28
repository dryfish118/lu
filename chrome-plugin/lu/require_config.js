var STATIC_PRD = {
        "static": document.getElementById("staticPath").value
    },
    STATIC_URL = {
        env: STATIC_PRD
    },
    staticUrl = STATIC_URL.env["static"];
require.config({
        baseUrl: "/list/resource",
        paths: {
            staticParth: staticUrl,
            form: staticUrl + "/config/js/lib/form",
            listLibPath: "listing/module",
            requirePath: "require",
            productDetailPath: "productDetail/module",
            newsPath: "news/module",
            base: "base/base",
            basePath: "base",
            chartsPath: "charts"
        },
        waitSeconds: 90
    }),
    define("require/require_config.js", function() {});