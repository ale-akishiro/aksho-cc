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
            label: 'Art Style',
            type: 'select',
            options: [
                { value: '', label: 'Select art style...' },
                { value: '2.5d', label: '2.5D' },
                { value: 'anime style', label: 'Anime Style' },
                { value: 'realistic style', label: 'Realistic Style' },
                { value: 'semi-realistic style', label: 'Semi-Realistic' },
                { value: 'cartoon style', label: 'Cartoon Style' },
                { value: 'stylized', label: 'Stylized' }
            ]
        },
        
        gender: {
            label: 'Gender + Life Stage',
            type: 'select',
            required: true,
            options: [
                { value: '', label: 'Select gender and stage...' },
                { value: 'adult female', label: 'Adult Female' },
                { value: 'mature female', label: 'Mature Female' },
                { value: 'elderly female', label: 'Elderly Female' },
                { value: 'adult male', label: 'Adult Male' },
                { value: 'mature male', label: 'Mature Male' },
                { value: 'elderly male', label: 'Elderly Male' }
            ]
        },
        
        age: {
            label: 'Age (18-100)',
            type: 'number',
            required: true,
            min: 18,
            max: 100,
            placeholder: 'Enter age...'
        },
        
        ethnicity: {
            label: 'Ethnicity & Heritage',
            type: 'select',
            options: [
                { value: '', label: 'Select ethnicity...' },
                
                // European Heritage
                { value: 'european', label: 'European' },
                { value: 'scandinavian', label: 'Scandinavian' },
                { value: 'mediterranean', label: 'Mediterranean' },
                { value: 'slavic', label: 'Slavic' },
                { value: 'celtic', label: 'Celtic' },
                { value: 'germanic', label: 'Germanic' },
                
                // East Asian Heritage
                { value: 'east asian', label: 'East Asian' },
                { value: 'chinese', label: 'Chinese' },
                { value: 'japanese', label: 'Japanese' },
                { value: 'korean', label: 'Korean' },
                { value: 'vietnamese', label: 'Vietnamese' },
                { value: 'thai', label: 'Thai' },
                { value: 'filipino', label: 'Filipino' },
                
                // South Asian Heritage
                { value: 'south asian', label: 'South Asian' },
                { value: 'indian', label: 'Indian' },
                { value: 'pakistani', label: 'Pakistani' },
                { value: 'bengali', label: 'Bengali' },
                { value: 'sri lankan', label: 'Sri Lankan' },
                { value: 'nepalese', label: 'Nepalese' },
                
                // Middle Eastern Heritage
                { value: 'middle eastern', label: 'Middle Eastern' },
                { value: 'arabic', label: 'Arabic' },
                { value: 'persian', label: 'Persian' },
                { value: 'turkish', label: 'Turkish' },
                { value: 'israeli', label: 'Israeli' },
                { value: 'armenian', label: 'Armenian' },
                
                // African Heritage
                { value: 'african', label: 'African' },
                { value: 'west african', label: 'West African' },
                { value: 'east african', label: 'East African' },
                { value: 'north african', label: 'North African' },
                { value: 'ethiopian', label: 'Ethiopian' },
                { value: 'somali', label: 'Somali' },
                
                // Latino/Hispanic Heritage
                { value: 'latino/hispanic', label: 'Latino/Hispanic' },
                { value: 'mexican', label: 'Mexican' },
                { value: 'brazilian', label: 'Brazilian' },
                { value: 'argentinian', label: 'Argentinian' },
                { value: 'colombian', label: 'Colombian' },
                { value: 'puerto rican', label: 'Puerto Rican' },
                
                // Indigenous Heritage
                { value: 'native american', label: 'Native American' },
                { value: 'inuit', label: 'Inuit' },
                { value: 'polynesian', label: 'Polynesian' },
                { value: 'aboriginal australian', label: 'Aboriginal Australian' },
                { value: 'maori', label: 'Maori' },
                
                // Mixed Heritage
                { value: 'mixed heritage', label: 'Mixed Heritage' },
                { value: 'multiracial', label: 'Multiracial' },
                { value: 'eurasian', label: 'Eurasian' },
                { value: 'afro-latino', label: 'Afro-Latino' },
                { value: 'indo-european', label: 'Indo-European' }
            ]
        },
        
        height: {
            label: 'Height',
            type: 'select',
            options: [
                { value: '', label: 'Select height...' },
                { value: 'very short height', label: 'Very Short' },
                { value: 'short height', label: 'Short' },
                { value: 'below average height', label: 'Below Average' },
                { value: 'average height', label: 'Average' },
                { value: 'above average height', label: 'Above Average' },
                { value: 'tall height', label: 'Tall' },
                { value: 'very tall height', label: 'Very Tall' }
            ]
        },
        
        frame: {
            label: 'Frame',
            type: 'select',
            options: [
                { value: '', label: 'Select frame...' },
                { value: 'petite frame', label: 'Petite Frame' },
                { value: 'small frame', label: 'Small Frame' },
                { value: 'lanky frame', label: 'Lanky Frame' },
                { value: 'average frame', label: 'Average Frame' },
                { value: 'broad frame', label: 'Broad Frame' },
                { value: 'big frame', label: 'Big Frame' },
                { value: 'stocky frame', label: 'Stocky Frame' },
                { value: 'bulky frame', label: 'Bulky Frame' }
            ]
        },
        
        build: {
            label: 'Build',
            type: 'select',
            options: [
                { value: '', label: 'Select build...' },
                { value: 'skinny', label: 'Skinny' },
                { value: 'slender', label: 'Slender' },
                { value: 'slim', label: 'Slim' },
                { value: 'average build', label: 'Average' },
                { value: 'fit', label: 'Fit' },
                { value: 'toned', label: 'Toned' },
                { value: 'curvy', label: 'Curvy' },
                { value: 'chubby', label: 'Chubby' },
                { value: 'fat', label: 'Fat' },
                { value: 'athletic', label: 'Athletic' },
                { value: 'muscular', label: 'Muscular' },
                { value: 'buff', label: 'Buff' },
                { value: 'stocky', label: 'Stocky' }
            ]
        },
        
        skinTone: {
            label: 'Skin Tone',
            type: 'select',
            options: [
                { value: '', label: 'Select skin tone...' },
                { value: 'very pale skin', label: 'Very Pale Skin' },
                { value: 'pale skin', label: 'Pale Skin' },
                { value: 'fair skin', label: 'Fair Skin' },
                { value: 'light olive skin', label: 'Light Olive Skin' },
                { value: 'olive skin', label: 'Olive Skin' },
                { value: 'light brown skin', label: 'Light Brown Skin' },
                { value: 'sun kissed skin', label: 'Sun Kissed Skin' },
                { value: 'warm brown skin', label: 'Warm Brown Skin' },
                { value: 'medium brown skin', label: 'Medium Brown Skin' },
                { value: 'brown skin', label: 'Brown Skin' },
                { value: 'dark brown skin', label: 'Dark Brown Skin' },
                { value: 'deep brown skin', label: 'Deep Brown Skin' },
                { value: 'dark skin', label: 'Dark Skin' },
                { value: 'ebony skin', label: 'Ebony Skin' }
            ]
        },
        
        skinTexture: {
            label: 'Skin Texture *optional',
            type: 'select',
            options: [
                { value: '', label: 'Select skin texture...' },
                { value: 'soft skin', label: 'Soft Skin' },
                { value: 'smooth skin', label: 'Smooth Skin' },
                { value: 'youthful skin', label: 'Youthful Skin' },
                { value: 'firm skin', label: 'Firm Skin' },
                { value: 'rough skin', label: 'Rough Skin' },
                { value: 'weathered skin', label: 'Weathered Skin' },
                { value: 'aged skin', label: 'Aged Skin' }
            ]
        },
        
        skinFeatures: {
            label: 'Skin Features',
            type: 'toggle',
            options: [
                { value: 'body blush', label: 'Body Blush' },
                { value: 'sun tan', label: 'Sun Tan' },
                { value: 'tan lines', label: 'Tan Lines' },
                { value: "farmer's tan", label: "Farmer's Tan" }
            ]
        }
    },

    // Hair section
    hair: {
        hairColor: {
            label: 'Hair Color',
            type: 'select',
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
            ]
        },
        
        hairTexture: {
            label: 'Hair Texture',
            type: 'select',
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
            label: 'Genital Features (Adult)',
            type: 'toggle',
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

    console.log('Initializing human form with data:', Object.keys(HUMAN_DATA));
    
    try {
        container.innerHTML = `
            <div class="section">
                <h3>Character Information</h3>
                <div class="form-group">
                    <label for="character-name">Character Name</label>
                    <input type="text" id="character-name" placeholder="Enter character name...">
                </div>
            </div>

            <div class="section">
                <h3>Basic Information</h3>
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
    let html = '';
    
    Object.entries(sectionData).forEach(([key, field]) => {
        if (!field) {
            console.warn(`Field ${key} is null/undefined`);
            return;
        }
        
        console.log(`Processing field ${key}:`, field.label, field.type, field.options?.length || 0, 'options');
        
        html += `<div class="form-group">`;
        html += `<label>${field.label}</label>`;
        
        if (field.type === 'select') {
            html += `<select data-field="${key}">`;
            html += `<option value="">Select ${field.label.toLowerCase()}...</option>`;
            
            // Handle optgroups (for hair color subcategories)
            if (field.optgroups && Array.isArray(field.optgroups)) {
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

// === EXPORT MODULE ===

window.AkshoHumanData = {
    HUMAN_DATA,
    initializeHumanForm,
    generateFormSection,
    getHumanCharacterData,
    clearSavedState
};

// Export for Node.js compatibility
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        HUMAN_DATA,
        initializeHumanForm,
        generateFormSection,
        getHumanCharacterData
    };
}