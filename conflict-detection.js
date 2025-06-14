/**
 * The Akshoverse Studio v1.0 - Smart Conflict Detection System
 * 
 * Provides intelligent conflict detection for:
 * - Species-specific feature conflicts
 * - Anatomical incompatibilities 
 * - Logical inconsistencies
 * - Tag combinations that don't make sense
 * - Suggestions for better alternatives
 */

// === CONFLICT DETECTION CONSTANTS ===

const CONFLICT_RULES = {
    // Species-specific anatomy conflicts
    ANATOMY_CONFLICTS: {
        // Aquatic species conflicts
        aquatic: {
            conflictsWith: ['fur on whole body', 'feathers on body', 'chitin plating'],
            species: ['mermaid', 'shark girl', 'whale girl', 'dolphin girl', 'octopus girl', 'jellyfish girl'],
            message: 'Aquatic species typically have smooth, scaled, or specialized skin rather than fur/feathers',
            suggestions: ['smooth skin', 'fish scales', 'shark skin', 'translucent skin', 'bioluminescent skin']
        },
        
        // Insect species conflicts
        insect: {
            conflictsWith: ['fur on whole body', 'mammalian tails', 'mammalian ears'],
            species: ['butterfly girl', 'moth girl', 'bee girl', 'ant girl', 'spider girl', 'beetle girl'],
            message: 'Insect species should have chitinous features rather than mammalian traits',
            suggestions: ['chitin exoskeleton', 'antenna ears', 'segmented tail', 'compound ear structures']
        },
        
        // Plant species conflicts
        plant: {
            conflictsWith: ['animal ears', 'animal tail', 'fur', 'scales', 'feathers'],
            species: ['dryad', 'flower girl', 'tree girl', 'vine girl', 'mushroom girl'],
            message: 'Plant species should have botanical features rather than animal traits',
            suggestions: ['bark skin', 'leaf hair', 'vine appendages', 'flower blooms', 'root hair']
        },
        
        // Slime species conflicts
        slime: {
            conflictsWith: ['fur', 'feathers', 'scales', 'solid textures'],
            species: ['slime girl', 'gel girl', 'ooze girl', 'jelly girl'],
            message: 'Slime species should have gelatinous properties rather than solid features',
            suggestions: ['translucent', 'gel consistency', 'flowing patterns', 'self-healing', 'shape-shifting']
        },
        
        // Mechanical species conflicts
        mechanical: {
            conflictsWith: ['biological features', 'fur', 'scales', 'organic skin'],
            species: ['robot girl', 'android girl', 'cyborg girl', 'clockwork girl', 'automaton girl'],
            message: 'Mechanical species should have artificial components rather than biological features',
            suggestions: ['metal plating', 'synthetic skin', 'clockwork movement', 'gear mechanisms']
        }
    },
    
    // Wing and flight conflicts
    FLIGHT_CONFLICTS: {
        multipleWings: {
            patterns: [
                ['angel wings', 'dragon wings'],
                ['bat wings', 'butterfly wings'],
                ['feathered wings', 'membrane wings']
            ],
            message: 'Multiple wing types selected - choose one primary wing type',
            suggestions: ['Choose the most important wing type for your character']
        },
        
        winglessConflicts: {
            conflictsWith: ['no wings'],
            incompatibleWith: ['angel wings', 'dragon wings', 'bat wings', 'butterfly wings', 'feathered wings'],
            message: 'No wings conflicts with wing selections',
            suggestions: ['Remove wing selections if character has no wings']
        }
    },
    
    // Size and proportion conflicts
    SIZE_CONFLICTS: {
        tailSizes: {
            patterns: [
                ['large tail', 'small tail'],
                ['big fluffy wolf tail', 'tiny mouse tail'],
                ['massive dragon wings', 'small angel wings']
            ],
            message: 'Conflicting size descriptors selected',
            suggestions: ['Choose consistent size descriptors for character features']
        }
    },
    
    // Color and texture conflicts
    COLOR_CONFLICTS: {
        furColors: {
            patterns: [
                ['white fur', 'black fur'],
                ['light brown fur', 'dark brown fur']
            ],
            message: 'Multiple conflicting fur colors selected',
            suggestions: ['Choose one primary fur color, or use "multicolored fur" for mixed colors']
        }
    },
    
    // Breathing conflicts
    BREATHING_CONFLICTS: {
        aquaticBreathing: {
            landSpecies: ['wolf girl', 'cat girl', 'dog girl', 'fox girl', 'bear girl'],
            conflictsWith: ['underwater breathing', 'gills', 'gill slits'],
            message: 'Land-based species should not have aquatic breathing features',
            suggestions: ['Air breathing only', 'Remove aquatic breathing features']
        },
        
        breathingTypes: {
            patterns: [
                ['underwater breathing', 'air breathing only'],
                ['gills', 'blowhole']
            ],
            message: 'Conflicting breathing methods selected',
            suggestions: ['Choose one breathing method, or use "dual breathing" for amphibious characters']
        }
    }
};

