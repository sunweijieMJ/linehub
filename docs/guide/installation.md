---
title: 安装
---

# 安装

## 环境支持

xxx 可以在支持 [ES2018](https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally) 和 [ResizeObserver](https://caniuse.com/resizeobserver) 的浏览器上运行.
如果您需要支持旧版本的浏览器，请添加 [Babel](https://babeljs.io/) 和相应的 Polyfill 。

由于 Vue 3 不再支持 IE11，xxx 也不再支持 IE 浏览器。

| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Edge ≥ 79                                                              | Firefox ≥ 78                                                                      | Chrome ≥ 64                                                                    | Safari ≥ 12                                                                    |

### 版本

xxx 目前还处于快速开发迭代中.

[![Linehub version badge](https://img.shields.io/npm/v/linehub.svg?style=flat-square)](https://www.npmjs.org/package/linehub)

## 使用软件包管理器安装

**我们建议使用软件包管理器 (NPM, [Yarn](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.io/)) 安装 xxx**

```shell
# Choose a package manager you like.

# NPM
$ npm install xxx --save

# Yarn
$ yarn add xxx

# pnpm
$ pnpm install xxx
```

如果您的网络环境不好，建议使用相关镜像服务 [cnpm](https://github.com/cnpm/cnpm) or [Alibaba](https://registry.npm.taobao.org).
