<script lang="ts">
  import TopNavigator from "../component/navigator.svelte";
  let count = 0;
</script>

<main>
  <TopNavigator />
  <ul>
    <li>docs</li>
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
  }

  @media (prefers-color-scheme: dark) {
    ul {
      background-color: black;
      color: white;
    }
  }
</style>
