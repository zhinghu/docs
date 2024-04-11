<script>
  import { page } from "$app/stores";
</script>

<ul id="panel-panel">
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <li id="panel-home" on:mouseup|self={()=>{location.href="/"}} style={$page.url.pathname === "/" ? "color: #0ff; font-weight: bold" : "color: #fff"}>Home</li>
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <li id="panel-examples" on:mouseup|self={()=>{location.href="/examples"}} style={$page.url.pathname === "/examples" ? "color: #0ff; font-weight: bold" : "color: #fff"}>Examples</li>
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <li id="panel-docs" on:mouseup|self={()=>{location.href="/docs"}} style={$page.url.pathname === "/docs" ? "color: #0ff; font-weight: bold" : "color: #fff"}>Docs</li>
</ul>

<style lang="scss">
  #panel-panel {
    display: flex;
    position: sticky;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);

    --blur-r: 5px;
    backdrop-filter: blur(var(--blur-r));
    -webkit-backdrop-filter: blur(var(--blur-r));
    -moz-backdrop-filter: blur(var(--blur-r));

    width: 100vw;
    height: 50px;

    color: #fff;
    font-family: monospace, Helvetica, Arial;
  }

  #panel-panel > * {
    display: flex;
    list-style: none;
    background-color: rgba(0, 0, 0, 0);
    transition: 0.2s all ease-out;

    flex-basis: 100%;
    align-items: center;
    justify-content: center;

    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;

    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.25);
    }
    &:active {
      box-shadow: inset 0px 0px 20px rgba(0, 255, 255, 0.3);
    }
  }
</style>
