FROM python:alpine3.9
ARG codecov_token
RUN mkdir -p /server/recipes && mkdir -p /server/test && mkdir /output && apk update && apk add sqlite
COPY  recipes/ /server/recipes
COPY test/ /server/test
COPY config.py recipes.db serve.py setup.py /server/
WORKDIR /server
RUN pip install -e .
RUN coverage run --source recipes -m unittest discover test && coverage xml && cp coverage.xml /output
CMD python serve.py
