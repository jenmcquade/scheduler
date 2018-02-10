FROM node:alpine

ARG CRON
ARG INTERVAL
ENV CRON=$CRON
ENV INTERVAL=$INTERVAL

COPY ./entrypoint /usr/local/bin/
COPY ./env.js /
COPY ./App.js /
COPY ./scheduler.js /
COPY ./package.json /

RUN ["chmod", "+x", "/usr/local/bin/entrypoint"]

RUN apk add --no-cache bash && npm install

CMD ['node scheduler.js']
ENTRYPOINT ["entrypoint"]

WORKDIR /

