<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
	</div>
</template>

<script lang="ts">
import HelloWorld from '@/components/hello-world.vue';
import {Component, Vue} from 'vue-property-decorator';

/**
 * Home component.
 */
@Component({
	components: {
		HelloWorld
	}
})
export default class Home extends Vue {}
</script>
