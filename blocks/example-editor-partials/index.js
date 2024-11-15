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
<<<<<<<< HEAD:src/blocks/example-editor-partials/index.js
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/
========
>>>>>>>> a5fc98503ade398ccac4cadbcdbdb739bc4b544b:src/blocks/example-dynamic-3/index.js
 */
registerBlockType( metadata.name, {
	attributes: {
		title: {
			type: 'string',
		},
		excerpt: {
			type: 'string',
		},
		color: {
			type: 'string',
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
