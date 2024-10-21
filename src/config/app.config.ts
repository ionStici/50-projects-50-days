import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () => ({
  apiVersion: process.env.API_VERSION,
  environment: process.env.NODE_ENV || 'production',

  awsBucketName: process.env.AWS_PUBLIC_BUCKET_NAME,
  awsRegion: process.env.AWS_REGION,
  awsCloudfrontUrl: process.env.AWS_CLOUDFRONT_URL,
  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
}));
