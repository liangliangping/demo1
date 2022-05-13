window.addEventListener('load', function () {
    //左右点击轮播图
    var zuoanniu = document.querySelector('.z-anniu');
    var youanniu = document.querySelector('.y-anniu');
    var tupian = document.querySelector('.zs-tupian');
    // mouseover/mouseout
    tupian.addEventListener('mouseover', function () {
        zuoanniu.style.display = 'block';
        youanniu.style.display = 'block';
        clearInterval(timess);
        timess = null;
    })
    tupian.addEventListener('mouseout', function () {
        zuoanniu.style.display = 'none';
        youanniu.style.display = 'none';
        timess = setInterval(function () {
            handle()
        }, 1500)
    })

    var tupianwidth = tupian.offsetWidth
    // 小圆圈
    var ul = tupian.querySelector('ul')
    var ol = tupian.querySelector('.circle')
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i)
        ol.appendChild(li);
        li.addEventListener('click', function () {

            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'cur'
            var index = this.getAttribute('index')
            num = yuandian = index;
            console.log(index);
            console.log(tupianwidth);
            dingshiqi(ul, -index * tupianwidth);
        })
    }
    ol.children[0].className = 'cur'
    // 克隆第一张图片放最后
    var diyi = ul.children[0].cloneNode(true)
    ul.appendChild(diyi)

    // 点击左按钮
    var num = 0;
    var yuandian = 0;
    zuoanniu.addEventListener('click', function () {
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * tupianwidth + 'px';

        }
        num--;
        dingshiqi(ul, -num * tupianwidth)
        yuandian--
        if (yuandian < 0) {
            yuandian = ol.children.length - 1;
        }
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
            ol.children[yuandian].className = 'cur'
        }
    })

    // 点击右按钮
    function handle() {
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0
        }
        num++;
        dingshiqi(ul, -num * tupianwidth)
        yuandian++
        if (yuandian == ul.children.length - 1) {
            yuandian = 0;
        }
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
            ol.children[yuandian].className = 'cur'
        }
    }
    youanniu.addEventListener('click', handle)
    // 自动播放
    var timess = setInterval(function () {
        // youanniu.click();
        handle()
    }, 1500)



    // 下拉菜单
    var nav = document.querySelector('.nav')
    var lis = nav.children;
    for (var i = 0; i < lis.length; i++) {
        if (![0, 2, 6].includes(i)) { continue }
        lis[i].onmouseenter = function () {
            this.children[1].style.display = 'block';
        }
        lis[i].onmouseleave = function () {
            this.children[1].style.display = 'none';
        }
    }


    //固定侧边栏
    var fixed = document.querySelector('.fixed')
    document.addEventListener('scroll', function () {
        // console.log(window.pageYOffset);
        if (window.pageYOffset >= 500) {
            fixed.style.position = 'fixed';
            fixed.style.top = '55px';
        } else {
            fixed.style.position = 'absolute';
            fixed.style.top = "500px";
        }
    })
    var dingbu = document.querySelector('.dingbu')
    document.addEventListener('scroll', function () {
        if (window.pageYOffset < 1200) {
            dingbu.style.display = 'none'
        } else {
            dingbu.style.display = 'block'
        }
    })
    var fixedChildren = fixed.children
    document.addEventListener('scroll', function () {
        if (window.pageYOffset < 700 && window.pageYOffset >= 0) {
            fixed.children[0].className = 'yangshi'
            fixed.children[1].className = ''
        } else {
            fixed.children[0].className = '';
            fixed.children[1].className = 'yangshi'
        }
    })

    // 固定顶部栏
    var tou = document.querySelector('.tou');
    var w = document.querySelector('.w');
    document.addEventListener('scroll', function () {
        if (window.pageYOffset >= 65) {
            tou.style.display = 'block'
        } else {
            tou.style.display = 'none'
        }
    })
    var cainilove = document.querySelector('.cainilove')
    cainilove.addEventListener('click', function () {
        // document.body.scrollTop = 1000;
        document.documentElement.scrollTop = 1000;
    })
    var pingzhi = document.querySelector('.pingzhi')
    pingzhi.addEventListener('click', function () {
        // document.body.scrollTop = 600;
        document.documentElement.scrollTop = 600;
    })
})
