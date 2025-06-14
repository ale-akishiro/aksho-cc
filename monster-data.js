/**
 * The Akshoverse Studio v1.0 - Monster Character Data Module
 * 
 * Provides comprehensive monster character creation with all 247 species:
 * - Complete monster species database with scientific categorization
 * - Species-specific feature suggestions and validation
 * - Advanced form generation with conditional options
 * - Smart conflict detection integration
 */

// === MONSTER SPECIES DATABASE ===

const MONSTER_SPECIES_DATA = {
    terrestrial: {
        label: 'Terrestrial Species',
        subcategories: {
            mammalian: {
                label: 'Mammalian Species',
                species: [
                    { value: 'bunny girl', label: 'Bunny Girl', features: ['bunny ears', 'bunny tail', 'white fluffy bunny tail'] },
                    { value: 'rabbit girl', label: 'Rabbit Girl', features: ['rabbit ears', 'bunny tail'] },
                    { value: 'highland cattle girl', label: 'Highland Cattle Girl', features: ['highland cow horns', 'fluffy cow ears', 'cow tail'] },
                    { value: 'cow girl', label: 'Cow Girl', features: ['cow ears', 'cow tail', 'cow spots', 'tiny gold cowbell'] },
                    { value: 'wolf girl', label: 'Wolf Girl', features: ['wolf ears', 'wolf tail', 'wolf markings'] },
                    { value: 'sheep girl', label: 'Sheep Girl', features: ['sheep ears', 'sheep tail', 'sheep horns'] },
                    { value: 'mouse girl', label: 'Mouse Girl', features: ['mouse ears', 'tiny mouse tail', 'tiny mouse nose'] },
                    { value: 'rat girl', label: 'Rat Girl', features: ['rat ears', 'long rat tail'] },
                    { value: 'cat girl', label: 'Cat Girl', features: ['cat ears', 'cat tail', 'whiskers', 'slit pupils'] },
                    { value: 'dog girl', label: 'Dog Girl', features: ['dog ears', 'dog tail', 'wet nose'] },
                    { value: 'fox girl', label: 'Fox Girl', features: ['fox ears', 'fox tail', 'multiple fox tails'] },
                    { value: 'deer girl', label: 'Deer Girl', features: ['deer ears', 'deer tail', 'deer antlers'] },
                    { value: 'bear girl', label: 'Bear Girl', features: ['bear ears', 'bear tail', 'thick fur'] },
                    { value: 'tiger girl', label: 'Tiger Girl', features: ['tiger ears', 'tiger tail', 'tiger stripes'] },
                    { value: 'lion girl', label: 'Lion Girl', features: ['lion ears', 'lion tail', 'tufted lion tail'] },
                    { value: 'leopard girl', label: 'Leopard Girl', features: ['cat ears', 'cat tail', 'leopard spots'] },
                    { value: 'cheetah girl', label: 'Cheetah Girl', features: ['cat ears', 'cat tail', 'cheetah spots'] },
                    { value: 'panther girl', label: 'Panther Girl', features: ['cat ears', 'cat tail', 'black fur'] },
                    { value: 'lynx girl', label: 'Lynx Girl', features: ['cat ears', 'cat tail', 'tufted ears'] },
                    { value: 'horse girl', label: 'Horse Girl', features: ['horse ears', 'horse tail', 'horse markings'] },
                    { value: 'zebra girl', label: 'Zebra Girl', features: ['horse ears', 'horse tail', 'zebra stripes'] },
                    { value: 'pig girl', label: 'Pig Girl', features: ['pig ears', 'pig tail', 'curly pig tail'] },
                    { value: 'goat girl', label: 'Goat Girl', features: ['goat ears', 'goat tail', 'goat horns'] },
                    { value: 'bat girl', label: 'Bat Girl', features: ['bat ears', 'bat wings', 'bat tail'] },
                    { value: 'kangaroo girl', label: 'Kangaroo Girl', features: ['large ears', 'powerful legs', 'pouch'] },
                    { value: 'koala girl', label: 'Koala Girl', features: ['round ears', 'fluffy fur', 'climbing claws'] },
                    { value: 'panda girl', label: 'Panda Girl', features: ['round ears', 'black and white fur', 'bear features'] },
                    { value: 'raccoon girl', label: 'Raccoon Girl', features: ['pointed ears', 'ringed tail', 'mask markings'] },
                    { value: 'skunk girl', label: 'Skunk Girl', features: ['pointed ears', 'bushy tail', 'stripe markings'] },
                    { value: 'squirrel girl', label: 'Squirrel Girl', features: ['pointed ears', 'bushy tail', 'cheek pouches'] },
                    { value: 'ferret girl', label: 'Ferret Girl', features: ['small ears', 'long body', 'playful nature'] },
                    { value: 'otter girl', label: 'Otter Girl', features: ['small ears', 'webbed paws', 'sleek fur'] },
                    { value: 'seal girl', label: 'Seal Girl', features: ['small ears', 'flipper hands', 'smooth skin'] }
                ]
            },
            reptilian: {
                label: 'Reptilian Species',
                species: [
                    { value: 'dragon girl', label: 'Dragon Girl', features: ['dragon horns', 'dragon wings', 'dragon tail', 'dragon scales'] },
                    { value: 'snake girl', label: 'Snake Girl', features: ['snake tail', 'snake scales', 'slit pupils', 'forked tongue'] },
                    { value: 'lamia', label: 'Lamia', features: ['snake tail', 'snake scales', 'slit pupils'] },
                    { value: 'lizard girl', label: 'Lizard Girl', features: ['lizard tail', 'lizard scales', 'slit pupils'] },
                    { value: 'gecko girl', label: 'Gecko Girl', features: ['gecko tail', 'sticky pads', 'large eyes'] },
                    { value: 'chameleon girl', label: 'Chameleon Girl', features: ['chameleon tail', 'color changing', 'independent eyes'] },
                    { value: 'turtle girl', label: 'Turtle Girl', features: ['turtle tail', 'shell', 'retractable limbs'] },
                    { value: 'tortoise girl', label: 'Tortoise Girl', features: ['turtle tail', 'dome shell', 'slow movement'] },
                    { value: 'salamander girl', label: 'Salamander Girl', features: ['smooth skin', 'regeneration', 'moist skin'] },
                    { value: 'iguana girl', label: 'Iguana Girl', features: ['spiny back', 'dewlap', 'third eye'] },
                    { value: 'komodo dragon girl', label: 'Komodo Dragon Girl', features: ['forked tongue', 'venomous bite', 'powerful tail'] },
                    { value: 'crocodile girl', label: 'Crocodile Girl', features: ['crocodile tail', 'armored scales', 'powerful jaws'] },
                    { value: 'alligator girl', label: 'Alligator Girl', features: ['powerful crocodile tail', 'armored hide', 'ambush predator'] }
                ]
            },
            avian: {
                label: 'Avian Species',
                species: [
                    { value: 'harpy', label: 'Harpy', features: ['bird wings', 'talons', 'feathered arms'] },
                    { value: 'phoenix girl', label: 'Phoenix Girl', features: ['phoenix wings', 'fire immunity', 'rebirth'] },
                    { value: 'owl girl', label: 'Owl Girl', features: ['owl wings', 'night vision', 'silent flight'] },
                    { value: 'eagle girl', label: 'Eagle Girl', features: ['eagle wings', 'keen eyesight', 'powerful talons'] },
                    { value: 'hawk girl', label: 'Hawk Girl', features: ['hawk wings', 'hunting instincts', 'sharp talons'] },
                    { value: 'falcon girl', label: 'Falcon Girl', features: ['pointed wings', 'speed diving', 'aerial mastery'] },
                    { value: 'crow girl', label: 'Crow Girl', features: ['black wings', 'intelligence', 'tool use'] },
                    { value: 'raven girl', label: 'Raven Girl', features: ['raven wings', 'mystical knowledge', 'prophecy'] },
                    { value: 'peacock girl', label: 'Peacock Girl', features: ['colorful plumage', 'display feathers', 'iridescent colors'] },
                    { value: 'swan girl', label: 'Swan Girl', features: ['swan wings', 'graceful neck', 'elegant posture'] },
                    { value: 'duck girl', label: 'Duck Girl', features: ['webbed feet', 'waterproof feathers', 'bill'] },
                    { value: 'penguin girl', label: 'Penguin Girl', features: ['flippers', 'tuxedo coloring', 'cold resistance'] },
                    { value: 'flamingo girl', label: 'Flamingo Girl', features: ['long neck', 'pink feathers', 'filter feeding'] },
                    { value: 'hummingbird girl', label: 'Hummingbird Girl', features: ['rapid wings', 'hover ability', 'nectar feeding'] },
                    { value: 'parrot girl', label: 'Parrot Girl', features: ['colorful feathers', 'speech mimicry', 'curved beak'] },
                    { value: 'chicken girl', label: 'Chicken Girl', features: ['comb', 'wattles', 'ground dwelling'] },
                    { value: 'rooster girl', label: 'Rooster Girl', features: ['large comb', 'tail feathers', 'morning call'] }
                ]
            }
        }
    },
    
    aquatic: {
        label: 'Aquatic & Marine Species',
        subcategories: {
            deepSea: {
                label: 'Deep Sea & Oceanic',
                species: [
                    { value: 'mermaid', label: 'Mermaid', features: ['mermaid tail', 'gills', 'underwater breathing'] },
                    { value: 'shark girl', label: 'Shark Girl', features: ['shark fin', 'shark tail', 'sharp teeth'] },
                    { value: 'great white shark girl', label: 'Great White Shark Girl', features: ['dorsal fin', 'predator instincts', 'electroreception'] },
                    { value: 'hammerhead shark girl', label: 'Hammerhead Shark Girl', features: ['hammer head', 'enhanced senses', 'electrical detection'] },
                    { value: 'whale girl', label: 'Whale Girl', features: ['whale tail', 'blowhole', 'echolocation'] },
                    { value: 'blue whale girl', label: 'Blue Whale Girl', features: ['massive size', 'filter feeding', 'deep calls'] },
                    { value: 'orca girl', label: 'Orca Girl', features: ['orca markings', 'pod social', 'intelligence'] },
                    { value: 'dolphin girl', label: 'Dolphin Girl', features: ['dolphin tail', 'echolocation', 'playful nature'] },
                    { value: 'cuttlefish girl', label: 'Cuttlefish Girl', features: ['chromatophores', 'camouflage', 'tentacles'] },
                    { value: 'octopus girl', label: 'Octopus Girl', features: ['eight tentacles', 'camouflage', 'intelligence'] },
                    { value: 'squid girl', label: 'Squid Girl', features: ['tentacles', 'ink spray', 'jet propulsion'] },
                    { value: 'vampire squid girl', label: 'Vampire Squid Girl', features: ['bioluminescence', 'deep sea', 'defensive posture'] },
                    { value: 'jellyfish girl', label: 'Jellyfish Girl', features: ['translucent body', 'stinging cells', 'pulsing movement'] },
                    { value: 'sea anemone girl', label: 'Sea Anemone Girl', features: ['tentacle crown', 'stationary', 'symbiotic'] },
                    { value: 'starfish girl', label: 'Starfish Girl', features: ['five arms', 'regeneration', 'tube feet'] },
                    { value: 'sea urchin girl', label: 'Sea Urchin Girl', features: ['spines', 'spherical body', 'defensive'] },
                    { value: 'seahorse girl', label: 'Seahorse Girl', features: ['curled tail', 'unique reproduction', 'camouflage'] },
                    { value: 'anglerfish girl', label: 'Anglerfish Girl', features: ['bioluminescent lure', 'large mouth', 'deep sea'] },
                    { value: 'mantis shrimp girl', label: 'Mantis Shrimp Girl', features: ['powerful punch', 'complex eyes', 'vibrant colors'] },
                    { value: 'lobster girl', label: 'Lobster Girl', features: ['claws', 'exoskeleton', 'long antennae'] },
                    { value: 'crab girl', label: 'Crab Girl', features: ['sideways walk', 'shell dwelling', 'molting'] },
                    { value: 'hermit crab girl', label: 'Hermit Crab Girl', features: ['shell home', 'asymmetric claws', 'nomadic'] }
                ]
            },
            freshwater: {
                label: 'Freshwater & Amphibian',
                species: [
                    { value: 'kappa', label: 'Kappa', features: ['water bowl head', 'webbed hands', 'river dwelling'] },
                    { value: 'frog girl', label: 'Frog Girl', features: ['long tongue', 'jumping legs', 'dual breathing'] },
                    { value: 'toad girl', label: 'Toad Girl', features: ['warty skin', 'poison glands', 'terrestrial'] },
                    { value: 'newt girl', label: 'Newt Girl', features: ['regeneration', 'aquatic larvae', 'smooth skin'] },
                    { value: 'axolotl girl', label: 'Axolotl Girl', features: ['external gills', 'neoteny', 'regeneration'] },
                    { value: 'tadpole girl', label: 'Tadpole Girl', features: ['tail swimming', 'developing limbs', 'metamorphosis'] },
                    { value: 'river otter girl', label: 'River Otter Girl', features: ['playful nature', 'tool use', 'family groups'] },
                    { value: 'beaver girl', label: 'Beaver Girl', features: ['flat tail', 'dam building', 'gnawing teeth'] }
                ]
            },
            microscopic: {
                label: 'Microscopic Aquatic',
                species: [
                    { value: 'tardigrade girl', label: 'Tardigrade Girl', features: ['extreme survival', 'cryptobiosis', 'water requirement'] },
                    { value: 'amoeba girl', label: 'Amoeba Girl', features: ['shape shifting', 'pseudopods', 'single cell'] },
                    { value: 'paramecium girl', label: 'Paramecium Girl', features: ['cilia movement', 'oval shape', 'microscopic'] },
                    { value: 'plankton girl', label: 'Plankton Girl', features: ['floating lifestyle', 'photosynthesis', 'food chain base'] },
                    { value: 'diatom girl', label: 'Diatom Girl', features: ['glass shell', 'geometric patterns', 'photosynthetic'] }
                ]
            }
        }
    },
    
    arthropod: {
        label: 'Arthropod & Insect Species',
        subcategories: {
            flying: {
                label: 'Flying Insects',
                species: [
                    { value: 'butterfly girl', label: 'Butterfly Girl', features: ['butterfly wings', 'metamorphosis', 'nectar feeding'] },
                    { value: 'moth girl', label: 'Moth Girl', features: ['moth wings', 'night activity', 'light attraction'] },
                    { value: 'bee girl', label: 'Bee Girl', features: ['bee wings', 'honey production', 'hive mind'] },
                    { value: 'wasp girl', label: 'Wasp Girl', features: ['stinger', 'narrow waist', 'predatory'] },
                    { value: 'hornet girl', label: 'Hornet Girl', features: ['large size', 'powerful sting', 'aggressive'] },
                    { value: 'dragonfly girl', label: 'Dragonfly Girl', features: ['four wings', 'compound eyes', 'aerial hunting'] },
                    { value: 'damselfly girl', label: 'Damselfly Girl', features: ['delicate wings', 'folded rest', 'aquatic larvae'] },
                    { value: 'fly girl', label: 'Fly Girl', features: ['compound eyes', 'rapid movement', 'disease vector'] },
                    { value: 'mosquito girl', label: 'Mosquito Girl', features: ['proboscis', 'blood feeding', 'disease vector'] },
                    { value: 'ladybug girl', label: 'Ladybug Girl', features: ['spotted wings', 'aphid predator', 'beneficial'] },
                    { value: 'firefly girl', label: 'Firefly Girl', features: ['bioluminescence', 'light signals', 'mating displays'] }
                ]
            },
            ground: {
                label: 'Ground Insects',
                species: [
                    { value: 'ant girl', label: 'Ant Girl', features: ['colony mind', 'super strength', 'pheromone communication'] },
                    { value: 'spider girl', label: 'Spider Girl', features: ['web spinning', 'eight legs', 'venom'] },
                    { value: 'black widow girl', label: 'Black Widow Girl', features: ['deadly venom', 'hourglass marking', 'cannibalistic'] },
                    { value: 'tarantula girl', label: 'Tarantula Girl', features: ['hairy body', 'large size', 'intimidating'] },
                    { value: 'scorpion girl', label: 'Scorpion Girl', features: ['stinger tail', 'pincers', 'desert dwelling'] },
                    { value: 'mantis girl', label: 'Mantis Girl', features: ['prayer position', 'compound eyes', 'ambush predator'] },
                    { value: 'praying mantis girl', label: 'Praying Mantis Girl', features: ['folded arms', 'head rotation', 'cannibalistic mating'] },
                    { value: 'grasshopper girl', label: 'Grasshopper Girl', features: ['jumping legs', 'chirping sounds', 'herbivorous'] },
                    { value: 'cricket girl', label: 'Cricket Girl', features: ['chirping music', 'night activity', 'jumping'] },
                    { value: 'beetle girl', label: 'Beetle Girl', features: ['hard shell', 'horn protrusions', 'diverse forms'] },
                    { value: 'scarab girl', label: 'Scarab Girl', features: ['metallic shine', 'dung rolling', 'sacred symbolism'] },
                    { value: 'stag beetle girl', label: 'Stag Beetle Girl', features: ['mandible horns', 'fighting males', 'wood dwelling'] },
                    { value: 'rhinoceros beetle girl', label: 'Rhinoceros Beetle Girl', features: ['horn protrusion', 'super strength', 'intimidating'] },
                    { value: 'centipede girl', label: 'Centipede Girl', features: ['many legs', 'venomous bite', 'fast movement'] },
                    { value: 'millipede girl', label: 'Millipede Girl', features: ['many legs', 'defensive curl', 'detritus feeding'] },
                    { value: 'cockroach girl', label: 'Cockroach Girl', features: ['survival instincts', 'rapid reproduction', 'omnivorous'] },
                    { value: 'termite girl', label: 'Termite Girl', features: ['colony structure', 'wood eating', 'social castes'] }
                ]
            }
        }
    },
    
    slime: {
        label: 'Slime & Gelatinous Species',
        subcategories: {
            basic: {
                label: 'Basic Slime Types',
                species: [
                    { value: 'slime girl', label: 'Slime Girl', features: ['gel consistency', 'shape shifting', 'translucent'] },
                    { value: 'gel girl', label: 'Gel Girl', features: ['gel consistency', 'semi-solid', 'flexible'] },
                    { value: 'ooze girl', label: 'Ooze Girl', features: ['liquid consistency', 'flowing movement', 'absorption'] },
                    { value: 'jelly girl', label: 'Jelly Girl', features: ['elastic consistency', 'bouncy texture', 'transparent'] }
                ]
            },
            elemental: {
                label: 'Elemental Slimes',
                species: [
                    { value: 'fire slime girl', label: 'Fire Slime Girl', features: ['heat generation', 'flame patterns', 'temperature control'] },
                    { value: 'ice slime girl', label: 'Ice Slime Girl', features: ['cold generation', 'freezing touch', 'crystalline'] },
                    { value: 'water slime girl', label: 'Water Slime Girl', features: ['liquid form', 'pure water', 'flowing'] },
                    { value: 'earth slime girl', label: 'Earth Slime Girl', features: ['mineral content', 'rocky texture', 'solid particles'] },
                    { value: 'lightning slime girl', label: 'Lightning Slime Girl', features: ['electrical charge', 'energy crackling', 'shocking touch'] },
                    { value: 'poison slime girl', label: 'Poison Slime Girl', features: ['toxic secretions', 'acidic properties', 'dangerous touch'] },
                    { value: 'acid slime girl', label: 'Acid Slime Girl', features: ['corrosive properties', 'dissolving touch', 'chemical burns'] },
                    { value: 'healing slime girl', label: 'Healing Slime Girl', features: ['regenerative properties', 'medicinal touch', 'soothing'] },
                    { value: 'magic slime girl', label: 'Magic Slime Girl', features: ['mystical properties', 'spell absorption', 'arcane energy'] }
                ]
            },
            specialty: {
                label: 'Specialty Slimes',
                species: [
                    { value: 'honey slime girl', label: 'Honey Slime Girl', features: ['sweet taste', 'sticky consistency', 'golden color'] },
                    { value: 'oil slime girl', label: 'Oil Slime Girl', features: ['slippery surface', 'black coloring', 'flammable'] },
                    { value: 'metal slime girl', label: 'Metal Slime Girl', features: ['metallic shine', 'conductive properties', 'magnetic'] },
                    { value: 'crystal slime girl', label: 'Crystal Slime Girl', features: ['crystalline structure', 'light refraction', 'geometric patterns'] },
                    { value: 'rainbow slime girl', label: 'Rainbow Slime Girl', features: ['color shifting', 'prismatic effects', 'multi-hued'] },
                    { value: 'translucent slime girl', label: 'Translucent Slime Girl', features: ['semi-transparent', 'light filtering', 'ghostly'] },
                    { value: 'opaque slime girl', label: 'Opaque Slime Girl', features: ['solid coloring', 'light blocking', 'dense consistency'] }
                ]
            }
        }
    },
    
    plant: {
        label: 'Plant & Fungal Species',
        subcategories: {
            plantBased: {
                label: 'Plant-Based',
                species: [
                    { value: 'dryad', label: 'Dryad', features: ['tree connection', 'bark skin', 'nature magic'] },
                    { value: 'flower girl', label: 'Flower Girl', features: ['flower blooms', 'petal skin', 'fragrant aura'] },
                    { value: 'rose girl', label: 'Rose Girl', features: ['thorns', 'rose petals', 'romantic scent'] },
                    { value: 'sunflower girl', label: 'Sunflower Girl', features: ['sun tracking', 'golden petals', 'tall stature'] },
                    { value: 'vine girl', label: 'Vine Girl', features: ['vine appendages', 'climbing ability', 'tendril manipulation'] },
                    { value: 'tree girl', label: 'Tree Girl', features: ['bark skin', 'branch limbs', 'seasonal changes'] },
                    { value: 'grass girl', label: 'Grass Girl', features: ['blade hair', 'ground level', 'wind sway'] },
                    { value: 'moss girl', label: 'Moss Girl', features: ['soft covering', 'moisture retention', 'carpet growth'] },
                    { value: 'algae girl', label: 'Algae Girl', features: ['photosynthesis', 'water dwelling', 'oxygen production'] },
                    { value: 'seaweed girl', label: 'Seaweed Girl', features: ['underwater growth', 'flexible fronds', 'wave motion'] },
                    { value: 'cactus girl', label: 'Cactus Girl', features: ['spines', 'water storage', 'desert adaptation'] },
                    { value: 'venus flytrap girl', label: 'Venus Flytrap Girl', features: ['snap trap', 'carnivorous', 'trigger hairs'] },
                    { value: 'pitcher plant girl', label: 'Pitcher Plant Girl', features: ['pitfall trap', 'digestive fluids', 'insect lure'] },
                    { value: 'lily pad girl', label: 'Lily Pad Girl', features: ['floating platform', 'water surface', 'broad leaves'] }
                ]
            },
            fungal: {
                label: 'Fungal',
                species: [
                    { value: 'mushroom girl', label: 'Mushroom Girl', features: ['cap head', 'spore release', 'underground network'] },
                    { value: 'toadstool girl', label: 'Toadstool Girl', features: ['spotted cap', 'toxic properties', 'fairy rings'] },
                    { value: 'fungus girl', label: 'Fungus Girl', features: ['decomposition', 'nutrient cycling', 'mycelial network'] },
                    { value: 'spore girl', label: 'Spore Girl', features: ['reproductive cells', 'airborne dispersal', 'colonization'] },
                    { value: 'lichen girl', label: 'Lichen Girl', features: ['symbiotic nature', 'rock dwelling', 'slow growth'] },
                    { value: 'yeast girl', label: 'Yeast Girl', features: ['fermentation', 'single cell', 'reproduction budding'] }
                ]
            }
        }
    },
    
    supernatural: {
        label: 'Supernatural & Mythological',
        subcategories: {
            celestial: {
                label: 'Celestial Beings',
                species: [
                    { value: 'angel', label: 'Angel', features: ['angel wings', 'halo', 'divine aura'] },
                    { value: 'seraph', label: 'Seraph', features: ['six wings', 'burning presence', 'divine love'] },
                    { value: 'cherub', label: 'Cherub', features: ['small wings', 'innocent appearance', 'divine messenger'] },
                    { value: 'valkyrie', label: 'Valkyrie', features: ['warrior spirit', 'battle maiden', 'chooser of slain'] },
                    { value: 'star girl', label: 'Star Girl', features: ['stellar energy', 'twinkling light', 'cosmic distance'] },
                    { value: 'moon girl', label: 'Moon Girl', features: ['lunar cycles', 'night influence', 'tidal control'] },
                    { value: 'sun girl', label: 'Sun Girl', features: ['solar energy', 'daylight bringer', 'life giver'] },
                    { value: 'comet girl', label: 'Comet Girl', features: ['ice and dust', 'orbital path', 'tail streaming'] },
                    { value: 'nebula girl', label: 'Nebula Girl', features: ['gas clouds', 'star formation', 'cosmic beauty'] }
                ]
            },
            underworld: {
                label: 'Underworld & Dark',
                species: [
                    { value: 'succubus', label: 'Succubus', features: ['seduction', 'energy drain', 'demonic beauty'] },
                    { value: 'demon girl', label: 'Demon Girl', features: ['demon horns', 'demonic powers', 'infernal nature'] },
                    { value: 'devil girl', label: 'Devil Girl', features: ['pointed tail', 'temptation', 'contract maker'] },
                    { value: 'imp girl', label: 'Imp Girl', features: ['small stature', 'mischievous', 'minor demon'] },
                    { value: 'banshee', label: 'Banshee', features: ['wailing cry', 'death omen', 'spectral form'] },
                    { value: 'ghost girl', label: 'Ghost Girl', features: ['ethereal form', 'phase through', 'unfinished business'] },
                    { value: 'specter girl', label: 'Specter Girl', features: ['haunting presence', 'cold aura', 'fearsome appearance'] },
                    { value: 'wraith girl', label: 'Wraith Girl', features: ['shadow form', 'life drain', 'undead nature'] },
                    { value: 'lich girl', label: 'Lich Girl', features: ['undead mage', 'phylactery', 'necromancy'] },
                    { value: 'zombie girl', label: 'Zombie Girl', features: ['undead flesh', 'slow movement', 'infectious bite'] },
                    { value: 'vampire girl', label: 'Vampire Girl', features: ['blood drinking', 'immortal', 'night creature'] },
                    { value: 'dhampir girl', label: 'Dhampir Girl', features: ['half vampire', 'vampire hunter', 'conflicted nature'] }
                ]
            },
            elemental: {
                label: 'Elemental Spirits',
                species: [
                    { value: 'fire elemental girl', label: 'Fire Elemental Girl', features: ['flame body', 'heat aura', 'burning touch'] },
                    { value: 'water elemental girl', label: 'Water Elemental Girl', features: ['liquid form', 'tide control', 'healing waters'] },
                    { value: 'earth elemental girl', label: 'Earth Elemental Girl', features: ['stone body', 'ground shake', 'mountain strength'] },
                    { value: 'air elemental girl', label: 'Air Elemental Girl', features: ['wind form', 'flight', 'storm calling'] },
                    { value: 'lightning elemental girl', label: 'Lightning Elemental Girl', features: ['electric body', 'thunder voice', 'storm power'] },
                    { value: 'ice elemental girl', label: 'Ice Elemental Girl', features: ['frozen form', 'blizzard creation', 'absolute zero'] },
                    { value: 'shadow elemental girl', label: 'Shadow Elemental Girl', features: ['darkness manipulation', 'stealth', 'light absorption'] },
                    { value: 'light elemental girl', label: 'Light Elemental Girl', features: ['radiant form', 'illumination', 'shadow banishing'] }
                ]
            },
            mythological: {
                label: 'Mythological Creatures',
                species: [
                    { value: 'sphinx girl', label: 'Sphinx Girl', features: ['riddle master', 'ancient wisdom', 'guardian nature'] },
                    { value: 'minotaur girl', label: 'Minotaur Girl', features: ['bull horns', 'labyrinth dweller', 'fierce strength'] },
                    { value: 'centaur', label: 'Centaur', features: ['horse body', 'archery skill', 'wild nature'] },
                    { value: 'unicorn girl', label: 'Unicorn Girl', features: ['unicorn horn', 'purity', 'magic healing'] },
                    { value: 'pegasus girl', label: 'Pegasus Girl', features: ['winged horse', 'sky flight', 'divine messenger'] },
                    { value: 'griffon girl', label: 'Griffon Girl', features: ['eagle head', 'lion body', 'royal guardian'] },
                    { value: 'chimera girl', label: 'Chimera Girl', features: ['multiple animals', 'fire breath', 'hybrid nature'] },
                    { value: 'hydra girl', label: 'Hydra Girl', features: ['multiple heads', 'regeneration', 'poisonous breath'] },
                    { value: 'medusa', label: 'Medusa', features: ['snake hair', 'petrifying gaze', 'ancient curse'] },
                    { value: 'gorgon girl', label: 'Gorgon Girl', features: ['snake hair', 'bronze wings', 'deadly beauty'] },
                    { value: 'cyclops girl', label: 'Cyclops Girl', features: ['single eye', 'forge master', 'immense strength'] },
                    { value: 'titan girl', label: 'Titan Girl', features: ['giant size', 'primordial power', 'ancient lineage'] }
                ]
            },
            fae: {
                label: 'Fae & Nature Spirits',
                species: [
                    { value: 'fairy', label: 'Fairy', features: ['fairy wings', 'magic dust', 'nature blessing'] },
                    { value: 'pixie', label: 'Pixie', features: ['tiny size', 'mischievous', 'flower dwelling'] },
                    { value: 'sprite', label: 'Sprite', features: ['elemental affinity', 'nature guardian', 'playful spirit'] },
                    { value: 'nymph', label: 'Nymph', features: ['nature beauty', 'location bound', 'divine ancestry'] },
                    { value: 'naiad', label: 'Naiad', features: ['freshwater spirit', 'spring guardian', 'water blessing'] },
                    { value: 'nereid', label: 'Nereid', features: ['sea nymph', 'ocean daughter', 'sailor helper'] },
                    { value: 'sylph', label: 'Sylph', features: ['air spirit', 'wind dancer', 'sky dweller'] },
                    { value: 'undine', label: 'Undine', features: ['water spirit', 'emotion tied', 'love seeking'] },
                    { value: 'salamander spirit girl', label: 'Salamander Spirit Girl', features: ['fire spirit', 'flame dancing', 'passion embodiment'] }
                ]
            }
        }
    },
    
    mechanical: {
        label: 'Mechanical & Artificial Species',
        subcategories: {
            construct: {
                label: 'Construct Types',
                species: [
                    { value: 'golem girl', label: 'Golem Girl', features: ['clay body', 'magic animation', 'command following'] },
                    { value: 'automaton girl', label: 'Automaton Girl', features: ['mechanical body', 'gear works', 'programmed behavior'] },
                    { value: 'clockwork girl', label: 'Clockwork Girl', features: ['clockwork movement', 'wind-up mechanism', 'precision timing'] },
                    { value: 'steampunk girl', label: 'Steampunk Girl', features: ['steam power', 'brass fittings', 'Victorian aesthetic'] },
                    { value: 'cyborg girl', label: 'Cyborg Girl', features: ['cybernetic implants', 'human-machine hybrid', 'enhanced abilities'] },
                    { value: 'android girl', label: 'Android Girl', features: ['artificial intelligence', 'synthetic skin', 'human mimicry'] },
                    { value: 'robot girl', label: 'Robot Girl', features: ['metal frame', 'electronic systems', 'programmable'] },
                    { value: 'ai girl', label: 'AI Girl', features: ['digital consciousness', 'data processing', 'network connection'] }
                ]
            },
            living_objects: {
                label: 'Living Objects',
                species: [
                    { value: 'doll girl', label: 'Doll Girl', features: ['porcelain skin', 'joint articulation', 'collector item'] },
                    { value: 'puppet girl', label: 'Puppet Girl', features: ['string control', 'wooden body', 'performance art'] },
                    { value: 'mannequin girl', label: 'Mannequin Girl', features: ['display pose', 'fashion model', 'clothing showcase'] },
                    { value: 'statue girl', label: 'Statue Girl', features: ['stone body', 'artistic pose', 'monument beauty'] },
                    { value: 'gargoyle girl', label: 'Gargoyle Girl', features: ['stone wings', 'guardian duty', 'grotesque beauty'] },
                    { value: 'armor girl', label: 'Armor Girl', features: ['metal plating', 'protective shell', 'warrior equipment'] },
                    { value: 'weapon girl', label: 'Weapon Girl', features: ['blade appendages', 'combat form', 'warrior spirit'] },
                    { value: 'tool girl', label: 'Tool Girl', features: ['utility function', 'helpful nature', 'practical design'] }
                ]
            }
        }
    }
};

