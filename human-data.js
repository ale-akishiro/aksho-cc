/**
 * The Akshoverse Studio v1.0 - Human Character Data Module
 * 
 * Provides comprehensive human character creation data including:
 * - Complete human feature dataset (312+ tags)
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
            type: 'toggle',
            options: [
                { value: '2.5d', label: '2.5D Style' },
                { value: 'anime style', label: 'Anime Style' },
                { value: 'realistic style', label: 'Realistic Style' },
                { value: 'semi-realistic style', label: 'Semi-Realistic Style' },
                { value: 'cartoon style', label: 'Cartoon Style' },
                { value: 'stylized', label: 'Stylized' }
            ]
        },
        
        gender: {
            label: 'Gender & Identity',
            type: 'select',
            required: true,
            options: [
                { value: '', label: 'Select gender...' },
                { value: 'adult female', label: 'Adult Female' },
                { value: 'mature female', label: 'Mature Female' },
                { value: 'elderly female', label: 'Elderly Female' },
                { value: 'adult male', label: 'Adult Male' },
                { value: 'mature male', label: 'Mature Male' },
                { value: 'elderly male', label: 'Elderly Male' }
            ]
        },
        
        age: {
            label: 'Age',
            type: 'number',
            required: true,
            min: 18,
            max: 120,
            placeholder: 'Enter age (18+)'
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
        
        build: {
            label: 'Build Descriptors',
            type: 'select',
            options: [
                { value: '', label: 'Select build...' },
                { value: 'petite build', label: 'Petite Build' },
                { value: 'small build', label: 'Small Build' },
                { value: 'compact build', label: 'Compact Build' },
                { value: 'average build', label: 'Average Build' },
                { value: 'sturdy build', label: 'Sturdy Build' },
                { value: 'large build', label: 'Large Build' },
                { value: 'imposing build', label: 'Imposing Build' }
            ]
        }
    },
    
    // Physical appearance features
    appearance: {
        skinTone: {
            label: 'Skin Tone',
            type: 'select',
            options: [
                { value: '', label: 'Select skin tone...' },
                { value: 'very pale skin', label: 'Very Pale' },
                { value: 'pale skin', label: 'Pale' },
                { value: 'fair skin', label: 'Fair' },
                { value: 'light olive skin', label: 'Light Olive' },
                { value: 'olive skin', label: 'Olive' },
                { value: 'light brown skin', label: 'Light Brown' },
                { value: 'sun kissed skin', label: 'Sun Kissed' },
                { value: 'warm brown skin', label: 'Warm Brown' },
                { value: 'medium brown skin', label: 'Medium Brown' },
                { value: 'brown skin', label: 'Brown' },
                { value: 'dark brown skin', label: 'Dark Brown' },
                { value: 'deep brown skin', label: 'Deep Brown' },
                { value: 'dark skin', label: 'Dark' },
                { value: 'ebony skin', label: 'Ebony' }
            ]
        },
        
        skinFeatures: {
            label: 'Skin Features',
            type: 'toggle',
            options: [
                { value: 'body blush', label: 'Body Blush' },
                { value: 'sun tan', label: 'Sun Tan' },
                { value: 'tan lines', label: 'Tan Lines' },
                { value: 'farmers tan', label: "Farmer's Tan" },
                { value: 'smooth skin', label: 'Smooth Skin' },
                { value: 'rough skin', label: 'Rough Skin' },
                { value: 'weathered skin', label: 'Weathered Skin' },
                { value: 'soft skin', label: 'Soft Skin' },
                { value: 'firm skin', label: 'Firm Skin' },
                { value: 'aged skin', label: 'Aged Skin' },
                { value: 'youthful skin', label: 'Youthful Skin' }
            ]
        },
        
        hairColor: {
            label: 'Hair Color',
            type: 'select',
            options: [
                { value: '', label: 'Select hair color...' },
                
                // Blonde Family
                { value: 'platinum blonde hair', label: 'Platinum Blonde' },
                { value: 'ash blonde hair', label: 'Ash Blonde' },
                { value: 'golden blonde hair', label: 'Golden Blonde' },
                { value: 'strawberry blonde hair', label: 'Strawberry Blonde' },
                { value: 'dirty blonde hair', label: 'Dirty Blonde' },
                { value: 'bleached blonde hair', label: 'Bleached Blonde' },
                
                // Brown Family
                { value: 'light brown hair', label: 'Light Brown' },
                { value: 'medium brown hair', label: 'Medium Brown' },
                { value: 'dark brown hair', label: 'Dark Brown' },
                { value: 'chestnut brown hair', label: 'Chestnut Brown' },
                { value: 'chocolate brown hair', label: 'Chocolate Brown' },
                { value: 'auburn brown hair', label: 'Auburn Brown' },
                
                // Black Family
                { value: 'jet black hair', label: 'Jet Black' },
                { value: 'blue-black hair', label: 'Blue-Black' },
                { value: 'brown-black hair', label: 'Brown-Black' },
                { value: 'soft black hair', label: 'Soft Black' },
                
                // Red Family
                { value: 'ginger hair', label: 'Ginger' },
                { value: 'copper hair', label: 'Copper' },
                { value: 'auburn hair', label: 'Auburn' },
                { value: 'strawberry hair', label: 'Strawberry' },
                { value: 'burgundy hair', label: 'Burgundy' },
                { value: 'mahogany hair', label: 'Mahogany' },
                
                // Gray/White Family
                { value: 'silver hair', label: 'Silver' },
                { value: 'gray hair', label: 'Gray' },
                { value: 'white hair', label: 'White' },
                { value: 'salt and pepper hair', label: 'Salt and Pepper' },
                { value: 'premature gray hair', label: 'Premature Gray' },
                
                // Unnatural Colors
                { value: 'blue hair', label: 'Blue' },
                { value: 'green hair', label: 'Green' },
                { value: 'purple hair', label: 'Purple' },
                { value: 'pink hair', label: 'Pink' },
                { value: 'rainbow hair', label: 'Rainbow' },
                { value: 'ombre hair', label: 'Ombre' },
                { value: 'color-streaked hair', label: 'Color-Streaked' }
            ]
        },
        
        hairTexture: {
            label: 'Hair Texture',
            type: 'select',
            options: [
                { value: '', label: 'Select hair texture...' },
                { value: 'pin straight hair', label: 'Pin Straight' },
                { value: 'straight hair', label: 'Straight' },
                { value: 'slightly wavy hair', label: 'Slightly Wavy' },
                { value: 'wavy hair', label: 'Wavy' },
                { value: 'loose curls', label: 'Loose Curls' },
                { value: 'tight curls', label: 'Tight Curls' },
                { value: 'coily hair', label: 'Coily' },
                { value: 'kinky hair', label: 'Kinky' },
                { value: 'afro texture hair', label: 'Afro Texture' },
                { value: 'fine hair', label: 'Fine Hair' },
                { value: 'medium hair', label: 'Medium Hair' },
                { value: 'thick hair', label: 'Thick Hair' },
                { value: 'coarse hair', label: 'Coarse Hair' },
                { value: 'silky hair', label: 'Silky Hair' },
                { value: 'wiry hair', label: 'Wiry Hair' },
                { value: 'frizzy hair', label: 'Frizzy Hair' },
                { value: 'smooth hair', label: 'Smooth Hair' }
            ]
        },
        
        hairLength: {
            label: 'Hair Length',
            type: 'select',
            options: [
                { value: '', label: 'Select hair length...' },
                { value: 'bald', label: 'Bald' },
                { value: 'very short hair', label: 'Very Short' },
                { value: 'short hair', label: 'Short' },
                { value: 'medium hair', label: 'Medium' },
                { value: 'long hair', label: 'Long' },
                { value: 'very long hair', label: 'Very Long' },
                { value: 'absurdly long hair', label: 'Absurdly Long' }
            ]
        },
        
        hairstyles: {
            label: 'Hairstyles',
            type: 'toggle',
            options: [
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
        }
    },
    
    // Facial features
    facialFeatures: {
        faceShape: {
            label: 'Face Shape',
            type: 'select',
            options: [
                { value: '', label: 'Select face shape...' },
                { value: 'oval face', label: 'Oval' },
                { value: 'round face', label: 'Round' },
                { value: 'square face', label: 'Square' },
                { value: 'heart face', label: 'Heart' },
                { value: 'diamond face', label: 'Diamond' },
                { value: 'oblong face', label: 'Oblong' },
                { value: 'triangular face', label: 'Triangular' },
                { value: 'rectangular face', label: 'Rectangular' }
            ]
        },
        
        eyeColor: {
            label: 'Eye Color',
            type: 'select',
            options: [
                { value: '', label: 'Select eye color...' },
                
                // Blue Family
                { value: 'ice blue eyes', label: 'Ice Blue' },
                { value: 'sky blue eyes', label: 'Sky Blue' },
                { value: 'navy blue eyes', label: 'Navy Blue' },
                { value: 'steel blue eyes', label: 'Steel Blue' },
                { value: 'aqua blue eyes', label: 'Aqua Blue' },
                
                // Green Family
                { value: 'emerald green eyes', label: 'Emerald Green' },
                { value: 'forest green eyes', label: 'Forest Green' },
                { value: 'hazel green eyes', label: 'Hazel Green' },
                { value: 'olive green eyes', label: 'Olive Green' },
                { value: 'mint green eyes', label: 'Mint Green' },
                
                // Brown Family
                { value: 'amber eyes', label: 'Amber' },
                { value: 'honey brown eyes', label: 'Honey Brown' },
                { value: 'chocolate brown eyes', label: 'Chocolate Brown' },
                { value: 'dark brown eyes', label: 'Dark Brown' },
                { value: 'mahogany eyes', label: 'Mahogany' },
                
                // Gray Family
                { value: 'light gray eyes', label: 'Light Gray' },
                { value: 'dark gray eyes', label: 'Dark Gray' },
                { value: 'blue-gray eyes', label: 'Blue-Gray' },
                { value: 'green-gray eyes', label: 'Green-Gray' },
                
                // Rare Colors
                { value: 'violet eyes', label: 'Violet' },
                { value: 'golden eyes', label: 'Golden' },
                { value: 'heterochromia', label: 'Heterochromia' },
                { value: 'sectoral heterochromia', label: 'Sectoral Heterochromia' }
            ]
        },
        
        eyeFeatures: {
            label: 'Eye Features',
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
                { value: 'double eyelid', label: 'Double Eyelid' },
                { value: 'long eyelashes', label: 'Long Eyelashes' },
                { value: 'thick eyelashes', label: 'Thick Eyelashes' },
                { value: 'curled eyelashes', label: 'Curled Eyelashes' }
            ]
        },
        
        eyebrows: {
            label: 'Eyebrows',
            type: 'select',
            options: [
                { value: '', label: 'Select eyebrow type...' },
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
        
        noseType: {
            label: 'Nose Type',
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
            label: 'Lips',
            type: 'select',
            options: [
                { value: '', label: 'Select lip type...' },
                { value: 'thin lips', label: 'Thin Lips' },
                { value: 'full lips', label: 'Full Lips' },
                { value: 'pouty lips', label: 'Pouty Lips' },
                { value: 'wide lips', label: 'Wide Lips' },
                { value: 'narrow lips', label: 'Narrow Lips' },
                { value: 'bow-shaped lips', label: 'Bow-Shaped Lips' },
                { value: 'asymmetrical lips', label: 'Asymmetrical Lips' },
                { value: 'natural lips', label: 'Natural Lips' },
                { value: 'defined cupids bow', label: "Defined Cupid's Bow" }
            ]
        }
    },
    
    // Body build and proportions
    bodyBuild: {
        bodyFrame: {
            label: 'Body Frame',
            type: 'select',
            options: [
                { value: '', label: 'Select body frame...' },
                { value: 'very small body frame', label: 'Very Small Frame' },
                { value: 'small body frame', label: 'Small Frame' },
                { value: 'medium body frame', label: 'Medium Frame' },
                { value: 'big body frame', label: 'Big Frame' },
                { value: 'very big body frame', label: 'Very Big Frame' }
            ]
        },
        
        bodyShape: {
            label: 'Body Shape',
            type: 'select',
            options: [
                { value: '', label: 'Select body shape...' },
                { value: 'skinny shape build', label: 'Skinny' },
                { value: 'petite shape build', label: 'Petite' },
                { value: 'slim shape build', label: 'Slim' },
                { value: 'fit shape build', label: 'Fit' },
                { value: 'slender shape build', label: 'Slender' },
                { value: 'toned shape build', label: 'Toned' },
                { value: 'curvy shape build', label: 'Curvy' },
                { value: 'chubby shape build', label: 'Chubby' },
                { value: 'fat shape build', label: 'Fat' },
                { value: 'athletic shape build', label: 'Athletic' },
                { value: 'pear shape build', label: 'Pear Shape' },
                { value: 'apple shape build', label: 'Apple Shape' },
                { value: 'hourglass shape build', label: 'Hourglass' },
                { value: 'rectangle shape build', label: 'Rectangle' },
                { value: 'inverted triangle shape build', label: 'Inverted Triangle' }
            ]
        },
        
        muscleDefinition: {
            label: 'Muscle Definition',
            type: 'select',
            options: [
                { value: '', label: 'Select muscle definition...' },
                { value: 'no muscle definition', label: 'No Definition' },
                { value: 'subtle muscle tone', label: 'Subtle Tone' },
                { value: 'moderate muscle definition', label: 'Moderate Definition' },
                { value: 'well-defined muscles', label: 'Well-Defined' },
                { value: 'bodybuilder physique', label: 'Bodybuilder' },
                { value: 'athletic build', label: 'Athletic Build' },
                { value: 'dancers build', label: "Dancer's Build" }
            ]
        },
        
        chestFeatures: {
            label: 'Chest Features',
            type: 'select',
            options: [
                { value: '', label: 'Select chest type...' },
                { value: 'flat chest', label: 'Flat Chest' },
                { value: 'small breasts', label: 'Small Breasts' },
                { value: 'medium breasts', label: 'Medium Breasts' },
                { value: 'large breasts', label: 'Large Breasts' },
                { value: 'huge breasts', label: 'Huge Breasts' },
                { value: 'broad chest', label: 'Broad Chest' },
                { value: 'narrow chest', label: 'Narrow Chest' },
                { value: 'athletic chest', label: 'Athletic Chest' }
            ]
        }
    },
    
    // Beauty marks and distinctive features
    beautyMarks: {
        freckles: {
            label: 'Freckles & Spots',
            type: 'toggle',
            options: [
                { value: 'freckles', label: 'Freckles' },
                { value: 'freckles on whole body', label: 'Freckles on Whole Body' },
                { value: 'sun spots', label: 'Sun Spots' },
                { value: 'age spots', label: 'Age Spots' }
            ]
        },
        
        beautyMarks: {
            label: 'Beauty Marks & Moles',
            type: 'toggle',
            options: [
                { value: 'beauty mark', label: 'Beauty Mark' },
                { value: 'multiple beauty marks', label: 'Multiple Beauty Marks' },
                { value: 'mole on neck', label: 'Mole on Neck' },
                { value: 'mole on chin', label: 'Mole on Chin' },
                { value: 'mole above lip', label: 'Mole Above Lip' },
                { value: 'mole on forehead', label: 'Mole on Forehead' },
                { value: 'mole above chest', label: 'Mole Above Chest' },
                { value: 'mole on cheek', label: 'Mole on Cheek' },
                { value: 'mole on nose', label: 'Mole on Nose' },
                { value: 'mole on shoulder', label: 'Mole on Shoulder' }
            ]
        }
    },
    
    // Body modifications
    bodyModifications: {
        tattoos: {
            label: 'Tattoos',
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
                
                // Location
                { value: 'arm tattoo', label: 'Arm Tattoo' },
                { value: 'leg tattoo', label: 'Leg Tattoo' },
                { value: 'back tattoo', label: 'Back Tattoo' },
                { value: 'chest tattoo', label: 'Chest Tattoo' },
                { value: 'shoulder tattoo', label: 'Shoulder Tattoo' },
                { value: 'neck tattoo', label: 'Neck Tattoo' }
            ]
        },
        
        piercings: {
            label: 'Piercings',
            type: 'toggle',
            options: [
                // Ear Piercings
                { value: 'lobe piercing', label: 'Lobe Piercing' },
                { value: 'multiple lobe piercings', label: 'Multiple Lobe Piercings' },
                { value: 'cartilage piercing', label: 'Cartilage Piercing' },
                { value: 'industrial piercing', label: 'Industrial Piercing' },
                { value: 'tragus piercing', label: 'Tragus Piercing' },
                { value: 'helix piercing', label: 'Helix Piercing' },
                
                // Facial Piercings
                { value: 'nose piercing', label: 'Nose Piercing' },
                { value: 'septum piercing', label: 'Septum Piercing' },
                { value: 'eyebrow piercing', label: 'Eyebrow Piercing' },
                { value: 'lip piercing', label: 'Lip Piercing' },
                { value: 'tongue piercing', label: 'Tongue Piercing' },
                
                // Body Piercings
                { value: 'navel piercing', label: 'Navel Piercing' },
                { value: 'nipple piercing', label: 'Nipple Piercing' }
            ]
        }
    }
};

// === HUMAN FORM GENERATION ===

/**
 * Generate HTML form for human character creation
 * @returns {string} - HTML form content
 */
