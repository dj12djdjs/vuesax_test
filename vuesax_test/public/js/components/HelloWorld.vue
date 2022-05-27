<template>
	<div>
		<vs-button @click="handleClick">Click Me!</vs-button>
		<p>Counter at {{ count }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			count: 0
		};
	},

	methods: {
		handleClick() {
			this.count++;
		}
	}
};
</script>
