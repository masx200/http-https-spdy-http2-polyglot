openssl req -x509  -days 365 -newkey rsa:2048 -nodes -sha256 -subj "/C=CN/ST=Shanghai/L=Shanghai/O=boyusc/OU=boyusc/CN=localhost" -keyout "server.key.pem" -out "server.crt.pem"