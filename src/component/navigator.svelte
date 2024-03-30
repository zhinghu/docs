<script lang="ts">
  import * as jq from "jquery";

  jq.easing.easeOutExpo = (x: number): number => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  };

  async function create_paper(svelte_url: string, elem: HTMLElement) {
    if (elem.children.length > 0) {
      return;
    }

    const svelteApp = await import(svelte_url);

    const div = document.createElement("div");

    jq.default(elem).css({
      "user-select": "unset",
      "-moz-user-select": "unset",
      "-webkit-user-select": "unset",
      cursor: "auto",
    });
    jq.default(div).offset(jq.default(elem).offset()!);
    jq.default(div).css({
      display: "block",
      position: "fixed",
      color: "black",
      width: jq.default(elem).width()!,
      height: jq.default(elem).height()!,
      "z-index": "calc(1 / 0)",
      "background-color": "#fff",
      "list-style": "unset",
      "justify-content": "flex-start",
      "align-items": "flex-start",
      opacity: 0,
    });
    jq.default(elem).add("#navigator > ul").add("#navigator").css({
      position: "absolute",
    });

    new svelteApp.default({
      target: div,
    });

    elem.appendChild(div);

    jq.default([div, elem]).add("#navigator > ul").add("#navigator").animate(
      {
        width: window.innerWidth,
        height: window.innerHeight,
        top: 0,
        left: 0,
        opacity: 1,
      },
      500,
      "easeOutExpo",
    );
  }
</script>

<nav id="navigator">
  <ul>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <li
      on:mouseup={() => {
        location.href = "/";
      }}
    >
      home
    </li>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <li
      on:mouseup={(e) => {
        create_paper("../docs/index.svelte", e.currentTarget);
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
    justify-content: space-evenly;
    align-items: center;
  }

  ul > li {
    display: flex;
    list-style: none;
    width: 100%;
    height: 100%;
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
