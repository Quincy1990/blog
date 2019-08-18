var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var project;
(function (project) {
    "use strict";
    var noise;

    var WaveShape = (function (_super) {
        __extends(WaveShape, _super);

        function WaveShape(maxLines, maxVertex, debugMode) {
            if (maxLines === void 0) { maxLines = 5; }
            if (maxVertex === void 0) { maxVertex = 4; }
            if (debugMode === void 0) { debugMode = false; }
            _super.call(this);

            this._time = 0;
            noise = new Processing().noise;
            this._maxLines = maxLines;
            this._maxVertex = maxVertex;
            this._debugMode = debugMode;
            this.on("tick", this.handleTick, this);
        }

        WaveShape.prototype.handleTick = function (event) {
            this._time += 0.001;
            this.graphics.clear();
            for (var i = 0; i < this._maxLines; i++) {
                var lineWidth = (0.05 * i) + 0.10;
                if (this._debugMode == true) {
                    lineWidth = 1.0;
                }
                this.drawWave(this._maxVertex, lineWidth, i * 0.10);
            }
        };

        WaveShape.prototype.drawWave = function (vertexNum, strokeSize, timeOffset) {
            var stageW = window.innerWidth;
            var stageH = window.innerHeight;
            var hu = 220 + (timeOffset * 50)
            this.graphics
                .setStrokeStyle(strokeSize)
                .beginStroke("hsla("+hu+", 80%, 70%,0.2)");
            var vertexArr = [];
            for (var i = 0; i <= vertexNum; i++) {
                var noiseNum = noise(i * 0.2, this._time + (timeOffset*2)) - 0.5;
                if(i==0&&i == vertexNum){
                    var targetY = (noiseNum );
                }else{
                    var targetY = (noiseNum * stageH *3);
                }
                var targetY = (noiseNum * stageH *3);
                vertexArr[i] = targetY;
            }
            var BASE_Y = stageH /1.4;
            var points = [];
            points.push({ x: -200, y: BASE_Y });
            for (var i = 0; i <= vertexNum; i++) {
                points.push({
                    x: (stageW * (i / vertexNum)) >> 0,
                    y: vertexArr[i] + BASE_Y
                });
            }
            points.push({ x: stageW + 200, y: BASE_Y });
            for (var i = 0; i < points.length; i++) {
                if (i >= 2) {
                    var p0x = points[i - 0].x;
                    var p0y = points[i - 0].y;
                    var p1x = points[i - 1].x;
                    var p1y = points[i - 1].y;
                    var p2x = points[i - 2].x;
                    var p2y = points[i - 2].y;

                    var curveStartX = (p2x + p1x) / 2;
                    var curveStartY = (p2y + p1y) / 2;
                    var curveEndX = (p0x + p1x) / 2;
                    var curveEndY = (p0y + p1y) / 2;

                    this.graphics
                        .moveTo(curveStartX, curveStartY)
                        .curveTo(p1x, p1y, curveEndX, curveEndY);
                }
            }
            this.graphics.endStroke();

            if (this._debugMode == true) {
                for (var i = 0; i < points.length; i++) {
                    var p0x = points[i - 0].x;
                    var p0y = points[i - 0].y;
                    if (i > 0) {
                        var p1x = points[i - 1].x;
                        var p1y = points[i - 1].y;
                        this.graphics
                            .setStrokeStyle(0.5)
                            .beginStroke("red")
                            .moveTo(p1x, p1y)
                            .lineTo(p0x, p0y)
                            .endStroke();
                    }
                    this.graphics
                        .beginFill("red")
                        .drawCircle(p0x, p0y, 3)
                        .endFill();
                }
            }
        };
        return WaveShape;
    }(createjs.Shape));
    project.WaveShape = WaveShape;
})(project || (project = {}));

var project;
(function (project) {
    window.addEventListener("load", function () {
        new Main();
    });

    var scY = 0
    $(function(){
       $(window).scroll(function(event) {
       
          scY =$(window).scrollTop()
         
          if(scY>$(window).height()){
              
              var a = ((scY-$(window).height())*0.0008)
              // console.log(a)
            if(a<0.3){
                $("canvas:not(#map canvas)").css({"opacity":1-a})
            }else{
                 $("canvas:not(#map canvas)").css({"opacity":0.3})
                
            }
          }else{
           $("canvas:not(#map canvas)").css({"opacity":1})
          }
          
       });
    })
    var Main = (function () {
        function Main() {
            var _this = this;
            this.stageCalcInside = new createjs.Stage("canvasWave");
            this.stageCalcInside.autoClear = false;
            var waveShape = new project.WaveShape();
            this.stageCalcInside.addChild(waveShape);
            createjs.Ticker.setFPS(60);
            createjs.Ticker.on("tick", this.handleTick, this);
            this.handleResize();
            window.addEventListener("resize", function () {
                _this.handleResize();
            });
        }

		var ttt = 0;
        Main.prototype.handleTick = function () {
            var context = this.stageCalcInside.canvas.getContext("2d");
            
            if(ttt > 4  ){

            // console.log(ttt)
            context.fillStyle = "rgba(260, 260, 260, 0.1)"
            context.fillRect(0, 0, this.stageCalcInside.canvas.width, this.stageCalcInside.canvas.height);
            ttt = 0
            }else{
               ttt++
            }
            this.stageCalcInside.update();
        };

        Main.prototype.handleResize = function () {
            this.stageCalcInside.canvas.width = innerWidth;
            this.stageCalcInside.canvas.height = innerHeight;
        };
        return Main;
    }());
})(project || (project = {}));

var classLists = '';
for (var i = 0; i < 20; i++) classLists += classTpl;
$('.class-lists .lists-content').html(classLists);