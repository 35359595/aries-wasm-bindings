const fs = require('fs');
const wasm = require('./assets/wasm_exec.js');
var source = fs.readFileSync('./out.wasm');

const go = new Go();

let mod, inst;

var typedArray = new Uint8Array(source);
WebAssembly.instantiate(source, go.importObject)
	.then(result => {

		mod = result.module;
		inst = result.instance;
}).catch(e => {
	console.log(e.Message);
});

async function run() {
	await go.run(inst);
	inst = await WebAssembly.intstantiate(mod, go.importObject);
}

run();
