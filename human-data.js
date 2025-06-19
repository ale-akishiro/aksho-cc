/**
 * The Akshoverse Studio v1.0 - Human Character Data Module
 * 
 * Provides comprehensive human character creation data including:
 * - Complete human feature dataset (312+ tags) - RESTORED FROM CCB1.3
 * - Form generation and management
 * - Human-specific validation
 * - Character data structures
 */

// === HUMAN CHARACTER DATA ===

const HUMAN_DATA = {
    // Basic character information
    basicInfo: {
        artStyle: {
            label: 'ART STYLE',
            type: 'select',
            priority: 'essential',
            options: [
                { value: '', label: 'SELECT ART STYLE...' },
                { value: '2.5d', label: '2.5D' },
                { value: 'anime style', label: 'ANIME STYLE' },
                { value: 'realistic style', label: 'REALISTIC STYLE' },
                { value: 'semi-realistic style', label: 'SEMI-REALISTIC' },
                { value: 'cartoon style', label: 'CARTOON STYLE' },
                { value: 'stylized', label: 'STYLIZED' }
            ]
        },
        
        gender: {
            label: 'GENDER & LIFE STAGE',
            type: 'select',
            priority: 'essential',
            required: true,
            options: [
                { value: '', label: 'SELECT GENDER & LIFE STAGE...' },
                { value: 'adult female', label: 'ADULT FEMALE' },
                { value: 'mature female', label: 'MATURE FEMALE' },
                { value: 'elderly female', label: 'ELDERLY FEMALE' },
                { value: 'adult male', label: 'ADULT MALE' },
                { value: 'mature male', label: 'MATURE MALE' },
                { value: 'elderly male', label: 'ELDERLY MALE' }
            ]
        },
        
        age: {
            label: 'AGE (18-100)',
            type: 'number',
            priority: 'essential',
            required: true,
            min: 18,
            max: 100,
            placeholder: 'ENTER AGE...'
        },
        
        ethnicity: {
            label: 'ETHNICITY & HERITAGE',
            type: 'select',
            priority: 'optional',
            optional: true,
            useSubcategories: true,
            optgroups: [
                {
                    label: 'DEFAULT',
                    options: [
                        { value: '', label: 'SELECT ETHNICITY & HERITAGE...' }
                    ]
                },
                {
                    label: 'EUROPEAN HERITAGE',
                    options: [
                        { value: 'scandinavian', label: 'SCANDINAVIAN' },
                        { value: 'mediterranean', label: 'MEDITERRANEAN' },
                        { value: 'slavic', label: 'SLAVIC' },
                        { value: 'celtic', label: 'CELTIC' },
                        { value: 'germanic', label: 'GERMANIC' },
                        { value: 'french', label: 'FRENCH' },
                        { value: 'italian', label: 'ITALIAN' }
                    ]
                },
                {
                    label: 'EAST ASIAN HERITAGE',
                    options: [
                        { value: 'chinese', label: 'CHINESE' },
                        { value: 'japanese', label: 'JAPANESE' },
                        { value: 'korean', label: 'KOREAN' },
                        { value: 'vietnamese', label: 'VIETNAMESE' },
                        { value: 'thai', label: 'THAI' },
                        { value: 'filipino', label: 'FILIPINO' },
                        { value: 'mongolian', label: 'MONGOLIAN' }
                    ]
                },
                {
                    label: 'SOUTH ASIAN HERITAGE',
                    options: [
                        { value: 'indian', label: 'INDIAN' },
                        { value: 'pakistani', label: 'PAKISTANI' },
                        { value: 'bengali', label: 'BENGALI' },
                        { value: 'sri lankan', label: 'SRI LANKAN' },
                        { value: 'nepalese', label: 'NEPALESE' },
                        { value: 'afghani', label: 'AFGHANI' },
                        { value: 'tibetan', label: 'TIBETAN' }
                    ]
                },
                {
                    label: 'MIDDLE EASTERN HERITAGE',
                    options: [
                        { value: 'arabic', label: 'ARABIC' },
                        { value: 'persian', label: 'PERSIAN' },
                        { value: 'turkish', label: 'TURKISH' },
                        { value: 'israeli', label: 'ISRAELI' },
                        { value: 'armenian', label: 'ARMENIAN' },
                        { value: 'lebanese', label: 'LEBANESE' },
                        { value: 'egyptian', label: 'EGYPTIAN' }
                    ]
                },
                {
                    label: 'AFRICAN HERITAGE',
                    options: [
                        { value: 'west african', label: 'WEST AFRICAN' },
                        { value: 'east african', label: 'EAST AFRICAN' },
                        { value: 'north african', label: 'NORTH AFRICAN' },
                        { value: 'ethiopian', label: 'ETHIOPIAN' },
                        { value: 'somali', label: 'SOMALI' },
                        { value: 'south african', label: 'SOUTH AFRICAN' },
                        { value: 'sudanese', label: 'SUDANESE' }
                    ]
                },
                {
                    label: 'LATINO/HISPANIC HERITAGE',
                    options: [
                        { value: 'mexican', label: 'MEXICAN' },
                        { value: 'brazilian', label: 'BRAZILIAN' },
                        { value: 'argentinian', label: 'ARGENTINIAN' },
                        { value: 'colombian', label: 'COLOMBIAN' },
                        { value: 'puerto rican', label: 'PUERTO RICAN' },
                        { value: 'cuban', label: 'CUBAN' },
                        { value: 'peruvian', label: 'PERUVIAN' }
                    ]
                },
                {
                    label: 'INDIGENOUS HERITAGE',
                    options: [
                        { value: 'native american', label: 'NATIVE AMERICAN' },
                        { value: 'inuit', label: 'INUIT' },
                        { value: 'polynesian', label: 'POLYNESIAN' },
                        { value: 'aboriginal australian', label: 'ABORIGINAL AUSTRALIAN' },
                        { value: 'maori', label: 'MAORI' }
                    ]
                }
            ],
            flatOptions: [
                { value: '', label: 'SELECT ETHNICITY & HERITAGE...' },
                { value: 'scandinavian', label: 'SCANDINAVIAN' },
                { value: 'mediterranean', label: 'MEDITERRANEAN' },
                { value: 'slavic', label: 'SLAVIC' },
                { value: 'celtic', label: 'CELTIC' },
                { value: 'germanic', label: 'GERMANIC' },
                { value: 'french', label: 'FRENCH' },
                { value: 'italian', label: 'ITALIAN' },
                { value: 'chinese', label: 'CHINESE' },
                { value: 'japanese', label: 'JAPANESE' },
                { value: 'korean', label: 'KOREAN' },
                { value: 'vietnamese', label: 'VIETNAMESE' },
                { value: 'thai', label: 'THAI' },
                { value: 'filipino', label: 'FILIPINO' },
                { value: 'mongolian', label: 'MONGOLIAN' },
                { value: 'indian', label: 'INDIAN' },
                { value: 'pakistani', label: 'PAKISTANI' },
                { value: 'bengali', label: 'BENGALI' },
                { value: 'sri lankan', label: 'SRI LANKAN' },
                { value: 'nepalese', label: 'NEPALESE' },
                { value: 'afghani', label: 'AFGHANI' },
                { value: 'tibetan', label: 'TIBETAN' },
                { value: 'arabic', label: 'ARABIC' },
                { value: 'persian', label: 'PERSIAN' },
                { value: 'turkish', label: 'TURKISH' },
                { value: 'israeli', label: 'ISRAELI' },
                { value: 'armenian', label: 'ARMENIAN' },
                { value: 'lebanese', label: 'LEBANESE' },
                { value: 'egyptian', label: 'EGYPTIAN' },
                { value: 'west african', label: 'WEST AFRICAN' },
                { value: 'east african', label: 'EAST AFRICAN' },
                { value: 'north african', label: 'NORTH AFRICAN' },
                { value: 'ethiopian', label: 'ETHIOPIAN' },
                { value: 'somali', label: 'SOMALI' },
                { value: 'south african', label: 'SOUTH AFRICAN' },
                { value: 'sudanese', label: 'SUDANESE' },
                { value: 'mexican', label: 'MEXICAN' },
                { value: 'brazilian', label: 'BRAZILIAN' },
                { value: 'argentinian', label: 'ARGENTINIAN' },
                { value: 'colombian', label: 'COLOMBIAN' },
                { value: 'puerto rican', label: 'PUERTO RICAN' },
                { value: 'cuban', label: 'CUBAN' },
                { value: 'peruvian', label: 'PERUVIAN' },
                { value: 'native american', label: 'NATIVE AMERICAN' },
                { value: 'inuit', label: 'INUIT' },
                { value: 'polynesian', label: 'POLYNESIAN' },
                { value: 'aboriginal australian', label: 'ABORIGINAL AUSTRALIAN' },
                { value: 'maori', label: 'MAORI' }
            ]
        },

        skinTone: {
            label: 'SKIN TONE',
            type: 'select',
            priority: 'essential',
            useSubcategories: true,
            optgroups: [
                {
                    label: 'DEFAULT',
                    options: [
                        { value: '', label: 'SELECT SKIN TONE...' }
                    ]
                },
                {
                    label: 'LIGHT TONES',
                    options: [
                        { value: 'pale skin', label: 'PALE SKIN' },
                        { value: 'fair skin', label: 'FAIR SKIN' },
                        { value: 'light skin', label: 'LIGHT SKIN' },
                        { value: 'porcelain skin', label: 'PORCELAIN SKIN' },
                        { value: 'ivory skin', label: 'IVORY SKIN' }
                    ]
                },
                {
                    label: 'MEDIUM TONES',
                    options: [
                        { value: 'medium skin', label: 'MEDIUM SKIN' },
                        { value: 'olive skin', label: 'OLIVE SKIN' },
                        { value: 'golden skin', label: 'GOLDEN SKIN' },
                        { value: 'honey skin', label: 'HONEY SKIN' },
                        { value: 'bronze skin', label: 'BRONZE SKIN' }
                    ]
                },
                {
                    label: 'DARK TONES',
                    options: [
                        { value: 'tan skin', label: 'TAN SKIN' },
                        { value: 'brown skin', label: 'BROWN SKIN' },
                        { value: 'deep brown skin', label: 'DEEP BROWN SKIN' },
                        { value: 'dark skin', label: 'DARK SKIN' },
                        { value: 'ebony skin', label: 'EBONY SKIN' }
                    ]
                },
                {
                    label: 'SPECIAL TONES',
                    options: [
                        { value: 'rosy skin', label: 'ROSY SKIN' },
                        { value: 'warm skin', label: 'WARM SKIN' },
                        { value: 'cool skin', label: 'COOL SKIN' },
                        { value: 'sallow skin', label: 'SALLOW SKIN' },
                        { value: 'ruddy skin', label: 'RUDDY SKIN' }
                    ]
                }
            ],
            flatOptions: [
                { value: '', label: 'SELECT SKIN TONE...' },
                { value: 'pale skin', label: 'PALE SKIN' },
                { value: 'fair skin', label: 'FAIR SKIN' },
                { value: 'light skin', label: 'LIGHT SKIN' },
                { value: 'porcelain skin', label: 'PORCELAIN SKIN' },
                { value: 'ivory skin', label: 'IVORY SKIN' },
                { value: 'medium skin', label: 'MEDIUM SKIN' },
                { value: 'olive skin', label: 'OLIVE SKIN' },
                { value: 'golden skin', label: 'GOLDEN SKIN' },
                { value: 'honey skin', label: 'HONEY SKIN' },
                { value: 'bronze skin', label: 'BRONZE SKIN' },
                { value: 'tan skin', label: 'TAN SKIN' },
                { value: 'brown skin', label: 'BROWN SKIN' },
                { value: 'deep brown skin', label: 'DEEP BROWN SKIN' },
                { value: 'dark skin', label: 'DARK SKIN' },
                { value: 'ebony skin', label: 'EBONY SKIN' },
                { value: 'rosy skin', label: 'ROSY SKIN' },
                { value: 'warm skin', label: 'WARM SKIN' },
                { value: 'cool skin', label: 'COOL SKIN' },
                { value: 'sallow skin', label: 'SALLOW SKIN' },
                { value: 'ruddy skin', label: 'RUDDY SKIN' }
            ]
        },
        
        height: {
            label: 'HEIGHT',
            type: 'select',
            priority: 'optional',
            optional: true,
            options: [
                { value: '', label: 'SELECT HEIGHT...' },
                { value: 'very short height', label: 'VERY SHORT' },
                { value: 'short height', label: 'SHORT' },
                { value: 'below average height', label: 'BELOW AVERAGE' },
                { value: 'average height', label: 'AVERAGE' },
                { value: 'above average height', label: 'ABOVE AVERAGE' },
                { value: 'tall height', label: 'TALL' },
                { value: 'very tall height', label: 'VERY TALL' }
            ]
        },
        
        frame: {
            label: 'FRAME',
            type: 'select',
            priority: 'essential',
            options: [
                { value: '', label: 'SELECT FRAME...' },
                { value: 'petite frame', label: 'PETITE FRAME' },
                { value: 'small frame', label: 'SMALL FRAME' },
                { value: 'lanky frame', label: 'LANKY FRAME' },
                { value: 'average frame', label: 'AVERAGE FRAME' },
                { value: 'broad frame', label: 'BROAD FRAME' },
                { value: 'big frame', label: 'BIG FRAME' },
                { value: 'stocky frame', label: 'STOCKY FRAME' },
                { value: 'bulky frame', label: 'BULKY FRAME' }
            ]
        },
        
        build: {
            label: 'BUILD',
            type: 'select',
            priority: 'essential',
            options: [
                { value: '', label: 'SELECT BUILD...' },
                { value: 'skinny', label: 'SKINNY' },
                { value: 'slender', label: 'SLENDER' },
                { value: 'slim', label: 'SLIM' },
                { value: 'average build', label: 'AVERAGE' },
                { value: 'fit', label: 'FIT' },
                { value: 'toned', label: 'TONED' },
                { value: 'curvy', label: 'CURVY' },
                { value: 'chubby', label: 'CHUBBY' },
                { value: 'fat', label: 'FAT' },
                { value: 'athletic', label: 'ATHLETIC' },
                { value: 'muscular', label: 'MUSCULAR' },
                { value: 'buff', label: 'BUFF' },
                { value: 'stocky', label: 'STOCKY' }
            ]
        },
        
        
        skinTexture: {
            label: 'SKIN TEXTURE',
            type: 'select',
            priority: 'optional',
            optional: true,
            options: [
                { value: '', label: 'SELECT SKIN TEXTURE...' },
                { value: 'soft skin', label: 'SOFT SKIN' },
                { value: 'smooth skin', label: 'SMOOTH SKIN' },
                { value: 'youthful skin', label: 'YOUTHFUL SKIN' },
                { value: 'firm skin', label: 'FIRM SKIN' },
                { value: 'rough skin', label: 'ROUGH SKIN' },
                { value: 'weathered skin', label: 'WEATHERED SKIN' },
                { value: 'aged skin', label: 'AGED SKIN' }
            ]
        },
        
        skinFeatures: {
            label: 'SKIN FEATURES',
            type: 'toggle',
            priority: 'optional',
            optional: true,
            options: [
                { value: 'body blush', label: 'BODY BLUSH' },
                { value: 'sun tan', label: 'SUN TAN' },
                { value: 'tan lines', label: 'TAN LINES' },
                { value: "farmer's tan", label: "FARMER'S TAN" }
            ]
        }
    },

    // Hair section
    hair: {
        hairColor: {
            label: 'Hair Color',
            type: 'select',
            priority: 'essential',
            useSubcategories: true,
            optgroups: [
                {
                    label: 'White & Gray Range',
                    options: [
                        { value: 'white hair', label: 'White Hair' },
                        { value: 'platinum white hair', label: 'Platinum White Hair' },
                        { value: 'silver hair', label: 'Silver Hair' },
                        { value: 'light gray hair', label: 'Light Gray Hair' },
                        { value: 'gray hair', label: 'Gray Hair' },
                        { value: 'dark gray hair', label: 'Dark Gray Hair' },
                        { value: 'salt and pepper hair', label: 'Salt and Pepper Hair' },
                        { value: 'premature gray hair', label: 'Premature Gray Hair' }
                    ]
                },
                {
                    label: 'Blonde Range',
                    options: [
                        { value: 'platinum blonde hair', label: 'Platinum Blonde Hair' },
                        { value: 'bleached blonde hair', label: 'Bleached Blonde Hair' },
                        { value: 'ice blonde hair', label: 'Ice Blonde Hair' },
                        { value: 'ash blonde hair', label: 'Ash Blonde Hair' },
                        { value: 'golden blonde hair', label: 'Golden Blonde Hair' },
                        { value: 'honey blonde hair', label: 'Honey Blonde Hair' },
                        { value: 'strawberry blonde hair', label: 'Strawberry Blonde Hair' },
                        { value: 'sandy blonde hair', label: 'Sandy Blonde Hair' },
                        { value: 'dirty blonde hair', label: 'Dirty Blonde Hair' },
                        { value: 'dark blonde hair', label: 'Dark Blonde Hair' }
                    ]
                },
                {
                    label: 'Brown Range',
                    options: [
                        { value: 'light brown hair', label: 'Light Brown Hair' },
                        { value: 'caramel brown hair', label: 'Caramel Brown Hair' },
                        { value: 'medium brown hair', label: 'Medium Brown Hair' },
                        { value: 'chestnut brown hair', label: 'Chestnut Brown Hair' },
                        { value: 'chocolate brown hair', label: 'Chocolate Brown Hair' },
                        { value: 'coffee brown hair', label: 'Coffee Brown Hair' },
                        { value: 'dark brown hair', label: 'Dark Brown Hair' },
                        { value: 'espresso brown hair', label: 'Espresso Brown Hair' }
                    ]
                },
                {
                    label: 'Red Range',
                    options: [
                        { value: 'strawberry hair', label: 'Strawberry Hair' },
                        { value: 'light red hair', label: 'Light Red Hair' },
                        { value: 'ginger hair', label: 'Ginger Hair' },
                        { value: 'copper hair', label: 'Copper Hair' },
                        { value: 'auburn hair', label: 'Auburn Hair' },
                        { value: 'auburn brown hair', label: 'Auburn Brown Hair' },
                        { value: 'burgundy hair', label: 'Burgundy Hair' },
                        { value: 'mahogany hair', label: 'Mahogany Hair' },
                        { value: 'deep red hair', label: 'Deep Red Hair' }
                    ]
                },
                {
                    label: 'Black Range',
                    options: [
                        { value: 'soft black hair', label: 'Soft Black Hair' },
                        { value: 'brown-black hair', label: 'Brown-Black Hair' },
                        { value: 'jet black hair', label: 'Jet Black Hair' },
                        { value: 'blue-black hair', label: 'Blue-Black Hair' },
                        { value: 'raven black hair', label: 'Raven Black Hair' }
                    ]
                },
                {
                    label: 'Fantasy Colors',
                    options: [
                        { value: 'pastel pink hair', label: 'Pastel Pink Hair' },
                        { value: 'hot pink hair', label: 'Hot Pink Hair' },
                        { value: 'magenta hair', label: 'Magenta Hair' },
                        { value: 'light blue hair', label: 'Light Blue Hair' },
                        { value: 'blue hair', label: 'Blue Hair' },
                        { value: 'navy blue hair', label: 'Navy Blue Hair' },
                        { value: 'teal hair', label: 'Teal Hair' },
                        { value: 'mint green hair', label: 'Mint Green Hair' },
                        { value: 'green hair', label: 'Green Hair' },
                        { value: 'forest green hair', label: 'Forest Green Hair' },
                        { value: 'lavender hair', label: 'Lavender Hair' },
                        { value: 'purple hair', label: 'Purple Hair' },
                        { value: 'violet hair', label: 'Violet Hair' },
                        { value: 'orange hair', label: 'Orange Hair' },
                        { value: 'yellow hair', label: 'Yellow Hair' }
                    ]
                },
                {
                    label: 'Multi-Color Effects',
                    options: [
                        { value: 'rainbow hair', label: 'Rainbow Hair' },
                        { value: 'ombre hair', label: 'Ombre Hair' },
                        { value: 'color-streaked hair', label: 'Color-Streaked Hair' },
                        { value: 'two-tone hair', label: 'Two-Tone Hair' },
                        { value: 'gradient hair', label: 'Gradient Hair' },
                        { value: 'highlighted hair', label: 'Highlighted Hair' },
                        { value: 'lowlighted hair', label: 'Lowlighted Hair' }
                    ]
                }
            ],
            // Flat version without subcategories (for toggle feature)
            flatOptions: [
                // White/Gray
                { value: 'white hair', label: 'White Hair' },
                { value: 'platinum white hair', label: 'Platinum White Hair' },
                { value: 'silver hair', label: 'Silver Hair' },
                { value: 'light gray hair', label: 'Light Gray Hair' },
                { value: 'gray hair', label: 'Gray Hair' },
                { value: 'dark gray hair', label: 'Dark Gray Hair' },
                { value: 'salt and pepper hair', label: 'Salt and Pepper Hair' },
                { value: 'premature gray hair', label: 'Premature Gray Hair' },
                // Blonde
                { value: 'platinum blonde hair', label: 'Platinum Blonde Hair' },
                { value: 'bleached blonde hair', label: 'Bleached Blonde Hair' },
                { value: 'ice blonde hair', label: 'Ice Blonde Hair' },
                { value: 'ash blonde hair', label: 'Ash Blonde Hair' },
                { value: 'golden blonde hair', label: 'Golden Blonde Hair' },
                { value: 'honey blonde hair', label: 'Honey Blonde Hair' },
                { value: 'strawberry blonde hair', label: 'Strawberry Blonde Hair' },
                { value: 'sandy blonde hair', label: 'Sandy Blonde Hair' },
                { value: 'dirty blonde hair', label: 'Dirty Blonde Hair' },
                { value: 'dark blonde hair', label: 'Dark Blonde Hair' },
                // Brown
                { value: 'light brown hair', label: 'Light Brown Hair' },
                { value: 'caramel brown hair', label: 'Caramel Brown Hair' },
                { value: 'medium brown hair', label: 'Medium Brown Hair' },
                { value: 'chestnut brown hair', label: 'Chestnut Brown Hair' },
                { value: 'chocolate brown hair', label: 'Chocolate Brown Hair' },
                { value: 'coffee brown hair', label: 'Coffee Brown Hair' },
                { value: 'dark brown hair', label: 'Dark Brown Hair' },
                { value: 'espresso brown hair', label: 'Espresso Brown Hair' },
                // Red
                { value: 'strawberry hair', label: 'Strawberry Hair' },
                { value: 'light red hair', label: 'Light Red Hair' },
                { value: 'ginger hair', label: 'Ginger Hair' },
                { value: 'copper hair', label: 'Copper Hair' },
                { value: 'auburn hair', label: 'Auburn Hair' },
                { value: 'auburn brown hair', label: 'Auburn Brown Hair' },
                { value: 'burgundy hair', label: 'Burgundy Hair' },
                { value: 'mahogany hair', label: 'Mahogany Hair' },
                { value: 'deep red hair', label: 'Deep Red Hair' },
                // Black
                { value: 'soft black hair', label: 'Soft Black Hair' },
                { value: 'brown-black hair', label: 'Brown-Black Hair' },
                { value: 'jet black hair', label: 'Jet Black Hair' },
                { value: 'blue-black hair', label: 'Blue-Black Hair' },
                { value: 'raven black hair', label: 'Raven Black Hair' },
                // Fantasy
                { value: 'pastel pink hair', label: 'Pastel Pink Hair' },
                { value: 'hot pink hair', label: 'Hot Pink Hair' },
                { value: 'magenta hair', label: 'Magenta Hair' },
                { value: 'light blue hair', label: 'Light Blue Hair' },
                { value: 'blue hair', label: 'Blue Hair' },
                { value: 'navy blue hair', label: 'Navy Blue Hair' },
                { value: 'teal hair', label: 'Teal Hair' },
                { value: 'mint green hair', label: 'Mint Green Hair' },
                { value: 'green hair', label: 'Green Hair' },
                { value: 'forest green hair', label: 'Forest Green Hair' },
                { value: 'lavender hair', label: 'Lavender Hair' },
                { value: 'purple hair', label: 'Purple Hair' },
                { value: 'violet hair', label: 'Violet Hair' },
                { value: 'orange hair', label: 'Orange Hair' },
                { value: 'yellow hair', label: 'Yellow Hair' },
                // Multi-Color
                { value: 'rainbow hair', label: 'Rainbow Hair' },
                { value: 'ombre hair', label: 'Ombre Hair' },
                { value: 'color-streaked hair', label: 'Color-Streaked Hair' },
                { value: 'two-tone hair', label: 'Two-Tone Hair' },
                { value: 'gradient hair', label: 'Gradient Hair' },
                { value: 'highlighted hair', label: 'Highlighted Hair' },
                { value: 'lowlighted hair', label: 'Lowlighted Hair' }
            ]
        },
        
        hairTexture: {
            label: 'Hair Texture',
            type: 'select',
            priority: 'optional',
            options: [
                { value: '', label: 'Select hair texture...' },
                
                // Straightness (straight to curly)
                { value: 'pin straight hair', label: 'Pin Straight' },
                { value: 'straight hair', label: 'Straight' },
                { value: 'slightly wavy hair', label: 'Slightly Wavy' },
                { value: 'wavy hair', label: 'Wavy' },
                { value: 'loose curls', label: 'Loose Curls' },
                { value: 'tight curls', label: 'Tight Curls' },
                { value: 'coily hair', label: 'Coily' },
                { value: 'kinky hair', label: 'Kinky' },
                { value: 'afro texture hair', label: 'Afro Texture' },
                
                // Thickness (fine to coarse)
                { value: 'fine hair', label: 'Fine' },
                { value: 'thick hair', label: 'Thick' },
                { value: 'coarse hair', label: 'Coarse' },
                
                // Feel/Quality
                { value: 'silky hair', label: 'Silky' },
                { value: 'smooth hair', label: 'Smooth' },
                { value: 'wiry hair', label: 'Wiry' },
                { value: 'frizzy hair', label: 'Frizzy' }
            ]
        },
        
        hairLength: {
            label: 'Hair Length',
            type: 'select',
            priority: 'essential',
            options: [
                { value: '', label: 'Select hair length...' },
                { value: 'bald', label: 'Bald' },
                { value: 'very short hair', label: 'Very Short Hair' },
                { value: 'short hair', label: 'Short Hair' },
                { value: 'medium hair', label: 'Medium Hair' },
                { value: 'long hair', label: 'Long Hair' },
                { value: 'very long hair', label: 'Very Long Hair' },
                { value: 'absurdly long hair', label: 'Absurdly Long Hair' }
            ]
        },
        
        hairStyle: {
            label: 'Hairstyle',
            type: 'select',
            priority: 'optional',
            options: [
                { value: '', label: 'Select hairstyle...' },
                
                // Professional Styles
                { value: 'business cut', label: 'Business Cut' },
                { value: 'corporate style', label: 'Corporate Style' },
                { value: 'professional updo', label: 'Professional Updo' },
                { value: 'neat ponytail', label: 'Neat Ponytail' },
                { value: 'conservative style', label: 'Conservative Style' },
                
                // Casual Styles
                { value: 'messy bun', label: 'Messy Bun' },
                { value: 'loose waves', label: 'Loose Waves' },
                { value: 'beach waves', label: 'Beach Waves' },
                { value: 'tousled hair', label: 'Tousled Hair' },
                { value: 'bedhead style', label: 'Bedhead Style' },
                
                // Elaborate Styles
                { value: 'intricate braids', label: 'Intricate Braids' },
                { value: 'formal updo', label: 'Formal Updo' },
                { value: 'wedding hair', label: 'Wedding Hair' },
                { value: 'red carpet style', label: 'Red Carpet Style' },
                { value: 'vintage style', label: 'Vintage Style' },
                
                // Cultural Styles
                { value: 'afro puffs', label: 'Afro Puffs' },
                { value: 'bantu knots', label: 'Bantu Knots' },
                { value: 'box braids', label: 'Box Braids' },
                { value: 'cornrows', label: 'Cornrows' },
                { value: 'dreadlocks', label: 'Dreadlocks' },
                { value: 'twist-outs', label: 'Twist-Outs' },
                
                // Alternative Styles
                { value: 'undercut', label: 'Undercut' },
                { value: 'mohawk', label: 'Mohawk' },
                { value: 'shaved sides', label: 'Shaved Sides' },
                { value: 'punk style', label: 'Punk Style' },
                { value: 'emo fringe', label: 'Emo Fringe' },
                { value: 'scene hair', label: 'Scene Hair' }
            ]
        },
        
        bangs: {
            label: 'Bangs & Fringe',
            type: 'select',
            priority: 'optional',
            options: [
                { value: '', label: 'Select bangs type...' },
                { value: 'blunt bangs', label: 'Blunt Bangs' },
                { value: 'arched bangs', label: 'Arched Bangs' },
                { value: 'asymmetrical bangs', label: 'Asymmetrical Bangs' },
                { value: 'side-swept bangs', label: 'Side-Swept Bangs' },
                { value: 'wispy bangs', label: 'Wispy Bangs' },
                { value: 'curtain bangs', label: 'Curtain Bangs' },
                { value: 'choppy bangs', label: 'Choppy Bangs' },
                { value: 'micro bangs', label: 'Micro Bangs' },
                { value: 'long bangs', label: 'Long Bangs' },
                { value: 'layered bangs', label: 'Layered Bangs' }
            ]
        },
        
        sidelocks: {
            label: 'Sidelocks',
            type: 'select',
            priority: 'optional',
            options: [
                { value: '', label: 'Select sidelocks...' },
                { value: 'very short sidelocks', label: 'Very Short Sidelocks' },
                { value: 'short sidelocks', label: 'Short Sidelocks' },
                { value: 'medium sidelocks', label: 'Medium Sidelocks' },
                { value: 'long sidelocks', label: 'Long Sidelocks' },
                { value: 'very long sidelocks', label: 'Very Long Sidelocks' },
                { value: 'single sidelock', label: 'Single Sidelock' },
                { value: 'very short single sidelock', label: 'Very Short Single Sidelock' },
                { value: 'short single sidelock', label: 'Short Single Sidelock' },
                { value: 'medium single sidelock', label: 'Medium Single Sidelock' },
                { value: 'long single sidelock', label: 'Long Single Sidelock' },
                { value: 'very long single sidelock', label: 'Very Long Single Sidelock' }
            ]
        },
        
        hairAccessories: {
            label: 'Hair Accessories',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'hair clips', label: 'Hair Clips' },
                { value: 'hair pins', label: 'Hair Pins' },
                { value: 'hair ties', label: 'Hair Ties' },
                { value: 'headbands', label: 'Headbands' },
                { value: 'hair scarves', label: 'Hair Scarves' },
                { value: 'hair ribbons', label: 'Hair Ribbons' },
                { value: 'hair flowers', label: 'Hair Flowers' },
                { value: 'hair jewelry', label: 'Hair Jewelry' }
            ]
        }
    },

    // Facial Features Expanded
    facialFeatures: {
        faceShape: {
            label: 'Face Shape',
            type: 'select',
            priority: 'optional',
            options: [
                { value: '', label: 'Select face shape...' },
                { value: 'oval face', label: 'Oval Face' },
                { value: 'round face', label: 'Round Face' },
                { value: 'square face', label: 'Square Face' },
                { value: 'heart face', label: 'Heart Face' },
                { value: 'diamond face', label: 'Diamond Face' },
                { value: 'oblong face', label: 'Oblong Face' },
                { value: 'triangular face', label: 'Triangular Face' },
                { value: 'rectangular face', label: 'Rectangular Face' }
            ]
        },
        
        forehead: {
            label: 'Forehead',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'high forehead', label: 'High Forehead' },
                { value: 'low forehead', label: 'Low Forehead' },
                { value: 'wide forehead', label: 'Wide Forehead' },
                { value: 'narrow forehead', label: 'Narrow Forehead' },
                { value: 'prominent forehead', label: 'Prominent Forehead' },
                { value: 'receding hairline', label: 'Receding Hairline' },
                { value: "widow's peak", label: "Widow's Peak" }
            ]
        },
        
        eyebrows: {
            label: 'Eyebrow Variations',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'thin eyebrows', label: 'Thin Eyebrows' },
                { value: 'thick eyebrows', label: 'Thick Eyebrows' },
                { value: 'arched eyebrows', label: 'Arched Eyebrows' },
                { value: 'straight eyebrows', label: 'Straight Eyebrows' },
                { value: 'bushy eyebrows', label: 'Bushy Eyebrows' },
                { value: 'plucked eyebrows', label: 'Plucked Eyebrows' },
                { value: 'natural eyebrows', label: 'Natural Eyebrows' },
                { value: 'unibrow', label: 'Unibrow' },
                { value: 'sparse eyebrows', label: 'Sparse Eyebrows' },
                { value: 'defined eyebrows', label: 'Defined Eyebrows' }
            ]
        },
        
        eyeShape: {
            label: 'Eye Shape & Features',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'almond eyes', label: 'Almond Eyes' },
                { value: 'round eyes', label: 'Round Eyes' },
                { value: 'hooded eyes', label: 'Hooded Eyes' },
                { value: 'upturned eyes', label: 'Upturned Eyes' },
                { value: 'downturned eyes', label: 'Downturned Eyes' },
                { value: 'close-set eyes', label: 'Close-Set Eyes' },
                { value: 'wide-set eyes', label: 'Wide-Set Eyes' },
                { value: 'deep-set eyes', label: 'Deep-Set Eyes' },
                { value: 'prominent eyes', label: 'Prominent Eyes' },
                { value: 'monolid eyes', label: 'Monolid Eyes' },
                { value: 'double eyelid', label: 'Double Eyelid' }
            ]
        },
        
        eyeColor: {
            label: 'Eye Color',
            type: 'select',
            priority: 'essential',
            options: [
                { value: '', label: 'Select eye color...' },
                
                // Blue Family
                { value: 'ice blue eyes', label: 'Ice Blue Eyes' },
                { value: 'sky blue eyes', label: 'Sky Blue Eyes' },
                { value: 'navy blue eyes', label: 'Navy Blue Eyes' },
                { value: 'steel blue eyes', label: 'Steel Blue Eyes' },
                { value: 'aqua blue eyes', label: 'Aqua Blue Eyes' },
                
                // Green Family
                { value: 'emerald green eyes', label: 'Emerald Green Eyes' },
                { value: 'forest green eyes', label: 'Forest Green Eyes' },
                { value: 'hazel green eyes', label: 'Hazel Green Eyes' },
                { value: 'olive green eyes', label: 'Olive Green Eyes' },
                { value: 'mint green eyes', label: 'Mint Green Eyes' },
                
                // Brown Family
                { value: 'amber eyes', label: 'Amber Eyes' },
                { value: 'honey brown eyes', label: 'Honey Brown Eyes' },
                { value: 'chocolate brown eyes', label: 'Chocolate Brown Eyes' },
                { value: 'dark brown eyes', label: 'Dark Brown Eyes' },
                { value: 'mahogany eyes', label: 'Mahogany Eyes' },
                
                // Gray Family
                { value: 'light gray eyes', label: 'Light Gray Eyes' },
                { value: 'dark gray eyes', label: 'Dark Gray Eyes' },
                { value: 'blue-gray eyes', label: 'Blue-Gray Eyes' },
                { value: 'green-gray eyes', label: 'Green-Gray Eyes' },
                
                // Rare Colors
                { value: 'violet eyes', label: 'Violet Eyes' },
                { value: 'golden eyes', label: 'Golden Eyes' },
                { value: 'heterochromia', label: 'Heterochromia' },
                { value: 'sectoral heterochromia', label: 'Sectoral Heterochromia' }
            ]
        },
        
        eyeFeatures: {
            label: 'Eye Features',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'long eyelashes', label: 'Long Eyelashes' },
                { value: 'short eyelashes', label: 'Short Eyelashes' },
                { value: 'thick eyelashes', label: 'Thick Eyelashes' },
                { value: 'sparse eyelashes', label: 'Sparse Eyelashes' },
                { value: 'curled eyelashes', label: 'Curled Eyelashes' },
                { value: 'straight eyelashes', label: 'Straight Eyelashes' },
                { value: 'heavy eyelids', label: 'Heavy Eyelids' },
                { value: 'light eyelids', label: 'Light Eyelids' },
                { value: 'eyebags', label: 'Eyebags' },
                { value: 'dark circles', label: 'Dark Circles' },
                { value: "crow's feet", label: "Crow's Feet" },
                { value: 'laugh lines', label: 'Laugh Lines' }
            ]
        },
        
        nose: {
            label: 'Nose Variations',
            type: 'select',
            priority: 'optional',
            options: [
                { value: '', label: 'Select nose type...' },
                { value: 'button nose', label: 'Button Nose' },
                { value: 'aquiline nose', label: 'Aquiline Nose' },
                { value: 'roman nose', label: 'Roman Nose' },
                { value: 'snub nose', label: 'Snub Nose' },
                { value: 'wide nose', label: 'Wide Nose' },
                { value: 'narrow nose', label: 'Narrow Nose' },
                { value: 'long nose', label: 'Long Nose' },
                { value: 'short nose', label: 'Short Nose' },
                { value: 'crooked nose', label: 'Crooked Nose' },
                { value: 'straight nose', label: 'Straight Nose' },
                { value: 'bulbous nose', label: 'Bulbous Nose' },
                { value: 'pointed nose', label: 'Pointed Nose' }
            ]
        },
        
        lips: {
            label: 'Lip Variations',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'thin lips', label: 'Thin Lips' },
                { value: 'full lips', label: 'Full Lips' },
                { value: 'pouty lips', label: 'Pouty Lips' },
                { value: 'wide lips', label: 'Wide Lips' },
                { value: 'narrow lips', label: 'Narrow Lips' },
                { value: 'bow-shaped lips', label: 'Bow-Shaped Lips' },
                { value: 'asymmetrical lips', label: 'Asymmetrical Lips' },
                { value: 'natural lips', label: 'Natural Lips' },
                { value: "defined cupid's bow", label: "Defined Cupid's Bow" }
            ]
        },
        
        cheeks: {
            label: 'Cheek Features',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'high cheekbones', label: 'High Cheekbones' },
                { value: 'low cheekbones', label: 'Low Cheekbones' },
                { value: 'hollow cheeks', label: 'Hollow Cheeks' },
                { value: 'full cheeks', label: 'Full Cheeks' },
                { value: 'dimples', label: 'Dimples' },
                { value: 'smile lines', label: 'Smile Lines' },
                { value: 'blush', label: 'Blush' }
            ]
        },
        
        jawChin: {
            label: 'Jaw & Chin',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'strong jaw', label: 'Strong Jaw' },
                { value: 'weak jaw', label: 'Weak Jaw' },
                { value: 'square jaw', label: 'Square Jaw' },
                { value: 'pointed chin', label: 'Pointed Chin' },
                { value: 'cleft chin', label: 'Cleft Chin' },
                { value: 'double chin', label: 'Double Chin' },
                { value: 'defined jawline', label: 'Defined Jawline' },
                { value: 'soft jawline', label: 'Soft Jawline' }
            ]
        }
    },

    // Beauty Marks & Skin Features
    beautyMarks: {
        beautyMarks: {
            label: 'Beauty Marks & Moles',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'freckles', label: 'Freckles' },
                { value: 'freckles on whole body', label: 'Freckles on Whole Body' },
                { value: 'beauty mark', label: 'Beauty Mark' },
                { value: 'multiple beauty marks', label: 'Multiple Beauty Marks' },
                { value: 'mole on neck', label: 'Mole on Neck' },
                { value: 'mole on chin', label: 'Mole on Chin' },
                { value: 'mole above lip', label: 'Mole Above Lip' },
                { value: 'mole on forehead', label: 'Mole on Forehead' },
                { value: 'mole above chest', label: 'Mole Above Chest' },
                { value: 'mole on cheek', label: 'Mole on Cheek' },
                { value: 'mole on nose', label: 'Mole on Nose' },
                { value: 'mole on shoulder', label: 'Mole on Shoulder' },
                { value: 'mole on arm', label: 'Mole on Arm' },
                { value: 'mole on leg', label: 'Mole on Leg' }
            ]
        },
        
        skinConditions: {
            label: 'Skin Conditions & Marks',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'sun spots', label: 'Sun Spots' },
                { value: 'age spots', label: 'Age Spots' },
                { value: 'birthmarks', label: 'Birthmarks' },
                { value: 'vitiligo', label: 'Vitiligo' },
                { value: 'skin tags', label: 'Skin Tags' },
                { value: 'stretch marks', label: 'Stretch Marks' },
                { value: 'port wine stain', label: 'Port Wine Stain' },
                { value: 'cafe au lait spots', label: 'Cafe Au Lait Spots' }
            ]
        }
    },

    // Body Build Expanded
    bodyBuild: {
        bodyFrame: {
            label: 'Body Frame',
            type: 'select',
            priority: 'essential',
            options: [
                { value: '', label: 'Select body frame...' },
                { value: 'very small body frame', label: 'Very Small Body Frame' },
                { value: 'small body frame', label: 'Small Body Frame' },
                { value: 'medium body frame', label: 'Medium Body Frame' },
                { value: 'big body frame', label: 'Big Body Frame' },
                { value: 'very big body frame', label: 'Very Big Body Frame' }
            ]
        },
        
        muscleDefinition: {
            label: 'Muscle Definition',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'no muscle definition', label: 'No Muscle Definition' },
                { value: 'subtle muscle tone', label: 'Subtle Muscle Tone' },
                { value: 'moderate muscle definition', label: 'Moderate Muscle Definition' },
                { value: 'well-defined muscles', label: 'Well-Defined Muscles' },
                { value: 'bodybuilder physique', label: 'Bodybuilder Physique' },
                { value: 'athletic build', label: 'Athletic Build' },
                { value: "dancer's build", label: "Dancer's Build" }
            ]
        },
        
        bodyShape: {
            label: 'Body Build',
            type: 'select',
            priority: 'essential',
            options: [
                { value: '', label: 'Select body shape...' },
                { value: 'skinny shape build', label: 'Skinny Shape Build' },
                { value: 'petite shape build', label: 'Petite Shape Build' },
                { value: 'slim shape build', label: 'Slim Shape Build' },
                { value: 'fit shape build', label: 'Fit Shape Build' },
                { value: 'slender shape build', label: 'Slender Shape Build' },
                { value: 'toned shape build', label: 'Toned Shape Build' },
                { value: 'curvy shape build', label: 'Curvy Shape Build' },
                { value: 'chubby shape build', label: 'Chubby Shape Build' },
                { value: 'fat shape build', label: 'Fat Shape Build' },
                { value: 'athletic shape build', label: 'Athletic Shape Build' },
                { value: 'pear shape build', label: 'Pear Shape Build' },
                { value: 'apple shape build', label: 'Apple Shape Build' },
                { value: 'hourglass shape build', label: 'Hourglass Shape Build' },
                { value: 'rectangle shape build', label: 'Rectangle Shape Build' },
                { value: 'inverted triangle shape build', label: 'Inverted Triangle Shape Build' }
            ]
        }
    },

    // Torso Detailed
    torsoDetailed: {
        chestBreast: {
            label: 'Chest/Breast Variations',
            type: 'select',
            priority: 'nsfw',
            options: [
                { value: '', label: 'Select chest/breast type...' },
                // Size
                { value: 'flat chest', label: 'Flat Chest' },
                { value: 'small breasts', label: 'Small Breasts' },
                { value: 'medium breasts', label: 'Medium Breasts' },
                { value: 'large breasts', label: 'Large Breasts' },
                { value: 'huge breasts', label: 'Huge Breasts' },
                { value: 'gigantic breasts', label: 'Gigantic Breasts' },
                // Shape
                { value: 'perky', label: 'Perky' },
                { value: 'soft', label: 'Soft' },
                { value: 'natural', label: 'Natural' },
                { value: 'saggy', label: 'Saggy' },
                { value: 'round shape', label: 'Round Shape' },
                { value: 'teardrop shape', label: 'Teardrop Shape' },
                { value: 'athletic chest', label: 'Athletic Chest' },
                { value: 'broad chest', label: 'Broad Chest' },
                { value: 'narrow chest', label: 'Narrow Chest' }
            ]
        },
        
        torsoFeatures: {
            label: 'Torso Features',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'broad shoulders', label: 'Broad Shoulders' },
                { value: 'narrow shoulders', label: 'Narrow Shoulders' },
                { value: 'sloped shoulders', label: 'Sloped Shoulders' },
                { value: 'square shoulders', label: 'Square Shoulders' },
                { value: 'long torso', label: 'Long Torso' },
                { value: 'short torso', label: 'Short Torso' },
                { value: 'proportional torso', label: 'Proportional Torso' },
                { value: 'visible ribs', label: 'Visible Ribs' },
                { value: 'soft stomach', label: 'Soft Stomach' },
                { value: 'flat stomach', label: 'Flat Stomach' },
                { value: 'toned abs', label: 'Toned Abs' },
                { value: 'belly', label: 'Belly' },
                { value: 'love handles', label: 'Love Handles' }
            ]
        },
        
        waist: {
            label: 'Waist Variations',
            type: 'select',
            priority: 'optional',
            options: [
                { value: '', label: 'Select waist type...' },
                { value: 'no waist definition', label: 'No Waist Definition' },
                { value: 'narrow waist', label: 'Narrow Waist' },
                { value: 'slight waist', label: 'Slight Waist' },
                { value: 'defined waist', label: 'Defined Waist' },
                { value: 'cinched waist', label: 'Cinched Waist' },
                { value: 'thick waist', label: 'Thick Waist' },
                { value: 'natural waist', label: 'Natural Waist' }
            ]
        }
    },

    // Lower Body Detailed
    lowerBodyDetailed: {
        hips: {
            label: 'Hip Variations',
            type: 'select',
            priority: 'optional',
            options: [
                { value: '', label: 'Select hip type...' },
                { value: 'narrow hips', label: 'Narrow Hips' },
                { value: 'average hips', label: 'Average Hips' },
                { value: 'wide hips', label: 'Wide Hips' },
                { value: 'flared hips', label: 'Flared Hips' },
                { value: 'boyish hips', label: 'Boyish Hips' },
                { value: 'childbearing hips', label: 'Childbearing Hips' }
            ]
        },
        
        buttocks: {
            label: 'Buttocks Features',
            type: 'select',
            priority: 'nsfw',
            options: [
                { value: '', label: 'Select buttocks type...' },
                { value: 'flat butt', label: 'Flat Butt' },
                { value: 'small butt', label: 'Small Butt' },
                { value: 'average butt', label: 'Average Butt' },
                { value: 'large butt', label: 'Large Butt' },
                { value: 'round butt', label: 'Round Butt' },
                { value: 'square butt', label: 'Square Butt' },
                { value: 'heart-shaped butt', label: 'Heart-Shaped Butt' },
                { value: 'bubble butt', label: 'Bubble Butt' }
            ]
        },
        
        thighs: {
            label: 'Thigh Types',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'skinny thighs', label: 'Skinny Thighs' },
                { value: 'athletic thighs', label: 'Athletic Thighs' },
                { value: 'thick thighs', label: 'Thick Thighs' },
                { value: 'muscular thighs', label: 'Muscular Thighs' },
                { value: 'soft thighs', label: 'Soft Thighs' },
                { value: 'proportional thighs', label: 'Proportional Thighs' }
            ]
        },
        
        legs: {
            label: 'Leg Features',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'long legs', label: 'Long Legs' },
                { value: 'short legs', label: 'Short Legs' },
                { value: 'proportional legs', label: 'Proportional Legs' },
                { value: 'bow legs', label: 'Bow Legs' },
                { value: 'knock knees', label: 'Knock Knees' },
                { value: 'straight legs', label: 'Straight Legs' },
                { value: 'muscular calves', label: 'Muscular Calves' },
                { value: 'skinny calves', label: 'Skinny Calves' },
                { value: 'ankle thickness', label: 'Ankle Thickness' },
                { value: 'foot size', label: 'Foot Size' },
                { value: 'arch height', label: 'Arch Height' }
            ]
        },
        
        genitalFeatures: {
            label: 'Genital Features',
            type: 'toggle',
            priority: 'nsfw',
            options: [
                // Grooming
                { value: 'shaved pubes', label: 'Shaved Pubes' },
                { value: 'small pubes', label: 'Small Pubes' },
                { value: 'heart pubes', label: 'Heart Pubes' },
                { value: 'line shaped pubes', label: 'Line Shaped Pubes' },
                { value: 'full pubes', label: 'Full Pubes' },
                { value: 'sparse pubic hair', label: 'Sparse Pubic Hair' },
                // Anatomy
                { value: 'innie vagina', label: 'Innie Vagina' },
                { value: 'outie vagina', label: 'Outie Vagina' },
                { value: 'defined clitoris', label: 'Defined Clitoris' },
                // Colors
                { value: 'pink vagina', label: 'Pink Vagina' },
                { value: 'reddish vagina', label: 'Reddish Vagina' },
                { value: 'brown vagina', label: 'Brown Vagina' },
                { value: 'dark vagina', label: 'Dark Vagina' }
            ]
        }
    },

    // Hands & Feet
    extremities: {
        hands: {
            label: 'Hand Features',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'small hands', label: 'Small Hands' },
                { value: 'large hands', label: 'Large Hands' },
                { value: 'long fingers', label: 'Long Fingers' },
                { value: 'short fingers', label: 'Short Fingers' },
                { value: 'thick fingers', label: 'Thick Fingers' },
                { value: 'delicate fingers', label: 'Delicate Fingers' },
                { value: 'calloused hands', label: 'Calloused Hands' },
                { value: 'soft hands', label: 'Soft Hands' },
                { value: 'veiny hands', label: 'Veiny Hands' },
                { value: 'wrinkled hands', label: 'Wrinkled Hands' }
            ]
        },
        
        nails: {
            label: 'Nail Features',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'short nails', label: 'Short Nails' },
                { value: 'long nails', label: 'Long Nails' },
                { value: 'manicured nails', label: 'Manicured Nails' },
                { value: 'natural nails', label: 'Natural Nails' },
                { value: 'painted nails', label: 'Painted Nails' },
                { value: 'chipped nails', label: 'Chipped Nails' },
                { value: 'bitten nails', label: 'Bitten Nails' },
                { value: 'artificial nails', label: 'Artificial Nails' }
            ]
        },
        
        feet: {
            label: 'Foot Features',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'small feet', label: 'Small Feet' },
                { value: 'large feet', label: 'Large Feet' },
                { value: 'wide feet', label: 'Wide Feet' },
                { value: 'narrow feet', label: 'Narrow Feet' },
                { value: 'high arches', label: 'High Arches' },
                { value: 'flat feet', label: 'Flat Feet' },
                { value: 'long toes', label: 'Long Toes' },
                { value: 'short toes', label: 'Short Toes' },
                { value: 'pedicured feet', label: 'Pedicured Feet' },
                { value: 'callused feet', label: 'Callused Feet' }
            ]
        }
    },

    // Body Modifications & Markings
    bodyModifications: {
        tattoos: {
            label: 'Tattoo Categories',
            type: 'toggle',
            priority: 'optional',
            options: [
                // Size
                { value: 'small tattoo', label: 'Small Tattoo' },
                { value: 'medium tattoo', label: 'Medium Tattoo' },
                { value: 'large tattoo', label: 'Large Tattoo' },
                { value: 'full sleeve', label: 'Full Sleeve' },
                { value: 'half sleeve', label: 'Half Sleeve' },
                { value: 'back piece', label: 'Back Piece' },
                { value: 'chest piece', label: 'Chest Piece' },
                // Style
                { value: 'traditional tattoo', label: 'Traditional Tattoo' },
                { value: 'tribal tattoo', label: 'Tribal Tattoo' },
                { value: 'realistic tattoo', label: 'Realistic Tattoo' },
                { value: 'watercolor tattoo', label: 'Watercolor Tattoo' },
                { value: 'geometric tattoo', label: 'Geometric Tattoo' },
                { value: 'text tattoo', label: 'Text Tattoo' },
                { value: 'portrait tattoo', label: 'Portrait Tattoo' },
                // Location
                { value: 'arm tattoo', label: 'Arm Tattoo' },
                { value: 'leg tattoo', label: 'Leg Tattoo' },
                { value: 'back tattoo', label: 'Back Tattoo' },
                { value: 'chest tattoo', label: 'Chest Tattoo' },
                { value: 'shoulder tattoo', label: 'Shoulder Tattoo' },
                { value: 'neck tattoo', label: 'Neck Tattoo' },
                { value: 'hand tattoo', label: 'Hand Tattoo' },
                { value: 'face tattoo', label: 'Face Tattoo' },
                // Cultural
                { value: 'maori tattoo', label: 'Maori Tattoo' },
                { value: 'polynesian tattoo', label: 'Polynesian Tattoo' },
                { value: 'japanese tattoo', label: 'Japanese Tattoo' },
                { value: 'mandala tattoo', label: 'Mandala Tattoo' },
                { value: 'henna tattoo', label: 'Henna Tattoo' }
            ]
        },
        
        piercings: {
            label: 'Piercing Options',
            type: 'toggle',
            priority: 'optional',
            options: [
                // Ear
                { value: 'lobe piercing', label: 'Lobe Piercing' },
                { value: 'multiple lobe piercings', label: 'Multiple Lobe Piercings' },
                { value: 'cartilage piercing', label: 'Cartilage Piercing' },
                { value: 'industrial piercing', label: 'Industrial Piercing' },
                { value: 'tragus piercing', label: 'Tragus Piercing' },
                { value: 'helix piercing', label: 'Helix Piercing' },
                // Facial
                { value: 'nose piercing', label: 'Nose Piercing' },
                { value: 'septum piercing', label: 'Septum Piercing' },
                { value: 'eyebrow piercing', label: 'Eyebrow Piercing' },
                { value: 'lip piercing', label: 'Lip Piercing' },
                { value: 'tongue piercing', label: 'Tongue Piercing' },
                { value: 'cheek piercing', label: 'Cheek Piercing' },
                // Body
                { value: 'navel piercing', label: 'Navel Piercing' },
                { value: 'nipple piercing', label: 'Nipple Piercing' },
                { value: 'surface piercing', label: 'Surface Piercing' },
                { value: 'dermal piercing', label: 'Dermal Piercing' },
                { value: 'genital piercing', label: 'Genital Piercing' }
            ]
        },
        
        scars: {
            label: 'Scar Types',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'surgical scars', label: 'Surgical Scars' },
                { value: 'accident scars', label: 'Accident Scars' },
                { value: 'burn scars', label: 'Burn Scars' },
                { value: 'acne scars', label: 'Acne Scars' },
                { value: 'stretch marks', label: 'Stretch Marks' },
                { value: 'keloid scars', label: 'Keloid Scars' },
                { value: 'self-harm scars', label: 'Self-Harm Scars' },
                { value: 'battle scars', label: 'Battle Scars' },
                { value: 'chicken pox scars', label: 'Chicken Pox Scars' }
            ]
        }
    },

    // Clothing & Accessories
    accessories: {
        jewelry: {
            label: 'Jewelry Categories',
            type: 'toggle',
            priority: 'optional',
            options: [
                // Necklaces
                { value: 'choker', label: 'Choker' },
                { value: 'pendant', label: 'Pendant' },
                { value: 'chain', label: 'Chain' },
                { value: 'pearl necklace', label: 'Pearl Necklace' },
                { value: 'statement necklace', label: 'Statement Necklace' },
                // Earrings
                { value: 'studs', label: 'Studs' },
                { value: 'hoops', label: 'Hoops' },
                { value: 'dangles', label: 'Dangles' },
                { value: 'chandelier earrings', label: 'Chandelier Earrings' },
                { value: 'ear cuffs', label: 'Ear Cuffs' },
                // Rings
                { value: 'wedding ring', label: 'Wedding Ring' },
                { value: 'engagement ring', label: 'Engagement Ring' },
                { value: 'class ring', label: 'Class Ring' },
                { value: 'statement ring', label: 'Statement Ring' },
                { value: 'multiple rings', label: 'Multiple Rings' },
                // Bracelets
                { value: 'bangles', label: 'Bangles' },
                { value: 'charm bracelet', label: 'Charm Bracelet' },
                { value: 'watch', label: 'Watch' },
                { value: 'fitness tracker', label: 'Fitness Tracker' },
                { value: 'cuff bracelet', label: 'Cuff Bracelet' },
                // Other
                { value: 'ankle bracelet', label: 'Ankle Bracelet' },
                { value: 'toe ring', label: 'Toe Ring' },
                { value: 'hair jewelry', label: 'Hair Jewelry' },
                { value: 'body chains', label: 'Body Chains' }
            ]
        },
        
        eyewear: {
            label: 'Eyewear',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'glasses', label: 'Glasses' },
                { value: 'sunglasses', label: 'Sunglasses' },
                { value: 'reading glasses', label: 'Reading Glasses' },
                { value: 'square glasses', label: 'Square Glasses' },
                { value: 'round glasses', label: 'Round Glasses' },
                { value: 'oval glasses', label: 'Oval Glasses' },
                { value: 'cat eye glasses', label: 'Cat Eye Glasses' },
                { value: 'aviator glasses', label: 'Aviator Glasses' },
                { value: 'thick frame glasses', label: 'Thick Frame Glasses' },
                { value: 'thin frame glasses', label: 'Thin Frame Glasses' },
                { value: 'wire frame glasses', label: 'Wire Frame Glasses' },
                { value: 'black frame glasses', label: 'Black Frame Glasses' },
                { value: 'colored frame glasses', label: 'Colored Frame Glasses' }
            ]
        },
        
        clothingStyle: {
            label: 'Clothing Style',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'casual style', label: 'Casual Style' },
                { value: 'formal style', label: 'Formal Style' },
                { value: 'business casual style', label: 'Business Casual Style' },
                { value: 'alternative style', label: 'Alternative Style' },
                { value: 'vintage style', label: 'Vintage Style' },
                { value: 'modern style', label: 'Modern Style' }
            ]
        }
    }
};

