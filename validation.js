/**
 * The Akshoverse Studio v1.0 - Validation Module
 * 
 * Provides comprehensive validation for:
 * - Form inputs and character data
 * - Age verification and content safety
 * - Tag validation and sanitization
 * - Character consistency checks
 * - Input sanitization and security
 */

// === VALIDATION CONSTANTS ===

const VALIDATION_CONFIG = {
    MIN_AGE: 18,
    MAX_AGE: 120,
    MAX_TAG_LENGTH: 50,
    MAX_TAGS_COUNT: 100,
    MAX_NAME_LENGTH: 50,
    MAX_CUSTOM_TAGS_LENGTH: 1000,
    FORBIDDEN_WORDS: [
        'child', 'kid', 'minor', 'young', 'baby', 'toddler', 'infant',
        'underage', 'teen', 'teenager', 'adolescent', 'juvenile'
    ],
    REQUIRED_FIELDS: {
        human: ['age'],
        monster: ['species']
    }
};

const VALIDATION_PATTERNS = {
    SAFE_TEXT: /^[a-zA-Z0-9\s\-_.,!?()]+$/,
    TAG_PATTERN: /^[a-zA-Z0-9\s\-_]+$/,
    NAME_PATTERN: /^[a-zA-Z0-9\s\-_.']+$/,
    AGE_PATTERN: /^\d{1,3}$/
};

// === CORE VALIDATION CLASS ===

class AkshoValidator {
    constructor() {
        this.errors = new Map();
        this.warnings = new Map();
        this.validationResults = new Map();
    }

    /**
     * Clear all validation results
     */
    clearResults() {
        this.errors.clear();
        this.warnings.clear();
        this.validationResults.clear();
    }

    /**
     * Add error message
     * @param {string} field - Field name
     * @param {string} message - Error message
     */
    addError(field, message) {
        if (!this.errors.has(field)) {
            this.errors.set(field, []);
        }
        this.errors.get(field).push(message);
    }

    /**
     * Add warning message
     * @param {string} field - Field name
     * @param {string} message - Warning message
     */
    addWarning(field, message) {
        if (!this.warnings.has(field)) {
            this.warnings.set(field, []);
        }
        this.warnings.get(field).push(message);
    }

    /**
     * Check if validation passed
     * @returns {boolean} - Whether validation passed
     */
    isValid() {
        return this.errors.size === 0;
    }

    /**
     * Get all errors
     * @returns {Object} - Errors object
     */
    getErrors() {
        return Object.fromEntries(this.errors);
    }

    /**
     * Get all warnings
     * @returns {Object} - Warnings object
     */
    getWarnings() {
        return Object.fromEntries(this.warnings);
    }

    /**
     * Get validation summary
     * @returns {Object} - Validation summary
     */
    getSummary() {
        return {
            valid: this.isValid(),
            errorCount: this.errors.size,
            warningCount: this.warnings.size,
            errors: this.getErrors(),
            warnings: this.getWarnings()
        };
    }
}

// === FIELD VALIDATION FUNCTIONS ===

/**
 * Validate age input
 * @param {string|number} age - Age value
 * @returns {Object} - Validation result
 */
function validateAge(age) {
    const result = { valid: true, value: null, errors: [], warnings: [] };
    
    // Check if age is provided
    if (!age || age === '') {
        result.valid = false;
        result.errors.push('Age is required');
        return result;
    }
    
    // Convert to number
    const numAge = parseInt(age);
    
    // Check if valid number
    if (isNaN(numAge) || !VALIDATION_PATTERNS.AGE_PATTERN.test(age.toString())) {
        result.valid = false;
        result.errors.push('Age must be a valid number');
        return result;
    }
    
    // Check minimum age (content safety)
    if (numAge < VALIDATION_CONFIG.MIN_AGE) {
        result.valid = false;
        result.errors.push(`Age must be ${VALIDATION_CONFIG.MIN_AGE} or older`);
        return result;
    }
    
    // Check maximum age (realism)
    if (numAge > VALIDATION_CONFIG.MAX_AGE) {
        result.valid = false;
        result.errors.push(`Age must be ${VALIDATION_CONFIG.MAX_AGE} or younger`);
        return result;
    }
    
    // Add warnings for edge cases
    if (numAge >= 100) {
        result.warnings.push('Very high age - consider if this is realistic for your character');
    }
    
    result.value = numAge;
    return result;
}

/**
 * Validate character name
 * @param {string} name - Character name
 * @returns {Object} - Validation result
 */
function validateCharacterName(name) {
    const result = { valid: true, value: null, errors: [], warnings: [] };
    
    // Name is now required
    if (!name || name.trim() === '') {
        result.valid = false;
        result.errors.push('Character name is required');
        return result;
    }
    
    const trimmedName = name.trim();
    
    // Check length
    if (trimmedName.length > VALIDATION_CONFIG.MAX_NAME_LENGTH) {
        result.valid = false;
        result.errors.push(`Name must be ${VALIDATION_CONFIG.MAX_NAME_LENGTH} characters or less`);
        return result;
    }
    
    // Check pattern
    if (!VALIDATION_PATTERNS.NAME_PATTERN.test(trimmedName)) {
        result.valid = false;
        result.errors.push('Name contains invalid characters. Use only letters, numbers, spaces, hyphens, underscores, apostrophes, and periods');
        return result;
    }
    
    // Check for forbidden words
    const lowerName = trimmedName.toLowerCase();
    const hasForbiddenWords = VALIDATION_CONFIG.FORBIDDEN_WORDS.some(word => 
        lowerName.includes(word.toLowerCase())
    );
    
    if (hasForbiddenWords) {
        result.valid = false;
        result.errors.push('Name contains inappropriate content');
        return result;
    }
    
    result.value = trimmedName;
    return result;
}

/**
 * Validate single tag
 * @param {string} tag - Tag to validate
 * @returns {Object} - Validation result
 */
function validateTag(tag) {
    const result = { valid: true, value: null, errors: [], warnings: [] };
    
    if (!tag || typeof tag !== 'string') {
        result.valid = false;
        result.errors.push('Tag must be a valid string');
        return result;
    }
    
    const cleanedTag = tag.trim().toLowerCase();
    
    // Check if empty after cleaning
    if (cleanedTag === '') {
        result.valid = false;
        result.errors.push('Tag cannot be empty');
        return result;
    }
    
    // Check length
    if (cleanedTag.length > VALIDATION_CONFIG.MAX_TAG_LENGTH) {
        result.valid = false;
        result.errors.push(`Tag must be ${VALIDATION_CONFIG.MAX_TAG_LENGTH} characters or less`);
        return result;
    }
    
    // Check pattern
    if (!VALIDATION_PATTERNS.TAG_PATTERN.test(cleanedTag)) {
        result.valid = false;
        result.errors.push('Tag contains invalid characters. Use only letters, numbers, spaces, hyphens, and underscores');
        return result;
    }
    
    // Check for forbidden words
    const hasForbiddenWords = VALIDATION_CONFIG.FORBIDDEN_WORDS.some(word => 
        cleanedTag.includes(word.toLowerCase())
    );
    
    if (hasForbiddenWords) {
        result.valid = false;
        result.errors.push('Tag contains inappropriate content');
        return result;
    }
    
    result.value = cleanedTag;
    return result;
}

/**
 * Validate array of tags
 * @param {Array<string>} tags - Array of tags
 * @returns {Object} - Validation result
 */
function validateTags(tags) {
    const result = { valid: true, value: [], errors: [], warnings: [] };
    
    if (!Array.isArray(tags)) {
        result.valid = false;
        result.errors.push('Tags must be an array');
        return result;
    }
    
    // Check total count
    if (tags.length > VALIDATION_CONFIG.MAX_TAGS_COUNT) {
        result.valid = false;
        result.errors.push(`Cannot have more than ${VALIDATION_CONFIG.MAX_TAGS_COUNT} tags`);
        return result;
    }
    
    const validTags = [];
    const invalidTags = [];
    const duplicateCheck = new Set();
    
    tags.forEach((tag, index) => {
        const tagResult = validateTag(tag);
        
        if (tagResult.valid) {
            // Check for duplicates
            if (duplicateCheck.has(tagResult.value)) {
                result.warnings.push(`Duplicate tag removed: "${tagResult.value}"`);
            } else {
                duplicateCheck.add(tagResult.value);
                validTags.push(tagResult.value);
            }
        } else {
            invalidTags.push({ index, tag, errors: tagResult.errors });
        }
    });
    
    // Add errors for invalid tags
    invalidTags.forEach(({ index, tag, errors }) => {
        result.errors.push(`Tag ${index + 1} ("${tag}"): ${errors.join(', ')}`);
    });
    
    // Set valid status
    result.valid = invalidTags.length === 0;
    result.value = validTags;
    
    // Add warning for high tag count
    if (validTags.length > 50) {
        result.warnings.push('High number of tags may affect performance and readability');
    }
    
    return result;
}

/**
 * Validate custom tags input
 * @param {string} customTagsString - Comma-separated custom tags
 * @returns {Object} - Validation result
 */
function validateCustomTags(customTagsString) {
    const result = { valid: true, value: [], errors: [], warnings: [] };
    
    // Custom tags are optional
    if (!customTagsString || customTagsString.trim() === '') {
        return result;
    }
    
    // Check total length
    if (customTagsString.length > VALIDATION_CONFIG.MAX_CUSTOM_TAGS_LENGTH) {
        result.valid = false;
        result.errors.push(`Custom tags input is too long (max ${VALIDATION_CONFIG.MAX_CUSTOM_TAGS_LENGTH} characters)`);
        return result;
    }
    
    // Parse and validate individual tags
    const tagArray = parseTags(customTagsString);
    const tagsResult = validateTags(tagArray);
    
    result.valid = tagsResult.valid;
    result.value = tagsResult.value;
    result.errors = tagsResult.errors;
    result.warnings = tagsResult.warnings;
    
    return result;
}

/**
 * Validate required fields for character type
 * @param {Object} formData - Form data object
 * @param {string} characterType - Character type (human/monster)
 * @returns {Object} - Validation result
 */
function validateRequiredFields(formData, characterType) {
    const result = { valid: true, errors: [], warnings: [] };
    
    const requiredFields = VALIDATION_CONFIG.REQUIRED_FIELDS[characterType] || [];
    
    requiredFields.forEach(field => {
        if (!formData[field] || formData[field] === '') {
            result.valid = false;
            result.errors.push(`${capitalize(field)} is required`);
        }
    });
    
    return result;
}

// === COMPREHENSIVE CHARACTER VALIDATION ===

/**
 * Validate complete character data
 * @param {Object} characterData - Character data object
 * @param {string} characterType - Character type (human/monster)
 * @returns {Object} - Comprehensive validation result
 */
function validateCharacter(characterData, characterType) {
    const validator = new AkshoValidator();
    const cleanData = {};
    
    // Validate character name
    if (characterData.name !== undefined) {
        const nameResult = validateCharacterName(characterData.name);
        if (!nameResult.valid) {
            nameResult.errors.forEach(error => validator.addError('name', error));
        } else {
            cleanData.name = nameResult.value;
        }
        nameResult.warnings.forEach(warning => validator.addWarning('name', warning));
    }
    
    // Validate age
    if (characterData.age !== undefined) {
        const ageResult = validateAge(characterData.age);
        if (!ageResult.valid) {
            ageResult.errors.forEach(error => validator.addError('age', error));
        } else {
            cleanData.age = ageResult.value;
        }
        ageResult.warnings.forEach(warning => validator.addWarning('age', warning));
    }
    
    // Validate selected tags
    if (characterData.selectedTags) {
        const tagsResult = validateTags(Array.from(characterData.selectedTags));
        if (!tagsResult.valid) {
            tagsResult.errors.forEach(error => validator.addError('selectedTags', error));
        } else {
            cleanData.selectedTags = new Set(tagsResult.value);
        }
        tagsResult.warnings.forEach(warning => validator.addWarning('selectedTags', warning));
    }
    
    // Validate custom tags
    if (characterData.customTags) {
        const customTagsResult = validateCustomTags(characterData.customTags);
        if (!customTagsResult.valid) {
            customTagsResult.errors.forEach(error => validator.addError('customTags', error));
        } else {
            cleanData.customTags = customTagsResult.value;
        }
        customTagsResult.warnings.forEach(warning => validator.addWarning('customTags', warning));
    }
    
    // Validate required fields
    const requiredResult = validateRequiredFields(characterData, characterType);
    if (!requiredResult.valid) {
        requiredResult.errors.forEach(error => validator.addError('required', error));
    }
    requiredResult.warnings.forEach(warning => validator.addWarning('required', warning));
    
    // Validate character type specific fields
    if (characterType === 'monster' && characterData.species) {
        if (!characterData.species || characterData.species === '') {
            validator.addError('species', 'Monster species is required');
        } else {
            cleanData.species = characterData.species;
        }
    }
    
    // Return comprehensive result
    return {
        ...validator.getSummary(),
        cleanData,
        characterType
    };
}

// === SECURITY VALIDATION ===

/**
 * Sanitize HTML content
 * @param {string} html - HTML content
 * @returns {string} - Sanitized content
 */
function sanitizeHTML(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
}

/**
 * Validate and sanitize user input
 * @param {string} input - User input
 * @param {string} type - Input type
 * @returns {Object} - Sanitization result
 */
function sanitizeInput(input, type = 'text') {
    const result = { valid: true, value: '', errors: [], warnings: [] };
    
    if (typeof input !== 'string') {
        result.valid = false;
        result.errors.push('Input must be a string');
        return result;
    }
    
    // Basic sanitization
    let sanitized = input.trim();
    
    // Remove potentially dangerous content
    sanitized = sanitized.replace(/<script[\s\S]*?<\/script>/gi, '');
    sanitized = sanitized.replace(/<iframe[\s\S]*?<\/iframe>/gi, '');
    sanitized = sanitized.replace(/javascript:/gi, '');
    sanitized = sanitized.replace(/data:text\/html/gi, '');
    
    // Type-specific validation
    switch (type) {
        case 'name':
            if (!VALIDATION_PATTERNS.NAME_PATTERN.test(sanitized)) {
                result.valid = false;
                result.errors.push('Invalid characters in name');
            }
            break;
        case 'tag':
            if (!VALIDATION_PATTERNS.TAG_PATTERN.test(sanitized)) {
                result.valid = false;
                result.errors.push('Invalid characters in tag');
            }
            break;
        default:
            if (!VALIDATION_PATTERNS.SAFE_TEXT.test(sanitized)) {
                result.warnings.push('Some characters were removed for safety');
                sanitized = sanitized.replace(/[^a-zA-Z0-9\s\-_.,!?()]/g, '');
            }
    }
    
    result.value = sanitized;
    return result;
}

// === VALIDATION DISPLAY HELPERS ===

/**
 * Create error message element
 * @param {string} message - Error message
 * @returns {Element} - Error element
 */
function createErrorElement(message) {
    return createElement('div', {
        className: 'error-message',
        role: 'alert'
    }, message);
}

/**
 * Create warning message element
 * @param {string} message - Warning message
 * @returns {Element} - Warning element
 */
function createWarningElement(message) {
    return createElement('div', {
        className: 'warning-message',
        role: 'alert'
    }, message);
}

/**
 * Display validation results in UI
 * @param {Object} validationResult - Validation result
 * @param {Element} container - Container element
 */
function displayValidationResults(validationResult, container) {
    if (!container) return;
    
    // Clear previous results
    container.innerHTML = '';
    
    // Display errors
    Object.entries(validationResult.errors).forEach(([field, errors]) => {
        errors.forEach(error => {
            const errorElement = createErrorElement(`${capitalize(field)}: ${error}`);
            container.appendChild(errorElement);
        });
    });
    
    // Display warnings
    Object.entries(validationResult.warnings).forEach(([field, warnings]) => {
        warnings.forEach(warning => {
            const warningElement = createWarningElement(`${capitalize(field)}: ${warning}`);
            container.appendChild(warningElement);
        });
    });
    
    // Add success message if no errors
    if (validationResult.valid && validationResult.errorCount === 0) {
        const successElement = createElement('div', {
            className: 'success-message'
        }, 'All validation checks passed!');
        container.appendChild(successElement);
    }
}

// === REAL-TIME VALIDATION ===

/**
 * Setup real-time validation for form fields
 * @param {Element} form - Form element
 * @param {string} characterType - Character type
 */
function setupRealTimeValidation(form, characterType) {
    if (!form) return;
    
    // Age validation
    const ageInput = form.querySelector('#age, [name="age"]');
    if (ageInput) {
        ageInput.addEventListener('blur', debounce(() => {
            const result = validateAge(ageInput.value);
            displayFieldValidation(ageInput, result);
        }, 300));
    }
    
    // Name validation
    const nameInput = form.querySelector('#character-name, [name="character-name"]');
    if (nameInput) {
        nameInput.addEventListener('blur', debounce(() => {
            const result = validateCharacterName(nameInput.value);
            displayFieldValidation(nameInput, result);
        }, 300));
    }
    
    // Custom tags validation
    const customTagsInput = form.querySelector('#custom-tags, [name="custom-tags"]');
    if (customTagsInput) {
        customTagsInput.addEventListener('blur', debounce(() => {
            const result = validateCustomTags(customTagsInput.value);
            displayFieldValidation(customTagsInput, result);
        }, 500));
    }
}

/**
 * Display validation for specific field
 * @param {Element} field - Form field element
 * @param {Object} validationResult - Validation result
 */
function displayFieldValidation(field, validationResult) {
    if (!field) return;
    
    // Remove existing validation messages
    const existingMessages = field.parentNode.querySelectorAll('.error-message, .warning-message, .success-message');
    existingMessages.forEach(msg => msg.remove());
    
    // Add field-specific styling
    field.classList.remove('field-error', 'field-warning', 'field-success');
    
    if (!validationResult.valid) {
        field.classList.add('field-error');
        validationResult.errors.forEach(error => {
            const errorElement = createErrorElement(error);
            field.parentNode.appendChild(errorElement);
        });
    }
    
    if (validationResult.warnings && validationResult.warnings.length > 0) {
        field.classList.add('field-warning');
        validationResult.warnings.forEach(warning => {
            const warningElement = createWarningElement(warning);
            field.parentNode.appendChild(warningElement);
        });
    }
    
    if (validationResult.valid && (!validationResult.warnings || validationResult.warnings.length === 0)) {
        field.classList.add('field-success');
    }
}

// === EXPORT VALIDATION MODULE ===

window.AkshoValidation = {
    // Core validation class
    AkshoValidator,
    
    // Field validation functions
    validateAge,
    validateCharacterName,
    validateTag,
    validateTags,
    validateCustomTags,
    validateRequiredFields,
    validateCharacter,
    
    // Security functions
    sanitizeHTML,
    sanitizeInput,
    
    // UI helpers
    createErrorElement,
    createWarningElement,
    displayValidationResults,
    displayFieldValidation,
    setupRealTimeValidation,
    
    // Constants
    VALIDATION_CONFIG,
    VALIDATION_PATTERNS
};