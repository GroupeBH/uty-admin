import mongoose from 'mongoose'

const Notificationchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    screen: {
      type: String,
    },
    url: {
      type: String,
    },
    isReaded: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Notifications', Notificationchema)
