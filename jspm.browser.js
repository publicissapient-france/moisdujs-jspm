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
      "moisdujs-jspm/slot-form/x-slot-form.js",
      "moisdujs-jspm/slot-form/x-slot-form.html!github:systemjs/plugin-text@0.0.7/text.js",
      "github:systemjs/plugin-text@0.0.7.json",
      "moisdujs-jspm/slot-form/x-slot-form.css!github:systemjs/plugin-css@0.1.21/css.js",
      "github:systemjs/plugin-css@0.1.21.json",
      "npm:systemjs-plugin-babel@0.0.10/babel-helpers/inherits.js",
      "npm:systemjs-plugin-babel@0.0.10.json",
      "npm:systemjs-plugin-babel@0.0.10/babel-helpers/possibleConstructorReturn.js",
      "npm:systemjs-plugin-babel@0.0.10/babel-helpers/createClass.js",
      "npm:systemjs-plugin-babel@0.0.10/babel-helpers/classCallCheck.js",
      "moisdujs-jspm/slot-grid/x-slot-grid.js",
      "moisdujs-jspm/slot-grid/x-slot-grid.html!github:systemjs/plugin-text@0.0.7/text.js",
      "moisdujs-jspm/slot-grid/x-slot-grid.css!github:systemjs/plugin-css@0.1.21/css.js",
      "moisdujs-jspm/style/app.scss!github:mobilexag/plugin-sass@0.4.3/index.js",
      "github:mobilexag/plugin-sass@0.4.3.json",
      "github:twbs/bootstrap@3.3.6/dist/js/bootstrap.js",
      "github:twbs/bootstrap@3.3.6.json",
      "npm:jquery@2.2.4/dist/jquery.js",
      "npm:jquery@2.2.4.json"
    ]
  }
});
