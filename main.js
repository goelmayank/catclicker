$(function(){
	var clicks = {0,0,0,0,0};
	var cats={""cat_picture1.jpg"",
		"cat_picture2.jpeg",
		"cat_picture3.jpeg",
		"cat_picture4.jpeg",
		"cat_picture5.jpeg"}
		
	for(i=0;i<5;i++)
	{
		$('#cat'+i).onclick= function() {
		clicks[i]++;
		$('#clicks').innerhtml(clicks[i]);
		$('#image').attr("src",cats[i]);
		$("#name").html("Cat "+i)
		}
	
	});
)};
