<?php
# This function reads your DATABASE_URL configuration automatically set by Heroku
# the return value is a string that will work with pg_connect
function pg_connection_string() {
  return "dbname=d93l88fg8pvat3 host=ec2-54-235-246-73.compute-1.amazonaws.com port=5432 user=tiemggribkcyif password=L_OHgK5gxhU605YCXn40MKIGrE sslmode=require"
}
 
# Establish db connection
$db = pg_connect(pg_connection_string());
if (!$db) {
   echo "Database connection error."
   exit;
}
 
$result = pg_query($db, "SELECT statement goes here");
?>