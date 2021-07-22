(self.webpackChunk=self.webpackChunk||[]).push([[6141],{9037:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-7dced607",path:"/articles/Share/JavaScript%E4%B8%93%E9%A2%98%E4%B9%8B%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"前言",slug:"前言",children:[]},{level:2,title:"目的",slug:"目的",children:[]},{level:2,title:"引子问题",slug:"引子问题",children:[]},{level:2,title:"产生异步的原因",slug:"产生异步的原因",children:[]},{level:2,title:"异步编程",slug:"异步编程",children:[{level:3,title:"异步代码",slug:"异步代码",children:[]},{level:3,title:"回调函数",slug:"回调函数",children:[]},{level:3,title:"异步编程的三种方式",slug:"异步编程的三种方式",children:[]},{level:3,title:"在线预览",slug:"在线预览",children:[]},{level:3,title:"问题？？",slug:"问题",children:[]}]},{level:2,title:"宏任务和微任务",slug:"宏任务和微任务",children:[]},{level:2,title:"事件循环（Event loop）",slug:"事件循环-event-loop",children:[]},{level:2,title:"总结",slug:"总结",children:[]},{level:2,title:"练习",slug:"练习",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],filePathRelative:"articles/Share/JavaScript专题之异步编程.md",git:{updatedTime:1626953563e3,contributors:[]}}},7854:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>x});var t=a(6252);const p=(0,t.uE)('<p><img src="https://i.loli.net/2021/05/25/NPWO6ebLlzcmDhH.png" alt="JS-异步代码maind.png"></p><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>异步，就是非同步....</p><p>这节内容可能会有点枯燥，但是却是 JavaScript 中非常重要的概念，非常有必要去学习。</p><h2 id="目的" tabindex="-1"><a class="header-anchor" href="#目的" aria-hidden="true">#</a> 目的</h2><ul><li>提升开发效率，编写易维护的代码</li></ul><h2 id="引子问题" tabindex="-1"><a class="header-anchor" href="#引子问题" aria-hidden="true">#</a> 引子问题</h2><ul><li>请求时候为什么页面卡死？？</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  url<span class="token operator">:</span> <span class="token string">&quot;www.xx.com/api&quot;</span><span class="token punctuation">,</span>\n  async<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// true</span>\n  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>为什么数据更新了，DOM 却没有更新？？</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 异步批量更新DOM（vue-nextTick）</span>\n<span class="token comment">// &lt;div id=&quot;app&quot;&gt;{{num}}&lt;/div&gt;</span>\n<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>\n  data<span class="token operator">:</span> <span class="token punctuation">{</span>\n    num<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">!==</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token operator">++</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Vue num=&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token punctuation">,</span> <span class="token string">&quot;DOM num=&quot;</span> <span class="token operator">+</span> dom<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// Vue num=100,DOM num=0</span>\n    <span class="token comment">// nextTick or setTimeout</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="产生异步的原因" tabindex="-1"><a class="header-anchor" href="#产生异步的原因" aria-hidden="true">#</a> 产生异步的原因</h2><p>原因：单线程（一个时间点，只做一件事），浏览器的 JS 引擎是单线程导致的。</p><p><strong>单线程</strong>是指在 JS 引擎中负责解释和执行 IavaScript 代码的线程只有一个，不妨叫它主线程。</p><p>所谓单线程，就是指一次只能完成一件任务。如果有多个任务，就必须排队，前面一个任务完成再执行后面一个任务。</p><p>先看看一下浏览器内核的线程图: <img src="https://i.loli.net/2021/05/28/gdJ9TxQimsZlaOk.jpg" alt="Browser thread.jpg"></p><p>其中，<strong>渲染线程和 JS 线程互斥</strong>。</p><p>假设有两个函数，一个修改一个删除，同时操作一个 DOM 节点，假如有多个线程的话，两个线程一起执行，肯定就死锁了，就会有问题。</p><p>为什么 JS 要设计为单线程，因为浏览器的特殊环境。</p><p>单线程的优缺点：</p><blockquote><p>这种模式的好处是实现起来比较简单，执行环境相对单纯；<strong>坏处是只要有一个任务耗时很长，后面的任务都必须排队等着，会拖延整个程序的执行。常见的浏览器无响应（假死），往往就是因为某一段 Javascript 代码长时间运行（比如死循环），导致整个页面卡在这个地方，其他任务无法执行。</strong></p></blockquote><p>常见的堵塞（死循环）：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>JS 在设计之初就以运行在浏览器中的脚本语言，所以也不想搞得这么复杂，就设计成了单线程，也就是，<strong>一个时间点，只能做一件事。</strong></p><p>为了<strong>解决单线程堵塞</strong>这个缺点：产生了异步。</p><p>拿吃泡面举例：</p><ul><li>同步：买泡面=》烧水（盯着）=》煮面=》吃泡面</li><li>异步：买泡面=》烧水（水开了热水壶响-回调）=》看电视=》煮面（面好了热水壶响-回调）=》看电视=》熟了叫我=》吃泡面</li></ul><p>看电视就是异步操作，热水壶响，就是回调函数。</p><h2 id="异步编程" tabindex="-1"><a class="header-anchor" href="#异步编程" aria-hidden="true">#</a> 异步编程</h2><p>JS 中大多的代码都是同步执行的，只有极个别的函数是异步执行的，异步执行的代码，则需要异步编程。</p><h3 id="异步代码" tabindex="-1"><a class="header-anchor" href="#异步代码" aria-hidden="true">#</a> 异步代码</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;log2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;log1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// ?? log1 log2</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>异步代码的特点：<strong>不是立即执行，而是需要等待，在未来的某一个时间点执行。</strong></p><table><thead><tr><th><strong>同步代码</strong></th><th><strong>异步代码</strong></th></tr></thead><tbody><tr><td><code>&lt;script&gt;</code>代码</td><td>网络请求（Ajax）</td></tr><tr><td>I/O 操作</td><td>定时器（setTimeout、setInterval）</td></tr><tr><td>渲染操作</td><td>Promise（then）</td></tr><tr><td></td><td>async/await</td></tr></tbody></table><h3 id="回调函数" tabindex="-1"><a class="header-anchor" href="#回调函数" aria-hidden="true">#</a> 回调函数</h3><p>异步代码最常见的写法就是使用回调函数。</p><ul><li>HTTP 网络请求（请求成功、识别后执行 xx 操作）</li><li>DOM 事件绑定机制（用户触发事件后执行 xx 操作）</li><li>定时器（setTimeout、setInterval）（在达到设定时间后执行 xx 操作）</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 注意到click方法中是一个函数而不是一个变量</span>\n<span class="token comment">// 它就是回调函数</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#btn_1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Btn 1 Clicked&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 或者</span>\n<span class="token keyword">function</span> <span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 它就是回调函数</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Btn 1 Clicked&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#btn_1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>click<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>回调函数的缺点也很明显，容易产生回调地狱： <img src="https://i.loli.net/2021/05/28/zPsXJnZQYr9HyKC.png" alt="callbackhell.png"></p><h3 id="异步编程的三种方式" tabindex="-1"><a class="header-anchor" href="#异步编程的三种方式" aria-hidden="true">#</a> 异步编程的三种方式</h3><ul><li>callback</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getOneNews</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    url<span class="token operator">:</span> topicsUrl<span class="token punctuation">,</span>\n    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> id <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>id<span class="token punctuation">;</span>\n      $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        url<span class="token operator">:</span> topicOneUrl <span class="token operator">+</span> id<span class="token punctuation">,</span>\n        <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">ress</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ress<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">render</span><span class="token punctuation">(</span>ress<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li>promise</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getOneNews</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  axios\n    <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>topicsUrl<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> id <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>id<span class="token punctuation">;</span>\n      <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>topicOneUrl <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">render</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li>async/await</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getOneNews</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> listData <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>topicsUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> id <span class="token operator">=</span> listData<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>id<span class="token punctuation">;</span>\n  <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>topicOneUrl <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="在线预览" tabindex="-1"><a class="header-anchor" href="#在线预览" aria-hidden="true">#</a> 在线预览</h3>',47),e=(0,t.Uk)("预览地址："),o={href:"http://jsrun.net/s43Kp/embedded/all/light?fileGuid=VrTQqvKGDjDypqhr",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("http://jsrun.net/s43Kp/embedded/all/light"),l=(0,t.uE)('<h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题？？</h3><p>如果多个异步代码同时存在，那么执行顺序应该是怎样的？那个先执行、那个后执行了？</p><h2 id="宏任务和微任务" tabindex="-1"><a class="header-anchor" href="#宏任务和微任务" aria-hidden="true">#</a> 宏任务和微任务</h2><p>异步代码的划分，异步代码分宏任务和微任务。</p><table><thead><tr><th><strong>宏任务（不着急）</strong></th><th><strong>微任务(着急)</strong></th></tr></thead><tbody><tr><td><code>&lt;script&gt;</code>整体代码</td><td>Promise</td></tr><tr><td>setTimeout/setInterval</td><td></td></tr></tbody></table><h2 id="事件循环-event-loop" tabindex="-1"><a class="header-anchor" href="#事件循环-event-loop" aria-hidden="true">#</a> 事件循环（Event loop）</h2><p><img src="https://i.loli.net/2021/05/28/NbSdByKkDsPXI7o.png" alt="EventLoopmind.png"></p><p>执行顺序：</p><ol><li>执行整体代码<code>&lt;script&gt;</code>（宏任务）</li><li>执行所有微任务</li><li>执行一个宏任务</li><li>执行渲染线程</li><li>2-&gt;3-&gt;2-&gt;3...依次循环（在 2、3 步中又创建了新的宏、微任务）</li></ol><p>重复从宏任务和微任务队列里拿出任务去执行。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>因为浏览器设计的原因，JS 线程和渲染线程互斥，所以 JS 线程被设计成了单线程。</p><p>因为单线程执行一些操作（如网络请求）时有堵塞的问题，所有产生了异步。</p><p>因为有了异步，所以产生了异步编程，从而有了回调函数。</p><p>因为回调函数写多了会产生回调地狱，所有又有了解决回调地狱的 Promise 写法</p><p>自 ES7 标准后有了比 Promise 更加优雅的写法 ———— async/await 写法，也是异步编程的最终解决方法。</p><p>因为 JS 的代码分为同步和异步代码，同步代码的执行顺序不必多说，自上而下的执行。</p><p>但是如果有多个异步的代码，他的执行顺序又是怎么的呢？？</p><p>为了解决多个异步代码的执行顺序问了，有了事件循环（EventLoop），将异步任务区分为宏任务、微任务，依据规则依次执行。</p><p>至此 完！</p><h2 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;script start&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;timeout1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;promise1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;timeout2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;then1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;script end&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>写出 log 的输出结果，并说出理由。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',24),u={href:"https://segmentfault.com/a/1190000013083967",target:"_blank",rel:"noopener noreferrer"},i=(0,t.Uk)("浅谈浏览器多进程与 JS 线程"),r={href:"https://www.zhangningle.top/articles/JavaScript/%E4%B8%80%E6%AC%A1%E6%90%9E%E6%87%82-JS%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E4%B9%8B%E5%AE%8F%E4%BB%BB%E5%8A%A1%E5%92%8C%E5%BE%AE%E4%BB%BB%E5%8A%A1.html",target:"_blank",rel:"noopener noreferrer"},k=(0,t.Uk)("一次搞懂-JS 事件循环之宏任务和微任务"),d={href:"https://zhuanlan.zhihu.com/p/87684858",target:"_blank",rel:"noopener noreferrer"},b=(0,t.Uk)("【JS】深入理解事件循环,这一篇就够了!(必看)"),m={href:"https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/?utm_source=html5weekly",target:"_blank",rel:"noopener noreferrer"},h=(0,t.Uk)("Tasks, microtasks, queues and schedules"),g={href:"https://www.cnblogs.com/hustxychen/p/9412656.html",target:"_blank",rel:"noopener noreferrer"},f=(0,t.Uk)("浏览器的线程有哪些"),v={href:"https://www.jianshu.com/p/7d5a44baf375",target:"_blank",rel:"noopener noreferrer"},w=(0,t.Uk)("一道面试题，聊聊异步"),x={render:function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[p,(0,t.Wm)("p",null,[e,(0,t.Wm)("a",o,[c,(0,t.Wm)(a)])]),l,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("a",u,[i,(0,t.Wm)(a)])]),(0,t.Wm)("li",null,[(0,t.Wm)("a",r,[k,(0,t.Wm)(a)])]),(0,t.Wm)("li",null,[(0,t.Wm)("a",d,[b,(0,t.Wm)(a)])]),(0,t.Wm)("li",null,[(0,t.Wm)("a",m,[h,(0,t.Wm)(a)])]),(0,t.Wm)("li",null,[(0,t.Wm)("a",g,[f,(0,t.Wm)(a)])]),(0,t.Wm)("li",null,[(0,t.Wm)("a",v,[w,(0,t.Wm)(a)])])])],64)}}}}]);