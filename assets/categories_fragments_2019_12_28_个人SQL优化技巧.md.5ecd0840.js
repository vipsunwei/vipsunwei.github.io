import{_ as i}from"./chunks/ArticleMetadata.dd4bf5dc.js";import{_ as D,c as A,b as s,f as a,g as n,w as d,a as p,i as c,o as r,e as B,j as F}from"./app.960cb299.js";const w=JSON.parse('{"title":"个人 SQL 优化技巧","description":"","frontmatter":{"title":"个人 SQL 优化技巧","author":"查尔斯","date":"2019/12/28 10:00","isTop":true,"categories":["杂碎逆袭史"],"tags":["SQL","SQL优化"]},"headers":[{"level":2,"title":"查询优化","slug":"查询优化","link":"#查询优化","children":[{"level":3,"title":"如果确定结果只有一条，使用 LIMIT 1","slug":"如果确定结果只有一条-使用-limit-1","link":"#如果确定结果只有一条-使用-limit-1","children":[]},{"level":3,"title":"避免隐式类型转换","slug":"避免隐式类型转换","link":"#避免隐式类型转换","children":[]}]},{"level":2,"title":"数据库表设计","slug":"数据库表设计","link":"#数据库表设计","children":[{"level":3,"title":"列名带上前缀","slug":"列名带上前缀","link":"#列名带上前缀","children":[]},{"level":3,"title":"非负数列添加UNSIGNED无符号约束","slug":"非负数列添加unsigned无符号约束","link":"#非负数列添加unsigned无符号约束","children":[]},{"level":3,"title":"合理采用整数类型","slug":"合理采用整数类型","link":"#合理采用整数类型","children":[]},{"level":3,"title":"布尔列采用bit类型","slug":"布尔列采用bit类型","link":"#布尔列采用bit类型","children":[]}]},{"level":2,"title":"数据库设计","slug":"数据库设计","link":"#数据库设计","children":[{"level":3,"title":"采用utf8mb4编码","slug":"采用utf8mb4编码","link":"#采用utf8mb4编码","children":[]}]}],"relativePath":"categories/fragments/2019/12/28/个人SQL优化技巧.md","lastUpdated":1677831742000}'),_={name:"categories/fragments/2019/12/28/个人SQL优化技巧.md"},E={id:"个人-sql-优化技巧",tabindex:"-1"},h=s("a",{class:"header-anchor",href:"#个人-sql-优化技巧","aria-hidden":"true"},"#",-1),u=s("h2",{id:"查询优化",tabindex:"-1"},[a("查询优化 "),s("a",{class:"header-anchor",href:"#查询优化","aria-hidden":"true"},"#")],-1),T={id:"如果确定结果只有一条-使用-limit-1",tabindex:"-1"},b=s("a",{class:"header-anchor",href:"#如果确定结果只有一条-使用-limit-1","aria-hidden":"true"},"#",-1),g=p('<p>我们在根据一个或多个条件查询数据时，如果确定查询结果只有一条，可以在结尾处添加 LIMIT 1 进行限制。</p><p>这样既可以让 EXPLAIN 中的 type 达到 const 类型，又可以免去担忧在程序中出现接收是单个对象却返回了一个集合对象的异常问题。</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-oWfWJ" id="tab-5AU7ncj" checked="checked"><label for="tab-5AU7ncj">正例</label><input type="radio" name="group-oWfWJ" id="tab-eEa8YpL"><label for="tab-eEa8YpL">反例</label></div><div class="blocks"><div class="language-sql active"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># email 不是主键，也没有设置唯一约束，根据熵增定律，查询结果是有可能会出现多条的</span></span>\n<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">sys_user</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">charles7c@126.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">LIMIT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">;</span></span>\n<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"># email 不是主键，也没有设置唯一约束，根据熵增定律，查询结果是有可能会出现多条的</span></span>\n<span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">FROM</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">`sys_user`</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">WHERE</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">`email`</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;charles7c@126.com&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">LIMIT</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>\n<span class="line"></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># user_id 是主键，主键是非空唯一的，那么不需要添加 </span><span style="color:#F78C6C;">LIMIT</span><span style="color:#A6ACCD;"> 进行限制</span></span>\n<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">sys_user</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">user_id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">;</span></span>\n<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"># user_id 是主键，主键是非空唯一的，那么不需要添加 </span><span style="color:#C678DD;">LIMIT</span><span style="color:#ABB2BF;"> 进行限制</span></span>\n<span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">FROM</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">`sys_user`</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">WHERE</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">`user_id`</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>\n<span class="line"></span></code></pre></div></div></div>',3),N={id:"避免隐式类型转换",tabindex:"-1"},m=s("a",{class:"header-anchor",href:"#避免隐式类型转换","aria-hidden":"true"},"#",-1),v=p('<p>我们在使用 MySQL 时，或多或少都感受过 MySQL 的隐式类型转换。例如：user_id 是整数类型，但是依然可以使用字符串类型数据来进行判断。MySQL 帮你做完这种隐式类型转换是有代价的，什么代价呢？ <strong>索引不再生效了而已</strong> 。</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-hdVeC" id="tab-z7AA1hb" checked="checked"><label for="tab-z7AA1hb">正例</label><input type="radio" name="group-hdVeC" id="tab-Az1qVED"><label for="tab-Az1qVED">反例</label></div><div class="blocks"><div class="language-sql active"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">sys_user</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">user_id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">;</span></span>\n<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">FROM</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">`sys_user`</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">WHERE</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">`user_id`</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">;</span></span>\n<span class="line"></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">sys_user</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">user_id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>\n<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">FROM</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">`sys_user`</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">WHERE</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">`user_id`</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;10&#39;</span><span style="color:#ABB2BF;">;</span></span>\n<span class="line"></span></code></pre></div></div></div><h2 id="数据库表设计" tabindex="-1">数据库表设计 <a class="header-anchor" href="#数据库表设计" aria-hidden="true">#</a></h2>',3),f={id:"列名带上前缀",tabindex:"-1"},I=s("a",{class:"header-anchor",href:"#列名带上前缀","aria-hidden":"true"},"#",-1),L=p('<p>部分列名带上前缀或缩写，可以有效减少在连接查询、ORM 映射等场景下刻意起别名或思考区分不同的问题。</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-8Bvn5" id="tab-W2Ixzx_" checked="checked"><label for="tab-W2Ixzx_">正例</label></div><div class="blocks"><div class="language-sql active"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> `</span><span style="color:#82AAFF;">sys_customer</span><span style="color:#A6ACCD;">` (</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">customer_id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bigint</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">) UNSIGNED </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> AUTO_INCREMENT COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">客户ID</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">customer_name</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">varchar</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">255</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">客户名称</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">PRIMARY KEY</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">customer_id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">USING</span><span style="color:#A6ACCD;"> BTREE,</span></span>\n<span class="line"><span style="color:#A6ACCD;">) COMMENT </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">客户表</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> `</span><span style="color:#82AAFF;">sys_contact_user</span><span style="color:#A6ACCD;">` (</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">contact_user_id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bigint</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">) UNSIGNED </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> AUTO_INCREMENT COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">联系人ID</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">contact_user_name</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">varchar</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">255</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">联系人名称</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">customer_id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bigint</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">) UNSIGNED </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">客户ID</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">PRIMARY KEY</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">contact_user_id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">USING</span><span style="color:#A6ACCD;"> BTREE,</span></span>\n<span class="line"><span style="color:#A6ACCD;">) COMMENT </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">联系人表</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;"># 连接查询，你完全不需要用脑去考虑到底是 c.</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> 还是 cu.</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">customer_id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> 的问题，都是 </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">customer_id</span><span style="color:#89DDFF;">`</span></span>\n<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">sys_customer</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> c </span></span>\n<span class="line"><span style="color:#F78C6C;">LEFT JOIN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">sys_contact_user</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> cu </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> c.</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">customer_id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> cu.</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">customer_id</span><span style="color:#89DDFF;">`</span></span>\n<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#C678DD;">CREATE</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">TABLE</span><span style="color:#ABB2BF;"> `</span><span style="color:#61AFEF;">sys_customer</span><span style="color:#ABB2BF;">` (</span></span>\n<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">`customer_id`</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">bigint</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">) UNSIGNED </span><span style="color:#C678DD;">NOT NULL</span><span style="color:#ABB2BF;"> AUTO_INCREMENT COMMENT </span><span style="color:#98C379;">&#39;客户ID&#39;</span><span style="color:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">`customer_name`</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">varchar</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">NOT NULL</span><span style="color:#ABB2BF;"> COMMENT </span><span style="color:#98C379;">&#39;客户名称&#39;</span><span style="color:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">PRIMARY KEY</span><span style="color:#ABB2BF;"> (</span><span style="color:#98C379;">`customer_id`</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">USING</span><span style="color:#ABB2BF;"> BTREE,</span></span>\n<span class="line"><span style="color:#ABB2BF;">) COMMENT </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;客户表&#39;</span><span style="color:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD;">CREATE</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">TABLE</span><span style="color:#ABB2BF;"> `</span><span style="color:#61AFEF;">sys_contact_user</span><span style="color:#ABB2BF;">` (</span></span>\n<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">`contact_user_id`</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">bigint</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">) UNSIGNED </span><span style="color:#C678DD;">NOT NULL</span><span style="color:#ABB2BF;"> AUTO_INCREMENT COMMENT </span><span style="color:#98C379;">&#39;联系人ID&#39;</span><span style="color:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">`contact_user_name`</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">varchar</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">NOT NULL</span><span style="color:#ABB2BF;"> COMMENT </span><span style="color:#98C379;">&#39;联系人名称&#39;</span><span style="color:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">`customer_id`</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">bigint</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">) UNSIGNED </span><span style="color:#C678DD;">NOT NULL</span><span style="color:#ABB2BF;"> COMMENT </span><span style="color:#98C379;">&#39;客户ID&#39;</span><span style="color:#ABB2BF;">,</span></span>\n<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">PRIMARY KEY</span><span style="color:#ABB2BF;"> (</span><span style="color:#98C379;">`contact_user_id`</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">USING</span><span style="color:#ABB2BF;"> BTREE,</span></span>\n<span class="line"><span style="color:#ABB2BF;">) COMMENT </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;联系人表&#39;</span><span style="color:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF;"># 连接查询，你完全不需要用脑去考虑到底是 c.</span><span style="color:#98C379;">`id`</span><span style="color:#ABB2BF;"> 还是 cu.</span><span style="color:#98C379;">`customer_id`</span><span style="color:#ABB2BF;"> 的问题，都是 </span><span style="color:#98C379;">`customer_id`</span></span>\n<span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">FROM</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">`sys_customer`</span><span style="color:#ABB2BF;"> c </span></span>\n<span class="line"><span style="color:#C678DD;">LEFT JOIN</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">`sys_contact_user`</span><span style="color:#ABB2BF;"> cu </span><span style="color:#C678DD;">ON</span><span style="color:#ABB2BF;"> c.</span><span style="color:#98C379;">`customer_id`</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> cu.</span><span style="color:#98C379;">`customer_id`</span></span>\n<span class="line"></span></code></pre></div></div></div>',2),M={id:"非负数列添加unsigned无符号约束",tabindex:"-1"},x=s("a",{class:"header-anchor",href:"#非负数列添加unsigned无符号约束","aria-hidden":"true"},"#",-1),S=p(`<p>在大部分的数据存储场景中，我们只会使用正整数，如果能确定该列为非负数，建议添加 <code>UNSIGNED</code> 无符号约束。</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-YKj1s" id="tab-ETcUg6S" checked="checked"><label for="tab-ETcUg6S">正例</label></div><div class="blocks"><div class="language-sql active"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># 不添加 UNSIGNED 约束，取值范围</span></span>
<span class="line"><span style="color:#F78C6C;">TINYINT</span><span style="color:#A6ACCD;">：[-128, 127]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 添加 UNSIGNED 约束，取值范围</span></span>
<span class="line"><span style="color:#F78C6C;">TINYINT</span><span style="color:#A6ACCD;">：[0, 255]</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"># 不添加 UNSIGNED 约束，取值范围</span></span>
<span class="line"><span style="color:#C678DD;">TINYINT</span><span style="color:#ABB2BF;">：</span><span style="color:#E06C75;">[-128, 127]</span></span>
<span class="line"><span style="color:#ABB2BF;"># 添加 UNSIGNED 约束，取值范围</span></span>
<span class="line"><span style="color:#C678DD;">TINYINT</span><span style="color:#ABB2BF;">：</span><span style="color:#E06C75;">[0, 255]</span></span>
<span class="line"></span></code></pre></div></div></div>`,2),k={id:"合理采用整数类型",tabindex:"-1"},O=s("a",{class:"header-anchor",href:"#合理采用整数类型","aria-hidden":"true"},"#",-1),R=p('<p>例如：状态类的信息，状态再多能有多少个，采用 <code>TINYINT</code> 即可，减少存储空间占用。</p><p>下方表数据整理于：<a href="https://dev.mysql.com/doc/refman/5.7/en/integer-types.html" target="_blank" rel="noreferrer">MySQL 5.7官方文档/数据类型/数值数据类型/整数类型</a></p><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">存储（字节）</th><th style="text-align:left;">取值范围</th><th style="text-align:left;">取值范围（无符号）</th></tr></thead><tbody><tr><td style="text-align:left;">TINYINT</td><td style="text-align:left;">1</td><td style="text-align:left;">[-128, 127]</td><td style="text-align:left;">[0, 255]</td></tr><tr><td style="text-align:left;">SMALLINT</td><td style="text-align:left;">2</td><td style="text-align:left;">[-32768, 32767]</td><td style="text-align:left;">[0, 65535]</td></tr><tr><td style="text-align:left;">MEDIUMINT</td><td style="text-align:left;">3</td><td style="text-align:left;">[-8388608, 8388607]</td><td style="text-align:left;">[0, 16777215]</td></tr><tr><td style="text-align:left;">INT</td><td style="text-align:left;">4</td><td style="text-align:left;">[-2147483648, 2147483647]</td><td style="text-align:left;">[0, 4294967295]</td></tr><tr><td style="text-align:left;">BIGINT</td><td style="text-align:left;">8</td><td style="text-align:left;">[-2^63^, 2^63^-1]</td><td style="text-align:left;">[0, 2^64^-1]</td></tr></tbody></table>',3),U={id:"布尔列采用bit类型",tabindex:"-1"},V=s("a",{class:"header-anchor",href:"#布尔列采用bit类型","aria-hidden":"true"},"#",-1),q=p(`<p>例如：是否删除这种只有两种状态的信息，在表设计时建议对该列设置 <code>bit</code> 类型（0表示否/假/false，1表示是/真/true），在程序语言中可以采用 boolean 类型对应。</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-Zzu0m" id="tab-XGbZKqC" checked="checked"><label for="tab-XGbZKqC">SQL</label><input type="radio" name="group-Zzu0m" id="tab-yTxT__U"><label for="tab-yTxT__U">Java</label></div><div class="blocks"><div class="language-sql active"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">is_deleted</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bit</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DEFAULT</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">是否已删除（0否 1是）</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#98C379;">\`is_deleted\`</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">bit</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">NOT NULL</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">DEFAULT</span><span style="color:#ABB2BF;"> b</span><span style="color:#98C379;">&#39;0&#39;</span><span style="color:#ABB2BF;"> COMMENT </span><span style="color:#98C379;">&#39;是否已删除（0否 1是）&#39;</span></span>
<span class="line"></span></code></pre></div><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Data</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 是否已删除（0否 1是）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Boolean</span><span style="color:#A6ACCD;"> isDeleted</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">@</span><span style="color:#E5C07B;">Data</span></span>
<span class="line"><span style="color:#C678DD;">public</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">class</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">User</span><span style="color:#E06C75;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * 是否已删除（0否 1是）</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">private</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">Boolean</span><span style="color:#E06C75;"> isDeleted</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div></div></div><h2 id="数据库设计" tabindex="-1">数据库设计 <a class="header-anchor" href="#数据库设计" aria-hidden="true">#</a></h2>`,3),G={id:"采用utf8mb4编码",tabindex:"-1"},P=s("a",{class:"header-anchor",href:"#采用utf8mb4编码","aria-hidden":"true"},"#",-1),Y=p('<div class="tip custom-block"><p class="custom-block-title">如果要存储特殊字符（例如：emoij表情符），使用 utf8mb4 编码。</p><p>MySQL 5.5.3 后增加了一个新的编码： <code>utf8mb4</code> ，其中 mb4 是 most bytes 4 的意思，用于兼容四字节的 unicode。</p><p><code>utf8mb4</code> 是 utf8 的超集，除了将编码改为 <code>utf8mb4</code> 外不需要做其他转换。</p><p>设计数据库时如果想要允许用户使用特殊符号，最好使用 <code>utf8mb4</code> 编码来存储，使得数据库有更好的兼容性，但是这样设计会导致耗费更多的存储空间。</p></div>',1);function Q(o,W,z,H,j,K){const l=c("Badge"),y=i,C=c("ClientOnly");return r(),A("div",null,[s("h1",E,[a("个人 SQL 优化技巧 "),n(l,{text:"持续更新",type:"warning"}),a(),h]),n(C,null,{default:d(()=>{var e,t;return[(((e=o.$frontmatter)==null?void 0:e.aside)??!0)&&(((t=o.$frontmatter)==null?void 0:t.showArticleMetadata)??!0)?(r(),B(y,{key:0,article:o.$frontmatter},null,8,["article"])):F("",!0)]}),_:1}),u,s("h3",T,[a("如果确定结果只有一条，使用 LIMIT 1 "),n(l,{text:"建议"}),a(),b]),g,s("h3",N,[a("避免隐式类型转换 "),n(l,{text:"强制",type:"danger"}),a(),m]),v,s("h3",f,[a("列名带上前缀 "),n(l,{text:"建议"}),a(),I]),L,s("h3",M,[a("非负数列添加UNSIGNED无符号约束 "),n(l,{text:"建议"}),a(),x]),S,s("h3",k,[a("合理采用整数类型 "),n(l,{text:"建议"}),a(),O]),R,s("h3",U,[a("布尔列采用bit类型 "),n(l,{text:"建议"}),a(),V]),q,s("h3",G,[a("采用utf8mb4编码 "),n(l,{text:"建议"}),a(),P]),Y])}const Z=D(_,[["render",Q]]);export{w as __pageData,Z as default};
