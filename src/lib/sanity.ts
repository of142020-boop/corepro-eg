import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// قراءة البيانات تلقائياً من ملف البيئة الذي تم إنشاؤه
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const apiVersion = "2023-05-03";

export const client = createClient({
 projectId,
 dataset,
 apiVersion,
 useCdn: false, // نجعلها false أثناء التطوير لنرى التعديلات فوراً
});

const builder = imageUrlBuilder(client);

export type SanityImageSource = Parameters<typeof builder.image>[0];

export function urlFor(source: SanityImageSource) {
 return builder.image(source);
}