// === FORM GENERATION FUNCTIONS ===

/**
 * Initialize human character creation form
 */
function initializeHumanForm() {
    const container = document.getElementById('human-tab');
    if (!container) {
        console.error('Human tab container not found');
        return;
    }

    // Initialize subcategories as enabled by default
    if (window.subcategoriesEnabled === undefined) {
        window.subcategoriesEnabled = true;
    }

    console.log('Initializing human form with data:', Object.keys(HUMAN_DATA));
    
    try {
        container.innerHTML = `
            <div class="global-controls">
                <div class="global-controls-left">
                    <button class="content-toggle sfw-mode" onclick="toggleContentRating()" title="Toggle between SFW and NSFW content">
                        SFW
                    </button>
                </div>
                <div class="global-controls-right">
                    <button class="subcategory-toggle subcategory-on" onclick="toggleSubcategories()" title="Click to disable subcategories (switch to flat list view)">
                        SUBCATEGORIES
                    </button>
                    <button class="optional-toggle hide-optional" onclick="toggleOptionalContent()" title="Toggle optional content visibility">
                        SKIP OPTIONAL
                    </button>
                </div>
            </div>

            <div class="section">
                <h3>CHARACTER INFORMATION</h3>
                <div class="form-group">
                    <label for="character-name">CHARACTER NAME</label>
                    <input type="text" id="character-name" placeholder="ENTER CHARACTER NAME...">
                </div>
                ${generateFormSection(HUMAN_DATA.basicInfo)}
            </div>

            <div class="section">
                <h3>Hair Features</h3>
                ${generateFormSection(HUMAN_DATA.hair)}
            </div>

            <div class="section">
                <h3>Facial Features</h3>
                ${generateFormSection(HUMAN_DATA.facialFeatures)}
            </div>

            <div class="section">
                <h3>Beauty Marks & Skin</h3>
                ${generateFormSection(HUMAN_DATA.beautyMarks)}
            </div>

            <div class="section">
                <h3>Body Build</h3>
                ${generateFormSection(HUMAN_DATA.bodyBuild)}
            </div>

            <div class="section">
                <h3>Torso Details</h3>
                ${generateFormSection(HUMAN_DATA.torsoDetailed)}
            </div>

            <div class="section">
                <h3>Lower Body Details</h3>
                ${generateFormSection(HUMAN_DATA.lowerBodyDetailed)}
            </div>

            <div class="section">
                <h3>Hands & Feet</h3>
                ${generateFormSection(HUMAN_DATA.extremities)}
            </div>

            <div class="section">
                <h3>Body Modifications</h3>
                ${generateFormSection(HUMAN_DATA.bodyModifications)}
            </div>

            <div class="section">
                <h3>Accessories</h3>
                ${generateFormSection(HUMAN_DATA.accessories)}
            </div>

            <div class="section">
                <h3>Custom Tags</h3>
                <div class="form-group">
                    <label for="custom-tags">Additional Tags (comma-separated)</label>
                    <textarea id="custom-tags" placeholder="Enter custom tags separated by commas..."></textarea>
                </div>
            </div>
        `;
        
        // Set the correct initial button state
        setTimeout(() => {
            updateToggleButtonState();
        }, 0);
        
        console.log('Human form HTML generated successfully');
    } catch (error) {
        console.error('Error generating human form:', error);
    }
}

