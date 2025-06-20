/**
 * The Akshoverse Studio v1.0 - Main Application Logic
 * 
 * Coordinates all modules and provides core functionality:
 * - Application state management
 * - Tab switching and navigation
 * - Form initialization and management
 * - Output generation and display
 * - Event handling and user interactions
 * - Auto-save and state persistence
 */

// === APPLICATION STATE ===

const AppState = {
    // Current application state
    currentTab: 'home',
    selectedTags: new Set(),
    characterData: {},
    
    // Feature flags and settings
    settings: {
        autoSave: true,
        realTimeValidation: true,
        conflictDetection: true,
        autoSuggestions: true
    },
    
    // UI state
    ui: {
        initialized: false,
        loadingStates: new Set(),
        errors: new Map(),
        warnings: new Map()
    },
    
    // Performance tracking
    performance: {
        lastUpdate: 0,
        updateCount: 0,
        averageUpdateTime: 0
    }
};

// === CORE APPLICATION CLASS ===

class AkshoStudio {
    constructor() {
        this.state = AppState;
        this.eventListeners = new Map();
        this.validationResults = null;
        this.conflictResults = null;
        this.updateQueue = [];
        
        // Bind methods to maintain context
        this.updateOutput = this.updateOutput.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleTabSwitch = this.handleTabSwitch.bind(this);
    }

    /**
     * Initialize the application
     */
    async initialize() {
        try {
            console.log('🚀 Initializing The Akshoverse Studio v1.0...');
            
            // Initialize modules in order
            await this.initializeModules();
            
            // Setup event listeners
            this.setupEventListeners();
            
            // Load saved state
            this.loadSavedState();
            
            // Initialize forms
            this.initializeForms();
            
            // Set default tab
            this.switchTab('home');
            
            // Mark as initialized
            this.state.ui.initialized = true;
            
            console.log('✅ The Akshoverse Studio initialized successfully');
            
        } catch (error) {
            console.error('❌ Failed to initialize The Akshoverse Studio:', error);
            this.handleInitializationError(error);
        }
    }

    /**
     * Initialize all modules
     */
    async initializeModules() {
        const modules = [
            { name: 'Utils', module: window.AkshoUtils },
            { name: 'Validation', module: window.AkshoValidation },
            { name: 'ConflictDetection', module: window.AkshoConflictDetection },
            { name: 'HumanData', module: window.AkshoHumanData },
            { name: 'MonsterData', module: window.AkshoMonsterData }
        ];
        
        for (const { name, module } of modules) {
            if (!module) {
                throw new Error(`Module ${name} not found. Please check that all script files are loaded.`);
            }
            console.log(`✓ ${name} module loaded`);
        }
    }

