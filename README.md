# Meteor Voyager

Voyager is a relatively simple synchronous style web scraping package designed for Meteor.

Voyager uses Meteor's http package to makes requests, request's jar for maintaining logged in states, and cheerio for returning jQuery like objects.

Note that this does not use a headless browser, so if you need to interact with the web page, something like casperjs or spookyjs might be better suited for that.

# HTTV.login(url, form)
```js
HTTV.login(url, form);
```
Login via POST. Your cookie will be stored and you'll be able to access password protected data on subsequent requests.


# HTTV.get(url)
```js
var $ = HTTV.get(url);
$('span.some-class');
```
Return a cheerio object.


# HHTV.getJSON(url)
```js
var obj = HTTV.getJSON(url);
```
Great for retrieving hidden JSON API's


