SystemJS.config({
  baseURL: "/",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "moisdujs-jspm/": "src/"
  },
  bundles: {
    "build.js": [
      "moisdujs-jspm/app.js",
      "moisdujs-jspm/slot-grid/x-slot-grid.js",
      "moisdujs-jspm/slot-grid/x-slot-grid.css!github:systemjs/plugin-css@0.1.21/css.js",
      "github:systemjs/plugin-css@0.1.21.json",
      "moisdujs-jspm/slot-grid/x-slot-grid.html!github:systemjs/plugin-text@0.0.8/text.js",
      "github:systemjs/plugin-text@0.0.8.json",
      "npm:systemjs-plugin-babel@0.0.10/babel-helpers/inherits.js",
      "npm:systemjs-plugin-babel@0.0.10.json",
      "npm:systemjs-plugin-babel@0.0.10/babel-helpers/possibleConstructorReturn.js",
      "npm:systemjs-plugin-babel@0.0.10/babel-helpers/createClass.js",
      "npm:systemjs-plugin-babel@0.0.10/babel-helpers/classCallCheck.js",
      "moisdujs-jspm/slot-form/x-slot-form.js",
      "moisdujs-jspm/slot-form/x-slot-form.css!github:systemjs/plugin-css@0.1.21/css.js",
      "moisdujs-jspm/slot-form/x-slot-form.html!github:systemjs/plugin-text@0.0.8/text.js",
      "moisdujs-jspm/style/app.scss!github:mobilexag/plugin-sass@0.4.3/index.js",
      "github:mobilexag/plugin-sass@0.4.3.json"
    ]
  }
});
