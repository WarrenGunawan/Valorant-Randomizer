export const ABILITIES = {
    jett: [
        { name: 'Cloudburst', slot: 'c', cost: 100, maxCharges: 2, image: '/images/abilities/jett/cloudburst.webp' },
        { name: 'Updraft', slot: 'q', cost: 150, maxCharges: 2, image: '/images/abilities/jett/updraft.webp' },
        { name: 'Tailwind', slot: 'e', cost: 0, startCharges: 1,  maxCharges: 1, image: '/images/abilities/jett/tailwind.webp' }
    ],
    reyna: [
        { name: 'Leer', slot: 'c', cost: 250, maxCharges: 2, image: '/images/abilities/reyna/leer.webp' },
        { name: 'Devour', slot: 'q', cost: 200, startCharges: 1, maxCharges: 2, image: '/images/abilities/reyna/devour.webp' },
        { name: 'Dismiss', slot: 'e', cost: 200, startCharges: 1, maxCharges: 2, image: '/images/abilities/reyna/dismiss.webp' }
    ],
    phoenix: [
        { name: 'Blaze', slot: 'c', cost: 150, maxCharges: 1, image: '/images/abilities/phoenix/blaze.webp' },
        { name: 'Hot Hands', slot: 'q', cost: 200, maxCharges: 1, image: '/images/abilities/phoenix/hothands.webp' },
        { name: 'Curveball', slot: 'e', cost: 250, startCharges: 1, maxCharges: 2, image: '/images/abilities/phoenix/curveball.webp' }
    ],
    raze: [
        { name: 'Boom Bot', slot: 'c', cost: 300, maxCharges: 1, image: '/images/abilities/raze/boombot.webp' },
        { name: 'Blast Pack', slot: 'q', cost: 200, maxCharges: 2, image: '/images/abilities/raze/blastpack.webp' },
        { name: 'Paint Shells', slot: 'e', cost: 0, startCharges: 1, maxCharges: 1, image: '/images/abilities/raze/paintshells.webp' }
    ],
    neon: [
        { name: 'Fast Lane', slot: 'c', cost: 300, maxCharges: 1, image: '/images/abilities/neon/fastlane.webp' },
        { name: 'Relay Bolt', slot: 'q', cost: 200, maxCharges: 1, image: '/images/abilities/neon/relaybolt.webp' },
        { name: 'High gear', slot: 'e', cost: 0, startCharges: 1, maxCharges: 1, image: '/images/abilities/neon/highgear.webp' }
    ],
    yoru: [
        { name: 'Fakeout', slot: 'c', cost: 200, maxCharges: 1, image: '/images/abilities/yoru/fakeout.webp' },
        { name: 'Blindside', slot: 'q', cost: 250, maxCharges: 1, image: '/images/abilities/yoru/blindside.webp' },
        { name: 'Gatecrach', slot: 'e', cost: 150, startCharges: 1, maxCharges: 2, image: '/images/abilities/yoru/gatecrash.webp' }
    ],
    waylay: [
        { name: 'Saturate', slot: 'c', cost: 300, maxCharges: 1, image: '/images/abilities/waylay/saturate.webp' },
        { name: 'Lightspeed', slot: 'q', cost: 300, maxCharges: 1, image: '/images/abilities/waylay/lightspeed.webp' },
        { name: 'Refract', slot: 'e', cost: 0, startCharges: 1, maxCharges: 1, image: '/images/abilities/waylay/refract.webp' }
    ],
    iso: [
        { name: 'Contingency', slot: 'c', cost: 200, maxCharges: 1, image: '/images/abilities/iso/contingency.webp' },
        { name: 'Undercut', slot: 'q', cost: 300, maxCharges: 1, image: '/images/abilities/iso/undercut.webp' },
        { name: 'Double Tap', slot: 'e', cost: 0, startCharges: 1,  maxCharges: 1, image: '/images/abilities/iso/doubletap.webp' }
    ],
    


    skye: [
        { name: 'Regrowth', slot: 'c', cost: 150, maxCharges: 1, image: '/images/abilities/skye/regrowth.webp' },
        { name: 'Trailblazer', slot: 'q', cost: 300, maxCharges: 1, image: '/images/abilities/skye/trailblazer.webp' },
        { name: 'Guiding Light', slot: 'e', cost: 250, startCharges: 1,  maxCharges: 2, image: '/images/abilities/skye/guidinglight.webp' }
    ],
    kayo: [
        { name: 'FRAG/ment', slot: 'c', cost: 200, maxCharges: 1, image: '/images/abilities/kayo/fragment.webp' },
        { name: 'FLASH/drive', slot: 'q', cost: 250, maxCharges: 2, image: '/images/abilities/kayo/flashdrive.webp' },
        { name: 'ZERO/point', slot: 'e', cost: 0, startCharges: 1,  maxCharges: 1, image: '/images/abilities/kayo/zeropoint.webp' }
    ],
    sova: [
        { name: 'Owl Drone', slot: 'c', cost: 400, maxCharges: 1, image: '/images/abilities/sova/owldrone.webp' },
        { name: 'Shock Bolt', slot: 'q', cost: 150, maxCharges: 2, image: '/images/abilities/sova/shockbolt.webp' },
        { name: 'Recon Bolt', slot: 'e', cost: 0, startCharges: 1,  maxCharges:  1, image: '/images/abilities/sova/reconbolt.webp' }
    ],
    fade: [
        { name: 'Prowler', slot: 'c', cost: 250, maxCharges: 2, image: '/images/abilities/fade/prowler.webp' },
        { name: 'Seize', slot: 'q', cost: 200, maxCharges: 1, image: '/images/abilities/fade/seize.webp' },
        { name: 'Haunt', slot: 'e', cost: 0, startCharges: 1,  maxCharges: 1, image: '/images/abilities/fade/haunt.webp' }
    ],
    gekko: [
        { name: 'Mosh Pit', slot: 'c', cost: 250, maxCharges: 1, image: '/images/abilities/gekko/moshpit.webp' },
        { name: 'Wingman', slot: 'q', cost: 300, maxCharges: 1, image: '/images/abilities/gekko/wingman.webp' },
        { name: 'Dizzy', slot: 'e', cost: 0, startCharges: 1,  maxCharges: 1, image: '/images/abilities/gekko/dizzy.webp' }
    ],
    breach: [
        { name: 'Aftershock', slot: 'c', cost: 200, maxCharges: 1, image: '/images/abilities/breach/aftershock.webp' },
        { name: 'Flashpoint', slot: 'q', cost: 250, maxCharges: 2, image: '/images/abilities/breach/flashpoint.webp' },
        { name: 'Fault Line', slot: 'e', cost: 0, startCharges: 1,  maxCharges: 1, image: '/images/abilities/breach/faultline.webp' }
    ],
    tejo: [
        { name: 'Stealth Drone', slot: 'c', cost: 400, maxCharges: 1, image: '/images/abilities/tejo/stealthdrone.webp' },
        { name: 'Special Delivery', slot: 'q', cost: 200, maxCharges: 1, image: '/images/abilities/tejo/specialdelivery.webp'},
        { name: 'Guided Salvo', slot: 'e', cost: 150, startCharges: 1,  maxCharges: 2, image: '/images/abilities/tejo/guidedsalvo.webp' }
    ],



    omen: [
        { name: 'Shrouded Step', slot: 'c', cost: 100, maxCharges: 2, image: '/images/abilities/omen/shroudedstep.webp' },
        { name: 'Paranoia', slot: 'q', cost: 250, maxCharges: 1, image: '/images/abilities/omen/paranoia.webp' },
        { name: 'Dark Cover', slot: 'e', cost: 150, startCharges: 1,  maxCharges: 2, image: '/images/abilities/omen/darkcover.webp' }
    ],
    astra: [
        { name: 'Gravity Well', slot: 'c', cost: 0, maxCharges: 1, image: '/images/abilities/astra/gravitywell.webp' },
        { name: 'Nova Pulse', slot: 'q', cost: 0, maxCharges: 1, image: '/images/abilities/astra/novapulse.webp' },
        { name: 'Nebula', slot: 'e', cost: 0, maxCharges: 2, image: '/images/abilities/astra/nebula.webp' },
        { name: 'Astral Stars', slot: 'x', cost: 150, startCharges: 1, maxCharges: 5, image: '/images/abilities/astra/stars.webp' }
    ],
    brimstone: [
        { name: 'Stim Beacon', slot: 'c', cost: 200, maxCharges: 1, image: '/images/abilities/brimstone/stimbeacon.webp' },
        { name: 'Incendiary', slot: 'q', cost: 250, maxCharges: 1, image: '/images/abilities/brimstone/incendiary.webp' },
        { name: 'Sky Smoke', slot: 'e', cost: 100, startCharges: 1,  maxCharges: 3, image: '/images/abilities/brimstone/skysmoke.webp' }
    ],
    clove: [
        { name: 'Pick-Me-Up', slot: 'c', cost: 200, maxCharges: 1, image: '/images/abilities/clove/pickmeup.webp' },
        { name: 'Meddle', slot: 'q', cost: 250, maxCharges: 1, image: '/images/abilities/clove/meddle.webp' },
        { name: 'Ruse', slot: 'e', cost: 150, startCharges: 1,  maxCharges: 2, image: '/images/abilities/clove/ruse.webp' }
    ],
    harbor: [
        { name: 'Storm Surge', slot: 'c', cost: 200, maxCharges: 1, image: '/images/abilities/harbor/stormsurge.webp' },
        { name: 'High Tide', slot: 'q', cost: 300, maxCharges: 1, image: '/images/abilities/harbor/hightide.webp' },
        { name: 'Cove', slot: 'e', cost: 0, startCharges: 1,  maxCharges: 1, image: '/images/abilities/harbor/cove.webp' }
    ],
    viper: [
        { name: 'Snake Bite', slot: 'c', cost: 300, maxCharges: 1, image: '/images/abilities/viper/snakebite.webp' },
        { name: 'Poison Cloud', slot: 'q', cost: 200, maxCharges: 1, image: '/images/abilities/viper/poisoncloud.webp' },
        { name: 'Toxic Screen', slot: 'e', cost: 0, startCharges: 1,  maxCharges: 1, image: '/images/abilities/viper/toxicscreen.webp' }
    ],
    miks: [
        { name: 'M-Pulse', slot: 'c', cost: 250, maxCharges: 2, image: '/images/abilities/miks/mpulse.webp' },
        { name: 'Harmonize', slot: 'q', cost: 200, maxCharges: 1, image: '/images/abilities/miks/harmonize.webp' },
        { name: 'Waveform', slot: 'e', cost: 100, startCharges: 1,  maxCharges: 2, image: '/images/abilities/miks/waveform.webp' }
    ],



    cypher: [
        { name: 'Trapwire', slot: 'c', cost: 200, maxCharges: 2, image: '/images/abilities/cypher/trapwire.webp' },
        { name: 'Cyber Cage', slot: 'q', cost: 100, maxCharges: 2, image: '/images/abilities/cypher/cybercage.webp' },
        { name: 'Spycam', slot: 'e', cost: 0, startCharges: 1,  maxCharges: 1, image: '/images/abilities/cypher/spycam.webp' }
    ],
    killjoy: [
        { name: 'Nanoswarm', slot: 'c', cost: 200, maxCharges: 2, image: '/images/abilities/killjoy/nanoswarm.webp' },
        { name: 'Alarmbot', slot: 'q', cost: 200, maxCharges: 1, image: '/images/abilities/killjoy/alarmbot.webp' },
        { name: 'Turret', slot: 'e', cost: 0, startCharges: 1,  maxCharges: 1, image: '/images/abilities/killjoy/turret.webp' }
    ],
    sage: [
        { name: 'Barrier Orb', slot: 'c', cost: 300, maxCharges: 1, image: '/images/abilities/sage/barrierorb.webp' },
        { name: 'Slow Orb', slot: 'q', cost: 200, maxCharges: 2, image: '/images/abilities/sage/sloworb.webp' },
        { name: 'Healing Orb', slot: 'e', cost: 0, startCharges: 1,  maxCharges: 1, image: '/images/abilities/sage/healingorb.webp' }
    ],
    chamber: [
        { name: 'Trademark', slot: 'c', cost: 200, maxCharges: 1, image: '/images/abilities/chamber/trademark.webp' },
        { name: 'Headhunter', slot: 'q', cost: 100, maxCharges: 8, image: '/images/abilities/chamber/headhunter.webp' },
        { name: 'Rendezvous', slot: 'e', cost: 0, startCharges: 1,  maxCharges: 1, image: '/images/abilities/chamber/rendezvous.webp' }
    ],
    deadlock: [
        { name: 'Barrier Mesh', slot: 'c', cost: 300, maxCharges: 1, image: '/images/abilities/deadlock/barriermesh.webp' },
        { name: 'Sonic Sencor', slot: 'q', cost: 200, maxCharges: 2, image: '/images/abilities/deadlock/sonicsensor.webp' },
        { name: 'Gravnet', slot: 'e', cost: 0, startCharges: 1,  maxCharges: 1, image: '/images/abilities/deadlock/gravnet.webp' }
    ],
    vyse: [
        { name: 'Razorvine', slot: 'c', cost: 150, maxCharges: 2, image: '/images/abilities/vyse/razorvine.webp' },
        { name: 'Shear', slot: 'q', cost: 200, maxCharges: 1, image: '/images/abilities/vyse/shear.webp' },
        { name: 'Arc Rose', slot: 'e', cost: 0, startCharges: 1,  maxCharges: 1, image: '/images/abilities/vyse/arcrose.webp' }
    ],
    veto: [
        { name: 'Crosscut', slot: 'c', cost: 200, maxCharges: 2, image: '/images/abilities/veto/crosscut.webp' },
        { name: 'Chokehold', slot: 'q', cost: 200, maxCharges: 1, image: '/images/abilities/veto/chokehold.webp' },
        { name: 'Interceptor', slot: 'e', cost: 0, startCharges: 1,  maxCharges: 1, image: '/images/abilities/veto/interceptor.webp' }
    ]
}