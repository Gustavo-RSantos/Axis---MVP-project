import * as S3 from '@aws-sdk/client-s3';
import { awsCredentialsProvider } from '@vercel/oidc-aws-credentials-provider';

const AWS_REGION = process.env.AWS_REGION!;
const AWS_ROLE_ARN = process.env.AWS_ROLE_ARN!;
const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME!;

// Initialize the S3 Client
const s3client = new S3.S3Client({
  region: AWS_REGION,
  // Use the Vercel AWS SDK credentials provider
  credentials: awsCredentialsProvider({
    roleArn: AWS_ROLE_ARN,
  }),
});

export async function GET() {
  try {
    const result = await s3client.send(
      new S3.ListObjectsV2Command({
        Bucket: S3_BUCKET_NAME,
      }),
    );
    
    // Obtenha a lista de chaves (keys) dos objetos
    const keys = result?.Contents?.map((object) => object.Key) ?? [];
    
    // Retorne um Response com o array em JSON
    return new Response(JSON.stringify(keys), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Erro ao listar objetos no S3:', error);
    // Retorne um erro em caso de falha
    return new Response(JSON.stringify({ error: 'Falha ao listar objetos' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}