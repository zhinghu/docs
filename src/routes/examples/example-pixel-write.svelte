<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    let ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
    if (ctx === null) {
      canvas.style.display = "none";
      document.querySelector<HTMLPreElement>("#error")!.style.display = "block";
      return;
    }

    // render
    let timed = Date.now();
    (function render() {
      requestAnimationFrame(render);

      const randomNumber = Math.random() * 2;

      canvas.width = document.documentElement.offsetWidth * 0.80 + randomNumber;
      canvas.height = document.documentElement.offsetHeight - 50 + randomNumber;
      canvas.style.width = document.documentElement.offsetWidth * 0.80 + "px";
      canvas.style.height = document.documentElement.offsetHeight - 50 + "px";

      // main
      ctx.fillStyle = "#000";
      ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = "#aaa";
      ctx.fillText(`FPS: ${Date.now() - timed}`, 10, 10);
      timed = Date.now();
    })()
  });
</script>

<canvas></canvas>
<pre id="error" style="display: none">错误: 您的浏览器不支持Canvas 2D API</pre>