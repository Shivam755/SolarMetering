const outGoingEtherCalc = (state,consumed) => {
    let amount = 0;
    let outConsumed = consumed[1];

    if(state === 'Delhi'){
        amount = outConsumed * 2;
        return [outConsumed, amount/100, amount/14922747];
    }
    if(state === 'Andhra Pradesh'){
        amount = outConsumed * 450;
        return [outConsumed, amount/100, amount/14922747];
    }
    if(state === 'Maharashtra'){
        amount = outConsumed * 350;
        return [outConsumed, amount/100, amount/14922747];
    }
    if(state === 'Uttar Pradesh'){
        amount = outConsumed * 304;
        return [outConsumed, amount/100, amount/14922747];
    }
    if(state === 'Karnataka'){
        amount = outConsumed * 382;
        return [outConsumed, amount/100, amount/14922747];
    }
}

export default outGoingEtherCalc;
