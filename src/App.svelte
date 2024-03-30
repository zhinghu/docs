<script lang="ts">
  import TopNavigator from "./component/navigator.svelte";
</script>

<main>
  <TopNavigator />
  <div id="main">
    <h1>这是用svelte写的文档主页</h1>
    <p>主要是Vue不适合我, 要不然我肯定用vue</p>
  </div>
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

    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;

    cursor: default;
  }

  #main {
    display: flex;
    min-height: max-content;
    align-items: center;
    padding-top: 10px;
    justify-content: flex-start;
    width: 100vw;
    position: fixed;
    left: 0px;
    top: 50px;
    height: calc(100vh - 80px);

    flex-direction: column;

    background-color: #fff;
    color: #000;
  }

  @media (prefers-color-scheme: dark) {
    #main {
      background-color: #000;
      color: #fff;
    }
  }
</style>
