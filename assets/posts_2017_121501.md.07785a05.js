import{_ as e,c as a,o,e as t}from"./app.18fa6f3c.js";const m=JSON.parse('{"title":"vue路由history模式下刷新页面404","description":"","frontmatter":{"title":"vue路由history模式下刷新页面404","date":"2017-12-15T00:00:00.000Z","aside":false,"tags":["vue"],"categories":["frontEnd"]},"headers":[{"level":2,"title":"原因","slug":"原因","link":"#原因","children":[]},{"level":2,"title":"解决办法","slug":"解决办法","link":"#解决办法","children":[{"level":3,"title":"后台配合","slug":"后台配合","link":"#后台配合","children":[]},{"level":3,"title":"仿真路由","slug":"仿真路由","link":"#仿真路由","children":[]}]}],"relativePath":"posts/2017/121501.md"}'),c={name:"posts/2017/121501.md"},d=t('<h2 id="原因" tabindex="-1">原因 <a class="header-anchor" href="#原因" aria-hidden="true">#</a></h2><p>vue 的路由是由 js 来控制的，但是，当你刷新浏览器的时候，是向服务器发送请求的一个过程，当访问不到的时候必然会返回 404。</p><h2 id="解决办法" tabindex="-1">解决办法 <a class="header-anchor" href="#解决办法" aria-hidden="true">#</a></h2><h3 id="后台配合" tabindex="-1">后台配合 <a class="header-anchor" href="#后台配合" aria-hidden="true">#</a></h3><p>将请求同意指向一个有效地址。</p><p>比如，你的首页请求地址为 <code>www.aaa.com/go.html</code> ，但是路由变为<code>www.aaa.com/main</code>，这时候你可以与后端人员商量，将 <code>www.aaa.com/...</code> 统统指向 <code>www.aaa.com/go.html</code> ，这样就解决了 404 问题。</p><h3 id="仿真路由" tabindex="-1">仿真路由 <a class="header-anchor" href="#仿真路由" aria-hidden="true">#</a></h3><p>路由后带.html 后缀。</p><p>我遇到一个问题，就是页面初次加载时是携带参数的， <code>www.aaa.com/go.html?p=123</code> ，根据参数 p 决定是跳转路由 A 还是路由 B，加入跳转到了路由 A，也就是 <code>www.aaa.com/routerA</code> ，这时候刷新，就会出现 404 问题，这时候后端人员帮忙解释解决不了的，因为还需要携带参数。 我的解决办法是：</p><ol><li>先将路由仿真：也就是将 <code>/routerA</code> 变为 <code>/routerA.html</code> ，冰袋跳转时谢丹参数，<code>this.$router.push({path: /routerA.html${this.$router.query.p}})</code>，所以刷新时，会向服务端请求 <code>routerA.html</code> ，并且携带参数 p；</li><li>这时在 <code>www.aaa.com</code> 下真的存放一个 <code>routerA.html</code> ，在文件里面获取参数 p，然后跳转 <code>window.location.href=&#39;www.aaa.com/go.html?p=123&#39;</code>。</li></ol>',10),r=[d];function i(l,h,s,n,p,_){return o(),a("div",null,r)}const w=e(c,[["render",i]]);export{m as __pageData,w as default};
