#!/bin/bash
#acentia.tgz
tar -czf update7a.tgz public/service.html \
public/policy.html public/single-service-eng.html \
public/single-service-ih.html public/single-service-lps.html \
public/single-service-mar.html public/single-service-mos.html \
public/index.html public/about.html public/clients.html public/contact.html
#tar -czf acentia_u2.tgz public/about.html public/index.html public/service.html public/contact.html 

scp -i ~/.ssh/id_rsa_acentiae update7a.tgz daniel@213.219.37.251:~

#rm -rf acentia_u2.tgz;

# ssh -i ~/.ssh/id_rsa_acentia webaccentia@213.219.37.251 << 'ENDSSH'

# sudo mkdir acentia;
# sudo tar -xf acentia.tgz -C acentia;
# sudo mv acentia/acentiaenergy.com.conf acentiaenergy.com.conf; 
# sudo mv acentia/mail.acentiaenergy.com.conf mail.acentiaenergy.com.conf;
# cd acentia;
# sudo npm install;
# sudo pm2 start AccentiaEnergy-app-config.json;

# ENDSSH

