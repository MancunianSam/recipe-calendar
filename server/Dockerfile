FROM python:alpine3.9
RUN mkdir -p /server/recipes && mkdir -p /server/test
COPY  recipes/ /server/recipes
COPY test/ /server/test
COPY config.py recipes.db serve.py setup.py /server/
WORKDIR /server
RUN pip install -e .
RUN python -m unittest discover test
CMD python serve.py