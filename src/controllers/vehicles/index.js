import StolenVehicles from '../../database/dao/stolenVehicles';
import { response, responseErr } from '../../utils/responseMsg';

/**
  * @name getStolenVehicles
  * @param { Object } req
  * @param { Object } res
  * @returns API response
  * @description handles requests for viewing all stolen vehicles or single vehicle
*/
export const getStolenVehicles = async (req, res) => {
  try {
    const { id } = req.query;
    let data;
    if (id) data = await StolenVehicles.getOneStolenVehicle(id);
    else data = await StolenVehicles.getAllStolenVehicles();
    return response(res, 200, data);
  } catch (error) {
    if (error.message === 'no_match') return responseErr(res, 404, 'No records found for the provided chassis number');
    return responseErr(res, 500, 'Service Temporarily Down, please try again later');
  }
};

export const createStolenVehicles = (req, res) => {};