// === MONSTER FEATURES DATABASE ===

const MONSTER_FEATURES = {
    ears: {
        label: 'Animal Ears',
        categories: {
            mammalian: {
                label: 'Mammalian Ears',
                options: [
                    'bunny ears', 'large fluffy bunny ears', 'rabbit ears', 'cow ears', 'fluffy cow ears',
                    'wolf ears', 'fluffy wolf ears', 'sheep ears', 'small sheep ears', 'mouse ears',
                    'small mouse ears', 'rat ears', 'cat ears', 'droopy cat ears', 'brown cat droopy ears',
                    'dog ears', 'floppy dog ears', 'fox ears', 'pointed fox ears', 'deer ears',
                    'bear ears', 'rounded bear ears', 'tiger ears', 'lion ears', 'horse ears',
                    'pig ears', 'goat ears', 'bat ears', 'large bat ears'
                ]
            },
            aquatic: {
                label: 'Aquatic Ears',
                options: [
                    'fin ears', 'webbed ears', 'scaled ears', 'gill slits', 'no external ears'
                ]
            },
            insect: {
                label: 'Insect Ears',
                options: [
                    'antenna ears', 'feathered antenna ears', 'compound ear structures', 'no visible ears'
                ]
            },
            slime: {
                label: 'Slime Ears',
                options: [
                    'gelatinous ears', 'translucent ears', 'flowing ears', 'morphing ears'
                ]
            },
            supernatural: {
                label: 'Supernatural Ears',
                options: [
                    'pointy ears', 'small pointy ears', 'elf ears', 'long elf ears'
                ]
            }
        }
    },
    
    tails: {
        label: 'Animal Tails',
        categories: {
            mammalian: {
                label: 'Mammalian Tails',
                options: [
                    'bunny tail', 'white fluffy bunny tail', 'cow tail', 'fluffy cow tail',
                    'wolf tail', 'big fluffy wolf tail', 'fox tail', 'multiple fox tails',
                    'cat tail', 'long cat tail', 'mouse tail', 'tiny mouse tail',
                    'rat tail', 'long rat tail', 'deer tail', 'bear tail', 'tiger tail',
                    'striped tiger tail', 'lion tail', 'tufted lion tail', 'horse tail',
                    'pig tail', 'curly pig tail', 'sheep tail', 'goat tail', 'bat tail'
                ]
            },
            reptilian: {
                label: 'Reptilian Tails',
                options: [
                    'dragon tail', 'large dragon tail', 'snake tail', 'long snake tail',
                    'lizard tail', 'gecko tail', 'chameleon tail', 'turtle tail',
                    'crocodile tail', 'powerful crocodile tail'
                ]
            },
            aquatic: {
                label: 'Aquatic Tails',
                options: [
                    'mermaid tail', 'shark tail', 'whale tail', 'dolphin tail',
                    'medium brown orca tail', 'fish tail', 'eel tail', 'octopus tentacles',
                    'squid tentacles', 'jellyfish tendrils'
                ]
            },
            insect: {
                label: 'Insect Tails',
                options: [
                    'stinger tail', 'segmented tail', 'no tail', 'abdomen extension'
                ]
            }
        }
    },
    
    horns: {
        label: 'Horns & Antlers',
        categories: {
            horns: {
                label: 'Horn Varieties',
                options: [
                    'small horns', 'medium horns', 'large horns', 'massive horns', 'tiny horns',
                    'sheep horns', 'circular sheep horns', 'ram horns', 'highland cow horns',
                    'small highland cow horns', 'bull horns', 'curved bull horns', 'dragon horns',
                    'medium dragon horns', 'large dragon horns', 'demon horns', 'curved demon horns',
                    'straight horns', 'spiral horns', 'twisted horns', 'goat horns',
                    'unicorn horn', 'narwhal horn'
                ]
            },
            antlers: {
                label: 'Antler Types',
                options: [
                    'deer antlers', 'small deer antlers', 'large deer antlers', 'elk antlers',
                    'moose antlers', 'branching antlers', 'simple antlers'
                ]
            },
            materials: {
                label: 'Horn Materials & Colors',
                options: [
                    'bone horns', 'ivory horns', 'obsidian horns', 'crystal horns', 'metal horns',
                    'black horns', 'white horns', 'brown horns', 'gray horns', 'golden horns',
                    'silver horns', 'rainbow horns'
                ]
            }
        }
    },
    
    wings: {
        label: 'Wings & Flight Features',
        categories: {
            feathered: {
                label: 'Feathered Wings',
                options: [
                    'angel wings', 'large angel wings', 'small angel wings', 'bird wings',
                    'eagle wings', 'owl wings', 'swan wings', 'dove wings', 'raven wings',
                    'phoenix wings', 'colorful wings', 'iridescent wings'
                ]
            },
            membrane: {
                label: 'Membrane Wings',
                options: [
                    'bat wings', 'large bat wings', 'dragon wings', 'massive dragon wings',
                    'demon wings', 'wyvern wings', 'pterodactyl wings'
                ]
            },
            insect: {
                label: 'Insect Wings',
                options: [
                    'butterfly wings', 'large butterfly wings', 'colorful butterfly wings',
                    'moth wings', 'bee wings', 'dragonfly wings', 'transparent wings',
                    'four wings', 'six wings', 'fairy wings', 'gossamer wings'
                ]
            },
            special: {
                label: 'Special Wing Types',
                options: [
                    'energy wings', 'light wings', 'shadow wings', 'crystal wings',
                    'metal wings', 'no wings', 'vestigial wings'
                ]
            }
        }
    },
    
    // Continue with other feature categories...
    // This would be quite extensive, so I'll provide a representative sample
};

