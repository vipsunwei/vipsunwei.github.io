import{_ as s,o as n,c as a,O as l}from"./chunks/framework.3e8d68be.js";const e="/assets/husky-directory.a3c5f300.png",F=JSON.parse('{"title":"Husky 和 Lint-staged 入门指南：Git 提交时自动进行代码校验和格式化","description":"","frontmatter":{"title":"Husky 和 Lint-staged 入门指南：Git 提交时自动进行代码校验和格式化","date":"2023-04-03T18:30:00.000Z","aside":true,"tags":["Vite","Vue3","husky","lint-staged"]},"headers":[],"relativePath":"posts/2023/husky+lint-staged.md","filePath":"posts/2023/husky+lint-staged.md","lastUpdated":1680695128000}'),p={name:"posts/2023/husky+lint-staged.md"},o=l(`<p>大家好, 在上一篇<a href="./vite+vue3+eslint+prettier.html">Vue3+Vite 项目，如何配置 ESLint 和 Prettier 实现代码规范化？</a>中描写了如何给我们的<code>Vite</code>+<code>Vue3</code>项目配置<code>ESLint</code>和<code>Prettier</code>, 此篇我们将记录<code>husky</code>和<code>lint-staged</code>实现<code>git</code>提交代码时对项目代码进行检查与格式化.</p><h2 id="安装-husky-和-lint-staged" tabindex="-1">安装 <code>husky</code> 和 <code>lint-staged</code> <a class="header-anchor" href="#安装-husky-和-lint-staged" aria-label="Permalink to &quot;安装 \`husky\` 和 \`lint-staged\`&quot;">​</a></h2><p>用例：当您想使用其他代码质量工具和 <code>Prettier</code>（例如 <code>ESLint</code>、<code>Styleint</code> 等）时，或者如果您需要对部分暂存文件进行检查时（<code>git add --patch</code>），这很有用。</p><p>在继续操作之前，请确保 <code>Prettier</code> 已安装并位于 <code>devDependencies</code> 中。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dlx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lint-staged</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or</span></span>
<span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lint-staged</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这将安装<code>husky</code>和<code>lint-staged</code>，然后向项目的<code>package.json</code>添加一个配置，该配置将在<code>pre-commit hook</code> 中自动检查并格式化支持的文件。</p><p>在<a href="https://github.com/okonet/lint-staged#configuration" target="_blank" rel="noreferrer">lint-staged</a><code>repo</code> 中阅读更多信息。</p><p><strong>下面是我的操作过程</strong></p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dlx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lint-staged</span></span>
<span class="line"><span style="color:#82AAFF;">..</span><span style="color:#A6ACCD;">./Library/pnpm/store/v3/tmp/dlx-82832  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">+266</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+++++++++++++++++++++++++++</span></span>
<span class="line"><span style="color:#82AAFF;">..</span><span style="color:#A6ACCD;">./Library/pnpm/store/v3/tmp/dlx-82832  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Progress:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">resolved</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">266</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reused</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">227</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">downloaded</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">39</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">added</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">266</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">done</span></span>
<span class="line"><span style="color:#FFCB6B;">Running</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lint-staged...</span></span>
<span class="line"><span style="color:#FFCB6B;">Update</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">package.json</span></span>
<span class="line"><span style="color:#FFCB6B;">Installing</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lint-staged</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">husky...</span></span>
<span class="line"><span style="color:#FFCB6B;">Packages:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+45</span></span>
<span class="line"><span style="color:#FFCB6B;">+++++++++++++++++++++++++++++++++++++++++++++</span></span>
<span class="line"><span style="color:#FFCB6B;">Progress:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">resolved</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">948</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reused</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">907</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">downloaded</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">added</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">45</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">done</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">devDependencies:</span></span>
<span class="line"><span style="color:#FFCB6B;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">husky</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8.0</span><span style="color:#C3E88D;">.3</span></span>
<span class="line"><span style="color:#FFCB6B;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lint-staged</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">13.2</span><span style="color:#C3E88D;">.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Done</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12.6</span><span style="color:#C3E88D;">s</span></span>
<span class="line"><span style="color:#FFCB6B;">husky</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hooks</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">installed</span></span>
<span class="line"><span style="color:#FFCB6B;">husky</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">created</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.husky/pre-commit</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><strong>让我们来看一下<code>package.json</code>中都发生了什么</strong></p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// package.json</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">prepare</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">husky install</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">devDependencies</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">husky</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&gt;=7</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lint-staged</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&gt;=10</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">lint-staged</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// 带着 --cache 执行代码检查后会在项目根目录自动生成一个 .eslintcache 文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">*.{vue,js,jsx,ts,tsx}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eslint --cache --fix</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><strong>让我们来看看 <code>--cache</code> 是干什么的?</strong></p><p>存储有关已处理文件的信息，以便仅对已更改的文件进行操作。启用此选项可以确保只对更改后的文件进行检查，从而显著提高 <code>ESLint</code> 的运行时性能。默认情况下，缓存存储在<code>.eslintcache</code> 中。</p><p>这个文件里边缓存了被检查文件的本地绝对路径, 那么我们每个开发人员执行<code>lint-staged</code>或<code>git</code>提交后生成的<code>.eslintcache</code>里边的路径应该都是不一样的, 我猜可能会出现冲突, 所以建议把这个文件加到<code>.gitignore</code>中忽略掉, 或者也可以选择不使用<code>--cache</code>, 当不使用<code>--cache</code>进行检查时, <code>.eslintcache</code>文件会被自动删掉, 如需了解更多可以查看下面的参考资料</p><p><a href="https://eslint.org/docs/latest/use/command-line-interface#--cache" target="_blank" rel="noreferrer"><code>--cache</code> 参考资料</a></p><p>同时, 在我们的项目根目录增加了一个<code>.husky</code>文件夹, 里边是这样的</p><p><img src="`+e+'" alt=".husky"></p><blockquote><p>注意: 这个执行命令自动生成的, 手动创建的好像不好使, 不过可以自己修改生成后的文件里边的命令, 比如我们用的<code>pnpm</code>包管理器, 就可以修改<code>npx lint-staged</code>为<code>pnpm dlx lint-staged</code></p></blockquote><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>一行命令搞定(推荐)👍🏻</p><p>下一篇<a href="./commitlint+cz.html">使用 commitlint、cz 和 husky 校验 Git 提交信息 release-it 自动发布并生成 CHANGELOG</a>, 将带来<code>commitlint</code>检查<code>git</code>提交<code>message</code>, 使用<code>cz-conventional-changelog</code>帮助强制开发者规范<code>git</code>提交<code>message</code>, <code>release-it</code>自动更新版本号并且自动生成<code>CHANGELOG.md</code></p>',21),c=[o];function t(r,C,y,i,d,D){return n(),a("div",null,c)}const u=s(p,[["render",t]]);export{F as __pageData,u as default};
