import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { TCartItem } from 'src/app/cart/interfaces/cart.interface';
import { IProduct } from 'src/app/product/interfaces/product.interface';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  id: number;
  @Prop({ required: true })
  firstName: string;
  @Prop({ required: true })
  lastName: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: false, default: [] })
  cart: TCartItem[];
  @Prop({ required: false, default: [] })
  productsBought: IProduct[];
}

export const UserSchema = SchemaFactory.createForClass(User);
