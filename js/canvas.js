
function getXY(e) {
    return {
        x: e.offsetX,
        y: e.offsetY
    }
}

function getCanvas(id) {
    let self = this;
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.isDown = false; //是否开始绘图
    this.beginPoints = {};
    this.points = []; //坐标数组
    this.canvas.onmousedown = function (e) {
        self.isDown = true;
        self.beginPoints = getXY(e);
        self.points.push(getXY(e))
    };
    this.canvas.onmousemove = function (e) {
        if (!self.isDown) return;
        self.points.push(getXY(e));

        if (self.points.length > 2) {
            let points = self.points.slice(-3);
            let c1 = {
                x: (points[0].x + points[1].x) / 2,
                y: (points[0].y + points[1].y) / 2
            };
            let c2 = points[1];
            let endPoints = {
                x: (points[1].x + points[2].x) / 2,
                y: (points[1].y + points[2].y) / 2
            }
            self.ctx.beginPath();
            self.ctx.moveTo(self.beginPoints.x, self.beginPoints.y);
            self.ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, endPoints.x, endPoints.y);
            self.ctx.stroke();
            self.ctx.closePath();
            self.beginPoints = endPoints
        }
        
    };
    this.canvas.onmouseup = function (e) {
        self.beginPoints = null;
        self.isDown = false;
        self.points = [];
    };
    this.canvas.onmouseleave = function (e) {
        self.beginPoints = null;
        self.isDown = false;
        self.points = [];
    };
}

new getCanvas("canvas")