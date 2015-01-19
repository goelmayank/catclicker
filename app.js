$(function(){
	var Cat= function({
		this.clickCount=ko.observable(0);
		this.name= ko.observable("Tom");
		this.imgSrc=ko.observable("cat_picture1.jpg");
		this.imgAttribute=ko.observable("http://media.photobucket.com/user/michelleNpete/media/BaBas/awesome-beautiful-blue-eyes-cat-cute-Favimcom-110476.jpg.html?filters[term]=cat&filters[primary]=images&filters[featured%5Fmedia]=1220&filters[secondary]=videos&sort=1&o=0");
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
