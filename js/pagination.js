function Pagination(t,e,i){this.ele=t,this.options=e||{},this.cb=i||function(){},this.default={pageInfo:{pagenum:1,pagesize:10,totalsize:130,totalpage:13},textInfo:{first:"first",prev:"prev",list:"",next:"next",last:"last"}},this.list=null,this.init()}function createP(t,e){var i=document.createElement("p");return i.innerHTML=t,setStyle(i,{margin:"0px 3px",padding:"2px 5px",borderRadius:"50%"}),t==e&&setStyle(i,{backgroundColor:"#ccc",width:"30px",height:"30px",lineHeight:"26px",textAlign:"center"}),i}function setStyle(t,e){for(var i in e)t.style[i]=e[i]}Pagination.prototype.init=function(){this.replace1(),this.showBox(),this.clickBox()},Pagination.prototype.replace1=function(){if(this.options.pageInfo)for(var t in this.options.pageInfo)this.default.pageInfo[t]=this.options.pageInfo[t];if(this.options.textInfo)for(var e in this.options.textInfo)this.default.textInfo[e]=this.options.textInfo[e]},Pagination.prototype.showBox=function(){this.ele.innerHTML="",setStyle(this.ele,{display:"flex",justifyContent:"center",alignItems:"center"}),this.showText(),this.showP(),this.stop1(),this.showBtn(),this.cb(this.default.pageInfo.pagenum)},Pagination.prototype.showBtn=function(){var t=document.createElement("input");t.value=this.default.pageInfo.pagenum,setStyle(t,{width:"30px",lineHeight:"20px"}),this.ele.appendChild(t);t=document.createElement("button");t.innerHTML="GO",setStyle(t,{width:"30px",lineHeight:"20px",marginLeft:"5px"}),this.ele.appendChild(t)},Pagination.prototype.stop1=function(){var t=this.default.pageInfo.pagenum,e=this.default.pageInfo.totalpage,i=this.ele.children;1==t&&(i[0].style.backgroundColor="#666",i[1].style.backgroundColor="#fff"),t==e&&(i[3].style.backgroundColor="#fff",i[4].style.backgroundColor="#666")},Pagination.prototype.showText=function(){var t,e=this.default.textInfo;for(t in e){var i=document.createElement("div");"list"==(i.className=t)?setStyle(this.list=i,{display:"flex",justifyContent:"center",alignItems:"center"}):(setStyle(i,{margin:"0px 3px",padding:"2px 5px",borderRadius:"5px"}),i.innerHTML=e[t]),this.ele.appendChild(i)}},Pagination.prototype.showP=function(){var t,e=this.default.pageInfo.pagenum,i=this.default.pageInfo.totalpage;if(i<10)for(let t=1;t<=i;t++){var n=createP(t,e);this.list.appendChild(n)}else if(e<5){for(let t=1;t<=5;t++){n=createP(t,e);this.list.appendChild(n)}(t=document.createElement("span")).innerHTML="...",this.list.appendChild(t);for(let t=i-1;t<=i;t++){n=createP(t,e);this.list.appendChild(n)}}else if(5==e){for(let t=1;t<=7;t++){n=createP(t,e);this.list.appendChild(n)}(t=document.createElement("span")).innerHTML="...",this.list.appendChild(t);for(let t=i-1;t<=i;t++){n=createP(t,e);this.list.appendChild(n)}}else if(5<e&&e<i-4){for(let t=1;t<=2;t++){n=createP(t,e);this.list.appendChild(n)}(t=document.createElement("span")).innerHTML="...",this.list.appendChild(t);for(let t=e-2;t<=e+2;t++){n=createP(t,e);this.list.appendChild(n)}var a=document.createElement("span");a.innerHTML="...",this.list.appendChild(a);for(let t=i-1;t<=i;t++){n=createP(t,e);this.list.appendChild(n)}}else if(e==i-4){for(let t=1;t<=2;t++){n=createP(t,e);this.list.appendChild(n)}(t=document.createElement("span")).innerHTML="...",this.list.appendChild(t);for(let t=i-6;t<=i;t++){n=createP(t,e);this.list.appendChild(n)}}else if(i-4<e){for(let t=1;t<=2;t++){n=createP(t,e);this.list.appendChild(n)}(t=document.createElement("span")).innerHTML="...",this.list.appendChild(t);for(let t=i-4;t<=i;t++){n=createP(t,e);this.list.appendChild(n)}}},Pagination.prototype.clickBox=function(){this.ele.onclick=t=>{var e=this.default.pageInfo.pagenum,t=(t=t||window.event).target||t.srcElement;"next"==t.className&&e!=this.default.pageInfo.totalpage&&(this.default.pageInfo.pagenum+=1,this.showBox()),"prev"==t.className&&1!=e&&(--this.default.pageInfo.pagenum,this.showBox()),"last"==t.className&&e!=this.default.pageInfo.totalpage&&(this.default.pageInfo.pagenum=this.default.pageInfo.totalpage,this.showBox()),"first"==t.className&&1!=e&&(this.default.pageInfo.pagenum=1,this.showBox()),"P"==t.nodeName&&e!=t.innerHTML&&(this.default.pageInfo.pagenum=parseInt(t.innerHTML),this.showBox()),"BUTTON"==t.nodeName&&t.previousElementSibling.value!=e&&(this.default.pageInfo.pagenum=parseInt(t.previousElementSibling.value),this.showBox())}};