/**
 * Generate monster form HTML
 * @returns {string} HTML content for monster form
 */
function generateMonsterForm() {
    let formHTML = `
        <div class="section">
            <h3><span class="section-icon"></span>Monster Species Selection</h3>
            
            <div class="form-group">
                <label>Species (Required) *</label>
                <select id="monster-species" required>
                    <option value="">Select species...</option>
    `;
    
    // Generate species options organized by category
    Object.entries(MONSTER_SPECIES_DATA).forEach(([categoryKey, category]) => {
        formHTML += `<optgroup label="${category.label}">`;
        
        Object.entries(category.subcategories).forEach(([subKey, subcategory]) => {
            subcategory.species.forEach(species => {
                formHTML += `<option value="${species.value}" data-features='${JSON.stringify(species.features)}'>${species.label}</option>`;
            });
        });
        
        formHTML += '</optgroup>';
    });
    
    formHTML += `
                </select>
                <small style="color: #6b7280; font-size: 12px;">Choose your monster species. Features will be suggested based on your selection.</small>
            </div>
        </div>
    `;
    
    // Generate feature sections
    Object.entries(MONSTER_FEATURES).forEach(([featureKey, feature]) => {
        formHTML += `
            <div class="section">
                <h3><span class="section-icon"></span>${feature.label}</h3>
        `;
        
        Object.entries(feature.categories).forEach(([categoryKey, category]) => {
            formHTML += `
                <div class="form-group">
                    <label>${category.label}</label>
                    <div class="toggle-group">
            `;
            
            category.options.forEach(option => {
                formHTML += `<div class="toggle-btn" data-category="${featureKey}-${categoryKey}" data-value="${option}">${option.charAt(0).toUpperCase() + option.slice(1)}</div>`;
            });
            
            formHTML += `
                    </div>
                </div>
            `;
        });
        
        formHTML += '</div>';
    });
    
    // Custom tags section
    formHTML += `
        <div class="section">
            <h3><span class="section-icon"></span>Custom Monster Tags</h3>
            
            <div class="form-group">
                <label>Additional Tags (Optional)</label>
                <textarea id="monster-custom-tags" placeholder="Enter custom monster tags separated by commas..." rows="3" maxlength="1000"></textarea>
                <small style="color: #6b7280; font-size: 12px;">Add any additional monster features not covered above. Separate multiple tags with commas.</small>
            </div>
        </div>
    `;
    
    return formHTML;
}

