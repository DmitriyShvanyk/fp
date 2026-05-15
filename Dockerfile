FROM ubuntu:24.10
RUN apt-get update && \
    apt-get install -y hugo curl git wget tar bash && \
    rm -rf /var/lib/apt/lists/*