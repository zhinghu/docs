<script lang="ts">
  import { onMount } from "svelte";



  // 着色器
  function shaderDraw(_ctx: CanvasRenderingContext2D) {
    const ctx = document.createElement("canvas").getContext("2d");
    if (ctx === null) return ctx!.canvas;

    ctx.canvas.width = _ctx.canvas.width;
    ctx.canvas.height = _ctx.canvas.height;
    const _data = _ctx.getImageData(0, 0, _ctx.canvas.width, _ctx.canvas.height);
    const data = [];
    for (let i = 0;i < _data.data.length / 4; i++) {
      data.push(_data.data.slice(i * 4, (i + 1) * 4));
    }
    let i = 0;
    for (let y = 0; y < _ctx.canvas.width; y++) {
      for (let x = 0; x < _ctx.canvas.height; x++) {
        ctx.fillStyle = `rgba(${-100 + Math.cos((Math.PI * 1.85) + x / (_ctx.canvas.width + 100) * Math.PI) * 255}, ${-100 + Math.cos((Math.PI * 1.35) + y / (_ctx.canvas.height + 100) * Math.PI) * 225}, ${-100 + Math.sin((Math.PI * 2) + x / (_ctx.canvas.width + 100) * Math.PI) * 255}, ${data[i][3]})`;
        ctx.fillRect(x, y, 1, 1);

        i += 1;
      }
    }

    return ctx.canvas;
  }



  let currentFps = 0;
  onMount(() => {
    let img: HTMLImageElement = document.querySelector("img")!;
    let ctx: CanvasRenderingContext2D | null = document.createElement("canvas").getContext("2d");
    function showError() {
      if (ctx === null) {
        img.style.display = "none";
        document.querySelector<HTMLPreElement>("#error")!.style.display = "block";
        return true;
      }
    };
    if (ctx === null) {
      img.style.display = "none";
      document.querySelector<HTMLPreElement>("#error")!.style.display = "block";
      return true;
    };

    // render
    let timed = Date.now();
    let currentTime = Date.now();
    let fps = 0;
    let fpsed = 0;
    (function render () {
      // 对canvas进行修改
      ctx.canvas.width = 240;
      ctx.canvas.height = 240;

      ctx.fillStyle = "#000";
      ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);

      fps = (1000 / (Date.now() - timed));
      fpsed = (fpsed + fps) / 2;

      if (Date.now() - currentTime >= 1000) {
        currentFps = fpsed;
        fpsed = 0;
        currentTime = Date.now();
      }

      timed = Date.now();

      // 使用着色器, 渲染到主画布上
      img.src = shaderDraw(ctx).toDataURL();
    })();
  });
</script>

<main>
  <img alt="" /><br />
  <p>FPS: {currentFps}</p>
  <pre id="error" style="display: none">错误: 您的浏览器不支持Canvas 2D API(也可能是画布太大)</pre>
</main>

<style>
  main {
    display: block;
  }
  p {
    font-family: monospace, Helvetica, Arial;
  }
</style>