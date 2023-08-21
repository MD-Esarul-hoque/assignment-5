function priceCountClick(){
    const itemTaka =getInputValue('itemTaka');
    
    const previousTaka =getInputValue('previousTaka');
    
    const totalTaka = previousTaka+itemTaka;
    const discount=(totalTaka*(20/100));
    const disabled=discount.toFixed(2);
    let sum = totalTaka-disabled;
    document.getElementById('input').addEventListener('click',function(event){
        const text =event.target.value;
        const applyButton=document.getElementById('applyButton');
        if(totalTaka>=200 && text=='SELL200' ){
            applyButton.removeAttribute('disabled');
            setElementArea('discount',disabled);
           if(true){
            applyButton.setAttribute('disabled',true);
            setElementArea('total',sum);
            document.getElementById('goHome').addEventListener('click',function(){
                const itemList=document.getElementById('itemList');
                itemList.innerText='';
                const inputId=document.getElementById('input');
                inputId.value='';
                const previous='00.00';
                setElementArea('previousTaka',previous);
                setElementArea('total',previous);
                setElementArea('discount',previous);
                
        
            })
           }
            
    
        }
        else{
            setElementArea('total',totalTaka);
        }
        
    })
    
    setElementArea('total',totalTaka);
    setElementArea('previousTaka',totalTaka);
    
    const text =totalTaka;
    const deleteButton=document.getElementById('makePurchase');
    
    if(text>0){
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled',true);
    }
    
    
    addToCalculate("K. Accessories");
    document.getElementById('goHome').addEventListener('click',function(){
        const itemList=document.getElementById('itemList');
        itemList.innerText='';
        const previous='00.00';
        setElementArea('previousTaka',previous);
        setElementArea('total',previous);
        
        

    })
    
}

