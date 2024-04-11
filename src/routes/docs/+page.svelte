<script>
  import Panel from "../../components/panel.svelte";
</script>

<Panel />
<div id="test">
  {#each (() => {
    let rt = [];
    rt.length = 25;
    rt.fill("");

    return rt;
  })() as i}
    Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Excepturi
    blanditiis nemo reprehenderit pariatur dolorem! Error ducimus expedita
    harum, quas, ullam non. Aliquam, blanditiis amet ex atque sequi, neque a
    cum.<br />
  {/each}
</div>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
  }
  :global(body) {
    background-color: rgb(50, 50, 50);
    color: #fff;
  }
</style>