// Species categorization for conflict detection
const SPECIES_CATEGORIES = {
    aquatic: [
        'mermaid', 'shark girl', 'great white shark girl', 'hammerhead shark girl',
        'whale girl', 'blue whale girl', 'orca girl', 'dolphin girl',
        'octopus girl', 'squid girl', 'jellyfish girl', 'sea anemone girl',
        'starfish girl', 'seahorse girl', 'anglerfish girl'
    ],
    
    terrestrial_mammal: [
        'bunny girl', 'rabbit girl', 'cow girl', 'wolf girl', 'sheep girl',
        'mouse girl', 'rat girl', 'cat girl', 'dog girl', 'fox girl',
        'deer girl', 'bear girl', 'tiger girl', 'lion girl', 'horse girl'
    ],
    
    reptilian: [
        'dragon girl', 'snake girl', 'lamia', 'lizard girl', 'gecko girl',
        'chameleon girl', 'turtle girl', 'crocodile girl', 'alligator girl'
    ],
    
    avian: [
        'harpy', 'phoenix girl', 'owl girl', 'eagle girl', 'hawk girl',
        'crow girl', 'raven girl', 'swan girl', 'duck girl', 'penguin girl'
    ],
    
    insect: [
        'butterfly girl', 'moth girl', 'bee girl', 'wasp girl', 'ant girl',
        'spider girl', 'beetle girl', 'mantis girl', 'dragonfly girl'
    ],
    
    plant: [
        'dryad', 'flower girl', 'rose girl', 'tree girl', 'vine girl',
        'mushroom girl', 'cactus girl', 'venus flytrap girl'
    ],
    
    slime: [
        'slime girl', 'gel girl', 'ooze girl', 'jelly girl',
        'fire slime girl', 'ice slime girl', 'water slime girl'
    ],
    
    mechanical: [
        'robot girl', 'android girl', 'cyborg girl', 'clockwork girl',
        'automaton girl', 'golem girl', 'steampunk girl'
    ],
    
    supernatural: [
        'angel', 'demon girl', 'ghost girl', 'vampire girl', 'fairy',
        'elemental girl', 'phoenix girl', 'dragon girl'
    ]
};

// === CONFLICT DETECTION CLASS ===

class ConflictDetector {
    constructor() {
        this.conflicts = [];
        this.warnings = [];
        this.suggestions = [];
    }

    /**
     * Clear all detected conflicts
     */
    clear() {
        this.conflicts = [];
        this.warnings = [];
        this.suggestions = [];
    }

    /**
     * Add conflict detection result
     * @param {string} type - Conflict type
     * @param {string} message - Conflict message
     * @param {Array} conflictingTags - Tags causing conflict
     * @param {Array} suggestions - Suggested alternatives
     * @param {string} severity - Conflict severity (error, warning)
     */
    addConflict(type, message, conflictingTags, suggestions = [], severity = 'warning') {
        const conflict = {
            type,
            message,
            conflictingTags,
            suggestions,
            severity,
            timestamp: Date.now()
        };
        
        if (severity === 'error') {
            this.conflicts.push(conflict);
        } else {
            this.warnings.push(conflict);
        }
    }

