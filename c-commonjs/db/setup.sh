psql -f install.sql -U postgres
PGPASSWORD=admin psql -h localhost -p 5432 -U postgres -d postgres -f install.sql
PGPASSWORD=admin psql -h localhost -p 5432 -U marcus -d example -f structure.sql
PGPASSWORD=admin psql -h localhost -p 5432 -U marcus -d example -f data.sql