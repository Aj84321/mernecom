    const Users = require('../models/userModel');

    const userCtrl = {
        register: async(req, res) => {
            try {
                const { name, email, password } = req.body;
    
                // Check if the email is already registered
                try {
                    const existingUser = await Users.findOne({ email });
                    if (existingUser) {
                        return res.status(400).json({ msg: "Email already registered" });
                    }
                } catch (err) {
                    return res.status(500).json({ msg: "Database connection issue. Please try again." });
                }
    
                // Validate password length
                if (password.length < 6) {
                    return res.status(400).json({ msg: "Password must be at least 6 characters" });
                }
    
                // Create a new user object
                const newUser = new Users({
                    name,
                    email,
                    password
                });
    
                // Save the new user to the database
                await newUser.save();
    
                res.json({ msg: "Registered successfully" });
            } catch (err) {
                return res.status(500).json({ msg: err.message });
            }
        }
    };
    
    module.exports = userCtrl;
    