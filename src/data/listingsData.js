import { getDb } from "./connection.js";

export async function findAllListings(page, pageSize) {
    const db = getDb();
    if (page && pageSize) {
        const skip = (page - 1) * pageSize;
        const listings = await db.collection("listingsAndReviews")
            .find()
            .skip(skip)
            .limit(pageSize)
            .toArray();
        return listings;
    } else {
        // Sin paginación: trae todos los documentos
        const listings = await db.collection("listingsAndReviews").find().toArray();
        return listings;
    }
}

export async function findListingById(id) {
    const db = getDb();
    const listing = await db.collection("listingsAndReviews").findOne({ _id: id });
    console.log(listing);
    return listing;
}

export async function findListingsPropertyType(query, page, pageSize) {
    const db = getDb();
    if(page && pageSize) {
        const skip = (page - 1) * pageSize;
        const listings = await db.collection("listingsAndReviews")
            .find({ property_type: { $regex: query, $options: "i"}})
            .skip(skip)
            .limit(pageSize)
            .toArray();
        return listings;
    } else {
        // sin paginación
        const listings = await db.collection("listingsAndReviews")
            .find({ property_type: { $regex: query, $options: "i" }})
            .toArray();
        return listings;
    }
}

export async function findPropertyHost(id) {
    const db = getDb();
    return await db.collection("listingsAndReviews").findOne({ "host.host_id": id });
}