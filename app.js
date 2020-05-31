/** @format */

//observer pattern
function EventObserver() {
	this.observers = [];
}

EventObserver.prototype = {
	subscribe: function (fn) {
		this.observers.push(fn);
		console.log(`you are now subscribed to ${fn.name}`);
	},
	unsubscribe: function (fn) {
		//filter out from the list whatever matches the callback function.
		//if theres no match the callback gets to stay on the list.
		//The filter returns a new list and reassigns the list of observers.
		this.observers = this.observers.filter(function (item) {
			if (item !== fn) {
				return item;
			}
		});
		console.log(`you are now unsubscribed from ${fn.name}`);
	},
	fire: function () {
		this.observers.forEach(function (item) {
			item.call();
		});
	},
};

const click = new EventObserver();

//event listeners
//ms
document.querySelector('.sub-ms').addEventListener('click', function () {
	click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
	click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.fire').addEventListener('click', function () {
	click.fire();
});

//sec
document.querySelector('.sub-s').addEventListener('click', function () {
	click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function () {
	click.unsubscribe(getCurSeconds);
});
//click handler
const getCurMilliseconds = function () {
	console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};
const getCurSeconds = function () {
	console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
