/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

import { CaterpillarInspectorControls } from './editor-partials/inspector';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

// @todo document
import { gimmieUmlauts } from '../includes/umlautEverything';

// Import custom assets from within the block folder.
import {
	introduceCaterpillar,
	buildCaterpillar,
} from './editor-partials/functions/caterpillar';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  props
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( props ) {
	const { attributes, setAttributes } = props;

	const {
		title,
		excerpt,
		caterpillarName,
		caterpillarColor,
		caterpillarHat,
		caterpillarMood,
		caterpillarSegments,
		caterpillarLife,
	} = attributes;

	const onChangeTitle = ( newTitle ) => {
		setAttributes( { title: gimmieUmlauts( newTitle ) } );
	};

	const onChangeExcerpt = ( newExcerpt ) => {
		setAttributes( { excerpt: gimmieUmlauts( newExcerpt ) } );
	};

	return (
		<>
			<CaterpillarInspectorControls { ...props } />
			<div { ...useBlockProps() }>
				<div className="wp-block--bu-block-example--caterpillar--container">
					<RichText
						className="wp-block--bu-block-example--caterpillar--title"
						placeholder={ __( 'Callout Title', 'theme-slug' ) }
						tagName="h2"
						onChange={ onChangeTitle }
						value={ title }
						allowedFormats={ [] }
					/>
					<strong>
						{ introduceCaterpillar(
							caterpillarName,
							caterpillarMood,
							caterpillarSegments
						) }
					</strong>
					<div
						className={
							'wp-block--bu-block-example--caterpillar--color-' +
							attributes.caterpillarColor
						}
					>
						{ buildCaterpillar(
							caterpillarHat,
							caterpillarSegments,
							caterpillarLife
						) }
					</div>
					<RichText
						placeholder={ __( 'Excerpt', 'theme-slug' ) }
						tagName="p"
						classname="wp-block--bu-block-example--caterpillar--excerpt"
						onChange={ onChangeExcerpt }
						value={ excerpt }
						allowedFormats={ [
							'core/italic',
							'core/bold',
							'core/link',
						] }
					/>
				</div>
			</div>
		</>
	);
}
