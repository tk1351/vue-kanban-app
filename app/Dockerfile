FROM node:16.13.1 As development

WORKDIR /app

RUN apt-get update && \
    apt-get install chromium -y && \
    chromium --version && \
    which chromium

ENV CHROME_BIN=/usr/bin/chromium-browser

RUN yarn install && \
    yarn global add @vue/cli @vue/cli-init
