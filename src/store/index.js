import Vue from "vue";
import Vuex from "vuex";
import companies from "../model/companies";

Vue.use(Vuex);

export const defaultState = () => ({
	stocks: [{ company: companies[0], qty: 100 }],
	funds: 100,
	market: companies.map((company) => {
		return { company, price: (Math.random() * 5).toFixed(2) };
	}),
});

export default new Vuex.Store({
	state: defaultState(),
	mutations: {
		buy: (state, payload) => {
			const { qty, company } = payload;
			// first check if the person has enough funds
			const price = state.market.find((c) => c.company == company).price;
			const totalPrice = price * qty;
			if (totalPrice > state.funds) throw new Error("You don't have enough funds");

			// deduct price from the user
			state.funds -= totalPrice;

			// see if user already has shares in that company
			const stocks = [...state.stocks];
			const index = stocks.findIndex((stock) => stock.company == company);

			if (index == -1) {
				// does not have any share in that company. So add it to the stocks
				stocks.push({ company, qty });
			} else {
				// has share. so just add the new qty to the original qty of shares
				state.stocks[index].qty += qty;
			}
			state.stocks = stocks;
		},
		sell: (state, payload) => {
			console.log(payload);
			const { qty, company } = payload;
			const stocks = [...state.stocks];
			// first check if the user has that many qty of shares from that company
			const stock = stocks.find((c) => c.company == company);
			if (!(stock && stock.qty >= qty))
				throw new Error("You don't have enough quantity of shares from that company");
			const price = state.market.find((c) => c.company == company).price;

			// give money to the user
			state.funds += price * qty;

			// deduct form his quantity of shares
			stock.qty -= qty;
			state.stocks = stocks;
		},
		endDay: (state) => {
			state.market = state.market.map((c) => ({
				...c,
				price: (Math.random() * 5).toFixed(2),
			}));
		},
	},
	actions: {},
	modules: {},
});
