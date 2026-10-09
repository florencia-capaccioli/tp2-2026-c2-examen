import { getListings, getListingById, getListingsPropertyType, getPropertyHost } from "../services/listingsService.js";

export const getAllListings = async (req, res) => {
    try {
        const page = req.query.page ? parseInt(req.query.page) : undefined;
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : undefined;
        const listings = await getListings(page, pageSize);
        res.json(listings);
    } catch (error) {
        console.log("Error fetching listings: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getListingId = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const listing = await getListingById(id);
        res.json(listing);
    } catch (error) {
        console.log("Error fetching listing: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export async function getListingsPropertyTypeController(req, res) {
    try {
        const page = req.query.page ? parseInt(req.query.page) : undefined;
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : undefined;
        const q = req.params.type;
        if(!q) {
            return res.status(400).json({ message: "Se requiere un término de búsqueda" });
        }
        const listings = await getListingsPropertyType(q, page, pageSize);
        res.json(listings);
    } catch(error) {
        console.log("Error fetching listing: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getPropertyHostController(req, res) {
    try {
        const id = req.params.host_id;
        if(!id) {
            return res.status(400).json({ message: "Se requiere un término de búsqueda" });
        }
        const property = await getPropertyHost(id);
        res.json(property);
    } catch(error) {
        console.log("Error fetching listing: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
