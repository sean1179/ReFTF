
function getsubnav(a){
	var subnav = [];
	var subNav = 'subNav';
	var reg = new RegExp('\.' + subNav, 'i');
	var allclass = document.getElementsByTagName('*');
	for (var i=0 ; i<allclass.length ; i++){
		if(reg.test(allclass[i].className)){
			//alert(allclass[i].className);
			allclass[i].className="asubNav";
			subnav.push(allclass[i]);
			//alert(allclass[i]);
		}
	}
	//alert(reg.test("zsubNav"));
	//alert(subnav[a]);
	return subnav[a];
}
function shownav(){
	var nav = document.getElementById("nav");
//	alert(nav);
	var navli = nav.getElementsByTagName("li");
//	alert(navli[0]);
	var nava = new Array();
	for(var i =0;i<navli.length;i++){
		//alert(navli[i].getElementsByTagName("a"));
		nava.push(navli[i].getElementsByTagName("a")[0]);
	}
	for(var i =0;i<nava.length;i++){
		nava[i].index=i;
		//alert(nava[i].className);
		nava[i].onmousemove = function(){
					//alert(k);
					getsubnav(this.index).className="zsubNav";
					//alert(getsubnav(k).className);
					}

		/*nava[i].onmouseout  = function(){
					//alert(k);
					getsubnav(this.index).className="asubNav";
					//alert(getsubnav(i).className);
					}*/
		/*nava[i].onclick = function(){
					getsubnav(this.index).className="zsubNav";
					}*/
	}
	/*
	nava[0].onmousemove = function(){
					getsubnav(0).className="zsubNav";
					getsubnav(1).className="asubNav";
					getsubnav(2).className="asubNav";
					getsubnav(3).className="asubNav";
					//alert(getsubnav(k).className);
					}
	
	
	nava[1].onmousemove = function(){
					getsubnav(0).className="asubNav";
					getsubnav(1).className="zsubNav";
					getsubnav(2).className="asubNav";
					getsubnav(3).className="asubNav";
					//alert(getsubnav(k).className);
					}

	
	nava[2].onmousemove = function(){
					getsubnav(0).className="asubNav";
					getsubnav(1).className="asubNav";
					getsubnav(2).className="zsubNav";
					getsubnav(3).className="asubNav";
					//alert(getsubnav(k).className);
					}
	nava[3].onmousemove = function(){
					getsubnav(0).className="asubNav";
					getsubnav(1).className="asubNav";
					getsubnav(2).className="asubNav";
					getsubnav(3).className="zsubNav";
					//alert(getsubnav(k).className);
					}
					*/
}

