FROM registry.cn-shenzhen.aliyuncs.com/bingozb/vuepress AS vp-builder

COPY . /tmp/bhnote

RUN cd /tmp/bhnote && npm install && npm run build

FROM registry.cn-shenzhen.aliyuncs.com/bingozb/nginx

ENV VIRTUAL_HOST www.bhnote.com,bhnote.com
ENV LETSENCRYPT_HOST www.bhnote.com,bhnote.com

COPY --from=vp-builder /tmp/bhnote/dist /usr/share/nginx/html