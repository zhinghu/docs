<script>
  import Panel from "../../components/panel.svelte";
  import { onMount } from "svelte";

  /**
   * @param elem {HTMLElement} a元素
   * @param name {string} 例子的名字
   * @param target {HTMLElement} 挂载的元素
   * @return {void}
  */
  async function writeExampleToA(elem, name, target) {
    let file = await import(`./example-${name}.svelte`);
    elem.addEventListener("click", ()=>{
      new file.default({
        target
      });
    });
  };

  onMount(() => {
    document.querySelectorAll("#lists-canvas > a").forEach(e => {
      writeExampleToA(e, e.name, document.querySelector("#example"));
    });
  });
</script>

<Panel />
<main>
  <div id="lists">
    <ul id="lists-canvas">
      <h2>Canvas</h2>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="javascript:void(0)" name="pixel-write">像素处理</a>
    </ul>
  </div>
  <div id="example"></div>
</main>

<style lang="scss">
  main{
    display: flex;
    min-height: calc(100vh - 50px);
    justify-content: center;
  }

  a{
    color: white;
    text-decoration: none;
    margin-left: 30px;

    &:hover{
      text-decoration: underline;
    }
  }

  #lists {
    flex-basis: 20%;
    height: 100vh;
    background-color: #434343;
    font-family: Helvetica, monospace, Arial;
    padding-left: 10px;
    padding-top: 10px;
  }
  #example {
    flex-basis: 80%;
    height: 100vh;
    background-color: #323232;
  }
</style>