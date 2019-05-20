import { callApi } from '../helpers/apiHelper';

class FighterService {
  async getFighters() {
    try {
      const endpoint = 'fighters.json';
      const apiResult = await callApi(endpoint, 'GET');
      return JSON.parse(atob(apiResult.content));
    } catch (error) {
      throw error;
    }
  }

  async getFighterDetails(_id) {
    // implement this method
    // endpoint - `details/fighter/${_id}.json`;
    try {
      const endpoint = `details/fighter/${_id}.json`;
      const apiResult = await callApi(endpoint, 'GET');
      const fighterApiDetails = JSON.parse(atob(apiResult.content));



      return fighterApiDetails
    } catch (error) {
      throw error;
    }
  }
}


export const fighterService = new FighterService();







