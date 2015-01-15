var clicks = {0,0,0,0,0};
var cats={"http://www.catsaroundtheglobe.com/wp-content/uploads/american_curl_small_cat.jpg",
	"http://www.vetprofessionals.com/catprofessional/images/home-cat.jpg",
	"http://www.cat-breed-info.com/images/teacup1.jpg",
	"http://gainweighthow.com/wp-content/uploads/2013/05/How-to-Add-Weight-to-a-Cat.jpg",
	"http://bioweb.uwlax.edu/bio203/s2009/aschenbr_rach/cat%20eyes%20and%20ears.jpg"}
	
for(i=0;i<5;i++)
{
`	$(
		$('#image').attr("src",cats[i]);
	$('#cat1').addEventListener('click', function() {
	clicks[i]++;
	$('#clicks').innerhtml(clicks[i]);
	$('#image').attr("src",cats[i]);

});
