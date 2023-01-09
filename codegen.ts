import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://152.228.215.94:83/api',
  documents: ['src/graphql/queries/queries.graphql'],
  generates: {
    'src/types/IGraphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo']
    }
  }
};

export default config;
