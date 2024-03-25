<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <!-- 主要内容 -->
      <div class="content">
        <h1>Welcome to My Vue App</h1>
        <p>This is a simple homepage with a carousel and features section.</p>
      </div>
    </main>
    <footer class="footer">
      <p>© 2024 My Vue App. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* 重置一些基本元素的样式 */
body, h1, p {
  margin: 0;
  padding: 0;
}

/* 设置整体字体 */
body {
  font-family: 'Arial', sans-serif;
  color: #333;
}

/* 导航栏样式 */
.navbar {
  background-color: #333;
  overflow: hidden;
}

.navbar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

.navbar ul li {
  padding: 14px 16px;
}

.navbar ul li a {
  color: white;
  text-decoration: none;
}

.navbar ul li a:hover {
  background-color: #ddd;
  color: black;
}

/* 主要内容样式 */
.content {
  padding: 20px;
  text-align: center; /* 内容居中 */
}

/* 脚注样式 */
.footer {
  background-color: #333;
  color: white;
  padding: 10px 0;
  text-align: center; /* 版权声明居中 */
  width: 100%;
}

.footer p {
  margin: 0;
  padding: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .navbar ul {
    flex-direction: column;
  }

  .navbar ul li {
    padding: 10px 0;
  }
}
</style>