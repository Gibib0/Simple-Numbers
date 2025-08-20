'use strict'

mainLoop:for(let num = 2; num <= 100; num++) {
	checkLoop:for(let i = 2; i < num; i++) {
		if(num % i === 0) {
			continue mainLoop
		}
	}
}