import { RESTDataSource } from 'apollo-datasource-rest'
import { Country } from '../../generated/graphql'
export default class Lmao extends RESTDataSource {
  constructor(baseUrl = 'https://corona.lmao.ninja/v2') {
    super()
    this.baseURL = baseUrl
  }

  async getCountries(): Promise<Country[]> {
    const response = await this.get('/countries')
    return response
  }

  async getCountry(name: string): Promise<Country> {
    const response = await this.get(`/countries/${name}`)
    return response
  }
}