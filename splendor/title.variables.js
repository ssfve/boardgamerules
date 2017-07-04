var nameCN = '璀璨宝石';
var nameEN = 'splendor';

var hot_arrayEN = [];
hot_arrayEN[0]='lisboa'
hot_arrayEN[1]='modern-art'
hot_arrayEN[2]='cottage-garden'
hot_arrayEN[3]='splendor'

var hot_arrayCN = [];
hot_arrayCN[0]='里斯本'
hot_arrayCN[1]='现代艺术'
hot_arrayCN[2]='花舍物语'
hot_arrayCN[3]='璀璨宝石'

var change_nameEN = function() {
	nameEN_copy = nameEN;
	nameEN = '';
	for(var i = 0; i < nameEN_copy.length; i++) {
		//alert(nameEN_copy.substring(i,i+1))
		if(i === 0) {
			nameEN += nameEN_copy.substring(i, i + 1).toUpperCase();
		} else if(nameEN_copy.substring(i, i + 1) === '-') {
			nameEN += ' ';
			nameEN += nameEN_copy.substring(i + 1, i + 2).toUpperCase();
			i += 1;
		} else {
			nameEN += nameEN_copy.substring(i, i + 1);
		}
		//alert(nameEN);
	}
	return nameEN;
};

