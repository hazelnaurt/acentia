#!/bin/bash
#acentia.tgz
#tar -czf update8a.tgz public/index.html public/about.html
#tar -czf acentia_u2.tgz public/about.html public/index.html public/service.html public/contact.html 

scp -i ~/.ssh/id_rsa_acentiae oer3.tgz daniel@213.219.37.251:~

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

