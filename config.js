const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_59_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMjcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzksXG4gICAgICAgIDQyLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjksXG4gICAgICAgIDgzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM2LFxuICAgICAgICAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICA5OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MixcbiAgICAgICAgODgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjksXG4gICAgICAgIDI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3LFxuICAgICAgICA1OSxcbiAgICAgICAgODgsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODIsXG4gICAgICAgIDM3LFxuICAgICAgICA1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDUxLFxuICAgICAgICA5MyxcbiAgICAgICAgMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDY5LFxuICAgICAgICA2MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDMzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDkxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSGZWZzZzUFA2R0M2ZGM5NTRCMDZTM2JTZmFKMWQrV2xJMTd1azhtYUNQTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV1dTY1lweklTc1dIWGs3WkFZVXF2Z1wiLFxuICBcInBob25lSWRcIjogXCI3ZDg5MDg3Zi05YTUxLTRiYWUtYjcxMS03MWEyNzhlMGQxOGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzUsXG4gICAgICAxMDYsXG4gICAgICA1NixcbiAgICAgIDEyNSxcbiAgICAgIDk0LFxuICAgICAgMjEsXG4gICAgICAxMjEsXG4gICAgICAxOTQsXG4gICAgICAxNjEsXG4gICAgICAyMTcsXG4gICAgICAxMzAsXG4gICAgICAxMzMsXG4gICAgICA2OSxcbiAgICAgIDEwNyxcbiAgICAgIDExNyxcbiAgICAgIDYwLFxuICAgICAgMTUyLFxuICAgICAgMTYxLFxuICAgICAgMjIsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MixcbiAgICAgIDIxOCxcbiAgICAgIDksXG4gICAgICAxNjIsXG4gICAgICAxMTQsXG4gICAgICA0OSxcbiAgICAgIDEzNSxcbiAgICAgIDM5LFxuICAgICAgNDAsXG4gICAgICAyNCxcbiAgICAgIDE2MCxcbiAgICAgIDYwLFxuICAgICAgMjQxLFxuICAgICAgMTc4LFxuICAgICAgMTM3LFxuICAgICAgMTEzLFxuICAgICAgOTMsXG4gICAgICAyMDAsXG4gICAgICA5NCxcbiAgICAgIDI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlozUkE2RDMyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM1MzY0NjE2OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QgPCdkKXwnZCy8J2QrPCdkKwg6KqeXCIsXG4gICAgXCJsaWRcIjogXCI0NDQ5NjAyOTA0MzExOjI5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05xWXZlRUdFUExVcmJVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicVZha3Npb29YYWEyeS9QaXJGRnErVVpwek1sbys2cmYxT3VnY1Rpc0lqZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHeEhKS1NUQlJkdTdiK0M3QU5GTTFMc09OT25QTVdWMkltR0ZzbWNEVDdsUTdsV1J4Z09sQXB2bTcrOWNoR0ErZC90WjQxaHBwYm1wUWQyUUh4ZWtCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpS1NhWmZmNSs5dHl0MWMrQWhBalVpRWsvTi8rN1EyUUg2aTNjTkJaZ0NMK294bGRocVhmd3dqNFJEZXFoU2x1NUJDM2dmS0wwOGVCTlpoOVk2YjdqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDM1MzY0NjE2OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTA5OTQ1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
