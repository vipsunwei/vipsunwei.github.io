---
title: SynthWave '84 让代码光彩夺目的 VSCode 主题
date: 2022-04-19 12:00:00
aside: true
tags:
  - VSCode
---

:::tip

工欲善其事必先利其器

:::

<!-- more -->

![SynthWave84](/images/SynthWave84.jpg)

## 安装 SynthWave '84 主题

给 `VSCode` 安装 `SynthWave '84` 主题

- 一种方法：直接在 `VSCode` 扩展里搜索 `SynthWave '84` ，找到之后点击 `install` 即可进行安装；

- 另一种方法：从 `VS Marketplace` 安装基本主题 [`SynthWave '84`](https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode) 找到`SynthWave '84`后，点击 `install` 按钮，会自动调起本机安装好的 `VSCode` 编辑器，按提示进行安装即可。

访问命令面板并引入命令，你可以使用 `F1`（所有系统），`Ctrl+Shift+P`（`Windows or Linux`），`Cmd+Shift+P`（`Mac OS X`）

输入 `Color Theme` 选中 `Preferences:Color Theme`， 回车后出现主题列表，在列表中选择 `SynthWave '84` 然后回车确认

以上就是 `Synthwave'84` 的日常使用方式。

## 启用发光

1. 从 `VS Marketplace` 安装 [Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css) ，这个插件可以自定义 `VSCode` 的 `CSS` 和 `JS` 。

2. 从 `GitHub` 上把 [synthwave84.css](https://github.com/robb0wen/synthwave-vscode/blob/master/synthwave84.css) ，保存到本地你喜欢的位置上。

3. 在 `VSCode` 配置文件`settings.json`中增加配置如下：

`Mac` ：

```json
{
  "vscode_custom_css.imports": ["file:///your/path/synthwave84.css"],
  "vscode_custom_css.policy": true
}
```

`Windows` ：

```json
{
  "vscode_custom_css.imports": ["file:///C:/your/path/synthwave84.css"],
  "vscode_custom_css.policy": true
}
```

> 以上 URL 为示例，添加配置时将以上 URL 替换为自己本地 URL，  
> 确保你在路径中包含了文件协议 `file://`。

以上配置完成后，只需要在命令面板输入命令开启自定义即可。

## 扩展命令

访问命令面板并引入命令，你可以使用 `F1`（所有系统），`Ctrl+Shift+P`（`Windows or Linux`），`Cmd+Shift+P`（`Mac OS X`）

- `Enable Custom CSS and JS` : 允许自定义 `CSS` 和 `JS` 。

- `Disable Custom CSS and JS` : 禁用自定义 `CSS` 和 `JS` 。

- `Reload Custom CSS and JS` : 禁用自定义然后在重新启用自定义。

> 输入命令，选中，回车执行， `VSCode` 会弹出提示让你重新启动 `VSCode` ，点击重新启动即可。

## 启用字体连字

![FiraCode](/images/FiraCode.png)

需要安装支持 `fontLigatures` 的字体， 我安装的是 `Fira Code`

安装方法直接去 `GitHub` 看吧，我就不啰嗦了。  
[**查看 Fira Code 安装方法**](https://github.com/tonsky/FiraCode/wiki/Installing)

字体安装好之后，打开 `VSCode` 配置文件 `settings.json` ，修改或者增加以下配置

```json
{
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true
}
```

如果没生效，那你可能需要重新启动一下 `VSCode` 。
