/**
 * The Akshoverse Studio v1.0 - Utility Functions
 * 
 * Provides common utility functions for the entire application including:
 * - DOM manipulation helpers
 * - String processing utilities
 * - Array and object helpers
 * - Local storage management
 * - Performance utilities
 */

// === DOM UTILITIES ===

/**
 * Safe DOM element selection with error handling
 * @param {string} selector - CSS selector
 * @returns {Element|null} - Selected element or null
 */
function safeQuerySelector(selector) {
    try {
        return document.querySelector(selector);
    } catch (error) {
        console.warn(`Invalid selector: ${selector}`, error);
        return null;
    }
}

/**
 * Safe DOM elements selection with error handling
 * @param {string} selector - CSS selector
 * @returns {NodeList} - Selected elements
 */
function safeQuerySelectorAll(selector) {
    try {
        return document.querySelectorAll(selector);
    } catch (error) {
        console.warn(`Invalid selector: ${selector}`, error);
        return [];
    }
}

/**
 * Create element with attributes and content
 * @param {string} tagName - HTML tag name
 * @param {Object} attributes - Element attributes
 * @param {string} content - Inner content
 * @returns {Element} - Created element
 */
function createElement(tagName, attributes = {}, content = '') {
    const element = document.createElement(tagName);
    
    Object.entries(attributes).forEach(([key, value]) => {
        if (key === 'className') {
            element.className = value;
        } else if (key === 'dataset') {
            Object.entries(value).forEach(([dataKey, dataValue]) => {
                element.dataset[dataKey] = dataValue;
            });
        } else {
            element.setAttribute(key, value);
        }
    });
    
    if (content) {
        element.innerHTML = content;
    }
    
    return element;
}

/**
 * Add multiple CSS classes to element
 * @param {Element} element - Target element
 * @param {...string} classes - CSS classes to add
 */
function addClasses(element, ...classes) {
    if (element && element.classList) {
        element.classList.add(...classes);
    }
}

/**
 * Remove multiple CSS classes from element
 * @param {Element} element - Target element
 * @param {...string} classes - CSS classes to remove
 */
function removeClasses(element, ...classes) {
    if (element && element.classList) {
        element.classList.remove(...classes);
    }
}

/**
 * Toggle CSS class on element
 * @param {Element} element - Target element
 * @param {string} className - CSS class to toggle
 * @returns {boolean} - Whether class is now present
 */
function toggleClass(element, className) {
    if (element && element.classList) {
        return element.classList.toggle(className);
    }
    return false;
}

// === STRING UTILITIES ===

/**
 * Convert string to kebab-case
 * @param {string} str - Input string
 * @returns {string} - Kebab-case string
 */
function toKebabCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase();
}

/**
 * Convert string to camelCase
 * @param {string} str - Input string
 * @returns {string} - CamelCase string
 */
function toCamelCase(str) {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, '');
}

/**
 * Capitalize first letter of string
 * @param {string} str - Input string
 * @returns {string} - Capitalized string
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Clean and normalize tag string
 * @param {string} tag - Tag string
 * @returns {string} - Cleaned tag
 */
function cleanTag(tag) {
    return tag
        .trim()
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, ' ');
}

/**
 * Parse comma-separated tags
 * @param {string} tagString - Comma-separated tag string
 * @returns {Array<string>} - Array of clean tags
 */
function parseTags(tagString) {
    if (!tagString || typeof tagString !== 'string') {
        return [];
    }
    
    return tagString
        .split(',')
        .map(tag => cleanTag(tag))
        .filter(tag => tag.length > 0);
}

/**
 * Format tag list for display
 * @param {Array<string>} tags - Array of tags
 * @returns {string} - Formatted tag string
 */
function formatTags(tags) {
    if (!Array.isArray(tags) || tags.length === 0) {
        return '';
    }
    
    return tags
        .filter(tag => tag && tag.trim())
        .join(', ');
}

