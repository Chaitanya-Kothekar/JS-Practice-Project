
gsap.from(".container",{
    y:-100,
    duration:1.6,
    delay:0.4,
    opacity:0,
    stagger:0.5
})

gsap.from(".indexBox",{
    y:-250,
    duration:0.9,
    opacity:0,
    stagger:0.6,
    scrollTrigger:{
        // markers:true,
        start:"top 60%",
        trigger:".container2",
        scroller:"body",
                 // ( scrolling trigger for checking points , remove comments to check in website)
    },
})

gsap.from(".rightCont2 , .container2 ",{
    y:-70,
    duration:2,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        // markers:true,
        start:"top 60%",
        trigger:".container2",
        scroller:"body",
                 // ( scrolling trigger for checking points , remove comments to check in website)
    },
})