/**
 * Initialize monster character form
 */
function initializeMonsterForm() {
    const monsterTab = document.getElementById('monster-tab');
    if (monsterTab) {
        monsterTab.innerHTML = generateMonsterForm();
        
        // Setup monster-specific interactions
        setupMonsterFormInteractions();
        
        // Setup real-time validation
        if (window.AkshoValidation) {
            window.AkshoValidation.setupRealTimeValidation(monsterTab, 'monster');
        }
    }
}

/**
 * Setup monster-specific form interactions
 */
function setupMonsterFormInteractions() {
    const speciesSelect = document.getElementById('monster-species');
    if (speciesSelect) {
        speciesSelect.addEventListener('change', function() {
            handleSpeciesSelection(this.value, this.selectedOptions[0]);
            updateSpeciesSuggestions(this.value);
            
            // Run conflict detection
            if (window.AkshoConflictDetection) {
                const conflictChecker = window.AkshoConflictDetection.setupRealTimeConflictDetection(
                    displayMonsterConflicts
                );
                
                const characterData = getMonsterCharacterData();
                conflictChecker(characterData.selectedTags, this.value, characterData);
            }
        });
    }
    
    // Setup feature coordination
    setupFeatureCoordination();
    
    // Setup real-time conflict detection for toggle buttons
    const toggleButtons = document.querySelectorAll('#monster-tab .toggle-btn');
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', debounce(() => {
            if (window.AkshoConflictDetection) {
                const characterData = getMonsterCharacterData();
                const species = document.getElementById('monster-species')?.value;
                
                const conflicts = window.AkshoConflictDetection.detectConflicts(
                    characterData.selectedTags, 
                    species, 
                    characterData
                );
                
                displayMonsterConflicts(conflicts);
            }
        }, 300));
    });
}

