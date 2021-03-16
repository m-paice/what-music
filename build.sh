#! /usr/bin/env bash

TAG_VERSION=${1}
LATEST_TAG_VERSION=${2:-"latest"}

ECR_REPOSITORY=levanta
IMAGE=front
URI_REPOSITORY=121154950204.dkr.ecr.us-east-1.amazonaws.com/$ECR_REPOSITORY/$IMAGE

echo "Building docker image..."

docker build --cache-from $URI_REPOSITORY:latest -t $URI_REPOSITORY:$TAG_VERSION -t $URI_REPOSITORY:$LATEST_TAG_VERSION .

docker push $URI_REPOSITORY:latest && docker push $URI_REPOSITORY:$LATEST_TAG_VERSION
