export function mysticPowerSetupPriosburningglassv2(base) {
    base.casting = game.symbaroum.config.CASTING;
    base.getTarget= true;
    base.targetMandatory= true;
    base.maintain = game.symbaroum.config.MAINTAIN;
    base.traditions = [game.symbaroum.config.TRAD_THEURGY];
    base.introText= game.i18n.localize('POWER_PRIOSBURNINGGLASS.CHAT_INTRO');
    base.hasDamage= true;
    base.askCorruptedTarget = true;
    if(base.powerLvl.level === 1) {
        base.damageDice = "2d4";
        base.targetFullyCorruptedFSmod = {
            damageDice: "2d6"
        };
    }
    else{
        base.damageDice = "2d6";
        base.targetFullyCorruptedFSmod = {
            damageDice: "2d8"
        };
    }
    base.damageType = {
        holy: true,
        mysticArm: true
    }
    if(base.powerLvl.level === 3) {
        base.targetFullyCorruptedFSmod.finalTextSucceed = game.i18n.localize('POWER_PRIOSBURNINGGLASS.CHAT_EXTRA')
    }
    return(base);
}