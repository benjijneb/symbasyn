import { getItemModifierBerserkerv2, abilitySetupBerserkerv2 } from './abilities/berserk.js';
import { abilitySetupRecoveryv2 } from './abilities/recovery.js';
import { mysticPowerSetupPriosburningglassv2 } from './abilities/priosburningglass.js';
Hooks.once('init', async function() {    
    // Add (or replace) prototype functions for integration in to the system
    CONFIG.Item.documentClass.prototype.getItemModifierBerserkerv2 = getItemModifierBerserkerv2;
    CONFIG.Item.documentClass.prototype.abilitySetupBerserkerv2 = abilitySetupBerserkerv2;
    CONFIG.Item.documentClass.prototype.abilitySetupRecoveryv2 = abilitySetupRecoveryv2;
    CONFIG.Item.documentClass.prototype.mysticPowerSetupPriosburningglassv2 = mysticPowerSetupPriosburningglassv2;

    game.symbaroum.config.scriptedAbilities.push("berserkerv2");
    game.symbaroum.config.scriptedAbilities.push("recoveryv2");
    game.symbaroum.config.scriptedAbilities.push("priosburningglassv2");
});


Hooks.once('ready', async function() {
    //
    game.symbaroum.log("Module ready hook");
});