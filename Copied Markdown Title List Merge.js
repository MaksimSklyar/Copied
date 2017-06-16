// A clipping object is a JavaScript object that contains the following properties. Properties values may be null.
//  title       - String
//  text        - String
//  url         - String
//  saveDate    - Date

// Merge function receives an array of clipping objects and returns the merged string

function merge(clippings) {
	var merged = clippings.reduce(function(string, clipping) {
		var stringToAppend
		if (clipping.text != null) {
			stringToAppend = clipping.text
		} else if (clipping.url != null) {
			stringToAppend = '* [' + clipping.title + ']' + '(' + clipping.url + ')'
		}
		if (string.length == 0) {
			return stringToAppend
		}
		return string + "\n" + stringToAppend
	}, "")
	return merged
}