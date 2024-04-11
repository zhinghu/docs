<script>
  import Panel from "../components/panel.svelte";

  let gitURL = "https://github.com/";
</script>

<Panel />
<main>
  <h1>欢迎来到3个人做的杂乱的文档和示例</h1>
  <h4> | by Github | <br />
    <span>
      <a target="_blank" rel="noopener noreferrer" href={gitURL + "myChinesePYL"}>myChinesePYL(主)</a><br />
      <a target="_blank" rel="noopener noreferrer" href={gitURL + "shulng"}>shulng(主)</a><br />
      <a target="_blank" rel="noopener noreferrer" href={gitURL + "TangGaoMC"}>TangGaoMC(副)</a>
    </span>
  </h4>
</main>

<style lang="scss">
  main{
    display: flex;
    min-height: calc(100vh - 90px);

    flex-direction: column;
    align-items: center;
    padding: 40px 20px 0px 20px;

    font-family: Helvetica, monospace, Arial;
  }
  a{
    text-decoration: none;
    color: #0ff;

    &:hover{
      text-decoration: underline;
    }
  }
</style>