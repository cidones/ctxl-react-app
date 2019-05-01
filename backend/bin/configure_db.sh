#!/bin/bash


echo "Configuring ctxl database"

dropdb -U postgres ctxl
createdb -U postgres ctxl

psql -U postgres ctxl < ./bin/sql/baseline.sql
psql -U postgres ctxl < ./bin/sql/thermal.sql

echo "ctxl database was configured"