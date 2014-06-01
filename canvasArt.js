var ctx;
dx = 350;
dy = 350;
score = 0;

$(document).keydown(onKeyDown);
$(document).keydown(function() {
	$('#zero').remove();
	$('#score').html('<p>' + score + '</p>');
})

$(document).ready(function() {
	$("#canvasBody").attr("width", $("html").width());
	$("#canvasBody").attr("height", $("html").height());
})

function init() {
	ctx = $('#canvas')[0].getContext('2d');
	ctxBod = $("#canvasBody")[0].getContext('2d');
	draw();
	setInterval(background, 100);
}
	
function rect() {
		ctx.fillRect(0,0,25,25);
}

function draw() {
	for (var i=0; i<28; i++) {
		for (var j=0; j<28; j++) {
			ctx.fillStyle = getRandomColor();
			ctx.fillRect(j*25,i*25,25,25);
		}
	}
	ctx.clearRect(350,350,25,25);
}



function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	color += _.sample(letters, 6).toString().split(',').join('');
	return color;
}

/* function background() {
	for (var i=0; i<Math.floor($('body').width()/25); i++) {
		for (var j=0; j<Math.floor($('body').height()/25); j++) {
			ctxBod.fillStyle = getBackgroundColor();
			ctxBod.fillRect(j*25,i*25,25,25);
		}
	}
} */ 

function background() {
	var h = $('#canvasBody').height();
	var w = $('#canvasBody').width();
	for (var i=0; i<h/25; i++) {
		for (var j=0; j<w/25; j++) {
			ctxBod.fillStyle = getBackgroundColor();
			ctxBod.fillRect(j*25, i*25, 25,25);
		}
	}
}

function getBackgroundColor() {
	var c = 8 * Math.floor(32*Math.random());
	var color = "rgb(" + c + "," + c + "," + c + ")";
	return color;
}

function onKeyDown(evt) {
	switch (evt.keyCode) {
		case 37:
			dx >=25 ? dx-= 25 : dx-=0;
			ctx.clearRect(dx,dy,25,25);
			score += 1;
			break;
		case 38:
			dy >=25 ? dy-= 25 : dy-=0;
			ctx.clearRect(dx,dy,25,25);
			score += 1;
			break;
		case 39:
			dx <=650 ? dx+=25 : dx+=0;
			ctx.clearRect(dx,dy,25,25);
			score +=1
			break;
		case 40:
			dy <=650 ? dy+= 25 : dy+=0;
			ctx.clearRect(dx,dy,25,25);
			score += 1
			break;
		}
}