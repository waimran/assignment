//29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!


let favorite_fruits: string[] = ["mango", "apple", "orange"; "kiwi" ; "stawberry"];

if (favorite_fruits.includes("mango")) {
    console.log("I really like mangoes!");
}

if (favorite_fruits.includes("apple")) {
    console.log("I really like apples!");
}

if (favorite_fruits.includes("orange")) {
    console.log("I really like oranges!");
}

if (favorite_fruits.includes("kiwi")) {
    console.log("I really like kiwis!");
}

if (favorite_fruits.includes("strawberry")) {
    console.log("I really like strawberries!");
}