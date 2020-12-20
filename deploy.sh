#!/bin/bash
#acentia.tgz
tar -czf acentia_u1.tgz public/* AccentiaEnergy-app-config.json package.json package-lock.json acentiaenergy.com.conf mail.acentiaenergy.com.conf server.js app.js

scp -P 2642 -i ~/.ssh/id_rsa_acentia acentia_u1.tgz webaccentia@213.219.37.251:~

rm -rf acentia_u1.tgz;

# ssh -i ~/.ssh/id_rsa_acentia webaccentia@213.219.37.251 << 'ENDSSH'

# sudo mkdir acentia;
# sudo tar -xf acentia.tgz -C acentia;
# sudo mv acentia/acentiaenergy.com.conf acentiaenergy.com.conf; 
# sudo mv acentia/mail.acentiaenergy.com.conf mail.acentiaenergy.com.conf;
# cd acentia;
# sudo npm install;
# sudo pm2 start AccentiaEnergy-app-config.json;

# ENDSSH

