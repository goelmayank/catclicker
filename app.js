var Cat= function({
	this.clickCount=ko.observable(data.clickCount);
	this.name= ko.observable(data.name);
	this.nickname=ko.observableArray(data.nickname);
	this.imgSrc=ko.observable(data.imgSrc);
	this.imgUrl=ko.observable(data.imgUrl);

	this.title=ko.computed(function()){
		var title;
		var clicks=this.clickCount();
		if(clicks<10)
		title="Newborn";
		else
		title="Ninja";
		return title;
	},this);
}

var initialCats=[{
	clickCount: 0,
	name: 'blue eyes',
	nickname: 'white fur',
	imgSrc: 'image1',
	imgUrl: 'https://cloud.githubusercontent.com/assets/10373048/5804536/c3be2a50-a02c-11e4-8d58-a818aa839caa.jpg'
},
{
	clickCount: 0,
	name: 'kitty',
	nickname: 'orange',
	imgSrc: 'image2',
	imgUrl: 'https://cloud.githubusercontent.com/assets/10373048/5804537/c3e66290-a02c-11e4-9dbf-b60fdeb73850.jpg'
},
{
	clickCount: 0,
	name: 'black fear',
	nickname: 'dangerous',
	imgSrc: 'image3',
	imgUrl: 'https://cloud.githubusercontent.com/assets/10373048/5804539/c45244ec-a02c-11e4-9362-69937cad9729.jpg'
},
{
	clickCount: 0,
	name: 'tiger',
	nickname: 'bold',
	imgSrc: 'image4',
	imgUrl: 'https://cloud.githubusercontent.com/assets/10373048/5804540/c457a266-a02c-11e4-9465-e6d4dcc0a424.jpg'
},
{
	clickCount: 0,
	name: 'sleepy',
	nickname: 'Zzzzz',
	imgSrc: 'image5',
	imgUrl: 'https://cloud.githubusercontent.com/assets/10373048/5804541/c5db9bf6-a02c-11e4-9ead-4380c6897aae.jpg'
}
];


var viewModel=function( ){
	var self=this;
	this.catList=ko.observableArray(new Cat());
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