    /**
     * Get all conflicts and warnings
     * @returns {Object} - All conflicts
     */
    getAllConflicts() {
        return {
            errors: this.conflicts,
            warnings: this.warnings,
            hasConflicts: this.conflicts.length > 0,
            hasWarnings: this.warnings.length > 0,
            totalCount: this.conflicts.length + this.warnings.length
        };
    }

    /**
     * Get conflicts by severity
     * @param {string} severity - Severity level
     * @returns {Array} - Filtered conflicts
     */
    getConflictsBySeverity(severity) {
        if (severity === 'error') {
            return this.conflicts;
        } else if (severity === 'warning') {
            return this.warnings;
        }
        return [...this.conflicts, ...this.warnings];
    }
}

// === CORE CONFLICT DETECTION FUNCTIONS ===

/**
 * Detect species-specific anatomy conflicts
 * @param {Set} selectedTags - Selected tags
 * @param {string} species - Selected species
 * @returns {Array} - Detected conflicts
 */
function detectAnatomyConflicts(selectedTags, species) {
    const conflicts = [];
    
    if (!species) return conflicts;
    
    // Find species category
    let speciesCategory = null;
    for (const [category, speciesList] of Object.entries(SPECIES_CATEGORIES)) {
        if (speciesList.includes(species.toLowerCase())) {
            speciesCategory = category;
            break;
        }
    }
    
    if (!speciesCategory) return conflicts;
    
    // Check for anatomy conflicts based on species category
    Object.entries(CONFLICT_RULES.ANATOMY_CONFLICTS).forEach(([conflictType, rule]) => {
        if (conflictType === speciesCategory || rule.species.includes(species.toLowerCase())) {
            const conflictingTags = rule.conflictsWith.filter(tag => 
                Array.from(selectedTags).some(selectedTag => 
                    selectedTag.toLowerCase().includes(tag.toLowerCase())
                )
            );
            
            if (conflictingTags.length > 0) {
                conflicts.push({
                    type: 'anatomy',
                    message: rule.message,
                    conflictingTags,
                    suggestions: rule.suggestions,
                    severity: 'warning'
                });
            }
        }
    });
    
    return conflicts;
}

/**
 * Detect wing and flight conflicts
 * @param {Set} selectedTags - Selected tags
 * @returns {Array} - Detected conflicts
 */
function detectFlightConflicts(selectedTags) {
    const conflicts = [];
    const tagArray = Array.from(selectedTags);
    
    // Check for multiple wing types
    const wingTypes = ['angel wings', 'dragon wings', 'bat wings', 'butterfly wings', 'feathered wings'];
    const selectedWings = wingTypes.filter(wing => 
        tagArray.some(tag => tag.toLowerCase().includes(wing.toLowerCase()))
    );
    
    if (selectedWings.length > 1) {
        conflicts.push({
            type: 'flight',
            message: 'Multiple wing types selected. Characters typically have one wing type.',
            conflictingTags: selectedWings,
            suggestions: ['Choose the primary wing type for your character'],
            severity: 'warning'
        });
    }
    
    // Check for "no wings" conflicts
    const hasNoWings = tagArray.some(tag => tag.toLowerCase().includes('no wings'));
    const hasWings = tagArray.some(tag => 
        wingTypes.some(wing => tag.toLowerCase().includes(wing.toLowerCase()))
    );
    
    if (hasNoWings && hasWings) {
        conflicts.push({
            type: 'flight',
            message: '"No wings" conflicts with wing selections.',
            conflictingTags: ['no wings', ...selectedWings],
            suggestions: ['Remove either "no wings" or the wing selections'],
            severity: 'error'
        });
    }
    
    return conflicts;
}

/**
 * Detect breathing method conflicts
 * @param {Set} selectedTags - Selected tags
 * @param {string} species - Selected species
 * @returns {Array} - Detected conflicts
 */
