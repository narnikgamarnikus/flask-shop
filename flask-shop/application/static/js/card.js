function setCartData(t){return localStorage.setItem("flask-shop-card",JSON.stringify(t)),!1}function getCartData(){return JSON.parse(localStorage.getItem("flask-shop-card"))}function renderCard(){currentCount=Number($("#cardCount").text()),"undefined"!=typeof Storage||alert("Корзина магазина не доступна для вашего браузера");var t=getCartData()||{};if(null!==t){for(var e in t)0!==t[e][3]&&(t[e][3]<0||(currentCount+=Number(t[e][3]),cardItem='<li id="li'+e+'"><span class="item"><span class="item-left"><img style="width="50px" height="50px" src="'+t[e][1]+'" alt="" /><span class="item-info"><span>'+t[e][0]+"</span><br><span id=span"+e+">"+t[e][2]+" x "+t[e][3]+'</span></span></span><span class="item-right"><button onclick="itemDelete('+e+')" class="btn btn-xs btn-danger pull-right">x</button></span></span></li>',$("#cardNav").prepend(cardItem)));$("#cardCount").text(currentCount)}else alert("LocalStorage is clear!"),$("#cardCount").text(Number(0))}function itemAdd(t){var e=getCartData()||{},a=(document.getElementById("product_photo"+t).getAttribute("alt"),document.getElementById("product_photo"+t).getAttribute("src")),n=document.getElementById("product_price"+t).innerHTML,r=$("#cardCount").text();if(e[t]=[name,a,n,e[t][3]],e[t][3]>=1){e[t][3]+=1;var r=Number($("#cardCount").text());$("#cardCount").text(Number(r)+1),countItem=Number($("#span"+t).text().split("x")[1]),$("#span"+t).text(n+" x "+(Number(countItem)+1))}else{e[t]=[name,a,n,1];var s='<li id="li'+t+'"><span class="item"><span class="item-left"><img style="width="50px" height="50px" src="'+a+'" alt="" /><span class="item-info"><span>'+name+"</span><br><span id=span"+t+">"+n+" x "+e[t][3]+'</span></span></span><span class="item-right"><button onclick="itemDelete('+t+')" class="btn btn-xs btn-danger pull-right">x</button></span></span></li>',r=Number($("#cardCount").text());$("#cardCount").text(Number(r)+1),$("#cardNav").prepend(s)}return!setCartData(e),!1}function itemDelete(t){var e=getCartData()||{};e[t][3]>=2?(countItem=Number($("#span"+t).text().split("x")[1]),$("#span"+t).text(e[t][2]+" x "+(Number(countItem)-1))):(e[t]=[e[t][0],e[t][1],e[t][2],0],elem=document.getElementById("li"+t),elem.parentNode.removeChild(elem)),e[t][3]-=1,setCartData(e),currentCount=$("#cardCount").text(),$("#cardCount").text(Number(currentCount)-1)}window.onload=renderCard;