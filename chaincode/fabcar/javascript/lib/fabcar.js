/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

const { v5: uuidv5 } = require('uuid');

class FabCar extends Contract {

    async initLedger(ctx) {
        // console.info('============= START : Initialize Ledger ===========');
        // const stixs = 
        // [
        //     {
        //         "type": "bundle1",
        //         "id": "bundle--601cee35-6b16-4e68-a3e7-9ec7d755b4c3",
        //         "evaluate": "7/10",
        //         "objects": [
        //             {
        //                 "type": "threat-actor",
        //                 "spec_version": "2.1",
        //                 "id": "threat-actor--dfaa8d77-07e2-4e28-b2c8-92e9f7b04428",
        //                 "created": "2014-11-19T23:39:03.893Z",
        //                 "modified": "2014-11-19T23:39:03.893Z",
        //                 "name": "Disco Team Threat Actor Group",
        //                 "description": "This organized threat actor group operates to create profit from all types of crime.",
        //                 "threat_actor_types": [
        //                     "crime-syndicate"
        //                 ],
        //                 "aliases": [
        //                     "Equipo del Discoteca"
        //                 ],
        //                 "roles": [
        //                     "agent"
        //                 ],
        //                 "goals": [
        //                     "Steal Credit Card Information"
        //                 ],
        //                 "sophistication": "expert",
        //                 "resource_level": "organization",
        //                 "primary_motivation": "personal-gain"
        //             },
        //             {
        //                 "type": "identity",
        //                 "spec_version": "2.1",
        //                 "id": "identity--733c5838-34d9-4fbf-949c-62aba761184c",
        //                 "created": "2016-08-23T18:05:49.307Z",
        //                 "modified": "2016-08-23T18:05:49.307Z",
        //                 "name": "Disco Team",
        //                 "description": "Disco Team is the name of an organized threat actor crime-syndicate.",
        //                 "identity_class": "organization",
        //                 "contact_information": "disco-team@stealthemail.com"
        //             },
        //             {
        //                 "type": "relationship",
        //                 "spec_version": "2.1",
        //                 "id": "relationship--a2e3efb5-351d-4d46-97a0-6897ee7c77a0",
        //                 "created": "2020-02-29T18:01:28.577Z",
        //                 "modified": "2020-02-29T18:01:28.577Z",
        //                 "relationship_type": "attributed-to",
        //                 "source_ref": "threat-actor--dfaa8d77-07e2-4e28-b2c8-92e9f7b04428",
        //                 "target_ref": "identity--733c5838-34d9-4fbf-949c-62aba761184c"
        //             }
        //         ]
                
        //     },
        //     {
        //         "type": "bundle2",
        //         "id": "bundle--601cee35-6b16-4e68-a3e7-9ec7d755b4c3",
        //         "evaluate": "8/10",
        //         "objects": [
        //             {
        //                 "type": "threat-actor",
        //                 "spec_version": "2.1",
        //                 "id": "threat-actor--dfaa8d77-07e2-4e28-b2c8-92e9f7b04428",
        //                 "created": "2014-11-19T23:39:03.893Z",
        //                 "modified": "2014-11-19T23:39:03.893Z",
        //                 "name": "Disco Team Threat Actor Group",
        //                 "description": "This organized threat actor group operates to create profit from all types of crime.",
        //                 "threat_actor_types": [
        //                     "crime-syndicate"
        //                 ],
        //                 "aliases": [
        //                     "Equipo del Discoteca"
        //                 ],
        //                 "roles": [
        //                     "agent"
        //                 ],
        //                 "goals": [
        //                     "Steal Credit Card Information"
        //                 ],
        //                 "sophistication": "expert",
        //                 "resource_level": "organization",
        //                 "primary_motivation": "personal-gain"
        //             },
        //             {
        //                 "type": "identity",
        //                 "spec_version": "2.1",
        //                 "id": "identity--733c5838-34d9-4fbf-949c-62aba761184c",
        //                 "created": "2016-08-23T18:05:49.307Z",
        //                 "modified": "2016-08-23T18:05:49.307Z",
        //                 "name": "Disco Team",
        //                 "description": "Disco Team is the name of an organized threat actor crime-syndicate.",
        //                 "identity_class": "organization",
        //                 "contact_information": "disco-team@stealthemail.com"
        //             },
        //             {
        //                 "type": "relationship",
        //                 "spec_version": "2.1",
        //                 "id": "relationship--a2e3efb5-351d-4d46-97a0-6897ee7c77a0",
        //                 "created": "2020-02-29T18:01:28.577Z",
        //                 "modified": "2020-02-29T18:01:28.577Z",
        //                 "relationship_type": "attributed-to",
        //                 "source_ref": "threat-actor--dfaa8d77-07e2-4e28-b2c8-92e9f7b04428",
        //                 "target_ref": "identity--733c5838-34d9-4fbf-949c-62aba761184c"
        //             }
        //         ]
        //     },
        //     {
        //         "type": "bundle3",
        //         "id": "bundle--601cee35-6b16-4e68-a3e7-9ec7d755b4c3",
        //         "evaluate": "9/10",
        //         "objects": [
        //             {
        //                 "type": "threat-actor",
        //                 "spec_version": "2.1",
        //                 "id": "threat-actor--dfaa8d77-07e2-4e28-b2c8-92e9f7b04428",
        //                 "created": "2014-11-19T23:39:03.893Z",
        //                 "modified": "2014-11-19T23:39:03.893Z",
        //                 "name": "Disco Team Threat Actor Group",
        //                 "description": "This organized threat actor group operates to create profit from all types of crime.",
        //                 "threat_actor_types": [
        //                     "crime-syndicate"
        //                 ],
        //                 "aliases": [
        //                     "Equipo del Discoteca"
        //                 ],
        //                 "roles": [
        //                     "agent"
        //                 ],
        //                 "goals": [
        //                     "Steal Credit Card Information"
        //                 ],
        //                 "sophistication": "expert",
        //                 "resource_level": "organization",
        //                 "primary_motivation": "personal-gain"
        //             },
        //             {
        //                 "type": "identity",
        //                 "spec_version": "2.1",
        //                 "id": "identity--733c5838-34d9-4fbf-949c-62aba761184c",
        //                 "created": "2016-08-23T18:05:49.307Z",
        //                 "modified": "2016-08-23T18:05:49.307Z",
        //                 "name": "Disco Team",
        //                 "description": "Disco Team is the name of an organized threat actor crime-syndicate.",
        //                 "identity_class": "organization",
        //                 "contact_information": "disco-team@stealthemail.com"
        //             },
        //             {
        //                 "type": "relationship",
        //                 "spec_version": "2.1",
        //                 "id": "relationship--a2e3efb5-351d-4d46-97a0-6897ee7c77a0",
        //                 "created": "2020-02-29T18:01:28.577Z",
        //                 "modified": "2020-02-29T18:01:28.577Z",
        //                 "ơrelationship_type": "attributed-to",
        //                 "source_ref": "threat-actor--dfaa8d77-07e2-4e28-b2c8-92e9f7b04428",
        //                 "target_ref": "identity--733c5838-34d9-4fbf-949c-62aba761184c"
        //             }
        //         ]
        //     }
        // ];
        // for (let i = 0; i < stixs.length; i++) {
        //     await ctx.stub.putState('STIX' + i, Buffer.from(JSON.stringify(stixs[i])));
        //     console.info('Added <--> ', stixs[i]);
        // }
        // console.info('============= END : Initialize Ledger ===========');
    }

