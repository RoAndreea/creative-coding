const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [600, 600],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    function dynamicDraw() {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          const width = 60;
          const height = 60;
          let gap = 20;
          let x = 100 + (width + gap) * i;
          let y = 100 + (width + gap) * j;

          context.beginPath();
          context.rect(x, y, width, height);
          context.stroke();

          setInterval(function () {
            const randomColor = Math.floor(Math.random() * 16777215).toString(
              16
            );
            if (Math.random() > 0.5) {
              context.beginPath();
              context.rect(x + 8, y + 8, width - 16, height - 16);
              context.stroke();
              context.strokeStyle = `#${randomColor}`;
              context.lineWidth = "3";
            } else {
              context.strokeStyle = `white`;
            }
          }, 200);
        }
      }
    }

    dynamicDraw();
  };
};

canvasSketch(sketch, settings);
