import { UserInputError } from 'apollo-server'
import { Country, Resolvers, ResolversParentTypes } from '../../generated/graphql'

const resolvers: Resolvers = {
  Query: {
    countries: async function (
      _: ResolversParentTypes['Query'],
      __: {},
      { dataSources }: any
    ): Promise<Country[]> {
      return dataSources.lmao.getCountries()
    },

    country: async function (
      _: ResolversParentTypes['Query'],
      { name }: { name: string },
      { dataSources }: any
    ): Promise<Country> {
      if (!name) {
        throw new UserInputError('Invalid country name')
      }
      return dataSources.lmao.getCountry(name)
    },
  },
}

export default resolvers
