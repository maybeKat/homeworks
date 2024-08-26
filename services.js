var services = {
   "стрижка": "60 грн",
   "гоління": "80 грн",
   "Миття голови": "100 грн",

   price() {
      let sum = 0;

      for (let i in this) {
         if (typeof this[i] !== 'function') {
            sum += Number.parseInt(this[i]); 
         }
      }
      return sum;
   },

   maxPrice() {
      let max = 0;
      
      for (let i in this) {
        let number = 0;
         if (typeof this[i] !== 'function') {
            number = Number.parseInt(this[i]);
           if (number > max) {
               max = number;
            }
         }   
      }
      return max;
   },

   minPrice() {
      let min = this.maxPrice();
      
      for (let i in this) {
        let number = 0;
         if (typeof this[i] !== 'function') {
            number = Number.parseInt(this[i]);
           if (number < min) {
               min = number;
               }
         }   
      }
      return min;    
   }
};

console.log(services.price());
console.log(services.maxPrice());
console.log(services.minPrice());


services['Розбити скло'] = '200 грн';
services['Чай'] = '30 грн';

console.log(services.price());
console.log(services.maxPrice());
console.log(services.minPrice());