FROM postgres
ENV POSTGRES_USER docker
ENV POSTGRES_PASSWORD docker
ENV POSTGRES_DB pubmed
COPY sql_init.sql /docker-entrypoint-initdb.d/