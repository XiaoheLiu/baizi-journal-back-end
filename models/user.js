import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

export const UserSchema = new Schema({
  username: {
    type: String,
    lowercase: true,
    trim: true,
    index: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  baizis: [
    { type: Schema.Types.ObjectId, ref: 'Baizi' }
  ]
});

UserSchema.plugin(timestamps);

const UserModel = mongoose.model('User', UserSchema);
export default UserModel;