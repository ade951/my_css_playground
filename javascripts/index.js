// include jQuery and ../data/index.js first

$(function(){
	var content_ul = $('#content_ul');
	content_ul.html(''); //remove the initial data
	for(var k in articles){
		content_ul.append('<li><a href="'+articles[k]['link']+'" target="_blank">'+articles[k]['title']+'</a></li>');
	}
});
