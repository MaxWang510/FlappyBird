(function (w) {
    /**
     *
     * @param ctx 绘制环境
     * @param img 背景图像
     * @param speed 背景速度
     * @constructor 背景构造函数
     */
    function Sky(ctx, img, speed,) {
        this.ctx = ctx;
        this.img = img;
        this.speed = speed || 2;
        this.width = this.img.width;
        this.height = this.img.height;
        //创建一个sky length+1
        Sky.len++;
        //根据背景的数量，动态计算起始的x轴坐标
        this.x = this.width * (Sky.len - 1);
        this.y = 0;
    }

//sky实例默认的数量
    Sky.len = 0;
//给原型扩充方法
    Sky.prototype = {
        constructor: Sky,
        //绘制背景
        draw: function () {
            this.ctx.drawImage(this.img, this.x, this.y)
        },

        update: function () {
            this.x -= this.speed;
            if (this.x <= -this.width) {
                this.x += this.width * Sky.len;
            }
        }
    }

    w.getSky = function (ctx,img,speed) {
        return new Sky(ctx,img,speed);
    }
}(window))