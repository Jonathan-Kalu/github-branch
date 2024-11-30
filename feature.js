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