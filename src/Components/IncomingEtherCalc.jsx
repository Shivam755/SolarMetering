const IncomingEtherCalc = (state, consumed) => {
    let amount = 0;
    let inConsumed = consumed['0'];
    if(state === 'Delhi'){
     //for first range
     if (inConsumed < 200 )
     {
         amount += inConsumed * 300;
         return [inConsumed, amount/100, amount/14922747];
     }
     inConsumed = inConsumed - 200;
     amount += 200 * 300;
     
     //for second range
     if (inConsumed < 200 )
     {
         amount += inConsumed * 450;
         return [inConsumed, amount/100, amount/14922747];
     }
     inConsumed = inConsumed - 200;
     amount += 200 * 450;
     
     //for third range
     if (inConsumed < 400 )
     {
         amount += inConsumed * 650;
         return [inConsumed, amount/100, amount/14922747];
     }
     inConsumed = inConsumed - 400;
     amount += 400 * 650;
     
     //for fourth range
     if (inConsumed < 400 )
     {
         amount += inConsumed * 700;
         return [inConsumed, amount/100, amount/14922747];
     }
     inConsumed = inConsumed - 400;
     amount += 400 * 700;
     
     //for fifth range
     amount += inConsumed * 800;
     inConsumed = 0;
     
     return [inConsumed, amount/100, amount/14922747];
   }
 else if(state === 'Andhra Pradesh'){
     //for first range
     if (inConsumed < 200 )
     {
         amount += inConsumed * 375;
         return [inConsumed, amount/100, amount/14922747];
     }
     inConsumed = inConsumed - 200;
     amount += 200 * 375;
     
     //for second range
     if (inConsumed < 200 )
     {
         amount += inConsumed * 688;
         return [inConsumed, amount/100, amount/14922747];
     }
     inConsumed = inConsumed - 200;
     amount += 200 * 688;
     
     //for third range
     if (inConsumed < 400 )
     {
         amount += inConsumed * 813;
         return [inConsumed, amount/100, amount/14922747];
     }
     inConsumed = inConsumed - 400;
     amount += 400 * 813;
     
     //for fourth range
     if (inConsumed < 400 )
     {
         amount += inConsumed * 838;
         return [inConsumed, amount/100, amount/14922747];
     }
     inConsumed = inConsumed - 400;
     amount += 400 * 838;
     
     //for fifth range
     amount += inConsumed * 838;
     inConsumed = 0;
     
     return [inConsumed, amount/100, amount/14922747];
   }
 else if(state === 'Maharashtra'){
     //for first range
     if (inConsumed < 200 )
     {
         amount += inConsumed * 446;
         return [inConsumed, amount/100, amount/14922747];
     }
     inConsumed = inConsumed - 200;
     amount += 200 * 446;
     
     //for second range
     if (inConsumed < 200 )
     {
         amount += inConsumed * 576;
         return [inConsumed, amount/100, amount/14922747];
     }
     inConsumed = inConsumed - 200;
     amount += 200 * 576;
     
     //for third range
     if (inConsumed < 400 )
     {
         amount += inConsumed * 791;
         return [inConsumed, amount/100, amount/14922747];
     }
     inConsumed = inConsumed - 400;
     amount += 400 * 791;
     
     //for fourth range
     if (inConsumed < 400 )
     {
         amount += inConsumed * 876;
         return [inConsumed, amount/100, amount/14922747];
     }
     inConsumed = inConsumed - 400;
     amount += 400 * 876;
     
     //for fifth range
     amount += inConsumed * 876;
     inConsumed = 0;
     
     return [inConsumed, amount/100, amount/14922747];
     
   }  
 else if(state === 'Uttar Pradesh'){
     //for first range
     if (inConsumed < 200 )
     {
         amount += inConsumed * 390;
         return [inConsumed, amount/100, amount/14922747];
     }
     inConsumed = inConsumed - 200;
     amount += 200 * 390;
     
     //for second range
     if (inConsumed < 200 )
     {
         amount += inConsumed * 580;
         return [inConsumed, amount/100, amount/14922747];
     }
     inConsumed = inConsumed - 200;
     amount += 200 * 580;
     
     //for third range
     if (inConsumed < 400 )
     {
         amount += inConsumed * 680;
         return [inConsumed, amount/100, amount/14922747];
     }
     inConsumed = inConsumed - 400;
     amount += 400 * 680;
     
     //for fourth range
     if (inConsumed < 400 )
     {
         amount += inConsumed * 700;
         return [inConsumed, amount/100, amount/14922747];
     }
     inConsumed = inConsumed - 400;
     amount += 400 * 700;
     
     //for fifth range
     amount += inConsumed * 700;
     inConsumed = 0;
     
     return [inConsumed, amount/100, amount/14922747];
     
   }
   else if(state === 'Karnataka'){
     //for first range
     if (inConsumed < 200 )
     {
         amount += inConsumed * 638;
         return [inConsumed, amount/100, amount/14922747];
     }
     inConsumed = inConsumed - 200;
     amount += 200 * 638;
     
     //for second range
     if (inConsumed < 200 )
     {
         amount += inConsumed * 537;
         return [inConsumed, amount/100, amount/14922747];
     }
     inConsumed = inConsumed - 200;
     amount += 200 * 537;
     
     //for third range
     if (inConsumed < 400 )
     {
         amount += inConsumed * 544;
         return [inConsumed, amount/100, amount/14922747];
     }
     inConsumed = inConsumed - 400;
     amount += 400 * 544;
     
     //for fourth range
     if (inConsumed < 400 )
     {
         amount += inConsumed * 520;
         return [inConsumed, amount/100, amount/14922747];
     }
     inConsumed = inConsumed - 400;
     amount += 400 * 520;
     
     //for fifth range
     amount += inConsumed * 520;
     inConsumed = 0;
     
     return [inConsumed, amount/100, amount/14922747];
     
   }
}

export default IncomingEtherCalc;