function generateHumanForm() {
    let formHTML = '';
    
    // Basic Info Section
    formHTML += `
        <div class="section">
            <h3><span class="section-icon"></span>Basic Information</h3>
            
            <div class="form-group">
                <label>Character Name (Optional)</label>
                <input type="text" id="character-name" placeholder="Enter character name..." maxlength="50">
            </div>
    `;
    
    // Add form fields from data
    Object.entries(HUMAN_DATA.basicInfo).forEach(([fieldKey, field]) => {
        formHTML += generateFormField(fieldKey, field);
    });
    
    formHTML += '</div>';
    
    // Appearance Section
    formHTML += `
        <div class="section">
            <h3><span class="section-icon"></span>Physical Appearance</h3>
    `;
    
    Object.entries(HUMAN_DATA.appearance).forEach(([fieldKey, field]) => {
        formHTML += generateFormField(fieldKey, field);
    });
    
    formHTML += '</div>';
    
    // Facial Features Section
    formHTML += `
        <div class="section">
            <h3><span class="section-icon"></span>Facial Features</h3>
    `;
    
    Object.entries(HUMAN_DATA.facialFeatures).forEach(([fieldKey, field]) => {
        formHTML += generateFormField(fieldKey, field);
    });
    
    formHTML += '</div>';
    
    // Body Build Section
    formHTML += `
        <div class="section">
            <h3><span class="section-icon"></span>Body Build & Proportions</h3>
    `;
    
    Object.entries(HUMAN_DATA.bodyBuild).forEach(([fieldKey, field]) => {
        formHTML += generateFormField(fieldKey, field);
    });
    
    formHTML += '</div>';
    
    // Beauty Marks Section
    formHTML += `
        <div class="section">
            <h3><span class="section-icon"></span>Beauty Marks & Features</h3>
    `;
    
    Object.entries(HUMAN_DATA.beautyMarks).forEach(([fieldKey, field]) => {
        formHTML += generateFormField(fieldKey, field);
    });
    
    formHTML += '</div>';
    
    // Body Modifications Section
    formHTML += `
        <div class="section">
            <h3><span class="section-icon"></span>Body Modifications</h3>
    `;
    
    Object.entries(HUMAN_DATA.bodyModifications).forEach(([fieldKey, field]) => {
        formHTML += generateFormField(fieldKey, field);
    });
    
    formHTML += '</div>';
    
    // Custom Tags Section
    formHTML += `
        <div class="section">
            <h3><span class="section-icon"></span>Custom Tags</h3>
            
            <div class="form-group">
                <label>Additional Tags (Optional)</label>
                <textarea id="custom-tags" placeholder="Enter custom tags separated by commas..." rows="3" maxlength="1000"></textarea>
                <small style="color: #6b7280; font-size: 12px;">Add any additional tags not covered above. Separate multiple tags with commas.</small>
            </div>
        </div>
    `;
    
    return formHTML;
}

