/**
 * TypeScript JSDoc Type Definitions
 * For better IDE autocomplete and type safety in JavaScript
 */

/**
 * @typedef {Object} Project
 * @property {string} id - Unique project identifier
 * @property {string} name - Project name
 * @property {string} location - Geographic location
 * @property {number} [bedrooms] - Number of bedrooms (if applicable)
 * @property {string} type - Type of care service
 * @property {string} description - Short description
 * @property {string} link - Link to project page
 * @property {string} image - Image URL
 */

/**
 * @typedef {Object} Service
 * @property {string} id - Service identifier
 * @property {string} name - Service name
 * @property {string} description - Service description
 * @property {string[]} keyFeatures - List of key features
 */

/**
 * @typedef {Object} CareValue
 * @property {string} id - Value identifier
 * @property {string} title - Value title
 * @property {string} description - Value description
 * @property {string} icon - Icon name
 */

/**
 * @typedef {Object} FormState
 * @property {Object} formData - Current form values
 * @property {Object} errors - Form validation errors
 * @property {Function} handleChange - Handle input changes
 * @property {Function} handleReset - Reset form to initial state
 */

export {};
