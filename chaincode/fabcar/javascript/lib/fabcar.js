/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class FabCar extends Contract {

    async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const stixs = 
        [
            {
                "type": "bundle1",
                "id": "bundle--601cee35-6b16-4e68-a3e7-9ec7d755b4c3",
                "evaluate": "7/10",
                "objects": [
                    {
                        "type": "threat-actor",
                        "spec_version": "2.1",
                        "id": "threat-actor--dfaa8d77-07e2-4e28-b2c8-92e9f7b04428",
                        "created": "2014-11-19T23:39:03.893Z",
                        "modified": "2014-11-19T23:39:03.893Z",
                        "name": "Disco Team Threat Actor Group",
                        "description": "This organized threat actor group operates to create profit from all types of crime.",
                        "threat_actor_types": [
                            "crime-syndicate"
                        ],
                        "aliases": [
                            "Equipo del Discoteca"
                        ],
                        "roles": [
                            "agent"
                        ],
                        "goals": [
                            "Steal Credit Card Information"
                        ],
                        "sophistication": "expert",
                        "resource_level": "organization",
                        "primary_motivation": "personal-gain"
                    },
                    {
                        "type": "identity",
                        "spec_version": "2.1",
                        "id": "identity--733c5838-34d9-4fbf-949c-62aba761184c",
                        "created": "2016-08-23T18:05:49.307Z",
                        "modified": "2016-08-23T18:05:49.307Z",
                        "name": "Disco Team",
                        "description": "Disco Team is the name of an organized threat actor crime-syndicate.",
                        "identity_class": "organization",
                        "contact_information": "disco-team@stealthemail.com"
                    },
                    {
                        "type": "relationship",
                        "spec_version": "2.1",
                        "id": "relationship--a2e3efb5-351d-4d46-97a0-6897ee7c77a0",
                        "created": "2020-02-29T18:01:28.577Z",
                        "modified": "2020-02-29T18:01:28.577Z",
                        "relationship_type": "attributed-to",
                        "source_ref": "threat-actor--dfaa8d77-07e2-4e28-b2c8-92e9f7b04428",
                        "target_ref": "identity--733c5838-34d9-4fbf-949c-62aba761184c"
                    }
                ]
                
            },
            {
                "type": "bundle2",
                "id": "bundle--601cee35-6b16-4e68-a3e7-9ec7d755b4c3",
                "evaluate": "8/10",
                "objects": [
                    {
                        "type": "threat-actor",
                        "spec_version": "2.1",
                        "id": "threat-actor--dfaa8d77-07e2-4e28-b2c8-92e9f7b04428",
                        "created": "2014-11-19T23:39:03.893Z",
                        "modified": "2014-11-19T23:39:03.893Z",
                        "name": "Disco Team Threat Actor Group",
                        "description": "This organized threat actor group operates to create profit from all types of crime.",
                        "threat_actor_types": [
                            "crime-syndicate"
                        ],
                        "aliases": [
                            "Equipo del Discoteca"
                        ],
                        "roles": [
                            "agent"
                        ],
                        "goals": [
                            "Steal Credit Card Information"
                        ],
                        "sophistication": "expert",
                        "resource_level": "organization",
                        "primary_motivation": "personal-gain"
                    },
                    {
                        "type": "identity",
                        "spec_version": "2.1",
                        "id": "identity--733c5838-34d9-4fbf-949c-62aba761184c",
                        "created": "2016-08-23T18:05:49.307Z",
                        "modified": "2016-08-23T18:05:49.307Z",
                        "name": "Disco Team",
                        "description": "Disco Team is the name of an organized threat actor crime-syndicate.",
                        "identity_class": "organization",
                        "contact_information": "disco-team@stealthemail.com"
                    },
                    {
                        "type": "relationship",
                        "spec_version": "2.1",
                        "id": "relationship--a2e3efb5-351d-4d46-97a0-6897ee7c77a0",
                        "created": "2020-02-29T18:01:28.577Z",
                        "modified": "2020-02-29T18:01:28.577Z",
                        "relationship_type": "attributed-to",
                        "source_ref": "threat-actor--dfaa8d77-07e2-4e28-b2c8-92e9f7b04428",
                        "target_ref": "identity--733c5838-34d9-4fbf-949c-62aba761184c"
                    }
                ]
            },
            {
                "type": "bundle3",
                "id": "bundle--601cee35-6b16-4e68-a3e7-9ec7d755b4c3",
                "evaluate": "9/10",
                "objects": [
                    {
                        "type": "threat-actor",
                        "spec_version": "2.1",
                        "id": "threat-actor--dfaa8d77-07e2-4e28-b2c8-92e9f7b04428",
                        "created": "2014-11-19T23:39:03.893Z",
                        "modified": "2014-11-19T23:39:03.893Z",
                        "name": "Disco Team Threat Actor Group",
                        "description": "This organized threat actor group operates to create profit from all types of crime.",
                        "threat_actor_types": [
                            "crime-syndicate"
                        ],
                        "aliases": [
                            "Equipo del Discoteca"
                        ],
                        "roles": [
                            "agent"
                        ],
                        "goals": [
                            "Steal Credit Card Information"
                        ],
                        "sophistication": "expert",
                        "resource_level": "organization",
                        "primary_motivation": "personal-gain"
                    },
                    {
                        "type": "identity",
                        "spec_version": "2.1",
                        "id": "identity--733c5838-34d9-4fbf-949c-62aba761184c",
                        "created": "2016-08-23T18:05:49.307Z",
                        "modified": "2016-08-23T18:05:49.307Z",
                        "name": "Disco Team",
                        "description": "Disco Team is the name of an organized threat actor crime-syndicate.",
                        "identity_class": "organization",
                        "contact_information": "disco-team@stealthemail.com"
                    },
                    {
                        "type": "relationship",
                        "spec_version": "2.1",
                        "id": "relationship--a2e3efb5-351d-4d46-97a0-6897ee7c77a0",
                        "created": "2020-02-29T18:01:28.577Z",
                        "modified": "2020-02-29T18:01:28.577Z",
                        "ơrelationship_type": "attributed-to",
                        "source_ref": "threat-actor--dfaa8d77-07e2-4e28-b2c8-92e9f7b04428",
                        "target_ref": "identity--733c5838-34d9-4fbf-949c-62aba761184c"
                    }
                ]
            }
        ];
        for (let i = 0; i < stixs.length; i++) {
            await ctx.stub.putState('STIX' + i, Buffer.from(JSON.stringify(stixs[i])));
            console.info('Added <--> ', stixs_threat_actor[i]);
        }
        console.info('============= END : Initialize Ledger ===========');
    }

    async queryCar(ctx, Number) {
        const stixAsBytes = await ctx.stub.getState(Number); // get the car from chaincode state
        if (!stixAsBytes || stixAsBytes.length === 0) {
            throw new Error(`${Number} does not exist`);
        }
        console.log(stixAsBytes.toString());
        return stixAsBytes.toString();
    }

    async createCar(ctx, stix_trans_data) {
        console.info('============= START : Create STIX ===========');
        const trans_data = stix_trans_data;
        const startKey = '';
        const endKey = '';
        var finalkey = '';
        for await (const {key, value} of ctx.stub.getStateByRange(startKey, endKey)) {finalkey=key;}
        var coefficient = 1;
        var index = 0;
        for (let i = finalkey.length; i > 4; i--) {
            index += Number(finalkey[i-1])*coefficient;
            coefficient *=10;
        }
        var Number = "STIX"+ (index + 1);
        await ctx.stub.putState(Number, Buffer.from(trans_data));
        //validator function
        console.info('============= END : Create STIX ===========');
        

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

/*
{
    "type": "threat-actor",
    "spec_version": "2.1",
    "id": "threat-actor--8b6297fe-cae7-47c6-9256-5584b417849c",
    "created_by_ref": "identity--b38dfe21-7477-40d1-aa90-5c8671ce51ca",
    "created": "2017-04-27T16:18:24.318Z",
    "modified": "2017-04-27T16:18:24.318Z",
    "name": "The Joker",
    "threat_actor_types": [
        "terrorist",
        "criminal"
        ],
    "aliases": [
        "Joe Kerr",
        "The Clown Prince of Crime"
    ],
    "roles": [
        "director"
    ],
    "resource_level": "team",
    "primary_motivation": "personal-satisfaction",
    "object_marking_refs": [
        "marking-definition--5e57c739-391a-4eb3-b6be-7d15ca92d5ed"
    ]
},
*/

        /*
        const stix = {
            docType: 'stix',
            attack_pattern:{
                type_attack_pattern,
                spec_version_attack_pattern,
                id_attack_pattern,
                created_attack_pattern,
                modified_attack_pattern,
                created_by_ref_attack_pattern, 
                revoked_attack_pattern, 
                labels_attack_pattern, 
                confidence_attack_pattern, 
                lang_attack_pattern,
                external_references_attack_pattern, 
                object_marking_refs_attack_pattern, 
                granular_markings_attack_pattern,
                name_attack_pattern, 
                description_attack_pattern, 
                aliases_attack_pattern, 
                kill_chain_phases_attack_pattern
            },
            campaign:{
                type_campaign,
                spec_version_campaign,
                id_campaign, 
                created_campaign, 
                modified_campaign, 
                created_by_ref_campaign, 
                revoked_campaign, 
                labels_campaign, 
                confidence_campaign, 
                lang_campaign, 
                external_references_campaign, 
                object_marking_refs_campaign, 
                granular_markings_campaign, 
                name_campaign, 
                description_campaign, 
                aliases_campaign, 
                first_seen_campaign, 
                last_seen_campaign, 
                objective_campaign
            },
            course_of_action:{
                type_course_of_action, 
                spec_version_course_of_action, 
                id_course_of_action, 
                created_course_of_action, 
                modified_course_of_action, 
                created_by_ref_course_of_action, 
                revoked_course_of_action, 
                labels_course_of_action, 
                confidence_course_of_action, 
                lang_course_of_action, 
                external_references_course_of_action, 
                object_marking_refs_course_of_action, 
                granular_markings_course_of_action, 
                name_course_of_action, 
                description_course_of_action, 
                action_type_course_of_action, 
                os_execution_envs_course_of_action, 
                action_bin_course_of_action, 
                action_reference_course_of_action
            },
            grouping:{
                type_grouping, 
                spec_version_grouping, 
                id_grouping, 
                created_grouping, 
                modified_grouping, 
                created_by_ref_grouping, 
                revoked_grouping, 
                labels_grouping, 
                confidence_grouping, 
                lang_grouping, 
                external_references_grouping, 
                object_marking_refs_grouping, 
                granular_markings_grouping, 
                name_grouping, 
                description_grouping, 
                context_grouping, 
                object_refs_grouping
            },
            identity:{
                type_identity, 
                spec_version_identity, 
                id_identity, 
                created_identity, 
                modified_identity, 
                created_by_ref_identity, 
                revoked_identity, 
                labels_identity, 
                confidence_identity, 
                lang_identity, 
                external_references_identity, 
                object_marking_refs_identity, 
                granular_markings_identity, 
                name_identity, 
                description_identity, 
                roles_identity, 
                identity_class_identity, 
                sectors_identity, 
                contact_information_identity
            },
            indicator:{
                type_indicator, 
                spec_version_indicator, 
                id_indicator, 
                created_indicator, 
                modified_indicator, 
                created_by_ref_indicator, 
                revoked_indicator, 
                labels_indicator, 
                confidence_indicator, 
                lang_indicator, 
                external_references_indicator, 
                object_marking_refs_indicator, 
                granular_markings_indicator, 
                name_indicator, 
                description_indicator, 
                indicator_types_indicator, 
                pattern_indicator, 
                valid_from_indicator, 
                valid_until_indicator, 
                kill_chain_phases_indicator
            },
            infrastructure:{
                type_infrastructure, 
                spec_version_infrastructure, 
                id_infrastructure, 
                created_infrastructure, 
                modified_infrastructure, 
                created_by_ref_infrastructure, 
                revoked_infrastructure, 
                labels_infrastructure, 
                confidence_infrastructure, 
                lang_infrastructure, 
                external_references_infrastructure, 
                object_marking_refs_infrastructure, 
                granular_markings_infrastructure, 
                name_infrastructure, 
                description_infrastructure, 
                infrastructure_types_infrastructure, 
                aliases_infrastructure, 
                kill_chain_phases_infrastructure, 
                first_seen_infrastructure, 
                last_seen_infrastructure
            },
            intrusion_set:{
                type_intrusion_set, 
                spec_version_intrusion_set, 
                id_intrusion_set, 
                created_intrusion_set, 
                modified_intrusion_set, 
                created_by_ref_intrusion_set, 
                revoked_intrusion_set, 
                labels_intrusion_set, 
                confidence_intrusion_set, 
                lang_intrusion_set, 
                external_references_intrusion_set, 
                object_marking_refs_intrusion_set, 
                granular_markings_intrusion_set, 
                name_intrusion_set, 
                description_intrusion_set, 
                aliases_intrusion_set, 
                first_seen_intrusion_set, 
                last_seen_intrusion_set, 
                goals_intrusion_set, 
                resource_level_intrusion_set, 
                primary_motivation_intrusion_set, 
                secondary_motivations_intrusion_set
            },
            location:{
                type_location, 
                spec_version_location, 
                id_location, 
                created_location, 
                modified_location, 
                created_by_ref_location, 
                revoked_location, 
                labels_location, 
                confidence_location, 
                lang_location, 
                external_references_location, 
                object_marking_refs_location, 
                granular_markings_location, 
                name_location, 
                description_location, 
                latitude_location, 
                longitude_location, 
                precision_location, 
                region_location, 
                country_location, 
                administrative_area_location, 
                city_location, 
                street_address_location, 
                postal_code_location
            },
            malware:{
                type_malware, 
                spec_version_malware, 
                id_malware, 
                created_malware, 
                modified_malware, 
                created_by_ref_malware, 
                revoked_malware, 
                labels_malware, 
                confidence_malware, 
                lang_malware, 
                external_references_malware, 
                object_marking_refs_malware, 
                granular_markings_malware, 
                name_malware, 
                description_malware, 
                malware_types_malware, 
                is_family_malware, 
                aliases_malware, 
                kill_chain_phases_malware, 
                first_seen_malware, 
                last_seen_malware, 
                os_execution_envs_malware, 
                architecture_execution_envs_malware, 
                implementation_languages_malware, 
                capabilities_malware, 
                sample_refs_malware
            },
            malware_analysis:{
                type_malware_analysis, 
                spec_version_malware_analysis, 
                id_malware_analysis, 
                created_malware_analysis, 
                modified_malware_analysis, 
                created_by_ref_malware_analysis, 
                revoked_malware_analysis, 
                labels_malware_analysis, 
                confidence_malware_analysis, 
                lang_malware_analysis, 
                external_references_malware_analysis, 
                object_marking_refs_malware_analysis, 
                granular_markings_malware_analysis, 
                product_malware_analysis, 
                version_malware_analysis, 
                host_vm_ref_malware_analysis, 
                operating_system_ref_malware_analysis, 
                installed_software_ref_malware_analysis, 
                configuration_version_malware_analysis, 
                module_malware_analysis, 
                analysis_engine_version_malware_analysis, 
                analysis_definition_version_malware_analysis, 
                submitted_malware_analysis, 
                analysis_started_malware_analysis, 
                analysis_ended_malware_analysis, 
                av_result_malware_analysis, 
                analysis_sco_refs_malware_analysis
            },
            note:{
                type_note, 
                spec_version_note, 
                id_note, 
                created_note, 
                modified_note, 
                created_by_ref_note, 
                revoked_note, 
                labels_note, 
                confidence_note, 
                lang_note, 
                external_references_note, 
                object_marking_refs_note, 
                granular_markings_note, 
                abstract_note, 
                content_note, 
                authors_note, 
                object_refs_note
            },
            observed_data:{
                type_observed_data, 
                spec_version_observed_data, 
                id_observed_data, 
                created_observed_data, 
                modified_observed_data, 
                created_by_ref_observed_data, 
                revoked_observed_data, 
                labels_observed_data, 
                confidence_observed_data, 
                lang_observed_data, 
                external_references_observed_data, 
                object_marking_refs_observed_data, 
                granular_markings_observed_data, 
                first_observed_observed_data, 
                last_observed_observed_data, 
                number_observed_observed_data, 
                objects_observed_data, 
                object_refs_observed_data
            },
            opinion:{
                type_opinion, 
                spec_version_opinion, 
                id_opinion, 
                created_opinion, 
                modified_opinion, 
                created_by_ref_opinion, 
                revoked_opinion, 
                labels_opinion, 
                confidence_opinion, 
                lang_opinion, 
                external_references_opinion, 
                object_marking_refs_opinion, 
                granular_markings_opinion, 
                explanation_opinion, 
                authors_opinion, 
                opinion_opinion, 
                object_refs_opinion
            },
            report:{
                type_report, 
                spec_version_report, 
                id_report, 
                created_report, 
                modified_report, 
                created_by_ref_report, 
                revoked_report, 
                labels_report, 
                confidence_report, 
                lang_report, 
                external_references_report, 
                object_marking_refs_report, 
                granular_markings_report, 
                name_report, 
                description_report, 
                report_types_report, 
                published_report, 
                object_refs_report
            },
            threat_actor:{
                type_threat_actor, 
                spec_version_threat_actor, 
                id_threat_actor, 
                created_threat_actor, 
                modified_threat_actor, 
                created_by_ref_threat_actor, 
                revoked_threat_actor, 
                labels_threat_actor, 
                confidence_threat_actor, 
                lang_threat_actor, 
                external_references_threat_actor, 
                object_marking_refs_threat_actor, 
                granular_markings_threat_actor, 
                name_threat_actor, 
                description_threat_actor, 
                threat_actor_types_threat_actor, 
                aliases_threat_actor, 
                first_seen_threat_actor, 
                last_seen_threat_actor, 
                roles_threat_actor, 
                goals_threat_actor, 
                sophistication_threat_actor, 
                resource_level_threat_actor, 
                primary_motivation_threat_actor, 
                secondary_motivations_threat_actor, 
                personal_motivations_threat_actor
            },
            tool:{
                type_tool, 
                spec_version_tool, 
                id_tool, 
                created_tool, 
                modified_tool, 
                created_by_ref_tool, 
                revoked_tool, 
                labels_tool, 
                confidence_tool, 
                lang_tool, 
                external_references_tool, 
                object_marking_refs_tool, 
                granular_markings_tool, 
                name_tool, 
                description_tool, 
                tool_types_tool, 
                aliases_tool, 
                kill_chain_phases_tool, 
                tool_version_tool
            },
            vulnerability:{
                type_vulnerability, 
                spec_version_vulnerability, 
                id_vulnerability, 
                created_vulnerability, 
                modified_vulnerability, 
                created_by_ref_vulnerability, 
                revoked_vulnerability, 
                labels_vulnerability, 
                confidence_vulnerability, 
                lang_vulnerability, 
                external_references_vulnerability, 
                object_marking_refs_vulnerability, 
                granular_markings_vulnerability, 
                name_vulnerability, 
                description_vulnerability
            }
        };
        */
