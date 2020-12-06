<template>
	<div>
		<p v-for="m in market" :key="m.company">
			Today's price for {{ m.company }} is {{ m.price }}
			<input placeholder="Quantity to buy" type="text" v-model="qtys[m.company]" />
			<button @click="buy({ company: m.company, qty: qtys[m.company] })">BUY</button>
		</p>
	</div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
	computed: mapState(["market"]),
	methods: mapMutations(["buy"]),
	data() {
		return {
			qtys: {},
		};
	},
};
</script>

<style scoped></style>
