import { ApplicationService } from '@adonisjs/core/types'
import mongoose from 'mongoose'
import env from '#start/env'

export default class MongooseProvider {
  constructor(protected app: ApplicationService) {}

  async boot() {
    // Établir la connexion à MongoDB
    const uri = env.get('MONGO_URI')
    if (!uri) {
      throw new Error('MONGO_URI is not defined in the environment variables')
    }
    try {
      await mongoose.connect(uri)
      console.log('Connected to MongoDB via Mongoose')
    } catch (error) {
      console.error('Failed to connect to MongoDB:', error)
      throw error
    }
  }

  async shutdown() {
    // Fermer la connexion à MongoDB lors de l'arrêt de l'application
    await mongoose.disconnect()
    console.log('Disconnected from MongoDB')
  }
}
