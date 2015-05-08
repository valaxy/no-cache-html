UA(such as browser, webview) sometimes caches HTML, if we add a random query param to the url,
UA will forced to get the latest HTML.      
Use the mechanism to reload page when it exceed the cache time

# Introduction
```html
<head>
    <!-- the script must be the first script to load 
    	 cache-time: how long to force UA to no cache(in ms), default: 600*1000(10 mins)
	     flag-name:  what is the name of random query param, do not conflict the regex, default: flag -->
    <script src="bower_components/no-cache-html/index.js"
            cache-time="600000" 
            flag-name="flag"> 
    </script>
</head>
```

Something about Navigate and Redirect

- `/index.html` -> `/index.html?flag=1427954436318`
- `/index.html?flag=0` -> `/index.html?flag=1427954436318`
- `/index.html?flag=0&foo=bar` -> `/index.html?flag=1427954436318&foo=bar`

Feel free to copy the code and change into your own script.

# compatibility
Only test in chrome