/**
 * Generate individual form field based on field configuration
 * @param {string} fieldKey - Field identifier
 * @param {Object} field - Field configuration
 * @returns {string} - HTML for form field
 */
function generateFormField(fieldKey, field) {
    let fieldHTML = `
        <div class="form-group">
            <label${field.required ? ' class="required"' : ''}>${field.label}${field.required ? ' *' : ''}</label>
    `;
    
    switch (field.type) {
        case 'select':
            fieldHTML += `<select id="${fieldKey}"${field.required ? ' required' : ''}>`;
            field.options.forEach(option => {
                fieldHTML += `<option value="${option.value}">${option.label}</option>`;
            });
            fieldHTML += '</select>';
            break;
            
        case 'number':
            fieldHTML += `<input type="number" id="${fieldKey}" min="${field.min || ''}" max="${field.max || ''}" placeholder="${field.placeholder || ''}"${field.required ? ' required' : ''}>`;
            break;
            
        case 'toggle':
            fieldHTML += '<div class="toggle-group">';
            field.options.forEach(option => {
                fieldHTML += `<div class="toggle-btn" data-category="${fieldKey}" data-value="${option.value}">${option.label}</div>`;
            });
            fieldHTML += '</div>';
            break;
            
        default:
            fieldHTML += `<input type="text" id="${fieldKey}" placeholder="${field.placeholder || ''}"${field.required ? ' required' : ''}>`;
    }
    
    fieldHTML += '</div>';
    return fieldHTML;
}