function detectBreathingConflicts(selectedTags, species) {
    const conflicts = [];
    const tagArray = Array.from(selectedTags);
    
    // Check aquatic breathing on land species
    if (species && SPECIES_CATEGORIES.terrestrial_mammal.includes(species.toLowerCase())) {
        const aquaticBreathing = ['underwater breathing', 'gills', 'gill slits'];
        const conflictingBreathing = aquaticBreathing.filter(breathing =>
            tagArray.some(tag => tag.toLowerCase().includes(breathing))
        );
        
        if (conflictingBreathing.length > 0) {
            conflicts.push({
                type: 'breathing',
                message: 'Land-based mammals should not have aquatic breathing features.',
                conflictingTags: conflictingBreathing,
                suggestions: ['air breathing only', 'Remove aquatic breathing features'],
                severity: 'warning'
            });
        }
    }
    
    // Check for conflicting breathing methods
    const breathingMethods = ['underwater breathing', 'air breathing only', 'dual breathing'];
    const selectedBreathing = breathingMethods.filter(method =>
        tagArray.some(tag => tag.toLowerCase().includes(method))
    );
    
    if (selectedBreathing.length > 1) {
        conflicts.push({
            type: 'breathing',
            message: 'Multiple conflicting breathing methods selected.',
            conflictingTags: selectedBreathing,
            suggestions: ['Choose one breathing method, or use "dual breathing" for amphibious characters'],
            severity: 'warning'
        });
    }
    
    return conflicts;
}

/**
 * Detect size and proportion conflicts
 * @param {Set} selectedTags - Selected tags
 * @returns {Array} - Detected conflicts
 */
function detectSizeConflicts(selectedTags) {
    const conflicts = [];
    const tagArray = Array.from(selectedTags);
    
    // Check for conflicting tail sizes
    const tailSizes = ['large tail', 'small tail', 'big fluffy', 'tiny'];
    const conflictingSizes = [];
    
    tagArray.forEach(tag => {
        tailSizes.forEach(size => {
            if (tag.toLowerCase().includes(size) && tag.toLowerCase().includes('tail')) {
                conflictingSizes.push(tag);
            }
        });
    });
    
    // Check for large vs small conflicts
    const hasLarge = conflictingSizes.some(tag => 
        tag.toLowerCase().includes('large') || tag.toLowerCase().includes('big')
    );
    const hasSmall = conflictingSizes.some(tag => 
        tag.toLowerCase().includes('small') || tag.toLowerCase().includes('tiny')
    );
    
    if (hasLarge && hasSmall) {
        conflicts.push({
            type: 'size',
            message: 'Conflicting size descriptors selected for tails.',
            conflictingTags: conflictingSizes,
            suggestions: ['Choose consistent size descriptors for character features'],
            severity: 'warning'
        });
    }
    
    return conflicts;
}

/**
 * Detect color conflicts
 * @param {Set} selectedTags - Selected tags
 * @returns {Array} - Detected conflicts
 */
function detectColorConflicts(selectedTags) {
    const conflicts = [];
    const tagArray = Array.from(selectedTags);
    
    // Check for conflicting fur colors
    const furColors = ['white fur', 'black fur', 'brown fur', 'golden fur'];
    const selectedFurColors = tagArray.filter(tag =>
        furColors.some(color => tag.toLowerCase().includes(color))
    );
    
    if (selectedFurColors.length > 1) {
        // Check if they're actually conflicting (white + black is conflict, but light brown + brown might not be)
        const hasOpposingColors = (
            selectedFurColors.some(tag => tag.toLowerCase().includes('white')) &&
            selectedFurColors.some(tag => tag.toLowerCase().includes('black'))
        ) || (
            selectedFurColors.some(tag => tag.toLowerCase().includes('light')) &&
            selectedFurColors.some(tag => tag.toLowerCase().includes('dark'))
        );
        
        if (hasOpposingColors) {
            conflicts.push({
                type: 'color',
                message: 'Conflicting fur colors selected.',
                conflictingTags: selectedFurColors,
                suggestions: ['Choose one primary fur color', 'Use "multicolored fur" for mixed colors'],
                severity: 'warning'
            });
        }
    }
    
    return conflicts;
}

