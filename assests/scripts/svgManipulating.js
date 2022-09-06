const svg = document.getElementById("mainSVG");
svg.setAttribute("viewBox", `0 0 ${window.innerWidth*0.8} ${window.innerHeight*0.8}`);

 window.addEventListener("resize", ()=>{
     svg.setAttribute("viewBox", `0 0 ${window.innerWidth*0.8} ${window.innerHeight*0.8}`);
})