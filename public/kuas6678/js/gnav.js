/* [JavaScript/Ajax Samples]
 * Modified: 2009-05-27
 */

/* Script for Global Navigation
----------------------------------------*/
function globalnav() {
	var c = {
		crClass: "cr",
		crPostfix: "_cr",
		hoverClass: "on",
		hoverPostfix: "_on",
		rootDir: ""
	};
	
	var gnav = document.getElementById("global-nav");
	if(!gnav) return;
	var nav = gnav.getElementsByTagName("a");
	for (var i = 0, l = nav.length; i < l; i ++) setup(nav[i]);
	
	function setup(a) {
		
		/* debug code ------------------------------*
			document.getElementById("alpha").appendChild(document.createTextNode(a.href));
			document.getElementById("alpha").appendChild(document.createElement("br"));
		*------------------------------ debug code */
		
		var img = a.getElementsByTagName("img")[0];
		if(img) {
			img.extPos = img.src.lastIndexOf(".");
			img.srcPath = img.src.substring(0, img.extPos);
			img.ext = img.src.substring(img.extPos, img.src.length);
			(new Image()).src = img.srcPath + c.crPostfix + img.ext;
			(new Image()).src = img.srcPath + c.hoverPostfix + img.ext;
		}
		
			a.fNamePos = a.href.lastIndexOf("/") + 1;
			a.dirPath= a.href.substring(0, a.fNamePos);
			
		// 第1個連結目標為首頁
		c.rootDir = nav[0].dirPath;
		
		var loc = location.href; // 非物件型別而是字串型別
		var locDirPos = loc.lastIndexOf("/") + 1;
		var locDirPath = loc.substring(0, locDirPos);
		
		if(a.dirPath == c.rootDir) { // 前往首頁之連結的情況
			if(a.dirPath == locDirPath) {
				if(img) { img.src = img.srcPath + c.crPostfix + img.ext; }
				a.className += " " + c.crClass;
			}
		} else { // 首頁以外連結的情況
			if (loc.indexOf(a.href) != -1) {
				if(img) { img.src = img.srcPath + c.crPostfix + img.ext; }
				a.className += " " + c.crClass;
			}
		}
		
		// 製作滑鼠滑入反應的準備
		if(img)	 { img.orgSrc = img.src; }
		a.orgClassName = a.className;
		// 設定滑鼠滑入時的處理
		a.onmouseover = function() {
			if(img) { img.src = img.srcPath + c.hoverPostfix + img.ext; }
			a.className += " " + c.hoverClass;
		};
		a.onmouseout = function() {
			if(img) { img.src = img.orgSrc; }
			a.className = a.orgClassName;
		};
	}
};

/* onload event function
----------------------------------------*/
if(window.addEventListener) { window.addEventListener("load", globalnav, false); }
else if(window.attachEvent) { window.attachEvent("onload", globalnav); }


