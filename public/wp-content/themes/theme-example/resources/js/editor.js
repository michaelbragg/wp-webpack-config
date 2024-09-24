/**
 * Block Editor Customizations.
 */

/* Core / Image
   ========================================================================== */
wp.domReady( function() {

	// Remove default styling.
	wp.blocks.unregisterBlockStyle(
		'core/image',
		[ 'default', 'rounded' ]
	);

} );

/* Core / Separator
		========================================================================== */
wp.domReady( function() {

	// Remove default styling.
	wp.blocks.unregisterBlockStyle(
		'core/separator',
		[ 'default', 'wide', 'dots' ]
	);

} );
