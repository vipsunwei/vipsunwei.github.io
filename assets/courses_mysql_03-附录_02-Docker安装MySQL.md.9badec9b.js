import{_ as c}from"./chunks/ArticleMetadata.dd4bf5dc.js";import{_ as t,c as r,g as y,w as i,b as l,f as C,a as A,i as B,o as p,e as D,j as d}from"./app.960cb299.js";const q=JSON.parse('{"title":"Docker 安装 MySQL 详细步骤","description":"","frontmatter":{"title":"Docker 安装 MySQL 详细步骤","author":"查尔斯","date":"2022/10/30 17:36","categories":["MySQL快速入门"],"tags":["MySQL","Docker","容器"],"showComment":false},"headers":[{"level":2,"title":"拉取镜像","slug":"拉取镜像","link":"#拉取镜像","children":[]},{"level":2,"title":"运行容器","slug":"运行容器","link":"#运行容器","children":[]},{"level":2,"title":"验证","slug":"验证","link":"#验证","children":[]},{"level":2,"title":"Docker Compose脚本","slug":"docker-compose脚本","link":"#docker-compose脚本","children":[]},{"level":2,"title":"附：安装MariaDB","slug":"附-安装mariadb","link":"#附-安装mariadb","children":[{"level":3,"title":"运行容器","slug":"运行容器-1","link":"#运行容器-1","children":[]},{"level":3,"title":"Docker Compose脚本","slug":"docker-compose脚本-1","link":"#docker-compose脚本-1","children":[]}]}],"relativePath":"courses/mysql/03-附录/02-Docker安装MySQL.md","lastUpdated":1677831742000}'),F={name:"courses/mysql/03-附录/02-Docker安装MySQL.md"},m=l("h1",{id:"docker-安装-mysql-详细步骤",tabindex:"-1"},[C("Docker 安装 MySQL 详细步骤 "),l("a",{class:"header-anchor",href:"#docker-安装-mysql-详细步骤","aria-hidden":"true"},"#")],-1),S=A(`<div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>笔者下面的步骤及配置是基于指定版本的实践，大多数程序大多数情况下在相差不大的版本时可以直接参考。（当然了，即使是非 Docker 方式安装程序也是一样道理）</p></div><h2 id="拉取镜像" tabindex="-1">拉取镜像 <a class="header-anchor" href="#拉取镜像" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>拉取镜像时需要明确镜像版本（Tag）。</p></div><p>不指定版本（Tag）就拉取镜像，那拉取下来的镜像版本（Tag）默认是 <code>latest</code>（最新的）。<code>latest</code> 会跟随 Docker Registry 中的记录变化，现在拉取下来的 <code>latest</code> 是 x1 版本，但隔了一段时间后你在其他机器上再拉取 <code>latest</code> 可能就是 x2 版本了。</p><p>变化的版本，不利于生产环境部署的稳定。无论是后续在其他环境部署还是扩容集群等场景均要求根据架构要求指定好版本。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql:8.0.29</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">docker </span><span style="color:#98C379;">pull</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">mysql:8.0.29</span></span>
<span class="line"></span></code></pre></div><h2 id="运行容器" tabindex="-1">运行容器 <a class="header-anchor" href="#运行容器" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p><strong>下方的配置，切记要根据个人实际情况来修改。</strong></p></div><ul><li>容器的名称</li><li>镜像名称:版本</li><li>是否设置自启动？</li><li>环境变量配置</li><li>是否端口映射？</li><li>映射的话映射到宿主机哪个端口？</li><li>是否挂载卷？</li><li>挂载的话要挂载宿主机哪个目录？</li><li>......</li><li>等自定义配置</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># MYSQL_ROOT_PASSWORD：root 用户密码</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># MYSQL_DATABASE：初始化数据库</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># MYSQL_USER：初始化普通用户</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># MYSQL_PASSWORD：初始化普通用户密码</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name </span><span style="color:#C3E88D;">mysql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql:8.0.29</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--restart=always \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e </span><span style="color:#C3E88D;">TZ=Asia/Shanghai</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e </span><span style="color:#C3E88D;">MYSQL_ROOT_PASSWORD=</span><span style="color:#F78C6C;">123456</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e </span><span style="color:#C3E88D;">MYSQL_DATABASE=test</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e </span><span style="color:#C3E88D;">MYSQL_USER=test</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e </span><span style="color:#C3E88D;">MYSQL_PASSWORD=</span><span style="color:#F78C6C;">123456</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p </span><span style="color:#F78C6C;">3306</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">3306</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v </span><span style="color:#C3E88D;">/opt/disk/docker/volumes/mysql/conf:/etc/mysql/conf.d</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v </span><span style="color:#C3E88D;">/opt/disk/docker/volumes/mysql/data:/var/lib/mysql</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v </span><span style="color:#C3E88D;">/opt/disk/docker/volumes/mysql/logs:/logs</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使用该参数，容器内的 root 用户才拥有真正的 root 权限</span></span>
<span class="line"><span style="color:#FFCB6B;">--privileged=</span><span style="color:#82AAFF;">true</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># MYSQL_ROOT_PASSWORD：root 用户密码</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># MYSQL_DATABASE：初始化数据库</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># MYSQL_USER：初始化普通用户</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># MYSQL_PASSWORD：初始化普通用户密码</span></span>
<span class="line"><span style="color:#ABB2BF;">docker </span><span style="color:#98C379;">run</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-d</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">--name </span><span style="color:#98C379;">mysql</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">mysql:8.0.29</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">--restart=always </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e </span><span style="color:#98C379;">TZ=Asia/Shanghai</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e </span><span style="color:#98C379;">MYSQL_ROOT_PASSWORD=</span><span style="color:#D19A66;">123456</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e </span><span style="color:#98C379;">MYSQL_DATABASE=test</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e </span><span style="color:#98C379;">MYSQL_USER=test</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e </span><span style="color:#98C379;">MYSQL_PASSWORD=</span><span style="color:#D19A66;">123456</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-p </span><span style="color:#D19A66;">3306</span><span style="color:#98C379;">:</span><span style="color:#D19A66;">3306</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-v </span><span style="color:#98C379;">/opt/disk/docker/volumes/mysql/conf:/etc/mysql/conf.d</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-v </span><span style="color:#98C379;">/opt/disk/docker/volumes/mysql/data:/var/lib/mysql</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-v </span><span style="color:#98C379;">/opt/disk/docker/volumes/mysql/logs:/logs</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 使用该参数，容器内的 root 用户才拥有真正的 root 权限</span></span>
<span class="line"><span style="color:#ABB2BF;">--privileged=</span><span style="color:#56B6C2;">true</span></span>
<span class="line"></span></code></pre></div><h2 id="验证" tabindex="-1">验证 <a class="header-anchor" href="#验证" aria-hidden="true">#</a></h2><p>服务器开放好相应端口或设置好安全组规则后，直接用 Navicat 连接即可。</p><h2 id="docker-compose脚本" tabindex="-1">Docker Compose脚本 <a class="header-anchor" href="#docker-compose脚本" aria-hidden="true">#</a></h2><p>如果你是用的 docker-compose 来安装，下方附上相应 docker-compose.yml 脚本内容。</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">services</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mysql</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">container_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql:8.0.29</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">environment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">TZ</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Asia/Shanghai</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">MYSQL_ROOT_PASSWORD</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123456</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">MYSQL_DATABASE</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">MYSQL_USER</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">MYSQL_PASSWORD</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123456</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ports</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">3306:3306</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/opt/disk/docker/volumes/mysql/conf:/etc/mysql/conf.d</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/opt/disk/docker/volumes/mysql/data:/var/lib/mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/opt/disk/docker/volumes/mysql/logs:/logs</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">privileged</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;3&#39;</span></span>
<span class="line"><span style="color:#E06C75;">services</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">mysql</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">container_name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">mysql</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">image</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">mysql:8.0.29</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">environment</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">TZ</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Asia/Shanghai</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">MYSQL_ROOT_PASSWORD</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">123456</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">MYSQL_DATABASE</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">test</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">MYSQL_USER</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">test</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">MYSQL_PASSWORD</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">123456</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">ports</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">3306:3306</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">volumes</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">/opt/disk/docker/volumes/mysql/conf:/etc/mysql/conf.d</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">/opt/disk/docker/volumes/mysql/data:/var/lib/mysql</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">/opt/disk/docker/volumes/mysql/logs:/logs</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">privileged</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span>
<span class="line"></span></code></pre></div><p>编写好 docker-compose.yml 脚本后，在脚本同级目录执行下方命令即可。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker-compose</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">up</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">docker-compose </span><span style="color:#98C379;">up</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-d</span></span>
<span class="line"></span></code></pre></div><h2 id="附-安装mariadb" tabindex="-1">附：安装MariaDB <a class="header-anchor" href="#附-安装mariadb" aria-hidden="true">#</a></h2><h3 id="运行容器-1" tabindex="-1">运行容器 <a class="header-anchor" href="#运行容器-1" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name </span><span style="color:#C3E88D;">mariadb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mariadb</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--restart=always \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e </span><span style="color:#C3E88D;">TZ=Asia/Shanghai</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e </span><span style="color:#C3E88D;">MYSQL_ROOT_PASSWORD=</span><span style="color:#F78C6C;">123456</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e </span><span style="color:#C3E88D;">MYSQL_DATABASE=test</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e </span><span style="color:#C3E88D;">MYSQL_USER=test</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e </span><span style="color:#C3E88D;">MYSQL_PASSWORD=</span><span style="color:#F78C6C;">123456</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p </span><span style="color:#F78C6C;">3306</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">3306</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v </span><span style="color:#C3E88D;">/opt/disk/docker/volumes/mysql/conf:/etc/mysql/conf.d</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v </span><span style="color:#C3E88D;">/opt/disk/docker/volumes/mysql/data:/var/lib/mysql</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--privileged=true</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">docker </span><span style="color:#98C379;">run</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-d</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">--name </span><span style="color:#98C379;">mariadb</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">mariadb</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">--restart=always </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e </span><span style="color:#98C379;">TZ=Asia/Shanghai</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e </span><span style="color:#98C379;">MYSQL_ROOT_PASSWORD=</span><span style="color:#D19A66;">123456</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e </span><span style="color:#98C379;">MYSQL_DATABASE=test</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e </span><span style="color:#98C379;">MYSQL_USER=test</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e </span><span style="color:#98C379;">MYSQL_PASSWORD=</span><span style="color:#D19A66;">123456</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-p </span><span style="color:#D19A66;">3306</span><span style="color:#98C379;">:</span><span style="color:#D19A66;">3306</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-v </span><span style="color:#98C379;">/opt/disk/docker/volumes/mysql/conf:/etc/mysql/conf.d</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">-v </span><span style="color:#98C379;">/opt/disk/docker/volumes/mysql/data:/var/lib/mysql</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">--privileged=true</span></span>
<span class="line"></span></code></pre></div><h3 id="docker-compose脚本-1" tabindex="-1">Docker Compose脚本 <a class="header-anchor" href="#docker-compose脚本-1" aria-hidden="true">#</a></h3><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">services</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mariadb</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">container_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mariadb</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mariadb</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">always</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">environment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">TZ</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Asia/Shanghai</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">MYSQL_ROOT_PASSWORD</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123456</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">MYSQL_DATABASE</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">MYSQL_USER</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">MYSQL_PASSWORD</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123456</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ports</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">3306:3306</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/opt/disk/docker/volumes/mysql/conf:/etc/mysql/conf.d</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/opt/disk/docker/volumes/mysql/data:/var/lib/mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">privileged</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;3&#39;</span></span>
<span class="line"><span style="color:#E06C75;">services</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">mariadb</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">container_name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">mariadb</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">image</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">mariadb</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">restart</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">always</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">environment</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">TZ</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Asia/Shanghai</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">MYSQL_ROOT_PASSWORD</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">123456</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">MYSQL_DATABASE</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">test</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">MYSQL_USER</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">test</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">MYSQL_PASSWORD</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">123456</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">ports</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">3306:3306</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">volumes</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">/opt/disk/docker/volumes/mysql/conf:/etc/mysql/conf.d</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">/opt/disk/docker/volumes/mysql/data:/var/lib/mysql</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">privileged</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span>
<span class="line"></span></code></pre></div>`,22);function h(s,k,E,v,u,_){const o=c,e=B("ClientOnly");return p(),r("div",null,[m,y(e,null,{default:i(()=>{var a,n;return[(((a=s.$frontmatter)==null?void 0:a.aside)??!0)&&(((n=s.$frontmatter)==null?void 0:n.showArticleMetadata)??!0)?(p(),D(o,{key:0,article:s.$frontmatter},null,8,["article"])):d("",!0)]}),_:1}),S])}const M=t(F,[["render",h]]);export{q as __pageData,M as default};
