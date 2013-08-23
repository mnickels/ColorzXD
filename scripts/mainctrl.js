//rgbToHex and hexToRgb functions from http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
//zeroes truncated using http://stackoverflow.com/questions/8276451/remove-truncate-leading-zeros-by-javascript-jquery

function MainCtrl ($scope) {
	$scope.red = Math.floor((Math.random()*256));
	$scope.green = Math.floor((Math.random()*256));
	$scope.blue = Math.floor((Math.random()*256));
	$scope.colorArray = [
		{name: "red", r: 255, g: 0, b: 0},
		{name: "orange", r: 255, g: 127, b: 0},
		{name: "yellow", r: 255, g: 255, b: 0},
		{name: "green", r: 0, g: 255, b: 0},
		{name: "blue", r: 0, g: 0, b: 255},
		{name: "indigo", r: 75, g: 0, b: 130},
		{name: "violet", r: 143, g: 0, b: 255},
		{name: "pink", r: 255, g: 105, b: 180},
		{name: "peach", r: 255, g: 229, b: 180},
		{name: "brown", r: 128, g: 64, b: 0},
		{name: "white", r: 255, g: 255, b: 255},
		{name: "grey", r: 128, g: 128, b: 128},
		{name: "black", r: 0, g: 0, b: 0},
	];
	$scope.lastColor = {r: $scope.red, g: $scope.green, b: $scope.blue};


	//takes r, g, and b values (between 0 and 255 for optimal results) and returns a string "#RRGGBB"
	$scope.rgbToHex = function (r, g, b) {
		r %= 256;
		g %= 256;
		b %= 256;
    	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}

	$scope.hexToRgb = function (hex) {
		// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
	        return r + r + g + g + b + b;
	    });
	    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	    $scope.red = parseInt(result[1], 16);
	    $scope.green = parseInt(result[2], 16);
	    $scope.blue = parseInt(result[3], 16);

	}

	$scope.changeColor = function (color) {
		$scope.rememberLast();
		$scope.red = $scope.colorArray[color].r;
		$scope.green = $scope.colorArray[color].g;
		$scope.blue = $scope.colorArray[color].b;
	}

	$scope.randomColor = function () {
		$scope.rememberLast();
		$scope.red = Math.floor((Math.random()*256));
		$scope.green = Math.floor((Math.random()*256));
		$scope.blue = Math.floor((Math.random()*256));
	}

	$scope.newColor = function () {
		$scope.name = prompt("Please enter the color's name");
		if ($scope.name=="") {
			$scope.name = $scope.rgbToHex($scope.red, $scope.green, $scope.blue)
		}
		if ($scope.name!=null) {
			$scope.colorArray.push({
					name: $scope.name,
					r: $scope.red,
					g: $scope.green,
					b: $scope.blue
			})
		}
	}

	$scope.changeHex = function () {
		$scope.newVal = prompt("Please enter the new hex value", $scope.rgbToHex($scope.red,$scope.green,$scope.blue));
		$scope.rememberLast();
		$scope.hexToRgb($scope.newVal);
	}

	$scope.changeRed = function () {
		$scope.newVal = prompt("Please enter the new red value", $scope.red);
		if ($scope.newVal == null || $scope.newVal == "") return;
		if (isNaN($scope.newVal)) return;
		if ($scope.newVal == 0) $scope.newVal = "0";
		if ($scope.newVal != "0") $scope.newVal = $scope.newVal.replace(/^0+/, '');
		if ($scope.newVal>255) $scope.newVal = 255;
		if ($scope.newVal<0) $scope.newVal = 0;
		$scope.rememberLast();
		$scope.red = $scope.newVal
	}

	$scope.changeGreen = function () {
		$scope.newVal = prompt("Please enter the new green value", $scope.green);
		if ($scope.newVal == null || $scope.newVal == "") return;
		if (isNaN($scope.newVal)) return;
		if ($scope.newVal == 0) $scope.newVal = "0";
		if ($scope.newVal != "0") $scope.newVal = $scope.newVal.replace(/^0+/, '');
		if ($scope.newVal>255) $scope.newVal = 255;
		if ($scope.newVal<0) $scope.newVal = 0;
		$scope.rememberLast();
		$scope.green = $scope.newVal
	}

	$scope.changeBlue = function () {
		$scope.newVal = prompt("Please enter the new blue value", $scope.blue);
		if ($scope.newVal == null || $scope.newVal == "") return;
		if (isNaN($scope.newVal)) return;
		if ($scope.newVal == 0) $scope.newVal = "0";
		if ($scope.newVal != "0") $scope.newVal = $scope.newVal.replace(/^0+/, '');
		if ($scope.newVal>255) $scope.newVal = 255;
		if ($scope.newVal<0) $scope.newVal = 0;
		$scope.rememberLast();
		$scope.blue = $scope.newVal
	}

	$scope.complement = function () {
		$scope.rememberLast();
		$scope.red = 255 - $scope.red;
		$scope.green = 255 - $scope.green;
		$scope.blue = 255 - $scope.blue;
	}

	$scope.rememberLast = function () {
		$scope.lastColor.r = $scope.red;
		$scope.lastColor.g = $scope.green;
		$scope.lastColor.b = $scope.blue;
	}

	$scope.lastColor = function () {
		if (isNaN($scope.lastColor.r)) return;
		$scope.newRed = $scope.lastColor.r;
		$scope.newGreen = $scope.lastColor.g;
		$scope.newBlue = $scope.lastColor.b;
		$scope.rememberLast();
		$scope.red = $scope.newRed;
		$scope.green = $scope.newGreen;
		$scope.blue = $scope.newBlue;

	}

}
