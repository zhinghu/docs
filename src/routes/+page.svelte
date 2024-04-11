<script>
  import Panel from "../components/panel.svelte";
</script>

<Panel />
<main>
  <h1>欢迎来到3个人做的杂乱的文档+示例(语文不好, 见谅)</h1>
  <h4>by Github --> <span style="color: #0ff">myChinese(主)</span></h4>
</main>

<style>
  main{
    display: flex;
    min-height: calc(100vh - 30px);

    flex-direction: column;
    align-items: center;
    padding: 40px 20px 0px 20px;

    font-family: Helvetica, monospace, Arial;
  }
</style>