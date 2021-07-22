(self.webpackChunk=self.webpackChunk||[]).push([[6309],{7060:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-66343f5e",path:"/articles/WeApp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%B8%AD%E5%9B%BE%E7%89%87%E7%82%B9%E5%87%BB%E5%85%A8%E5%B1%8F-%E5%8F%AF%E6%BB%91%E5%8A%A8.html",title:"小程序中图片点击全屏-可滑动",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"articles/WeApp/小程序中图片点击全屏-可滑动.md",git:{updatedTime:1626953563e3,contributors:[]}}},869:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>l});var p=a(6252);const t=(0,p.uE)('<h1 id="小程序中图片点击全屏-可滑动" tabindex="-1"><a class="header-anchor" href="#小程序中图片点击全屏-可滑动" aria-hidden="true">#</a> 小程序中图片点击全屏-可滑动</h1><p>在小程序中，如果页面中有多张图片，那么用户可能会习惯向在朋友圈中一样打开图片，这里微信也提供了类似的api，可以直接拿来实现这个效果。</p><p><img src="https://upload-images.jianshu.io/upload_images/7072486-7fc5e2b1a2180d76.gif?imageMogr2/auto-orient/strip" alt="小程序图片点击全屏.gif"></p><p>wxml:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>block</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{arrImg}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{key}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> \n    <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{item}}<span class="token punctuation">&quot;</span></span> \n    <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>previewimgs<span class="token punctuation">&#39;</span></span> \n    <span class="token attr-name">data-img</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{item}}<span class="token punctuation">&quot;</span></span> \n    <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>aspectFill<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>image</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>block</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>wxss:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* perviewimg/perviewimg.wxss */</span>\n<span class="token selector">view</span><span class="token punctuation">{</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">image</span><span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200rpx<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 200rpx<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> 10rpx<span class="token punctuation">;</span>  \n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>js:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// perviewimg/perviewimg.js</span>\n<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token doc-comment comment">/**\n   * 页面的初始数据\n   */</span>\n  data<span class="token operator">:</span> <span class="token punctuation">{</span>\n    arrImg<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;http://images.cdn.huiur.com/files/track/2019-07-16/img/img_5d2d47e38d473.jpeg-smimage&#39;</span><span class="token punctuation">,</span>\n      <span class="token string">&#39;http://images.cdn.huiur.com/files/track/2019-07-16/img/img_5d2d47e38d826.jpeg-smimage&#39;</span><span class="token punctuation">,</span>\n      <span class="token string">&#39;http://images.cdn.huiur.com/files/track/2019-07-16/img/img_5d2d47e38e924.jpeg-smimage&#39;</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">previewimgs</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> currentImg <span class="token operator">=</span> e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>img<span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>currentImg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    wx<span class="token punctuation">.</span><span class="token function">previewImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      current<span class="token operator">:</span> currentImg<span class="token punctuation">,</span> <span class="token comment">// 当前显示图片的http链接 String</span>\n      urls<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>arrImg <span class="token comment">// 需要预览的图片http链接列表 Array</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>',9),e=(0,p.Uk)("微信官方文档链接："),c={href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html",target:"_blank",rel:"noopener noreferrer"},o=(0,p.Uk)("在新页面中全屏预览图片"),l={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,(0,p.Wm)("p",null,[e,(0,p.Wm)("a",c,[o,(0,p.Wm)(a)])])],64)}}}}]);