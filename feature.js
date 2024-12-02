console.log("feature1 Branch");

let a = "1";
let b = "2";
let c = "3";

let d = a + b + c;
console.log(d + "feature2");
alert(d + "feature3");

alert("conflict 2");

let array = ['Car', 'Fish'];
console.log(array(0));

function add(addition){
    let num = 1;
    let num2= 1;
    console.log(num2 + num);
};

let x = 5;
let y = 2;

let z = -5;

print(x + y - z);

// Function to dynamically replace product prices
function applyFixedPrice(prices) {
  prices.forEach((product) => {
    // Find all elements with the corresponding data-id
    const priceDivs = document.querySelectorAll(`[data-id="${product.id}"]`);
    if (priceDivs.length > 0) {
      priceDivs.forEach((priceDiv) => {
        // Only replace price if the element is empty
        if (!priceDiv.textContent.trim()) {
          priceDiv.textContent = `£${product.price.toFixed(2)}`;
        }
      });
    }
  });
}

// Array of product prices with IDs
const fixedPrice = [
  { id: "id-1", price: 10.0 },
  { id: "id-2", price: 8.0 },
  { id: "id-3", price: 19.0 },
  { id: "id-4", price: 8.0 },
  { id: "id-5", price: 13.0 },
  { id: "id-6", price: 18.0 },
  { id: "id-7", price: 16.0 },
  { id: "id-8", price: 16.0 },
  { id: "id-9", price: 20.0 },
  { id: "id-10", price: 11.0 },
  { id: "id-11", price: 10.0 },
  { id: "id-12", price: 10.5 },
  { id: "id-13", price: 6.4 },
  { id: "id-14", price: 6.9 },
  { id: "id-15", price: 14.0 },
  { id: "id-16", price: 13.5 },
  { id: "id-17", price: 0.0 },
  { id: "id-18", price: 0.0 },
  { id: "id-19", price: 0.0 },
  { id: "id-20", price: 0.0 },
  { id: "id-21", price: 0.0 },
  { id: "id-22", price: 0.0 },
  { id: "id-23", price: 0.0 },
  { id: "id-24", price: 0.0 },
  { id: "id-25", price: 0.0 },
  { id: "id-26", price: 0.0 },
  { id: "id-27", price: 0.0 },
  { id: "id-28", price: 0.0 },
  { id: "id-29", price: 0.0 },
  { id: "id-30", price: 0.0 },
  { id: "id-31", price: 0.0 },
  { id: "id-32", price: 0.0 },
  { id: "id-33", price: 12.0 },
  { id: "id-34", price: 0.0 },
  { id: "id-35", price: 0.0 },
  { id: "id-36", price: 0.0 },
  { id: "id-37", price: 3.0 },
  { id: "id-38", price: 0.0 },
  { id: "id-39", price: 0.0 },
  { id: "id-40", price: 0.0 },
  { id: "id-41", price: 0.0 },
  { id: "id-42", price: 0.0 },
  { id: "id-43", price: 0.0 },
  { id: "id-44", price: 0.0 },
  { id: "id-45", price: 0.0 },
  { id: "id-46", price: 0.0 },
  { id: "id-47", price: 0.0 },
  { id: "id-48", price: 0.0 },
  { id: "id-49", price: 0.0 },
  { id: "id-50", price: 0.0 },
  { id: "id-51", price: 0.0 },
  { id: "id-52", price: 0.0 },
  { id: "id-53", price: 0.0 },
  { id: "id-54", price: 0.0 },
  { id: "id-55", price: 0.0 },
  { id: "id-56", price: 0.0 },
  { id: "id-57", price: 12.0 },
  { id: "id-58", price: 12.0 },
  { id: "id-59", price: 12.0 },
  { id: "id-60", price: 9.5 },
  { id: "id-61", price: 12.0 },
];
