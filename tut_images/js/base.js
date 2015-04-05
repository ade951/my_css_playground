var player;
var colorPicker;
var items;
var currentSet;

$(document).ready(function() {
	items = [
		[$('#player')],
		[$('#play-btn'), $('#previous-btn'), $('#next-btn'), $('#volume-knob'),  $('#seek-knob')],
		[$('#seek-fill')]
	];
	
	btns = ['base-color', 'btn-color', 'seek-color'];
	
	currentSet = 0;

	colorPicker = $.farbtastic('#picker');
	colorPicker.linkTo(setColor);
	
	$('.color-block').hover(setColorBlock, hideColorBlock);
});

function setColorBlock(e) {
	e.preventDefault();
	
	$('.color-block.current').removeClass('current');
	$(this).addClass('current');		
	
	currentSet = btns.indexOf($(this).children('a').attr('id'));
	
	var bgColor = $(this).children('a').css('background-color');
	var hexColor = colorToHex(bgColor);
	console.log(hexColor);
	colorPicker.setColor(hexColor);
	
	$(this).append($('#picker'));
	$('#picker').show(125).css({
		'left': $(this).offset().left + 'px',
		'top': ($(this).offset().top + $(this).height() + 10) + 'px',
	});
}

function hideColorBlock(e) {
	$('.color-block.current').removeClass('current');
	$('#picker').hide();
}

function colorToHex(color) {
    if (color.substr(0, 1) === '#') {
        return color;
    }
    var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
    
    var red = parseInt(digits[2]);
    var green = parseInt(digits[3]);
    var blue = parseInt(digits[4]);
    
    var rgb = blue | (green << 8) | (red << 16);
    return digits[1] + '#' + rgb.toString(16);
}
	
function setColor(e) {
	for(var i = 0; i < items[currentSet].length; i++) {
		items[currentSet][i].css('background-color', e);
	}
	
	$('#' + btns[currentSet]).css('background-color', e);
}