// === ARRAY UTILITIES ===

/**
 * Remove duplicates from array
 * @param {Array} array - Input array
 * @returns {Array} - Array without duplicates
 */
function removeDuplicates(array) {
    return [...new Set(array)];
}

/**
 * Shuffle array using Fisher-Yates algorithm
 * @param {Array} array - Input array
 * @returns {Array} - Shuffled array
 */
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Group array elements by key
 * @param {Array} array - Input array
 * @param {string|Function} keyOrFn - Key property or function
 * @returns {Object} - Grouped object
 */
function groupBy(array, keyOrFn) {
    return array.reduce((groups, item) => {
        const key = typeof keyOrFn === 'function' ? keyOrFn(item) : item[keyOrFn];
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(item);
        return groups;
    }, {});
}

// === OBJECT UTILITIES ===

/**
 * Deep clone object
 * @param {Object} obj - Object to clone
 * @returns {Object} - Cloned object
 */
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    
    if (obj instanceof Array) {
        return obj.map(item => deepClone(item));
    }
    
    if (typeof obj === 'object') {
        const cloned = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                cloned[key] = deepClone(obj[key]);
            }
        }
        return cloned;
    }
    
    return obj;
}

/**
 * Merge objects deeply
 * @param {Object} target - Target object
 * @param {...Object} sources - Source objects
 * @returns {Object} - Merged object
 */
function deepMerge(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();
    
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                deepMerge(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    
    return deepMerge(target, ...sources);
}

/**
 * Check if value is object
 * @param {*} item - Value to check
 * @returns {boolean} - Whether value is object
 */
function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}

// === LOCAL STORAGE UTILITIES ===

/**
 * Save data to localStorage with error handling
 * @param {string} key - Storage key
 * @param {*} data - Data to save
 * @returns {boolean} - Success status
 */
function saveToStorage(key, data) {
    try {
        const serialized = JSON.stringify(data);
        localStorage.setItem(key, serialized);
        return true;
    } catch (error) {
        console.warn(`Failed to save to localStorage: ${key}`, error);
        return false;
    }
}

/**
 * Load data from localStorage with error handling
 * @param {string} key - Storage key
 * @param {*} defaultValue - Default value if not found
 * @returns {*} - Loaded data or default value
 */
function loadFromStorage(key, defaultValue = null) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.warn(`Failed to load from localStorage: ${key}`, error);
        return defaultValue;
    }
}

/**
 * Remove data from localStorage
 * @param {string} key - Storage key
 * @returns {boolean} - Success status
 */
function removeFromStorage(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        console.warn(`Failed to remove from localStorage: ${key}`, error);
        return false;
    }
}

/**
 * Clear all localStorage data for app
 * @param {string} prefix - Key prefix to match
 */
function clearAppStorage(prefix = 'akshoverse-') {
    try {
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(prefix)) {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach(key => localStorage.removeItem(key));
    } catch (error) {
        console.warn('Failed to clear app storage', error);
    }
}

// === PERFORMANCE UTILITIES ===

/**
 * Debounce function execution
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @param {boolean} immediate - Execute immediately on first call
 * @returns {Function} - Debounced function
 */
function debounce(func, wait, immediate = false) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func.apply(this, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(this, args);
    };
}

/**
 * Throttle function execution
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Measure function execution time
 * @param {Function} func - Function to measure
 * @param {...*} args - Function arguments
 * @returns {Object} - Result and execution time
 */
function measurePerformance(func, ...args) {
    const start = performance.now();
    const result = func.apply(this, args);
    const end = performance.now();
    
    return {
        result,
        executionTime: end - start
    };
}

// === VALIDATION UTILITIES ===

/**
 * Check if string is valid email
 * @param {string} email - Email string
 * @returns {boolean} - Whether email is valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Check if value is empty or null
 * @param {*} value - Value to check
 * @returns {boolean} - Whether value is empty
 */
