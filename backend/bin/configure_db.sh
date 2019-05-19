#!/bin/bash


echo "Configuring ctxl database"

dropdb -U ctxl_user ctxldb
createdb -U ctxl_user ctxldb

psql -U ctxl_user ctxldb < ./bin/sql/account.sql
psql -U ctxl_user ctxldb < ./bin/sql/baseline.sql
psql -U ctxl_user ctxldb < ./bin/sql/title.sql
psql -U ctxl_user ctxldb < ./bin/sql/thermal.sql

echo "ctxl database was configured"