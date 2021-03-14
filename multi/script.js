/* 
 1 : when mouse move in each slider area the function start
 2 : the slider "left" will change by the mouse offsetX
 3 : change the beforearea by the mouse offsetX
 4 : beforearae "width" & slider "left" will be 0 if mouse offsetX less than 30
 4 : beforearae "width" & slider "left" will be 400 if mouse offsetX more than 370
*/

// 1
const sliderarae = document.querySelectorAll('.slider-area');
sliderarae.forEach((eachsliderarea)=>{
    eachsliderarea.addEventListener('mousemove', function sliderimg(e){
        const sliderline = eachsliderarea.lastElementChild;
        const beforearea = eachsliderarea.querySelector('.before-area');
        // 2
        sliderline.style.left = e.layerX + 'px';
        // 3
        beforearea.style.width = e.layerX + 'px';
        // 4
        if(e.layerX < 30){
        sliderline.style.left = "0px";
        beforearea.style.width = '0px';
        }
        // 5
        if(e.layerX > 370){
            sliderline.style.left = "400px";
            beforearea.style.width = '400px';
            }
    })
})
