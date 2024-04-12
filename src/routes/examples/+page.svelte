<script lang="ts">
  import Panel from "../../components/panel.svelte";
  import { onMount } from "svelte";
  let currentSvelte: null | TypedSvelteComponent = null;

  /**
   * @param elem {} a元素
   * @param id {} 例子的名字
   * @param target {} 挂载的元素
   */
  async function writeExampleToA(elem: Element | HTMLElement, id: string, target: Element | HTMLElement) {
    if (target === null) return;

    let file = await import("./" + id + ".svelte");
    elem.addEventListener("click", () => {
      if (currentSvelte !== null) currentSvelte.$destroy();

      currentSvelte = new file.default({
        target
      });
    });
  }

  onMount(() => {
    document.querySelectorAll("#lists-canvas > a").forEach((e) => {
      writeExampleToA(e, e.id, document.querySelector("#example")!);
    });
  });
</script>

<Panel />
<main>
  <div id="lists">
    <ul id="lists-canvas">
      <h2>Canvas</h2>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="javascript:void(0)" id="example-pixel-write">着色器测试</a>
    </ul>
  </div>
  <div id="example"></div>
</main>

<style lang="scss">
  :global(*){
    overflow: hidden;
  }
  main{
    display: flex;
    justify-content: flex-start;
  }

  a {
    color: white;
    text-decoration: none;
    margin-left: 30px;

    &:hover {
      text-decoration: underline;
    }
  }

  #lists {
    flex-basis: 20%;
    min-width: 100px;
    max-width: calc(20vw - 20px);
    height: calc(100vh - 50px);
    background-color: #434343;
    font-family: Helvetica, monospace, Arial;
    padding-left: 10px;
    padding-right: 10px;

    overflow-y: auto;
    z-index: calc(1/0);
  }

  #example {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 80%;
    min-width: calc(100vw - 20vw);
    max-width: calc(100vw - 80px);
    height: calc(100vh - 50px);
    background-color: #323232;
  }
</style>
