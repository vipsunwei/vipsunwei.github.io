import{_ as n}from"./chunks/ArticleMetadata.dd4bf5dc.js";import{_ as l,c as d,g as c,w as o,b as a,f as h,a as _,i as g,o as i,e as m,j as u}from"./app.960cb299.js";const f="/assets/202102220930199.49039848.png",b="/assets/202102220930299.489e8153.png",R="/assets/202102220930399.27ad58c6.png",k="/assets/202102220930599.91a26966.png",D="/assets/202102220930699.b10802cc.png",M="/assets/202102220930799.9c7a7244.png",x="/assets/202102220930899.0a4b0242.png",v="/assets/202102220930999.73364f10.png",w="/assets/202102220931199.0659f918.png",T="/assets/202102220931299.77f8746f.png",C="/assets/202102220931399.d1820fbe.png",N="/assets/202102220931599.ab2b1118.png",S="/assets/202102220931699.c092997d.png",V="/assets/202102220931799.1b5a2188.png",$="/assets/202102220931899.1fabd5e1.png",A="/assets/202102220931999.53198f6c.png",H="/assets/202102220932199.98893d03.gif",B="/assets/202102220932299.e20248f1.gif",G="/assets/202102220932399.3810ec3e.gif",O="/assets/202102220932599.8af948a6.gif",y="/assets/202102220932699.1495a9b5.gif",I="/assets/202102220932799.3dce9783.gif",L=JSON.parse('{"title":"Redis Desktop Manager 快速入门","description":"","frontmatter":{"title":"Redis Desktop Manager 快速入门","author":"查尔斯","date":"2021/02/22 09:41","categories":["工具四海谈"],"tags":["Redis","管理工具"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"下载","slug":"下载","link":"#下载","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"连接服务器","slug":"连接服务器","link":"#连接服务器","children":[]},{"level":2,"title":"常见使用","slug":"常见使用","link":"#常见使用","children":[{"level":3,"title":"查看所有数据库","slug":"查看所有数据库","link":"#查看所有数据库","children":[]},{"level":3,"title":"存储键","slug":"存储键","link":"#存储键","children":[]},{"level":3,"title":"修改值","slug":"修改值","link":"#修改值","children":[]},{"level":3,"title":"修改过期时间","slug":"修改过期时间","link":"#修改过期时间","children":[]},{"level":3,"title":"删除键","slug":"删除键","link":"#删除键","children":[]},{"level":3,"title":"命令行操作","slug":"命令行操作","link":"#命令行操作","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"relativePath":"categories/tools/2021/02/22/RDM快速入门.md","lastUpdated":1677831742000}'),P={name:"categories/tools/2021/02/22/RDM快速入门.md"},E=a("h1",{id:"redis-desktop-manager-快速入门",tabindex:"-1"},[h("Redis Desktop Manager 快速入门 "),a("a",{class:"header-anchor",href:"#redis-desktop-manager-快速入门","aria-hidden":"true"},"#")],-1),F=_('<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-hidden="true">#</a></h2><p>这个时代，Redis 多流行啊，10 个程序员起码有 8 个听过用过。人多了，自然有人不太喜欢使用命令行来直接操作 Redis。所以，在官方没有提供的情况下，大家一直都在寻求一款好用的 Redis 客户端管理工具，而 RDM 这款软件，在咱们国内 IT 圈子里不说人尽皆知吧，也可以说的上是小有名气的。</p><div class="tip custom-block"><p class="custom-block-title">简介</p><p>RDM，全称 Redis Desktop Manager。它是一个快速、简单、支持跨平台的 Redis 桌面管理工具，基于 Qt 5 开发，支持通过 SSH Tunnel 连接 [1]。它开源在了 GitHub [2] 上。</p></div><p>长下面这样。在当前 Redis 客户端工具圈里可以说的上是 “高颜值”，而且也比较实用。</p><p><img src="'+f+'" alt="202102220930199"></p><p>但是很可惜，0.9.3.817 是它的最后一个免费版。</p><p>你可能会比较好奇，它不是开源的吗？的确，它是开源的，但也仅仅是开源，即开放源代码。而大多数开源软件都会免费提供安装包，但 RDM 从 0.9.3.817 版本开始就不再免费提供了。</p><p>这意味着什么？如果你懂一定的相关技术，自然可以利用它的源代码自己编译一个。而如果你不懂？不好意思，那就买它吧！看看下方的价格，其实也算良心价了。</p><p><img src="'+b+'" alt="202102220930299"></p><p>当然，笔者不是来刺激你的，早就给你准备好了一份 RDM 的第三方编译版 。</p><p><img src="'+R+'" alt="202102220930399"></p><p>在 GitHub 上，这类 RDM 第三方编译版还是挺多的，你也可以自己去搜索一下。</p><p><img src="'+k+'" alt="202102220930599"></p><h2 id="下载" tabindex="-1">下载 <a class="header-anchor" href="#下载" aria-hidden="true">#</a></h2><p>笔者这里以 rdm-builder 这个 GitHub 仓库为示例，来介绍下第三方编译版的 Windows 版 RDM 下载和安装。</p><p>打开这个仓库之后，在右侧的 Releases 显示它有15个发行版，最新的是 v2021.2 版，这也是随着官方来更新的。等你看到这篇文章的时候，或许它已经变成了更新的版本。</p><p>点击最新发行版，跳转到版本下载页面。</p><p><img src="'+D+'" alt="202102220930699"></p><p>然后再点击 <code>xxx.exe</code> 即可开始下载这个第三方编译的 Windows 版 RDM 了。</p><p><img src="'+M+'" alt="202102220930799"></p><p>下载好了，一个普普通通的可执行程序。</p><p><img src="'+x+'" alt="202102220930899"></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><p>接下来，我们 “傻瓜式” 安装即可。</p><p><img src="'+v+'" alt="202102220930999"></p><p><img src="'+w+'" alt="202102220931199"></p><p>改动一下安装位置，这个目录专门放开发工具，是笔者以前逐渐养成的个人习惯。</p><p><img src="'+T+'" alt="202102220931299"></p><p><img src="'+C+'" alt="202102220931399"></p><p><img src="'+N+'" alt="202102220931599"></p><p><img src="'+S+'" alt="202102220931699"></p><h2 id="连接服务器" tabindex="-1">连接服务器 <a class="header-anchor" href="#连接服务器" aria-hidden="true">#</a></h2><p>安装完成后，直接打开。因为不是最新版，所以每次都会弹出这个更新提示框。别管，直接点 [OK] 就行。</p><p><img src="'+V+'" alt="202102220931799"></p><p>RDM 使用起来还是比较容易的，点击左上角的 [连接到 Redis 服务器]。</p><p><img src="'+$+'" alt="202102220931899"></p><p>进入到连接设置之后，依次填写 [连接名称，Redis 服务器地址，Redis 密码（可选），用户名（可选）]，可以先点击 [测试连接] 查看下是否可以连接成功。</p><p><img src="'+A+'" alt="202102220931999"></p><h2 id="常见使用" tabindex="-1">常见使用 <a class="header-anchor" href="#常见使用" aria-hidden="true">#</a></h2><p>虽然，本篇笔者重点是给你安利第三方编译的 RDM，但思来想去还是决定为部分小白们介绍一下 RDM 的简易操作，会用的老白们就不用看了。</p><h3 id="查看所有数据库" tabindex="-1">查看所有数据库 <a class="header-anchor" href="#查看所有数据库" aria-hidden="true">#</a></h3><p>测试连接成功后，双击连接名，就可以看到当前 Redis 服务器的所有数据库。</p><p><img src="'+H+'" alt="202102220932199"></p><h3 id="存储键" tabindex="-1">存储键 <a class="header-anchor" href="#存储键" aria-hidden="true">#</a></h3><p><img src="'+B+'" alt="202102220932299"></p><h3 id="修改值" tabindex="-1">修改值 <a class="header-anchor" href="#修改值" aria-hidden="true">#</a></h3><p><img src="'+G+'" alt="202102220932399"></p><h3 id="修改过期时间" tabindex="-1">修改过期时间 <a class="header-anchor" href="#修改过期时间" aria-hidden="true">#</a></h3><p><img src="'+O+'" alt="202102220932599"></p><h3 id="删除键" tabindex="-1">删除键 <a class="header-anchor" href="#删除键" aria-hidden="true">#</a></h3><p>刚才我们给 <code>name</code> 这个键设置了5秒过期之后，唯一存储的数据也没了，我们再新建一个，然后来测试一下删除功能。</p><p><img src="'+y+'" alt="202102220932699"></p><h3 id="命令行操作" tabindex="-1">命令行操作 <a class="header-anchor" href="#命令行操作" aria-hidden="true">#</a></h3><p>不仅如此，当你想用命令行操作时，RDM 还可以直接打开控制台连接 Redis 服务器。</p><p><img src="'+I+'" alt="202102220932799"></p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-hidden="true">#</a></h2><p>[1]Redis Desktop Manager 介绍：<a href="https://www.oschina.net/p/redisdesktop?hmsr=aladdin1e1" target="_blank" rel="noreferrer">https://www.oschina.net/p/redisdesktop?hmsr=aladdin1e1</a></p><p>[2]RDM GitHub 地址：<a href="https://github.com/uglide/RedisDesktopManager/" target="_blank" rel="noreferrer">https://github.com/uglide/RedisDesktopManager/</a></p><p>[3]RDM 的第三方编译版：<a href="https://github.com/FuckDoctors/rdm-builder" target="_blank" rel="noreferrer">https://github.com/FuckDoctors/rdm-builder</a></p>',59);function W(e,j,J,K,Q,U){const r=n,p=g("ClientOnly");return i(),d("div",null,[E,c(p,null,{default:o(()=>{var s,t;return[(((s=e.$frontmatter)==null?void 0:s.aside)??!0)&&(((t=e.$frontmatter)==null?void 0:t.showArticleMetadata)??!0)?(i(),m(r,{key:0,article:e.$frontmatter},null,8,["article"])):u("",!0)]}),_:1}),F])}const X=l(P,[["render",W]]);export{L as __pageData,X as default};
