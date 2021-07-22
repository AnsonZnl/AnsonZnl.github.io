(self.webpackChunk=self.webpackChunk||[]).push([[1056],{5111:(e,t,l)=>{"use strict";l.r(t),l.d(t,{data:()=>r});const r={key:"v-97937702",path:"/computer-base/%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE.html",title:"网络协议",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"HTTP",slug:"http",children:[{level:3,title:"简介",slug:"简介",children:[]},{level:3,title:"HTTP 报文结构",slug:"http-报文结构",children:[]},{level:3,title:"客户端请求报文",slug:"客户端请求报文",children:[]},{level:3,title:"服务器相应报文",slug:"服务器相应报文",children:[]},{level:3,title:"请求方法",slug:"请求方法",children:[]},{level:3,title:"状态码",slug:"状态码",children:[]},{level:3,title:"缓存机制",slug:"缓存机制",children:[]},{level:3,title:"跨域",slug:"跨域",children:[]},{level:3,title:"参考",slug:"参考",children:[]}]},{level:2,title:"HTTP1.1",slug:"http1-1",children:[]},{level:2,title:"HTTP2.0",slug:"http2-0",children:[]},{level:2,title:"HTTPS",slug:"https",children:[{level:3,title:"HTTPS 做了什么",slug:"https-做了什么",children:[]},{level:3,title:"什么是 SSL/TLS",slug:"什么是-ssl-tls",children:[]},{level:3,title:"和 HTTP 的区别",slug:"和-http-的区别",children:[]},{level:3,title:"参考",slug:"参考-1",children:[]}]},{level:2,title:"TCP",slug:"tcp",children:[{level:3,title:"作用",slug:"作用",children:[]},{level:3,title:"三次握手",slug:"三次握手",children:[]},{level:3,title:"参考",slug:"参考-2",children:[]}]},{level:2,title:"WebSocket",slug:"websocket",children:[]},{level:2,title:"UDP",slug:"udp",children:[]}],filePathRelative:"computer-base/网络协议.md",git:{updatedTime:1626953563e3,contributors:[]}}},6527:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>le});var r=l(6252);const n=(0,r.uE)('<h1 id="网络协议" tabindex="-1"><a class="header-anchor" href="#网络协议" aria-hidden="true">#</a> 网络协议</h1><p><img src="https://i.loli.net/2021/06/29/iAoVpBvDkX5yfOm.png" alt="网络协议七层详解"></p><h2 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h2><p>HTTP 协议（HyperText Transfer Protocol，超文本传输协议）是因特网上应用最为广泛的一种网络传输协议，所有的 WWW 文件都必须遵守这个标准。</p><h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3><p>HTTP 是一种能够获取如 HTML 这样的网络资源，一般都浏览器这样的接受方发起的，一个完整的 web 文档通常由不同的子文档拼接组成，像是文本、布局、图片、视频、脚本等等。 <img src="https://mdn.mozillademos.org/files/13677/Fetching_a_page.png" alt=""></p><p>HTTP 是一个 <strong>基于 TCP/IP 通信协议</strong> 来传递数据（HTML 文件, 图片文件, 查询结果等）。</p><p><strong>工作原理</strong></p><ul><li>HTTP 是一个 <code>client-server</code> 协议，客户端发起请求，服务端接受请求并做出相应。</li><li>浏览器作为 HTTP 客户端通过 URL 向 HTTP(Web) 服务端即 WEB 服务器发送所有请求</li><li>由像浏览器这样的客户端发出的消息叫做 <code>requests</code>，被服务端响应的消息叫做 <code>responses</code>。</li></ul><p><img src="https://www.runoob.com/wp-content/uploads/2013/11/cgiarch.gif" alt="HTTP 协议通信流程"></p><p><strong>特点</strong></p><ul><li>无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。</li><li>无状态：HTTP 协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。</li><li>媒体独立的：这意味着，只要客户端和服务器知道如何处理的数据内容，任何类型的数据都可以通过 HTTP 发送。客户端以及服务器指定使用适合的 MIME-type 内容类型。</li></ul><h3 id="http-报文结构" tabindex="-1"><a class="header-anchor" href="#http-报文结构" aria-hidden="true">#</a> HTTP 报文结构</h3><p>HTTP 是基于客户端/服务端（C/S）的架构模型，通过一个可靠的链接来交换信息，是一个无状态的请求/响应协议。</p><p>一个 HTTP&quot;客户端&quot;是一个应用程序（Web 浏览器或其他任何客户端），通过连接到服务器达到向服务器发送一个或多个 HTTP 的请求的目的。</p><p>一个 HTTP&quot;服务器&quot;同样也是一个应用程序（通常是一个 Web 服务，如 Apache Web 服务器或 IIS 服务器等），通过接收客户端的请求并向客户端发送 HTTP 响应数据。</p><p>HTTP 使用统一资源标识符（Uniform Resource Identifiers, URI）来传输数据和建立连接。</p><p>一旦建立连接后，数据消息就通过类似 Internet 邮件所使用的格式[RFC5322]和多用途 Internet 邮件扩展（MIME）[RFC2045]来传送。</p><h3 id="客户端请求报文" tabindex="-1"><a class="header-anchor" href="#客户端请求报文" aria-hidden="true">#</a> 客户端请求报文</h3><p>客户端发送一个 HTTP 请求到服务器的请求消息包括以下格式：请求行（request line）、请求头部（header）、空行和请求数据四个部分组成。 <img src="https://www.runoob.com/wp-content/uploads/2013/11/2012072810301161.png" alt=""></p><h3 id="服务器相应报文" tabindex="-1"><a class="header-anchor" href="#服务器相应报文" aria-hidden="true">#</a> 服务器相应报文</h3><p>HTTP 响应也由四个部分组成，分别是：状态行、消息报头、空行和响应正文。 <img src="https://www.runoob.com/wp-content/uploads/2013/11/httpmessage.jpg" alt=""></p><h3 id="请求方法" tabindex="-1"><a class="header-anchor" href="#请求方法" aria-hidden="true">#</a> 请求方法</h3><p>HTTP1.0 定义了三种请求方法： GET, POST 和 HEAD 方法。</p><p>HTTP1.1 新增了六种请求方法：OPTIONS、PUT、PATCH、DELETE、TRACE 和 CONNECT 方法。</p><table><thead><tr><th style="text-align:center;">方法</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">GET</td><td style="text-align:center;">获取资源</td></tr><tr><td style="text-align:center;">POST</td><td style="text-align:center;">传输实体主体</td></tr><tr><td style="text-align:center;">PUT</td><td style="text-align:center;">传输文件</td></tr><tr><td style="text-align:center;">DELETE</td><td style="text-align:center;">删除文件</td></tr><tr><td style="text-align:center;">HEAD</td><td style="text-align:center;">获取报文首部</td></tr><tr><td style="text-align:center;">OPTIONS</td><td style="text-align:center;">询问支持的方法</td></tr><tr><td style="text-align:center;">TRACE</td><td style="text-align:center;">追踪路径</td></tr><tr><td style="text-align:center;">CONNECT</td><td style="text-align:center;">要求用隧道协议连接代理</td></tr><tr><td style="text-align:center;">LINK</td><td style="text-align:center;">建立和资源之间的联系</td></tr><tr><td style="text-align:center;">UNLINKE</td><td style="text-align:center;">断开连接关系</td></tr></tbody></table><h3 id="状态码" tabindex="-1"><a class="header-anchor" href="#状态码" aria-hidden="true">#</a> 状态码</h3><h4 id="_1xx" tabindex="-1"><a class="header-anchor" href="#_1xx" aria-hidden="true">#</a> 1xx</h4><blockquote><p>信息响应，表示接受的请求正在处理</p></blockquote><ul><li>100 临时响应</li><li>101 指示服务器正在切换的协议</li></ul><h4 id="_2xx" tabindex="-1"><a class="header-anchor" href="#_2xx" aria-hidden="true">#</a> 2xx</h4><blockquote><p>成功响应，请求被正常处理</p></blockquote><ul><li>200 OK 请求已正常处理，如果是[from cache] 表明浏览器没有跟服务器确认，直接用了浏览器缓存；</li><li>201 Create 请求成功，并创建了一个新的资源</li><li>204 No Content 请求处理成功，但是没有任何资源可以返回给客户端</li><li>206 Partial Content 是对某一部分的请求，使用场景为 HTTP 分块下载和断点续传当然，也要带上响应的响应头字段<code>Content-Range</code></li></ul><h4 id="_3xx" tabindex="-1"><a class="header-anchor" href="#_3xx" aria-hidden="true">#</a> 3xx</h4><blockquote><p>重定向，表明浏览器需要执行某些特殊的处理以正确的处理请求</p></blockquote><ul><li>301 Moved Permanently 永久重定向 资源的 URL 以更新</li><li>302 Found 临时性重定向，资源的 URL 临时换到其他位置</li><li>304 Not Modified 协商缓存，资源未改变</li></ul><h4 id="_4xx" tabindex="-1"><a class="header-anchor" href="#_4xx" aria-hidden="true">#</a> 4xx</h4><blockquote><p>客户端响应，客户端发生错误</p></blockquote><ul><li>400 Bad Request 服务器无法理解客户端发送的请求</li><li>401 Unattended 未通过验证信息</li><li>403 Forbidden 禁止访问该资源</li><li>404 Not Found 资源未找到</li><li>405 Method Not Allowed 请求方法不允许</li><li>406 Not Acceptable 资源无法满足客户端的条件</li><li>408 Request Timeout 请求超时</li></ul><h4 id="_5xx" tabindex="-1"><a class="header-anchor" href="#_5xx" aria-hidden="true">#</a> 5xx</h4><blockquote><p>服务端响应，服务器发生错误</p></blockquote><ul><li>500 Internal Server Error 服务器内部发生未知错误</li><li>501 Not Implemented 服务器不支持该请求方法且无法处理</li><li>502 Bad Gateway 服务器正常，但是访问时出现错误</li><li>503 Server Unavailable 服务器繁忙（停机或者维护）</li></ul><h3 id="缓存机制" tabindex="-1"><a class="header-anchor" href="#缓存机制" aria-hidden="true">#</a> 缓存机制</h3><blockquote><p>HTTP 缓存分为两种：强缓存和协商缓存，</p></blockquote><p><img src="https://i.loli.net/2021/01/08/g5bimS1DhuUkTzH.png" alt="http-cache2.jpg"></p><h4 id="强缓存" tabindex="-1"><a class="header-anchor" href="#强缓存" aria-hidden="true">#</a> 强缓存</h4><blockquote><p>不会像服务器发送请求，直接从浏览器缓存中读取资源。</p></blockquote><p>强制缓存在缓存数据未失效的情况下（即 Cache-Control 的 max-age 没有过期或者 Expires 的缓存时间没有过期），那么就会直接使用浏览器的缓存数据，不会再向服务器发送任何请求。强制缓存生效时，http 状态码为 200。</p><ul><li><strong>Pragma</strong>：值为 <code>no-cache</code> 是，不使用缓存，更具新鲜度来使用缓存</li><li><strong>Expires</strong>： Response Header 中过期时间，浏览器再次加载时，如果在这个过期时间内，则命中强缓存</li><li><strong>Cache-Contorl</strong>：当值设为 <code>max-age=300</code> 时，则代表在这个请求正确返回时间（浏览器也会记录下来）的 5 分钟内再次加载资源，就会命中强缓存。</li></ul><p>优先级依次递减 <code>Pragma</code> 优先级最高</p><h4 id="协商缓存" tabindex="-1"><a class="header-anchor" href="#协商缓存" aria-hidden="true">#</a> 协商缓存</h4><blockquote><p>强缓存失效或不存在的时候，向服务器发送请求，由服务器决定是否使用缓存。</p></blockquote><ul><li><strong>Last-Modified/If-Modified-Since</strong>：即最后的修改时间，在浏览器第一次给服务器发送请求之后，服务区会在响应头中加上这个字段。</li></ul><p>浏览器接受后，如果再次请求，会在将<code>Last-Modified</code> 字段，作为请求头中携带<code>If-Modified-Since</code> 字段的值发送给服务器。</p><p>服务器接受后会进行对比：</p><pre><code>- 如果请求头中的这个值小于最后修改时间，说明是时候更新了。返回新的资源，跟常规的HTTP请求响应的流程一样。\n- 否则返回304，告诉浏览器直接用缓存。\n</code></pre><ul><li><strong>ETag/If-None-Match</strong>：由服务端给当前文件生成的唯一标识，服务器通过 <code>Respones Header</code> 把值传改浏览器。浏览器则会在下次请求时，将 <code>ETag</code> 的值作为<code>If-None-Match</code> 字段的内容，发送给浏览器进行对比。 <ul><li>如果两者不一样，说明要更新了。返回新的资源，跟常规的 HTTP 请求响应的流程一样。</li><li>否则返回 304，告诉浏览器直接用缓存。</li></ul></li></ul><p><strong>总结流程</strong></p><p><img src="https://i.loli.net/2021/01/08/ZMNXJvTtl8pF5GV.png" alt="http_cache.png"></p><p>先看强缓存，在看协商缓存，如果命中强缓存，则不执行协商缓存。</p><ul><li>强缓存 <ul><li>pragma</li><li>Exprires</li><li>Cache-contorl</li></ul></li><li>协商缓存 <ul><li>Last-Modified/If-Modified-Since</li><li>ETag-If-None-Match</li></ul></li></ul><p>未命中缓存，则重新从服务器请求更新资源，然后服务端返回资源和 200 状态码 若命中缓存，则直接从缓存中获取资源，返回 304，告诉浏览器直接从缓存获取资源</p><p><strong>缓存参考文档</strong></p>',63),a={href:"https://www.jianshu.com/p/227cee9c8d15",target:"_blank",rel:"noopener noreferrer"},i=(0,r.Uk)("简书-一文读懂 http 缓存（超详细）"),o={href:"http://47.98.159.95/my_blog/perform/001.html#%E5%BC%BA%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"},h=(0,r.Uk)("神三元 - 能不能说一说前端缓存"),d={href:"https://zhuanlan.zhihu.com/p/58685072",target:"_blank",rel:"noopener noreferrer"},s=(0,r.Uk)("知乎-HTTP 缓存机制"),p=(0,r.uE)('<h3 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h3><p><img src="https://i.loli.net/2021/01/08/uM2mTR1fSxVDezr.png" alt="corss_domain.png"></p><p>跨域的产生原因是浏览器的同源策略，也就是请求的地址必须与当前地址的协议、域名、端口一致。</p><p>常用的处理跨域的方法有三种：</p><ul><li>jsonp</li><li>CORS</li><li>Server-Proxy</li></ul><p>我经常用的是 CORS（跨域资源共享）后端设置一下就完事了。</p><p>简单介绍一下 CORS 吧，CORS 的请求分为两种，分别是：</p><ul><li>简单请求</li><li>复杂请求</li></ul><p>当请求方法是：HEAD、GET、POST 时，都属于简单请求，如果非以上三种请求方法，则属于复杂请求，比如 PUT、DELETE 请求，复杂请求发送时，需要先发送<strong>预检请求</strong>，询问服务器是否支持当前请求的域名和方法，如果服务器支持，则和简单请求一样发送即可，如果不支持，则触发报错。</p>',9),c=(0,r.Uk)("还有关于请求头的一些设置和限制，更详细的可以看参考"),T={href:"http://www.ruanyifeng.com/blog/2016/04/cors.html",target:"_blank",rel:"noopener noreferrer"},u=(0,r.Uk)("阮一峰-跨域资源共享 CORS 详解"),g=(0,r.Uk)("。"),m=(0,r.Wm)("p",null,[(0,r.Wm)("strong",null,"参考")],-1),P={href:"https://zhuanlan.zhihu.com/p/25778815",target:"_blank",rel:"noopener noreferrer"},b=(0,r.Uk)("一文看懂跨域"),f={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"},H=(0,r.Uk)("跨域资源共享 CORS"),x=(0,r.Wm)("h3",{id:"参考",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),(0,r.Uk)(" 参考")],-1),k=(0,r.Wm)("li",null,"《图解 HTTP》",-1),W={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP",target:"_blank",rel:"noopener noreferrer"},S=(0,r.Uk)("MDN-HTTP 教程"),E={href:"https://www.runoob.com/http/http-tutorial.html",target:"_blank",rel:"noopener noreferrer"},w=(0,r.Uk)("菜鸟教程-HTTP 教程"),C={href:"https://juejin.im/post/5e76bd516fb9a07cce750746",target:"_blank",rel:"noopener noreferrer"},y=(0,r.Uk)("掘金-（建议精读）HTTP 灵魂之问，巩固你的 HTTP 知识体系"),U=(0,r.uE)('<h2 id="http1-1" tabindex="-1"><a class="header-anchor" href="#http1-1" aria-hidden="true">#</a> HTTP1.1</h2><ul><li><strong>缓存处理</strong>：多了 Entity tag，If-Unmodified-Since, If-Match, If-None-Match 等缓存信息（HTTTP1.0 If-Modified-Since,Expires）</li><li>带宽优化及网络连接的使用</li><li>错误通知的管理</li><li>Host 头处理</li><li><strong>长连接</strong>： HTTP1.1 中默认开启 Connection： keep-alive，一定程度上弥补了 HTTP1.0 每次请求都要创建连接的缺点</li></ul><h2 id="http2-0" tabindex="-1"><a class="header-anchor" href="#http2-0" aria-hidden="true">#</a> HTTP2.0</h2><blockquote><p>HTTP2.0 是基于 1999 年发布的 http1.0 之后的首次更新</p></blockquote>',4),v=(0,r.Uk)("你可以通过 "),_={href:"https://http2.akamai.com/demo",target:"_blank",rel:"noopener noreferrer"},q=(0,r.Uk)("该链接"),I=(0,r.Uk)(" 感受下 HTTP 2.0 比 HTTP 1.X 到底快了多少。"),L=(0,r.uE)('<p>提升点有：</p><ul><li><strong>提升访问速度</strong> 相比请求资源所需时间更少，访问速度更快</li><li><strong>多路复用</strong> 多路复用允许同时通过单一的 HTTP 链接发送多重请求-响应信息。改善了在 HTTP1.1 中，浏览器在同一时间，针对同一域名下的请求有一定数量限制（链接限制），超过限制会被堵塞的问题。 有了多路复用，像之前的优化方式——雪碧图，就大可不必了。 在 HTTP2.0 中，有两个非常重要的概念，分别是帧（frame）和流（stream）。 帧代表的是最小的数据单位，每个帧会标识出属于哪个流，流也是通过多个帧组成的数据流。 多路复用，就是在一个 TCP 链接中存在多个请求的数据流，通过这个技术，可以避免 HTTP 旧版本的 header 阻塞的问题，极大的提升了传输性能。 简单来说， 就是在同一个 TCP 连接，同一时刻可以传输多个 HTTP 请求。</li><li><strong>二进制传输</strong> HTTP2.0 会将所有的传输信息分割为更小的信息或者帧，并对他们进行二进制编码。 HTTP2.0 中所有的加强性能的核心点在于此。在此前旧版本的 HTTP1.x 中，是通过文本的方式传输数据。 在 HTTP2.0 中引入了新的编码机制，所有传输的数据都会别分割，并采用二进制编码。 <img src="https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-43760.png" alt=""></li><li><strong>首部压缩</strong> 在 HTTP1.x 中，我们使用文本的形式传输 header，在 header 携带 cookie 的情况下，每次都要重复传输几百-几千个字节。在 HTTP2.0 中，使用 HPACK 压缩格式对传输的 header 进行编码，减少了 header 的大小。并在两端维护了索引表，用于记录出现过的 header，在后面的传输过程中就可以传输已经记录过的 header 的健名，对端收到数据后就可以通过健名找到对应的值。</li><li><strong>服务端推送</strong> 在 HTTP2.0 中，服务端可以在客户端某个请求后，主动推送其他资源。 可以想象某些情况，一些资源客户端是一定会请求的，这时就可以采取服务端推送的方式，提前给客户端推送必要的资源，减少延迟时间，也可以使用 prefetch。 其实刷码登录就是在支持比较好的浏览器中使用服务端推送，在用户扫码后，服务端推送扫码状态和消息。</li></ul><h2 id="https" tabindex="-1"><a class="header-anchor" href="#https" aria-hidden="true">#</a> HTTPS</h2><p>HTTPS 还是通过 HTTP 来传输信息的，但是信息通过 TLS 协议进行了加密处理。</p><blockquote><p>http 和 https 的区别：相比于 HTTP，HTTPS 是基于 SSL 加密传输的协议</p></blockquote><p>先说 HTTP 协议，HTTP 协议是一种<code>超文本传输协议（Hypertext Transfer protocol）</code>协议，在计算机世界里专门在两点之间传输文字、图片、音频、视频等超文本数据的约定和规范。</p><p>HTTPS 是 HTTP 协议的一种扩展，它本身并不保证传输的安全性，那么谁来保证呢？在 HTTPS 中，使用<code>传输层安全性（TLS）</code>或者<code>安全套接字层（SSL）</code>对通信进行加密。 也就是<strong>HTTP + SSL（TLS） = HTTPS</strong></p><h3 id="https-做了什么" tabindex="-1"><a class="header-anchor" href="#https-做了什么" aria-hidden="true">#</a> HTTPS 做了什么</h3><ul><li><strong>内容加密（Encryption）</strong>：HTTPS 通过对数据加密来使其免受窃听者对数据的监听，可以保证数据不被窃听、保证<strong>数据安全</strong>。</li><li><strong>保证数据完整性（Data integrtiy）<strong>数据在传输过程中不会被窃听者所修改，用户发送的数据会</strong>完整</strong>的传输达到服务端，保证用户发什么，服务端就接受的是什么。</li><li><strong>身份认证（Authentication）</strong>：是指确认对方的真实身份，也就是<code>证明你是你</code>（可以比作人脸识别）,他可以防止中间人攻击并建立用户信任。</li></ul><p><img src="https://i.loli.net/2021/06/23/G82ZjdtCvnVYszI.png" alt=""></p><h3 id="什么是-ssl-tls" tabindex="-1"><a class="header-anchor" href="#什么是-ssl-tls" aria-hidden="true">#</a> 什么是 SSL/TLS</h3><p>TLS 协议位于传输层之上，应用层之下，首次进行 TLS 协议传输需要两个 RTT，接下来可以通过 Session Resumption 减少到一个 RTT。</p><p>在 TLS 中使用了两种加密技术，分别是：对称加密 和 非对称加密</p><p><strong>对称加密</strong> 对称加密就是两边拥有相同的秘钥，两边都知道如何将密文加密解密</p><p><strong>非对称加密</strong> 有公钥和私钥之分，公钥就是所有人都可以知道，可以将数据用于公钥加密，但是将数据解密必须使用私钥解密，私钥只有分发公钥的一方才知道。</p><h3 id="和-http-的区别" tabindex="-1"><a class="header-anchor" href="#和-http-的区别" aria-hidden="true">#</a> 和 HTTP 的区别</h3><ul><li>HTTPS 是 HTTP 协议的安全版本，HTTP 协议的数据传输是明文的，是不安全的，HTTPS 使用了 <strong>SSL/TLS</strong> 协议进行了加密处理。</li><li>http 和 https 使用连接方式不同，默认端口也不一样，http 是 80，https 是 443。</li></ul><h3 id="参考-1" tabindex="-1"><a class="header-anchor" href="#参考-1" aria-hidden="true">#</a> 参考</h3>',18),R={href:"https://juejin.cn/post/6844904100035821575",target:"_blank",rel:"noopener noreferrer"},N=(0,r.Uk)("（建议精读）HTTP 灵魂之问，巩固你的 HTTP 知识体系"),M={href:"https://juejin.cn/post/6844903990648389645",target:"_blank",rel:"noopener noreferrer"},A=(0,r.Uk)("HTTP 和 HTTPS 协议，看一篇就够了"),j={href:"https://juejin.cn/post/6844904089495535624",target:"_blank",rel:"noopener noreferrer"},O=(0,r.Uk)("看完这篇 HTTPS，和面试官扯皮就没问题了"),D={href:"https://juejin.cn/post/6844904127420432391",target:"_blank",rel:"noopener noreferrer"},z=(0,r.Uk)("《大前端进阶 安全》系列 HTTPS 详解（通俗易懂）"),B=(0,r.uE)('<h2 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp" aria-hidden="true">#</a> TCP</h2><h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3><p>TCP 协议的作用是：保证数据通信的完整性和可靠性，防止丢包。</p><h3 id="三次握手" tabindex="-1"><a class="header-anchor" href="#三次握手" aria-hidden="true">#</a> 三次握手</h3><p><img src="https://i.loli.net/2021/06/29/EsPNUoH3uBWySRj.png" alt=""></p><p>作用：确保双方都具有发送和接受的能力</p><h3 id="参考-2" tabindex="-1"><a class="header-anchor" href="#参考-2" aria-hidden="true">#</a> 参考</h3>',7),F={href:"https://www.ruanyifeng.com/blog/2017/06/tcp-protocol.html",target:"_blank",rel:"noopener noreferrer"},G=(0,r.Uk)("TCP 协议简介"),K={href:"https://juejin.cn/post/6844904070889603085",target:"_blank",rel:"noopener noreferrer"},V=(0,r.Uk)("(建议收藏)TCP 协议灵魂之问，巩固你的网路底层基础"),X=(0,r.uE)('<h2 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> WebSocket</h2><p>说 webSockt 之前先从服务端推动开始说起。</p><p>在 webStockt 之前，如果前端想要实现一个试试刷新的功能，最多的方法是采用<strong>轮询</strong>的方式，也就是前端定时的去请求后端更新数据，比如使用 setInterval。</p><p>但是轮询也有一些缺点：客户端发起请求后，即便是在数据没有更新的时候也会请求，就造成了资源浪费。</p><p>与轮询相关的还有一种长轮询，于一般的轮询不同的是，他会在发出请求后，一直等待服务端有了数据变动时候在响应。</p><p>长轮询和普通轮询的不同是因为长轮询采取的是阻塞模型（一直打电话，没收到就不挂电话），也就是说，客户端发起连接后，如果没消息，就一直不返回 Response 给客户端。直到有消息才返回，返回完之后，客户端再次建立连接，周而复始。</p><p>这两种方式都是客户端发起的请求，假如服务端的数据并没有发生变化，客户端其实是没必要发生请求的，那可不可以由服务端发起请求，这样是不是就方便多了，当服务端的数据发生改变后，向客户端推送岂不美哉。</p><p>其实 webStockt 就是这样的，可以有服务端向客户端发送请求。</p><p>参考：</p>',9),Y={href:"https://www.zhihu.com/question/20215561",target:"_blank",rel:"noopener noreferrer"},Z=(0,r.Uk)("知乎-WebSocket 是什么原理？为什么可以实现持久连接？"),J={href:"http://www.ruanyifeng.com/blog/2017/05/websocket.html",target:"_blank",rel:"noopener noreferrer"},Q=(0,r.Uk)("阮一峰-什么是 webSockt?"),$={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebSockets_API",target:"_blank",rel:"noopener noreferrer"},ee=(0,r.Uk)("MDN-webSocktAPI"),te=(0,r.Wm)("h2",{id:"udp",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#udp","aria-hidden":"true"},"#"),(0,r.Uk)(" UDP")],-1),le={render:function(e,t){const l=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.j4)(r.HY,null,[n,(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)("a",a,[i,(0,r.Wm)(l)])]),(0,r.Wm)("li",null,[(0,r.Wm)("a",o,[h,(0,r.Wm)(l)])]),(0,r.Wm)("li",null,[(0,r.Wm)("a",d,[s,(0,r.Wm)(l)])])]),p,(0,r.Wm)("p",null,[c,(0,r.Wm)("a",T,[u,(0,r.Wm)(l)]),g]),m,(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)("a",P,[b,(0,r.Wm)(l)])]),(0,r.Wm)("li",null,[(0,r.Wm)("a",f,[H,(0,r.Wm)(l)])])]),x,(0,r.Wm)("ul",null,[k,(0,r.Wm)("li",null,[(0,r.Wm)("a",W,[S,(0,r.Wm)(l)])]),(0,r.Wm)("li",null,[(0,r.Wm)("a",E,[w,(0,r.Wm)(l)])]),(0,r.Wm)("li",null,[(0,r.Wm)("a",C,[y,(0,r.Wm)(l)])])]),U,(0,r.Wm)("p",null,[v,(0,r.Wm)("a",_,[q,(0,r.Wm)(l)]),I]),L,(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)("a",R,[N,(0,r.Wm)(l)])]),(0,r.Wm)("li",null,[(0,r.Wm)("a",M,[A,(0,r.Wm)(l)])]),(0,r.Wm)("li",null,[(0,r.Wm)("a",j,[O,(0,r.Wm)(l)])]),(0,r.Wm)("li",null,[(0,r.Wm)("a",D,[z,(0,r.Wm)(l)])])]),B,(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)("a",F,[G,(0,r.Wm)(l)])]),(0,r.Wm)("li",null,[(0,r.Wm)("a",K,[V,(0,r.Wm)(l)])])]),X,(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)("a",Y,[Z,(0,r.Wm)(l)])]),(0,r.Wm)("li",null,[(0,r.Wm)("a",J,[Q,(0,r.Wm)(l)])]),(0,r.Wm)("li",null,[(0,r.Wm)("a",$,[ee,(0,r.Wm)(l)])])]),te],64)}}}}]);