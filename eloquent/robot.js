// Modules
const VillageState = require('./modules/state');
const roadGraph = require('./modules/graph');
const { goalOrientedRobot, lazyRobot } = require('./modules/example-robots');

// RANDOM GENERATOR
function randomPick(array) {
  const choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

VillageState.random = function(parcelCount = 5) {
  const parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    const address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place === address);
    parcels.push({ place, address });
  }
  return new VillageState('Post Office', parcels);
};

function countSteps(state, robot, memory) {
  for (let steps = 0; ; steps++) {
    if (state.parcels.length === 0) return steps;
    const action = robot(state, memory);
    state = state.move(action.direction);
    // eslint-disable-next-line prefer-destructuring
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let total1 = 0;
  let total2 = 0;
  for (let i = 0; i < 100; i++) {
    const state = VillageState.random();
    total1 += countSteps(state, robot1, memory1);
    total2 += countSteps(state, robot2, memory2);
  }
  console.log(`Robot 1 needed ${Math.floor(total1 / 100)} steps per task`);
  console.log(`Robot 2 needed ${Math.floor(total2 / 100)} steps per task`);
}

compareRobots(lazyRobot, [], goalOrientedRobot, []);