    /**
     * Setup global event listeners
     */
    setupEventListeners() {
        // Tab switching
        this.addEventListeners('.nav-pill', 'click', (event) => {
            const tabName = event.target.dataset.tab;
            if (tabName) {
                this.switchTab(tabName);
            }
        });
        
        // Toggle button handling
        this.addEventListeners('.toggle-btn', 'click', (event) => {
            this.handleToggleClick(event.target);
        });
        
        // Dropdown changes
        this.addEventListeners('select', 'change', (event) => {
            this.handleDropdownChange(event.target);
        });
        
        // Text input changes
        this.addEventListeners('input[type="text"], input[type="number"], textarea', 'input', 
            debounce((event) => {
                this.handleTextInputChange(event.target);
            }, 300)
        );
        
        // Copy button
        this.addEventListeners('.copy-btn', 'click', () => {
            this.copyToClipboard();
        });
        
        // Feature card clicks
        this.addEventListeners('.feature-card.available', 'click', (event) => {
            this.handleFeatureCardClick(event.target);
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (event) => {
            this.handleKeyboardShortcuts(event);
        });
        
        // Auto-save on visibility change
        document.addEventListener('visibilitychange', () => {
            if (document.hidden && this.state.settings.autoSave) {
                this.autoSave();
            }
        });
        
        // Prevent accidental page unload with unsaved changes
        window.addEventListener('beforeunload', (event) => {
            if (this.hasUnsavedChanges()) {
                event.preventDefault();
                event.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
                return event.returnValue;
            }
        });
    }

    /**
     * Add event listeners with cleanup tracking
     * @param {string} selector - CSS selector
     * @param {string} event - Event name
     * @param {Function} handler - Event handler
     */
    addEventListeners(selector, event, handler) {
        const elements = document.querySelectorAll(selector);
        const listeners = [];
        
        elements.forEach(element => {
            element.addEventListener(event, handler);
            listeners.push(() => element.removeEventListener(event, handler));
        });
        
        // Store cleanup functions
        if (!this.eventListeners.has(selector)) {
            this.eventListeners.set(selector, []);
        }
        this.eventListeners.get(selector).push(...listeners);
    }

    /**
     * Initialize character creation forms
     */
    initializeForms() {
        try {
            // Initialize human form
            if (window.AkshoHumanData) {
                window.AkshoHumanData.initializeHumanForm();
                console.log('✓ Human form initialized');
            }
            
            // Initialize monster form
            if (window.AkshoMonsterData) {
                window.AkshoMonsterData.initializeMonsterForm();
                console.log('✓ Monster form initialized');
            }
            
            // Re-setup event listeners for dynamically created elements
            this.setupDynamicEventListeners();
            
        } catch (error) {
            console.error('Failed to initialize forms:', error);
        }
    }

    /**
     * Setup event listeners for dynamically created form elements
     */
    setupDynamicEventListeners() {
        // This will be called after forms are created
        setTimeout(() => {
            // Re-add listeners for new toggle buttons
            const newToggles = document.querySelectorAll('.toggle-btn:not([data-listener-added])');
            newToggles.forEach(toggle => {
                toggle.addEventListener('click', (event) => {
                    this.handleToggleClick(event.target);
                });
                toggle.dataset.listenerAdded = 'true';
            });
            
            // Re-add listeners for new dropdowns
            const newSelects = document.querySelectorAll('select:not([data-listener-added])');
            newSelects.forEach(select => {
                select.addEventListener('change', (event) => {
                    this.handleDropdownChange(event.target);
                });
                select.dataset.listenerAdded = 'true';
            });
            
            // Re-add listeners for new inputs
            const newInputs = document.querySelectorAll('input:not([data-listener-added]), textarea:not([data-listener-added])');
            newInputs.forEach(input => {
                input.addEventListener('input', debounce((event) => {
                    this.handleTextInputChange(event.target);
                }, 300));
                input.dataset.listenerAdded = 'true';
            });
        }, 100);
    }

    /**
     * Switch between tabs
     * @param {string} tabName - Name of tab to switch to
     */
    switchTab(tabName) {
        try {
            // Update active pill
            document.querySelectorAll('.nav-pill').forEach(pill => {
                pill.classList.remove('active');
            });
            
            const activePill = document.querySelector(`[data-tab="${tabName}"]`);
            if (activePill) {
                activePill.classList.add('active');
            }
            
            // Switch tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            const activeTab = document.getElementById(`${tabName}-tab`);
            if (activeTab) {
                activeTab.classList.add('active');
            }
            
            // Update state
            this.state.currentTab = tabName;
            
            // Handle tab-specific logic
            this.handleTabSwitch(tabName);
            
            // Auto-save state
            if (this.state.settings.autoSave) {
                this.autoSave();
            }
            
        } catch (error) {
            console.error('Failed to switch tab:', error);
        }
    }

    /**
     * Handle tab switch logic
     * @param {string} tabName - Name of the switched tab
     */
    handleTabSwitch(tabName) {
        // Update output for creation tabs
        if (tabName === 'human' || tabName === 'monster') {
            this.updateOutput();
        }
        
        // Setup tab-specific features
        switch (tabName) {
            case 'human':
                this.setupHumanTabFeatures();
                break;
            case 'monster':
                this.setupMonsterTabFeatures();
                break;
            case 'home':
                this.setupHomeTabFeatures();
                break;
        }
    }

    /**
     * Setup human tab specific features
     */
    setupHumanTabFeatures() {
        // Enable human-specific validation
        if (this.state.settings.realTimeValidation) {
            this.enableRealTimeValidation('human');
        }
    }

    /**
     * Setup monster tab specific features
     */
    setupMonsterTabFeatures() {
        // Enable monster-specific validation and conflict detection
        if (this.state.settings.realTimeValidation) {
            this.enableRealTimeValidation('monster');
        }
        
        if (this.state.settings.conflictDetection) {
            this.enableConflictDetection();
        }
    }

    /**
     * Setup home tab features
     */
    setupHomeTabFeatures() {
        // Update statistics
        this.updateHomeStatistics();
    }

    /**
     * Enable real-time validation for character type
     * @param {string} characterType - Type of character (human/monster)
     */
    enableRealTimeValidation(characterType) {
        if (window.AkshoValidation) {
            const form = document.getElementById(`${characterType}-tab`);
            if (form) {
                window.AkshoValidation.setupRealTimeValidation(form, characterType);
            }
        }
    }

    /**
     * Enable conflict detection
     */
    enableConflictDetection() {
        if (window.AkshoConflictDetection) {
            this.conflictChecker = window.AkshoConflictDetection.setupRealTimeConflictDetection(
                (conflicts) => {
                    this.conflictResults = conflicts;
                    this.displayConflicts(conflicts);
                }
            );
        }
    }

    /**
     * Handle toggle button clicks
     * @param {Element} toggleBtn - Toggle button element
     */
    handleToggleClick(toggleBtn) {
        if (!toggleBtn.classList.contains('toggle-btn')) return;
        
        // Toggle active state
        toggleBtn.classList.toggle('active');
        
        // Update selected tags
        const value = toggleBtn.dataset.value;
        if (toggleBtn.classList.contains('active')) {
            this.state.selectedTags.add(value);
        } else {
            this.state.selectedTags.delete(value);
        }
        
        // Trigger form change handling
        this.handleFormChange();
    }

    /**
     * Handle dropdown changes
     * @param {Element} dropdown - Dropdown element
     */
    handleDropdownChange(dropdown) {
        // Remove previous value
        const oldValue = dropdown.dataset.previousValue;
        if (oldValue) {
            this.state.selectedTags.delete(oldValue);
        }
        
        // Add new value
        if (dropdown.value) {
            this.state.selectedTags.add(dropdown.value);
            dropdown.dataset.previousValue = dropdown.value;
        }
        
        // Trigger form change handling
        this.handleFormChange();
    }

    /**
     * Handle text input changes
     * @param {Element} input - Input element
     */
    handleTextInputChange(input) {
        // Validate input if real-time validation is enabled
        if (this.state.settings.realTimeValidation) {
            this.validateField(input);
        }
        
        // Trigger form change handling
        this.handleFormChange();
    }

    /**
     * Handle form changes (debounced)
     */
    handleFormChange = debounce(() => {
        // Update output
        this.updateOutput();
        
        // Run conflict detection if enabled
        if (this.state.settings.conflictDetection && this.state.currentTab === 'monster') {
            this.runConflictDetection();
        }
        
        // Auto-save if enabled
        if (this.state.settings.autoSave) {
            this.autoSave();
        }
    }, 150);

    /**
     * Update output display
     */
    updateOutput() {
        if (this.state.currentTab !== 'human' && this.state.currentTab !== 'monster') {
            return;
        }
        
        const startTime = performance.now();
        
        try {
            const outputText = document.getElementById('output-text');
            const summaryText = document.getElementById('summary-text');
            
            if (!outputText || !summaryText) return;
            
            // Get character data
            const characterData = this.getCurrentCharacterData();
            
            // Get custom tags
            const customTagsInput = this.state.currentTab === 'human' ? 
                document.getElementById('custom-tags') : 
                document.getElementById('monster-custom-tags');
            
            let customTags = [];
            if (customTagsInput && customTagsInput.value.trim()) {
                customTags = parseTags(customTagsInput.value);
            }
            
            // Get character name
            const nameInput = document.getElementById('character-name');
            const characterName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : '';
            
            // Combine all tags
            const allTags = [...this.state.selectedTags, ...customTags];
            
            // Update UI
            if (allTags.length === 0 && !characterName) {
                outputText.textContent = 'Select options to generate tags...';
                summaryText.textContent = 'Character details will appear here...';
                return;
            }
            
            // Generate output
            const tagString = allTags.join(', ');
            outputText.textContent = tagString;
            
            // Generate summary
            let summary = '';
            if (characterName) {
                summary += `Name: ${characterName}\n`;
            }
            summary += `Type: ${capitalize(this.state.currentTab)} Character\n`;
            summary += `Tags: ${allTags.length}\n`;
            
            if (characterData.species) {
                summary += `Species: ${characterData.species}\n`;
            }
            
            if (allTags.length > 0) {
                summary += `\nSelected Features:\n${allTags.map(tag => `• ${tag}`).join('\n')}`;
            }
            
            summaryText.textContent = summary;
            
            // Track performance
            const endTime = performance.now();
            this.updatePerformanceMetrics(endTime - startTime);
            
        } catch (error) {
            console.error('Failed to update output:', error);
        }
    }

    /**
     * Get current character data based on active tab
     * @returns {Object} Character data
     */
    getCurrentCharacterData() {
        switch (this.state.currentTab) {
            case 'human':
                return window.AkshoHumanData ? window.AkshoHumanData.getHumanCharacterData() : {};
            case 'monster':
                return window.AkshoMonsterData ? window.AkshoMonsterData.getMonsterCharacterData() : {};
            default:
                return {};
        }
    }

    /**
     * Run conflict detection
     */
    runConflictDetection() {
        if (!window.AkshoConflictDetection || this.state.currentTab !== 'monster') {
            return;
        }
        
        try {
            const characterData = this.getCurrentCharacterData();
            const conflicts = window.AkshoConflictDetection.detectConflicts(
                characterData.selectedTags,
                characterData.species,
                characterData
            );
            
            this.conflictResults = conflicts;
            this.displayConflicts(conflicts);
            
        } catch (error) {
            console.error('Failed to run conflict detection:', error);
        }
    }

    /**
     * Display conflict detection results
     * @param {Object} conflicts - Conflict results
     */
    displayConflicts(conflicts) {
        if (window.AkshoMonsterData) {
            window.AkshoMonsterData.displayMonsterConflicts(conflicts);
        }
    }

    /**
     * Validate individual field
     * @param {Element} field - Field to validate
     */
    validateField(field) {
        if (!window.AkshoValidation) return;
        
        let result = null;
        
        switch (field.type) {
            case 'number':
                if (field.id === 'age') {
                    result = window.AkshoValidation.validateAge(field.value);
                }
                break;
            case 'text':
                if (field.id === 'character-name') {
                    result = window.AkshoValidation.validateCharacterName(field.value);
                }
                break;
            case 'textarea':
                if (field.id.includes('custom-tags')) {
                    result = window.AkshoValidation.validateCustomTags(field.value);
                }
                break;
        }
        
        if (result) {
            window.AkshoValidation.displayFieldValidation(field, result);
        }
    }

    /**
     * Copy tags to clipboard
     */
    async copyToClipboard() {
        try {
            const outputText = document.getElementById('output-text');
            const text = outputText.textContent;
            
            if (text === 'Select options to generate tags...') {
                return;
            }
            
            await navigator.clipboard.writeText(text);
            
            // Show success feedback
            const btn = document.querySelector('.copy-btn');
            const originalText = btn.textContent;
            btn.textContent = 'Copied!';
            btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)';
            }, 2000);
            
        } catch (error) {
            console.error('Failed to copy to clipboard:', error);
            
            // Fallback for older browsers
            this.fallbackCopyToClipboard();
        }
    }

    /**
     * Fallback clipboard copy for older browsers
     */
    fallbackCopyToClipboard() {
        const outputText = document.getElementById('output-text');
        const textArea = document.createElement('textarea');
        textArea.value = outputText.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            console.log('Text copied using fallback method');
        } catch (error) {
            console.error('Fallback copy failed:', error);
        }
        
        document.body.removeChild(textArea);
    }

    /**
     * Handle feature card clicks
     * @param {Element} card - Feature card element
     */
    handleFeatureCardClick(card) {
        const onclick = card.getAttribute('onclick');
        if (onclick) {
            try {
                // Execute the onclick function safely
                eval(onclick);
            } catch (error) {
                console.error('Failed to execute feature card onclick:', error);
            }
        }
    }

    /**
     * Handle keyboard shortcuts
     * @param {KeyboardEvent} event - Keyboard event
     */
    handleKeyboardShortcuts(event) {
        // Tab switching with number keys
        if (event.key >= '1' && event.key <= '8') {
            const tabButtons = document.querySelectorAll('.nav-pill');
            const index = parseInt(event.key) - 1;
            if (tabButtons[index]) {
                tabButtons[index].click();
            }
            return;
        }
        
        // Copy shortcut (Ctrl+C)
        if (event.ctrlKey && event.key === 'c' && this.isOutputFocused()) {
            event.preventDefault();
            this.copyToClipboard();
            return;
        }
        
        // Save shortcut (Ctrl+S)
        if (event.ctrlKey && event.key === 's') {
            event.preventDefault();
            this.autoSave();
            return;
        }
    }

    /**
     * Check if output area is focused
     * @returns {boolean} Whether output is focused
     */
    isOutputFocused() {
        const activeElement = document.activeElement;
        return activeElement && activeElement.closest('.output-panel');
    }

    /**
     * Auto-save current state
     */
    autoSave() {
        try {
            const state = {
                currentTab: this.state.currentTab,
                selectedTags: Array.from(this.state.selectedTags),
                characterData: this.getCurrentCharacterData(),
                timestamp: Date.now()
            };
            
            saveToStorage('akshoverse-studio-state', state);
            console.log('🔄 Auto-saved application state');
            
        } catch (error) {
            console.error('Failed to auto-save:', error);
        }
    }

    /**
     * Load saved state
     */
    loadSavedState() {
        try {
            const savedState = loadFromStorage('akshoverse-studio-state');
            if (savedState && savedState.timestamp) {
                // Check if saved state is recent (within 24 hours)
                const ageHours = (Date.now() - savedState.timestamp) / (1000 * 60 * 60);
                if (ageHours < 24) {
                    this.state.selectedTags = new Set(savedState.selectedTags || []);
                    console.log('📥 Loaded saved application state');
                }
            }
        } catch (error) {
            console.error('Failed to load saved state:', error);
        }
    }

    /**
     * Check if there are unsaved changes
     * @returns {boolean} Whether there are unsaved changes
     */
    hasUnsavedChanges() {
        // Check if there are selected tags or form data
        return this.state.selectedTags.size > 0 || 
               Object.keys(this.getCurrentCharacterData()).length > 0;
    }

    /**
     * Update performance metrics
     * @param {number} updateTime - Time taken for update in milliseconds
     */
    updatePerformanceMetrics(updateTime) {
        this.state.performance.lastUpdate = updateTime;
        this.state.performance.updateCount++;
        
        // Calculate rolling average
        const count = this.state.performance.updateCount;
        const currentAvg = this.state.performance.averageUpdateTime;
        this.state.performance.averageUpdateTime = ((currentAvg * (count - 1)) + updateTime) / count;
        
        // Log performance warnings
        if (updateTime > 50) {
            console.warn(`Slow update detected: ${updateTime.toFixed(2)}ms`);
        }
    }

    /**
     * Update home tab statistics
     */
    updateHomeStatistics() {
        // Update statistics on home page
        const stats = {
            humanTags: Object.keys(window.AkshoHumanData?.HUMAN_DATA || {}).length,
            monsterSpecies: this.countMonsterSpecies(),
            totalFeatures: this.countTotalFeatures()
        };
        
        // Update stat displays
        const statElements = {
            human: document.querySelector('.stat-item:nth-child(1) .stat-number'),
            monster: document.querySelector('.stat-item:nth-child(2) .stat-number'),
            modes: document.querySelector('.stat-item:nth-child(3) .stat-number')
        };
        
        if (statElements.human) statElements.human.textContent = '312+';
        if (statElements.monster) statElements.monster.textContent = '247+';
        if (statElements.modes) statElements.modes.textContent = '8';
    }

    /**
     * Count monster species
     * @returns {number} Number of monster species
     */
    countMonsterSpecies() {
        if (!window.AkshoMonsterData?.MONSTER_SPECIES_DATA) return 247;
        
        let count = 0;
        Object.values(window.AkshoMonsterData.MONSTER_SPECIES_DATA).forEach(category => {
            Object.values(category.subcategories).forEach(subcategory => {
                count += subcategory.species.length;
            });
        });
        return count;
    }

    /**
     * Count total features
     * @returns {number} Total number of features
     */
    countTotalFeatures() {
        // This would count all available features across all categories
        return 1000; // Placeholder
    }

    /**
     * Handle initialization errors
     * @param {Error} error - Initialization error
     */
    handleInitializationError(error) {
        // Display error message to user
        const container = document.querySelector('.container');
        if (container) {
            container.innerHTML = `
                <div class="error-container" style="padding: 40px; text-align: center;">
                    <h2 style="color: #ef4444; margin-bottom: 20px;">⚠️ Initialization Error</h2>
                    <p style="color: #6b7280; margin-bottom: 20px;">
                        The Akshoverse Studio failed to initialize properly. Please refresh the page and try again.
                    </p>
                    <p style="color: #9ca3af; font-size: 14px;">
                        Error: ${error.message}
                    </p>
                    <button onclick="location.reload()" style="
                        margin-top: 20px;
                        padding: 12px 24px;
                        background: #8b5cf6;
                        color: white;
                        border: none;
                        border-radius: 8px;
                        cursor: pointer;
                    ">
                        🔄 Refresh Page
                    </button>
                </div>
            `;
        }
    }

    /**
     * Cleanup resources and event listeners
     */
    cleanup() {
        // Remove all event listeners
        this.eventListeners.forEach(listeners => {
            listeners.forEach(cleanup => cleanup());
        });
        this.eventListeners.clear();
        
        // Clear any pending updates
        this.updateQueue = [];
        
        console.log('🧹 Application cleanup completed');
    }
}

// === GLOBAL FUNCTIONS (for backward compatibility) ===

/**
 * Switch tab (global function for onclick handlers)
 * @param {string} tabName - Tab name to switch to
 */
function switchTab(tabName) {
    if (window.akshoStudio) {
        window.akshoStudio.switchTab(tabName);
    }
}

/**
 * Copy to clipboard (global function for onclick handlers)
 */
function copyToClipboard() {
    if (window.akshoStudio) {
        window.akshoStudio.copyToClipboard();
    }
}

// === APPLICATION INITIALIZATION ===

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', async function() {
    console.log('🌟 The Akshoverse Studio v1.0 - Professional Creative Studio Platform');
    
    try {
        // Create global application instance
        window.akshoStudio = new AkshoStudio();
        
        // Initialize the application
        await window.akshoStudio.initialize();
        
        // Setup global error handling
        window.addEventListener('error', (event) => {
            console.error('Global error:', event.error);
        });
        
        window.addEventListener('unhandledrejection', (event) => {
            console.error('Unhandled promise rejection:', event.reason);
        });
        
    } catch (error) {
        console.error('Failed to initialize application:', error);
    }
});

// === EXPORT FOR DEBUGGING ===

window.AkshoStudio = AkshoStudio;
window.AppState = AppState;