<script lang="ts">
  import TopNavigator from "./component/navigator.svelte";
</script>

<main>
  <TopNavigator />
  <div id="main"></div>
  <nav id="bottom-navigator">In 2024/3/30. By Github myChinesePYL</nav>
</main>

<style>
  #bottom-navigator {
    background-color: #333;
    position: fixed;
    left: 0px;
    top: calc(100vh - 30px);
    width: 100vw;
    height: 30px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
  }

  #main {
    display: flex;
    min-height: max-content;
    align-items: center;
    justify-content: flex-start;

    background-color: #aaa;
  }
</style>
