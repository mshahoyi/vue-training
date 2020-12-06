<template>
	<div>
		<p>Remaining Funds {{ funds }} HeavenMoney</p>
		<div v-if="stocks.length">
			<p>You Own</p>
			<div v-for="stock in stocks" :key="stock.company">
				<p>
					{{ stock.qty }} shares in {{ stock.company }}

					<input
						placeholder="Quantity to sell"
						type="text"
						v-model="qtys[stock.company]"
					/>
					<button @click="sell({ company: stock.company, qty: qtys[stock.company] })">
						SELL
					</button>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
	computed: mapState(["funds", "stocks"]),
	methods: mapMutations(["sell"]),
	data() {
		return {
			qtys: {},
		};
	},
};
</script>

<style scoped></style>
