import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { PanelRow } from '@wordpress/components';

const MetaBox = ( { postType } ) => {

	if ( 'plugin-example' !== postType ) {
		return null;
	}

	return(
		<PluginDocumentSettingPanel
			title={ __( 'Plugin Example' ) }
			initialOpen={ true }
		>
			<PanelRow>

			</PanelRow>

		</PluginDocumentSettingPanel>
	);
}

const applyWithSelect = withSelect( ( select ) => {
	return {
		metaFields: select( 'core/editor' ).getEditedPostAttribute( 'meta' ),
		postType: select( 'core/editor' ).getCurrentPostType()
	};
} );

export default compose([
	applyWithSelect
])(MetaBox);
