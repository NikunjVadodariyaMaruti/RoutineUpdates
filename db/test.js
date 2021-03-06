const ObjectId = require('mongodb').ObjectId;

module.exports = (db) => ({
    get_data: () => {
        let data =  db.collection('RoutineUpdates')
            .find().toArray()
        return data
    }
,
    get: (eventId) => {
        return db.collection('RoutineUpdates')
            .find({eventId: ObjectId(eventId)})
            .project({name: 1, phone: 1, round: 1, deliveryStatus: 1})
            .toArray();
    },
    getContact: (eventId, ids) => {
        const participantIds = ids.map(id => ObjectId(id));
        return db.collection('participations')
            .find({eventId: ObjectId(eventId), _id: {$in: participantIds}})
            .project({phone: 1, _id: 0})
            .toArray();
    },
    getDetails: (eventId) => {
        return db.collection('events')
            .findOne({_id: ObjectId(eventId)});
    },
    resetDeliveryStatus: (eventId, ids) => {
        const participantIds = ids.map(id => ObjectId(id));
        return db.collection('participations')
            .updateMany({_id: {$in: participantIds}}, {$set: {deliveryStatus: 'U'}});
    },
    promoteNext: (eventId, ids) => {
        const participantIds = ids.map(id => ObjectId(id));
        return db.collection('participations').updateMany(
            {
                eventId: ObjectId(eventId),
                _id: {$in: participantIds}
            },
            {$inc: {round: 1}}
        );
    },
    receipt: (number, status, customID, datetime) => {
        return db.collection('receipts')
            .insertOne({number, status, customID, datetime});
    },
    updateStatus: (number, customID, status) => {
        return db.collection('participations').updateOne(
            {
                eventId: ObjectId(customID),
                phone: number.slice(2)
            },
            {$set: {deliveryStatus: status}}
        );
    }
});
