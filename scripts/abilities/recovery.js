export function abilitySetupRecoveryv2(base) {
    base.casting = game.symbaroum.config.CASTING;
    base.castingAttributeName = "resolute";
    base.healedToken = game.symbaroum.config.ACTING_TOKEN;

    if(base.powerLvl.level == 2) {base.healFormulaSucceed = "2d8"}
    else if(base.powerLvl.level == 3) {base.healFormulaSucceed = "2d8"}
    else {base.healFormulaSucceed = "2d6"};
    return(base);
}