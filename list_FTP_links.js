
// unminified
javascript:(function(){
	var links = document.body.getElementsByTagName( "table" )[0].getElementsByTagName( "a" );
	var textarea = document.createElement( "textarea" );
	var text = '';
	for ( i = 0; i < links.length; i++ ) {
		if ( links[i].href[ (links[i].href.length - 1) ] != "/" )
			text += links[i].href + "\n";
	}
	textarea.value = text;
	textarea.style.width = "100%";
	textarea.style.minHeight = "100px";
	textarea.style.marginBottom = "10px";
	document.body.insertBefore( textarea, document.body.getElementsByTagName( "p" )[0] );
})();


// minified
javascript:(function(){var e=document.body.getElementsByTagName("table")[0].getElementsByTagName("a"),t=document.createElement("textarea"),n="";for(i=0;i<e.length;i++)"/"!=e[i].href[e[i].href.length-1]&&(n+=e[i].href+"\n");t.value=n,t.style.width="100%",t.style.minHeight="100px",t.style.marginBottom="10px",document.body.insertBefore(t,document.body.getElementsByTagName("p")[0])})();
