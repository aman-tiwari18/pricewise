"use server"

import { connectToDB } from "../mongoose";
import { scrapeAmazonProduct } from "../scraper";
// Suyash
export async function scrapeAndStoreProduct(productURL: string) {
    if (!productURL) return;
    try {
        
        connectToDB();
        

        const scrapedProduct = await scrapeAmazonProduct(productURL);
        if (!scrapedProduct) return;

        let product = scrapedProduct;





    } catch (error : any) {
        throw new Error(`failed to create/update product : ${error.mesasge}`)
    }
} 