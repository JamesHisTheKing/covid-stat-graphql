import { loadFilesSync } from '@graphql-tools/load-files'
import { ApolloServer } from 'apollo-server'
import path from 'path'
import resolvers from './resolvers'
import LmaoAPI from './services/lmao'

const port = 3001

const schemas = loadFilesSync(path.join(__dirname, '/schemas'));

const dataSources = {
  lmao: new LmaoAPI(), // create instance once
}

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers: resolvers,
  dataSources: () => dataSources,
})

server.listen(port, () => {
  console.log(`server is up and running at http://localhost:${port}`)
})