/**
 * Initialize human character form
 */
function initializeHumanForm() {
    const humanTab = document.getElementById('human-tab');
    if (humanTab) {
        humanTab.innerHTML = generateHumanForm();
        
        // Setup real-time validation
        if (window.AkshoValidation) {
            window.AkshoValidation.setupRealTimeValidation(humanTab, 'human');
        }
        
        // Setup event listeners for human-specific interactions
        setupHumanFormInteractions();
    }
}

/**
 * Setup human-specific form interactions
 */
function setupHumanFormInteractions() {
    // Age validation with special handling
    const ageInput = document.getElementById('age');
    if (ageInput) {
        ageInput.addEventListener('input', function() {
            const age = parseInt(this.value);
            if (age && age < 18) {
                this.classList.add('field-error');
                showFieldError(this, 'Age must be 18 or older for content safety.');
            } else {
                this.classList.remove('field-error');
                clearFieldErrors(this);
            }
        });
    }
    
    // Ethnicity-based suggestions
    const ethnicitySelect = document.getElementById('ethnicity');
    if (ethnicitySelect) {
        ethnicitySelect.addEventListener('change', function() {
            updateEthnicityBasedSuggestions(this.value);
        });
    }
    
    // Hair feature coordination
    setupHairFeatureCoordination();
    
    // Eye feature coordination
    setupEyeFeatureCoordination();
}

