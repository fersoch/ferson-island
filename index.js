class FersonIsland {
    constructor(name, location, population) {
      this.name = name;
      this.location = location;
      this.population = population;
    }
  
    increasePopulation(increaseAmount) {
      this.population += increaseAmount;
      console.log(`${increaseAmount} people have joined the population of ${this.name}.`);
    }
  
    displayIslandInfo() {
      console.log(`
        Ferson Island Information:
        Name: ${this.name}
        Location: ${this.location}
        Population: ${this.population}
      `);
    }
  }
  
  // Example usage
  const fersonIsland = new FersonIsland('Ferson Isle', 'Pacific Ocean', 5000);
  
  fersonIsland.increasePopulation(200);
  fersonIsland.displayIslandInfo();
  