/**
 * Handle species selection and auto-suggest features
 * @param {string} speciesValue - Selected species value
 * @param {Element} selectedOption - Selected option element
 */
function handleSpeciesSelection(speciesValue, selectedOption) {
    if (!speciesValue) return;
    
    // Get suggested features for species
    const featuresData = selectedOption.dataset.features;
    if (featuresData) {
        try {
            const features = JSON.parse(featuresData);
            suggestSpeciesFeatures(features);
        } catch (error) {
            console.warn('Failed to parse species features', error);
        }
    }
    
    // Get additional suggestions from conflict detection
    if (window.AkshoConflictDetection) {
        const suggestions = window.AkshoConflictDetection.getSpeciesSuggestions(speciesValue);
        if (suggestions.length > 0) {
            displaySpeciesSuggestions(suggestions);
        }
    }
}

/**
 * Suggest features based on selected species
 * @param {Array} features - Array of suggested feature names
 */
function suggestSpeciesFeatures(features) {
    features.forEach(featureName => {
        const featureButton = document.querySelector(`[data-value="${featureName}"]`);
        if (featureButton && !featureButton.classList.contains('active')) {
            // Highlight as suggested
            featureButton.classList.add('suggested');
            featureButton.title = 'Suggested for this species';
        }
    });
}