/**
 * Update suggestions based on selected ethnicity
 * @param {string} ethnicity - Selected ethnicity
 */
function updateEthnicityBasedSuggestions(ethnicity) {
    // This could provide culturally appropriate suggestions
    // Implementation would depend on specific requirements
    console.log(`Ethnicity selected: ${ethnicity}`);
}

/**
 * Setup hair feature coordination
 */
function setupHairFeatureCoordination() {
    const hairColorSelect = document.getElementById('hairColor');
    const hairTextureSelect = document.getElementById('hairTexture');
    
    if (hairColorSelect && hairTextureSelect) {
        // Add logic to suggest compatible combinations
        hairColorSelect.addEventListener('change', function() {
            // Could suggest appropriate textures based on color choice
        });
    }
}

/**
 * Setup eye feature coordination
 */
function setupEyeFeatureCoordination() {
    // Add logic for eye color and feature compatibility
}

/**
 * Show field error message
 * @param {Element} field - Form field element
 * @param {string} message - Error message
 */
function showFieldError(field, message) {
    clearFieldErrors(field);
    
    const errorElement = createElement('div', {
        className: 'error-message field-error-message'
    }, message);
    
    field.parentNode.appendChild(errorElement);
}

/**
 * Clear field error messages
 * @param {Element} field - Form field element
 */
