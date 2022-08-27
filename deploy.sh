#!/bin/bash

echo What should the version be?
read VERSION

sudo docker build -t sirdazzling/medalert_api:$VERSION .
sudo docker push sirdazzling/medalert_api:tagname:$VERSION
ssh -i /home/sir-dazzling/.ssh/iriekpen_project root@143.244.156.174 "docker pull sirdazzling/medalert_api:$VERSION && docker tag sirdazzling/medalert_api:staging:$VERSION dokku/api:$VERSION && dokku deploy api $VERSION"
