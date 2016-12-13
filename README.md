
@mitchallen/shuffle
==
Uses Fisher-Yates to shuffle an array.
--
* * *
## Installation

You must use __npm__ __2.7.0__ or higher because of the scoped package name.

    $ npm init
    $ npm install @mitchallen/shuffle --save
  
* * *

## Usage

    "use strict";
    
    var shuffleFactory = require("@mitchallen/shuffle");
    
	var list = [1, 2, 3, 4, 5];
	
    var shuffler = shuffleFactory.create({ array: list });
    
    var shuffled = shuffler.shuffle();
    
    console.log(shuffled);
    
* * * 
   
## Methods

### create( spec )

Factory method that returns a shuffle object.

It takes one spec parameter that must be an object an array value specifying the array to be shuffled.

The method will return null if create fails, such as with bad parameters.

You can call create multiple times to create multiple shuffle objects.

	var shuffleFactory = require("@mitchallen/shuffle");

	var s1 = shuffleFactory.create( { array: [ 1, 2, 3, 4, 5 ] } );
	var s2 = shuffleFactory.create( { array: [ 6, 7, 8, 9, 10 ] }  );

    if(!s1 || !s2) ...
    
### shuffle()

Returns a shuffled version of the array passed to the create method. It does not affect the original but instead returns a shuffled copy. You can call __shuffle__ multiple times and it will keep shuffling it's internal copy.

	var shuffleFactory = require("@mitchallen/shuffle");

	var s1 = shuffleFactory.create( { array: [ 1, 2, 3, 4, 5 ] } );
	
	console.log( s1.shuffle() );
	console.log( s1.shuffle() );

* * *

## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/shuffle.git](https://bitbucket.org/mitchallen/shuffle.git)
* [github.com/mitchallen/shuffle.git](https://github.com/mitchallen/shuffle.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.0 

* initial release

* * *
