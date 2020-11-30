import request from "request";
import { browser } from "protractor";

export class apiHelperFunctions {


    async getToken(loginIdForAuthToken: string, passowrd: string, contextCode: string, apiBuildVersion: string, isTokenForAuthorApp: boolean): Promise<string> {
        let loginAPIURL: string = "";
        //let token: string = "abcd";
        let tokenId: unknown;
        if (isTokenForAuthorApp) {
            loginAPIURL = "https://momentaglobaltest.btsmomenta.com/auth/api/v1/basic/login";
        }
        else {
            loginAPIURL = "https://momentaregioneuropetest.btspulse.com/auth/api/v1/basic/login";
        }
        return new Promise(function (resolve, reject) {
            request.post({
                "headers": { "content-type": "application/json", "api-build-version": apiBuildVersion },
                "url": loginAPIURL,
                "body": JSON.stringify({
                    "program": "AuthService",
                    "data": {
                        "apiContextCode": contextCode,
                        "email": loginIdForAuthToken,
                        "password": passowrd
                    }
                })
            }, function (error, response, body) {
                if (error) {
                    return console.dir(error);
                    reject(error);
                }

                // console.dir("Body : ******");
                // console.dir(response.body);
                let responseBody: any = JSON.parse(response.body);
                let tokenId: string = "JWT " + responseBody.payload.token
                resolve(tokenId);

            })
        })

    }

    async makePostRequest(requestURL: string, tokenId: string, apiBuildVersion: string, requestBody: any): Promise<any> {
        let responseBody: any = {};
        return new Promise(function (resolve, reject) {
            request.post({
                "headers": { "content-type": "application/json", "api-build-version": apiBuildVersion, "Authorization": tokenId },
                "url": requestURL,
                "body": JSON.stringify(requestBody)
            }, async function (error, response, body) {
                if (error) {
                    return console.dir(error);
                    reject(error);
                }

                // console.dir("Body : ******");
                // console.dir(response.body);
                let responseBody: any = JSON.parse(response.body);
                resolve(responseBody);
            })
        })
    }

    async makeGetRequest(requestURL: string, tokenId: string, apiBuildVersion: string): Promise<any> {
        //let responseBody: any = {};
        return new Promise(function (resolve, reject) {
            request.get({
                "headers": { "content-type": "application/json", "api-build-version": apiBuildVersion, "Authorization": tokenId },
                "url": requestURL
            }, async function (error, response, body) {
                if (error) {
                    return console.dir(error);
                    reject(error);
                }
                let responseBody: any = JSON.parse(response.body);
                resolve(responseBody);
            })
        })
    }

    async resetUser(loginIdForAuthToken: string, password: string, apiContextCode: string, apiBuildVersion: string,
        customerId: string, email: string, journeyId: string): Promise<any> {
        let tokenId:string = await this.getToken(loginIdForAuthToken,password,apiContextCode,apiBuildVersion,true);
        console.log(tokenId);

        let requestBody: any = {
            "program": "MasterService",
            "data": {
                "customerId": customerId,
                "email": email,
                "resetPermissions": false,
                "journeyId": journeyId                
            }
        }
        return new Promise(async function (resolve, reject) {
            request.post({
                "headers": { "content-type": "application/json", "api-build-version": apiBuildVersion, "Authorization": tokenId },
                "url": "https://momentaglobaltest.btsmomenta.com/master/api/v1/user/reset-user",
                "body": JSON.stringify(requestBody)
            }, async function (error, response, body) {
                if(error){
                    console.log(error);
                    reject(error);
                }
                else{
                    console.log(email,'has been reset successfully');
                    let responseBody:any = JSON.parse(response.body)
                    resolve(responseBody);
                }
            })
        })
    }
    async resetAllJourneys(loginIdForAuthToken: string, password: string, apiContextCode: string, apiBuildVersion: string,
        customerId: string, email: string): Promise<any> {
        let tokenId:string = await this.getToken(loginIdForAuthToken,password,apiContextCode,apiBuildVersion,true);
        console.log(tokenId);

        let requestBody: any = {
            "program": "MasterService",
            "data": {
                "customerId": customerId,
                "email": email,
                "resetPermissions": false              
            }
        }
        return new Promise(async function (resolve, reject) {
            request.post({
                "headers": { "content-type": "application/json", "api-build-version": apiBuildVersion, "Authorization": tokenId },
                "url": "https://momentaglobaltest.btsmomenta.com/master/api/v1/user/reset-user",
                "body": JSON.stringify(requestBody)
            }, async function (error, response, body) {
                if(error){
                    console.log(error);
                    reject(error);
                }
                else{
                    console.log(email,'has been reset successfully');
                    let responseBody:any = JSON.parse(response.body)
                    resolve(responseBody);
                }
            })
        })
    }
}