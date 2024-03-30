<script lang="ts">
  import * as jq from "jquery";

  jq.easing.easeOutExpo = (x: number): number => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  };

  async function create_paper(svelte_url: string, elem: HTMLElement) {
    if (jq.default(elem).attr("opened") === undefined) {
      jq.default(elem).attr("opened", "");
    } else {
      jq.default(elem).removeAttr("opened");
    }

    const svelteApp = await import(svelte_url);

    const div = document.createElement("div");

    jq.default(elem).css({
      color: "#0000",
    });
    jq.default(div).offset(jq.default(elem).offset()!);
    jq.default(div).css({
      display: "block",
      position: "fixed",
      width: 0,
      height: 0,
      "z-index": "calc(1 / 0)",
      "background-color": "#fff",
    });

    new svelteApp.default({
      target: div,
    });

    elem.appendChild(div);

    jq.default(div).animate(
      {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      1000,
      "easeOutExpo",
    );
  }
</script>

<nav id="navigator">
  <ul>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <li on:mouseup={() => {location.href="/"}}>home</li>
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

    z-index: calc(1px / 0px);
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
