(self.webpackChunk=self.webpackChunk||[]).push([[935],{5978:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-2b37bb81",path:"/computer-base/LeetCode/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"描述",slug:"描述",children:[]},{level:2,title:"解法",slug:"解法",children:[{level:3,title:"递归",slug:"递归",children:[]}]},{level:2,title:"总结",slug:"总结",children:[]}],filePathRelative:"computer-base/LeetCode/二叉树的最大深度.md",git:{updatedTime:1626953563e3,contributors:[]}}},942:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>d});var e=a(6252);const p=(0,e.uE)('<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p>给定一个二叉树，找出其最大深度。</p><p>二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。</p><p>说明:  叶子节点是指没有子节点的节点。</p><p>示例： 给定二叉树 [3,9,20,null,null,15,7]，</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    3\n   / \\\n  9  20\n    /  \\\n   15   7\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>返回它的最大深度  3 。</p>',7),t=(0,e.Uk)("题目链接："),o={href:"https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("二叉树的最大深度"),r=(0,e.uE)('<h2 id="解法" tabindex="-1"><a class="header-anchor" href="#解法" aria-hidden="true">#</a> 解法</h2><p>因为 JS 没有二叉树的数据结构，所以新建了一个 TreeNode 的 Class，发现用 TS 写真香...</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//Definition for a binary tree node.</span>\n<span class="token keyword">class</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>\n  val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  left<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  right<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>val<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> left<span class="token operator">?</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> right<span class="token operator">?</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> left <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> left<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> right <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> right<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>复杂度分析</strong></p><p>假设树上一共 n 个节点。</p><ul><li>时间复杂度：这里遍历了这棵树，渐进时间复杂度为 O(n)。</li><li>空间复杂度：这里的空间复杂度和递归使用的栈空间有关，这里递归层数不超过 n，故渐进空间复杂度为 O(n)。</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>学到了两个操作符：</p><ul><li><code>,</code> 逗号操作符 对它的每个操作数求值（从左到右），并返回最后一个操作数的值。</li><li><code>!</code> ! 表示一定有值 或者 表示 当前值不为 null 和 undefined</li></ul><p>可以结合 VScode 的 Code Runner 插件 配置 TS，进行代码调试，两种方式（Node or Deno）可选：</p>',12),c={href:"https://blog.csdn.net/HermitSun/article/details/106711982",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("VSCode 插件 Code Runner + Deno 运行 ts 代码"),i={href:"https://blog.csdn.net/mouday/article/details/103800887",target:"_blank",rel:"noopener noreferrer"},k=(0,e.Uk)("VSCode 插件 Code Runner + Node 运行 ts 代码"),d={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[p,(0,e.Wm)("p",null,[t,(0,e.Wm)("a",o,[l,(0,e.Wm)(a)])]),r,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("a",c,[u,(0,e.Wm)(a)])]),(0,e.Wm)("li",null,[(0,e.Wm)("a",i,[k,(0,e.Wm)(a)])])])],64)}}}}]);