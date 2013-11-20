Listen to the fish homepage
===========================

Dependencies
------------

* Django 1.6
* Python 3.2

Installation
------------

Development Dependencies
------------------------

* NodeJS 0.10
* Grunt 0.4

Development
-----------
To get started with JavaScript development change into the folder:

	listentothefish/listentothefish/homepage/static/homepage

and run:

	sudo npm -g install grunt-cli
	npm install --dev

To build the JavaScript files run:

	grunt

or to use the watcher:

	grunt watch

To run the development server change into the folder:

	listentothefish/

and run:

	python3 manage.py runserver