$(function(){
	var Cat= function({
		this.clickCount=ko.observable(0);
		this.name= ko.observable("Tom");
		this.imgSrc=ko.observable("image1");
		this.imgAttribute=ko.observable("(https://cloud.githubusercontent.com/assets/10373048/5804536/c3be2a50-a02c-11e4-8d58-a818aa839caa.jpg)");
		this.nickNames=ko.observableArray(["Billa","Meow"]);
		this.title=ko.computed(){
			var title;
			var clicks=this.clickCount();
			if(clicks<10)
			title="Newborn";
			else
			title="Ninja";
			
		},this);
		return title;
	}
	
	var initialCats=[{},{}];
	
	
	var viewModel=function( new Cat()){
		var self=this;
		this.catList=ko.observableArray([]);
		initialCats.forEach(function(catItem){
			self.catlist.push( new Cat(catItem));
		});
		this.currentCat=ko.observable(this.catList()[0]);
		self.incrementCounter=function(){
			self.currentCat().clickCount(self.currentCat().clickCount()+1);
		}
		this.setCat = function(clickedCat) {
			self.currentCat(clickedCat);
		}
	};
	ko.applyBindings(new viewModel());	
})
