<template>
  <div id="app">
    <header class="navbar">
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="docs/index.html">docsify</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main class="content">
      <div class="container">
        <h1>Welcome to My Vue App</h1>
        <p>This is a simple homepage with a carousel and features section.</p>
        <!-- Carousel and features section will go here -->
      </div>
    </main>
    <footer class="footer">
      <p>© 2024 My Vue App. All rights reserved.</p>
    </footer>
  </div>

  <Test_h1 />
</template>

<script setup>
import Test_h1 from "./test.jsx";
</script>