/**
 * Generate form section HTML
 * @param {Object} sectionData - Section data object
 * @returns {string} HTML string
 */
function generateFormSection(sectionData) {
    if (!sectionData) {
        console.error('generateFormSection called with null/undefined sectionData');
        return '';
    }
    
    console.log('Generating form section for:', Object.keys(sectionData));
    
    // Group fields by priority
    const groups = {
        essential: [],
        optional: [],
        nsfw: []
    };
    
    // Sort fields into priority groups
    Object.entries(sectionData).forEach(([key, field]) => {
        if (!field) {
            console.warn(`Field ${key} is null/undefined`);
            return;
        }
        
        const priority = field.priority || 'essential'; // Default to essential if no priority
        if (groups[priority]) {
            groups[priority].push([key, field]);
        } else {
            groups.essential.push([key, field]); // Fallback to essential
        }
    });
    
    console.log('Field groups:', {
        essential: groups.essential.map(([key]) => key),
        optional: groups.optional.map(([key]) => key),
        nsfw: groups.nsfw.map(([key]) => key)
    });
    
    let html = '';
    
    // Generate HTML for each group in order: essential → optional → nsfw
    const groupConfigs = [
        { 
            name: 'essential', 
            fields: groups.essential, 
            title: '', // No header for essentials - they're the default
            visible: true 
        },
        { 
            name: 'optional', 
            fields: groups.optional, 
            title: '✨ OPTIONAL DETAILS', 
            visible: true,
            className: 'group-separator optional-group'
        },
        { 
            name: 'nsfw', 
            fields: groups.nsfw, 
            title: '🔞 ADULT CONTENT', 
            visible: false, // Hidden by default
            className: 'group-separator nsfw-group'
        }
    ];
    
    groupConfigs.forEach(group => {
        if (group.fields.length === 0) return; // Skip empty groups
        
        // Add group header if specified
        if (group.title) {
            html += `<div class="${group.className || 'group-separator'}">`;
            html += `<h4 class="group-title">${group.title}</h4>`;
            html += `</div>`;
        }
        
        // Generate fields for this group
        group.fields.forEach(([key, field]) => {
        console.log(`Processing field ${key}:`, field.label, field.type, field.options?.length || 0, 'options');
        
        // Determine CSS classes for the form group
        let cssClasses = 'form-group';
        
        // Check if this field is NSFW
        if (field.nsfw) {
            cssClasses += ' nsfw-content';
        }
        
        // Check if this field is optional
        if (field.optional || key === 'skinTexture') {
            cssClasses += ' optional-content optional-hidden';
        }
        
        html += `<div class="${cssClasses}">`;
        html += `<label>${field.label}</label>`;
        
        if (field.type === 'select') {
            html += `<select data-field="${key}">`;
            
            // Handle fields with subcategory toggle support
            if (field.useSubcategories && field.optgroups && field.flatOptions) {
                // Check global subcategory preference (default to true)
                const useSubcategories = window.subcategoriesEnabled !== false;
                
                if (useSubcategories) {
                    // Use optgroups
                    field.optgroups.forEach(optgroup => {
                        html += `<optgroup label="${optgroup.label}">`;
                        optgroup.options.forEach(option => {
                            html += `<option value="${option.value}">${option.label}</option>`;
                        });
                        html += `</optgroup>`;
                    });
                } else {
                    // Use flat options
                    field.flatOptions.forEach(option => {
                        html += `<option value="${option.value}">${option.label}</option>`;
                    });
                }
            }
            // Handle optgroups (for other fields with subcategories)
            else if (field.optgroups && Array.isArray(field.optgroups)) {
                field.optgroups.forEach(optgroup => {
                    html += `<optgroup label="${optgroup.label}">`;
                    optgroup.options.forEach(option => {
                        html += `<option value="${option.value}">${option.label}</option>`;
                    });
                    html += `</optgroup>`;
                });
            } 
            // Handle regular options
            else if (field.options && Array.isArray(field.options)) {
                field.options.forEach(option => {
                    html += `<option value="${option.value}">${option.label}</option>`;
                });
            } else {
                console.warn(`Field ${key} has no valid options array or optgroups`);
            }
            html += `</select>`;
        } else if (field.type === 'toggle') {
            html += `<div class="toggle-group">`;
            if (field.options && Array.isArray(field.options)) {
                field.options.forEach(option => {
                    html += `<button class="toggle-btn" data-value="${option.value}" type="button">${option.label}</button>`;
                });
            } else {
                console.warn(`Field ${key} has no valid options array`);
            }
            html += `</div>`;
        } else if (field.type === 'number') {
            html += `<input type="number" data-field="${key}" min="${field.min || ''}" max="${field.max || ''}" placeholder="${field.placeholder || ''}">`;
        }
        
        html += `</div>`;
        });
    });
    
    console.log(`Generated HTML length: ${html.length}`);
    return html;
}

