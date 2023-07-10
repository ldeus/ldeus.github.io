title: Hexo+Next主题搭建个人博客+优化
author: ldeus
tags: []
categories: []
date: 2023-07-07 11:01:00
---
# Hexo+Next主题搭建个人博客+优化

### 写在前面

好久没写blog我都快忘了它的存在，现在突然想写一些什么了，故此重新clone了我的blog。clone回来发现了些许问题，稍作记录。
<!-- more -->
### 安装hexo

由于我已经安装过了，所以直接把之前的blog clone回来。

执行命令：
```shell
git clone -b hexo https://github.com/ldeus/ldeus.github.io.git
cd ldeus.github.io
hexo g
hexo s
```

### 主题安装

启动hexo发现`WARN  No layout: about/index.html`，然后发现主题文件夹里面的主题空了，重新clone一下next仓库。

执行命令：
```shell
git clone https://github.com/iissnan/hexo-theme-next themes/next
```


这回可以正常显示blog了，但是主题样式的配置直接就全部丢失了，那么就只能重新配置了。

后来发现，是因为仓库嵌套的原因导致的主题丢失，选了个简单的方法解决。

执行命令：
```shell
rm -rf themes/next/.git
```

#### 主题设定
##### 选择 Scheme
<div style="text-align:left">修改 <span id="inline-purple">主题配置文件</span> `themes/next/_config.yml`。</div>

```
# Scheme Settings
# Schemes
#scheme: Muse
#scheme: Mist
#scheme: Pisces
`scheme: Gemini`
```
##### 设置头像
<div style="text-align:left">编辑 <span id="inline-purple">主题配置文件</span> `themes/next/_config.yml`，修改字段 `avatar`， 值设置成头像的链接地址。</div>

```
# Sidebar Avatar
avatar: 
  # Replace the default image and set the url here.
  url: https://dn-qiniu-avatar.qbox.me/avatar/c4556090fb12d7606759d269fa90cb8f?s=320
  # If true, the avatar will be dispalyed in circle.
  rounded: true
  # If true, the avatar will be rotated with the cursor.
  rotated: true

```
##### 设置友链

<div style="text-align:left">hexo自带友链功能：编辑 <span id="inline-purple">主题配置文件</span> `themes/next/_config.yml`,修改字段 `links`，如下所示。</div>
```
# Blog rolls
links_settings:
  icon: fa fa-link
  title: Links
  # Available values: block | inline
  layout: block
links:
  iseki blog: https://blog.iseki.space/
```


###### 新增友链页面

<div style="text-align:left">链接多了以后，排版不是很美观，还是需要给友链新增一个单独的页面比较推荐：</div>

执行命令：
``` shell
hexo new page links
```

###### 配置menu增加友链页面
<div style="text-align:left">编辑 <span id="inline-purple">主题配置文件</span> `themes/next/_config.yml`,修改字段 `links`，如下所示。</div>
```
links: /links/ || link
```
`/themes/next/languages/zh-CN.yml`文件中`menu`下增加中文描述：
```
links: 友链
```
###### 新增links.swig页
在`/themes/next/layout/`新建`links.swig`，内容如下：
```
{% block content %}
  {######################}
  {### LINKS BLOCK ###}
  {######################}

    <div id="links">
        <style>

            #links{
               margin-top: 5rem;
            }

            .links-content{
                margin-top:1rem;
            }

            .link-navigation::after {
                content: " ";
                display: block;
                clear: both;
            }

            .card {
                width: 300px;
                font-size: 1rem;
                padding: 10px 20px;
                border-radius: 4px;
                transition-duration: 0.15s;
                margin-bottom: 1rem;
                display:flex;
            }
            .card:nth-child(odd) {
                float: left;
            }
            .card:nth-child(even) {
                float: right;
            }
            .card:hover {
                transform: scale(1.1);
                box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
            }
            .card a {
                border:none;
            }
            .card .ava {
                width: 3rem!important;
                height: 3rem!important;
                margin:0!important;
                margin-right: 1em!important;
                border-radius:4px;

            }
            .card .card-header {
                font-style: italic;
                overflow: hidden;
                width: 236px;
            }
            .card .card-header a {
                font-style: normal;
                color: #2bbc8a;
                font-weight: bold;
                text-decoration: none;
            }
            .card .card-header a:hover {
                color: #d480aa;
                text-decoration: none;
            }
            .card .card-header .info {
                font-style:normal;
                color:#a3a3a3;
                font-size:14px;
                min-width: 0;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
        </style>
        <div class="links-content">
            <div class="link-navigation">

                {% for link in theme.mylinks %}

                    <div class="card">
                        <img class="ava" src="{{ link.avatar }}"/>
                        <div class="card-header">
                        <div><a href="{{ link.site }}" target="_blank">@ {{ link.nickname }}</a></div>
                        <div class="info">{{ link.info }}</div>
                        </div>
                    </div>

                {% endfor %}

            </div>
            {{ page.content }}
            </div>
        </div>

  {##########################}
  {### END LINKS BLOCK ###}
  {##########################}
{% endblock %}
```
###### 修改page.swig
<div style="text-align:left">在`{ % block title % }`到`{ %- else % }{{- page.title + page_title_suffix }}`之间添加以下内容：</div>

