// get script
var script = document.getElementsByTagName('script')[0]

// get config
var cacheTime = script.getAttribute('cache-time')
cacheTime = cacheTime === null ? 600 * 1000 : Number(cacheTime)

var flagName = script.getAttribute('flag-name')
flagName = flagName === null ? 'flag' : flagName

// compare time flag
var reg = new RegExp(flagName + '=(\\d+)')
var match = location.search.match(reg)
var lastTime = match ? Number(match[1]) : 0
var currentTime = new Date().getTime()
if (currentTime - lastTime > cacheTime) {
	if (match) {
		location.href = location.href.replace(reg, flagName + '=' + currentTime)
	} else {
		location.href = location.href + '?' + flagName + '=' + currentTime
	}
}