/**
 * Get current human character data
 * @returns {Object} Character data object
 */
function getHumanCharacterData() {
    const data = {};
    
    // Get character name
    const nameInput = document.getElementById('character-name');
    if (nameInput) {
        data.name = nameInput.value;
    }
    
    // Get selected tags from UI
    const selectedTags = new Set();
    document.querySelectorAll('#human-tab .toggle-btn.active').forEach(btn => {
        selectedTags.add(btn.dataset.value);
    });
    
    document.querySelectorAll('#human-tab select').forEach(select => {
        if (select.value) {
            selectedTags.add(select.value);
        }
    });
    
    document.querySelectorAll('#human-tab input[type="number"]').forEach(input => {
        if (input.value) {
            data[input.dataset.field] = input.value;
        }
    });
    
    data.selectedTags = selectedTags;
    
    // Get custom tags
    const customTagsInput = document.getElementById('custom-tags');
    if (customTagsInput) {
        data.customTags = customTagsInput.value;
    }
    
    return data;
}

/**
 * Clear saved state (for debugging)
 */
function clearSavedState() {
    try {
        localStorage.removeItem('akshoverse-studio-state');
        console.log('Cleared saved state');
    } catch (error) {
        console.error('Error clearing saved state:', error);
    }
}

/**
 * Toggle subcategories on/off for all supported fields across the entire tab
 */
