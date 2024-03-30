<script lang="ts">
  import TopNavigator from "../component/navigator.svelte";

  async function write_paper(svelte_url: string) {
    const App = await import(svelte_url);
    document.body.innerHTML = "";

    new App.default({
      target: document.body,
    });
  }
</script>

<main>
  <TopNavigator />
  <ul>
    <li>
      <a
        href="javascript:void(0)"
        on:click={() => {
          write_paper("/src/examples/canvas.svelte");
        }}>three.js(SVGRenderer)</a
      >
    </li>
  </ul>
</main>

<style>
  ul {
    width: 100vw;
    height: calc(100vh - 50px);
    padding: 50px;
  }

  li {
    list-style: none;
    cursor: pointer;

    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
  }

  a {
    color: black;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
    color: blue;
  }

  @media (prefers-color-scheme: dark) {
    ul {
      background-color: black;
      color: white;
    }

    a {
      color: white;
    }

    a:hover {
      color: pink;
    }
  }
</style>
