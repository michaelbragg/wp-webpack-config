# WP Webpack Config

# Test

1. `npm install`
2. `npm run build`

# Expected

```sh
├── public
│   ├── wp-content
│   │   ├── plugins
│   │   │   └── plugin-example
│   │   │      └── build
│   │   │          ├── example-one
│   │   │          │   ├── block.json
│   │   │          │   ├── index-rtl.css
│   │   │          │   ├── index.asset.php
│   │   │          │   ├── index.css
│   │   │          │   ├── index.js
│   │   │          │   ├── render.php
│   │   │          │   ├── style-insex-rtl.css
│   │   │          │   ├── style-index.css
│   │   │          │   ├── view.asset.php
│   │   │          │   └── view.js
│   │   │          ├── example-two
│   │   │          │   ├── block.json
│   │   │          │   ├── index-rtl.css
│   │   │          │   ├── index.asset.php
│   │   │          │   ├── index.css
│   │   │          │   ├── index.js
│   │   │          │   ├── render.php
│   │   │          │   ├── style-insex-rtl.css
│   │   │          │   ├── style-index.css
│   │   │          │   ├── view.asset.php
│   │   │          │   └── view.js
│   │   │          └── slotfill
│   │   │              ├── index.asset.php
│   │   │              └── index.js
│   │   └── themes
│   │       └── theme-example
│   │           └── assets
│   │               ├── css
│   │               │  ├── global.asset.php
│   │               │  └── global.css
│   │               └── js
│   │                   ├── editor.assets.php
│   │                   ├── editor.js
│   │                   ├── global.asset.php
│   │                   └── global.js
│   └── wp
├── node_modules
├── package.json
└── webpack.config.js
```