function toggleSubcategories() {
    // Toggle global subcategory state
    window.subcategoriesEnabled = !window.subcategoriesEnabled;
    
    // Regenerate the entire form to apply the change to all sections
    if (window.AkshoHumanData) {
        // Store current form values before regenerating
        const currentData = window.AkshoHumanData.getHumanCharacterData();
        
        // Regenerate the form
        window.AkshoHumanData.initializeHumanForm();
        
        // Restore form values after regeneration
        restoreFormValues(currentData);
        
        // Re-setup event listeners after regenerating
        if (window.akshoStudio) {
            window.akshoStudio.setupDynamicEventListeners();
        }
    }
    
    // Update button state AFTER regeneration
    updateToggleButtonState();
    
    console.log('Global subcategories toggled:', window.subcategoriesEnabled ? 'ON' : 'OFF');
}

/**
 * Update the toggle button visual state
 */
function updateToggleButtonState() {
    const button = document.querySelector('.subcategory-toggle');
    if (button) {
        if (window.subcategoriesEnabled) {
            button.title = 'Click to disable subcategories (switch to flat list view)';
            button.classList.add('subcategory-on');
            button.classList.remove('subcategory-off');
        } else {
            button.title = 'Click to enable subcategories (switch to grouped view)';
            button.classList.add('subcategory-off');
            button.classList.remove('subcategory-on');
        }
    }
}

