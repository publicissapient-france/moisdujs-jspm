SystemJS.config({
  transpiler: "plugin-babel",
  packages: {
    "moisdujs-jspm": {
      "main": "moisdujs-jspm.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "css": "github:systemjs/plugin-css@0.1.21",
    "jquery": "npm:jquery@2.2.4",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.10",
    "text": "github:systemjs/plugin-text@0.0.8"
  },
  packages: {
    "github:twbs/bootstrap@3.3.6": {
      "map": {
        "jquery": "npm:jquery@2.2.4"
      }
    }
  }
});
