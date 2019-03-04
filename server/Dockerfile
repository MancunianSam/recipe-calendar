FROM python:alpine3.9
COPY recipes.py serve.py requirements.txt recipes.db /
RUN pip install -r requirements.txt
CMD python serve.py
