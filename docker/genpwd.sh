#!/bin/bash

# 检查是否提供了用户名
if [ -z "$1" ]; then
  echo "请提供用户名作为参数"
  exit 1
fi

USERNAME=$1

# 提示用户输入密码
read -s -p "请输入密码: " PASSWORD
echo

# 使用 openssl 生成 bcrypt 加密的密码
HTPASSWD_LINE=$(openssl passwd -apr1 "$PASSWORD")

# 将用户名和加密后的密码写入 .htpasswd 文件
echo "$USERNAME:$HTPASSWD_LINE" > .htpasswd

echo "已生成 .htpasswd 文件，包含用户: $USERNAME"