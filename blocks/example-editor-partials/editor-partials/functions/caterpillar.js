export function getToeCount( a, b ) {
	return 'I have ' + ( a + 1 ) * b + ' toes...';
}

export function introduceCaterpillar(
	caterpillarName,
	caterpillarMood,
	caterpillarSegments
) {
	// @todo ternary
	let moodAsText = "not feelin' much";
	if ( caterpillarMood ) {
		moodAsText = 'so mad';
	} else {
		moodAsText = 'calm af';
	}

	return (
		'Hello world, my name is ' +
		caterpillarName +
		", and I'm " +
		moodAsText +
		'! Also, please note that ' +
		getToeCount( caterpillarSegments, 2 )
	);
}

export function buildCaterpillar(
	caterpillarHat,
	caterpillarSegments,
	caterpillarLife
) {
	const myFace = buildFace( caterpillarLife );
	const myHat = buildHat( caterpillarHat );
	const bodyAir = '   ';
	const bodyTop = '.__';
	const bodyMid = '(  ';
	const bodyBottom = '(__';
	const bodyLegs = '^  ';

	return (
		`
   ` +
		bodyAir.repeat( caterpillarSegments ) +
		` •  ` +
		myHat[ 0 ] +
		`  •
   ` +
		bodyTop.repeat( caterpillarSegments ) +
		`.| ` +
		myHat[ 1 ] +
		` ` +
		myHat[ 2 ] +
		` |
   ` +
		bodyMid.repeat( caterpillarSegments ) +
		`)[ ` +
		myFace[ 0 ] +
		` ` +
		myFace[ 1 ] +
		` ]
 < ` +
		bodyMid.repeat( caterpillarSegments ) +
		`) [ ` +
		myFace[ 2 ] +
		` ]
   ` +
		bodyBottom.repeat( caterpillarSegments ) +
		`)
   ` +
		bodyLegs.repeat( caterpillarSegments ) +
		`^
`
	);
}

export function buildFace( caterpillarLife ) {
	if ( caterpillarLife ) {
		return [ 'X', 'X', '~' ];
	}
	return [ 'O', 'O', '=' ];
}

export function buildHat( caterpillarHat ) {
	if ( 'tophat' == caterpillarHat ) {
		return [ '_', '|', '|' ];
	}
	return [ ' ', ' ', ' ' ];
}

//                            •   _   •
//    ,,,,,,,,,,,,,,,,,,,,,,,, \ / \ /
//  / (  (  (  (  (  (  (  (  )[ O X ]
// <  (  (  (  (  (  (  (  (  ) [ ‿ ]︵
//  \ (__(__(__(__(__(__(__(__)
//    %  ^  ^  ^  ^  ^  ^  ^  ^
