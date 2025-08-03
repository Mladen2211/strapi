import type { Schema, Struct } from '@strapi/strapi';

export interface InfoInfoItem extends Struct.ComponentSchema {
  collectionName: 'components_info_info_items';
  info: {
    displayName: 'Info Item';
    icon: 'information';
  };
  attributes: {
    primary_text: Schema.Attribute.String;
    secondary_text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'info.info-item': InfoInfoItem;
    }
  }
}
