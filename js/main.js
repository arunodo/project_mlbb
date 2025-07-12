window.onload = function () {
  alert("Welcome to Arnoldus's Mobile Legends Hero Guide!");
};

function toggleTheme() {
  document.body.classList.toggle("light-mode");
}

// Dynamic hero detail content
document.addEventListener("DOMContentLoaded", function () {
  const heroData = {

  novaria: {
    name: "Novaria",
    role: "Mage",
    skills: "Astral Sensation, Astral Recall, Astral Echo",
    description: "Novaria is a mage who specializes in long-range poke and revealing enemy positions.",
    image: "images/novaria.jpg",
  },
  carmilla: {
    name: "Carmilla",
    role: "Support/Tank",
    skills: "Crimson Flower, Blood Bath, Curse of Blood",
    description: "Carmilla is a support/tank who links with enemies to share damage and slow them.",
    image: "images/carmilla.jpg",
  },
  vale: {
    name: "Vale",
    role: "Mage",
    skills: "Wind Blade, Windblow, Windstorm",
    description: "Vale is a mage who can choose to specialize his skills for either damage or crowd control.",
    image: "images/vale.jpg",
  },
  badang: {
    name: "Badang",
    role: "Fighter",
    skills: "Fist Break, Fist Crack, Fist of Awesomeness",
    description: "Badang is a fighter who can trap enemies against walls and unleash a barrage of punches.",
    image: "images/badang.jpg",
  },
  arlott: {
    name: "Arlott",
    role: "Fighter",
    skills: "Dauntless Strike, Vengeance, Final Slash",
    description: "Arlott is a fighter who marks enemies with his skills and can dash to them for extra damage.",
    image: "images/arlott.jpg",
  },
  chou: {
    name: "Chou",
    role: "Fighter",
    skills: "Jeet Kune Do, Shunpo, The Way of Dragon",
    description: "Chou is a highly mobile fighter with strong crowd control and the ability to kick enemies away.",
    image: "images/chou.jpg",
  },
  natan: {
    name: "Natan",
    role: "Marksman/Mage",
    skills: "Superposition, Interference!, Entropy",
    description: "Natan is a unique marksman/mage who deals magic damage with basic attacks and can summon a clone.",
    image: "images/natan.jpg",
  },
  hanzo: {
    name: "Hanzo",
    role: "Assassin",
    skills: "Ninjutsu: Demon Feast, Ninjutsu: Soul Reap, Kinjutsu: Ame no Habakiri",
    description: "Hanzo is an assassin who can separate his soul from his body to attack enemies from a safe distance.",
    image: "images/hanzo.jpg",
  },
  kagura: {
    name: "Kagura",
    role: "Mage",
    skills: "Seimei Umbrella Open, Rasho Umbrella Flee, Yin Yang Overturn",
    description: "Kagura is a complex mage who manipulates her umbrella for high burst damage and mobility.",
    image: "images/kagura.jpg",
  },
  hayabusa: {
    name: "Hayabusa",
    role: "Assassin",
    skills: "Phantom Shuriken, Quad Shadow, Ougi: Shadow Kill",
    description: "Hayabusa is a highly mobile assassin who can teleport to his shadows and deal rapid burst damage to single targets.",
    image: "images/hayabusa.jpg",
  },
  cecilion: {
    name: "Cecilion",
    role: "Mage",
    skills: "Bat Impact, Sanguine Claws, Bats Feast",
    description: "Cecilion is a late-game mage who scales infinitely with mana, dealing massive area damage.",
    image: "images/cecilion.jpg",
  },
  kadita: {
    name: "Kadita",
    role: "Mage/Assassin",
    skills: "Ocean Oddity, Breath of the Ocean, Rough Waves",
    description: "Kadita is a mage/assassin who can dive into enemies with her ultimate and deal massive burst damage.",
    image: "images/kadita.jpg",
  },
  martis: {
    name: "Martis",
    role: "Fighter",
    skills: "Ashura Aura, Mortal Coil, Ashura's Wrath",
    description: "Martis is a fighter who excels at chaining kills and gaining immunity to crowd control with his ultimate.",
    image: "images/martis.jpg",
  },
  granger: {
    name: "Granger",
    role: "Marksman",
    skills: "Rhapsody, Rondo, Death Sonata",
    description: "Granger is a marksman who relies on his two-bullet basic attack and high burst damage from his skills.",
    image: "images/granger.jpg",
  },
  zilong: {
    name: "Zilong",
    role: "Fighter/Assassin",
    skills: "Dragon Flurry, Spear Flip, Supreme Warrior",
    description: "Zilong is a fast-pushing fighter/assassin who can quickly take down turrets and isolate enemies.",
    image: "images/zilong.jpg",
  },
  aamon: {
    name: "Aamon",
    role: "Assassin",
    skills: "Soul Shards, Slayer Shards, Endless Shard",
    description: "Aamon is an assassin who turns invisible after hitting enemies with skills, then unleashes a powerful ultimate.",
    image: "images/aamon.jpg",
  },
  hanabi: {
    name: "Hanabi",
    role: "Marksman",
    skills: "Ninjutsu: Petal Barrage, Ninjutsu: Higanbana, Forbidden Jutsu: Higanbana",
    description: "Hanabi is a marksman known for her bouncing basic attacks and immunity to crowd control during her ultimate.",
    image: "images/hanabi.jpg",
  },
  karina: {
    name: "Karina",
    role: "Assassin",
    skills: "Dance of Blades, Phantom Step, Death Combo",
    description: "Karina is an assassin who excels at resetting her cooldowns after securing kills, allowing for multi-kills.",
    image: "images/karina.jpg",
  },
  yuzhong: {
    name: "Yu Zhong",
    role: "Fighter",
    skills: "Dragon Tail, Soul Grasp, Black Dragon Form",
    description: "Yu Zhong is a powerful fighter who transforms into a black dragon, gaining flight and enhanced abilities.",
    image: "images/yuzhong.jpg",
  },
  ling: {
    name: "Ling",
    role: "Assassin",
    skills: "Finch Poise, Defiant Sword, Tempest of Blades",
    description: "Ling is a high-mobility assassin who jumps between walls and deals massive burst damage with his ultimate.",
    image: "images/ling.jpg",
  },
  clint: {
    name: "Clint",
    role: "Marksman",
    skills: "Quick Draw, Smoke Bomb, Double Shot",
    description: "Clint is a marksman who excels at poking enemies with his enhanced basic attacks after using skills.",
    image: "images/clint.jpg",
  },
  khufra: {
    name: "Khufra",
    role: "Tank",
    skills: "Tyrant's Revenge, Bouncing Ball, Tyrant's Rage",
    description: "Khufra is a tank with exceptional crowd control, able to initiate fights and stop dashes with his bouncing ball.",
    image: "images/khufra.jpg",
  },
  yin: {
    name: "Yin",
    role: "Fighter/Assassin",
    skills: "Charged Punch, My Turn, Domain of Flames",
    description: "Yin is a fighter/assassin who can pull a single enemy into a one-on-one domain for a duel.",
    image: "images/yin.jpg",
  },
  angela: {
    name: "Angela",
    role: "Support",
    skills: "Love Waves, Puppet-on-a-String, Heartguard",
    description: "Angela is a support hero who can attach to allies, shielding them and boosting their damage.",
    image: "images/angela.jpg",
  },
  mathilda: {
    name: "Mathilda",
    role: "Support/Assassin",
    skills: "Spiritual Seed, Guiding Wind, Circling Eagle",
    description: "Mathilda is a support/assassin who can provide dashes to allies and deal damage with her ultimate.",
    image: "images/mathilda.jpg",
  },
  silvanna: {
    name: "Silvanna",
    role: "Fighter/Mage",
    skills: "Cometic Lance, Spiral Strangling, Imperial Justice",
    description: "Silvanna is a fighter/mage who can pull enemies and trap a single target within a ring.",
    image: "images/silvanna.jpg",
  },
  faramis: {
    name: "Faramis",
    role: "Support/Mage",
    skills: "Soul Lock, Ghost Bursters, Cult Altar",
    description: "Faramis is a support/mage who can revive fallen allies with his ultimate, turning the tide of battle.",
    image: "images/faramis.jpg",
  },
  gusion: {
    name: "Gusion",
    role: "Assassin",
    skills: "Sword Spike, Shadowblade Slaughter, Incandescence",
    description: "Gusion is a high-speed assassin who bursts down enemies with quick blades and magical combos.",
    image: "images/gusion.jpg",
  },
  roger: {
    name: "Roger",
    role: "Fighter/Marksman",
    skills: "Full Moon Curse, Wolf Transformation, Hunter's Prowess",
    description: "Roger is a versatile hero who can switch between human (marksman) and wolf (fighter) forms.",
    image: "images/roger.jpg",
  },
  fredrinn: {
    name: "Fredrinn",
    role: "Fighter/Tank",
    skills: "Piercing Strike, Brave Assault, Energy Eruption",
    description: "Fredrinn is a fighter/tank who gains energy by dealing damage, which he uses to unleash powerful skills.",
    image: "images/fredrinn.jpg",
  },
  helcurt: {
    name: "Helcurt",
    role: "Assassin",
    skills: "Dark Night Falls, Shadow Transition, Deadly Stinger",
    description: "Helcurt thrives in darkness, silencing enemies and bursting them down quickly in stealth.",
    image: "images/helcurt.jpg",
  },
  alucard: {
    name: "Alucard",
    role: "Fighter",
    skills: "Groundsplitter, Whirling Smash, Fission Wave",
    description: "Alucard is a powerful lifesteal-based fighter who excels at diving into enemies and sustaining through combat.",
    image: "images/alucard.jpg",
  },
  floryn: {
    name: "Floryn",
    role: "Support",
    skills: "Sow, Sprout, Bloom",
    description: "Floryn is a global support who can heal allies anywhere on the map with her ultimate.",
    image: "images/floryn.jpg",
  },
  guinevere: {
    name: "Guinevere",
    role: "Fighter/Mage",
    skills: "Energy Wave, Spatial Migration, Violet Requiem",
    description: "Guinevere is a fighter/mage with strong crowd control and the ability to knock enemies airborne.",
    image: "images/guinevere.jpg",
  },
  lunox: {
    name: "Lunox",
    role: "Mage",
    skills: "Cosmic Fission, Starlight Pulse, Order and Chaos",
    description: "Lunox is a versatile mage with two forms, allowing her to deal burst damage or sustain.",
    image: "images/lunox.jpg",
  },
  claude: {
    name: "Claude",
    role: "Marksman",
    skills: "Art of Thievery, Battle Mirror Image, Blazing Duet",
    description: "Claude is a highly mobile marksman who can summon a doppelganger and deal massive burst damage with his ultimate.",
    image: "images/claude.jpg",
  },
  dyrroth: {
    name: "Dyrroth",
    role: "Fighter",
    skills: "Burst Strike, Spectre Step, Abysm Strike",
    description: "Dyrroth is a fighter who excels at shredding enemy defenses with his continuous damage and ultimate.",
    image: "images/dyrroth.jpg",
  },
  brody: {
    name: "Brody",
    role: "Marksman",
    skills: "Abyss Impact, Corrosive Strike, Torn-Apart Memory",
    description: "Brody is a marksman who deals heavy burst damage with delayed attacks, scaling well into the late game.",
    image: "images/brody.jpg",
  },
  valir: {
    name: "Valir",
    role: "Mage",
    skills: "Burst Fireball, Searing Torrent, Vengeance Flame",
    description: "Valir is a mage who excels at controlling the battlefield with fire and knocking back enemies.",
    image: "images/valir.jpg",
  },
  fanny: {
    name: "Fanny",
    role: "Assassin",
    skills: "Steel Cable, Cut Throat, Blade Dance",
    description: "Fanny is a high-skill ceiling assassin who uses cables to swing around the map and deal immense damage.",
    image: "images/fanny.jpg",
  },
  lou_yi: {
    name: "Lou Yi",
    role: "Mage/Support",
    skills: "Dispersion, Rotation, Diversion",
    description: "Lou Yi is a mage/support who can teleport allies and enemies, creating strategic advantages.",
    image: "images/louyi.jpg",
  },
  lancelot: {
    name: "Lancelot",
    role: "Assassin",
    skills: "Thorned Rose, Puncture, Phantom Execution",
    description: "Lancelot is a highly agile assassin known for his untargetable dashes and high burst damage.",
    image: "images/lancelot.jpg",
  },
  odette: {
    name: "Odette",
    role: "Mage",
    skills: "Avian Authority, Blue Nova, Swan Song",
    description: "Odette is a mage who can unleash a powerful area-of-effect ultimate while channeling a damaging circle.",
    image: "images/odette.jpg",
  },
  xavier: {
    name: "Xavier",
    role: "Mage",
    skills: "Infinite Extension, Mystic Field, Dawning Light",
    description: "Xavier is a long-range mage who can cast global ultimate attacks and control areas with mystic fields.",
    image: "images/xavier.jpg",
  },
  benedetta: {
    name: "Benedetta",
    role: "Assassin",
    skills: "Phantom Slash, An Eye For An Eye, Alecto: Final Blow",
    description: "Benedetta is a high-mobility assassin with an untargetable dash and powerful burst damage.",
    image: "images/benedetta.jpg",
  },
  kimmy: {
    name: "Kimmy",
    role: "Marksman/Mage",
    skills: "Energy Transformation, Chemical Refinement, Maximum Charge",
    description: "Kimmy is a unique marksman/mage who attacks while moving and excels at sustained damage.",
    image: "images/kimmy.jpg",
  },
  };

  const params = new URLSearchParams(window.location.search);
  const heroName = params.get("hero");

  if (heroName && heroData[heroName]) {
    const hero = heroData[heroName];
    const container = document.getElementById("hero-detail");
    if (container) {
      container.innerHTML = `
      <img src="${hero.image}" alt="${hero.name}" style="max-width: 300px;" />
      <h2>${hero.name}</h2>
      <p><strong>Role:</strong> ${hero.role}</p>
      <p><strong>Skills:</strong> ${hero.skills}</p>
      <p><strong>Description:</strong> ${hero.description}</p>
    `;
    }
  }
});
