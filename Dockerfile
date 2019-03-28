FROM ubuntu:18.04
RUN apt-get update \
    && apt-get install -y \
        telnet \
        net-tools \
        curl \
        wget \
        iputils-ping \
        vim \
        zip \
        unzip
RUN mkdir /app
COPY dist /app
CMD [ "/bin/bash", "-c", "tail -f /dev/null" ]