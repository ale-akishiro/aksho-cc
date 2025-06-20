/**
 * The Akshoverse Studio - Dynamic Versioning System
 * 
 * Handles automatic version management with semantic versioning
 * Format: TE vMAJOR.MINOR.PATCH (testing) or vMAJOR.MINOR.PATCH (main)
 */

class VersionManager {
    constructor() {
        this.currentVersion = { major: 1, minor: 1, patch: 4 };
        this.versionHistory = [];
        this.autoIncrement = true;
        this.currentBranch = this.detectBranch();
        this.lastCommitHash = null;
    }

    /**
     * Detect current branch (testing vs main)
     */
    detectBranch() {
        // In a real environment, this could be set by build process
        // For now, we'll assume testing environment unless explicitly set
        return localStorage.getItem('aksho-branch') || 'testing';
    }

    /**
     * Get formatted version string based on branch
     */
    getVersionString() {
        const { major, minor, patch } = this.currentVersion;
        const prefix = this.currentBranch === 'testing' ? 'TE v' : 'v';
        return `${prefix}${major}.${minor}.${patch}`;
    }

    /**
     * Increment version based on change type
     */
    incrementVersion(type = 'patch') {
        switch (type.toLowerCase()) {
            case 'major':
                this.currentVersion.major++;
                this.currentVersion.minor = 0;
                this.currentVersion.patch = 0;
                break;
            case 'minor':
                this.currentVersion.minor++;
                this.currentVersion.patch = 0;
                break;
            case 'patch':
            default:
                this.currentVersion.patch++;
                break;
        }
        
        this.updateVersionDisplay();
        this.saveVersionHistory();
    }

    /**
     * Set specific version
     */
    setVersion(major, minor, patch) {
        this.currentVersion = { major, minor, patch };
        this.updateVersionDisplay();
        this.saveVersionHistory();
    }

    /**
     * Update version display in DOM
     */
    updateVersionDisplay() {
        const versionBadge = document.querySelector('.version-badge');
        if (versionBadge) {
            versionBadge.textContent = this.getVersionString();
        }

        // Update page title
        const title = document.querySelector('title');
        if (title) {
            title.textContent = `Akshoverse Studio ${this.getVersionString()}`;
        }
    }

    /**
     * Save version history to localStorage
     */
    saveVersionHistory() {
        const versionData = {
            current: this.currentVersion,
            history: this.versionHistory,
            lastUpdated: new Date().toISOString()
        };
        
        localStorage.setItem('aksho-version-data', JSON.stringify(versionData));
    }

    /**
     * Load version data from localStorage
     */
    loadVersionData() {
        try {
            const saved = localStorage.getItem('aksho-version-data');
            if (saved) {
                const data = JSON.parse(saved);
                this.currentVersion = data.current || this.currentVersion;
                this.versionHistory = data.history || [];
            }
        } catch (error) {
            console.warn('Could not load version data:', error);
        }
    }

    /**
     * Initialize version system
     */
    initialize() {
        this.loadVersionData();
        this.updateVersionDisplay();
        
        // Auto-detect changes and increment patch version
        if (this.autoIncrement) {
            this.setupAutoIncrement();
        }
    }

    /**
     * Setup automatic version incrementing based on development activity
     */
    setupAutoIncrement() {
        // Check for version updates based on localStorage changes
        const CHECK_INTERVAL = 10000; // 10 seconds
        
        // Monitor for manual version increments or external version changes
        setInterval(() => {
            this.checkForVersionUpdates();
        }, CHECK_INTERVAL);
        
        // Set up commit-based versioning (simulated via localStorage for demo)
        this.setupCommitBasedVersioning();
    }

    /**
     * Setup commit-based versioning system
     */
    setupCommitBasedVersioning() {
        // In a real environment, this would connect to git hooks
        // For now, we'll simulate with localStorage and manual triggers
        
        const checkCommits = () => {
            const currentCommit = localStorage.getItem('aksho-latest-commit');
            const lastKnownCommit = localStorage.getItem('aksho-last-processed-commit');
            
            if (currentCommit && currentCommit !== lastKnownCommit) {
                // New commit detected - increment patch version
                this.incrementVersion('patch');
                this.addVersionHistoryEntry('patch', `Commit: ${currentCommit.substring(0, 8)}`);
                localStorage.setItem('aksho-last-processed-commit', currentCommit);
            }
        };
        
        // Check for commits every 5 seconds
        setInterval(checkCommits, 5000);
    }

