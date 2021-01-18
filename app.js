window.onload = ()=>{
    gsap.from(".wrapper",{
        duration:3,
        opacity:0
    });

    gsap.from(".d-1",{
        duration:4,
        opacity:0,
        scale:0,
        delay:1,
        ease:"bounce"
    });

    gsap.from(".d-2",{
        duration:1,
        opacity:0,
        xPercent:100,
        delay:4,
        ease:"elastic"
    });

    gsap.from(".smile img",{
        duration:0.5,
        opacity:0,
        scale:0,
        delay:2,
        stagger:0.5,
        rotation:360
    });

}