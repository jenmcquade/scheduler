FROM node:alpine

ARG CRON
ENV CRON=$CRON

COPY ./entrypoint /usr/local/bin/
COPY ./App.js /
COPY ./scheduler.js /
COPY ./package.json /

RUN ["chmod", "+x", "/usr/local/bin/entrypoint"]

RUN apk add --no-cache bash && npm install

CMD ['node scheduler.js']
ENTRYPOINT ["entrypoint"]

WORKDIR /

