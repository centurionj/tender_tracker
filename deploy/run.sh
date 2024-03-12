#!/bin/bash

python "/app/src/manage.py" migrate

python "/app/src/manage.py" collectstatic --noinput

gunicorn -c "./deploy/gunicorn.conf.py" src.server.wsgi:application