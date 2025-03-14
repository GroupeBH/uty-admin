import mongoose from 'mongoose'
// import Env from '@ioc:Adonis/Core/Env'

class MongooseService {
  private static instance: MongooseService
  private connection: typeof mongoose | null = null

  private constructor() {}

  public static getInstance(): MongooseService {
    if (!MongooseService.instance) {
      MongooseService.instance = new MongooseService()
    }
    return MongooseService.instance
  }

  public async connect(): Promise<void> {
    if (this.connection) {
      return
    }

    try {
      const uri = process.env.MONGO_URI || ''
      this.connection = await mongoose.connect(uri)
      console.log('Connected to MongoDB via Mongoose')
    } catch (error) {
      console.error('Failed to connect to MongoDB:', error)
      throw error
    }
  }

  public getConnection(): typeof mongoose {
    if (!this.connection) {
      throw new Error('Mongoose is not connected to MongoDB')
    }
    return this.connection
  }
}

export default MongooseService.getInstance()
