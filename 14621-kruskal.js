///////////////// classes //////////////////
const DisjointSets = ((N) => {
  const disjointSets = function (N) {
    this.n = N;
    this.parent = new Array(this.n + 1).fill(0).map((v, i) => i);
    this.rnk = new Array(this.n + 1).fill(0);
  };

  disjointSets.prototype.find = function (v) {
    const parent = v != this.parent[v] ? this.find(this.parent[v]) : v;
    return parent;
  };

  disjointSets.prototype.merge = function (u, v) {
    const set_u = this.find(u);
    const set_v = this.find(v);

    this.rnk[set_u] > this.rnk[set_v]
      ? (this.parent[set_v] = set_u)
      : (this.parent[set_u] = set_v);
    if (this.rnk[set_u] === this.rnk[set_v]) this.rnk[set_v]++;
  };

  return disjointSets;
})();

const Graph = ((N, M) => {
  const graph = function (N, M) {
    this.N = N;
    this.M = M;
    this.edges = [];
    this.sets = new DisjointSets(N);
    this.result = 0;
    this.edgeCount = 0;
  };

  graph.prototype.addEdge = function (u, v, d) {
    this.edges.push([d, [u, v]]);
  };

  graph.prototype.addGender = function (gender) {
    this.gender = gender;
  };

  graph.prototype.findKruskal = function () {
    // sorting
    this.edges.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < this.edges.length; i++) {
      const [d, [u, v]] = this.edges[i];

      // if same gender break
      if (gender[u] === gender[v]) continue;

      const set_u = this.sets.find(u);
      const set_v = this.sets.find(v);

      if (set_u !== set_v) {
        this.result += d;
        this.edgeCount++;
        this.sets.merge(set_u, set_v);
      }
    }

    return [this.result, this.edgeCount];
  };

  return graph;
})();

///////////////// input //////////////////
const localInput = `
5 7
M W W W M
1 2 12
1 3 10
4 2 5
5 2 5
2 5 10
3 4 3
5 4 7
`;

const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
)
  .trim()
  .split("\n");

const [N, M] = input
  .shift()
  .split(/\s+/)
  .map((v) => +v);

const graph = new Graph(N, M);
const gender = ["M", ...input.shift().split(/\s+/)];

graph.addGender(gender);

for (let i = 0; i < M; i++) {
  const [u, v, d] = input
    .shift()
    .split(/\s+/)
    .map((v) => +v);
  graph.addEdge(u, v, d);
}

///////////////// logic //////////////////
const [result, edgeCount] = graph.findKruskal();

console.log(edgeCount !== N - 1 ? -1 : result);
