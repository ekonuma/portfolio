import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */

const nextConfig = {
    // output: "export",
    // reactStrictMode: true,
    // images: {
    //   unoptimized: true
    // }
  };
 
export default withNextIntl(nextConfig);
