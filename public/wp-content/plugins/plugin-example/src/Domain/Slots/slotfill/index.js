/**
 * Registers a plugin for adding items to the Gutenberg Toolbar
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-sidebar/
 */
import { registerPlugin } from '@wordpress/plugins';

import MetaBox from './MetaBox';

registerPlugin(
	'plugin-example',
	{
		render: MetaBox
	}
);
