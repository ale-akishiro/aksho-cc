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
            label: 'HAIR COLOR',
            type: 'select',
            priority: 'essential',
            useSubcategories: true,
            optgroups: [
                {
                    label: 'WHITE & GRAY RANGE',
                    options: [
                        { value: 'white hair', label: 'WHITE HAIR' },
                        { value: 'platinum white hair', label: 'PLATINUM WHITE HAIR' },
                        { value: 'silver hair', label: 'SILVER HAIR' },
                        { value: 'light gray hair', label: 'LIGHT GRAY HAIR' },
                        { value: 'gray hair', label: 'GRAY HAIR' },
                        { value: 'dark gray hair', label: 'DARK GRAY HAIR' },
                        { value: 'salt and pepper hair', label: 'SALT AND PEPPER HAIR' },
                        { value: 'premature gray hair', label: 'PREMATURE GRAY HAIR' }
                    ]
                },
                {
                    label: 'BLONDE RANGE',
                    options: [
                        { value: 'platinum blonde hair', label: 'PLATINUM BLONDE HAIR' },
                        { value: 'bleached blonde hair', label: 'BLEACHED BLONDE HAIR' },
                        { value: 'ice blonde hair', label: 'ICE BLONDE HAIR' },
                        { value: 'ash blonde hair', label: 'ASH BLONDE HAIR' },
                        { value: 'golden blonde hair', label: 'GOLDEN BLONDE HAIR' },
                        { value: 'honey blonde hair', label: 'HONEY BLONDE HAIR' },
                        { value: 'strawberry blonde hair', label: 'STRAWBERRY BLONDE HAIR' },
                        { value: 'sandy blonde hair', label: 'SANDY BLONDE HAIR' },
                        { value: 'dirty blonde hair', label: 'DIRTY BLONDE HAIR' },
                        { value: 'dark blonde hair', label: 'DARK BLONDE HAIR' }
                    ]
                },
                {
                    label: 'BROWN RANGE',
                    options: [
                        { value: 'light brown hair', label: 'LIGHT BROWN HAIR' },
                        { value: 'caramel brown hair', label: 'CARAMEL BROWN HAIR' },
                        { value: 'medium brown hair', label: 'MEDIUM BROWN HAIR' },
                        { value: 'chestnut brown hair', label: 'CHESTNUT BROWN HAIR' },
                        { value: 'chocolate brown hair', label: 'CHOCOLATE BROWN HAIR' },
                        { value: 'coffee brown hair', label: 'COFFEE BROWN HAIR' },
                        { value: 'dark brown hair', label: 'DARK BROWN HAIR' },
                        { value: 'espresso brown hair', label: 'ESPRESSO BROWN HAIR' }
                    ]
                },
                {
                    label: 'RED RANGE',
                    options: [
                        { value: 'strawberry hair', label: 'STRAWBERRY HAIR' },
                        { value: 'light red hair', label: 'LIGHT RED HAIR' },
                        { value: 'ginger hair', label: 'GINGER HAIR' },
                        { value: 'copper hair', label: 'COPPER HAIR' },
                        { value: 'auburn hair', label: 'AUBURN HAIR' },
                        { value: 'auburn brown hair', label: 'AUBURN BROWN HAIR' },
                        { value: 'burgundy hair', label: 'BURGUNDY HAIR' },
                        { value: 'mahogany hair', label: 'MAHOGANY HAIR' },
                        { value: 'deep red hair', label: 'DEEP RED HAIR' }
                    ]
                },
                {
                    label: 'BLACK RANGE',
                    options: [
                        { value: 'soft black hair', label: 'SOFT BLACK HAIR' },
                        { value: 'brown-black hair', label: 'BROWN-BLACK HAIR' },
                        { value: 'jet black hair', label: 'JET BLACK HAIR' },
                        { value: 'blue-black hair', label: 'BLUE-BLACK HAIR' },
                        { value: 'raven black hair', label: 'RAVEN BLACK HAIR' }
                    ]
                },
                {
                    label: 'FANTASY COLORS',
                    options: [
                        { value: 'pastel pink hair', label: 'PASTEL PINK HAIR' },
                        { value: 'hot pink hair', label: 'HOT PINK HAIR' },
                        { value: 'magenta hair', label: 'MAGENTA HAIR' },
                        { value: 'light blue hair', label: 'LIGHT BLUE HAIR' },
                        { value: 'blue hair', label: 'BLUE HAIR' },
                        { value: 'navy blue hair', label: 'NAVY BLUE HAIR' },
                        { value: 'teal hair', label: 'TEAL HAIR' },
                        { value: 'mint green hair', label: 'MINT GREEN HAIR' },
                        { value: 'green hair', label: 'GREEN HAIR' },
                        { value: 'forest green hair', label: 'FOREST GREEN HAIR' },
                        { value: 'lavender hair', label: 'LAVENDER HAIR' },
                        { value: 'purple hair', label: 'PURPLE HAIR' },
                        { value: 'violet hair', label: 'VIOLET HAIR' },
                        { value: 'orange hair', label: 'ORANGE HAIR' },
                        { value: 'yellow hair', label: 'YELLOW HAIR' }
                    ]
                },
                {
                    label: 'MULTI-COLOR EFFECTS',
                    options: [
                        { value: 'rainbow hair', label: 'RAINBOW HAIR' },
                        { value: 'ombre hair', label: 'OMBRE HAIR' },
                        { value: 'color-streaked hair', label: 'COLOR-STREAKED HAIR' },
                        { value: 'two-tone hair', label: 'TWO-TONE HAIR' },
                        { value: 'gradient hair', label: 'GRADIENT HAIR' },
                        { value: 'highlighted hair', label: 'HIGHLIGHTED HAIR' },
                        { value: 'lowlighted hair', label: 'LOWLIGHTED HAIR' }
                    ]
                }
            ],
            // Flat version without subcategories (for toggle feature)
            flatOptions: [
                // White/Gray
                { value: 'white hair', label: 'WHITE HAIR' },
                { value: 'platinum white hair', label: 'PLATINUM WHITE HAIR' },
                { value: 'silver hair', label: 'SILVER HAIR' },
                { value: 'light gray hair', label: 'LIGHT GRAY HAIR' },
                { value: 'gray hair', label: 'GRAY HAIR' },
                { value: 'dark gray hair', label: 'DARK GRAY HAIR' },
                { value: 'salt and pepper hair', label: 'SALT AND PEPPER HAIR' },
                { value: 'premature gray hair', label: 'PREMATURE GRAY HAIR' },
                // Blonde
                { value: 'platinum blonde hair', label: 'PLATINUM BLONDE HAIR' },
                { value: 'bleached blonde hair', label: 'BLEACHED BLONDE HAIR' },
                { value: 'ice blonde hair', label: 'ICE BLONDE HAIR' },
                { value: 'ash blonde hair', label: 'ASH BLONDE HAIR' },
                { value: 'golden blonde hair', label: 'GOLDEN BLONDE HAIR' },
                { value: 'honey blonde hair', label: 'HONEY BLONDE HAIR' },
                { value: 'strawberry blonde hair', label: 'STRAWBERRY BLONDE HAIR' },
                { value: 'sandy blonde hair', label: 'SANDY BLONDE HAIR' },
                { value: 'dirty blonde hair', label: 'DIRTY BLONDE HAIR' },
                { value: 'dark blonde hair', label: 'DARK BLONDE HAIR' },
                // Brown
                { value: 'light brown hair', label: 'LIGHT BROWN HAIR' },
                { value: 'caramel brown hair', label: 'CARAMEL BROWN HAIR' },
                { value: 'medium brown hair', label: 'MEDIUM BROWN HAIR' },
                { value: 'chestnut brown hair', label: 'CHESTNUT BROWN HAIR' },
                { value: 'chocolate brown hair', label: 'CHOCOLATE BROWN HAIR' },
                { value: 'coffee brown hair', label: 'COFFEE BROWN HAIR' },
                { value: 'dark brown hair', label: 'DARK BROWN HAIR' },
                { value: 'espresso brown hair', label: 'ESPRESSO BROWN HAIR' },
                // Red
                { value: 'strawberry hair', label: 'STRAWBERRY HAIR' },
                { value: 'light red hair', label: 'LIGHT RED HAIR' },
                { value: 'ginger hair', label: 'GINGER HAIR' },
                { value: 'copper hair', label: 'COPPER HAIR' },
                { value: 'auburn hair', label: 'AUBURN HAIR' },
                { value: 'auburn brown hair', label: 'AUBURN BROWN HAIR' },
                { value: 'burgundy hair', label: 'BURGUNDY HAIR' },
                { value: 'mahogany hair', label: 'MAHOGANY HAIR' },
                { value: 'deep red hair', label: 'DEEP RED HAIR' },
                // Black
                { value: 'soft black hair', label: 'SOFT BLACK HAIR' },
                { value: 'brown-black hair', label: 'BROWN-BLACK HAIR' },
                { value: 'jet black hair', label: 'JET BLACK HAIR' },
                { value: 'blue-black hair', label: 'BLUE-BLACK HAIR' },
                { value: 'raven black hair', label: 'RAVEN BLACK HAIR' },
                // Fantasy
                { value: 'pastel pink hair', label: 'PASTEL PINK HAIR' },
                { value: 'hot pink hair', label: 'HOT PINK HAIR' },
                { value: 'magenta hair', label: 'MAGENTA HAIR' },
                { value: 'light blue hair', label: 'LIGHT BLUE HAIR' },
                { value: 'blue hair', label: 'BLUE HAIR' },
                { value: 'navy blue hair', label: 'NAVY BLUE HAIR' },
                { value: 'teal hair', label: 'TEAL HAIR' },
                { value: 'mint green hair', label: 'MINT GREEN HAIR' },
                { value: 'green hair', label: 'GREEN HAIR' },
                { value: 'forest green hair', label: 'FOREST GREEN HAIR' },
                { value: 'lavender hair', label: 'LAVENDER HAIR' },
                { value: 'purple hair', label: 'PURPLE HAIR' },
                { value: 'violet hair', label: 'VIOLET HAIR' },
                { value: 'orange hair', label: 'ORANGE HAIR' },
                { value: 'yellow hair', label: 'YELLOW HAIR' },
                // Multi-Color
                { value: 'rainbow hair', label: 'RAINBOW HAIR' },
                { value: 'ombre hair', label: 'OMBRE HAIR' },
                { value: 'color-streaked hair', label: 'COLOR-STREAKED HAIR' },
                { value: 'two-tone hair', label: 'TWO-TONE HAIR' },
                { value: 'gradient hair', label: 'GRADIENT HAIR' },
                { value: 'highlighted hair', label: 'HIGHLIGHTED HAIR' },
                { value: 'lowlighted hair', label: 'LOWLIGHTED HAIR' }
            ]
        },
        
        hairTexture: {
            label: 'HAIR TEXTURE',
            type: 'select',
            priority: 'optional',
            options: [
                { value: '', label: 'SELECT HAIR TEXTURE...' },
                
                // Straightness (straight to curly)
                { value: 'pin straight hair', label: 'PIN STRAIGHT' },
                { value: 'straight hair', label: 'STRAIGHT' },
                { value: 'slightly wavy hair', label: 'SLIGHTLY WAVY' },
                { value: 'wavy hair', label: 'WAVY' },
                { value: 'loose curls', label: 'LOOSE CURLS' },
                { value: 'tight curls', label: 'TIGHT CURLS' },
                { value: 'coily hair', label: 'COILY' },
                { value: 'kinky hair', label: 'KINKY' },
                { value: 'afro texture hair', label: 'AFRO TEXTURE' },
                
                // Thickness (fine to coarse)
                { value: 'fine hair', label: 'FINE' },
                { value: 'thick hair', label: 'THICK' },
                { value: 'coarse hair', label: 'COARSE' },
                
                // Feel/Quality
                { value: 'silky hair', label: 'SILKY' },
                { value: 'smooth hair', label: 'SMOOTH' },
                { value: 'wiry hair', label: 'WIRY' },
                { value: 'frizzy hair', label: 'FRIZZY' }
            ]
        },
        
        hairLength: {
            label: 'HAIR LENGTH',
            type: 'select',
            priority: 'essential',
            options: [
                { value: '', label: 'SELECT HAIR LENGTH...' },
                { value: 'bald', label: 'BALD' },
                { value: 'very short hair', label: 'VERY SHORT HAIR' },
                { value: 'short hair', label: 'SHORT HAIR' },
                { value: 'medium hair', label: 'MEDIUM HAIR' },
                { value: 'long hair', label: 'LONG HAIR' },
                { value: 'very long hair', label: 'VERY LONG HAIR' },
                { value: 'absurdly long hair', label: 'ABSURDLY LONG HAIR' }
            ]
        },
        
        hairStyle: {
            label: 'HAIRSTYLE',
            type: 'select',
            priority: 'optional',
            options: [
                { value: '', label: 'SELECT HAIRSTYLE...' },
                
                // Professional Styles
                { value: 'business cut', label: 'BUSINESS CUT' },
                { value: 'corporate style', label: 'CORPORATE STYLE' },
                { value: 'professional updo', label: 'PROFESSIONAL UPDO' },
                { value: 'neat ponytail', label: 'NEAT PONYTAIL' },
                { value: 'conservative style', label: 'CONSERVATIVE STYLE' },
                
                // Casual Styles
                { value: 'messy bun', label: 'MESSY BUN' },
                { value: 'loose waves', label: 'LOOSE WAVES' },
                { value: 'beach waves', label: 'BEACH WAVES' },
                { value: 'tousled hair', label: 'TOUSLED HAIR' },
                { value: 'bedhead style', label: 'BEDHEAD STYLE' },
                
                // Elaborate Styles
                { value: 'intricate braids', label: 'INTRICATE BRAIDS' },
                { value: 'formal updo', label: 'FORMAL UPDO' },
                { value: 'wedding hair', label: 'WEDDING HAIR' },
                { value: 'red carpet style', label: 'RED CARPET STYLE' },
                { value: 'vintage style', label: 'VINTAGE STYLE' },
                
                // Cultural Styles
                { value: 'afro puffs', label: 'AFRO PUFFS' },
                { value: 'bantu knots', label: 'BANTU KNOTS' },
                { value: 'box braids', label: 'BOX BRAIDS' },
                { value: 'cornrows', label: 'CORNROWS' },
                { value: 'dreadlocks', label: 'DREADLOCKS' },
                { value: 'twist-outs', label: 'TWIST-OUTS' },
                
                // Alternative Styles
                { value: 'undercut', label: 'UNDERCUT' },
                { value: 'mohawk', label: 'MOHAWK' },
                { value: 'shaved sides', label: 'SHAVED SIDES' },
                { value: 'punk style', label: 'PUNK STYLE' },
                { value: 'emo fringe', label: 'EMO FRINGE' },
                { value: 'scene hair', label: 'SCENE HAIR' }
            ]
        },
        
        bangs: {
            label: 'BANGS & FRINGE',
            type: 'select',
            priority: 'optional',
            options: [
                { value: '', label: 'SELECT BANGS TYPE...' },
                { value: 'blunt bangs', label: 'BLUNT BANGS' },
                { value: 'arched bangs', label: 'ARCHED BANGS' },
                { value: 'asymmetrical bangs', label: 'ASYMMETRICAL BANGS' },
                { value: 'side-swept bangs', label: 'SIDE-SWEPT BANGS' },
                { value: 'wispy bangs', label: 'WISPY BANGS' },
                { value: 'curtain bangs', label: 'CURTAIN BANGS' },
                { value: 'choppy bangs', label: 'CHOPPY BANGS' },
                { value: 'micro bangs', label: 'MICRO BANGS' },
                { value: 'long bangs', label: 'LONG BANGS' },
                { value: 'layered bangs', label: 'LAYERED BANGS' }
            ]
        },
        
        sidelocks: {
            label: 'SIDELOCKS',
            type: 'select',
            priority: 'optional',
            options: [
                { value: '', label: 'SELECT SIDELOCKS...' },
                { value: 'very short sidelocks', label: 'VERY SHORT SIDELOCKS' },
                { value: 'short sidelocks', label: 'SHORT SIDELOCKS' },
                { value: 'medium sidelocks', label: 'MEDIUM SIDELOCKS' },
                { value: 'long sidelocks', label: 'LONG SIDELOCKS' },
                { value: 'very long sidelocks', label: 'VERY LONG SIDELOCKS' },
                { value: 'single sidelock', label: 'SINGLE SIDELOCK' },
                { value: 'very short single sidelock', label: 'VERY SHORT SINGLE SIDELOCK' },
                { value: 'short single sidelock', label: 'SHORT SINGLE SIDELOCK' },
                { value: 'medium single sidelock', label: 'MEDIUM SINGLE SIDELOCK' },
                { value: 'long single sidelock', label: 'LONG SINGLE SIDELOCK' },
                { value: 'very long single sidelock', label: 'VERY LONG SINGLE SIDELOCK' }
            ]
        },
        
        hairAccessories: {
            label: 'HAIR ACCESSORIES',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'hair clips', label: 'HAIR CLIPS' },
                { value: 'hair pins', label: 'HAIR PINS' },
                { value: 'hair ties', label: 'HAIR TIES' },
                { value: 'headbands', label: 'HEADBANDS' },
                { value: 'hair scarves', label: 'HAIR SCARVES' },
                { value: 'hair ribbons', label: 'HAIR RIBBONS' },
                { value: 'hair flowers', label: 'HAIR FLOWERS' },
                { value: 'hair jewelry', label: 'HAIR JEWELRY' }
            ]
        }
    },

    // Facial Features Expanded
    facialFeatures: {
        faceShape: {
            label: 'FACE SHAPE',
            type: 'select',
            priority: 'optional',
            options: [
                { value: '', label: 'SELECT FACE SHAPE...' },
                { value: 'oval face', label: 'OVAL FACE' },
                { value: 'round face', label: 'ROUND FACE' },
                { value: 'square face', label: 'SQUARE FACE' },
                { value: 'heart face', label: 'HEART FACE' },
                { value: 'diamond face', label: 'DIAMOND FACE' },
                { value: 'oblong face', label: 'OBLONG FACE' },
                { value: 'triangular face', label: 'TRIANGULAR FACE' },
                { value: 'rectangular face', label: 'RECTANGULAR FACE' }
            ]
        },
        
        forehead: {
            label: 'FOREHEAD',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'high forehead', label: 'HIGH FOREHEAD' },
                { value: 'low forehead', label: 'LOW FOREHEAD' },
                { value: 'wide forehead', label: 'WIDE FOREHEAD' },
                { value: 'narrow forehead', label: 'NARROW FOREHEAD' },
                { value: 'prominent forehead', label: 'PROMINENT FOREHEAD' },
                { value: 'receding hairline', label: 'RECEDING HAIRLINE' },
                { value: "widow's peak", label: "WIDOW's Peak" }
            ]
        },
        
        eyebrows: {
            label: 'EYEBROW VARIATIONS',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'thin eyebrows', label: 'THIN EYEBROWS' },
                { value: 'thick eyebrows', label: 'THICK EYEBROWS' },
                { value: 'arched eyebrows', label: 'ARCHED EYEBROWS' },
                { value: 'straight eyebrows', label: 'STRAIGHT EYEBROWS' },
                { value: 'bushy eyebrows', label: 'BUSHY EYEBROWS' },
                { value: 'plucked eyebrows', label: 'PLUCKED EYEBROWS' },
                { value: 'natural eyebrows', label: 'NATURAL EYEBROWS' },
                { value: 'unibrow', label: 'UNIBROW' },
                { value: 'sparse eyebrows', label: 'SPARSE EYEBROWS' },
                { value: 'defined eyebrows', label: 'DEFINED EYEBROWS' }
            ]
        },
        
        eyeShape: {
            label: 'EYE SHAPE & FEATURES',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'almond eyes', label: 'ALMOND EYES' },
                { value: 'round eyes', label: 'ROUND EYES' },
                { value: 'hooded eyes', label: 'HOODED EYES' },
                { value: 'upturned eyes', label: 'UPTURNED EYES' },
                { value: 'downturned eyes', label: 'DOWNTURNED EYES' },
                { value: 'close-set eyes', label: 'CLOSE-SET EYES' },
                { value: 'wide-set eyes', label: 'WIDE-SET EYES' },
                { value: 'deep-set eyes', label: 'DEEP-SET EYES' },
                { value: 'prominent eyes', label: 'PROMINENT EYES' },
                { value: 'monolid eyes', label: 'MONOLID EYES' },
                { value: 'double eyelid', label: 'DOUBLE EYELID' }
            ]
        },
        
        eyeColor: {
            label: 'EYE COLOR',
            type: 'select',
            priority: 'essential',
            options: [
                { value: '', label: 'SELECT EYE COLOR...' },
                
                // Blue Family
                { value: 'ice blue eyes', label: 'ICE BLUE EYES' },
                { value: 'sky blue eyes', label: 'SKY BLUE EYES' },
                { value: 'navy blue eyes', label: 'NAVY BLUE EYES' },
                { value: 'steel blue eyes', label: 'STEEL BLUE EYES' },
                { value: 'aqua blue eyes', label: 'AQUA BLUE EYES' },
                
                // Green Family
                { value: 'emerald green eyes', label: 'EMERALD GREEN EYES' },
                { value: 'forest green eyes', label: 'FOREST GREEN EYES' },
                { value: 'hazel green eyes', label: 'HAZEL GREEN EYES' },
                { value: 'olive green eyes', label: 'OLIVE GREEN EYES' },
                { value: 'mint green eyes', label: 'MINT GREEN EYES' },
                
                // Brown Family
                { value: 'amber eyes', label: 'AMBER EYES' },
                { value: 'honey brown eyes', label: 'HONEY BROWN EYES' },
                { value: 'chocolate brown eyes', label: 'CHOCOLATE BROWN EYES' },
                { value: 'dark brown eyes', label: 'DARK BROWN EYES' },
                { value: 'mahogany eyes', label: 'MAHOGANY EYES' },
                
                // Gray Family
                { value: 'light gray eyes', label: 'LIGHT GRAY EYES' },
                { value: 'dark gray eyes', label: 'DARK GRAY EYES' },
                { value: 'blue-gray eyes', label: 'BLUE-GRAY EYES' },
                { value: 'green-gray eyes', label: 'GREEN-GRAY EYES' },
                
                // Rare Colors
                { value: 'violet eyes', label: 'VIOLET EYES' },
                { value: 'golden eyes', label: 'GOLDEN EYES' },
                { value: 'heterochromia', label: 'HETEROCHROMIA' },
                { value: 'sectoral heterochromia', label: 'SECTORAL HETEROCHROMIA' }
            ]
        },
        
        eyeFeatures: {
            label: 'EYE FEATURES',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'long eyelashes', label: 'LONG EYELASHES' },
                { value: 'short eyelashes', label: 'SHORT EYELASHES' },
                { value: 'thick eyelashes', label: 'THICK EYELASHES' },
                { value: 'sparse eyelashes', label: 'SPARSE EYELASHES' },
                { value: 'curled eyelashes', label: 'CURLED EYELASHES' },
                { value: 'straight eyelashes', label: 'STRAIGHT EYELASHES' },
                { value: 'heavy eyelids', label: 'HEAVY EYELIDS' },
                { value: 'light eyelids', label: 'LIGHT EYELIDS' },
                { value: 'eyebags', label: 'EYEBAGS' },
                { value: 'dark circles', label: 'DARK CIRCLES' },
                { value: "crow's feet", label: "CROW's Feet" },
                { value: 'laugh lines', label: 'LAUGH LINES' }
            ]
        },
        
        nose: {
            label: 'NOSE VARIATIONS',
            type: 'select',
            priority: 'optional',
            options: [
                { value: '', label: 'SELECT NOSE TYPE...' },
                { value: 'button nose', label: 'BUTTON NOSE' },
                { value: 'aquiline nose', label: 'AQUILINE NOSE' },
                { value: 'roman nose', label: 'ROMAN NOSE' },
                { value: 'snub nose', label: 'SNUB NOSE' },
                { value: 'wide nose', label: 'WIDE NOSE' },
                { value: 'narrow nose', label: 'NARROW NOSE' },
                { value: 'long nose', label: 'LONG NOSE' },
                { value: 'short nose', label: 'SHORT NOSE' },
                { value: 'crooked nose', label: 'CROOKED NOSE' },
                { value: 'straight nose', label: 'STRAIGHT NOSE' },
                { value: 'bulbous nose', label: 'BULBOUS NOSE' },
                { value: 'pointed nose', label: 'POINTED NOSE' }
            ]
        },
        
        lips: {
            label: 'LIP VARIATIONS',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'thin lips', label: 'THIN LIPS' },
                { value: 'full lips', label: 'FULL LIPS' },
                { value: 'pouty lips', label: 'POUTY LIPS' },
                { value: 'wide lips', label: 'WIDE LIPS' },
                { value: 'narrow lips', label: 'NARROW LIPS' },
                { value: 'bow-shaped lips', label: 'BOW-SHAPED LIPS' },
                { value: 'asymmetrical lips', label: 'ASYMMETRICAL LIPS' },
                { value: 'natural lips', label: 'NATURAL LIPS' },
                { value: "defined cupid's bow", label: "DEFINED CUPID'S BOW" }
            ]
        },
        
        cheeks: {
            label: 'CHEEK FEATURES',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'high cheekbones', label: 'HIGH CHEEKBONES' },
                { value: 'low cheekbones', label: 'LOW CHEEKBONES' },
                { value: 'hollow cheeks', label: 'HOLLOW CHEEKS' },
                { value: 'full cheeks', label: 'FULL CHEEKS' },
                { value: 'dimples', label: 'DIMPLES' },
                { value: 'smile lines', label: 'SMILE LINES' },
                { value: 'blush', label: 'BLUSH' }
            ]
        },
        
        jawChin: {
            label: 'JAW & CHIN',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'strong jaw', label: 'STRONG JAW' },
                { value: 'weak jaw', label: 'WEAK JAW' },
                { value: 'square jaw', label: 'SQUARE JAW' },
                { value: 'pointed chin', label: 'POINTED CHIN' },
                { value: 'cleft chin', label: 'CLEFT CHIN' },
                { value: 'double chin', label: 'DOUBLE CHIN' },
                { value: 'defined jawline', label: 'DEFINED JAWLINE' },
                { value: 'soft jawline', label: 'SOFT JAWLINE' }
            ]
        }
    },

    // Beauty Marks & Skin Features
    beautyMarks: {
        beautyMarks: {
            label: 'BEAUTY MARKS & MOLES',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'freckles', label: 'FRECKLES' },
                { value: 'freckles on whole body', label: 'FRECKLES ON WHOLE BODY' },
                { value: 'beauty mark', label: 'BEAUTY MARK' },
                { value: 'multiple beauty marks', label: 'MULTIPLE BEAUTY MARKS' },
                { value: 'mole on neck', label: 'MOLE ON NECK' },
                { value: 'mole on chin', label: 'MOLE ON CHIN' },
                { value: 'mole above lip', label: 'MOLE ABOVE LIP' },
                { value: 'mole on forehead', label: 'MOLE ON FOREHEAD' },
                { value: 'mole above chest', label: 'MOLE ABOVE CHEST' },
                { value: 'mole on cheek', label: 'MOLE ON CHEEK' },
                { value: 'mole on nose', label: 'MOLE ON NOSE' },
                { value: 'mole on shoulder', label: 'MOLE ON SHOULDER' },
                { value: 'mole on arm', label: 'MOLE ON ARM' },
                { value: 'mole on leg', label: 'MOLE ON LEG' }
            ]
        },
        
        skinConditions: {
            label: 'SKIN CONDITIONS & MARKS',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'sun spots', label: 'SUN SPOTS' },
                { value: 'age spots', label: 'AGE SPOTS' },
                { value: 'birthmarks', label: 'BIRTHMARKS' },
                { value: 'vitiligo', label: 'VITILIGO' },
                { value: 'skin tags', label: 'SKIN TAGS' },
                { value: 'stretch marks', label: 'STRETCH MARKS' },
                { value: 'port wine stain', label: 'PORT WINE STAIN' },
                { value: 'cafe au lait spots', label: 'CAFE AU LAIT SPOTS' }
            ]
        }
    },

    // Body Build Expanded
    bodyBuild: {
        bodyFrame: {
            label: 'BODY FRAME',
            type: 'select',
            priority: 'essential',
            options: [
                { value: '', label: 'SELECT BODY FRAME...' },
                { value: 'very small body frame', label: 'VERY SMALL BODY FRAME' },
                { value: 'small body frame', label: 'SMALL BODY FRAME' },
                { value: 'medium body frame', label: 'MEDIUM BODY FRAME' },
                { value: 'big body frame', label: 'BIG BODY FRAME' },
                { value: 'very big body frame', label: 'VERY BIG BODY FRAME' }
            ]
        },
        
        muscleDefinition: {
            label: 'MUSCLE DEFINITION',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'no muscle definition', label: 'NO MUSCLE DEFINITION' },
                { value: 'subtle muscle tone', label: 'SUBTLE MUSCLE TONE' },
                { value: 'moderate muscle definition', label: 'MODERATE MUSCLE DEFINITION' },
                { value: 'well-defined muscles', label: 'WELL-DEFINED MUSCLES' },
                { value: 'bodybuilder physique', label: 'BODYBUILDER PHYSIQUE' },
                { value: 'athletic build', label: 'ATHLETIC BUILD' },
                { value: "dancer's build", label: "DANCER'S BUILD" }
            ]
        },
        
        bodyShape: {
            label: 'BODY BUILD',
            type: 'select',
            priority: 'essential',
            options: [
                { value: '', label: 'SELECT BODY SHAPE...' },
                { value: 'skinny shape build', label: 'SKINNY SHAPE BUILD' },
                { value: 'petite shape build', label: 'PETITE SHAPE BUILD' },
                { value: 'slim shape build', label: 'SLIM SHAPE BUILD' },
                { value: 'fit shape build', label: 'FIT SHAPE BUILD' },
                { value: 'slender shape build', label: 'SLENDER SHAPE BUILD' },
                { value: 'toned shape build', label: 'TONED SHAPE BUILD' },
                { value: 'curvy shape build', label: 'CURVY SHAPE BUILD' },
                { value: 'chubby shape build', label: 'CHUBBY SHAPE BUILD' },
                { value: 'fat shape build', label: 'FAT SHAPE BUILD' },
                { value: 'athletic shape build', label: 'ATHLETIC SHAPE BUILD' },
                { value: 'pear shape build', label: 'PEAR SHAPE BUILD' },
                { value: 'apple shape build', label: 'APPLE SHAPE BUILD' },
                { value: 'hourglass shape build', label: 'HOURGLASS SHAPE BUILD' },
                { value: 'rectangle shape build', label: 'RECTANGLE SHAPE BUILD' },
                { value: 'inverted triangle shape build', label: 'INVERTED TRIANGLE SHAPE BUILD' }
            ]
        }
    },

    // Torso Detailed
    torsoDetailed: {
        chestBreast: {
            label: 'CHEST/BREAST VARIATIONS',
            type: 'select',
            priority: 'nsfw',
            options: [
                { value: '', label: 'SELECT CHEST/BREAST TYPE...' },
                // Size
                { value: 'flat chest', label: 'FLAT CHEST' },
                { value: 'small breasts', label: 'SMALL BREASTS' },
                { value: 'medium breasts', label: 'MEDIUM BREASTS' },
                { value: 'large breasts', label: 'LARGE BREASTS' },
                { value: 'huge breasts', label: 'HUGE BREASTS' },
                { value: 'gigantic breasts', label: 'GIGANTIC BREASTS' },
                // Shape
                { value: 'perky', label: 'PERKY' },
                { value: 'soft', label: 'SOFT' },
                { value: 'natural', label: 'NATURAL' },
                { value: 'saggy', label: 'SAGGY' },
                { value: 'round shape', label: 'ROUND SHAPE' },
                { value: 'teardrop shape', label: 'TEARDROP SHAPE' },
                { value: 'athletic chest', label: 'ATHLETIC CHEST' },
                { value: 'broad chest', label: 'BROAD CHEST' },
                { value: 'narrow chest', label: 'NARROW CHEST' }
            ]
        },
        
        torsoFeatures: {
            label: 'TORSO FEATURES',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'broad shoulders', label: 'BROAD SHOULDERS' },
                { value: 'narrow shoulders', label: 'NARROW SHOULDERS' },
                { value: 'sloped shoulders', label: 'SLOPED SHOULDERS' },
                { value: 'square shoulders', label: 'SQUARE SHOULDERS' },
                { value: 'long torso', label: 'LONG TORSO' },
                { value: 'short torso', label: 'SHORT TORSO' },
                { value: 'proportional torso', label: 'PROPORTIONAL TORSO' },
                { value: 'visible ribs', label: 'VISIBLE RIBS' },
                { value: 'soft stomach', label: 'SOFT STOMACH' },
                { value: 'flat stomach', label: 'FLAT STOMACH' },
                { value: 'toned abs', label: 'TONED ABS' },
                { value: 'belly', label: 'BELLY' },
                { value: 'love handles', label: 'LOVE HANDLES' }
            ]
        },
        
        waist: {
            label: 'WAIST VARIATIONS',
            type: 'select',
            priority: 'optional',
            options: [
                { value: '', label: 'SELECT WAIST TYPE...' },
                { value: 'no waist definition', label: 'NO WAIST DEFINITION' },
                { value: 'narrow waist', label: 'NARROW WAIST' },
                { value: 'slight waist', label: 'SLIGHT WAIST' },
                { value: 'defined waist', label: 'DEFINED WAIST' },
                { value: 'cinched waist', label: 'CINCHED WAIST' },
                { value: 'thick waist', label: 'THICK WAIST' },
                { value: 'natural waist', label: 'NATURAL WAIST' }
            ]
        }
    },

    // Lower Body Detailed
    lowerBodyDetailed: {
        hips: {
            label: 'HIP VARIATIONS',
            type: 'select',
            priority: 'optional',
            options: [
                { value: '', label: 'SELECT HIP TYPE...' },
                { value: 'narrow hips', label: 'NARROW HIPS' },
                { value: 'average hips', label: 'AVERAGE HIPS' },
                { value: 'wide hips', label: 'WIDE HIPS' },
                { value: 'flared hips', label: 'FLARED HIPS' },
                { value: 'boyish hips', label: 'BOYISH HIPS' },
                { value: 'childbearing hips', label: 'CHILDBEARING HIPS' }
            ]
        },
        
        buttocks: {
            label: 'BUTTOCKS FEATURES',
            type: 'select',
            priority: 'nsfw',
            options: [
                { value: '', label: 'SELECT BUTTOCKS TYPE...' },
                { value: 'flat butt', label: 'FLAT BUTT' },
                { value: 'small butt', label: 'SMALL BUTT' },
                { value: 'average butt', label: 'AVERAGE BUTT' },
                { value: 'large butt', label: 'LARGE BUTT' },
                { value: 'round butt', label: 'ROUND BUTT' },
                { value: 'square butt', label: 'SQUARE BUTT' },
                { value: 'heart-shaped butt', label: 'HEART-SHAPED BUTT' },
                { value: 'bubble butt', label: 'BUBBLE BUTT' }
            ]
        },
        
        thighs: {
            label: 'THIGH TYPES',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'skinny thighs', label: 'SKINNY THIGHS' },
                { value: 'athletic thighs', label: 'ATHLETIC THIGHS' },
                { value: 'thick thighs', label: 'THICK THIGHS' },
                { value: 'muscular thighs', label: 'MUSCULAR THIGHS' },
                { value: 'soft thighs', label: 'SOFT THIGHS' },
                { value: 'proportional thighs', label: 'PROPORTIONAL THIGHS' }
            ]
        },
        
        legs: {
            label: 'LEG FEATURES',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'long legs', label: 'LONG LEGS' },
                { value: 'short legs', label: 'SHORT LEGS' },
                { value: 'proportional legs', label: 'PROPORTIONAL LEGS' },
                { value: 'bow legs', label: 'BOW LEGS' },
                { value: 'knock knees', label: 'KNOCK KNEES' },
                { value: 'straight legs', label: 'STRAIGHT LEGS' },
                { value: 'muscular calves', label: 'MUSCULAR CALVES' },
                { value: 'skinny calves', label: 'SKINNY CALVES' },
                { value: 'ankle thickness', label: 'ANKLE THICKNESS' },
                { value: 'foot size', label: 'FOOT SIZE' },
                { value: 'arch height', label: 'ARCH HEIGHT' }
            ]
        },
        
        genitalFeatures: {
            label: 'GENITAL FEATURES',
            type: 'toggle',
            priority: 'nsfw',
            options: [
                // Grooming
                { value: 'shaved pubes', label: 'SHAVED PUBES' },
                { value: 'small pubes', label: 'SMALL PUBES' },
                { value: 'heart pubes', label: 'HEART PUBES' },
                { value: 'line shaped pubes', label: 'LINE SHAPED PUBES' },
                { value: 'full pubes', label: 'FULL PUBES' },
                { value: 'sparse pubic hair', label: 'SPARSE PUBIC HAIR' },
                // Anatomy
                { value: 'innie vagina', label: 'INNIE VAGINA' },
                { value: 'outie vagina', label: 'OUTIE VAGINA' },
                { value: 'defined clitoris', label: 'DEFINED CLITORIS' },
                // Colors
                { value: 'pink vagina', label: 'PINK VAGINA' },
                { value: 'reddish vagina', label: 'REDDISH VAGINA' },
                { value: 'brown vagina', label: 'BROWN VAGINA' },
                { value: 'dark vagina', label: 'DARK VAGINA' }
            ]
        }
    },

    // Hands & Feet
    extremities: {
        hands: {
            label: 'HAND FEATURES',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'small hands', label: 'SMALL HANDS' },
                { value: 'large hands', label: 'LARGE HANDS' },
                { value: 'long fingers', label: 'LONG FINGERS' },
                { value: 'short fingers', label: 'SHORT FINGERS' },
                { value: 'thick fingers', label: 'THICK FINGERS' },
                { value: 'delicate fingers', label: 'DELICATE FINGERS' },
                { value: 'calloused hands', label: 'CALLOUSED HANDS' },
                { value: 'soft hands', label: 'SOFT HANDS' },
                { value: 'veiny hands', label: 'VEINY HANDS' },
                { value: 'wrinkled hands', label: 'WRINKLED HANDS' }
            ]
        },
        
        nails: {
            label: 'NAIL FEATURES',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'short nails', label: 'SHORT NAILS' },
                { value: 'long nails', label: 'LONG NAILS' },
                { value: 'manicured nails', label: 'MANICURED NAILS' },
                { value: 'natural nails', label: 'NATURAL NAILS' },
                { value: 'painted nails', label: 'PAINTED NAILS' },
                { value: 'chipped nails', label: 'CHIPPED NAILS' },
                { value: 'bitten nails', label: 'BITTEN NAILS' },
                { value: 'artificial nails', label: 'ARTIFICIAL NAILS' }
            ]
        },
        
        feet: {
            label: 'FOOT FEATURES',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'small feet', label: 'SMALL FEET' },
                { value: 'large feet', label: 'LARGE FEET' },
                { value: 'wide feet', label: 'WIDE FEET' },
                { value: 'narrow feet', label: 'NARROW FEET' },
                { value: 'high arches', label: 'HIGH ARCHES' },
                { value: 'flat feet', label: 'FLAT FEET' },
                { value: 'long toes', label: 'LONG TOES' },
                { value: 'short toes', label: 'SHORT TOES' },
                { value: 'pedicured feet', label: 'PEDICURED FEET' },
                { value: 'callused feet', label: 'CALLUSED FEET' }
            ]
        }
    },

    // Body Modifications & Markings
    bodyModifications: {
        tattoos: {
            label: 'TATTOO CATEGORIES',
            type: 'toggle',
            priority: 'optional',
            options: [
                // Size
                { value: 'small tattoo', label: 'SMALL TATTOO' },
                { value: 'medium tattoo', label: 'MEDIUM TATTOO' },
                { value: 'large tattoo', label: 'LARGE TATTOO' },
                { value: 'full sleeve', label: 'FULL SLEEVE' },
                { value: 'half sleeve', label: 'HALF SLEEVE' },
                { value: 'back piece', label: 'BACK PIECE' },
                { value: 'chest piece', label: 'CHEST PIECE' },
                // Style
                { value: 'traditional tattoo', label: 'TRADITIONAL TATTOO' },
                { value: 'tribal tattoo', label: 'TRIBAL TATTOO' },
                { value: 'realistic tattoo', label: 'REALISTIC TATTOO' },
                { value: 'watercolor tattoo', label: 'WATERCOLOR TATTOO' },
                { value: 'geometric tattoo', label: 'GEOMETRIC TATTOO' },
                { value: 'text tattoo', label: 'TEXT TATTOO' },
                { value: 'portrait tattoo', label: 'PORTRAIT TATTOO' },
                // Location
                { value: 'arm tattoo', label: 'ARM TATTOO' },
                { value: 'leg tattoo', label: 'LEG TATTOO' },
                { value: 'back tattoo', label: 'BACK TATTOO' },
                { value: 'chest tattoo', label: 'CHEST TATTOO' },
                { value: 'shoulder tattoo', label: 'SHOULDER TATTOO' },
                { value: 'neck tattoo', label: 'NECK TATTOO' },
                { value: 'hand tattoo', label: 'HAND TATTOO' },
                { value: 'face tattoo', label: 'FACE TATTOO' },
                // Cultural
                { value: 'maori tattoo', label: 'MAORI TATTOO' },
                { value: 'polynesian tattoo', label: 'POLYNESIAN TATTOO' },
                { value: 'japanese tattoo', label: 'JAPANESE TATTOO' },
                { value: 'mandala tattoo', label: 'MANDALA TATTOO' },
                { value: 'henna tattoo', label: 'HENNA TATTOO' }
            ]
        },
        
        piercings: {
            label: 'PIERCING OPTIONS',
            type: 'toggle',
            priority: 'optional',
            options: [
                // Ear
                { value: 'lobe piercing', label: 'LOBE PIERCING' },
                { value: 'multiple lobe piercings', label: 'MULTIPLE LOBE PIERCINGS' },
                { value: 'cartilage piercing', label: 'CARTILAGE PIERCING' },
                { value: 'industrial piercing', label: 'INDUSTRIAL PIERCING' },
                { value: 'tragus piercing', label: 'TRAGUS PIERCING' },
                { value: 'helix piercing', label: 'HELIX PIERCING' },
                // Facial
                { value: 'nose piercing', label: 'NOSE PIERCING' },
                { value: 'septum piercing', label: 'SEPTUM PIERCING' },
                { value: 'eyebrow piercing', label: 'EYEBROW PIERCING' },
                { value: 'lip piercing', label: 'LIP PIERCING' },
                { value: 'tongue piercing', label: 'TONGUE PIERCING' },
                { value: 'cheek piercing', label: 'CHEEK PIERCING' },
                // Body
                { value: 'navel piercing', label: 'NAVEL PIERCING' },
                { value: 'nipple piercing', label: 'NIPPLE PIERCING' },
                { value: 'surface piercing', label: 'SURFACE PIERCING' },
                { value: 'dermal piercing', label: 'DERMAL PIERCING' },
                { value: 'genital piercing', label: 'GENITAL PIERCING' }
            ]
        },
        
        scars: {
            label: 'SCAR TYPES',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'surgical scars', label: 'SURGICAL SCARS' },
                { value: 'accident scars', label: 'ACCIDENT SCARS' },
                { value: 'burn scars', label: 'BURN SCARS' },
                { value: 'acne scars', label: 'ACNE SCARS' },
                { value: 'stretch marks', label: 'STRETCH MARKS' },
                { value: 'keloid scars', label: 'KELOID SCARS' },
                { value: 'self-harm scars', label: 'SELF-HARM SCARS' },
                { value: 'battle scars', label: 'BATTLE SCARS' },
                { value: 'chicken pox scars', label: 'CHICKEN POX SCARS' }
            ]
        }
    },

    // Clothing & Accessories
    accessories: {
        jewelry: {
            label: 'JEWELRY CATEGORIES',
            type: 'toggle',
            priority: 'optional',
            options: [
                // Necklaces
                { value: 'choker', label: 'CHOKER' },
                { value: 'pendant', label: 'PENDANT' },
                { value: 'chain', label: 'CHAIN' },
                { value: 'pearl necklace', label: 'PEARL NECKLACE' },
                { value: 'statement necklace', label: 'STATEMENT NECKLACE' },
                // Earrings
                { value: 'studs', label: 'STUDS' },
                { value: 'hoops', label: 'HOOPS' },
                { value: 'dangles', label: 'DANGLES' },
                { value: 'chandelier earrings', label: 'CHANDELIER EARRINGS' },
                { value: 'ear cuffs', label: 'EAR CUFFS' },
                // Rings
                { value: 'wedding ring', label: 'WEDDING RING' },
                { value: 'engagement ring', label: 'ENGAGEMENT RING' },
                { value: 'class ring', label: 'CLASS RING' },
                { value: 'statement ring', label: 'STATEMENT RING' },
                { value: 'multiple rings', label: 'MULTIPLE RINGS' },
                // Bracelets
                { value: 'bangles', label: 'BANGLES' },
                { value: 'charm bracelet', label: 'CHARM BRACELET' },
                { value: 'watch', label: 'WATCH' },
                { value: 'fitness tracker', label: 'FITNESS TRACKER' },
                { value: 'cuff bracelet', label: 'CUFF BRACELET' },
                // Other
                { value: 'ankle bracelet', label: 'ANKLE BRACELET' },
                { value: 'toe ring', label: 'TOE RING' },
                { value: 'hair jewelry', label: 'HAIR JEWELRY' },
                { value: 'body chains', label: 'BODY CHAINS' }
            ]
        },
        
        eyewear: {
            label: 'EYEWEAR',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'glasses', label: 'GLASSES' },
                { value: 'sunglasses', label: 'SUNGLASSES' },
                { value: 'reading glasses', label: 'READING GLASSES' },
                { value: 'square glasses', label: 'SQUARE GLASSES' },
                { value: 'round glasses', label: 'ROUND GLASSES' },
                { value: 'oval glasses', label: 'OVAL GLASSES' },
                { value: 'cat eye glasses', label: 'CAT EYE GLASSES' },
                { value: 'aviator glasses', label: 'AVIATOR GLASSES' },
                { value: 'thick frame glasses', label: 'THICK FRAME GLASSES' },
                { value: 'thin frame glasses', label: 'THIN FRAME GLASSES' },
                { value: 'wire frame glasses', label: 'WIRE FRAME GLASSES' },
                { value: 'black frame glasses', label: 'BLACK FRAME GLASSES' },
                { value: 'colored frame glasses', label: 'COLORED FRAME GLASSES' }
            ]
        },
        
        clothingStyle: {
            label: 'CLOTHING STYLE',
            type: 'toggle',
            priority: 'optional',
            options: [
                { value: 'casual style', label: 'CASUAL STYLE' },
                { value: 'formal style', label: 'FORMAL STYLE' },
                { value: 'business casual style', label: 'BUSINESS CASUAL STYLE' },
                { value: 'alternative style', label: 'ALTERNATIVE STYLE' },
                { value: 'vintage style', label: 'VINTAGE STYLE' },
                { value: 'modern style', label: 'MODERN STYLE' }
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