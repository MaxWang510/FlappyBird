var util = {

    extend: function (o1, o2) {
        for (var key in o2) {
            if (o2.hasOwnProperty(key)) {
                o1[key] = o2[key];
            }
        }
    },
    /**
     * 加载图像
     * @param imgUrl 按照key、val的形式存储所有要加载的图像地址
     * @param fn 当前所有的图像加载完毕后，就会被调用，同时把所有的图片资源传递过去
     */
    loadImage: function (imgUrl, fn) {
        /**
         * 思路：
         * 1.遍历imgUrl，动态创建img对象，然后指定其src为遍历的地址，以加载这些图片资源
         * 2.在加载图片的过程中，需要监听每一张img的onload事件，当所有的图片都触发onload事件时，调用回调，把加载完毕的资源传递过去
         */
            //存储图片资源
        var imgObj = {};

        var tempImg;

        //记录已经加载完毕的图片数量
        var loaded = 0;

        //统计要加载的图片数量
        var imgLength = 0;

        //遍历所有的url，动态创建img
        for (var key in imgUrl) {
            imgLength++;
            //根据遍历到的url，加载图像
            tempImg = new Image();

            //给所有的图像监听load事件
            tempImg.onload = function () {
                loaded++;
                //当图片加载的数量大于等于 要加载的数量，那么就可以执行回调
                if (loaded >= imgLength) {
                    fn(imgObj);
                }
            };

            tempImg.src = imgUrl[key];
            //把当前加载的图像存储起来
            imgObj [key] = tempImg;
        }
    },

    showDom: function (elm) {
        var elems = document.getElementsByClassName(elm);
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'block';
        }
    }
}