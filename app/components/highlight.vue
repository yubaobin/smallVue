<template>
	<pre>
	<code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">link</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"http://cdn.bootcss.com/highlight.js/8.0/styles/monokai_sublime.min.css"</span> <span class="hljs-attribute">rel</span>=<span class="hljs-value">"stylesheet"</span>&gt;</span>  
<span class="hljs-tag">&lt;<span class="hljs-title">script</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"http://cdn.bootcss.com/highlight.js/8.0/highlight.min.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>  
</code></pre>
</template>

<script>
  import hljs from 'highlight.js' 
  import 'highlight.js/styles/monokai-sublime.css'

  export default {
  	mounted() {
  		hljs.initHighlightingOnLoad();
  	}
  }
</script>

<style scoped>
</style>