const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}
// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];
// console.log("foods array", uncookedFood)

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill() {
	// Modify the food so that it is cooked
	for (let i = 0; i < foods.length; i++) {
		foods[i].cooked = true;
		cookedFood.push(foods[i]);
		console.log("got it!", foods[i]);
	}
};

grill()
