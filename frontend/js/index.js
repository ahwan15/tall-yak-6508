let bag=[];
    let cartitems=JSON.parse(localStorage.getItem("cartproducts")) || [];
    let url="https://636c7e407f47ef51e14a40d6.mockapi.io/products";
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        bag=data;
        displaycard(data);
    });
    function search(){
        let q=document.querySelector("#search").value;
        let newdata=bag.filter(function(elem){
            return elem.name.toLowerCase().includes(q.toLocaleLowerCase());
        });
        displaycard(newdata);
    }
    function displaycard(data){
        document.querySelector("#container").innerHTML="";
        data.forEach(function (elem){
        let anc=document.createElement("a");
        anc.href="details.html";
        let div=document.createElement("div");
        div.addEventListener("click",function(){
            localStorage.setItem("proddetails",JSON.stringify(elem));
        });
        let imageprod=document.createElement("img");
        imageprod.setAttribute("src",elem.avatar);

        let price=document.createElement("h2");
        price.innerText="₹"+elem.price;

        let name=document.createElement("p");
        name.innerText=elem.name;

        let place=document.createElement("p");
        place.innerText=elem.place;

        let date=document.createElement("p");
        date.innerText="Date:-"+elem.createdAt;

       
        div.append(imageprod,price,name,place,date);
        anc.append(div);
        document.querySelector("#container").append(anc);
        });
    }
