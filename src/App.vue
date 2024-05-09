<template>
	<h2>APP</h2>
	<div class="link">
		<RouterLink to="/shallow" active-class="active">shallowRef与shallowReactive</RouterLink><br>
		<RouterLink to="/readonly" active-class="active">readonly与shallowReadonly</RouterLink><br>
		<RouterLink to="/raw" active-class="active">toRaw与markRaw</RouterLink><br>
		<RouterLink to="/customRef" active-class="active">自定义Ref</RouterLink><br>
	</div>
	<RouterView></RouterView>
</template>

<script setup lang="ts" name="App">

</script>

<style scoped>
.active {
  z-index: 2;
  color: #fff;
  cursor: default;
  background-color: #337ab7;
  border-color: #337ab7;
	font-size: 18px;
}

.link {
	margin: 15px 0;
}
</style>