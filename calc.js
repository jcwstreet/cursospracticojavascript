
    let keys_operator = document.querySelectorAll('.key_operator');
    let statusOperator = false;
    let operationKey = '';
    let keys = document.querySelectorAll('.key_number');
    let firstNumber = 0;
    let nextNumber = 0;
    keys.forEach((key) => {
        key.addEventListener('click', (e) => {
            console.log('Worked')
            let valueClick = e.target.getAttribute('value');
            console.log(valueClick)
            let screen_number_resultP = document.querySelector('.screen_number_resultP');
            if (screen_number_resultP.innerHTML  == '0') {
                screen_number_resultP.innerHTML = valueClick;
            }
            else if (!statusOperator)  {
                screen_number_resultP.innerHTML += valueClick;
            }
            else if (statusOperator) {
                screen_number_resultP.innerHTML = valueClick;
                statusOperator = false;
                

            }
            
          })
        
    });

    
    
    keys_operator.forEach((key) => {
        key.addEventListener('click', (e) =>{
            console.log('Worker operator');
            let valueClick = e.target.getAttribute('value');
            console.log(valueClick);
            console.log(firstNumber);
            operationKey = valueClick;
            valueScreenNumber =  parseFloat(document.querySelector('.screen_number_resultP').innerHTML);
            let resultOperation = 0;

            if (valueClick == 'RESET') {
                firstNumber = 0;
                document.querySelector('.screen_number_resultP').innerHTML = 0;
                operationKey = '';

            }
            else if (firstNumber == 0 || statusOperator == true || operationKey == ''){
                firstNumber =  valueScreenNumber;
            }
            else {
                switch(valueClick) {
                    case '-':
                        resultOperation = firstNumber - valueScreenNumber;
                        firstNumber = resultOperation;
                        document.querySelector('.screen_number_resultP').innerHTML = resultOperation;
                        break;
                    case '+':
                        resultOperation = firstNumber + valueScreenNumber;
                        firstNumber = resultOperation;
                        document.querySelector('.screen_number_resultP').innerHTML = resultOperation;
                        break;
                    case '/':
                        resultOperation = firstNumber / valueScreenNumber;
                        firstNumber = resultOperation;
                        document.querySelector('.screen_number_resultP').innerHTML = resultOperation;
                        break;
                        
                    case 'X':
                        resultOperation = firstNumber * valueScreenNumber;
                        firstNumber = resultOperation;
                        document.querySelector('.screen_number_resultP').innerHTML = resultOperation;
                        break;
                    }
                }
            statusOperator = true;
            console.log(firstNumber);
            



        })
    })





// function load(){
//     let key = document.querySelectorAll('key_number');
//     key.forEach( el => {
//         el.addEventListener('click', e =>{
//             console.log(e.target.getAttribute('value'));
//             let value_click = e.target.getAttribute('value');
//             add_number(value_click);            
//         })
//     })
