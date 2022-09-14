function swap(a,b){
    let swap=a.innerHTML
    a.innerHTML=b.innerHTML
    b.innerHTML=swap
}
function accessories(one,two,three){
    one.style.display="none"
    one.style.opacity="0"
    two.style.display="none"
    two.style.opacity="0"
    three.style.display="flex"
    setTimeout(()=>{
    three.style.opacity="1"
    },300)
}
function toys(one ,two ,three){
    one.style.display="none"
    one.style.left="100%"
    one.style.opacity="0"
    two.style.display="none"
    two.style.opacity="0"
    two.style.left="100%"
    three.style.display="flex"
    setTimeout(()=>{
    three.style.left="0"
    three.style.opacity="1"
        },100)
}
function clothes(one,two,three){
    one.style.display="none"
    one.style.opacity="0"
    one.style.right="100%"
    two.style.display="none"
    two.style.right="100%"
    two.style.opacity="0"
    three.style.display="flex"
    setTimeout(()=>{
    three.style.right="0"
    three.style.opacity="1"
    },100)
}
function toggle(a,b,c){
    a.classList.add('active')
    b.classList.remove('active')
    c.classList.remove('active')
}

let intro=document.querySelector(".intro")
let logoIntro=document.querySelector(".logoIntro")
let start=document.querySelector(".remove")
setTimeout(() => {
    logoIntro.style.opacity="1"
},1000);
let introContent="Welcome To Our Market Where every thing you need for your Babies are found"
let content=introContent.split("")
let j=0;
setTimeout(()=>{let myContent=setInterval(()=>{
    document.querySelector(".introContent h2").innerHTML+=content[j++]
    if(j >=content.length){
    clearInterval(myContent)
    }
},50)},1500)
setTimeout(() => {
    intro.style.display="none"
    start.style.display="block"
},7500);

let search=document.querySelector(".search")
let searchIcon=document.querySelector(".search i")
let links=document.querySelector(".links")
let inputSearch=document.querySelector(".input")
let xmark=document.querySelector(".fa-xmark")
searchIcon.addEventListener("click",()=>{
    links.style.transition=".3s"
    links.style.position="relative";
    links.style.bottom="200px";
    search.style.display="none";
    searchIcon.style.display="none";
    inputSearch.style.opacity="1"
    inputSearch.style.display="block"
    inputSearch.style.width="60%"
    inputSearch.style.transition=".3s"
    inputSearch.style.height="35px"
    inputSearch.style.position="absolute"
    inputSearch.style.right="10%";
    inputSearch.style.borderRadius="20px";
    inputSearch.style.border="none"
    inputSearch.style.outline="none"
    xmark.style.display="block"
})
xmark.addEventListener("click",()=>{
    inputSearch.style.width="0"
    inputSearch.style.opacity="0"
    links.style.bottom="0px";
    search.style.display="block";
    searchIcon.style.display="block";
    inputSearch.style.width="0"
    xmark.style.display="none"
})
let titleShop="Explore your baby's needs..."
let title=titleShop.split("")
let i=0;
let myLetter=setInterval(()=>{
    document.querySelector(".BabyNeedsAddress").innerHTML+=title[i++]
    if(i >=title.length){
    i=0
    document.querySelector(".BabyNeedsAddress").innerHTML=null;
    }
},100)
let linksArray=document.querySelectorAll(".linksAccessories li a")
let newFeaturedAccessories=document.querySelector(".newFeatured")
let newArrivalAccessories=document.querySelector(".newArrival")
let bestSellerAccessories=document.querySelector(".bestSeller")
let newFeaturedToys=document.querySelector(".newFeaturedToys")
let newArrivalToys=document.querySelector(".newArrivalToys")
let bestSellerToys=document.querySelector(".bestSellerToys")
let newFeaturedClothes=document.querySelector(".newFeaturedClothes") 
let newArrivalClothes=document.querySelector(".newArrivalClothes")
let bestSellerClothes=document.querySelector(".bestSellerClothes")
let linksSections=document.querySelectorAll(".linksSections a")
if(linksArray[0].classList.contains('active')){
    newFeaturedAccessories.style.display="flex"
    setTimeout(()=>{
    newFeaturedAccessories.style.opacity="1"
    },300)
    }
    else if(linksArray[1].classList.contains('active')){
    newArrivalAccessories.style.display="flex"
    setTimeout(()=>{
    newArrivalAccessories.style.opacity="1"
    },300)
    }
    else if(linksArray[2].classList.contains('active')){
    bestSellerAccessories.style.display="flex"
    setTimeout(()=>{
    bestSellerAccessories.style.opacity="1"
    },300)
    }
    linksArray.forEach((eleTwo)=>{
    eleTwo.onclick=()=>{
    if(eleTwo.classList.contains('linkNewArrival')){
    toggle(eleTwo,linksArray[0],linksArray[2])
    accessories(newFeaturedAccessories,bestSellerAccessories,newArrivalAccessories)
    }
    else if(eleTwo.classList.contains('linkNewFeatured')){
    toggle(eleTwo,linksArray[1],linksArray[2])
    accessories(bestSellerAccessories,newArrivalAccessories,newFeaturedAccessories)
    }
    else{
    toggle(eleTwo,linksArray[1],linksArray[0])
    accessories(newArrivalAccessories,newFeaturedAccessories,bestSellerAccessories)
    }
    }
    })
