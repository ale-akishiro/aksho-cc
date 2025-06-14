# The Akshoverse Studio - Testing Branch

🚧 **This is the TESTING branch** - Contains latest development changes and bug fixes.

## Current Version: v1.0-testing

### Recent Changes & Fixes

#### GitHub Issues Resolved:
- **Issue #2**: ✅ Fixed HOME tab layout - Hidden tag preview and prompt box, implemented single-column layout
- **Issue #3**: ✅ Fixed tab ordering - Moved Aksho Style tab to position 2 (after HOME, before Human)  
- **Issue #4**: ✅ Fixed COMING SOON floating signs alignment - Resolved conflicts with active tabs, improved ribbon styling

#### Major Updates:
- **HOME Tab Redesign**: Single-column layout with welcome section and 3-per-row feature card grid
- **Navigation Improvements**: Proper tab ordering and enhanced COMING SOON ribbons
- **Layout System**: Dynamic layout switching between HOME (single-column) and creation tabs (3-column)
- **UI Polish**: Enhanced floating sign positioning, shadows, and visual hierarchy

### Version History

| Version | Branch | Status | Description |
|---------|--------|--------|-------------|
| v1.0-testing | testing | 🚧 Active Development | Latest fixes and layout improvements |
| v1.0 | master | ✅ Stable | Initial release with basic functionality |

### File Structure

```
├── index.html           # Main application file
├── styles.css          # Main stylesheet with responsive design
├── logic.js            # Core application logic and state management
├── human-data.js       # Human character creation dataset
├── monster-data.js     # Monster character creation dataset  
├── utils.js            # Utility functions
├── validation.js       # Input validation logic
├── conflict-detection.js # Tag conflict detection system
├── expanded-human-dataset.md    # Human tags documentation
├── expanded_monster_dataset.md  # Monster species documentation
├── expanded_human_dataset_v2.md # Updated human dataset
├── monster_girl_addon.md       # Additional monster varieties
└── LICENSE             # Project license
```

### Testing Instructions

1. Download this testing branch as ZIP
2. Extract and open `index.html` in your browser
3. Test the following:
   - HOME tab shows single-column layout with feature cards in 3-per-row grid
   - Tab ordering: HOME → Aksho Style → Human → Monster → others
   - COMING SOON signs display properly on both inactive and active tabs
   - Switching between tabs maintains proper layouts

### Notes for Developers

This testing branch contains experimental layout changes and UI improvements. All changes are backward-compatible and maintain the original functionality of character creation tools.

**Main Branch**: Contains stable v1.0 release  
**Testing Branch**: Contains latest development changes (this branch)