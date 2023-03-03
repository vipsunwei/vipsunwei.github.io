import{_ as o}from"./chunks/ArticleMetadata.355516f3.js";import{_ as c,c as r,g as i,w as _,b as l,f as E,a as y,i as A,o as t,e as C,j as u}from"./app.4af0e587.js";const g=JSON.parse('{"title":"修改Git所有提交记录中的作者和邮箱","description":"","frontmatter":{"title":"修改Git所有提交记录中的作者和邮箱","author":"查尔斯","date":"2022/03/27 13:00","categories":["杂碎逆袭史"],"tags":["Git"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"问题解决","slug":"问题解决","link":"#问题解决","children":[]}],"relativePath":"categories/fragments/2022/03/27/修改Git所有提交记录中的作者和邮箱.md","lastUpdated":1677831742000}'),d={name:"categories/fragments/2022/03/27/修改Git所有提交记录中的作者和邮箱.md"},h=l("h1",{id:"修改git所有提交记录中的作者和邮箱",tabindex:"-1"},[E("修改Git所有提交记录中的作者和邮箱 "),l("a",{class:"header-anchor",href:"#修改git所有提交记录中的作者和邮箱","aria-hidden":"true"},"#")],-1),q=y(`<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-hidden="true">#</a></h2><p><strong>C：</strong> 上一篇，笔者介绍了怎么修改 Git 最后一次提交的作者和邮箱信息。那如果你是已经提交了很多次的记录，难道一个个的回退过去修改吗？显然不可能，所以本篇笔者带着大家认识一下如何批量修改 Git 提交记录中的作者和邮箱信息。</p><h2 id="问题解决" tabindex="-1">问题解决 <a class="header-anchor" href="#问题解决" aria-hidden="true">#</a></h2><p>解决方法其实就是编写一个脚本来进行批量替换。</p><ol><li><p>新建一个 sh / bat 格式的脚本文件（如果你是在 cmd 中执行，那就用 bat 格式，如果是在 git bash 中执行就用 sh）</p></li><li><p>复制下方脚本内容到脚本文件中，然后编辑替换好错误邮箱、正确作者和邮箱（如果是在 cmd 中执行，#!/bin/sh 就替换为 #!/bin/bat）</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/bin/sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">filter-branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--env-filter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">WRONG_EMAIL=&quot;错误的邮箱&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">NEW_NAME=&quot;正确的作者名&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">NEW_EMAIL=&quot;正确的邮箱&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">if [ &quot;$GIT_COMMITTER_EMAIL&quot; = &quot;$WRONG_EMAIL&quot; ]</span></span>
<span class="line"><span style="color:#C3E88D;">then</span></span>
<span class="line"><span style="color:#C3E88D;">    export GIT_COMMITTER_NAME=&quot;$NEW_NAME&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">    export GIT_COMMITTER_EMAIL=&quot;$NEW_EMAIL&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">fi</span></span>
<span class="line"><span style="color:#C3E88D;">if [ &quot;$GIT_AUTHOR_EMAIL&quot; = &quot;$WRONG_EMAIL&quot; ]</span></span>
<span class="line"><span style="color:#C3E88D;">then</span></span>
<span class="line"><span style="color:#C3E88D;">    export GIT_AUTHOR_NAME=&quot;$NEW_NAME&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">    export GIT_AUTHOR_EMAIL=&quot;$NEW_EMAIL&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">fi</span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--tag-name-filter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--branches</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--tags</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">#!/bin/sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">filter-branch</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--env-filter</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;</span></span>
<span class="line"><span style="color:#98C379;">WRONG_EMAIL=&quot;错误的邮箱&quot;</span></span>
<span class="line"><span style="color:#98C379;">NEW_NAME=&quot;正确的作者名&quot;</span></span>
<span class="line"><span style="color:#98C379;">NEW_EMAIL=&quot;正确的邮箱&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">if [ &quot;$GIT_COMMITTER_EMAIL&quot; = &quot;$WRONG_EMAIL&quot; ]</span></span>
<span class="line"><span style="color:#98C379;">then</span></span>
<span class="line"><span style="color:#98C379;">    export GIT_COMMITTER_NAME=&quot;$NEW_NAME&quot;</span></span>
<span class="line"><span style="color:#98C379;">    export GIT_COMMITTER_EMAIL=&quot;$NEW_EMAIL&quot;</span></span>
<span class="line"><span style="color:#98C379;">fi</span></span>
<span class="line"><span style="color:#98C379;">if [ &quot;$GIT_AUTHOR_EMAIL&quot; = &quot;$WRONG_EMAIL&quot; ]</span></span>
<span class="line"><span style="color:#98C379;">then</span></span>
<span class="line"><span style="color:#98C379;">    export GIT_AUTHOR_NAME=&quot;$NEW_NAME&quot;</span></span>
<span class="line"><span style="color:#98C379;">    export GIT_AUTHOR_EMAIL=&quot;$NEW_EMAIL&quot;</span></span>
<span class="line"><span style="color:#98C379;">fi</span></span>
<span class="line"><span style="color:#98C379;">&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--tag-name-filter</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">cat</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--branches</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--tags</span></span>
<span class="line"></span></code></pre></div></li><li><p>保存脚本</p></li><li><p>将脚本文件放到要批量修改提交记录的 Git 仓库中（根目录就行）</p></li><li><p>执行脚本</p></li></ol><p>随后你就会看到，先是提示一个 warn 警告，然后它会一条条的修改以往提交记录，如果错误的提交比较多，那就耐心等一会儿吧。</p>`,6);function M(s,I,D,T,N,f){const p=o,e=A("ClientOnly");return t(),r("div",null,[h,i(e,null,{default:_(()=>{var n,a;return[(((n=s.$frontmatter)==null?void 0:n.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(t(),C(p,{key:0,article:s.$frontmatter},null,8,["article"])):u("",!0)]}),_:1}),q])}const m=c(d,[["render",M]]);export{g as __pageData,m as default};
