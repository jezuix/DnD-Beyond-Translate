(function () {
    const pluginMode = true;
    const extensionId = 'ppkhadaebohienjhjkomdelmigneagnj';
    const monsterStatsBlockClass = 'mon-stat-block'
    const monsterStatsBlockNameClass = 'mon-stat-block__name'
    const moreInfoClass = 'more-info-content'
    const contentClass = '*content';

    const settings = {
        nameTranslate: false,
        contentTranslate: false,
        feetToMeter: true
    }

    const listClassToCheck =
        [
            {
                mainClass: monsterStatsBlockClass, listClassUnmodify: []
            },
            {
                mainClass: moreInfoClass, listClassUnmodify: []
            }
        ];
    const listUnmodifyElements = [];

    const translations = [
        // Atributos
        { text: "STR", translate: "FOR" },
        { text: "DEX", translate: "DES" },
        { text: "CON", translate: "CON" },
        { text: "INT", translate: "INT" },
        { text: "WIS", translate: "SAB" },
        { text: "CHA", translate: "CAR" },

        // Alinhamentos
        { text: "Lawful Good", translate: "Leal e Bom" },
        { text: "Neutral Good", translate: "Neutro e Bom" },
        { text: "Chaotic Good", translate: "Caótico e Bom" },
        { text: "Lawful Neutral", translate: "Leal e Neutro" },
        { text: "Neutral", translate: "Neutro" },
        { text: "Chaotic Neutral", translate: "Caótico e Neutro" },
        { text: "Lawful Evil", translate: "Leal e Mau" },
        { text: "Neutral Evil", translate: "Neutro e Mau" },
        { text: "Chaotic Evil", translate: "Caótico e Mau" },
        { text: "Unaligned", translate: "Imparcial" },

        // Características Gerais
        { text: "Armor Class", translate: "Classe de Armadura" },
        { text: "Hit Points", translate: "Pontos de Vida" },
        { text: "Speed", translate: "Deslocamento" },

        // Categorias de Tamanho
        { text: "Gargantuan", translate: "Imenso" },
        { text: "Huge", translate: "Enorme" },
        { text: "Large", translate: "Grande" },
        { text: "Medium or Small", translate: "Médio ou Pequeno" },
        { text: "Medium", translate: "Médio" },
        { text: "Small", translate: "Pequeno" },
        { text: "Tiny", translate: "Miúdo" },

        // Deslocamentos
        { text: "Burrow", translate: "Escavação" },
        { text: "Climb", translate: "Escalada" },
        { text: "Fly", translate: "Voo" },
        { text: "Swim", translate: "Natação" },

        // Idiomas Padrão
        { text: "Common", translate: "Comum" },
        { text: "Elvish", translate: "Élfico" },
        { text: "Dwarvish", translate: "Anão" },
        { text: "Giant", translate: "Gigante" },
        { text: "Gnomish", translate: "Gnômico" },
        { text: "Goblin", translate: "Goblin" },
        { text: "Halfling", translate: "Halfling" },
        { text: "Orc", translate: "Orc" },

        // Idiomas Exóticos
        { text: "Abyssal", translate: "Abissal" },
        { text: "Celestial", translate: "Celestial" },
        { text: "Undercommon", translate: "Dialeto Subterrâneo" },
        { text: "Draconic", translate: "Dracônico" },
        { text: "Infernal", translate: "Infernal" },
        { text: "Primordial", translate: "Primordial" },
        { text: "Sylvan", translate: "Silvestre" },
        { text: "Deep Speech", translate: "Subcomum" },
        { text: "Thieves' Cant", translate: "Gíria de ladrão" },

        // Perícias
        { text: "Acrobatics", translate: "Acrobacia" },
        { text: "Animal Handling", translate: "Adestrar Animais" },
        { text: "Arcana", translate: "Arcanismo" },
        { text: "Athletics", translate: "Atletismo" },
        { text: "Deception", translate: "Enganação" },
        { text: "History", translate: "História" },
        { text: "Insight", translate: "Intuição" },
        { text: "Intimidation", translate: "Intimidação" },
        { text: "Investigation", translate: "Investigação" },
        { text: "Medicine", translate: "Medicina" },
        { text: "Nature", translate: "Natureza" },
        { text: "Perception", translate: "Percepção" },
        { text: "Performance", translate: "Atuação" },
        { text: "Persuasion", translate: "Persuasão" },
        { text: "Religion", translate: "Religião" },
        { text: "Sleight of Hand", translate: "Prestidigitação" },
        { text: "Stealth", translate: "Furtividade" },
        { text: "Survival", translate: "Sobrevivência" },

        // Propriedades da ficha
        { text: "Saving Throws", translate: "Testes de Resistência" },
        { text: "Damage Resistances", translate: "Resistências a Danos" },
        { text: "Damage Immunities", translate: "Imunidades a Danos" },
        { text: "Condition Resistances", translate: "Resistências a Condições" },
        { text: "Condition Immunities", translate: "Imunidades a Condições" },
        { text: "Skills", translate: "Perícias" },
        { text: "Senses", translate: "Sentidos" },
        { text: "Languages", translate: "Idiomas" },
        { text: "Challenge", translate: "Nível de Desafio" },
        { text: "Proficiency Bonus", translate: "Proficiência" },

        // Raça
        { text: "Aberration", translate: "Aberração" },
        { text: "Beast", translate: "Besta" },
        { text: "Celestial", translate: "Celestial" },
        { text: "Construct", translate: "Construto" },
        { text: "Dragon", translate: "Dragão" },
        { text: "Elemental", translate: "Elemental" },
        { text: "Fey", translate: "Fada" },
        { text: "Fiend", translate: "Corruptor" },
        { text: "Giant", translate: "Gigante" },
        { text: "Humanoid", translate: "Humanoide" },
        { text: "Monstrosity", translate: "Monstruosidade" },
        { text: "Ooze", translate: "Limo" },
        { text: "Plant", translate: "Planta" },
        { text: "Undead", translate: "Morto-vivo" },
        { text: "unknown", translate: "desconhecido" },

        // Sentidos
        { text: "Blindsight", translate: "Percepção às Cegas" },
        { text: "Darkvision", translate: "Visão no Escuro" },
        { text: "Tremorsense", translate: "Sentido Sísmico" },
        { text: "Truesight", translate: "Visão Verdadeira" },
        { text: "Passive Perception", translate: "Percepção Passiva" },

        // Siglas
        { text: "ft", translate: "m" },

        // Sub-Tipo de Raça
        { text: "Aarakocra", translate: "Aarakocra" },
        { text: "Adult Chromatic", translate: "Adulto Cromático" },
        { text: "Air", translate: "Ar" },
        { text: "Air Genasi", translate: "Genasi do Ar" },
        { text: "Ambusher", translate: "Emboscador" },
        { text: "Angel", translate: "Anjo" },
        { text: "Angulotl", translate: "Angulotl" },
        { text: "Any", translate: "Qualquer" },
        { text: "Any Birdfolk", translate: "Qualquer Povo das Aves" },
        { text: "Any Race", translate: "Qualquer Raça" },
        { text: "Archfey", translate: "Arqui-Fada" },
        { text: "Artillery", translate: "Artilharia" },
        { text: "Bard", translate: "Bardo" },
        { text: "Bearfolk", translate: "Povo Urso" },
        { text: "Beholder", translate: "Beholder" },
        { text: "Blindheim", translate: "Blindheim" },
        { text: "Brown Bear", translate: "Urso Pardo" },
        { text: "Brute", translate: "Bruto" },
        { text: "Bugbear", translate: "Bugbear" },
        { text: "Bullywug", translate: "Bullywug" },
        { text: "Burrowling", translate: "Escavador" },
        { text: "Category 1", translate: "Categoria 1" },
        { text: "Category 2", translate: "Categoria 2" },
        { text: "Category 3", translate: "Categoria 3" },
        { text: "Category 4", translate: "Categoria 4" },
        { text: "Category 5", translate: "Categoria 5" },
        { text: "Category 6", translate: "Categoria 6" },
        { text: "Cattle", translate: "Gado" },
        { text: "Cervan", translate: "Cervan" },
        { text: "Changeling", translate: "Metamorfo" },
        { text: "Chromatic", translate: "Cromático" },
        { text: "Cleric", translate: "Clérigo" },
        { text: "Cloud Giant", translate: "Gigante das Nuvens" },
        { text: "Controller", translate: "Controlador" },
        { text: "Corvum", translate: "Corvum" },
        { text: "Cursed", translate: "Amaldiçoado" },
        { text: "Demon", translate: "Demônio" },
        { text: "Derro", translate: "Derro" },
        { text: "Devil", translate: "Diabo" },
        { text: "Dinosaur", translate: "Dinossauro" },
        { text: "Dire Corby", translate: "Corby Sombrio" },
        { text: "Downcast", translate: "Desalentado" },
        { text: "Dragonborn", translate: "Dragonborn" },
        { text: "Drow", translate: "Drow" },
        { text: "Druid", translate: "Druida" },
        { text: "Dwarf", translate: "Anão" },
        { text: "Earth", translate: "Terra" },
        { text: "Earth Genasi", translate: "Genasi da Terra" },
        { text: "Elemental", translate: "Elemental" },
        { text: "Elf", translate: "Elfo" },
        { text: "Erina", translate: "Erina" },
        { text: "Fiend", translate: "Demoníaco" },
        { text: "Fire", translate: "Fogo" },
        { text: "Fire Genasi", translate: "Genasi do Fogo" },
        { text: "Fire Giant", translate: "Gigante do Fogo" },
        { text: "Firenewt", translate: "Firenewt" },
        { text: "Frost Giant", translate: "Gigante do Gelo" },
        { text: "Fungus", translate: "Fungo" },
        { text: "Gallus", translate: "Gallus" },
        { text: "Gem", translate: "Gema" },
        { text: "Giff", translate: "Giff" },
        { text: "Gith", translate: "Gith" },
        { text: "Gnoll", translate: "Gnoll" },
        { text: "Gnome", translate: "Gnomo" },
        { text: "Goblin", translate: "Goblin" },
        { text: "Goblinoid", translate: "Goblinoide" },
        { text: "Goliath", translate: "Goliath" },
        { text: "Grimlock", translate: "Grimlock" },
        { text: "Grippli", translate: "Grippli" },
        { text: "Grung", translate: "Grung" },
        { text: "Hag", translate: "Bruxa" },
        { text: "Half-Black Dragon", translate: "Meia-Dragão Negro" },
        { text: "Half-Blue Dragon", translate: "Meia-Dragão Azul" },
        { text: "Half-Dragon", translate: "Meia-Dragão" },
        { text: "Half-Elf", translate: "Meio-Elfo" },
        { text: "Half-Giant", translate: "Meio-Gigante" },
        { text: "Halfling", translate: "Halfling" },
        { text: "Half-Orc", translate: "Meio-Orc" },
        { text: "Harengon", translate: "Harengon" },
        { text: "Hedge", translate: "Hedge" },
        { text: "High-Elf", translate: "Alto-Elfo" },
        { text: "Hill Giant", translate: "Gigante das Colinas" },
        { text: "Hobgoblin", translate: "Hobgoblin" },
        { text: "Human", translate: "Humano" },
        { text: "Incorporeal", translate: "Incorporal" },
        { text: "Inevitable", translate: "Inevitável" },
        { text: "Jerbeen", translate: "Jerbeen" },
        { text: "Jermlaine", translate: "Jermlaine" },
        { text: "Kalashtar", translate: "Kalashtar" },
        { text: "Kender", translate: "Kender" },
        { text: "Kenku", translate: "Kenku" },
        { text: "Kobold", translate: "Kobold" },
        { text: "Kraul", translate: "Kraul" },
        { text: "Kuo-Toa", translate: "Kuo-Toa" },
        { text: "Leader", translate: "Líder" },
        { text: "Lemurfolk", translate: "Lemurfolk" },
        { text: "Leonin", translate: "Leonin" },
        { text: "Lizardfolk", translate: "Povo Lagarto" },
        { text: "Locathah", translate: "Locathah" },
        { text: "Luma", translate: "Luma" },
        { text: "Mapach", translate: "Mapach" },
        { text: "Meazel", translate: "Meazel" },
        { text: "Medusa", translate: "Medusa" },
        { text: "Merfolk", translate: "Povo do Mar" },
        { text: "Metallic", translate: "Metálico" },
        { text: "Mind Flayer", translate: "Devorador de Mentes" },
        { text: "Minion", translate: "Minion" },
        { text: "Minotaur", translate: "Minotauro" },
        { text: "Molefolk", translate: "Povo Toupeira" },
        { text: "Mongrelfolk", translate: "Povo Mestiço" },
        { text: "Monk", translate: "Monge" },
        { text: "Moonstone", translate: "Pedra da Lua" },
        { text: "Myconid", translate: "Míconide" },
        { text: "Nagpa", translate: "Nagpa" },
        { text: "Nkosi", translate: "Nkosi" },
        { text: "Noctiny", translate: "Noctiny" },
        { text: "Ogre", translate: "Ogros" },
        { text: "Orc", translate: "Orc" },
        { text: "Paladin", translate: "Paladino" },
        { text: "Quaggoth", translate: "Quaggoth" },
        { text: "Ranger", translate: "Rastreador" },
        { text: "Raptor", translate: "Raptor" },
        { text: "Ratfolk", translate: "Povo Rato" },
        { text: "Ravenfolk", translate: "Povo Corvo" },
        { text: "Roachling", translate: "Roachling" },
        { text: "Sable Elf", translate: "Elfo Sable" },
        { text: "Sahuagin", translate: "Sahuagin" },
        { text: "Saurial", translate: "Saurial" },
        { text: "Shadar-Kai", translate: "Shadar-Kai" },
        { text: "Shapechanger", translate: "Metamorfo" },
        { text: "Shifter", translate: "Mutante" },
        { text: "Sphinx", translate: "Esfinge" },
        { text: "Sprite", translate: "Duende" },
        { text: "Stone Giant", translate: "Gigante da Pedra" },
        { text: "Tarrasque", translate: "Tarrasque" },
        { text: "Tiefling", translate: "Tiefling" },
        { text: "Titan", translate: "Titã" },
        { text: "Twi'lek", translate: "Twi'lek" },
        { text: "Undead", translate: "Mortos-Vivos" },
        { text: "Vampire", translate: "Vampiro" },
        { text: "Vulturefolk", translate: "Povo Abutre" },
        { text: "Warforged", translate: "Forjado para a Guerra" },
        { text: "Wererat", translate: "Lobisomem Rato" },
        { text: "Werewolf", translate: "Lobisomem" },
        { text: "Yeti", translate: "Yeti" },
        { text: "Yuan-Ti", translate: "Yuan-Ti" },
        { text: "Zombie", translate: "Zumbi" },

        // Tipos de Danos
        { text: "Acid", translate: "Ácido" },
        { text: "All", translate: "Todos" },
        { text: "Bludgeoning", translate: "Concussão" },
        { text: "Cold", translate: "Frio" },
        { text: "Fire", translate: "Fogo" },
        { text: "Force", translate: "Força" },
        { text: "Lightning", translate: "Relâmpago" },
        { text: "Necrotic", translate: "Necrótico" },
        { text: "Piercing", translate: "Perfuração" },
        { text: "Poison", translate: "Veneno" },
        { text: "Psychic", translate: "Psíquico" },
        { text: "Radiant", translate: "Radiante" },
        { text: "Slashing", translate: "Cortante" },
        { text: "Thunder", translate: "Trovão" },

        // Tipos de Danos Condicionais
        { text: "Bludgeoning from Magic Weapons", translate: "Concussão de Armas Mágicas" },
        { text: "Bludgeoning from Nonmagical Attacks", translate: "Concussão de Ataques Não Mágicos" },
        { text: "Bludgeoning from Nonmagical Attacks that aren't Silvered", translate: "Concussão de Ataques Não Mágicos que não são Prateados" },
        { text: "Bludgeoning from Nonmagical Attacks that aren't Adamantine", translate: "Concussão de Ataques Não Mágicos que não são de Adamantina" },
        { text: "Bludgeoning from Silvered Weapons", translate: "Concussão de Armas Prateadas" },
        { text: "Bludgeoning from Adamantine Weapons", translate: "Concussão de Armas de Adamantina" },
        { text: "Piercing from Magic Weapons", translate: "Perfurante de Armas Mágicas" },
        { text: "Piercing from Nonmagical Attacks", translate: "Perfurante de Ataques Não Mágicos" },
        { text: "Piercing from Nonmagical Attacks that aren't Silvered", translate: "Perfurante de Ataques Não Mágicos que não são Prateados" },
        { text: "Piercing from Nonmagical Attacks that aren't Adamantine", translate: "Perfurante de Ataques Não Mágicos que não são de Adamantina" },
        { text: "Piercing from Silvered Weapons", translate: "Perfurante de Armas Prateadas" },
        { text: "Piercing from Adamantine Weapons", translate: "Perfurante de Armas de Adamantina" },
        { text: "Slashing from Magic Weapons", translate: "Cortante de Armas Mágicas" },
        { text: "Slashing from Nonmagical Attacks", translate: "Cortante de Ataques Não Mágicos" },
        { text: "Slashing from Nonmagical Attacks that aren't Silvered", translate: "Cortante de Ataques Não Mágicos que não são Prateados" },
        { text: "Slashing from Nonmagical Attacks that aren't Adamantine", translate: "Cortante de Ataques Não Mágicos que não são de Adamantina" },
        { text: "Slashing from Silvered Weapons", translate: "Cortante de Armas Prateadas" },
        { text: "Slashing from Adamantine Weapons", translate: "Cortante de Armas de Adamantina" },

        // Multiplos Danos Condicionais
        { text: "Bludgeoning and Piercing from Magic Weapons", translate: "Concussão e Perfurante de Armas Mágicas" },
        { text: "Bludgeoning and Piercing from Nonmagical Attacks", translate: "Concussão e Perfurante de Ataques Não Mágicos" },
        { text: "Bludgeoning and Piercing from Nonmagical Attacks that aren't Adamantine", translate: "Concussão e Perfurante de Ataques Não Mágicos que não são de Adamantina" },
        { text: "Bludgeoning and Piercing from Nonmagical Attacks that aren't Silvered", translate: "Concussão e Perfurante de Ataques Não Mágicos que não são Prateados" },
        { text: "Bludgeoning and Piercing from Silvered Weapons", translate: "Concussão e Perfurante de Armas Prateadas" },
        { text: "Bludgeoning and Piercing from Adamantine Weapons", translate: "Concussão e Perfurante de Armas de Adamantina" },
        { text: "Bludgeoning and Slashing from Magic Weapons", translate: "Concussão e Cortante de Armas Mágicas" },
        { text: "Bludgeoning and Slashing from Nonmagical Attacks", translate: "Concussão e Cortante de Ataques Não Mágicos" },
        { text: "Bludgeoning and Slashing from Nonmagical Attacks that aren't Adamantine", translate: "Concussão e Cortante de Ataques Não Mágicos que não são de Adamantina" },
        { text: "Bludgeoning and Slashing from Nonmagical Attacks that aren't Silvered", translate: "Concussão e Cortante de Ataques Não Mágicos que não são Prateados" },
        { text: "Bludgeoning and Slashing from Silvered Weapons", translate: "Concussão e Cortante de Armas Prateadas" },
        { text: "Bludgeoning and Slashing from Adamantine Weapons", translate: "Concussão e Cortante de Armas de Adamantina" },
        { text: "Piercing and Slashing from Magic Weapons", translate: "Perfurante e Cortante de Armas Mágicas" },
        { text: "Piercing and Slashing from Nonmagical Attacks", translate: "Perfurante e Cortante de Ataques Não Mágicos" },
        { text: "Piercing and Slashing from Nonmagical Attacks that aren't Adamantine", translate: "Perfurante e Cortante de Ataques Não Mágicos que não são de Adamantina" },
        { text: "Piercing and Slashing from Nonmagical Attacks that aren't Silvered", translate: "Perfurante e Cortante de Ataques Não Mágicos que não são Prateados" },
        { text: "Piercing and Slashing from Silvered Weapons", translate: "Perfurante e Cortante de Armas Prateadas" },
        { text: "Piercing and Slashing from Adamantine Weapons", translate: "Perfurante e Cortante de Armas de Adamantina" },
        { text: "Bludgeoning, Piercing, and Slashing from Magic Weapons", translate: "Concussão, Perfurante e Cortante de Armas Mágicas" },
        { text: "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks", translate: "Concussão, Perfurante e Cortante de Ataques Não Mágicos" },
        { text: "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Adamantine", translate: "Concussão, Perfurante e Cortante de Ataques Não Mágicos que não são de Adamantina" },
        { text: "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered", translate: "Concussão, Perfurante e Cortante de Ataques Não Mágicos que não são Prateados" },
        { text: "Bludgeoning, Piercing, and Slashing from Silvered Weapons", translate: "Concussão, Perfurante e Cortante de Armas Prateadas" },
        { text: "Bludgeoning, Piercing, and Slashing from Adamantine Weapons", translate: "Concussão, Perfurante e Cortante de Armas de Adamantina" },

        // Tipos de Danos, Condições, Resistências e Imunidades
        { text: "Blinded", translate: "Cego" },
        { text: "Charmed", translate: "Enfeitiçado" },
        { text: "Deafened", translate: "Surdo" },
        { text: "Exhaustion", translate: "Exaustão" },
        { text: "Frightened", translate: "Amedrontado" },
        { text: "Grappled", translate: "Agarrado" },
        { text: "Incapacitated", translate: "Incapacitado" },
        { text: "Invisible", translate: "Invisível" },
        { text: "Paralyzed", translate: "Paralisado" },
        { text: "Petrified", translate: "Petrificado" },
        { text: "Poisoned", translate: "Envenenado" },
        { text: "Prone", translate: "Caído" },
        { text: "Restrained", translate: "Impedido" },
        { text: "Stunned", translate: "Atordoado" },
        { text: "Unconscious", translate: "Inconsciente" },

        { text: "Acid - Resistance", translate: "Ácido - Resistência" },
        { text: "Acid - Immunity", translate: "Ácido - Imunidade" },
        { text: "Acid - Vulnerability", translate: "Ácido - Vulnerabilidade" },
        { text: "All - Resistance", translate: "Todos - Resistência" },
        { text: "All damage but Force, Radiant, and Psychic - Resistance", translate: "Todo dano exceto Força, Radiante e Psíquico - Resistência" },
        { text: "All damage from spells - Immunity", translate: "Todo dano de magias - Imunidade" },
        { text: "Bludgeoning - Vulnerability", translate: "Concussão - Vulnerabilidade" },
        { text: "Bludgeoning - Immunity", translate: "Concussão - Imunidade" },
        { text: "Bludgeoning - Resistance", translate: "Concussão - Resistência" },
        { text: "Bludgeoning and Piercing from nonmagical attacks - Resistance", translate: "Concussão e Perfuração de ataques não mágicos - Resistência" },
        { text: "Bludgeoning damage from falling - Immunity", translate: "Dano de concussão por queda - Imunidade" },
        { text: "Bludgeoning from non magical attacks - Resistance", translate: "Concussão de ataques não mágicos - Resistência" },
        { text: "Bludgeoning from nonmagical attacks - Resistance", translate: "Concussão de ataques não mágicos - Resistência" },
        { text: "Bludgeoning from nonmagical attacks - Immunity", translate: "Concussão de ataques não mágicos - Imunidade" },
        { text: "Bludgeoning, Piercing, and Slashing by Silvered Weapons - Vulnerability", translate: "Concussão, Perfuração e Cortante por armas banhadas a prata - Vulnerabilidade" },
        { text: "Bludgeoning, Piercing, and Slashing from attacks not made with Cold Iron Weapons - Resistance", translate: "Concussão, Perfuração e Cortante de ataques não feitos com Armas de Ferro Frio - Resistência" },
        { text: "Bludgeoning, Piercing, and Slashing from Magic Weapons - Resistance", translate: "Concussão, Perfuração e Cortante de Armas Mágicas - Resistência" },
        { text: "Bludgeoning, Piercing, and Slashing from Magical Weapons - Immunity", translate: "Concussão, Perfuração e Cortante de Armas Mágicas - Imunidade" },
        { text: "Bludgeoning, Piercing, and Slashing from Metal Weapons - Immunity", translate: "Concussão, Perfuração e Cortante de Armas Metálicas - Imunidade" },
        { text: "Bludgeoning, Piercing, and Slashing from Mundane Attacks - Resistance", translate: "Concussão, Perfuração e Cortante de Ataques Mundanos - Resistência" },
        { text: "Bludgeoning, Piercing, and Slashing from Mundane Attacks - Immunity", translate: "Concussão, Perfuração e Cortante de Ataques Mundanos - Imunidade" },
        { text: "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks - Resistance", translate: "Concussão, Perfuração e Cortante de Ataques Não Mágicos - Resistência" },
        { text: "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks - Immunity", translate: "Concussão, Perfuração e Cortante de Ataques Não Mágicos - Imunidade" },
        { text: "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks not made with Cold Iron Weapons - Resistance", translate: "Concussão, Perfuração e Cortante de Ataques Não Mágicos não feitos com Armas de Ferro Frio - Resistência" },
        { text: "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Adamantine - Immunity", translate: "Concussão, Perfuração e Cortante de Ataques Não Mágicos que não sejam de Adamantina - Imunidade" },
        { text: "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Adamantine - Resistance", translate: "Concussão, Perfuração e Cortante de Ataques Não Mágicos que não sejam de Adamantina - Resistência" },
        { text: "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Adamantine or Silvered - Immunity", translate: "Concussão, Perfuração e Cortante de Ataques Não Mágicos que não sejam de Adamantina ou Banhadas a Prata - Imunidade" },
        { text: "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered - Resistance", translate: "Concussão, Perfuração e Cortante de Ataques Não Mágicos que não sejam banhados a Prata - Resistência" },
        { text: "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered - Immunity", translate: "Concussão, Perfuração e Cortante de Ataques Não Mágicos que não sejam banhados a Prata - Imunidade" },
        { text: "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks while in Dim Light or Darkness - Resistance", translate: "Concussão, Perfuração e Cortante de Ataques Não Mágicos enquanto estiver em Luz Fraca ou Escuridão - Resistência" },
        { text: "Bludgeoning, Piercing, and Slashing that is Nonmagical - Immunity", translate: "Concussão, Perfuração e Cortante Não Mágicos - Imunidade" },
        { text: "Bludgeoning, Piercing, and Slashing while in Dim Light or Darkness - Resistance", translate: "Concussão, Perfuração e Cortante enquanto estiver em Luz Fraca ou Escuridão - Resistência" },
        { text: "Bludgeoning, Slashing, and Piercing from Nonmagical Attacks not made with Cold Iron Weapons - Immunity", translate: "Concussão, Cortante e Perfuração de Ataques Não Mágicos não feitos com Armas de Ferro Frio - Imunidade" },
        { text: "Cold - Vulnerability", translate: "Frio - Vulnerabilidade" },
        { text: "Cold - Immunity", translate: "Frio - Imunidade" },
        { text: "Cold - Resistance", translate: "Frio - Resistência" },
        { text: "Damage Dealt By Traps - Resistance", translate: "Dano Causado por Armadilhas - Resistência" },
        { text: "Damage from Spells - Resistance", translate: "Dano de Magias - Resistência" },
        { text: "Damage of the type matching the animated breath's form (acid, cold, fire, lightning, or poison) - Resistance", translate: "Dano do tipo correspondente à forma do sopro animado (ácido, frio, fogo, relâmpago ou veneno) - Resistência" },
        { text: "Fire - Vulnerability", translate: "Fogo - Vulnerabilidade" },
        { text: "Fire - Resistance", translate: "Fogo - Resistência" },
        { text: "Fire - Immunity", translate: "Fogo - Imunidade" },
        { text: "Force - Resistance", translate: "Força - Resistência" },
        { text: "Force - Immunity", translate: "Força - Imunidade" },
        { text: "Force - Vulnerability", translate: "Força - Vulnerabilidade" },
        { text: "Lightning - Vulnerability", translate: "Relâmpago - Vulnerabilidade" },
        { text: "Lightning - Immunity", translate: "Relâmpago - Imunidade" },
        { text: "Lightning - Resistance", translate: "Relâmpago - Resistência" },
        { text: "Lightning (granted by darksteel greataxe) - Resistance", translate: "Relâmpago (concedido por machado grande de aço negro) - Resistência" },
        { text: "Necrotic - Vulnerability", translate: "Necrótico - Vulnerabilidade" },
        { text: "Necrotic - Resistance", translate: "Necrótico - Resistência" },
        { text: "Necrotic - Immunity", translate: "Necrótico - Imunidade" },
        { text: "Nonmagical Bludgeoning, Piercing, and Slashing (from Stoneskin) - Resistance", translate: "Concussão, Perfuração e Cortante Não Mágicos (de Pele de Pedra) - Resistência" },
        { text: "One of the following: acid, cold, fire, lightning, or poison - Resistance", translate: "Um dos seguintes: ácido, frio, fogo, relâmpago ou veneno - Resistência" },
        { text: "Petrified (Aberrant Armor Only) - Immunity", translate: "Petrificado (apenas Armadura Aberrante) - Imunidade" },
        { text: "Piercing - Vulnerability", translate: "Perfuração - Vulnerabilidade" },
        { text: "Piercing - Resistance", translate: "Perfuração - Resistência" },
        { text: "Piercing - Immunity", translate: "Perfuração - Imunidade" },
        { text: "Piercing and Slashing from nonmagical attacks - Resistance", translate: "Perfuração e Cortante de ataques não mágicos - Resistência" },
        { text: "Piercing and Slashing from Nonmagical Attacks that aren't Adamantine - Resistance", translate: "Perfuração e Cortante de Ataques Não Mágicos que não sejam de Adamantina - Resistência" },
        { text: "Piercing and Slashing from Nonmagical Attacks that aren't Adamantine - Immunity", translate: "Perfuração e Cortante de Ataques Não Mágicos que não sejam de Adamantina - Imunidade" },
        { text: "Piercing from Magic Weapons Wielded by Good Creatures - Vulnerability", translate: "Perfuração de Armas Mágicas Empunhadas por Criaturas Boas - Vulnerabilidade" },
        { text: "Piercing from nonmagical attacks - Resistance", translate: "Perfuração de ataques não mágicos - Resistência" },
        { text: "Poison - Vulnerability", translate: "Veneno - Vulnerabilidade" },
        { text: "Poison - Resistance", translate: "Veneno - Resistência" },
        { text: "Poison - Immunity", translate: "Veneno - Imunidade" },
        { text: "Psychic - Immunity", translate: "Psíquico - Imunidade" },
        { text: "Psychic - Resistance", translate: "Psíquico - Resistência" },
        { text: "Psychic - Vulnerability", translate: "Psíquico - Vulnerabilidade" },
        { text: "Psychic (granted by Ruidium Armor) - Resistance", translate: "Psíquico (concedido por Armadura de Ruidium) - Resistência" },
        { text: "Radiant - Vulnerability", translate: "Radiante - Vulnerabilidade" },
        { text: "Radiant - Resistance", translate: "Radiante - Resistência" },
        { text: "Radiant - Immunity", translate: "Radiante - Imunidade" },
        { text: "Ranged Attacks - Resistance", translate: "Ataques à Distância - Resistência" },
        { text: "Slashing - Vulnerability", translate: "Cortante - Vulnerabilidade" },
        { text: "Slashing - Resistance", translate: "Cortante - Resistência" },
        { text: "Slashing - Immunity", translate: "Cortante - Imunidade" },
        { text: "Slashing and Piercing from Nonmagical Attacks - Resistance", translate: "Cortante e Perfuração de Ataques Não Mágicos - Resistência" },
        { text: "Slashing from a Vorpal Sword - Vulnerability", translate: "Corte por uma Espada Vorpal - Vulnerabilidade" },
        { text: "Slashing from Nonmagical Attacks - Resistance", translate: "Corte de Ataques Não Mágicos - Resistência" },
        { text: "Thunder - Vulnerability", translate: "Trovão - Vulnerabilidade" },
        { text: "Thunder - Resistance", translate: "Trovão - Resistência" },
        { text: "Thunder - Immunity", translate: "Trovão - Imunidade" },

        // Termos Gerais
        { text: "Variable Sizes", translate: "Tamanhos Variados" },
        { text: "Size", translate: "Tamanho" },
        { text: "Hit Die Type", translate: "Tipo de Dado de Vida" },
        { text: "Number of Hit Dice", translate: "Número de Dados de Vida" },
        { text: "Hit Point Modifier", translate: "Modificador de Pontos de Vida" },
        { text: "Total Hit Points", translate: "Total de Pontos de Vida" },
        { text: "Calculation", translate: "Cálculo" },
        { text: "Average Hit Points", translate: "Pontos de Vida Médios" },

        // Terrenos
        { text: "Arctic", translate: "Ártico" },
        { text: "Coastal", translate: "Costeiro" },
        { text: "Desert", translate: "Deserto" },
        { text: "Forest", translate: "Floresta" },
        { text: "Grassland", translate: "Campo" },
        { text: "Hill", translate: "Colina" },
        { text: "Mountain", translate: "Montanha" },
        { text: "Swamp", translate: "Pântano" },
        { text: "Underdark", translate: "Subterrâneo" },
        { text: "Underwater", translate: "Subaquático" },
        { text: "Urban", translate: "Urbano" },

        // Títulos e Categorias D&D Beyond
        { text: "Actions", translate: "Ações" },
        { text: "Bonus Actions", translate: "Ações Bônus" },
        { text: "Description", translate: "Descrição" },
        { text: "Legendary Actions", translate: "Ações Lendárias" },
        { text: "Monster Characteristics", translate: "Características do Monstro" },
        { text: "Mythic Actions", translate: "Ações Míticas" },
        { text: "Reactions", translate: "Reações" },
        { text: "Regional Effects", translate: "Efeitos Regionais" },
        { text: "Special Traits", translate: "Traços Especiais" },
        { text: "Lair and Lair Actions", translate: "Covil e Ações de Covil" },
        { text: "Lair Actions", translate: "Ações de Covil" },
    ];

    // Carrega os JSONS dentro do objeto translations
    function loadJsonTranslation() {
        let path = pluginMode ?
            `chrome-extension://${extensionId}/translations` :
            './translations';
    }

    // Efetua as configurações
    function setup() {
        if (!settings.nameTranslate) {
            listClassToCheck.forEach(el => {
                if (el.mainClass !== monsterStatsBlockClass) return;
                if (!el.listClassUnmodify)
                    el.listClassUnmodify = [];

                el.listClassUnmodify.push(monsterStatsBlockNameClass);
            })
        }

        if (!settings.contentTranslate) {
            listClassToCheck.forEach(el => {
                if (!el.listClassUnmodify)
                    el.listClassUnmodify = [];

                el.listClassUnmodify.push(contentClass);
            })
        }

        if (!settings.contentTranslate) {

        }
    }

    // Função para contar a quantidade de palavras dentro de um texto.
    function wordCount(str) {
        return str.split(/\s+/).length;
    }

    // Ordena lista de string por quantidade de palavras.
    function sortListByLength(sortedList) {
        return sortedList.map(el => ({
            ...el,
            text: el.text.toLowerCase()
        })).sort((a, b) => wordCount(b.text) - wordCount(a.text));
    }

    function getElementsByClassNameGeneric(className, mainElement) {
        const element = mainElement ?? document;
        if (className.includes('*')) {
            const newClassName = className.replace('*', '');
            return element.querySelectorAll(`[class$="${newClassName}"]`);
        }
        else
            return element.getElementsByClassName(className);
    }

    // Guarda o HTML e o Elemento HTML listados para não serem modificados.
    function saveElementsListWithUnmodify(mainElement, classToCheck) {
        classToCheck.listClassUnmodify?.forEach(classElement => {
            const elements = getElementsByClassNameGeneric(classElement, mainElement);

            for (let element of elements)
                listUnmodifyElements.push({ classMainElement: classToCheck.mainClass, childClass: classElement, innerHTML: element.innerHTML });
        });
    }

    // Retorna o HTML original para o Elemento HTML listados para não serem modificados.
    function setElementsListWithUnmodify(mainElement, classToCheck) {
        classToCheck.listClassUnmodify?.forEach(classElement => {
            const elements = getElementsByClassNameGeneric(classElement, mainElement);
            const unmodifyElements = listUnmodifyElements.filter(el => el.classMainElement === classToCheck.mainClass && el.childClass == classElement);

            for (let i = 0; i < elements.length; i++)
                elements[i].innerHTML = unmodifyElements[i].innerHTML;
        });
    }

    // Função para traduzir elementos específicos (por classe).
    function translateElements() {
        setup();

        //Chamara as traduções armazeadas em JSONs
        //loadJsonTranslation();

        const normalizedTranslations = sortListByLength(translations);

        listClassToCheck.forEach(classToCheck => {
            const elements = getElementsByClassNameGeneric(classToCheck.mainClass);
            for (let element of elements) {
                saveElementsListWithUnmodify(element, classToCheck);

                let modifiedHTLML = element.innerHTML;
                normalizedTranslations.forEach(translation => {
                    const regex = new RegExp(`(\\b\\d*)${translation.text}\\b`, 'gi');

                    modifiedHTLML = modifiedHTLML.replace(regex, `$1${translation.translate}`)
                });

                if (modifiedHTLML)
                    element.innerHTML = modifiedHTLML;

                setElementsListWithUnmodify(element, classToCheck);
            }
        });
    }

    // Execute
    translateElements();
})();