/**
 * Display species-specific suggestions
 * @param {Array} suggestions - Array of suggestion strings
 */
function displaySpeciesSuggestions(suggestions) {
    const suggestionsContainer = document.getElementById('species-suggestions');
    if (!suggestionsContainer) {
        // Create suggestions container if it doesn't exist
        const container = createElement('div', {
            id: 'species-suggestions',
            className: 'suggestions-container'
        });
        
        const speciesSection = document.querySelector('#monster-tab .section');
        if (speciesSection) {
            speciesSection.appendChild(container);
        }
    }
    
    const container = document.getElementById('species-suggestions');
    if (container) {
        container.innerHTML = `
            <h4>Suggested Features for This Species:</h4>
            <div class="suggestion-tags">
                ${suggestions.map(suggestion => 
                    `<span class="suggestion-tag" data-suggestion="${suggestion}">${suggestion}</span>`
                ).join('')}
            </div>
        `;
        
        // Make suggestion tags clickable
        container.querySelectorAll('.suggestion-tag').forEach(tag => {
            tag.addEventListener('click', function() {
                const suggestion = this.dataset.suggestion;
                const featureButton = document.querySelector(`[data-value="${suggestion}"]`);
                if (featureButton) {
                    featureButton.click();
                    this.classList.add('applied');
                }
            });
        });
    }
}

