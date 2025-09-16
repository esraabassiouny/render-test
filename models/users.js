const mongoose = require('mongoose')
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    email: { type: String, required: true, unique: true, lowercase:true, trim: true, match: [/^\S+\@\S+\.\S+$/, "Invalid email address"]},
    password: { type: String, required: true },
    role: { type: String, enum: ["customer", "admin"], default: "customer" },
    addresses: [
      {
        label: { type: String, default: "Home" },
        country: { type: String, required: true },
        street: { type: String, required: true },
        buildingNameOrNo: { type: String, required: true },
        floor: { type: Number, required: true },
        apartmentNo: { type: Number, required: true },
        city: { type: String, required: true },
        postalCode: String,
      }
    ],
    phoneNumber: { type: String, trim: true, match: [/^\+?[0-9]{10,15}$/, "Invalid phone number"] },
    gender: { type: String, enum: ["male", "female"] },
    profilePhoto: { type: String, default: "https://e7.pngegg.com/pngimages/1004/160/png-clipart-computer-icons-user-profile-social-web-others-blue-social-media.png" },
    age: { type: Number, min: 13, max: 100 },
}, { timestamps: true }
);

UserSchema.pre('save',async function (next){
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;