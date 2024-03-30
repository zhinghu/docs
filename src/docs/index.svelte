<script lang="ts">
  import TopNavigator from "../component/navigator.svelte";
  let count = 0;
</script>

<main>
  <TopNavigator />
  <button
    on:click={() => {
      count++;
    }}>Click me add count</button
  >
  <p>count: {count}</p>
  <ul>
    <li>asdfsdf</li>
    <li>sdfkdfkjdf</li>
  </ul>
</main>