    /**
     * Check for external version updates
     */
    checkForVersionUpdates() {
        try {
            const savedData = localStorage.getItem('aksho-version-data');
            if (savedData) {
                const data = JSON.parse(savedData);
                const savedVersion = data.current;
                
                // Check if version was updated externally
                if (savedVersion && (
                    savedVersion.major !== this.currentVersion.major ||
                    savedVersion.minor !== this.currentVersion.minor ||
                    savedVersion.patch !== this.currentVersion.patch
                )) {
                    this.currentVersion = savedVersion;
                    this.updateVersionDisplay();
                }
            }
        } catch (error) {
            console.warn('Could not check for version updates:', error);
        }
    }

    /**
     * Simulate git commit (for development/testing)
     */
    simulateCommit(commitHash = null) {
        if (!commitHash) {
            commitHash = Math.random().toString(36).substring(2, 10);
        }
        localStorage.setItem('aksho-latest-commit', commitHash);
        console.log(`🚀 Simulated commit: ${commitHash}`);
    }

    /**
     * Add entry to version history
     */
    addVersionHistoryEntry(type, description) {
        this.versionHistory.push({
            version: { ...this.currentVersion },
            type,
            description,
            timestamp: new Date().toISOString()
        });

        // Keep only last 50 entries
        if (this.versionHistory.length > 50) {
            this.versionHistory = this.versionHistory.slice(-50);
        }
    }

    /**
     * Get version info for display
     */
    getVersionInfo() {
        return {
            current: this.getVersionString(),
            history: this.versionHistory.slice(-10), // Last 10 entries
            buildDate: new Date().toLocaleDateString(),
            environment: window.location.hostname === 'localhost' ? 'Development' : 'Production'
        };
    }
}

// Global version manager instance
const VersionManager_Instance = new VersionManager();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        VersionManager_Instance.initialize();
    });
} else {
    VersionManager_Instance.initialize();
}

// Export for global access
window.VersionManager = VersionManager_Instance;

// === VERSION MODAL FUNCTIONS ===

/**
 * Show version information modal
 */