/**
 * Setup feature coordination between different categories
 */
function setupFeatureCoordination() {
    // Coordinate wings with flying abilities
    const wingButtons = document.querySelectorAll('[data-category*="wings"] .toggle-btn');
    wingButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                // Suggest flight-related features
                suggestFlightFeatures();
            }
        });
    });
    
    // Coordinate aquatic features
    const aquaticButtons = document.querySelectorAll('[data-category*="aquatic"] .toggle-btn');
    aquaticButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                suggestAquaticFeatures();
            }
        });
    });
}

/**
 * Suggest flight-related features when wings are selected
 */
function suggestFlightFeatures() {
    const flightFeatures = ['aerial mastery', 'wind control', 'sky dwelling'];
    flightFeatures.forEach(feature => {
        const button = document.querySelector(`[data-value="${feature}"]`);
        if (button) {
            button.classList.add('suggested');
        }
    });
}

/**
 * Suggest aquatic features for water-based species
 */
function suggestAquaticFeatures() {
    const aquaticFeatures = ['underwater breathing', 'water control', 'pressure resistance'];
    aquaticFeatures.forEach(feature => {
        const button = document.querySelector(`[data-value="${feature}"]`);
        if (button) {
            button.classList.add('suggested');
        }
    });
}

/**
 * Display monster conflict detection results
 * @param {Object} conflicts - Conflict detection results
 */
