import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CoinflipDocument = HydratedDocument<Coinflip>;

@Schema()
export class Coinflip {
  @Prop({ required: true }) // TODOS: Add type: mongoose.Schema.Types.ObjectId, ref: 'User'
  createdBy: string;

  @Prop() // TODOS: Add type: mongoose.Schema.Types.ObjectId, ref: 'User'
  acceptedBy: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  currency: string;

  @Prop({ required: true })
  createdAt: Date;

  @Prop()
  endedAt: Date;

  @Prop()
  status: string;

  @Prop()
  creatorChoose: string;

  @Prop()
  result: string;

  @Prop()
  winner: string;
}

export const CoinflipSchema = SchemaFactory.createForClass(Coinflip);