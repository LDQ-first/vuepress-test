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

