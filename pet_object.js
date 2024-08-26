const pet = {
    species: "Cat",
    name: "Cheba",
    age: 6,
    getInfo() {
        let result = '';
        for (let i in this) {
            if (typeof this[i] !== 'function') {
                result += `${i}: ${pet[i]}\n`;
            }
        }
        return result;
    }
};

console.log(pet.getInfo());

pet.color = "Black";

console.log(pet.getInfo());