import mongodb from "mongodb"
import app from "./app.js"
import dotenv from "dotenv"
import AnnouncementsDAO from './DAO/announcements.js'
import CouriersDAO from './DAO/couriers.js'
import OutpassDAO from './DAO/outpass.js'
import UserDAO from "./DAO/user.js"
import RoomBookDAO from "./DAO/roombook.js"

dotenv.config()
const mongoClient = mongodb.MongoClient
const port = process.env.PORT||7000

mongoClient.connect(
    process.env.HOSTEL_DB_URI,
    {
        // poolSize: 50,
        // wtimeout: 2500,
        // useNewUrlParse: true
    }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await AnnouncementsDAO.injectAnnouncementsDB(client)
    await CouriersDAO.injectCouriersDB(client)
    await OutpassDAO.injectOutpassDB(client)
    await UserDAO.injectUserDB(client)
    await RoomBookDAO.injectRoomBookingDB(client)
    app.listen(port, () => {
        console.log(`server listening on port ${port}`)
    })
})
