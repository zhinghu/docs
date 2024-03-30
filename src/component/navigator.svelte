<script lang="ts">
  import * as jq from "jquery";

  async function create_paper(svelte_url: string, elem: HTMLElement) {
    const svelteApp = await import(svelte_url);

    if (elem.children.length > 0) {
      throw Error("elem length > 0");
    }

    const div = document.createElement("div");

    jq.default(div).css({
      display: "none",
      width: "100%",
      height: "100%",
      "background-color": "#333",
    });

    new svelteApp.default({
      target: div,
    });

    elem.appendChild(div);
  }
</script>

<nav id="navigator">
  <ul>
    <li
      on:mouseup={(e) => {
        create_paper("../App.svelte", e.currentTarget);
      }}
    >
      home
    </li>
    <li>docs</li>
    <li>examples</li>
  </ul>
</nav>

<style>
  #navigator {
    background-color: #333;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 50px;
  }

  ul {
    display: flex;
    width: 100%;
    height: 100%;
    color: white;
    justify-content: space-evenly;
    align-items: center;
  }

  ul > li {
    display: flex;
    list-style: none;
    width: 100%;
    height: 100%;
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
