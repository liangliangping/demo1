window.addEventListener('load', function () {
    var photo = document.querySelector('.photo-1-1');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    var picture = document.querySelector('.picture')
    var bigimg = document.querySelector('.bigimg');
    photo.addEventListener('mouseenter', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    photo.addEventListener('mouseleave', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })


    photo.addEventListener('mousemove', function (e) {
        // x,y 是鼠标距离父盒子photo的距离
        var x = e.pageX - photo.offsetLeft;
        var y = e.pageY - photo.offsetTop;

        // console.log(x, y);
        // console.log(e.pageX);
        // console.log(picture.offsetLeft);
        // console.log(photo.offsetLeft);
        //鼠标在mask中居中,maskX，Y是mask左上角的位置
        var maskX = x - mask.offsetWidth / 2
        var maskY = y - mask.offsetHeight / 2
        // mask的最大移动距离
        let maxX = picture.offsetWidth - mask.offsetWidth
        let maxY = picture.offsetHeight - mask.offsetHeight
        if (maskX <= 0) {
            maskX = 0

        } else if (maskX >= maxX) {
            maskX = maxX
        }

        if (maskY <= 0) {
            maskY = 0
        } else if (maskY >= maxY) {
            maskY = maxY
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';



        var bigMaxX = bigimg.offsetWidth - big.offsetWidth;
        var bigMaxY = bigimg.offsetHeight - big.offsetHeight;
        var bigX = maskX * bigMaxX / maxX
        var bigY = maskY * bigMaxY / maxY;
        bigimg.style.left = -bigX + 'px';
        bigimg.style.top = - bigY + 'px'

    })
    var play = document.querySelector('.play');

    var playChild = play.children;
    var picture = document.querySelector('.picture');

    // for (var i = 0; i < playChild.length; i++) {
    //     playChild[i].onmouseover = function () {
    //         for (var j = 0; j < playChild.length; j++) {
    //             playChild[j].className = '';
    //         }
    //         this.className = 'waikuang';
    //         picture.src = this.children[0].children[0].src
    //         // console.log(this.children.children);
    //     }

    // }


    play.addEventListener('mouseover', function (event) {
        if (event.target.localName == 'img') {
            for (var j = 0; j < playChild.length; j++) {
                playChild[j].className = '';
            }
            event.target.parentNode.parentNode.className = 'waikuang';
            picture.src = event.target.src.replace("50x50", '400x400')
            event.target.src = event.target.src;
            bigimg.src = event.target.src.replace("50x50", '1200x1200')
        }
    })

    var tab = document.querySelector('.tab')
    var xingxi_tupian = document.querySelector('.xingxi-tupian')
    var tabLi = tab.children
    for (let i = 0; i < tabLi.length; i++) {
        tabLi[i].onclick = function () {
            for (let i = 0; i < tabLi.length; i++) {
                tabLi[i].className = '';
            }
            this.className = 'bianhua';
            for (let i = 0; i < tabLi.length; i++) {
                xingxi_tupian.children[i].style.display = 'none';
            }
            xingxi_tupian.children[i].style.display = 'block';
            // console.log(xingxi_tupian.children[i]);
        }
    }

   
})
