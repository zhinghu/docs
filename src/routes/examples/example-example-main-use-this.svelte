<!-- 这是一个例子, 也是一个模版, 所以, 请不要修改!!! -->

<script lang="ts">
  import { onMount } from "svelte";


  // 主渲染
  function mainDraw(ctx: CanvasRenderingContext2D) {

  }



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
    let fpsed = 0;
    (function render () {
      requestAnimationFrame(render);

      // 对canvas进行修改
      img.width = document.documentElement.offsetWidth * 0.80;
      img.height = document.documentElement.offsetHeight - 50;
      ctx.canvas.width = img.width;
      ctx.canvas.height = img.height;
      img.style.width = document.documentElement.offsetWidth * 0.80 + "px";
      img.style.height = document.documentElement.offsetHeight - 50 + "px";

      // 调用主渲染
      mainDraw(ctx);

      ctx.fillStyle = "#000";
      ctx.fillRect(0,0,img.width,img.height);

      if (Date.now() - currentTime >= 1000) {
        fpsed = Date.now() - timed;
        currentTime = Date.now();
      }

      timed = Date.now();

      ctx.fillStyle = "#fff";
      ctx.font = "20px Arial";
      ctx.fillText(`FPS: ${fpsed}`, 10, 20);

      // 渲染到主画布上
      img.src = ctx.canvas.toDataURL();
    })();
  });
</script>

<img>
<pre id="error" style="display: none">错误: 您的浏览器不支持Canvas 2D API(也可能是画布太大)</pre>