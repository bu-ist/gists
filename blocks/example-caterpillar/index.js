/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
// import Save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/
 */
registerBlockType( metadata.name, {
	attributes: {
		title: {
			type: 'string',
		},
		excerpt: {
			type: 'string',
		},
		caterpillarName: {
			type: 'string',
		},
		caterpillarColor: {
			type: 'string',
		},
		caterpillarHat: {
			type: 'string',
		},
		caterpillarMood: {
			type: 'boolean',
		},
		caterpillarSegments: {
			type: 'number',
		},
		caterpillarLife: {
			type: 'boolean',
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @param root0
	 * @param root0.attributes
	 * @see ./save.js
	 */
	save: ( { attributes } ) => null,
	icon: { src: metadata.icon, foreground: '#cc0000' },
} );
