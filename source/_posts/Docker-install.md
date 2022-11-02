title: Docker安装
author: ldeus
date: 2022-11-02 10:55:44
tags:
---
# Docker安装
学习和记录  
参考官方文档：https://docs.docker.com
<!-- more -->
#### 安装 yum-utils
`yum install -y yum-utils`
#### 配置 Docker yum 源
国内推荐配置阿里源：
```
sudo yum-config-manager \
--add-repo \
http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```
国外推荐配置官方源：
```
sudo yum-config-manager \
--add-repo \
https://download.docker.com/linux/centos/docker-ce.repo
```
#### 安装最新版本的 Docker Engine、containerd 和 Docker Compose
`sudo yum install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin`
#### 启动Docker
```
systemctl start docker #启动docker
systemctl enable docker #自启docker
```
#### 镜像加速器配置
```
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["加速地址"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```
163：http://hub-mirror.c.163.com  
utsc：https://docker.mirrors.ustc.edu.cn  
阿里：需要登录控制台获取加速地址https://cr.console.aliyun.com/cn-beijing/instances/mirrors