/** @type {import('next').NextConfig} */
// Add in domains where next.config.js doesn't work for the image in the array as a string
const nextConfig = {
    images:
    {
        domains: ["uploadthing.com", "utfs.io"]
    }
};

export default nextConfig;
