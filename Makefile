SHELL := /bin/bash

default:
	npm i \
	&& npm run build \
	&& make upload;

upload:
	mv out nongdan-dev \
	&& zip -vr nongdan-dev.zip nongdan-dev \
	&& ssh nam "rm -rf /var/www/nongdan-dev*" \
	&& scp nongdan-dev.zip nam:/var/www \
	&& rm -rf ./nongdan-dev* \
	&& ssh nam "cd /var/www && unzip nongdan-dev.zip && rm nongdan-dev.zip";