function isEmpty(value) {
    return value == null || 
           (typeof value === 'string' && value.trim() === '') ||
           (Array.isArray(value) && value.length === 0) ||
           (typeof value === 'object' && Object.keys(value).length === 0);
}

/**
 * Validate age input
 * @param {number|string} age - Age value
 * @returns {Object} - Validation result
 */
function validateAge(age) {
    const numAge = parseInt(age);
    
    if (isNaN(numAge)) {
        return { valid: false, message: 'Age must be a number' };
    }
    
    if (numAge < 18) {
        return { valid: false, message: 'Age must be 18 or older' };
    }
    
    if (numAge > 120) {
        return { valid: false, message: 'Age must be realistic (120 or younger)' };
    }
    
    return { valid: true, message: '' };
}

// === EVENT UTILITIES ===

/**
 * Add event listener with cleanup tracking
 * @param {Element} element - Target element
 * @param {string} event - Event name
 * @param {Function} handler - Event handler
 * @param {Object} options - Event options
 * @returns {Function} - Cleanup function
 */
function addEventListenerWithCleanup(element, event, handler, options = {}) {
    element.addEventListener(event, handler, options);
    
    return () => {
        element.removeEventListener(event, handler, options);
    };
}

/**
 * Dispatch custom event
 * @param {Element} element - Target element
 * @param {string} eventName - Event name
 * @param {*} detail - Event detail data
 */
function dispatchCustomEvent(element, eventName, detail = null) {
    const event = new CustomEvent(eventName, {
        detail,
        bubbles: true,
        cancelable: true
    });
    element.dispatchEvent(event);
}

// === ANIMATION UTILITIES ===

/**
 * Animate element with CSS classes
 * @param {Element} element - Target element
 * @param {string} animationClass - Animation CSS class
 * @param {number} duration - Animation duration in ms
 * @returns {Promise} - Promise that resolves when animation completes
 */
function animateElement(element, animationClass, duration = 300) {
    return new Promise((resolve) => {
        element.classList.add(animationClass);
        
        setTimeout(() => {
            element.classList.remove(animationClass);
            resolve();
        }, duration);
    });
}

/**
 * Smooth scroll to element
 * @param {Element} element - Target element
 * @param {Object} options - Scroll options
 */
function smoothScrollTo(element, options = {}) {
    const defaultOptions = {
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    };
    
    element.scrollIntoView({ ...defaultOptions, ...options });
}

// === RANDOM UTILITIES ===

/**
 * Generate random integer between min and max (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} - Random integer
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate random string
 * @param {number} length - String length
 * @param {string} chars - Character set
 * @returns {string} - Random string
 */
function randomString(length = 8, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

/**
 * Pick random element from array
 * @param {Array} array - Input array
 * @returns {*} - Random element
 */
function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// === EXPORT FOR DEBUGGING ===
window.AkshoUtils = {
    // DOM utilities
    safeQuerySelector,
    safeQuerySelectorAll,
    createElement,
    addClasses,
    removeClasses,
    toggleClass,
    
    // String utilities
    toKebabCase,
    toCamelCase,
    capitalize,
    cleanTag,
    parseTags,
    formatTags,
    
    // Array utilities
    removeDuplicates,
    shuffleArray,
    groupBy,
    
    // Object utilities
    deepClone,
    deepMerge,
    isObject,
    
    // Storage utilities
    saveToStorage,
    loadFromStorage,
    removeFromStorage,
    clearAppStorage,
    
    // Performance utilities
    debounce,
    throttle,
    measurePerformance,
    
    // Validation utilities
    isValidEmail,
    isEmpty,
    validateAge,
    
    // Event utilities
    addEventListenerWithCleanup,
    dispatchCustomEvent,
    
    // Animation utilities
    animateElement,
    smoothScrollTo,
    
    // Random utilities
    randomInt,
    randomString,
    randomChoice
};