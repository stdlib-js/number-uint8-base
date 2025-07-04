/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name add
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/uint8/base/add}
*/
setReadOnly( ns, 'add', require( '@stdlib/number-uint8-base-add' ) );

/**
* @name fromBinaryStringUint8
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/uint8/base/from-binary-string}
*/
setReadOnly( ns, 'fromBinaryStringUint8', require( '@stdlib/number-uint8-base-from-binary-string' ) );

/**
* @name mul
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/uint8/base/mul}
*/
setReadOnly( ns, 'mul', require( '@stdlib/number-uint8-base-mul' ) );

/**
* @name sub
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/uint8/base/sub}
*/
setReadOnly( ns, 'sub', require( '@stdlib/number-uint8-base-sub' ) );

/**
* @name toBinaryStringUint8
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/uint8/base/to-binary-string}
*/
setReadOnly( ns, 'toBinaryStringUint8', require( '@stdlib/number-uint8-base-to-binary-string' ) );


// EXPORTS //

module.exports = ns;
