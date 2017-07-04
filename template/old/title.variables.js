var nameCN = '花火';
var nameEN = 'hanabi';

var hot_arrayEN = [];
hot_arrayEN[0]='lisboa'
hot_arrayEN[1]='modern-art'
hot_arrayEN[2]='cottage-garden'
hot_arrayEN[3]='splendor'
hot_arrayEN[4]='hanabi'

var hot_arrayCN = [];
hot_arrayCN[0]='里斯本'
hot_arrayCN[1]='现代艺术'
hot_arrayCN[2]='花舍物语'
hot_arrayCN[3]='璀璨宝石'
hot_arrayCN[4]='花火'

var change_nameEN = function(name) {
	name_copy = name;
	name = '';
	for(var i = 0; i < name_copy.length; i++) {
		//alert(nameEN_copy.substring(i,i+1))
		if(i === 0) {
			name += name_copy.substring(i, i + 1).toUpperCase();
		} else if(name_copy.substring(i, i + 1) === '-') {
			name += ' ';
			name += name_copy.substring(i + 1, i + 2).toUpperCase();
			i += 1;
		} else {
			name += name_copy.substring(i, i + 1);
		}
		//alert(nameEN);
	}
	return name;
};

