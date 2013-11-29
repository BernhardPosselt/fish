Listen to the fish homepage
===========================

Dependencies
------------
* Python 3.2
* NodeJS 0.10 (development only)

Development
-----------
Install [Live Reload for Chromium](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)

To install the dependencies run:

	sudo pip install -r requirements.txt
	cd listentothefish/listentothefish/homepage/static/homepage
	sudo npm -g install grunt-cli bower
	npm install

To build the JavaScript files run:

	grunt

or to use the watcher:

	grunt watch

To run the development server change into the folder:

	listentothefish/

and run:

	python3 manage.py runserver

to enable livereload hit the livereload button in the browser