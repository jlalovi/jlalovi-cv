<?php

$conn_string = "dbname=d9dh4a3vip6rqq host=ec2-184-72-238-68.compute-1.amazonaws.com port=5432 user=xvizqzyxlamykm password=UESatB7lmlJwgWxW7hDPm4YXnn sslmode=require";

$dbconn = pg_connect($conn_string) 
          or die('Could not connect: ' . pg_last_error());

echo "Connected to the DB";

?>