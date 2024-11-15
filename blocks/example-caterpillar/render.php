<?php
/**
 * The render template for the block.
 *
 * @link https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

?>

<hr>
<pre>...caterpillar...</pre>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div class="wp-block--bu-block-example--caterpillar--container">
		<?php if ( ! empty( $attributes['title'] ) ) : ?>
		<h2 class="wp-block--bu-block-example--caterpillar--title"><?php echo esc_html( $attributes['title'] ); ?></h2>
		<?php endif; ?>

		<?php if ( ! empty( $attributes['excerpt'] ) ) : ?>
		<p class="wp-block--bu-block-example--caterpillar--excerpt"><?php echo wp_kses_post( $attributes['excerpt'] ); ?></p>
		<?php endif; ?>
	</div>
</div>
<hr>
