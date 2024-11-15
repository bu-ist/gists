/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 * @todo https://developer.wordpress.org/coding-standards/wordpress-coding-standards/javascript/
 * @todo https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/inspector-controls/README.md
 * @todo https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import { __ } from '@wordpress/i18n';

// Import WP assets.
import { InspectorControls } from '@wordpress/block-editor';

// Import WP assets.
import {
	PanelBody,
	SelectControl, // https://developer.wordpress.org/block-editor/reference-guides/components/select-control/
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

// React requires that the first letter of components be capitalized. JSX will use this capitalization to tell the difference between an HTML tag and a component instance. If the first letter of a name is capitalized, then JSX knows it's a component instance; if not, then it's an HTML element.
export const EditorPartialsInspectorControls = ( {
	attributes,
	setAttributes,
} ) => {
	const {
		color,
	} = attributes;

	function setColor( newValue ) {
		setAttributes( { color: newValue } );
	}

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Block Options' ) }
				className="bu-block-example--editor-partials--panel"
			>
				<SelectControl
					label="Color"
					value={ color }
					options={ [
						{ value: '', label: 'Select a color, dawg', disabled: true },
						{ label: 'Light Sea Green', value: 'lightseagreen' },
						{ label: 'Light Golden Rod Yellow', value: 'lightgoldenrodyellow' },
						{ label: 'Sandy Brown', value: 'sandybrown' },
					] }
					onChange={ setColor }
				/>
			</PanelBody>
		</InspectorControls>
	);
};
