import mongoose from 'mongoose'

const Commentchema = new mongoose.Schema(
  {
    user: {
      // type: String,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
    announcement: {
      // type: String,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Announcements',
      required: false,
    },
    comment: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Comments', Commentchema)