function priceCountClick1(){
    const itemTaka1 =getInputValue('itemTaka1');
    
    const previousTaka =getInputValue('previousTaka');
    const totalTaka = previousTaka+itemTaka1;
    const discount=(totalTaka*(20/100));
    const disabled=discount.toFixed(2);
    let sum = totalTaka-disabled;
    document.getElementById('input').addEventListener('click',function(event){
        const text =event.target.value;
        const applyButton=document.getElementById('applyButton');
        if(totalTaka>=200 && text=='SELL200' ){
            applyButton.removeAttribute('disabled');
            setElementArea('discount',disabled);
            document.getElementById('goHome').addEventListener('click',function(){
                const itemList=document.getElementById('itemList');
                itemList.innerText='';
                const inputId=document.getElementById('input');
                inputId.value='';
                const previous='00.00';
                setElementArea('previousTaka',previous);
                setElementArea('total',previous);
                setElementArea('discount',previous);
                
        
            })
           if(true){
            applyButton.setAttribute('disabled',true);
            setElementArea('total',sum);
           }
            
    
        }
        else{
            setElementArea('total',totalTaka);
        }
        
    })
    setElementArea('total',totalTaka);
    setElementArea('previousTaka',totalTaka);
    const text =totalTaka;
    const deleteButton=document.getElementById('makePurchase');
    if(text>0){
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled',true);
    }
    addToCalculate("K. Accessories");
    document.getElementById('goHome').addEventListener('click',function(){
        const itemList=document.getElementById('itemList');
        itemList.innerText='';
        const previous='00.00';
        setElementArea('previousTaka',previous);
        setElementArea('total',previous);
        
        

    })
}
function priceCountClick2(){
    const itemTaka2 =getInputValue('itemTaka2');
    
    const previousTaka =getInputValue('previousTaka');
    const totalTaka = previousTaka+itemTaka2;
    const discount=(totalTaka*(20/100));
    const disabled=discount.toFixed(2);
    let sum = totalTaka-disabled;
    document.getElementById('input').addEventListener('click',function(event){
        const text =event.target.value;
        const applyButton=document.getElementById('applyButton');
        if(totalTaka>=200 && text=='SELL200' ){
            applyButton.removeAttribute('disabled');
            setElementArea('discount',disabled);
            document.getElementById('goHome').addEventListener('click',function(){
                const itemList=document.getElementById('itemList');
                itemList.innerText='';
                const inputId=document.getElementById('input');
                inputId.value='';
                const previous='00.00';
                setElementArea('previousTaka',previous);
                setElementArea('total',previous);
                setElementArea('discount',previous);
                
        
            })
           if(true){
            applyButton.setAttribute('disabled',true);
            setElementArea('total',sum);
           }
            
    
        }
        else{
            setElementArea('total',totalTaka);
        }
        
    })
    setElementArea('total',totalTaka);
    setElementArea('previousTaka',totalTaka);
    const text =totalTaka;
    const deleteButton=document.getElementById('makePurchase');
    if(text>0){
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled',true);
    }
    addToCalculate("Home Cooker");
    document.getElementById('goHome').addEventListener('click',function(){
        const itemList=document.getElementById('itemList');
        itemList.innerText='';
        const previous='00.00';
        setElementArea('previousTaka',previous);
        setElementArea('total',previous);
        
        

    })
}
function priceCountClick3(){
    const itemTaka3 =getInputValue('itemTaka3');
    
    const previousTaka =getInputValue('previousTaka');
    const totalTaka = previousTaka+itemTaka3;
    const discount=(totalTaka*(20/100));
    const disabled=discount.toFixed(2);
    let sum = totalTaka-disabled;
    document.getElementById('input').addEventListener('click',function(event){
        const text =event.target.value;
        const applyButton=document.getElementById('applyButton');
        if(totalTaka>=200 && text=='SELL200' ){
            applyButton.removeAttribute('disabled');
            setElementArea('discount',disabled);
            document.getElementById('goHome').addEventListener('click',function(){
                const itemList=document.getElementById('itemList');
                itemList.innerText='';
                const inputId=document.getElementById('input');
                inputId.value='';
                const previous='00.00';
                setElementArea('previousTaka',previous);
                setElementArea('total',previous);
                setElementArea('discount',previous);
                
        
            })
           if(true){
            applyButton.setAttribute('disabled',true);
            setElementArea('total',sum);
           }
            
    
        }
        else{
            setElementArea('total',totalTaka);
        }
        
    })
    setElementArea('total',totalTaka);
    setElementArea('previousTaka',totalTaka);
    const text =totalTaka;
    const deleteButton=document.getElementById('makePurchase');
    if(text>0){
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled',true);
    }
    addToCalculate("Sports Back Cap");
    document.getElementById('goHome').addEventListener('click',function(){
        const itemList=document.getElementById('itemList');
        itemList.innerText='';
        const previous='00.00';
        setElementArea('previousTaka',previous);
        setElementArea('total',previous);
        
        

    })
}
function priceCountClick4(){
    const itemTaka4 =getInputValue('itemTaka4');
    
    const previousTaka =getInputValue('previousTaka');
    const totalTaka = previousTaka+itemTaka4;
    const discount=(totalTaka*(20/100));
    const disabled=discount.toFixed(2);
    let sum = totalTaka-disabled;
    document.getElementById('input').addEventListener('click',function(event){
        const text =event.target.value;
        const applyButton=document.getElementById('applyButton');
        if(totalTaka>=200 && text=='SELL200' ){
            applyButton.removeAttribute('disabled');
            setElementArea('discount',disabled);
            document.getElementById('goHome').addEventListener('click',function(){
                const itemList=document.getElementById('itemList');
                itemList.innerText='';
                const inputId=document.getElementById('input');
                inputId.value='';
                const previous='00.00';
                setElementArea('previousTaka',previous);
                setElementArea('total',previous);
                setElementArea('discount',previous);
                
        
            })
           if(true){
            applyButton.setAttribute('disabled',true);
            setElementArea('total',sum);
           }
            
    
        }
        else{
            setElementArea('total',totalTaka);
        }
        
    })
    setElementArea('total',totalTaka);
    setElementArea('previousTaka',totalTaka);
    const text =totalTaka;
    const deleteButton=document.getElementById('makePurchase');
    if(text>0){
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled',true);
    }
    addToCalculate("Full Jersey Set");
    document.getElementById('goHome').addEventListener('click',function(){
        const itemList=document.getElementById('itemList');
        itemList.innerText='';
        const previous='00.00';
        setElementArea('previousTaka',previous);
        setElementArea('total',previous);
        
        

    })
}
function priceCountClick5(){
    const itemTaka5 =getInputValue('itemTaka5');
    
    const previousTaka =getInputValue('previousTaka');
    const totalTaka = previousTaka+itemTaka5;
    const discount=(totalTaka*(20/100));
    const disabled=discount.toFixed(2);
    let sum = totalTaka-disabled;
    document.getElementById('input').addEventListener('click',function(event){
        const text =event.target.value;
        const applyButton=document.getElementById('applyButton');
        if(totalTaka>=200 && text=='SELL200' ){
            applyButton.removeAttribute('disabled');
            setElementArea('discount',disabled);
            document.getElementById('goHome').addEventListener('click',function(){
                const itemList=document.getElementById('itemList');
                itemList.innerText='';
                const inputId=document.getElementById('input');
                inputId.value='';
                const previous='00.00';
                setElementArea('previousTaka',previous);
                setElementArea('total',previous);
                setElementArea('discount',previous);
                
        
            })
           if(true){
            applyButton.setAttribute('disabled',true);
            setElementArea('total',sum);
           }
            
    
        }
        else{
            setElementArea('total',totalTaka);
        }
        
    })
    setElementArea('total',totalTaka);
    setElementArea('previousTaka',totalTaka);
    const text =totalTaka;
    const deleteButton=document.getElementById('makePurchase');
    if(text>0){
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled',true);
    }
    addToCalculate("Sports cates");
    document.getElementById('goHome').addEventListener('click',function(){
        const itemList=document.getElementById('itemList');
        itemList.innerText='';
        const previous='00.00';
        setElementArea('previousTaka',previous);
        setElementArea('total',previous);
        
        

    })
}
function priceCountClick6(){
    const itemTaka6 =getInputValue('itemTaka6');
    
    const previousTaka =getInputValue('previousTaka');
    const totalTaka = previousTaka+itemTaka6;
    const discount=(totalTaka*(20/100));
    const disabled=discount.toFixed(2);
    let sum = totalTaka-disabled;
    document.getElementById('input').addEventListener('click',function(event){
        const text =event.target.value;
        const applyButton=document.getElementById('applyButton');
        if(totalTaka>=200 && text=='SELL200' ){
            applyButton.removeAttribute('disabled');
            setElementArea('discount',disabled);
            document.getElementById('goHome').addEventListener('click',function(){
                const itemList=document.getElementById('itemList');
                itemList.innerText='';
                const inputId=document.getElementById('input');
                inputId.value='';
                const previous='00.00';
                setElementArea('previousTaka',previous);
                setElementArea('total',previous);
                setElementArea('discount',previous);
                
        
            })
           if(true){
            applyButton.setAttribute('disabled',true);
            setElementArea('total',sum);
           }
            
    
        }
        else{
            setElementArea('total',totalTaka);
        }
        
    })
    setElementArea('total',totalTaka);
    setElementArea('previousTaka',totalTaka);
    const text =totalTaka;
    const deleteButton=document.getElementById('makePurchase');
    if(text>0){
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled',true);
    }
    addToCalculate("Single Relax Chair");
    document.getElementById('goHome').addEventListener('click',function(){
        const itemList=document.getElementById('itemList');
        itemList.innerText='';
        const previous='00.00';
        setElementArea('previousTaka',previous);
        setElementArea('total',previous);
        
        

    })
}
function priceCountClick7(){
    const itemTaka7 =getInputValue('itemTaka7');
    
    const previousTaka =getInputValue('previousTaka');
    const totalTaka = previousTaka+itemTaka7;
    const discount=(totalTaka*(20/100));
    const disabled=discount.toFixed(2);
    let sum = totalTaka-disabled;
    document.getElementById('input').addEventListener('click',function(event){
        const text =event.target.value;
        const applyButton=document.getElementById('applyButton');
        if(totalTaka>=200 && text=='SELL200' ){
            applyButton.removeAttribute('disabled');
            setElementArea('discount',disabled);
            document.getElementById('goHome').addEventListener('click',function(){
                const itemList=document.getElementById('itemList');
                itemList.innerText='';
                const inputId=document.getElementById('input');
                inputId.value='';
                const previous='00.00';
                setElementArea('previousTaka',previous);
                setElementArea('total',previous);
                setElementArea('discount',previous);
                
        
            })
           if(true){
            applyButton.setAttribute('disabled',true);
            setElementArea('total',sum);
           }
            
    
        }
        else{
            setElementArea('total',totalTaka);
        }
        
    })
    setElementArea('total',totalTaka);
    setElementArea('previousTaka',totalTaka);
    const text =totalTaka;
    const deleteButton=document.getElementById('makePurchase');
    if(text>0){
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled',true);
    }
    addToCalculate("Children play");
    document.getElementById('goHome').addEventListener('click',function(){
        const itemList=document.getElementById('itemList');
        itemList.innerText='';
        const previous='00.00';
        setElementArea('previousTaka',previous);
        setElementArea('total',previous);
        
        

    })
}
function priceCountClick8(){
    const itemTaka8 =getInputValue('itemTaka8');
    
    const previousTaka =getInputValue('previousTaka');
    const totalTaka = previousTaka+itemTaka8;
    const discount=(totalTaka*(20/100));
    const disabled=discount.toFixed(2);
    let sum = totalTaka-disabled;
    document.getElementById('input').addEventListener('click',function(event){
        const text =event.target.value;
        const applyButton=document.getElementById('applyButton');
        if(totalTaka>=200 && text=='SELL200' ){
            applyButton.removeAttribute('disabled');
            setElementArea('discount',disabled);
            document.getElementById('goHome').addEventListener('click',function(){
                const itemList=document.getElementById('itemList');
                itemList.innerText='';
                const inputId=document.getElementById('input');
                inputId.value='';
                const previous='00.00';
                setElementArea('previousTaka',previous);
                setElementArea('total',previous);
                setElementArea('discount',previous);
                
        
            })
           if(true){
            applyButton.setAttribute('disabled',true);
            setElementArea('total',sum);
           }
            
    
        }
        else{
            setElementArea('total',totalTaka);
        }
        
    })
    
    setElementArea('total',totalTaka);
    setElementArea('previousTaka',totalTaka);
    const text =totalTaka;
    const deleteButton=document.getElementById('makePurchase');
    if(text>0){
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled',true);
    }
    addToCalculate("Flexible Sofa");
    document.getElementById('goHome').addEventListener('click',function(){
        const itemList=document.getElementById('itemList');
        itemList.innerText='';
        const previous='00.00';
        setElementArea('previousTaka',previous);
        setElementArea('total',previous);
        
        

    }) 
 
    
}


function getInputValue(useId){
    const previousTaka =document.getElementById(useId);
    const newValue=previousTaka.innerText;
    const originalTaka = parseFloat(newValue);
    
    return originalTaka;

}
function setElementArea(element,totalTaka){
    const elementOutput=document.getElementById(element);
    elementOutput.innerText=totalTaka;
}


function addToCalculate(areaType){
    const calculateEntry=document.getElementById('itemList');
    const p =document.createElement('p');
    p.classList.add('my-4')
    p.style.fontWeight=700;
    const count=calculateEntry.childElementCount;
    p.innerHTML=`${count+1}. ${areaType}

    `
    calculateEntry.appendChild(p);
}
 function clearInput(){
    document.getElementById('goHome').addEventListener('click',function(){
        const previous='00.00';
        setElementArea('previousTaka',previous);
        setElementArea('total',previous);
        setElementArea('discount',previous);
        

    })
 }
    


