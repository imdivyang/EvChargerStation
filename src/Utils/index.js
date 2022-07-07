export const Data = [
  {
    name: 'expressway charging - mariam enterprise',
    id: 'a001',
    address: 'connaught place, delhi',
    distance: '2102',
    distance_metrics: 'metres',
    latitude: 21.0724124,
    longitude: 72.8733408,
    connector_types: ['lvl1dc-2', 'lvl2dc-1', 'normalac-1'],
  },
  {
    name: 'expressway charging - ganesh enterprise',
    id: 'a002',
    address: 'surat, gujarat',
    distance: '1000',
    distance_metrics: 'metres',
    latitude: 21.0654124,
    longitude: 72.8533408,
    connector_types: ['lvl1dc-2', 'lvl2dc-1', 'normalac-1'],
  },
  {
    name: 'expressway charging - ganesh enterprise',
    id: 'a003',
    address: 'surat, gujarat',
    distance: '1000',
    distance_metrics: 'metres',
    latitude: 21.0654124,
    longitude: 72.8133408,
    connector_types: ['lvl1dc-2', 'lvl2dc-1', 'normalac-1'],
  },
  {
    name: 'expressway charging - ganesh enterprise',
    id: 'a004',
    address: 'surat, gujarat',
    distance: '1000',
    distance_metrics: 'metres',
    latitude: 21.0654124,
    longitude: 72.8333408,
    connector_types: ['lvl1dc-2', 'lvl2dc-1', 'normalac-1'],
  },
];

export const MAP_STYLE = [
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#444444',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#f2f2f2',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 45,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#46bcec',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#00b7bd',
      },
    ],
  },
];
