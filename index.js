var currentId;

document.getElementById('home').addEventListener('mouseover', function(){
	currentId=document.getElementById('link_home').style.color;
	colour(document.getElementById('link_home'));
});
document.getElementById('about').addEventListener('mouseover', function(){
	currentId=document.getElementById('link_about').style.color;
	colour(document.getElementById('link_about'));
});
document.getElementById('skill').addEventListener('mouseover', function(){
	currentId=document.getElementById('link_skill').style.color;
	colour(document.getElementById('link_skill'));
});
document.getElementById('contact').addEventListener('mouseover', function(){
	currentId=document.getElementById('link_contact').style.color;
	colour(document.getElementById('link_contact'));
});
document.getElementById('link_home').addEventListener('click', function(){
	currentId=document.getElementById('link_home').style.color;
	colour(document.getElementById('link_home'));
});
document.getElementById('link_about').addEventListener('click', function(){
	currentId=document.getElementById('link_about').style.color;
	colour(document.getElementById('link_about'));
});
document.getElementById('link_skill').addEventListener('click', function(){
	currentId=document.getElementById('link_skill').style.color;
	colour(document.getElementById('link_skill'));
});
document.getElementById('link_contact').addEventListener('click', function(){
	currentId=document.getElementById('link_contact').style.color;
	colour(document.getElementById('link_contact'));
});

document.getElementById('link_home').addEventListener('mouseover', function(){
	colorWith(document.getElementById('link_home'));	
});

document.getElementById('link_about').addEventListener('mouseover', function(){
	colorWith(document.getElementById('link_about'));	
});

document.getElementById('link_skill').addEventListener('mouseover', function(){
	colorWith(document.getElementById('link_skill'));	
});

document.getElementById('link_contact').addEventListener('mouseover', function(){
	colorWith(document.getElementById('link_contact'));	
});

function colour(a){
	document.getElementById('link_home').style.color='rgb(255, 255, 255)';
	document.getElementById('link_skill').style.color='rgb(255, 255, 255)';
	document.getElementById('link_contact').style.color='rgb(255, 255, 255)';
	document.getElementById('link_about').style.color='rgb(255, 255, 255)';
	a.style.color='rgb(255, 115, 0)';
	currentId='rgb(255, 115, 0)';

}

function colorWith(a){
	document.getElementById('link_home').style.color='rgb(255, 255, 255)';
	document.getElementById('link_skill').style.color='rgb(255, 255, 255)';
	document.getElementById('link_contact').style.color='rgb(255, 255, 255)';
	document.getElementById('link_about').style.color='rgb(255, 255, 255)';
	a.style.color='rgb(255, 115, 0)';

}