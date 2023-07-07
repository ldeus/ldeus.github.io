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
```
git clone -b hexo https://github.com/ldeus/ldeus.github.io.git
cd ldeus.github.io
hexo g
hexo s
```

### 主题安装

启动hexo发现`WARN  No layout: about/index.html`,然后发现主题文件夹里面的主题空了，重新clone一下next仓库。

执行命令：
```
git clone https://github.com/iissnan/hexo-theme-next themes/next
```


这回可以正常显示blog了，但是主题样式的配置直接就全部丢失了，那么就只能重新配置了。

#### 主题设定
##### 选择 Scheme
修改主题配置文件`themes/next/_config.yml`。

```
# Scheme Settings
# Schemes
#scheme: Muse
#scheme: Mist
#scheme: Pisces
scheme: Gemini
```
##### 设置头像
编辑 主题配置文件`themes/next/_config.yml`，修改字段 `avatar`， 值设置成头像的链接地址。

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
##### 设置友联
编辑 主题配置文件`themes/next/_config.yml`,修改字段 `links`，如下所示。
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
### 在线编辑
整个web在线编辑页，方便写文章。  
执行代码：
```
npm install hexo-admin --save
```
在`hexo s`启动之后就可以在`http://ip:4000/admin`在线编辑了。