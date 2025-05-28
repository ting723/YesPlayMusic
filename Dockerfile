FROM guergeiro/pnpm:22-10 as build
ENV VUE_APP_NETEASE_API_URL=/api
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm config set electron_mirror https://npmmirror.com/mirrors/electron/ && \
    pnpm config set registry https://registry.npmmirror.com && \
    pnpm i
COPY . .
# 分步复制的方式利用了Docker的分层缓存机制
RUN pnpm build 

FROM nginx:1.20.2-alpine as yes-play-music

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories

COPY --from=build /app/docker/nginx.conf.example /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]