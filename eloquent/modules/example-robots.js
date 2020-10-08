// eslint-disable-next-line camelcase
const { find_path } = require('dijkstrajs');
const { graph } = require('./graph');

function score({ route, pickUp }) {
  return (pickUp ? 0.5 : 0) - route.length;
}
function lazyRobot({ place, parcels }, route) {
  if (route.length === 0) {
    // Describe a route for every parcel
    const routes = parcels.map(parcel => {
      if (parcel.place !== place) {
        return {
          route: find_path(graph, place, parcel.place),
          pickUp: true
        };
      }
      return {
        route: find_path(graph, place, parcel.address),
        pickUp: false
      };
    });

    // eslint-disable-next-line prefer-destructuring
    route = routes.reduce((a, b) => (score(a) > score(b) ? a : b)).route;
  }

  return { direction: route[0], memory: route.slice(1) };
}

function goalOrientedRobot({ place, parcels }, route) {
  if (route.length === 0) {
    const parcel = parcels[0];
    if (parcel.place !== place) {
      route = find_path(graph, place, parcel.place);
    } else {
      route = find_path(graph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

exports.lazyRobot = lazyRobot;
exports.goalOrientedRobot = goalOrientedRobot;
