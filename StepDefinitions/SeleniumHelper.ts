import { ElementArrayFinder } from "protractor";

export class SeleniumActions{

    async getTextValuesFromElementArray(elemArray:ElementArrayFinder):Promise<string[]>{
        let values:string[] = [];
        return new Promise(async function(resolve,reject){
            await elemArray.each(async function(elem){
                let currentValue = await elem.getText();
                values.push(currentValue);
            })
            resolve(values);
        })
       
    }


}