import{_ as s,c as n,o as a,e as l}from"./app.b3d33ece.js";const y=JSON.parse('{"title":"js动态添加dom，如何绑定事件","description":"","frontmatter":{"title":"js动态添加dom，如何绑定事件","date":"2017-05-24T00:00:00.000Z","author":"recoluan","tags":["javascript"],"categories":["frontEnd"]},"headers":[{"level":2,"title":"原理","slug":"原理","link":"#原理","children":[]},{"level":2,"title":"注意","slug":"注意","link":"#注意","children":[]},{"level":2,"title":"代码","slug":"代码","link":"#代码","children":[]}],"relativePath":"posts/2017/052401.md"}'),p={name:"posts/2017/052401.md"},e=l(`<h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-hidden="true">#</a></h2><p>首先要明白浏览器在加载页面的时候是按顺序来加载的，这样以来就很清楚了，js 动态添加 dom 以后，这些 dom 并没有绑定事件，这个时候最简单的一个办法就是：将绑定事件的方法封装到一个函数 A 中，在动态添加完 dom 以后立即执行一次函数 A 即可。</p><h2 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-hidden="true">#</a></h2><p>其次需要注意的是，在你可能同时需要添加许多的 dom，不要添加一个就执行一次函数 A，这样会增加浏览器的负载，你需要在所有 dom 添加完以后在执行函数 A，例如你用一个 for 循环遍历 dom 组合并拼接成一个字符串，然后添加到某个父级 dom 里面，这个时候你需要在循环外添加一次就可以了。</p><h2 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;title&gt;添加div并绑定点击事件&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        div.btn{</span></span>
<span class="line"><span style="color:#A6ACCD;">            width: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            height: 50px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            line-height: 50px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            text-align: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">            border: solid 1px #000;</span></span>
<span class="line"><span style="color:#A6ACCD;">            cursor: pointer;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        div.innerDiv{</span></span>
<span class="line"><span style="color:#A6ACCD;">            width: 50px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            height: 50px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            background-color: black;</span></span>
<span class="line"><span style="color:#A6ACCD;">            margin: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            cursor: pointer;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;aa&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;btn&quot;&gt;添加div并绑定点击事件&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;outerDiv&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        function getClass(classname) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return document.getElementsByClassName(classname);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        getClass(&#39;btn&#39;)[0].onclick=function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">            addDom();</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        //    将点击事件封装为函数</span></span>
<span class="line"><span style="color:#A6ACCD;">        function funA() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            for(var i=0;i&lt;getClass(&#39;innerDiv&#39;).length;i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">                getClass(&#39;innerDiv&#39;)[i].onclick=function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    alert(this.innerText);</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        //    将添加dom封装为函数</span></span>
<span class="line"><span style="color:#A6ACCD;">        function addDom() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            var oldHtml=&#39;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">            for(var j=0;j&lt;6;j++){</span></span>
<span class="line"><span style="color:#A6ACCD;">                oldHtml+=&#39;&lt;div class=&quot;innerDiv&quot;&gt;&#39;+j+&#39;&lt;/div&gt;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            getClass(&#39;outerDiv&#39;)[0].innerHTML=oldHtml;</span></span>
<span class="line"><span style="color:#A6ACCD;">            funA();</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        //    如果将函数A放在这里就不会起作用的</span></span>
<span class="line"><span style="color:#A6ACCD;">        //    funA();</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),t=[e];function o(c,i,r,A,C,d){return a(),n("div",null,t)}const g=s(p,[["render",o]]);export{y as __pageData,g as default};
