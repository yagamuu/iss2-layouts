FROM ghcr.io/nodecg/nodecg:2.1.11

USER root
WORKDIR /opt/nodecg

RUN nodecg install yagamuu/nodecg-speedcontrol --dev && \
    nodecg install cma2819/nodecg-spotify-widget

WORKDIR /opt/nodecg/bundles/nodecg-speedcontrol
RUN npm run build

WORKDIR /opt/nodecg/bundles/iss2-layouts
COPY . /opt/nodecg/bundles/iss2-layouts
RUN npm i

WORKDIR /opt/nodecg

EXPOSE 9090

CMD ["nodecg", "start"]