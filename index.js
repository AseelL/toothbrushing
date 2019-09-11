let teeth = [123,12,45,60,123,12,45,60,123,12,45,60,123,12,45,60,123,12,45,60,123,12,45,60,123,12,45,60,123,12,45,60];
let brush={
    condition:5
};
newTeeth = teeth;




for(i=0;i<numberOfTimes;i++)
// here we need to do an iteration from a random tooth 
//   an iteration for the sake of simplicity is hiting one end of teeth
// so its either the index 0 or the index teeth.length-1
// just think . u have the teeth . how can u go front to end and back from there .
// a hint is using %

 


 toothPaste(brush,toothPasteEffeciency)=> (brush.condition*toothPasteEffeciency) 

brushtooth(tooth,toothpaste)=>tooth-(tooth*tooth_paste)
teeth.forEach(tooth=>brushtooth(tooth,toothpaste))
numberOfTimes = isBackAndForthOrTopDown? iterations/2 : iterations;

//iteration thingy left
toothBrushing(teeth,brush,toothPasteEffeciency,iterations)=>{
    toothPaste(tooth,brush,toothPasteEffeciency)=> {tooth-((brush.condition*toothPasteEffeciency) * tooth)}
    let randomTooth = Math.random(teeth.length-1)*10;
    if (teeth.length%randomTooth==0){
    randomTooth--;
    for(var i=randomTooth;i>0;i--){
    toothPaste(teeth[i],brush,toothPasteEffeciency);
    }
    }else if((teeth.length/2)/randomTooth>1){
    for(var i=randomTooth;i<teeth.length+1;i++){
    toothPaste(teeth[i],brush,toothPasteEffeciency);
    }
    }else if((teeth.length/2)/randomTooth<1){
        for(var i=randomTooth;i>0;i--){
            toothPaste(teeth[i],brush,toothPasteEffeciency);
            }
    }
    
    }