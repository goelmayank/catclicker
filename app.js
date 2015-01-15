$(function(){
	var model={
		currentCat: null,
		cats : [
		{
			name: 'BANDIT',
			clickCount: 0 ,
			src: "cat_picture1.jpg"
		},
		{
			name:'BOOTS',
			clickCount: 0 ,
			src: "cat_picture2.jpeg"
			
		},
		{
			name:'PUMPKIN',
			clickCount: 0 ,
			src: "cat_picture3.jpeg"
		},
		{
			name:'SAMMY',
			clickCount: 0 ,
			src: "cat_picture4.jpeg"
		},
		{
			name:'SASSY',
			clickCount: 0 ,
			src: "cat_picture5.jpeg"
		}]
		
	};
	
	var octopus={
		
		init: function(){
			model.currentCat= cats[0];
			view.init();
			view.render();
		},
		getCats: function(){
			return model.cats;
		},
		
		getCurrentCat: function(){
			return model.currentCat;
		}
		
		setCat: function(cat){
			model.currentCat= cat;
		}
		
		incrementCounter: function(){
			currentCat.clickCount++;
		}
		
	}/*$('#cat'+i).onclick= function() {
		clicks[i]++;
		$('#clicks').innerhtml(clicks[i]);
		$('#image').attr("src",cats[i]);
		$("#name").html("Cat "+i)*/
	
	var view={
		
		init: function() {
			this.cat = $("#cat"+i);	//????
		        this.catNameElem = $("#name");
		        this.catImageElem = $('#image');
		        this.countElem = $('#clicks');
		        
		        $('#cat'+i).onclick= function(){
		        	octopus.incrementCounter;
		        	
		        }
		}
		
		render: function() {
			
		}
		
	}
	
	octopus.init();
		
)};
