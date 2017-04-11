<template>
<div>
<button @click="toShow">显示</button>
<div v-show="show">
	<pre>
	<code># gen-time  2017-03-20 10:49:26
# vs-name   hello.com

lua_shared_dict api_hello.com_sysconfig 1m;
lua_shared_dict kv_api_hello.com_upstream 100m;

upstream hello.com.beta {
  least_conn;
  server 172.20.71.77:8020 max_fails=1 weight=1 fail_timeout=10;  
  server 172.20.71.77:8021 max_fails=1 weight=1 fail_timeout=10;  
  server 172.20.71.77:8022 max_fails=1 weight=1 fail_timeout=10;  
  server 172.20.71.77:8023 max_fails=1 weight=1 fail_timeout=10;  
  keepalive 65535;

}

upstream hello.com.stable {
  ip_hash;
  server 172.20.71.77:8040 max_fails=1 weight=1 fail_timeout=10;  
  keepalive 65535;

}


server {
  listen       8001;
  server_name  hello.com;
  access_log logs/hello.com_access.log;
  error_log  logs/hello.com_error.log;

  proxy_redirect off;
  proxy_set_header Host $http_host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $remote_addr;

  set $redis_host '172.20.70.75';
  set $redis_port '6379';
  set $redis_connect_timeout 10000;
  set $redis_dbid 0;
  set $redis_pool_size 1000;
  set $redis_keepalive_timeout 90000;

  set $hostkey $server_name;
  set $sysConfig api_hello.com_sysconfig;
  set $kv_upstream kv_api_hello.com_upstream;
  set $backend hello.com.stable;

  location /status {
   if ($request_method = 'OPTIONS') {
     add_header 'Access-Control-Allow-Origin' '*';
     add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
     add_header 'Access-Control-Allow-Headers' 'Authorization,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';
     add_header 'Access-Control-Max-Age' 1728000;
     add_header 'Content-Type' 'text/plain charset=UTF-8';
     add_header 'Content-Length' 0;
     return 204;
    }
   vhost_traffic_status_display;
   vhost_traffic_status_display_format html;
   add_header 'Access-Control-Allow-Origin' '*';
   add_header 'Access-Control-Allow-Methods' 'GET,OPTIONS';
  }

  location / {
   				rewrite_by_lua_file 'lualib/abtesting/diversion/diversion.lua';
    proxy_pass http://$backend;
  }
}
</code></pre>
</div>
</div>
</template>

<script>
  import hljs from 'highlight.js' 
  import 'highlight.js/styles/monokai-sublime.css'

  export default {
  	data() {
  		return {
  			show: false,
  		}
  	},
  	mounted() {
  		hljs.initHighlightingOnLoad();
  	},
  	methods: {
  		toShow() {
  			this.show = !this.show;
  			
  		}
  	}
  }
</script>

<style scoped>
</style>