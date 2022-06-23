function State() {
  return {
    showCart: false,
    meatyCramCount: 0,
    chickenCramCount: 0,
    trippleDeckerCount: 0,
    meatyCramPrice: 78.99,
    chickenCramPrice: 86.49,
    trippleDeckerPrice: 109.99,
    paymentAmount: 0,
    paymentMessage: "",
    pay: false,
    totalItems() {
      return (
        this.meatyCramCount + this.chickenCramCount + this.trippleDeckerCount
      );
    },
    totalPrice() {
      return (
        this.meatyCramCount * this.meatyCramPrice +
        this.chickenCramCount * this.chickenCramPrice +
        this.trippleDeckerCount * this.trippleDeckerPrice
      ).toFixed(2);
    },
    makePayment() {
      let amount = parseInt(this.paymentAmount);
      let price = parseInt(this.totalPrice());

      if (amount == 0) {
        this.paymentMessage = "Enter Payment Amount...";
      } else if (amount >= price) {
        this.paymentMessage = "Payment Successful ✅...Enjoy Your food";
        setTimeout(() => {
          this.pay = false;
          this.paymentMessage = "";
          this.paymentAmount = 0;
          this.meatyCramCount = 0;
          this.chickenCramCount = 0;
          this.trippleDeckerCount = 0;
        }, "4000");
      } else {
        this.paymentMessage = "Insufficient Funds..❌";
      }
    },
  };
}

document.addEventListener("alpine:init", () => {
  Alpine.data("state", State);
});
