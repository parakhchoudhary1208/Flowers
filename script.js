var arr = [
    {icon: "badge.png", name: "Warrenty", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum animi"},
    {icon: "bag.png", name: "Free Shipping", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum animi"},
    {icon: "diamond.png", name: "Best Quality", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum animi"}
];

var clutter = "";

arr.forEach(function(val){
    clutter +=`<div id="card">
    <div id="circle">
        <img src="${val.icon}" alt="">
    </div>
    <h3>${val.name}</h3>
    <h4>${val.para}</h4>
</div>`
})

document.querySelector("#rect").innerHTML=clutter;

var arr1 = [
    {img: "https://images.unsplash.com/photo-1616058523829-9043aec7cf0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zmxvd2VycyUyMGJvdXF1ZXR8ZW58MHx8MHxibGFja3w%3D&auto=format&fit=crop&w=800&q=60", names: "Sola Flowers", rate: "$156.000"},
    {img: "https://images.unsplash.com/photo-1617592672487-2d2941e539fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMwfHxmbG93ZXJzJTIwYm91cXVldHxlbnwwfHwwfGJsYWNrfA%3D%3D&auto=format&fit=crop&w=800&q=60", names: "Shemnes Flowers", rate: "$516.000"},
    {img: "https://images.unsplash.com/photo-1517935114029-2d88d2f8f64c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkyfHxmbG93ZXJzJTIwYm91cXVldHxlbnwwfHwwfGJsYWNrfA%3D%3D&auto=format&fit=crop&w=800&q=60", names: "Toli Bride Flowers", rate: "$96.000"}
];

var clutter1 = "";

arr1.forEach(function(elem){
    clutter1 +=`<div id="card1">
    <img src="${elem.img}" alt="">
    <h3 id="name1">${elem.names}</h3>
    <h3 id="rate">${elem.rate}</h3>
</div>`
})

document.querySelector("#rect1").innerHTML=clutter1;

var arr2 = [
    {per: "94%"},
    {per: "96%"},
    {per: "100%"}
];

var clutter2 = "";

arr2.forEach(function(value){
    clutter2 +=`<div id="card2">
    <h2>${value.per}</h2>
    <p id="det">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cum odio.</p>
</div>`
})

document.querySelector("#rect2").innerHTML=clutter2;