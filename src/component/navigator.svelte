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
      width: "0px",
      height: "0px",
      "z-index": "calc(1 / 0)",
      "background-color": "#333",
    });

    new svelteApp.default({
      target: div,
    });

    elem.appendChild(div);

    const animateSpeed = 10000;
    jq.default([div, elem]).add("#navigator > ul").add("#navigator").animate(
      {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      animateSpeed,
      "easeOutExpo",
    );
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