function clearFieldErrors(field) {
    const existingErrors = field.parentNode.querySelectorAll('.field-error-message');
    existingErrors.forEach(error => error.remove());
}

/**
 * Get human character data from form
 * @returns {Object} - Character data object
 */
function getHumanCharacterData() {
    const data = {
        type: 'human',
        name: '',
        selectedTags: new Set(),
        customTags: '',
        formData: {}
    };
    
    // Get character name
    const nameInput = document.getElementById('character-name');
    if (nameInput) {
        data.name = nameInput.value.trim();
    }
    
    // Get selected dropdown values
    const selects = document.querySelectorAll('#human-tab select');
    selects.forEach(select => {
        if (select.value) {
            data.selectedTags.add(select.value);
            data.formData[select.id] = select.value;
        }
    });
    
    // Get number inputs
    const numberInputs = document.querySelectorAll('#human-tab input[type="number"]');
    numberInputs.forEach(input => {
        if (input.value) {
            data.formData[input.id] = parseInt(input.value);
        }
    });
    
    // Get active toggle buttons
    const activeToggles = document.querySelectorAll('#human-tab .toggle-btn.active');
    activeToggles.forEach(toggle => {
        data.selectedTags.add(toggle.dataset.value);
    });
    
    // Get custom tags
    const customTagsInput = document.getElementById('custom-tags');
    if (customTagsInput && customTagsInput.value.trim()) {
        data.customTags = customTagsInput.value.trim();
        // Parse and add custom tags to selected tags
        const customTagsArray = parseTags(customTagsInput.value);
        customTagsArray.forEach(tag => data.selectedTags.add(tag));
    }
    
    return data;
}

/**
 * Validate human character data
 * @param {Object} characterData - Character data to validate
 * @returns {Object} - Validation result
 */
function validateHumanCharacter(characterData) {
    if (window.AkshoValidation) {
        return window.AkshoValidation.validateCharacter(characterData, 'human');
    }
    
    // Basic validation fallback
    const errors = [];
    
    if (characterData.formData.age && characterData.formData.age < 18) {
        errors.push('Age must be 18 or older');
    }
    
    if (!characterData.formData.gender) {
        errors.push('Gender selection is required');
    }
    
    return {
        valid: errors.length === 0,
        errors: errors.length > 0 ? { general: errors } : {},
        warnings: {},
        cleanData: characterData
    };
}

// === EXPORT HUMAN DATA MODULE ===

window.AkshoHumanData = {
    // Data structures
    HUMAN_DATA,
    
    // Form generation
    generateHumanForm,
    generateFormField,
    initializeHumanForm,
    
    // Form interactions
    setupHumanFormInteractions,
    updateEthnicityBasedSuggestions,
    setupHairFeatureCoordination,
    setupEyeFeatureCoordination,
    
    // Data management
    getHumanCharacterData,
    validateHumanCharacter,
    
    // UI helpers
    showFieldError,
    clearFieldErrors
};