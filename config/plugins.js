module.exports = ({env}) => ({
    upload: {
      config: {
        provider: "strapi-provider-upload-imagekit",
        providerOptions: {
          publicKey: env('IMAGEKIT_PUBLIC_KEY'),
          privateKey: env('IMAGEKIT_PRIVATE_KEY'),
          urlEndpoint: `https://ik.imagekit.io/${env('IMAGEKIT_ID')}`,
          params: {
            folder: "/starcode"
          }
        }
      }
    }
  });