linksSections.forEach((ele)=>{
    ele.onclick=()=>{
    if(ele.innerHTML=="TOYS"){
    swap(linksSections[0],ele)
    newFeaturedAccessories.style.display="none"
    newArrivalAccessories.style.display="none"
    bestSellerAccessories.style.display="none"
    newFeaturedAccessories.style.opacity="0"
    newArrivalAccessories.style.opacity="0"
    bestSellerAccessories.style.opacity="0"
    newFeaturedClothes.style.display="none"
    newFeaturedClothes.style.opacity="0"
    newFeaturedClothes.style.right="100%"
    newArrivalClothes.style.display="none"
    newArrivalClothes.style.opacity="0"
    newArrivalClothes.style.right="100%"
    bestSellerClothes.style.display="none"
    bestSellerClothes.style.opacity="0"
    bestSellerClothes.style.right="100%"
    if(linksArray[0].classList.contains('active')){
    newFeaturedToys.style.display="flex"
    setTimeout(()=>{
    newFeaturedToys.style.left="0"
    newFeaturedToys.style.opacity="1"
    },100)
}else if(linksArray[1].classList.contains('active')){
    newArrivalToys.style.display="flex"
    setTimeout(()=>{
    newArrivalToys.style.left="0"
    newArrivalToys.style.opacity="1"
    },100)
}
else if(linksArray[2].classList.contains('active')){
    bestSellerToys.style.display="flex"
    setTimeout(()=>{
    bestSellerToys.style.left="0"
    bestSellerToys.style.opacity="1"
    },100)
}
else{
    return
}
    linksArray.forEach((eleTwo)=>{
    eleTwo.onclick=()=>{
    if(eleTwo.classList.contains('linkNewArrival')){
    toggle(eleTwo,linksArray[0],linksArray[2])
    toys(newFeaturedToys,bestSellerToys,newArrivalToys)
}
    else if(eleTwo.classList.contains('linkNewFeatured')){
    toggle(eleTwo,linksArray[1],linksArray[2])
    toys(newArrivalToys,bestSellerToys,newFeaturedToys)
}
    else{
    toggle(eleTwo,linksArray[1],linksArray[0])
    toys(newArrivalToys,newFeaturedToys,bestSellerToys)
}}})}
    else if(ele.innerHTML=="ACCESSORIES"){
    swap(linksSections[0],ele)
    newArrivalToys.style.display="none"
    newArrivalToys.style.left="100%"
    newArrivalToys.style.opacity="0"
    newFeaturedToys.style.display="none"
    newFeaturedToys.style.left="100%"
    newFeaturedToys.style.opacity="0"
    bestSellerToys.style.display="none"
    bestSellerToys.style.left="100%"
    bestSellerToys.style.opacity="0"
    newFeaturedClothes.style.display="none"
    newFeaturedClothes.style.opacity="0"
    newFeaturedClothes.style.right="100%"
    newArrivalClothes.style.display="none"
    newArrivalClothes.style.opacity="0"
    newArrivalClothes.style.right="100%"
    bestSellerClothes.style.display="none"
    bestSellerClothes.style.opacity="0"
    bestSellerClothes.style.right="100%"
    if(linksArray[0].classList.contains('active')){
    newFeaturedAccessories.style.display="flex"
    setTimeout(()=>{
    newFeaturedAccessories.style.opacity="1"
    },300)
    }
    else if(linksArray[1].classList.contains('active')){
    newArrivalAccessories.style.display="flex"
    setTimeout(()=>{
    newArrivalAccessories.style.opacity="1"
    },300)
    }
    else if(linksArray[2].classList.contains('active')){
    bestSellerAccessories.style.display="flex"
    setTimeout(()=>{
    bestSellerAccessories.style.opacity="1"
    },300)
    }
    else{
        return
    }
    linksArray.forEach((eleTwo)=>{
    eleTwo.onclick=()=>{
    if(eleTwo.classList.contains('linkNewArrival')){
    toggle(eleTwo,linksArray[0],linksArray[2])
    accessories(newFeaturedAccessories,bestSellerAccessories,newArrivalAccessories)
    }
    else if(eleTwo.classList.contains('linkNewFeatured')){
    toggle(eleTwo,linksArray[1],linksArray[2])
    accessories(bestSellerAccessories,newArrivalAccessories,newFeaturedAccessories)
    }
    else{
    toggle(eleTwo,linksArray[1],linksArray[0])
    accessories(newArrivalAccessories,newFeaturedAccessories,bestSellerAccessories)
    }
    }
})}else{
    swap(linksSections[0],ele)
    newFeaturedAccessories.style.display="none"
    newArrivalAccessories.style.display="none"
    bestSellerAccessories.style.display="none"
    newFeaturedAccessories.style.opacity="0"
    newArrivalAccessories.style.opacity="0"
    bestSellerAccessories.style.opacity="0"
    newArrivalToys.style.display="none"
    newArrivalToys.style.left="100%"
    newArrivalToys.style.opacity="0"
    newFeaturedToys.style.display="none"
    newFeaturedToys.style.left="100%"
    newFeaturedToys.style.opacity="0"
    bestSellerToys.style.display="none"
    bestSellerToys.style.left="100%"
    bestSellerToys.style.opacity="0"
    if(linksArray[0].classList.contains('active')){
    newFeaturedClothes.style.display="flex"
    setTimeout(()=>{
    newFeaturedClothes.style.right="0"
    newFeaturedClothes.style.opacity="1"
    },100)
    }else if(linksArray[1].classList.contains('active')){
    newArrivalClothes.style.display="flex"
    setTimeout(()=>{
    newArrivalClothes.style.right="0"
    newArrivalClothes.style.opacity="1"
    },100)
    }
    else if(linksArray[2].classList.contains('active')){
    bestSellerClothes.style.display="flex"
    setTimeout(()=>{
    bestSellerClothes.style.right="0"
    bestSellerClothes.style.opacity="1"
    },100)
    }
    else{
        return
    }
    linksArray.forEach((eleTwo)=>{
    eleTwo.onclick=()=>{
    if(eleTwo.classList.contains('linkNewArrival')){
    toggle(eleTwo,linksArray[0],linksArray[2])
    clothes(newFeaturedClothes,bestSellerClothes,newArrivalClothes)
    }
    else if(eleTwo.classList.contains('linkNewFeatured')){
    toggle(eleTwo,linksArray[1],linksArray[2])
    clothes(newArrivalClothes,bestSellerClothes,newFeaturedClothes)
    }
    else{
    toggle(eleTwo,linksArray[1],linksArray[0])
    clothes(newArrivalClothes,newFeaturedClothes,bestSellerClothes)
    }
}})}}})

