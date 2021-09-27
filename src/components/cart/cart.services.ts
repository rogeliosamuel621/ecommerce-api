import { ObjectId } from 'mongoose';
import { responses, statusCodes } from '../../config';
import ServiceResponse from '../../helpers/ServiceResponse';
import UserRepository from '../../repository/user.repository';
import { IProduct } from '../../types/products';
import { IServiceResponse } from '../../types/services';
import { IUser } from '../../types/user';

export class Cart {
  public async addToCart(cart: IProduct[], userId: ObjectId): Promise<IServiceResponse> {
    try {
      const user = await UserRepository.getUserById(userId);

      const userUpdated: IUser = {
        ...user,
        userCart: [...user.userCart, ...cart],
      };

      await UserRepository.updateUser(userId, userUpdated);

      return new ServiceResponse(null, 'OK', statusCodes.OK, null);
    } catch (error) {
      return new ServiceResponse(
        null,
        responses.ERROR_500,
        statusCodes.INTERNAL_SERVER_ERROR,
        error
      );
    }
  }
}