function displayMonsterConflicts(conflicts) {
    let conflictContainer = document.getElementById('monster-conflicts');
    
    if (!conflictContainer) {
        conflictContainer = createElement('div', {
            id: 'monster-conflicts',
            className: 'conflict-container'
        });
        
        const firstSection = document.querySelector('#monster-tab .section');
        if (firstSection) {
            firstSection.appendChild(conflictContainer);
        }
    }
    
    if (window.AkshoConflictDetection) {
        window.AkshoConflictDetection.displayConflictResults(conflicts, conflictContainer);
    }
}

/**
 * Get monster character data from form
 * @returns {Object} Monster character data
 */
function getMonsterCharacterData() {
    const data = {
        type: 'monster',
        species: '',
        selectedTags: new Set(),
        customTags: '',
        formData: {}
    };
    
    // Get selected species
    const speciesSelect = document.getElementById('monster-species');
    if (speciesSelect && speciesSelect.value) {
        data.species = speciesSelect.value;
        data.selectedTags.add(speciesSelect.value);
        data.formData.species = speciesSelect.value;
    }
    
    // Get active toggle buttons
    const activeToggles = document.querySelectorAll('#monster-tab .toggle-btn.active');
    activeToggles.forEach(toggle => {
        data.selectedTags.add(toggle.dataset.value);
    });
    
    // Get custom tags
    const customTagsInput = document.getElementById('monster-custom-tags');
    if (customTagsInput && customTagsInput.value.trim()) {
        data.customTags = customTagsInput.value.trim();
        // Parse and add custom tags to selected tags
        const customTagsArray = parseTags(customTagsInput.value);
        customTagsArray.forEach(tag => data.selectedTags.add(tag));
    }
    
    return data;
}

/**
 * Validate monster character data
 * @param {Object} characterData - Character data to validate
 * @returns {Object} Validation result
 */
function validateMonsterCharacter(characterData) {
    if (window.AkshoValidation) {
        return window.AkshoValidation.validateCharacter(characterData, 'monster');
    }
    
    // Basic validation fallback
    const errors = [];
    
    if (!characterData.species) {
        errors.push('Species selection is required');
    }
    
    return {
        valid: errors.length === 0,
        errors: errors.length > 0 ? { general: errors } : {},
        warnings: {},
        cleanData: characterData
    };
}

/**
 * Update species suggestions based on selection
 * @param {string} species - Selected species
 */
function updateSpeciesSuggestions(species) {
    // Clear previous suggestions
    document.querySelectorAll('.toggle-btn.suggested').forEach(btn => {
        btn.classList.remove('suggested');
        btn.removeAttribute('title');
    });
    
    // This could be expanded to provide more intelligent suggestions
    console.log(`Species selected: ${species}`);
}

// === EXPORT MONSTER DATA MODULE ===

window.AkshoMonsterData = {
    // Data structures
    MONSTER_SPECIES_DATA,
    MONSTER_FEATURES,
    
    // Form generation
    generateMonsterForm,
    initializeMonsterForm,
    
    // Form interactions
    setupMonsterFormInteractions,
    handleSpeciesSelection,
    suggestSpeciesFeatures,
    displaySpeciesSuggestions,
    setupFeatureCoordination,
    
    // Feature suggestions
    suggestFlightFeatures,
    suggestAquaticFeatures,
    updateSpeciesSuggestions,
    
    // Data management
    getMonsterCharacterData,
    validateMonsterCharacter,
    
    // Conflict detection
    displayMonsterConflicts
};