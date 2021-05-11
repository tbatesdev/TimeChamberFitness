let carts = document.querySelectorAll('.add-cart');

let products = [ 
    {
        name: "Treadmill",
        tag: "treadmill",
        price: 1799.99,
        inCart: 0
    },
    {
        name: "Dumbbell Set",
        tag: "dumbebell-set",
        price: 299.99,
        inCart: 0
    },
    {
        name: "Medicine Ball",
        tag: "medicine-ball",
        price: 59.99,
        inCart: 0
    },
    {
        name: "HIIT Kit",
        tag: "hiit-kit",
        price: 49.99,
        inCart: 0
    },
    {
        name: "Steppers",
        tag: "steppers",
        price: 24.99,
        inCart: 0
    },
    {
        name: "Workout Bench",
        tag: "workout-bench",
        price: 79.99,
        inCart: 0
    },
    {
        name: "Cycling Bike",
        tag: "cycling-bike",
        price: 449.99,
        inCart: 0
    },
    {
        name: "Exercise Ball",
        tag: "exercise-ball",
        price: 29.99,
        inCart: 0
    },
    {
        name: "Jump Rope",
        tag: "jump-rope",
        price: 14.99,
        inCart: 0
    },
    {
        name: "Weight Bar",
        tag: "weight-bar",
        price: 249.99,
        inCart: 0
    }
    
];
 
for(let i=0; i< carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}
