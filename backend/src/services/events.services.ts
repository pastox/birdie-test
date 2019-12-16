import db from './index.services';

export const getEvents = async (patientId : string, filters : string[], startDate : string, endDate : string) : Promise<Array<{payload : any[]}>> => {
    return (await db("events")
        .select(["payload"])
        .whereIn("event_type", filters)
        .andWhere({
            care_recipient_id : patientId,
        })
        .andWhere("timestamp", '>', startDate)
        .andWhere("timestamp", '<', endDate)
        .orderBy("timestamp", "asc")
    );
}

export const getTypes = async () : Promise<Array<{event_type : string}>> => {
    return (
        await db("events")
        .distinct("event_type")
    )
}

export const getPatients = async () : Promise<Array<{care_recipient_id : string}>> => {
    return (
        await db("events")
        .distinct("care_recipient_id")
    )
}