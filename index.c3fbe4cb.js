import{c as b,a as s,b as T,t as C,d as c,i as u,e as l,f as r,s as Y,S as M,F as J,g as F,h as B,j as x,k as S,r as f,l as R,T as N}from'./vendor.932b4555.js';const g=function(){const bn={'eyAmV':function(bD,ba){return bD===ba;},'oPaFK':'childList','tWWLh':'LINK','ATLtA':'modulepreload','LfMuI':function(bD,ba){return bD(ba);},'Azusl':function(bD,ba){return bD===ba;},'OEwYl':'use-credentials','CUHvg':'anonymous','DSsuj':'omit','ZCvWs':'same-origin','mCQkV':function(bD,ba,bE){return bD(ba,bE);},'pmbWP':'link[rel=\x22modulepreload\x22]'},bj=document['createElement']('link')['relList'];if(bj&&bj['supports']&&bj['supports']('modulepreload'))return;for(const bD of document['querySelectorAll'](bn['pmbWP']))bh(bD);new MutationObserver(ba=>{for(const bE of ba)if(bn['eyAmV'](bE['type'],bn['oPaFK'])){for(const bX of bE['addedNodes'])bn['eyAmV'](bX['tagName'],bn['tWWLh'])&&bX['rel']===bn['ATLtA']&&bn['LfMuI'](bh,bX);}})['observe'](document,{'childList':!0x0,'subtree':!0x0});function bQ(ba){const bE={};return ba['integrity']&&(bE['integrity']=ba['integrity']),ba['referrerpolicy']&&(bE['referrerPolicy']=ba['referrerpolicy']),bn['Azusl'](ba['crossorigin'],bn['OEwYl'])?bE['credentials']='include':bn['Azusl'](ba['crossorigin'],bn['CUHvg'])?bE['credentials']=bn['DSsuj']:bE['credentials']=bn['ZCvWs'],bE;}function bh(ba){if(ba['ep'])return;ba['ep']=!0x0;const bE=bQ(ba);bn['mCQkV'](fetch,ba['href'],bE);}};g();const G=String['raw'],d=[],L=(bn='',bj='')=>bn['replaceAll']('\x5c&',bj),k=bn=>U['create_representation'](b(bn)),W=Symbol['for']('STORED\x20SETTER'),U={'create_representation'(bn=[bQ=>bQ,bQ=>{}]){const bj=bn[0x0];return bn[0x0][W]=bn[0x1],bj[W]=bn[0x1],bj;},'inert_callback':bn=>bn(),'can_unwrap_reactor':bn=>bn&&typeof bn=='function'&&W in bn};class i{static['createScope'](bn=bj=>y){return i['ACTIVE_REACTIVE']&&(bn=i['createInnerScope'](bn)),{'useEffect':(bj,bQ=void 0x0)=>new i(bj,bn,s)['initialize']([bQ]),'useMemo':(bj,bQ=void 0x0)=>new i(bj,bn,T)['initialize']([bQ]),'useCallback':bj=>{const bQ=new i(bj,bn,U['inert_callback']);return(...bh)=>bQ['initialize'](bh);}};}static['createInnerScope'](bn=bh=>y){const bj={'xjsAO':function(bh,bD){return bh(bD);}},bQ=i['ACTIVE_REACTIVE']['scope'];return bh=>{try{return i['ACTIVE_INNERSCOPE']=!0x0,bj['xjsAO'](bn,bh);}catch{return bj['xjsAO'](bQ,bh);}finally{i['ACTIVE_INNERSCOPE']=!0x1;}};}constructor(bn=ba=>new Promise(),bj=ba=>Symbol(),bQ=ba=>ba){const bh={'XlCQo':function(ba,bE){return ba(bE);}},bD=bh['XlCQo'](Function,'with(arguments[0])\x20{\x20return\x20('+bn+')(...arguments[1])\x20}');this['callback']=ba=>bD(i['computationalProxy'],ba),this['resolver']=bQ,this['scope']=bj;}['initialize'](bn=[]){const bj=this['resolver'](()=>{const bQ=i['ACTIVE_REACTIVE'];i['ACTIVE_REACTIVE']=this;const bh=this['callback'](bn);return i['ACTIVE_REACTIVE']=bQ,bh;});return U['can_unwrap_reactor'](bj)?bj:bj&&typeof bj=='function'?U['create_representation']([bj]):bj;}}i['computationalProxy']=new Proxy({},{'get':(bn,bj,bQ)=>{const bh={'XqsyC':function(ba,bE){return ba==bE;},'dkEsV':function(ba){return ba();},'xDBjT':function(ba){return ba();}};if(bh['XqsyC'](typeof bj,'symbol'))return;let bD=i['ACTIVE_REACTIVE']['scope'](bj);return U['can_unwrap_reactor'](bD)?(bD=bh['dkEsV'](bD),U['can_unwrap_reactor'](bD)?bh['xDBjT'](bD):bD):bD;},'set':(bn,bj,bQ,bh)=>{let bD=i['ACTIVE_REACTIVE']['scope'](bj);if(U['can_unwrap_reactor'](bD))return bD[W](bQ);i['ACTIVE_REACTIVE']['scope'](bj+'\x20=\x20'+bQ);},'has':(bn,bj)=>{const bQ={'townX':function(bh,bD){return bh!=bD;},'ZCSzI':'arguments','mHILh':function(bh,bD){return bh!==bD;}};try{return!i['ACTIVE_INNERSCOPE']&&bQ['townX'](bj,bQ['ZCSzI'])&&(!(bj in globalThis)||bQ['mHILh'](globalThis[bj],i['ACTIVE_REACTIVE']['scope'](bj)));}catch{return!0x1;}}});const P=i['createScope'],{useCallback:t}=P(bn=>eval(bn)),m=k(O()),H=k(''),z=k(!0x1),e=t(bn=>{z=!0x0,H=bn;}),V=t(()=>z=!0x1);function O(){const bn={'YbZWW':function(bh,bD){return bh*bD;},'ydssZ':'?watch=','vZmlL':function(bh,bD){return bh+bD;},'NoqVE':'QWhhMxrX-Us,FT5EMBGKdhY,sZ1f6BEkn_g,s6e6kuIIuP0,HW9WHjictHc,Mdnnfg6Yvb0,LOADdASJnak'},bj=Array['from']({'length':bn['YbZWW'](0xc,0x3)}),bQ=location['search'];if(bQ['includes'](bn['ydssZ'])){const bh=bQ['slice'](bn['vZmlL'](bQ['indexOf'](bn['ydssZ']),0x7))['split'](',');return bj['map']((bD,ba)=>bh[ba]);}else{const bD=bn['NoqVE']['split'](',');return bj['map']((ba,bE)=>bD[bE]);}}const w=C('<aside></aside>'),q=C('<div\x20class=\x22c-t\x22></div>'),v=C('<p>VSADX</p>');function I({vid:vid=''}={}){const bn={'gMjuH':function(bX){return bX();},'OkkNP':'--top-offset','ySDpi':'1px','Vmxte':function(bX,bZ){return bX*bZ;},'wgaJH':function(bX,bZ){return bX(bZ);},'ZImMk':function(bX,bZ){return bX(bZ);}},bj=bn['ySDpi'],bQ='calc('+bj+'\x20*\x20'+(bn['Vmxte'](Math['random'](),0x64)|0x0)+')',{useMemo:bh}=bn['wgaJH'](P,bX=>eval(bX)),bD=bn['wgaJH'](bh,()=>!!vid),ba=bn['ZImMk'](bh,()=>'https://img.youtube.com/vi/'+vid+'/0.jpg'),bE=bn['ZImMk'](bh,()=>'background-image:\x20url(\x22'+ba+'\x22)');return((()=>{const bX=q['cloneNode'](!0x0);return bX['style']['setProperty'](bn['OkkNP'],bQ),u(bX,l(M,{get 'when'(){return bn['gMjuH'](bD);},get 'fallback'(){return v['cloneNode'](!0x0);},get 'children'(){const bZ=w['cloneNode'](!0x0);return bZ['$$click']=e,bZ['$$clickData']=vid,r(bo=>Y(bZ,bE(),bo)),bZ;}})),bX;})());}const A=G`
\& {
	overflow: hidden;
	display: flex;
	border-radius: .5em;
	background: #4d4d4d;
	box-shadow: 0 0 0 .15em #747474;
	--right: center;
	--top-base: 90vh;
	--top-offset: rand(1px);
	--top: calc(var(--top-base) + var(--top-offset));
	--size: 20vh;
	background: 
		linear-gradient(0deg, #6668, #6666, #6666, #6668)
			center/cover,
		url(./noise.png)
			var(--right) var(--top)/var(--size) repeat;
}
.clear-view-status \& {
	animation: tv-static .18s linear .6s infinite; 
	/* , fade 0s .2s;  */
}
\& aside {
	width: 100%;
    min-height: 150%;
	
    opacity: 0.74;
    filter: grayscale(.1) brightness(.9) saturate(.8);
    background-color: black;
    background-size: cover;
    
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: calc(-6vh + 2px);

	transition: filter .3s;
}
\& aside:hover {
	filter: grayscale(.05) brightness(1.1) saturate(.9);
}
@keyframes tv-static {
	0% {
		background-size: cover, calc(var(--size) * 2);
	}
}
\& p {
	margin: auto;
	font-size: 2.4em;
	font-weight: 200;
	
	opacity: 0.65;
	color: #222;
}
\& img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
`;d['push'](L(A,'div.c-t')),c(['click']);const y=C('<section\x20class=\x22p-c\x22></section>');function K({channels:channels=['']}={}){const bn={'odOPA':function(bh,bD,ba){return bh(bD,ba);},'ulvcA':function(bh,bD,ba,bE){return bh(bD,ba,bE);},'lHgEs':function(bh,bD){return bh(bD);}},{useMemo:bj}=bn['lHgEs'](P,bh=>eval(bh)),bQ=bj(()=>Array['from']({'length':0xc-channels['length']}));return((()=>{const bh=y['cloneNode'](!0x0);return u(bh,bn['odOPA'](l,J,{'each':channels,'children':bD=>l(I,{'vid':bD})}),null),bn['ulvcA'](u,bh,bn['odOPA'](l,J,{'each':bQ,'children':bD=>l(I,{})}),null),bh;})());}const n=G`
\& {
	display: grid;
	grid-auto-flow: column;

	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;

	row-gap: 1em;
	column-gap: 1em;

	height: 100%;
	width: 84vw;
	scroll-snap-align: start;

	/* transform: translateY(100vh); 
	opacity: 0; */
	animation: slide .4s .2s forwards, fade .3s 0s step-end;
}
@media screen AND (max-width: 1080px) {
	\& {

		width: 112vw;
	}
}
@media screen AND (max-width: 680px) {
	\& {
		/* grid-template-rows: 1fr 1fr;
		width: 140vw; */
		grid-auto-flow: row;
	}
}
`;d['push'](L(n,'section.p-c'));const j=C('<p\x20class=\x22mono-text\x22></p>');function Q({children:bn}){const bj={'kZHYS':function(bD,ba){return bD(ba);},'XKAKa':function(bD,ba){return bD(ba);},'pKSKq':function(bD,ba){return bD(ba);}},{useMemo:bQ}=bj['XKAKa'](P,bD=>eval(bD)),bh=bj['pKSKq'](bQ,()=>D(bn instanceof Array?bn[0x0]:bn));return((()=>{const bD=j['cloneNode'](!0x0);return bj['kZHYS'](r,()=>bD['innerHTML']=bh()),bD;})());}const h=G`
\& {
    text-align: center;
    padding: 0 2.8em;
    margin-bottom: 0;
    margin-top: 1em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 2rem;
}
\& b, \& i, \& em {
    transform: rotateY(28deg);
    font-style: normal;
    font-weight: inherit;
    letter-spacing: .015em;
}
\& em {
    opacity: 0;
    letter-spacing: -0.25em;
}
\& > p {
    margin: 0;
    padding: 0;
}
`;d['push'](L(h,'.mono-text'));function D(bn=''){const bj={'paaJf':'<em><wbr>_<wbr></em>'};return bn['split']('\x0a')['map'](bQ=>bQ['trim']())['join']('\x0a')['split']('\x20')['map'](bQ=>'<i>'+bQ['split']('')['map'](bh=>bh=='\x0a'?'<p\x20class=\x27mono-text\x27>':'<b>'+bh+'</b>')['join']('')+'</i>')['join'](bj['paaJf']);}const a=C('<p></p>');function E({ids:bn=['']}){const bj={'rDVWt':function(bQ,bh,bD){return bQ(bh,bD);},'knMMd':'How\x20to\x20use\x20Video\x20Wall','WcNBi':function(bQ,bh,bD){return bQ(bh,bD);}};return[bj['rDVWt'](l,Q,{'children':bj['knMMd']}),a['cloneNode'](!0x0),bj['WcNBi'](l,Q,{'children':'Tap\x20a\x20video\x20thumbnail\x20to\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20start\x20watching.\x20Create\x20your\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20own\x20video\x20walls\x20using\x20the\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22new\x22\x20button.'})];}let X=G`
`;d['push'](L(X,'.realized-modal'));const {useCallback:Z,useMemo:o,useEffect:b0}=P(bn=>eval(bn)),b1=k([]),b2=k(null);k(!0x0);const b3=k(null),b4=o(()=>b1[b1['length']-0x1]),b5=Z((bn,bj)=>{bj?b2=[bn,bj]:b3=bn;}),b6=Z(()=>{const bn={'FSNqd':function(bj,bQ){return bj>bQ;},'WcAIn':function(bj){return bj();}};bn['FSNqd'](b1['length'],0x1)?(b1['pop'](),b1=[...b1],b3=null,b2=null):(bn['WcAIn'](bp),b1=[]);}),b7=Z(()=>{const bn={'kEosw':function(bj,bQ){return bj(bQ);},'SjQcV':function(bj){return bj();}};if(b2){const [bj,bQ]=b2;b1['push'](bn['kEosw'](bj,bQ)),b1=[...b1],b2=null;}else bn['SjQcV'](b3),b3=null;}),b8=C('<p></p>'),b9=C('<section></section>'),bb=C('<img>');function bs({ids:ids=['']}){const bn={'lSnHQ':function(bE,bX,bZ){return bE(bX,bZ);},'ozrRn':function(bE,bX,bZ){return bE(bX,bZ);},'VwEQS':function(bE,bX){return bE(bX);},'ybtHQ':function(bE,bX){return bE(bX);},'AVurD':function(bE,bX){return bE(bX);}},{useCallback:bj,useMemo:bQ,useEffect:bh}=bn['VwEQS'](P,bE=>eval(bE)),bD=bn['ybtHQ'](bQ,()=>''+location['origin']+location['pathname']+'?watch='+ids['join'](','));bn['AVurD'](b5,()=>bj(()=>window['open'](bD,'_blank')['focus']()));const ba=bj(bE=>'https://img.youtube.com/vi/'+bE+'/0.jpg');return[bn['ozrRn'](l,Q,{'children':'Preview'}),b8['cloneNode'](!0x0),((()=>{const bE={'tJXAT':function(bZ,bo){return bZ(bo);}},bX=b9['cloneNode'](!0x0);return bn['lSnHQ'](u,bX,bn['ozrRn'](l,J,{'each':ids,'children':bZ=>((()=>{const bo=bb['cloneNode'](!0x0);return bE['tJXAT'](r,()=>F(bo,'src',ba(bZ))),bo;})())})),bX;})())];}let bT=G`
\& section {
    max-height: 6.66em; 
    overflow-y: auto;
    padding: 0 1.6em;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: .2em;
    row-gap: .2em;

    height: min-content;
    outline: none;
    position: relative;
    background: #e8ecf2;
    border: .075em solid #c8c9cd;
    border: .075em solid #6f7071;
    box-shadow: 0 0 1em -0.2em #fffb, -0.135em -0.135em 0.075em -0.075em #ebeff4 inset, 0.05em 0.05em 0.15em 0.0275em #0004 inset;
    font-family: Palatino;
    font-size: 1.025em;
    font-weight: 400;
    /* margin: 1em auto; */
    padding: 0.225em 0.5em 0.2em;
    border-radius: 0.275em;
    transform: scale(.88);
}
\& section img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 0.2em;
}
`;d['push'](L(bT,'.realized-modal'));const bC=C('<p></p>'),bc=C('<label><input><button>+</button></label>');function bu(){const bn={'Pnobj':'list=','zbjLG':function(s0,s1){return s0+s1;},'FOhaU':'/watch?v=','Gyimp':function(s0,s1,s2,s3){return s0(s1,s2,s3);},'agKAM':'change','klMAK':function(s0,s1){return s0(s1);},'VKXhY':function(s0,s1,s2,s3,s4){return s0(s1,s2,s3,s4);},'OXJhK':function(s0,s1){return s0(s1);},'OxSiJ':function(s0,s1){return s0(s1);},'oPYgl':function(s0,s1){return s0(s1);},'hwGwt':function(s0,s1,s2){return s0(s1,s2);},'YSOqO':'Customize\x20Video\x20Wall'},{useCallback:bj,useMemo:bQ,useEffect:bh}=P(s0=>eval(s0)),bD=bn['OXJhK'](bj,(s0=[])=>{bX['push'](...s0),bX=[...bX],bE='';}),ba=bn['OxSiJ'](bj,()=>{if(!!bE['trim']()){if(bE['includes'](bn['Pnobj'])){const s0=bE['slice'](bn['zbjLG'](bE['indexOf'](bn['Pnobj']),0x5));fetch('https://content-youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&playlistId='+s0+'&key=AIzaSyB7B0x6UyhcP88Lu-zbG4ZCDnWbrL7iS_0')['then'](s1=>s1['json']())['then'](bj(s1=>bD(s1['items']['map'](s2=>s2['contentDetails']['videoId']))));}else bE['includes'](bn['FOhaU'])&&bD([bE['slice'](bn['zbjLG'](bE['indexOf'](bn['FOhaU']),0x9))]);}}),bE=k(''),bX=bn['oPYgl'](k,[]),bZ=bQ(()=>!!bX['length']),bo=bn['oPYgl'](bQ,()=>'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Add\x20a\x20playlist\x20or\x20video\x20link\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20YouTube.\x20Your\x20wall\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20will\x20have\x20'+(bX['length']>=0x24?'36\x20(max)':bX['length'])+'\x20videos.');return bQ(()=>bZ&&b5(bs,{'ids':bX})),[bn['hwGwt'](l,Q,{'children':bn['YSOqO']}),bC['cloneNode'](!0x0),bn['hwGwt'](l,Q,{'children':bo}),((()=>{const s0=bc['cloneNode'](!0x0),s1=s0['firstChild'],s2=s1['nextSibling'];return bn['Gyimp'](B,s1,bn['agKAM'],bn['klMAK'](bj,s3=>bE=s3['target']['value'])),bn['VKXhY'](B,s2,'click',ba,!0x0),bn['OXJhK'](r,()=>s1['value']=bE()),s0;})())];}let bl=G`
\& label {
    display: flex;    
    margin: 1em auto;
    margin-bottom: 1.5em;
    width: 70%;
}
\& label > input, \& label > button {
    display: block;
    height: min-content;
    outline: none;
    
    position: relative;
    background: #e8ecf2;
    border: .075em solid #c8c9cd;
    border: .075em solid #6f7071;
    box-shadow: 0 0 1em -0.2em #fffb, -0.135em -0.135em 0.075em -0.075em #ebeff4 inset, 0.05em 0.05em 0.15em 0.0275em #0004 inset;
    color: #595959;

    font-family: Palatino;
    font-size: 1.025em;
    font-weight: 400;

    /* margin: 1em auto; */
    padding: 0.225em 0.5em 0.2em;
    border-radius: 0.275em;
    transform: scale(.88);
}
\& label > button {
    box-shadow: 0 0 1em -0.2em #fffb, 0.135em 0.135em 0.075em -0.075em #ebeff4 inset, -0.05em -0.05em 0.15em 0.0275em #0004 inset;
}
`;d['push'](L(bl,'.realized-modal')),c(['click']);const {useCallback:br,useMemo:bY}=P(bn=>eval(bn)),bM={'left':bu,'right':E},bJ=k(!0x1),bp=br(bn=>{const bj={'jEugk':function(bQ,bh){return bQ==bh;},'GOfkx':'string','eJKrZ':function(bQ,bh,bD){return bQ(bh,bD);},'CPQXj':function(bQ){return bQ();}};bj['jEugk'](typeof bn,bj['GOfkx'])&&(bj['eJKrZ'](b5,bM[bn],{}),bj['CPQXj'](b7)),bJ=!bJ;}),bF=C('<span\x20class=\x22bottom-circle-button\x22><button><b></b></button></span>');function bB({side:bn='',text:bj=''}){const bQ={'xsotu':function(bh,bD,ba){return bh(bD,ba);}};return((()=>{const bh=bF['cloneNode'](!0x0),bD=bh['firstChild'],ba=bD['firstChild'];return bD['$$click']=bp,bD['$$clickData']=bn,bD['className']=bn,bQ['xsotu'](u,ba,bj),bh;})());}const bx=L(G`
\& {
    display: flex;
}
\& button {
    position: relative;
    margin: auto;
    height: 13.5vh;
    width: 13.5vh;

    border-radius: 20vh;
    border: .25em solid #3EB7E4;

    background: #CFCFCF;
    box-shadow: 
        -1em -1em 2em -0.5em inset #0004,
        .5em .5em 0 0 #0002;

    transition: .2s transform;
    animation: in-scl .26s ease-out 0s 1;
}
@keyframes in-scl {
    0% {
        transform: translateY(30vh);
    }
}
\& button::before {
    content: "";
    position: absolute;
    top: 6%;
    left: 6%;
    height: 75%;
    width: 75%;
    border-radius: 20vh;
    background: #ffffff;
    opacity: 0.5;
    clip-path: ellipse(70% 70% at 20% 14%);
}
\& b {
    color: #8C8C8C;
    font-size: 4em;
    font-weight: normal;
}
\& h1 {
    margin: auto;
    font-weight: 400;
    color: #646465;
    font-size: 3.75em;
    letter-spacing: .05em;

    transition: .2s transform;
    animation: in-scl .26s ease-out 0s 1;
}
\& .left {
    background: radial-gradient(circle at top left, #E1E2E2 30%, #C6C6C7 38%, #C6C6C7 50%, #BFC5C5 58%);
    box-shadow: 
        -1em -1em 2em -0.5em inset #0004,
        .5em .5em 0 0 #0002;

    transform: scale(1.2) translateY(-10%);
}
\& .left:hover {
    transform: scale(1.3) translateY(-10%);
}
\& .left b {
    opacity: .4;
    background: #474747;
    color: #CFCFCF;
    font-size: 3.4vh;
    padding: .125em .25em;
    border-radius: .2em;
}

\& .right:hover {
    transform: scale(1.1);
}
\& .right b {
    opacity: .999;
    font-size: 7vh;
}
`,'.bottom-circle-button');d['push'](bx),c(['click']);const bS=C('<h1></h1>');function bf({text:text=''}={}){const bn={'wDHOp':function(bh,bD){return bh(bD);}},{useMemo:bj}=P(bh=>eval(bh)),bQ=bn['wDHOp'](bj,()=>text['replaceAll']('\x20','&nbsp;'));return((()=>{const bh=bS['cloneNode'](!0x0);return bn['wDHOp'](r,()=>bh['innerHTML']=bQ()),bh;})());}const bR=G`
footer h1 {
    margin: auto;
    font-weight: 400;
    color: #646465;
    font-size: 3.75em;
    letter-spacing: .05em;

    transition: .2s transform;
    animation: in-scl .26s ease-out 0s 1;
}
`;d['push'](bR);const bN=C('<footer></footer>');function bg({text:bn=''}={}){const bj={'vczGE':function(bQ,bh,bD,ba){return bQ(bh,bD,ba);},'aKypD':function(bQ,bh,bD){return bQ(bh,bD);},'BKedZ':'left','FEbFo':'New','geLhr':function(bQ,bh,bD,ba){return bQ(bh,bD,ba);},'IiOqW':function(bQ,bh,bD){return bQ(bh,bD);},'hAPxV':'right'};return((()=>{const bQ=bN['cloneNode'](!0x0);return bj['vczGE'](u,bQ,bj['aKypD'](l,bB,{'side':bj['BKedZ'],'text':bj['FEbFo']}),null),u(bQ,l(bf,{'text':bn}),null),bj['geLhr'](u,bQ,bj['IiOqW'](l,bB,{'side':bj['hAPxV'],'text':'?'}),null),bQ;})());}const bG=G`
footer {
    display: grid;
    grid-template-columns: 16% 1fr 16%;
    position: relative;

    height: 28%;
    background: linear-gradient(180deg, #9e9e9e, #C6C8D1 36%);
}
`;d['push'](bG);const bd=C('<aside\x20class=\x22modal-background\x22></aside>');function bL(bn){const bj={'IZMIn':function(bQ,bh,bD,ba,bE){return bQ(bh,bD,ba,bE);},'SnGxo':'click','gyHDR':function(bQ,bh,bD){return bQ(bh,bD);}};return((()=>{const bQ=bd['cloneNode'](!0x0);return bj['IZMIn'](B,bQ,bj['SnGxo'],bp,!0x0),bj['gyHDR'](u,bQ,()=>bn['children']),bQ;})());}const bk=G`
\& {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    background: #000b;
}
`;d['push'](L(bk,'.modal-background')),c(['click']);const bW=C('<aside\x20class=\x22realized-modal\x22><p></p><aside><button\x20class=\x22large\x22><span></span></button><button\x20class=\x22large\x22><span></span></button></aside></aside>');function bU(){const bn={'kssBN':function(bE,bX,bZ,bo){return bE(bX,bZ,bo);},'jNbvu':function(bE,bX,bZ,bo,s0){return bE(bX,bZ,bo,s0);},'ClqpS':'click','qwdwT':function(bE,bX,bZ,bo,s0){return bE(bX,bZ,bo,s0);},'JlBXw':function(bE,bX,bZ){return bE(bX,bZ);},'iCVGJ':function(bE,bX){return bE(bX);},'szXVr':function(bE,bX){return bE(bX);}},{useCallback:bj,useMemo:bQ}=bn['iCVGJ'](P,bE=>eval(bE)),bh=bn['iCVGJ'](bQ,()=>b1['length']>0x1?'Back':'Close'),bD=bn['szXVr'](bQ,()=>b2?'Next':'Go'),ba=bQ(()=>!b2&&!b3);return((()=>{const bE=bW['cloneNode'](!0x0),bX=bE['firstChild'],bZ=bX['nextSibling'],bo=bZ['firstChild'],s0=bo['firstChild'],s1=bo['nextSibling'],s2=s1['firstChild'];return bE['$$click']=s3=>s3['stopPropagation'](),bn['kssBN'](u,bE,b4,bX),bn['jNbvu'](B,bo,bn['ClqpS'],b6,!0x0),u(s0,bh),bn['qwdwT'](B,s1,'click',b7,!0x0),bn['JlBXw'](u,s2,bD),bn['iCVGJ'](r,()=>s1['disabled']=ba()),bE;})());}let bi=G`

\& {
    position: relative;
    font-family: Times, 'Times New Roman', serif;
    margin: auto;
    /* --w: 4px;
    --w2: calc(var(--w) + 1px);
    background: repeating-linear-gradient(0deg, #DCDCDC 0px, #DCDCDC var(--w), #ECECEC var(--w), #ECECEC var(--w2)); */
    
    --w: 3px;
    --w2: calc(var(--w) + 1px);
    background: linear-gradient(0, #aaa6, #fff4), repeating-linear-gradient(0deg, 
        #DCDCDC 0px, #DCDCDC var(--w), #F5F5F5 var(--w2), #DCDCDC calc(var(--w2) + 1px));
    
    /* min-width: 16.4em; */
    max-width: 20.4em;
    width: 20.4em;
    font-size: 2em;
    color: #656565;
    /* font-family: ; */
    font-weight: 300;
    filter: drop-shadow(0 0 0.5em #060606);
}
\& aside {
    /* display: flex; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 1em;
    /* grid-gap: .75em; */
}

\&::before, \&::after {
    content: "";
    --w: .75em;
    height: var(--w);
    display: block;
    
    transform: translateY(calc(-1 * var(--w) + 1px));
    background: #C1C1C1;
    border-radius: 100em / 120em 100em 0 0;
}
\&::after {
    background: #C0C0C1;
    border-radius: 100em / 0 0 120em 120em;
    transform: translateY(calc(var(--w) - 1px));
}
`;bi+=G`
.modal-enter-active {
	animation: fade 0.5s;
}
.modal-exit-active {
	animation: fade 0.5s reverse;
}
.modal-enter-active .realized-modal {
	transform: translateY(100vh);
	animation: slide 0.3s 0.2s;
}
.modal-exit-active .realized-modal {
	animation: slide 0.3s 0.1s reverse;
}
`,d['push'](L(bi,'.realized-modal')),c(['click']);const bP=C('<footer\x20class=\x22channel-footer\x22><div><button\x20class=\x22large\x22><span>Home\x20Menu</span></button></div></footer>');function bt(){const bn={'sedhw':function(bj,bQ,bh,bD,ba){return bj(bQ,bh,bD,ba);}};return((()=>{const bj=bP['cloneNode'](!0x0),bQ=bj['firstChild'],bh=bQ['firstChild'];return bn['sedhw'](B,bh,'click',V,!0x0),bj;})());}let bm=G`
\& {
    display: grid;
    grid-template-columns: 1fr;
    position: relative;

    height: 28%;
    min-width: 100%;
    align-items: center;
    
    --w: 3px;
    --w2: calc(var(--w) + 1px);
    background: 
        radial-gradient(#fffb, #0005),
        repeating-linear-gradient(0deg, 
            #DCDCDC 0px, #DCDCDC var(--w), 
            #F5F5F5 var(--w2), #DCDCDC calc(var(--w2) + 1px));

    max-width: 20.4em;
    font-size: 2em;
    color: #656565;
    /* font-family: ; */
    font-weight: 300;
    filter: drop-shadow(0 0 0.5em #060606);
    border-top: .125em solid #000b;
}
\& > div {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 1.5em;
    width: 40%;
    margin: 0 auto;
    margin-bottom: 0.5em;
}
\& > section {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 1.5em;
    width: 60%;
    margin: 0 auto;
    margin-bottom: 0.5em;
}
`;bm+=G`
.channel-enter-active \& {
	transform: translateY(100vh);
	animation: slide 0.25s;
}
.channel-exit-active \& {
	animation: slide 0.25s reverse;
}
`,d['push'](L(bm,'.channel-footer')),c(['click']);const bH=C('<iframe\x20width=\x22560\x22\x20height=\x22315\x22\x20title=\x22YouTube\x20video\x20player\x22\x20frameborder=\x220\x22\x20allow=\x22autoplay;\x22\x20allowfullscreen=\x22true\x22></iframe>'),bz=C('<article\x20class=\x22playing-video\x22></article>');function be(){const bn={'pRUZl':'load','AVrpc':function(bD,ba){return bD(ba);},'AMAQj':function(bD,ba,bE){return bD(ba,bE);}},{useMemo:bj}=P(bD=>eval(bD)),bQ=bn['AVrpc'](bj,()=>'https://www.youtube.com/embed/'+H);let bh;return bn['AVrpc'](x,()=>new Promise(bD=>bh=bD)),((()=>{const bD=bz['cloneNode'](!0x0);return bn['AMAQj'](u,bD,bn['AMAQj'](l,S,{get 'children'(){const ba=bH['cloneNode'](!0x0);return ba['addEventListener'](bn['pRUZl'],()=>bh()),bn['AVrpc'](r,()=>F(ba,'src',bQ())),ba;}})),bD;})());}let bV=G`
\& {
    height: 72%;
}
\& > iframe {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
`;bV+=G`
.channel-enter-active iframe {
	transform: translateY(100vh);
	animation: fade 0.3s 0.2s;
}
.channel-exit-active iframe {
	animation: fade 0.4s reverse, slide 0.3s 0.2s reverse;
}
`,d['push'](L(bV,'.playing-video'));const bO=C('<aside\x20class=\x22realized-channel\x22><div></div></aside>');function bw(){const bn={'qoBQc':function(bj,bQ,bh,bD){return bj(bQ,bh,bD);},'KirhD':function(bj,bQ,bh){return bj(bQ,bh);},'XuFrr':function(bj,bQ,bh){return bj(bQ,bh);}};return((()=>{const bj=bO['cloneNode'](!0x0),bQ=bj['firstChild'];return bn['qoBQc'](u,bQ,bn['KirhD'](l,be,{}),null),bn['qoBQc'](u,bQ,bn['XuFrr'](l,bt,{}),null),bj;})());}let bq=G`
\& {
    /* display: flex; */
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    width: calc(100vw - 3em);
    height: calc(100vh - 1.5em);
    background: black;
    padding: .75em 1.75em;
}
\& > div {
    border-radius: 8em / 12em;
    height: 100%;
    overflow: hidden;
}
\& * {
    margin: 0;
}
`;bq+=G`
.channel-enter-active {
	animation: fade 0.5s;
}
.channel-exit-active {
	animation: fade 0.5s reverse;
}
`,d['push'](L(bq,'.realized-channel'));const bv=C('<main></main>'),bI=C('<style>&nbsp;</style>'),bA=0xc,by=()=>{const bn={'KXYyP':function(ba,bE,bX){return ba(bE,bX);},'IYNSo':function(ba,bE){return ba(bE);},'RRYEE':function(ba){return ba();},'csQaI':function(ba){return ba();},'GiUWd':function(ba,bE,bX){return ba(bE,bX);},'nBJKA':function(ba,bE){return ba(bE);},'lXSPm':function(ba,bE,bX){return ba(bE,bX);},'pRoFx':'modal','Wgehs':'channel'},{useMemo:bj}=bn['IYNSo'](P,ba=>eval(ba)),bQ=bj(()=>({'clear-view-status':!bJ&&!z})),bh=bn['nBJKA'](bj,()=>m['reduce'](({id:ba,pages:bE},bX)=>(bE[ba]['length']<bA?bE[ba]['push'](bX):bE[++ba]=[bX],{'id':ba,'pages':bE}),{'id':0x0,'pages':[[]]})),bD=bn['nBJKA'](bj,()=>bh['pages']);return[((()=>{const ba=bv['cloneNode'](!0x0);return bn['KXYyP'](u,ba,bn['KXYyP'](l,J,{get 'each'(){return bD();},'children':bE=>l(K,{'channels':bE})})),bn['IYNSo'](r,bE=>R(ba,bQ(),bE)),ba;})()),bn['lXSPm'](l,bg,{'text':'Video\x20Wall'}),bn['lXSPm'](l,N,{'name':bn['pRoFx'],get 'children'(){return l(M,{get 'when'(){return bn['RRYEE'](bJ);},get 'children'(){return l(bL,{get 'children'(){return l(bU,{});}});}});}}),bn['lXSPm'](l,N,{'name':bn['Wgehs'],get 'children'(){return bn['GiUWd'](l,M,{get 'when'(){return bn['csQaI'](z);},get 'children'(){return l(bw,{});}});}}),((()=>{const ba=bI['cloneNode'](!0x0),bE=ba['firstChild'];return bn['IYNSo'](r,()=>bE['data']=d['join']('')),ba;})())];},bK=G`
body {
	height: 100vh;
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
main {
	padding: 0 8vw;
	padding-top: 6%;
	padding-bottom: 1%;
	height: 72%;
	box-sizing: border-box;
	background: #222222;
	background: 
		radial-gradient(#3339, #1119),
		repeating-linear-gradient(0deg, #1F1F1F 0px, #1F1F1F 3px, #232323 3px, #232323 5px);

	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: calc(84vw + 1em);
	
	overflow-x: auto;
	scroll-snap-type: x mandatory;
	scroll-padding-left: 8vw;
}
main::after {
	content: "";
	width: calc(8vw - 1em);
}
@media screen AND (max-width: 1080px) {
	main {
		grid-auto-columns: calc(112vw + 1em);
	}
}
@media screen AND (max-width: 680px) {
	main {
		grid-auto-columns: calc(196vw + 1em);

	}
}

@keyframes fade {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
@keyframes slide {
	0% {
		transform: translateY(100vh);
	}
	100% {
		transform: translateY(0vh);
	}
}


button.large {
	height: min-content;
    background: #DFE4EC;
    border: .075em solid #40B7E6;
    position: relative;
    box-shadow: 
        0 0 .2em -.05em #40b7e6, 
        0.135em 0.135em 0.075em -0.075em #ebeff4 inset, 
        -0.05em -0.05em 0.15em 0.0275em #0004 inset
    ;
    /* line-height: 1em; */
    border-radius: 100em;
    font-size: 1.25em;
    padding: .2em;
    transform: scale(.88);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    color: #595959;
    font-weight: 400;

    transition: .1s transform ease-out, .3s border-color ease-out, .3s box-shadow ease-out, .3s filter ease-out;
}
button.large:hover {
    transform: scale(.98);
}
button.large[disabled] {
	border-color: #6f7071;
    filter: brightness(0.85);
    box-shadow: 
        0 0 .2em -.05em #6f7071, 
        0.135em 0.135em 0.075em -0.075em #ebeff4 inset, 
        -0.05em -0.05em 0.15em 0.0275em #0004 inset

}
button.large[disabled]:hover {
	transform: scale(0.88);
}
button.large::before {
    
    content: "";
    background: white;
    height: 28%;
    display: block;
    position: absolute;
    z-index: -2;
    top: 0.12em;
    left: 0.4em;
    width: calc(100% - 0.8em);
    border-radius: 10em;
    filter: blur(1px);
}
button.large span {
    font-size: .92em;
    vertical-align: text-top;
}
button.large span::before {
    content: "";
    background: white;
    position: absolute;
    width: 1em;
    left: 0.2em;
    height: 1em;
    top: 8%;
    border-radius: 1em;
    z-index: -2;
    filter: blur(1px);

}
button.large span::after {
    content: "";
    background: #DFE4EC;
    position: absolute;
    width: 2.5em;
    left: 0.25em;
    height: 0.6em;
    top: 35%;
    border-radius: 4em 1em 1em 1em;
    z-index: -2;
    filter: blur(1px);
}
`;d['push'](bK),f(by,document['body']);
