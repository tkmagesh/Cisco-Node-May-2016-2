function f1Sync(){
	console.log('f1Sync started');
	console.log('f1Sync completed');
}
function f2Sync(){
	console.log('f2Sync started');
	console.log('f2Sync completed');
}
function f3Sync(){
	console.log('f3Sync started');
	console.log('f3Sync completed');
}
function f4Sync(){
	console.log('f4Sync started');
	console.log('f4Sync completed');
}

function runSync(){
	f1Sync();
	f2Sync();
	f3Sync();
	f4Sync();
}

module.exports.runSync = runSync;

function f1Async(next){
	console.log('f1Async started');
	setTimeout(function(){
		console.log('f1Async completed');
		if (typeof next === 'function')
			next();
	},3000)
}
function f2Async(next){
	console.log('f2Async started');
	setTimeout(function(){
		console.log('f2Async completed');
		if (typeof next === 'function')
			next();
	},3000)
}
function f3Async(next){
	console.log('f3Async started');
	setTimeout(function(){
		console.log('f3Async completed');
		if (typeof next === 'function')
			next();
	},3000)
}
function f4Async(next){
	console.log('f4Async started');
	setTimeout(function(){
		console.log('f4Async completed');
		if (typeof next === 'function')
			next();
	},3000)
}

function runAsync(){
	f1Async(function(){
		f2Async(function(){
			f3Async(function(){
				f4Async();
			})
		})
	})
}

module.exports.runAsync = runAsync;