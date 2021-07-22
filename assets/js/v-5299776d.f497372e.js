(self.webpackChunk=self.webpackChunk||[]).push([[2973],{4132:(e,t,a)=>{"use strict";a.r(t),a.d(t,{data:()=>n});const n={key:"v-5299776d",path:"/articles/RegExp/",title:"正则表达式",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"JS 中关于正则的方法",slug:"js-中关于正则的方法",children:[{level:3,title:"RegExp 实例方法",slug:"regexp-实例方法",children:[]},{level:3,title:"String 实例方法",slug:"string-实例方法",children:[]}]},{level:2,title:"匹配字符串",slug:"匹配字符串",children:[{level:3,title:"两种模糊匹配",slug:"两种模糊匹配",children:[]},{level:3,title:"字符组",slug:"字符组",children:[]},{level:3,title:"量词",slug:"量词",children:[]},{level:3,title:"案例分析",slug:"案例分析",children:[]}]}],filePathRelative:"articles/RegExp/README.md",git:{updatedTime:1626953563e3,contributors:[]}}},5132:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var n=a(6252);const s=(0,n.Wm)("h1",{id:"正则表达式",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#正则表达式","aria-hidden":"true"},"#"),(0,n.Uk)(" 正则表达式")],-1),d={href:"https://wangdoc.com/javascript/stdlib/regexp.html",target:"_blank",rel:"noopener noreferrer"},r=(0,n.Uk)("RegExp 对象"),o={href:"https://github.com/qdlaoyao/js-regex-mini-book",target:"_blank",rel:"noopener noreferrer"},c=(0,n.Uk)("《JS 正则表达式迷你书》"),l={href:"https://jex.im/regulex/",target:"_blank",rel:"noopener noreferrer"},i=(0,n.Uk)("正则可视化"),p=(0,n.uE)('<h2 id="js-中关于正则的方法" tabindex="-1"><a class="header-anchor" href="#js-中关于正则的方法" aria-hidden="true">#</a> JS 中关于正则的方法</h2><h3 id="regexp-实例方法" tabindex="-1"><a class="header-anchor" href="#regexp-实例方法" aria-hidden="true">#</a> RegExp 实例方法</h3><ul><li><code>reg.test(str)</code>：返回一个布尔值，表示当前模式是否能匹配参数字符串</li><li><code>reg.exec(str)</code>：返回匹配结果。如果发现匹配，就返回一个数组，成员是匹配成功的子字符串，否则返回 null</li></ul><h3 id="string-实例方法" tabindex="-1"><a class="header-anchor" href="#string-实例方法" aria-hidden="true">#</a> String 实例方法</h3><ul><li><code>String.match(reg)</code>：返回一个数组，成员是所有匹配的子字符串。</li><li><code>String.search(reg)</code>：按照给定的正则表达式进行搜索，返回一个整数，表示匹配开始的位置。</li><li><code>String.replace(reg, str)</code>：按照给定的正则表达式进行替换，返回替换后的字符串。</li><li><code>String.split(reg)</code>：按照给定规则进行字符串分割，返回一个数组，包含分割后的各个成员。</li></ul><h2 id="匹配字符串" tabindex="-1"><a class="header-anchor" href="#匹配字符串" aria-hidden="true">#</a> 匹配字符串</h2><h3 id="两种模糊匹配" tabindex="-1"><a class="header-anchor" href="#两种模糊匹配" aria-hidden="true">#</a> 两种模糊匹配</h3><table><thead><tr><th>匹配方式</th><th>如何匹配</th><th>写法</th><th>描述</th></tr></thead><tbody><tr><td>横向模糊匹配</td><td>量词</td><td><code>{n,m}</code></td><td>最少出现多少次，最多出现多少次。</td></tr><tr><td>纵向模糊匹配</td><td>字符组</td><td><code>[xyz]</code></td><td>匹配 x、y、z 的任何一个</td></tr></tbody></table><h3 id="字符组" tabindex="-1"><a class="header-anchor" href="#字符组" aria-hidden="true">#</a> 字符组</h3><p>当字符组中匹配的字符串特别的情况，可以使用简写。</p><ul><li>范围表示法：<code>[1-3]</code> 表示从 1、2、3 匹配任意一个数组</li><li>排除字符组：<code>[^abc]</code> 表示匹配除了 abc 之外的任意一个字符</li></ul><p>常见的简写形式：</p><table><thead><tr><th>字符组</th><th>描述</th></tr></thead><tbody><tr><td><code>[0-9]</code> or <code>\\d</code></td><td>表示匹配 0-9 的一位数字</td></tr><tr><td><code>[a-z]</code></td><td>匹配 a-z 的一个字母</td></tr><tr><td><code>[A-Z]</code></td><td>匹配 A-Z 的一个字母</td></tr><tr><td><code>\\d</code> 和 <code>\\D</code></td><td><code>\\d</code>表示[0-9]，<code>\\D</code>表示[^0-9]。记忆：digit</td></tr><tr><td><code>\\w</code> 和 <code>\\W</code></td><td><code>\\w</code>表示[0-9a-zA-Z]，<code>\\W</code>，表示[^0-9a-za-z]。记忆：word</td></tr><tr><td><code>\\s</code></td><td>表示<code>[ \\t\\v\\n\\r\\f]</code>。表示空白符，记忆方式：space</td></tr><tr><td><code>\\S</code></td><td>表示<code>[^ \\t\\v\\n\\r\\f]</code>。非空白符。</td></tr><tr><td><code>.</code></td><td>表示<code>[^\\n\\r\\u2028\\u2029]</code>。通配符，表示几乎任意字符。</td></tr></tbody></table><h3 id="量词" tabindex="-1"><a class="header-anchor" href="#量词" aria-hidden="true">#</a> 量词</h3><p><strong>量词简写</strong></p><table><thead><tr><th>字符组</th><th>具体含义</th></tr></thead><tbody><tr><td><code>{n,}</code></td><td>表示至少出现 n 次</td></tr><tr><td><code>{n}</code></td><td>等价于{n,n}，表示出现 n 次</td></tr><tr><td><code>?</code></td><td>等价于{0,1}，表示出现或者不出现。<br>记忆方式：问号的意思表示，有吗？</td></tr><tr><td><code>+</code></td><td>等价于{1,}，表示出现至少一次。<br>记忆方式：加号是追加的意思，得先有一个，然后才考虑追加。</td></tr><tr><td><code>*</code></td><td>等价于{0,}，表示出现任意次，有可能不出现。<br>记忆方式：看看天上的星星，可能一颗没有，可能零散有几颗，可能数也数不过来。</td></tr></tbody></table><p><strong>贪婪匹配和惰性匹配</strong></p><ul><li>惰性匹配：正则<code>/\\d{2,5}/</code> ，默认按照最多的匹配</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;12 123 4567 12345&quot;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d{2,5}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// [&quot;12&quot;, &quot;123&quot;, &quot;4567&quot;, &quot;12345&quot;]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>贪婪匹配：正则<code>/\\d{2,5}?/</code>，按照最少的匹配</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;12 123 4567 12345&quot;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d{2,5}?</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// [&quot;12&quot;, &quot;12&quot;, &quot;45&quot;, &quot;67&quot;, &quot;12&quot;, &quot;34&quot;]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>多选分支</strong></p><p>一个模式可以实现横向和纵向模糊匹配。而多选分支可以支持多个子模式任选其一。</p><p>具体形式如下：(p1|p2|p3)，其中 p1、p2 和 p3 是子模式，用|（管道符）分隔，表示其中任何之一。</p><p>例如要匹配字符串&quot;good&quot;和&quot;nice&quot;可以使用<code>/good|nice/</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;good nice&quot;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">good|nice</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// [&quot;good&quot;, &quot;nice&quot;]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>分支结构也是惰性的，即当前面的匹配上了，后面的就不再尝试了。</p><h3 id="案例分析" tabindex="-1"><a class="header-anchor" href="#案例分析" aria-hidden="true">#</a> 案例分析</h3>',28),u={render:function(e,t){const a=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[s,(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[(0,n.Wm)("a",d,[r,(0,n.Wm)(a)])]),(0,n.Wm)("li",null,[(0,n.Wm)("a",o,[c,(0,n.Wm)(a)])]),(0,n.Wm)("li",null,[(0,n.Wm)("a",l,[i,(0,n.Wm)(a)])])]),p],64)}}}}]);