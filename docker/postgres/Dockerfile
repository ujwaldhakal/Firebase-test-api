FROM postgres:12.1

RUN apt-get update && apt-get install -y postgresql-contrib

ADD init/* /docker-entrypoint-initdb.d/
