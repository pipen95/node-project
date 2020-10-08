const { roadGraph } = require('./roads');

exports.buildGraph = function buildGraph(edges) {
  const graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (const [from, to] of edges.map(r => r.split('-'))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
};

const graph = {};
for (const node of Object.keys(roadGraph)) {
  graph[node] = {};
  const edges = graph[node];
  for (const dest of roadGraph[node]) {
    edges[dest] = 1;
  }
}

exports.graph = graph;
