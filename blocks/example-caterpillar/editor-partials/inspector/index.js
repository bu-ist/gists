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

// Import custom assets from within the block folder.
import { getToeCount } from '../functions/caterpillar';

// Import custom shared assets from within the src folder.
import { gimmieUmlauts } from '../../../includes/umlautEverything';

// Import WP assets.
import {
	PanelBody,
	TextControl, // https://developer.wordpress.org/block-editor/reference-guides/components/text-control/
	SelectControl, // https://developer.wordpress.org/block-editor/reference-guides/components/select-control/
	RadioControl, // https://developer.wordpress.org/block-editor/reference-guides/components/radio-control/
	CheckboxControl, // https://developer.wordpress.org/block-editor/reference-guides/components/checkbox-control/
	RangeControl, // https://developer.wordpress.org/block-editor/reference-guides/components/range-control/
	ToggleControl, // https://developer.wordpress.org/block-editor/reference-guides/components/toggle-control/
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

// React requires that the first letter of components be capitalized. JSX will use this capitalization to tell the difference between an HTML tag and a component instance. If the first letter of a name is capitalized, then JSX knows it's a component instance; if not, then it's an HTML element.
export const CaterpillarInspectorControls = ( {
	attributes,
	setAttributes,
} ) => {
	const {
		caterpillarName,
		caterpillarColor,
		caterpillarHat,
		caterpillarMood,
		caterpillarSegments,
		caterpillarLife,
	} = attributes;

	function setCaterpillarName( newValue ) {
		setAttributes( { caterpillarName: gimmieUmlauts( newValue ) } );
	}

	function setCaterpillarColor( newValue ) {
		setAttributes( { caterpillarColor: newValue } );
	}

	function setCaterpillarHat( newValue ) {
		setAttributes( { caterpillarHat: newValue } );
	}

	function setCaterpillarMood( newValue ) {
		setAttributes( { caterpillarMood: newValue } );
	}

	function setCaterpillarSegments( newValue ) {
		setAttributes( { caterpillarSegments: newValue } );
	}

	function onChangeCaterpillarLife( newValue ) {
		setAttributes( { caterpillarLife: newValue } );
	}

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Caterpillar Configuration' ) }
				className="bu-block-example--caterpillar--panel"
			>
				<TextControl
					label="Name"
					help="Who are you?"
					className="bu-block-example--caterpillar--name"
					value={ caterpillarName }
					onChange={ setCaterpillarName }
				/>
				<SelectControl
					label="Color"
					value={ caterpillarColor }
					options={ [
						{ label: 'Red', value: 'red' },
						{ label: 'Green', value: 'green' },
						{ label: 'Blue', value: 'blue' },
					] }
					onChange={ setCaterpillarColor }
				/>
				<RadioControl
					label="The type of the current hat is..."
					selected={ caterpillarHat }
					options={ [
						{ label: 'Top Hat', value: 'tophat' },
						{ label: 'None', value: 'none' },
					] }
					onChange={ setCaterpillarHat }
				/>
				<CheckboxControl
					label="Is angry?"
					help="What mood are we in today, Mister Rumples?"
					checked={ caterpillarMood }
					onChange={ setCaterpillarMood }
				/>
				<RangeControl
					label="Segments"
					value={ caterpillarSegments }
					onChange={ setCaterpillarSegments }
					initialPosition={ 1 }
					min={ 1 }
					max={ 10 }
					help={ ( value ) => getToeCount( value, 2 ) }
				/>
				<ToggleControl
					label="Is dead?"
					help="Oh boy!"
					checked={ caterpillarLife }
					onChange={ onChangeCaterpillarLife }
				/>
			</PanelBody>
		</InspectorControls>
	);
};
