$(function(){
	var Cat= function({
		this.clickCount=ko.observable(0);
		this.name= ko.observable("Tom");
		this.imgSrc=ko.observable("cat_picture1.jpg");
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
	
	var viewModel=function( new Cat()){
		this.currentCat=ko.observable();
		this.incrementCounter=function(){
			this.currentCat().clickCount(this.currentCat().clickCount()+1);
		}
	};
	ko.applyBindings(new viewModel());	
})
