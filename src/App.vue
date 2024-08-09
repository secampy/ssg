<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/history">History</router-link></li>
        <li><router-link to="/culture">Culture</router-link></li>
        <li><router-link to="/tourism">Tourism</router-link></li>
        <li><router-link to="/economy">Economy</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
nav ul {
  list-style-type: none;
  padding: 0;
}
nav ul li {
  display: inline;
  margin-right: 15px;
}
</style>
