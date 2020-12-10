FROM registry-vpc.cn-shenzhen.aliyuncs.com/macrowolf/nginx

ENV VIRTUAL_HOST blog.bingov5.com,www.bingov5.com,bingov5.com
ENV LETSENCRYPT_HOST blog.bingov5.com,www.bingov5.com,bingov5.com

COPY . /usr/share/nginx/html