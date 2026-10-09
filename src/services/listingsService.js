import { findAllListings, findListingById, findListingsPropertyType, findPropertyHost } from "../data/listingsData.js";

export const getListings = async (page, pageSize) => {
    return await findAllListings(page, pageSize);
}

export const getListingById = async (id) => {
    return await findListingById(id);
}

export async function getListingsPropertyType(query, page, pageSize) {
    return await findListingsPropertyType(query, page, pageSize);
}

export async function getPropertyHost(id) {
    return await findPropertyHost(id);
}