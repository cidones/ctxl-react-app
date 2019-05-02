#!/bin/bash

export PGPASSWORD= 'ctxl'

echo "Configuring ctxl database"

dropdb -U ctxl_user ctxl
createdb -U ctxl_user ctxl

psql -U ctxl_user ctxl < ./bin/sql/account.sql
psql -U ctxl_user ctxl < ./bin/sql/baseline.sql
psql -U ctxl_user ctxl < ./bin/sql/thermal.sql

echo "ctxl database was configured"