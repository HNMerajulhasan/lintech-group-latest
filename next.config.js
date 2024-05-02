/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;




// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   webpack: (config, { isServer }) => {
   
//     config.module.rules.push({
//       test: /\.(mp4)$/,
//       use: [
//         {
//           loader: 'file-loader',
//           options: {
//             publicPath: '/_next',
//             outputPath: 'static/videos/', 
//             name: '[name].[ext]',
//           },
//         },
//       ],
//     });

//     return config;
//   },
// };

// module.exports = nextConfig;
