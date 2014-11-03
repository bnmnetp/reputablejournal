#!/bin/bash

DATE=`date`
if [ -d output ]
then
    cd output
    git add .
    git commit -m "Update Site: $DATE"
    git push
    cd ..
else
    echo "need to be in main dir for deploy"
fi