let barone=document.querySelector(".bar1")
let bartwo=document.querySelector(".bar2")
let barthree=document.querySelector(".bar3")
let aboutusButton=document.querySelector(".AboutUsContent button")
let aboutus=document.querySelector(".AboutUsContent")
let skills=document.querySelector(".skills")
let back=document.querySelector(".back")
aboutusButton.onclick=()=>{
    skills.style.display="block"
    setTimeout(()=>{
    skills.style.opacity="1"
    skills.style.left="0"
    },100)
    aboutus.style.display="none"
    aboutus.style.position="relative"
    aboutus.style.left="100%"
    aboutus.style.opacity="0"
    setTimeout(()=>{
    barone.style.setProperty("--width","80%")
    bartwo.style.setProperty("--width","80%")
    barthree.style.setProperty("--width","70%")
    },1000)
}
back.onclick=()=>{
    aboutus.style.display="block"
    skills.style.display="none"
    skills.style.opacity="0"
    skills.style.left="100%"
    setTimeout(()=>{
    aboutus.style.left="0"
    aboutus.style.opacity="1"
    },100)
    setTimeout(()=>{
    barone.style.setProperty("--width","0")
    bartwo.style.setProperty("--width","0")
    barthree.style.setProperty("--width","0")
    },1000)
}