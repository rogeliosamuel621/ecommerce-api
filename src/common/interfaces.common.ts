import * as Mongoose from 'mongoose';

export type TCurrency = 'USD' | 'MXN';

export type TColors = 'black' | 'white';

export enum categories {
  'Best seller' = 1,
  'Casual clothes' = 2,
  'Jackets' = 3,
  'Sweet nights' = 4,
}

export type TSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XLL' | '2XL' | '3XL';

export type TMongoId = Mongoose.Schema.Types.ObjectId;
