#!/bin/bash

DATE=`date`
cd output
git add .
git commit -m 'Update Site: $DATE'
git push