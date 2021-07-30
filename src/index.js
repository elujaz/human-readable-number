module.exports = function toReadable(number) {
	if (number == '0') {
		return 'zero';
	} else if (number < 10) {
		return transformUnits(number);
	} else if (number < 20 || (number >= 20 && number < 100 && (number % 10 == 0))) {
		return transformDozens(number);
	} else if (number < 100) {
		return transformDozens(number) + " " + transformUnits(number % 10);
	} else if (number >= 100 && (number % 100 == 0)) {
		return transformUnits((number - number % 100) / 100) + " hundred";
	} else if ((((number % 100) < 20) && (number % 100 >= 10)) || (number > 100 && (number % 10 == 0))) {
		return transformUnits((number - number % 100) / 100) + " hundred " + transformDozens(number);
	} else if ((number % 100) < 10) {
		return transformUnits((number - number % 100) / 100) + " hundred " + transformUnits(number % 10);
	} else { 
		return transformUnits((number - number % 100) / 100) + " hundred " + transformDozens(number) + " " + transformUnits(number % 10);
	}
}

function transformDozens(number) {
	switch (number % 100) {
		case 10:
			return 'ten';
		case 11:
			return 'eleven';
		case 12:
			return 'twelve';
		case 13:
			return 'thirteen';
		case 14:
			return 'fourteen';
		case 15:
			return 'fifteen';
		case 16:
			return 'sixteen';
		case 17:
			return 'seventeen';
		case 18:
			return 'eighteen';
		case 19:
			return 'nineteen';
		default:
			switch ((number % 100 - number % 10) / 10) {
				case 2:
					return 'twenty';
				case 3:
					return 'thirty';
				case 4:
					return 'forty';
				case 5:
					return 'fifty';
				case 6:
					return 'sixty';
				case 7:
					return 'seventy';
				case 8:
					return 'eighty';
				case 9:
					return 'ninety';
		}
	}
}

function transformUnits(number) {
	switch (number) {
		case 1:
			return 'one';
		case 2:
			return 'two';
		case 3:
			return 'three';
		case 4:
			return 'four';
		case 5:
			return 'five';
		case 6:
			return 'six';
		case 7:
			return 'seven';
		case 8:
			return 'eight';
		case 9:
			return 'nine';
	}
}
