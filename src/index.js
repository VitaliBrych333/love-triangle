/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = [] ) {
	    var n = 0;
	for (var i = 0; i < preferences.length; i++) {
		var x = preferences[i];
		var y = preferences[x-1];
		var z = preferences[y-1];
		if ( i==z-1 ) n++;
	};
	return Math.floor(n/3);
  // your implementation
};
