//polygonVertex存储模式：
//polygonVertex[0,1]=this.beginPoint;
//polygonVertex[2,3]=polygonVertex[triangle]右边坐标点
//polygonVertex[4,5]=三角形右边坐标
//polygonVertex[6,7]=三角形顶点坐标   this.stopPoint
//polygonVertex[8,9]=三角形左边坐标
//polygonVertex[10,11]=polygonVertex[triangle]左边坐标点



window.onload = function () {
    var polygonVertex = [],
        CONST = {
            edgeLen: 50,
            angle: 25
        };
    //封装的作图对象

    function getCanvas(id) {
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext("2d");
        this.angle = "";
        this.beginPoint = {};
        this.stopPoint = {};

        this.canvas.addEventListener("mousedown", (e) => {
            this.beginPoint.x = e.pageX;
            this.beginPoint.y = e.pageY;
        })
        this.canvas.addEventListener("mouseup", (e) => {
            // this.stopPoint.x = e.pageX;
            // this.stopPoint.y = e.pageY;
            // this.arrowCoord(this.beginPoint, this.stopPoint);
            // this.sideCoord();
            this.drawArrow();
        })
        this.canvas.addEventListener("mousemove", (e) => {
            this.stopPoint.x = e.pageX;
            this.stopPoint.y = e.pageY;
            this.arrowCoord(this.beginPoint, this.stopPoint);
            this.sideCoord();
            // this.drawArrow();
        })
        this.dynArrowSize = () => {
            var x = this.stopPoint.x - this.beginPoint.x,
                y = this.stopPoint.y - this.beginPoint.y,
                length = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            if (length < 250) {
                CONST.edgeLen = CONST.edgeLen / 2;
                CONST.angle = CONST.angle / 2;
            }
            else if (length < 500) {
                CONST.edgeLen = CONST.edgeLen * length / 500;
                CONST.angle = CONST.angle * length / 500;
            }
            // console.log(length);
        }

        //getRadian 返回以起点与X轴之间的夹角角度值
        this.getRadian = (beginPoint, stopPoint) => {
            this.angle = Math.atan2(stopPoint.y - beginPoint.y, stopPoint.x - beginPoint.x) / Math.PI * 180;
            console.log(this.angle);
            paraDef(50, 25);
            this.dynArrowSize();
        }

        //获得箭头底边两个点
        this.arrowCoord = (beginPoint, stopPoint) => {
            polygonVertex[0] = beginPoint.x;
            polygonVertex[1] = beginPoint.y;
            polygonVertex[6] = stopPoint.x;
            polygonVertex[7] = stopPoint.y;
            this.getRadian(beginPoint, stopPoint);
            polygonVertex[8] = stopPoint.x - CONST.edgeLen * Math.cos(Math.PI / 180 * (this.angle + CONST.angle));
            polygonVertex[9] = stopPoint.y - CONST.edgeLen * Math.sin(Math.PI / 180 * (this.angle + CONST.angle));
            polygonVertex[4] = stopPoint.x - CONST.edgeLen * Math.cos(Math.PI / 180 * (this.angle - CONST.angle));
            polygonVertex[5] = stopPoint.y - CONST.edgeLen * Math.sin(Math.PI / 180 * (this.angle - CONST.angle));
        }

        //获取另两个底边侧面点
        this.sideCoord = () => {
            var midpoint = {};
            midpoint.x = (polygonVertex[4] + polygonVertex[8]) / 2;
            midpoint.y = (polygonVertex[5] + polygonVertex[9]) / 2;
            polygonVertex[2] = (polygonVertex[4] + midpoint.x) / 2;
            polygonVertex[3] = (polygonVertex[5] + midpoint.y) / 2;
            polygonVertex[10] = (polygonVertex[8] + midpoint.x) / 2;
            polygonVertex[11] = (polygonVertex[9] + midpoint.y) / 2;
        }

        //画箭头
        this.drawArrow = () => {
            let ctx = this.ctx;
            ctx.fillStyle = "pink";
            ctx.beginPath();
            ctx.moveTo(polygonVertex[0], polygonVertex[1]);
            ctx.lineTo(polygonVertex[2], polygonVertex[3]);
            ctx.lineTo(polygonVertex[4], polygonVertex[5]);
            ctx.lineTo(polygonVertex[6], polygonVertex[7]);
            ctx.lineTo(polygonVertex[8], polygonVertex[9]);
            ctx.lineTo(polygonVertex[10], polygonVertex[11]);
            ctx.closePath();
            ctx.fill();
        }
    }


    //记录起点this.beginPoint
    // document.getElementById("arrow").addEventListener("mousedown", function (e) {
    //     this.beginPoint.x = e.pageX;
    //     this.beginPoint.y = e.pageY;
    // })

    // //记录终点this.stopPoint，绘图
    // document.getElementById("arrow").addEventListener("mouseup", function (e) {
    //     this.stopPoint.x = e.pageX;
    //     this.stopPoint.y = e.pageY;
    //     // alert(this.stopPoint.x+"+"+this.stopPoint.y);
    //     this.arrowCoord(this.beginPoint, this.stopPoint);
    //     this.sideCoord();
    //     this.drawArrow();
    // });

    //自定义参数
    function paraDef(edgeLen, angle) {
        CONST.edgeLen = edgeLen;
        CONST.angle = angle;
    }

    // $(".para-def").click(function() {
    //     var edgeLen,
    //         angle;
    //     edgeLen = parseInt($(".edge-len").val());
    //     angle = parseInt($(".angle").val());
    //     paraDef(edgeLen, angle);
    // });

    new getCanvas("arrow");
}