# docs

[foo](/foo/)  
[bar](/bar/)


中文测试

&nbsp;&nbsp;\&nbsp;首行缩进测试  

&nbsp;　　全角(space + 空格) + \&nbsp;首行缩进测试

&emsp;&emsp;\&emsp; 首行缩进测试


| Tables        | Are           | Cool  |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      | $12   |
| zebra stripes | are neat      | $1    |

# emoji

:tada: :100:  
✈️  


# 目录

[[toc]]

&emsp;&emsp;目录（Table of Contents）的渲染可以通过 [markdown.toc](https://vuepress.vuejs.org/zh/config/#markdown-toc) 选项来配置。  


# 自定义容器

**Input**

```

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous wraning
:::

```

**Output**

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous wraning
:::


自定义标题

```

::: danger STOP
Danger zone, do not proceed
:::

```

::: danger STOP
Danger zone, do not proceed
:::


# 代码块中的行高亮

**Input**

````
``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````


**Output**

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

# 行号

设置后可能需要重启服务器才生效

```

module.exports = {
  markdown: {
    lineNumbers: true
  }
}

```


``` shell

git init 
git add .
git commit -m 'deploy'

```

``` html

<h1>Line</h1>
<p>
  More line numbers?
</p>

```

# 导入代码片段

支持高亮

```
<<< @/filepath{highlightLines}
<<< ./filepath{highlightLines}
```

**Input**

```
<<< @/vuepress-test/test/markdown/fragments/test.js{2}
<<< ./vuepress-test/test/markdown/fragments/test.js{2}
```

**Output**

<<< @./test/markdown/fragments/test.js{2}

<<< ./test/markdown/fragments/test.js{2}


::: tip 注意
由于代码段的导入将在 webpack 编译之前执行，因此你无法使用 webpack 中的路径别名，此处的 @ 默认值是 process.cwd()
:::



# 在Markdown 中使用 Vue 

在beforeMount或mounted 中使用 浏览器/ DOM 的 API

只在客户端渲染

``` vue
<ClientOnly>
  <NonSSRFriendlyComponent/>
</ClientOnly>
```

::: tip 注意
请注意，这并不能解决一些组件或库在导入时就试图访问浏览器 API 的问题 —— 如果需要使用这样的组件或库，你需要在合适的生命周期钩子中动态导入它们：
:::

``` js
<script>
export default {
  mounted () {
    import('./lib-that-access-window-on-import').then(module => {
      // use code
    })
  }
}
</script>
```


## 模板语法

### 插值

每一个 Markdown 文件将首先被编译成 HTML，接着作为一个 Vue 组件传入 vue-loader，这意味着你可以在文本中使用 Vue 风格的插值

**Input**

```
{{ 1 + 1 }}
```

**Output**

<div class="language-text">
  <pre><code>{{ 1 + 1 }}</code></pre>
</div>

### 指令

**Input**

```
<span v-for="(i, k) in 3" :key="k">{{ i }}</span>
```

**Output**

<div class="language-text">
  <pre><code><span v-for="(i, k) in 3" :key="k">{{ i }} </span></code></pre>
</div>


# 访问网站以及页面的数据

编译后的组件没有私有数据，但可以访问 网站的元数据

**Input**

```
{{ $page }}
```

**Output**

{{ $page }}


``` json
{ 
   "key": "v-8c149478429c8",
   "path": "/",
   "title": "docs",
   "headers": [{
      "level": 2,
      "title": "模板语法",
      "slug": "模板语法" 
    },
    { 
      "level": 3,
      "title": "插值",
      "slug": "插值" 
    },
    { 
      "level": 3,
      "title": "指令",
      "slug": "指令" 
    }],
   "frontmatter": {} 
}
```

# Escaping

&emsp;&emsp;默认情况下，块级 (block) 的代码块将会被自动包裹在 v-pre 中。如果你想要在内联 (inline) 的代码块或者普通文本中显示原始的大括号，或者一些 Vue 特定的语法，你需要使用自定义容器 v-pre 来包裹  

**Input**

```md 
::: v-pre
`{{ This will be displayed as-is }}`
:::
```

**Output**

::: v-pre
`{{ This will be displayed as-is }}`
:::

# 使用组件

&emsp;&emsp;所有在 .vuepress/components 中找到的 *.vue 文件将会自动地被注册为全局的异步组件

```md
.
└─ .vuepress
   └─ components
      ├─ demo-1.vue
      ├─ OtherComponent.vue
      └─ Foo
         └─ Bar.vue
```

&emsp;&emsp;你可以直接使用这些组件在任意的 Markdown 文件中（组件名是通过文件名取到的）


```vue
<demo-1/>  
<OtherComponent/>  
<Foo-Bar/>  
```

<demo-1/>  
<OtherComponent/>  
<Foo-Bar/>  


::: warning 重要
请确保一个自定义组件的名字包含连接符或者是 PascalCase，否则，它将会被视为一个内联元素，并被包裹在一个 <p> 标签中，这将会导致 HTML 渲染紊乱，因为 HTML 标准规定， <p> 标签中不允许放置任何块级元素。
:::


# 使用预处理器


&emsp;&emsp;VuePress 对以下预处理器已经内置相关的 webpack 配置：sass、scss、less、stylus 和 pug。要使用它们你只需要在项目中安装对应的依赖即可。例如，要使用 sass，需要安装

``` sh
yarn add -D sass-loader node-sass
npm install -D sass-loader node-sass
```


然后你就可以在 Markdown 或是组件中使用如下代码

``` vue
<style lang="sass">
  .title
    font-size: 20px
</style>
```


::: tip
需要指出的是，如果你是一个 stylus 用户，你并不需要在你的项目中安装 stylus 和 stylus-loader，因为 VuePress 已经内置了它们。

对于那些没有内置的预处理器，除了安装对应的依赖，你还需要 [拓展内部的 Webpack 配置](https://vuepress.vuejs.org/zh/config/#configurewebpack)。
:::

# 脚本和样式提升

`有时，你可以只想在当前页面应用一些 JavaScript 或者 CSS，在这种情况下，你可以直接在 Markdown 文件中使用原生的 <script> 或者 <style> 标签，它们将会从编译后的 HTML 文件中提取出来，并作为生成的 Vue 单文件组件的 <script> 和 <style> 标签。`

``` vue
<p class="demo" :class="$style.example"></p>

<style module>
  .example {
    color: #41b833;
  }
</style>

<script>
export default {
  mounted () {
    document.querySelector(`.${this.$style.example}`)
      .textContent = `这个块是被内联的脚本渲染的，样式也采用了内联样式。`
  }
}
</script>
```


<p class="demo" :class="$style.example"></p>

<style module>
  .example {
    color: #41b833;
  }
</style>

<script>
export default {
  mounted () {
    document.querySelector(`.${this.$style.example}`)
      .textContent = `这个块是被内联的脚本渲染的，样式也采用了内联样式。`
  }
}
</script>


# 内置的组件

**OutboundLink**

(<OutboundLink/>)用来表明当前是一个外部链接。在 VuePress 中这个组件会紧跟在每一个外部链接后面


**ClientOnly**

参考 [浏览器的 API 访问限制](https://vuepress.vuejs.org/zh/guide/using-vue.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84-api-%E8%AE%BF%E9%97%AE%E9%99%90%E5%88%B6)


**Content**
- Props
  - custom - boolean

- 用法

当前的 .md 文件渲染的内容，当你在使用 自定义布局 时，它将非常有用。

``` vue
<Content/>
```

参考:

- [自定义主题 > 获取渲染内容](https://vuepress.vuejs.org/zh/guide/custom-themes.html#%E8%8E%B7%E5%8F%96%E6%B8%B2%E6%9F%93%E5%86%85%E5%AE%B9)



**Badge**


- Props

  - text - string
  - type - string, 可选值： "tip"|"warn"|"error"，默认值是： "tip"
  - vertical - string, 可选值： "top"|"middle"，默认值是： "top"

使用

你可以在标题文本的末尾，使用这个组件来为某些 API 添加一些状态

``` vue
## Badge <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/>
```

## Badge <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/>


