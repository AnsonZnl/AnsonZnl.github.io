(self.webpackChunk=self.webpackChunk||[]).push([[5925],{6341:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-0d2fa3aa",path:"/computer-base/LeetCode/%E5%90%88%E5%B9%B6%E4%BA%8C%E5%8F%89%E6%A0%91.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"描述",slug:"描述",children:[]},{level:2,title:"解法",slug:"解法",children:[{level:3,title:"递归",slug:"递归",children:[]}]},{level:2,title:"总结",slug:"总结",children:[]}],filePathRelative:"computer-base/LeetCode/合并二叉树.md",git:{updatedTime:1626953563e3,contributors:[]}}},4550:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>c});var e=a(6252);const p=(0,e.uE)('<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p>给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。</p><p>你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为  NULL 的节点将直接作为新二叉树的节点。</p><p>示例  1:</p><p>输入:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\tTree 1                     Tree 2\n          1                         2\n         / \\                       / \\\n        3   2                     1   3\n       /                           \\   \\\n      5                             4   7\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>输出:<br> 合并后的树:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\t     3\n\t    / \\\n\t   4   5\n\t  / \\   \\\n\t 5   4   7\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>注意:  合并必须从两个树的根节点开始。</p>',9),t=(0,e.Uk)("题目链接："),o={href:"https://leetcode-cn.com/problems/merge-two-binary-trees/",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("合并二叉树"),r=(0,e.uE)('<h2 id="解法" tabindex="-1"><a class="header-anchor" href="#解法" aria-hidden="true">#</a> 解法</h2><p>因为 JS 没有二叉树的数据结构，所以新建了一个 TreeNode 的 Class，发现用 TS 写真香...</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//Definition for a binary tree node.</span>\n<span class="token keyword">class</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>\n  val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  left<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  right<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>val<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> left<span class="token operator">?</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> right<span class="token operator">?</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> left <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> left<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> right <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> right<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>\n  root1<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  root2<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>\n  <span class="token comment">// root2 有值 返回root2</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>root1 <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root2<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> root2<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// root2 没值 返回root1</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>root1 <span class="token operator">&amp;&amp;</span> root2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>root1 <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> root1<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 都有值的情况 合并</span>\n  root1<span class="token punctuation">.</span>val <span class="token operator">=</span> root1<span class="token punctuation">.</span>val <span class="token operator">+</span> root2<span class="token punctuation">.</span>val<span class="token punctuation">;</span>\n  root1<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  root1<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>right<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> root1<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><strong>复杂度分析</strong></p><ul><li>时间复杂度：O(n)。</li><li>空间复杂度：O(n)。</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>二叉树，无脑递归，先总结出一个节点的要做的事情的规律，然后让所有的节点都去做同样的事情。</p>',9),c={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[p,(0,e.Wm)("p",null,[t,(0,e.Wm)("a",o,[l,(0,e.Wm)(a)])]),r],64)}}}}]);