function showVersionModal() {
    const modal = document.getElementById('version-modal');
    const modalBody = document.getElementById('version-modal-body');
    
    if (!modal || !modalBody) return;
    
    const versionInfo = VersionManager_Instance.getVersionInfo();
    
    modalBody.innerHTML = `
        <div class="version-info-section">
            <h3>📊 Current Version</h3>
            <p><strong>Version:</strong> ${versionInfo.current}</p>
            <p><strong>Environment:</strong> ${versionInfo.environment}</p>
            <p><strong>Branch:</strong> ${VersionManager_Instance.currentBranch.toUpperCase()}</p>
            <p><strong>Build Date:</strong> ${versionInfo.buildDate}</p>
        </div>
        
        <div class="version-info-section">
            <h3>🚀 About Versioning</h3>
            <p><strong>TE v</strong> indicates Testing Environment versions - these are development builds with the latest features.</p>
            <p><strong>v</strong> (without TE) indicates stable Main branch releases.</p>
            <p>Version format follows semantic versioning: <strong>MAJOR.MINOR.PATCH</strong></p>
        </div>
        
        <div class="version-info-section">
            <h3>📝 Recent Activity</h3>
            <div class="version-history">
                ${versionInfo.history.length > 0 ? 
                    versionInfo.history.map(entry => `
                        <div class="version-history-item">
                            <span class="version-history-version">v${entry.version.major}.${entry.version.minor}.${entry.version.patch}</span>
                            <span class="version-history-date">${new Date(entry.timestamp).toLocaleDateString()}</span>
                        </div>
                    `).join('') : 
                    '<p style="color: #9ca3af; font-style: italic;">No version history available</p>'
                }
            </div>
        </div>
        
        <div class="version-info-section">
            <h3>🎯 Version Controls</h3>
            <p style="margin-bottom: 15px;">Manually increment version for testing:</p>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 15px;">
                <button onclick="incrementVersionModal('patch')" style="padding: 6px 12px; border: 1px solid #8b5cf6; background: rgba(139, 92, 246, 0.1); border-radius: 6px; cursor: pointer; font-size: 0.85em;">+Patch</button>
                <button onclick="incrementVersionModal('minor')" style="padding: 6px 12px; border: 1px solid #8b5cf6; background: rgba(139, 92, 246, 0.1); border-radius: 6px; cursor: pointer; font-size: 0.85em;">+Minor</button>
                <button onclick="incrementVersionModal('major')" style="padding: 6px 12px; border: 1px solid #8b5cf6; background: rgba(139, 92, 246, 0.1); border-radius: 6px; cursor: pointer; font-size: 0.85em;">+Major</button>
                <button onclick="toggleBranch()" style="padding: 6px 12px; border: 1px solid #059669; background: rgba(5, 150, 105, 0.1); border-radius: 6px; cursor: pointer; font-size: 0.85em;">Toggle Branch</button>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <button onclick="simulateCommitModal()" style="padding: 6px 12px; border: 1px solid #f59e0b; background: rgba(245, 158, 11, 0.1); border-radius: 6px; cursor: pointer; font-size: 0.85em;">Simulate Commit</button>
                <button onclick="setVersionModal()" style="padding: 6px 12px; border: 1px solid #dc2626; background: rgba(220, 38, 38, 0.1); border-radius: 6px; cursor: pointer; font-size: 0.85em;">Set Version</button>
                <button onclick="setLatestCommit()" style="padding: 6px 12px; border: 1px solid #059669; background: rgba(5, 150, 105, 0.1); border-radius: 6px; cursor: pointer; font-size: 0.85em;">Set Latest Commit</button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Close version information modal
 */
function closeVersionModal(event) {
    const modal = document.getElementById('version-modal');
    if (!modal) return;
    
    // If event is provided and target is not the modal backdrop, don't close
    if (event && event.target !== modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

/**
 * Increment version from modal
 */
function incrementVersionModal(type) {
    VersionManager_Instance.incrementVersion(type);
    // Refresh modal content
    showVersionModal();
}

/**
 * Toggle between testing and main branch
 */
function toggleBranch() {
    const newBranch = VersionManager_Instance.currentBranch === 'testing' ? 'main' : 'testing';
    VersionManager_Instance.currentBranch = newBranch;
    localStorage.setItem('aksho-branch', newBranch);
    VersionManager_Instance.updateVersionDisplay();
    // Refresh modal content
    showVersionModal();
}

/**
 * Simulate commit for testing auto-increment
 */
function simulateCommitModal() {
    const commitHash = '3acac70'; // Use actual latest commit hash
    VersionManager_Instance.simulateCommit(commitHash);
    // Refresh modal content after short delay to show update
    setTimeout(() => {
        showVersionModal();
    }, 100);
}

/**
 * Auto-detect and set latest commit hash for version tracking
 */
function setLatestCommit() {
    // This simulates detecting the latest commit
    // In a real environment, this would be set by a build process
    const latestCommit = '3acac70'; // Lower Body visibility fix
    localStorage.setItem('aksho-latest-commit', latestCommit);
    console.log(`📝 Latest commit set: ${latestCommit}`);
}

/**
 * Set specific version manually
 */
function setVersionModal() {
    const currentVersion = VersionManager_Instance.currentVersion;
    const input = prompt(
        `Enter version (format: major.minor.patch)
Current: ${currentVersion.major}.${currentVersion.minor}.${currentVersion.patch}`,
        `${currentVersion.major}.${currentVersion.minor}.${currentVersion.patch}`
    );
    
    if (input && input.match(/^\d+\.\d+\.\d+$/)) {
        const [major, minor, patch] = input.split('.').map(Number);
        VersionManager_Instance.setVersion(major, minor, patch);
        VersionManager_Instance.addVersionHistoryEntry('manual', `Manual version set to ${input}`);
        // Refresh modal content
        showVersionModal();
    } else if (input !== null) {
        alert('Invalid version format. Use: major.minor.patch (e.g., 1.1.3)');
    }
}

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeVersionModal();
    }
});