const roadGraph = require('./graph');

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    }
    const parcels = this.parcels
      .map(p => {
        if (p.place !== this.place) return p;
        return { place: destination, address: p.address };
      })
      .filter(p => p.place !== p.address);

    return new VillageState(destination, parcels);
  }
}

module.exports = VillageState;
