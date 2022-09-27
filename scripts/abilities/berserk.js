export function getItemModifierBerserkerv2(combatMods, armors, weapons, abilities) {
    let lvl = this.getLevel();
    if(lvl.level == 0) return;
    if(!this.actor.getFlag(game.system.id, 'berserkerv2')) {
        return;
    }

    for(let i = 0; i < armors.length; i++)
    {
        if(armors[i].data.isStackableArmor)
        {
            continue;
        }
        if(lvl.level < 3) {
            combatMods.armors[armors[i].id].specialEffects.push(game.symbaroum.config.SPECIAL_MIN_DEFENSE);
        }
    }
    for(let i = 0; i < weapons.length; i++)
    {
        if(weapons[i].data.data.alternativeDamage !== "none" || !weapons[i].data.data.isMelee) {
            continue;
        }
        let base = this._getBaseFormat();
        base.type = game.symbaroum.config.DAM_MOD;
        base.value = "+1d6";
        base.alternatives = [{
            damageMod: "+1d6",
            damageModNPC: 3,
        }];
        combatMods.weapons[weapons[i].id].package[0].member.push(base);
    }
}

export function abilitySetupBerserkerv2(base) {
    base.casting = game.symbaroum.config.CASTING_NOT;
    base.gmOnlyChatResultNPC = true;
    base.flagTest = "berserkerv2";
    base.flagPresentFSmod = {
        introText: game.i18n.localize('ABILITY_BERSERKER.CHAT_DESACTIVATE'),
        resultTextSuccess: game.i18n.localize('ABILITY_BERSERKER.CHAT_RESULT_DESACTIVATE'),
        removeCasterEffect: [CONFIG.statusEffects.find(e => e.id === "berserker")]
    };
    base.flagNotPresentFSmod = {
        flagData: base.powerLvl.level,
        introText: game.i18n.localize('ABILITY_BERSERKER.CHAT_ACTIVATE'),
        addCasterEffect: [CONFIG.statusEffects.find(e => e.id === "berserker")]
    }
    if(base.powerLvl.level == 2) base.flagNotPresentFSmod.resultTextSuccess = game.i18n.localize('ABILITY_BERSERKER.CHAT_RESULT_LVL2');
    else if(base.powerLvl.level > 2) base.flagNotPresentFSmod.resultTextSuccess = game.i18n.localize('ABILITY_BERSERKER.CHAT_RESULT_LVL3');
    else base.flagNotPresentFSmod.resultTextSuccess = game.i18n.localize('ABILITY_BERSERKER.CHAT_RESULT_LVL1');
    return(base);
}