/**
 * Detect logical inconsistencies
 * @param {Set} selectedTags - Selected tags
 * @param {string} species - Selected species
 * @returns {Array} - Detected conflicts
 */
function detectLogicalConflicts(selectedTags, species) {
    const conflicts = [];
    const tagArray = Array.from(selectedTags);
    
    // Check for scale conflicts with fur
    const hasScales = tagArray.some(tag => tag.toLowerCase().includes('scales'));
    const hasFur = tagArray.some(tag => tag.toLowerCase().includes('fur'));
    
    if (hasScales && hasFur) {
        conflicts.push({
            type: 'logical',
            message: 'Scales and fur typically don\'t occur together on the same character.',
            conflictingTags: tagArray.filter(tag => 
                tag.toLowerCase().includes('scales') || tag.toLowerCase().includes('fur')
            ),
            suggestions: ['Choose either scales or fur as the primary skin covering'],
            severity: 'warning'
        });
    }
    
    // Check for feathers with non-avian species
    const hasFeathers = tagArray.some(tag => tag.toLowerCase().includes('feathers'));
    if (hasFeathers && species && !SPECIES_CATEGORIES.avian.includes(species.toLowerCase())) {
        const isPhoenix = species.toLowerCase().includes('phoenix');
        const isDragon = species.toLowerCase().includes('dragon');
        
        if (!isPhoenix && !isDragon) {
            conflicts.push({
                type: 'logical',
                message: 'Feathers are typically found on bird species or mythological creatures.',
                conflictingTags: tagArray.filter(tag => tag.toLowerCase().includes('feathers')),
                suggestions: ['Consider if feathers are appropriate for this species', 'Use fur or scales instead'],
                severity: 'warning'
            });
        }
    }
    
    return conflicts;
}

// === MAIN CONFLICT DETECTION FUNCTION ===

/**
 * Perform comprehensive conflict detection
 * @param {Set} selectedTags - All selected tags
 * @param {string} species - Selected species
 * @param {Object} characterData - Additional character data
 * @returns {Object} - Comprehensive conflict detection results
 */
function detectConflicts(selectedTags, species = null, characterData = {}) {
    const detector = new ConflictDetector();
    
    // Run all conflict detection functions
    const anatomyConflicts = detectAnatomyConflicts(selectedTags, species);
    const flightConflicts = detectFlightConflicts(selectedTags);
    const breathingConflicts = detectBreathingConflicts(selectedTags, species);
    const sizeConflicts = detectSizeConflicts(selectedTags);
    const colorConflicts = detectColorConflicts(selectedTags);
    const logicalConflicts = detectLogicalConflicts(selectedTags, species);
    
    // Add all conflicts to detector
    [...anatomyConflicts, ...flightConflicts, ...breathingConflicts, 
     ...sizeConflicts, ...colorConflicts, ...logicalConflicts].forEach(conflict => {
        detector.addConflict(
            conflict.type,
            conflict.message,
            conflict.conflictingTags,
            conflict.suggestions,
            conflict.severity
        );
    });
    
    return detector.getAllConflicts();
}

/**
 * Get species-specific suggestions
 * @param {string} species - Selected species
 * @returns {Array} - Suggested tags for species
 */
function getSpeciesSuggestions(species) {
    if (!species) return [];
    
    const suggestions = [];
    
    // Find species category and provide suggestions
    for (const [category, speciesList] of Object.entries(SPECIES_CATEGORIES)) {
        if (speciesList.includes(species.toLowerCase())) {
            switch (category) {
                case 'aquatic':
                    suggestions.push(
                        'fish scales', 'smooth skin', 'webbed fingers', 'gills',
                        'underwater breathing', 'translucent skin', 'bioluminescent patterns'
                    );
                    break;
                case 'terrestrial_mammal':
                    suggestions.push(
                        'fur on body', 'animal ears', 'animal tail', 'whiskers',
                        'paw pads', 'natural fur patterns'
                    );
                    break;
                case 'insect':
                    suggestions.push(
                        'chitin exoskeleton', 'antenna ears', 'compound eyes',
                        'transparent wings', 'segmented body'
                    );
                    break;
                case 'plant':
                    suggestions.push(
                        'bark skin', 'leaf hair', 'flower blooms', 'vine appendages',
                        'photosynthetic skin', 'seasonal changes'
                    );
                    break;
                case 'slime':
                    suggestions.push(
                        'translucent', 'gel consistency', 'shape-shifting',
                        'self-healing', 'flowing patterns'
                    );
                    break;
            }
            break;
        }
    }
    
    return suggestions;
}