```
  {% elif page.type === 'links' and not page.title %}
    {{ __('title.links') + page_title_suffix }}
```
<div style="text-align:left">在`{ % block content % }`到`{ % else % }{{ page.content }}`之间添加以下内容：</div>

```
        {% elif page.type === 'links' %}
           {% include 'links.swig' %}
```
###### 配置友链
<div style="text-align:left">编辑 <span id="inline-purple">主题配置文件</span> `themes/next/_config.yml`，在末尾处新增如下内容：</div>
```
# 友情链接
mylinks:
  - nickname: ldeus
    avatar: https://dn-qiniu-avatar.qbox.me/avatar/c4556090fb12d7606759d269fa90cb8f?s=320
    site: https://www.ldeus.com
    info: 保持热爱，奔赴山海

  - nickname: iseki blog
    avatar: https://avatars.githubusercontent.com/u/13687964?v=4
    site: https://blog.iseki.space
    info: 没什么，只是个备忘录
```

### SEO优化

#### sitemap
安装插件`sitemap`、`baidu-sitemap`。

执行命令：

```shell
npm install hexo-generator-sitemap --save
npm install hexo-generator-baidu-sitemap --save
```

<div style="text-align:left">将sitemap文件添加到<span id="inline-blue">站点配置文件</span>`_config.yml`中，并修改`url`字段的值，其值默认为http://yoursite.com。</div>

```
sitemap: 
  path: sitemap.xml
baidusitemap:
  path: baidusitemap.xml

url: https://www.ldeus.com
```
安装完成后执行`hexo g`即会在站点`public`目录下生成`sitemap.xml`和`baidusitemap.xml`。

#### 添加蜘蛛协议
在站点`source`文件夹下新建`robots.txt`文件，文件内容如下:
```
User-agent: *
Allow: /
Allow: /archives/
Allow: /categories/
Allow: /tags/ 
Allow: /resources/ 
Disallow: /vendors/
Disallow: /js/
Disallow: /css/
Disallow: /fonts/
Disallow: /vendors/
Disallow: /fancybox/

Sitemap: https://www.ldeus.com/sitemap.xml
Sitemap: https://www.ldeus.com/baidusitemap.xml
```
<div style="text-align:left">编辑<span id="inline-blue">站点配置文件</span>`_config.yml`修改`skip_render`字段，添加`robots.txt`。</div>
```
skip_render: ['README.md' , 'robots.txt']
```

### 在线编辑

整个web在线编辑页，方便写文章。  
执行命令：
```shell
npm install hexo-admin --save
```
在`hexo`启动之后就可以在`http://ip:4000/admin`在线编辑了。

在hexo目录下执行命令：
```shell
cat > hexo-deploy.sh <<EOF
#!/usr/bin/env sh
hexo clean && hexo g && hexo d
EOF
cat >> _config.yml << EOF
admin:
  deployCommand: './hexo-deploy.sh'
EOF
```
最后就可以在线deploy了。