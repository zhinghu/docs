<script lang="ts">
  /**
   * 用来创建一个应用
   * @param svelte_url {string} 字面意思, URL
   * @param elem {HTMLElement} 基于哪个元素来打开
   */
  async function write_paper(svelte_url: string) {
    const App = await import(svelte_url);
    document.body.innerHTML = "";

    new App.default({
      target: document.body
    });
  }
</script>

<nav id="navigator">
  <ul>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <li
      on:mouseup={() => {
        write_paper("/src/App.svelte");
      }}
    >
      home
    </li>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <li
      on:mouseup={(e) => {
        write_paper("/src/docs/index.svelte");
      }}
    >
      docs
    </li>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <li>examples</li>
  </ul>
</nav>

<style>
  #navigator {
    background-color: #333;
    width: 100vw;
    height: 50px;
    z-index: calc(1 / 0);
  }

  ul {
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: space-evenly;
    align-items: center;
  }

  ul > li {
    display: flex;
    list-style: none;
    width: 100%;
    height: 50px;
    color: white;
    background-color: #333;
    justify-content: center;
    align-items: center;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;

    cursor: pointer;

    transition: 0.2s all ease-out;
  }

  ul > li:hover {
    background-color: #222;
  }
</style>
