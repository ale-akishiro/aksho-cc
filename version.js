/**
 * The Akshoverse Studio - Dynamic Versioning System
 * 
 * Handles automatic version management with semantic versioning
 * Format: TE vMAJOR.MINOR.PATCH (testing) or vMAJOR.MINOR.PATCH (main)
 */

class VersionManager {
    constructor() {
        this.currentVersion = { major: 1, minor: 1, patch: 2 };
        this.versionHistory = [];
        this.autoIncrement = true;
        this.currentBranch = this.detectBranch();
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
     * Setup automatic version incrementing based on activity
     */
    setupAutoIncrement() {
        let lastActivity = Date.now();
        const CHECK_INTERVAL = 30000; // 30 seconds
        const ACTIVITY_THRESHOLD = 300000; // 5 minutes of inactivity before considering session ended

        // Track user activity
        const activityEvents = ['click', 'keypress', 'scroll', 'mousemove'];
        activityEvents.forEach(event => {
            document.addEventListener(event, () => {
                lastActivity = Date.now();
            }, { passive: true });
        });

        // Check for version updates periodically
        setInterval(() => {
            const now = Date.now();
            const inactiveTime = now - lastActivity;
            
            // If user has been inactive and then becomes active, increment patch
            if (inactiveTime > ACTIVITY_THRESHOLD) {
                const lastSeen = localStorage.getItem('aksho-last-seen');
                if (lastSeen && (now - parseInt(lastSeen)) > ACTIVITY_THRESHOLD) {
                    // User returned after being away - increment patch version
                    this.addVersionHistoryEntry('patch', 'Session resumed');
                }
            }
            
            localStorage.setItem('aksho-last-seen', now.toString());
        }, CHECK_INTERVAL);
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
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <button onclick="incrementVersionModal('patch')" style="padding: 6px 12px; border: 1px solid #8b5cf6; background: rgba(139, 92, 246, 0.1); border-radius: 6px; cursor: pointer; font-size: 0.85em;">+Patch</button>
                <button onclick="incrementVersionModal('minor')" style="padding: 6px 12px; border: 1px solid #8b5cf6; background: rgba(139, 92, 246, 0.1); border-radius: 6px; cursor: pointer; font-size: 0.85em;">+Minor</button>
                <button onclick="incrementVersionModal('major')" style="padding: 6px 12px; border: 1px solid #8b5cf6; background: rgba(139, 92, 246, 0.1); border-radius: 6px; cursor: pointer; font-size: 0.85em;">+Major</button>
                <button onclick="toggleBranch()" style="padding: 6px 12px; border: 1px solid #059669; background: rgba(5, 150, 105, 0.1); border-radius: 6px; cursor: pointer; font-size: 0.85em;">Toggle Branch</button>
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

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeVersionModal();
    }
});