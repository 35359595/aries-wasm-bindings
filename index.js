const fs = require('fs');
var source = fs.readFileSync('./out.wasm');
var typedArray = new Uint8Array(source);

const env = {
	memoryBase: 0,
	tableBase: 0,
	memory: new WebAssembly.Memory({
		initial: 256
	}),
	table: new WebAssembly.Table({
		initial: 0,
		element: 'anyfunc'
	})
}

WebAssembly.instantiate(typedArray, {
	env: env
}).then(result => {
	console.log(util.inspect(result, true, 0));
	console.log(result.instance.exports._hi("John"));
}).catch(e => {
	console.log(e);
});