// === UI CONFLICT DISPLAY FUNCTIONS ===

/**
 * Create conflict alert element
 * @param {Object} conflict - Conflict object
 * @returns {Element} - Conflict alert element
 */
function createConflictAlert(conflict) {
    const alertClass = conflict.severity === 'error' ? 'error-message' : 'conflict-alert';
    
    const alertElement = createElement('div', {
        className: alertClass,
        role: 'alert'
    });
    
    const titleElement = createElement('h4', {}, 
        `${conflict.severity === 'error' ? '❌' : '⚠️'} ${conflict.type.toUpperCase()} Conflict`
    );
    
    const messageElement = createElement('p', {}, conflict.message);
    
    alertElement.appendChild(titleElement);
    alertElement.appendChild(messageElement);
    
    if (conflict.conflictingTags.length > 0) {
        const tagsElement = createElement('p', {}, 
            `Conflicting tags: ${conflict.conflictingTags.join(', ')}`
        );
        alertElement.appendChild(tagsElement);
    }
    
    if (conflict.suggestions.length > 0) {
        const suggestionsTitle = createElement('h5', {}, 'Suggestions:');
        const suggestionsList = createElement('ul', { className: 'conflict-suggestions' });
        
        conflict.suggestions.forEach(suggestion => {
            const listItem = createElement('li', {}, suggestion);
            suggestionsList.appendChild(listItem);
        });
        
        alertElement.appendChild(suggestionsTitle);
        alertElement.appendChild(suggestionsList);
    }
    
    return alertElement;
}

/**
 * Display conflict detection results in UI
 * @param {Object} conflictResults - Conflict detection results
 * @param {Element} container - Container element
 */
function displayConflictResults(conflictResults, container) {
    if (!container) return;
    
    // Clear previous results
    container.innerHTML = '';
    
    if (!conflictResults.hasConflicts && !conflictResults.hasWarnings) {
        const successElement = createElement('div', {
            className: 'success-message'
        }, '✅ No conflicts detected! Your character combination looks good.');
        container.appendChild(successElement);
        return;
    }
    
    // Display errors first
    conflictResults.errors.forEach(conflict => {
        const alertElement = createConflictAlert(conflict);
        container.appendChild(alertElement);
    });
    
    // Display warnings
    conflictResults.warnings.forEach(conflict => {
        const alertElement = createConflictAlert(conflict);
        container.appendChild(alertElement);
    });
    
    // Add summary
    const summaryElement = createElement('div', {
        className: 'conflict-summary'
    }, `Found ${conflictResults.totalCount} potential conflicts. Review the suggestions above to improve your character design.`);
    container.appendChild(summaryElement);
}

/**
 * Setup real-time conflict detection
 * @param {Function} updateCallback - Callback to call when conflicts are detected
 */
function setupRealTimeConflictDetection(updateCallback) {
    return debounce((selectedTags, species, characterData) => {
        const conflicts = detectConflicts(selectedTags, species, characterData);
        updateCallback(conflicts);
    }, 500);
}

// === EXPORT CONFLICT DETECTION MODULE ===

window.AkshoConflictDetection = {
    // Core classes
    ConflictDetector,
    
    // Detection functions
    detectConflicts,
    detectAnatomyConflicts,
    detectFlightConflicts,
    detectBreathingConflicts,
    detectSizeConflicts,
    detectColorConflicts,
    detectLogicalConflicts,
    
    // Helper functions
    getSpeciesSuggestions,
    
    // UI functions
    createConflictAlert,
    displayConflictResults,
    setupRealTimeConflictDetection,
    
    // Constants
    CONFLICT_RULES,
    SPECIES_CATEGORIES
};