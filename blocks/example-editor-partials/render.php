<?php
/**
 * The render template for the block.
 *
 * @link https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

?>

<hr>
<pre>...partials...</pre>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div class="wp-block--bu-block-example--editor-partials--container" style="background-color:<?php echo esc_attr( $attributes['color'] ); ?>">

		<?php if ( ! empty( $attributes['title'] ) ) : ?>
		<h2 class="wp-block--bu-block-example--editor-partials--title"><?php echo esc_html( $attributes['title'] ); ?></h2>
		<?php endif; ?>

		<?php if ( ! empty( $attributes['excerpt'] ) ) : ?>
		<p class="wp-block--bu-block-example--editor-partials--excerpt"><?php echo wp_kses_post( $attributes['excerpt'] ); ?></p>
		<?php endif; ?>

	</div>
</div>
<hr>
