(self.webpackChunk=self.webpackChunk||[]).push([[2144],{9300:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-2988ebc8",path:"/articles/JavaScript/%E5%85%B3%E4%BA%8E%E8%B7%A8%E5%9F%9F.html",title:"关于跨域",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"为什么会有跨域",slug:"为什么会有跨域",children:[{level:3,title:"什么是跨域",slug:"什么是跨域",children:[]}]},{level:2,title:"怎么解决跨域",slug:"怎么解决跨域",children:[{level:3,title:"JSONP",slug:"jsonp",children:[]},{level:3,title:"CORS",slug:"cors",children:[]},{level:3,title:"Server Proxy",slug:"server-proxy",children:[]},{level:3,title:"总结",slug:"总结",children:[]}]}],filePathRelative:"articles/JavaScript/关于跨域.md",git:{updatedTime:1626953563e3,contributors:[]}}},4496:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>x});var p=a(6252);const t=(0,p.uE)('<h1 id="关于跨域" tabindex="-1"><a class="header-anchor" href="#关于跨域" aria-hidden="true">#</a> 关于跨域</h1><p>在使用 Vue 搭建的一个后端管理系统中，我使用 axios 请求本地的 Node 环境下的接口，但是请求失败，然后我错误信息是： <img src="https://i.loli.net/2020/12/28/nBWv7spACfJLmux.jpg" alt="cors_1.jpg"> 大概意思就是不能访问<code>http://localhost:8080</code></p><p>我的 Vue 项目端口是<code>http://localhost:8081</code>，Node 服务端运行在<code>http://localhost:8080</code>端口上，也就是说因为请求端口和响应端口不一致，所以请求失败。</p><p>我也在网上查看了一些关于跨域出现的原因及解决的方法，并记录下来。</p><h2 id="为什么会有跨域" tabindex="-1"><a class="header-anchor" href="#为什么会有跨域" aria-hidden="true">#</a> 为什么会有跨域</h2><blockquote><p>跨域一句话的理解就是：服务端和请求端的地址不一样。</p></blockquote><h3 id="什么是跨域" tabindex="-1"><a class="header-anchor" href="#什么是跨域" aria-hidden="true">#</a> 什么是跨域</h3><p>Ajax 的便利性大家都清楚，可以在不向服务器提交完整的页面的情况下，实现局部更新页面。但是浏览器处于对安全方面的考虑，不允许跨域调用其他页面的对象。</p><p>其实这个也不能怪浏览器，假设谁都可以随随便便向你发送请求，那样有很大的安全隐患。</p><p>根据浏览器的同源策略, 只有当协议，域名，端口相同的时候才算是同源, 反之则均视为是一个跨域的请求.</p><p>也就是说我刚刚的 Vue 端口是<code>8081</code>，服务端端口是<code>8080</code>，端口不一样，因为同源策略的存在 ，所有我的请求会失败。</p><blockquote><p>一个问题，当找到了原因，这个问题就解决了一半了。</p></blockquote><h2 id="怎么解决跨域" tabindex="-1"><a class="header-anchor" href="#怎么解决跨域" aria-hidden="true">#</a> 怎么解决跨域</h2><p>下面就先介绍三种跨全域的方法：</p><h3 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp" aria-hidden="true">#</a> JSONP</h3><p>应该是最常见解决跨域的方法了， 他为什么能解决跨域呢，是因为 Web 页面上调用 js 文件不受浏览器同源策略的影响，所以通过 Script 便签可以进行跨域的请求：</p><ol><li>首先前端先设置好回调函数，并将其作为 url 的参数。</li><li>服务端接收到请求后，通过该参数获得回调函数名，并将数据放在参数中将其返回</li><li>收到结果后因为是 script 标签，所以浏览器会当做是 3 脚本进行运行，从而达到跨域获取数据的目的。 我的前端是<code>index.html</code>，后端是<code>server.js</code> 后端逻辑：</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//server.js</span>\n<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nhttp\n  <span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>\n      x<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">//返回的数据</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> callback <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span>query<span class="token punctuation">.</span>callback<span class="token punctuation">;</span>\n    res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>callback<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//执行回调函数，返回data</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;启动服务，监听 localhost:3000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>然后使用<code>node server.js</code>运行 前端：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//index.html</span>\n<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n\t<span class="token keyword">function</span> <span class="token function">jsonpCallback</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;获得 X 数据:&#39;</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;http://localhost:3000?callback=jsonpCallback&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>之后打开 index.html;就可以在控制台看到返回的数据了：</p><p><img src="https://i.loli.net/2020/12/28/x91nh62vpIYNcdZ.jpg" alt="cors_2.jpg"></p><p>至此，通过 JSONP 跨域获取数据已经成功了，jsonp 这种方法跨域，他的兼容性很好，可以在古老的浏览器中国使用，因为这种方法是利用了<code>&lt;script&gt;</code>标签的特殊性，所有只支持 GET 请求。</p><h3 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h3><p>CORS 是一个 W3C 标准，全称是&quot;跨域资源共享&quot;（Cross-origin resource sharing）它允许浏览器向跨源服务器，发出 XMLHttpRequest 请求，从而克服了 ajax 只能同源使用的限制。</p><p>CORS 需要浏览器和服务器同时支持才可以生效，对于开发者来说，CORS 通信与同源的 ajax 通信没有差别，代码完全一样。浏览器一旦发现 ajax 请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。</p><p>因此，实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨源通信。</p><p>前端：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    url<span class="token operator">:</span><span class="token string">&quot;http://127.0.0.1:3000&quot;</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>这次前端启动需要使用<code>node-server</code>来启动，使用<code>npm install node-server</code>下载，然后当前目录下使用<code>node-server</code>就可以了 后端：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nhttp\n  <span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>\n      data<span class="token operator">:</span> <span class="token string">&quot;Hello world&quot;</span><span class="token punctuation">,</span> <span class="token comment">//返回的数据</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      <span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:8080&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//设置的头部信息需要和前端请求的地址一致</span>\n    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//返回data</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;启动服务，监听 127.0.0.1:3000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>使用命令<code>node server.js</code>启动； <img src="https://i.loli.net/2020/12/28/pD2o3UkPQ94BTNG.jpg" alt="cors_3.jpg"></p><p>CORS 与 JSONP 的使用目的相同，但是比 JSONP 更强大。</p><p>JSONP 只支持 GET 请求，CORS 支持所有类型的 HTTP 请求。JSONP 的优势在于支持老式浏览器，以及可以向不支持 CORS 的网站请求数据。</p><h3 id="server-proxy" tabindex="-1"><a class="header-anchor" href="#server-proxy" aria-hidden="true">#</a> Server Proxy</h3><p>服务器代理，顾名思义，当你需要有跨域的请求操作时发送请求给后端，让后端帮你代为请求，然后最后将获取的结果发送给你。</p>',36),o=(0,p.Uk)("假设有这样的一个场景，你的页面需要获取  "),e={href:"http://link.zhihu.com/?target=https%3A//cnodejs.org/api",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Uk)("CNode：Node.js 专业中文社区"),l=(0,p.Uk)("  论坛上一些数据，如通过  "),u={href:"https://cnodejs.org/api/v1/topics",target:"_blank",rel:"noopener noreferrer"},r=(0,p.Uk)("https://cnodejs.org/api/v1/topics"),i=(0,p.Uk)("，当时因为不同域，所以你可以将请求后端，让其对该请求代为转发。"),k=(0,p.uE)('<p>后端代码如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> https <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;https&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nhttp\n  <span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> path <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//核对请求路由是否一致</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>path <span class="token operator">===</span> <span class="token string">&quot;topics&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      https<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;https://cnodejs.org/api/v1/topics&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">resp</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token comment">//https代发请求</span>\n        <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n        resp<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          data <span class="token operator">+=</span> chunk<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        resp<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;end&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            <span class="token string">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/json; charset=utf-8&quot;</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token comment">//返回数据</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;启动服务，监听 127.0.0.1:3000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>前端代码：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    url<span class="token operator">:</span><span class="token string">&quot;https://cnodejs.org/api/v1/topics&quot;</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>这样就成功了 <img src="https://i.loli.net/2020/12/28/7iPvJKUW9jlZHNF.jpg" alt="cors_4.jpg"></p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>常用的跨域方式基本就是这三种：</p><ol><li>JSONP 优点是可以兼容老浏览器，缺点是只能发送 GET 请求</li><li>CORS 优点简单方便，支持 post 请求，缺点是需要后端的配合,不支持老版浏览器。。</li><li>Server Proxy 优点是前端正常发送 ajax 请求，缺点是后端会二次请求。</li></ol><p>其他的跨域方式还有：<code>location.hash</code>、<code>window.name</code>、<code>postMessage</code>等方式，有时间也可以了解一下。</p><p>参考资料：</p>',10),b={href:"http://www.ruanyifeng.com/blog/2016/04/cors.html",target:"_blank",rel:"noopener noreferrer"},d=(0,p.Uk)("跨域资源共享 CORS 详解-阮一峰的博客"),m={href:"https://zhuanlan.zhihu.com/p/25778815",target:"_blank",rel:"noopener noreferrer"},g=(0,p.Uk)("关于跨域，你想知道的全在这里"),h={href:"https://segmentfault.com/a/1190000015597029",target:"_blank",rel:"noopener noreferrer"},f=(0,p.Uk)("不要再问我跨域的问题了-sf"),q={href:"https://www.cnblogs.com/chenshishuo/p/4919224.html",target:"_blank",rel:"noopener noreferrer"},v=(0,p.Uk)("关于跨域,以及跨域的几种方式"),j={href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy",target:"_blank",rel:"noopener noreferrer"},y=(0,p.Uk)("浏览器的同源策略 MDN"),x={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,(0,p.Wm)("p",null,[o,(0,p.Wm)("a",e,[c,(0,p.Wm)(a)]),l,(0,p.Wm)("a",u,[r,(0,p.Wm)(a)]),i]),k,(0,p.Wm)("ul",null,[(0,p.Wm)("li",null,[(0,p.Wm)("a",b,[d,(0,p.Wm)(a)])]),(0,p.Wm)("li",null,[(0,p.Wm)("a",m,[g,(0,p.Wm)(a)])]),(0,p.Wm)("li",null,[(0,p.Wm)("a",h,[f,(0,p.Wm)(a)])]),(0,p.Wm)("li",null,[(0,p.Wm)("a",q,[v,(0,p.Wm)(a)])]),(0,p.Wm)("li",null,[(0,p.Wm)("a",j,[y,(0,p.Wm)(a)])])])],64)}}}}]);