/**
 * Restore form values after form regeneration
 */
function restoreFormValues(data) {
    if (!data) return;
    
    // Restore character name
    const nameInput = document.getElementById('character-name');
    if (nameInput && data.characterName) {
        nameInput.value = data.characterName;
    }
    
    // Restore select values
    Object.keys(data).forEach(key => {
        if (key === 'characterName' || key === 'selectedTags' || key === 'customTags') return;
        
        const input = document.querySelector(`select[data-field="${key}"], input[data-field="${key}"]`);
        if (input && data[key]) {
            input.value = data[key];
        }
    });
    
    // Restore toggle buttons
    if (data.selectedTags) {
        data.selectedTags.forEach(tag => {
            const toggleBtn = document.querySelector(`.toggle-btn[data-tag="${tag}"]`);
            if (toggleBtn) {
                toggleBtn.classList.add('active');
            }
        });
    }
    
    // Restore custom tags
    const customTagsInput = document.getElementById('custom-tags');
    if (customTagsInput && data.customTags) {
        customTagsInput.value = data.customTags;
    }
}

// === EXPORT MODULE ===

window.AkshoHumanData = {
    HUMAN_DATA,
    initializeHumanForm,
    generateFormSection,
    getHumanCharacterData,
    clearSavedState,
    toggleSubcategories,
    restoreFormValues,
    updateToggleButtonState
};

// Make toggleSubcategories globally available for onclick
window.toggleSubcategories = toggleSubcategories;

// Export for Node.js compatibility
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        HUMAN_DATA,
        initializeHumanForm,
        generateFormSection,
        getHumanCharacterData
    };
}