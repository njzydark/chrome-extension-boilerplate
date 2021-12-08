# chrome-extension-boilerplate

A chrome extension boilerplate by Webpack5 + TS + React

## Features

- Support manifest v2 and v3
- Support HMR
- Support react fast refresh
- Support auto reload when content scripts change
- Support dynamic generate content scripts
- Support use vscode to debug content scripts, popup page, options page and background
- Out of the box Eslint and Prettier configurations
- Intelligence when you change manifest config (only v2)

> Major features is by [chrome-extension-reloader-webpack-plugin](https://github.com/njzydark/chrome-extension-reloader-webpack-plugin), you can use this plugin to create own your project

## Demo Video

https://user-images.githubusercontent.com/19601720/127956421-8d6521dd-f6cf-460b-8e5f-750b5acea3a3.mp4

## Usage

```bash
# install pnpm if pnpm is not installed
npm i -g pnpm
# install dependcy
pnpm install
# development
pnpm run dev
# build
pnpm run build
# analy build assets
pnpm run analy
```

## Manifest Version

change manifest version in `package.json`, default version is **2**

```json
{
  ...
  "chromeExtension": {
    "mainifest-version": 2 or 3
  },
  ...
}
```

## Content Scripts

All content script in `contents` directory will dynamic generate（**There can only be two levels of nesting**）

```txt
contents/test.ts 🆗

contents/test/index.ts 🆗

contents/test/a.ts 🚫

contents/test/t/index.ts 🚫
```

## React Refresh

This project is using custom plugin [https://github.com/njzydark/mini-react-refresh-webpack-plugin](https://github.com/njzydark/mini-react-refresh-webpack-plugin)