    async queryCar(ctx, uuid) {
        const stixAsBytes = await ctx.stub.getState(uuid); // get the car from chaincode state
        if (!stixAsBytes || stixAsBytes.length === 0) {
            throw new Error(`${uuid} does not exist`);
        }
        console.log(stixAsBytes.toString());
        return stixAsBytes.toString();
    }

    async createCar(ctx, org, cid) {
        const trans_data = cid;
        const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
        
        var uuid = org.toString() + uuidv5(cid, MY_NAMESPACE);
        await ctx.stub.putState(uuid, Buffer.from(trans_data));
        
        //validator function
        console.info('============= END : Submit CID STIX ===========');
        return JSON.stringify(trans_data);
    }

    async queryAllCars(ctx) {
        const startKey = '';
        const endKey = '';
        const allResults = [];
        for await (const {key, value} of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8'); 
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: key, Record: record });
        }
        console.info(allResults);
        return JSON.stringify(allResults);
    }

    async changeCarOwner(ctx, Number, newevaluate) {
        console.info('============= START : changeevaluate ===========');

        const stixAsBytes = await ctx.stub.getState(Number); // get the car from chaincode state
        if (!stixAsBytes || stixAsBytes.length === 0) {
            throw new Error(`${Number} does not exist`);
        }
        const stix = JSON.parse(stixAsBytes.toString());
        stix.evaluate = newevaluate;

        await ctx.stub.putState(Number, Buffer.from(JSON.stringify(stix)));
        console.info('============= END : changeevaluate ===========');
    }

}

module.exports = FabCar;

