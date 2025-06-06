/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} name
 * @property {number} price
 * @property {string} brand
 * @property {string} image
 * @property {string} description
 */

/**
 * @typedef {Object} Annotation
 * @property {string} id
 * @property {number} x - percentage from left
 * @property {number} y - percentage from top
 * @property {string} productId
 */

/**
 * @typedef {Object} MediaItem
 * @property {string} id
 * @property {'image'|'video'} type
 * @property {string} url
 * @property {Annotation[]} [annotations]
 * @property {number} [duration] - for videos
 */

/**
 * @typedef {Object} Look
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {MediaItem[]} media
 * @property {Product[]} products
 */

export {}; 