// get script
var script = document.getElementsByTagName('script')[0]

// get config
var cacheTime = script.getAttribute('cache-time')
cacheTime = cacheTime === null ? 600 * 1000 : Number(cacheTime)

var flagName = script.getAttribute('flag-name')
flagName = flagName === null ? 'flag' : flagName

// compare time flag
var matchReg = new RegExp('(\\?|&)' + flagName + '(=(\\d+)?)?')
var match = location.search.match(matchReg)
var lastTime = match ? Number(match[3]) : 0
var currentTime = new Date().getTime()
if (currentTime - lastTime > cacheTime) {
	if (match) {
		location.href = location.href.replace(flagName + match[2], flagName + '=' + currentTime)
	} else {
		if (location.search) {
			location.href = location.origin
				+ location.pathname
				+ location.search
				+ '&' + flagName + '=' + currentTime
				+ location.hash
		} else {
			location.href = location.origin
				+ location.pathname
				+ '?' + flagName + '=' + currentTime
				+ location.hash
		}
	}
}