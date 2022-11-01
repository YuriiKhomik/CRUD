function e(e){const r={strawberry:"полуничка",kiwi:"ківі",apple:"ябко",blackberry:"ожинка"};return new Promise(((o,n)=>{setTimeout((()=>{o(r[e])}),500)}))}(async function(){try{const r=e("apple"),o=e("kiwi"),n=e("strawberry"),t=e("blackberry"),c=await Promise.all([r,o,n,t]);return console.log(c),c}catch(e){console.log(e)}})().then((e=>console.log(e)));
//# sourceMappingURL=index.ddf52ec9.js.map
