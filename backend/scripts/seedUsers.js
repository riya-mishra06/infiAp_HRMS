const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const User = require('../models/User');

const seedUsers = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✓ Connected to MongoDB');

        // Clear existing users
        await User.deleteMany({});
        console.log('✓ Cleared existing users');

        const salt = await bcrypt.genSalt(10);
        const users = [
            {
                name: 'HR Manager',
                email: 'hr.demo@infiap.local',
                password: await bcrypt.hash('Test@12345', salt),
                role: 'hr'
            },
            {
                name: 'Admin User',
                email: 'admin.demo@infiap.local',
                password: await bcrypt.hash('Test@12345', salt),
                role: 'admin'
            },
            {
                name: 'Super Admin',
                email: 'superadmin@infiap.local',
                password: await bcrypt.hash('Test@12345', salt),
                role: 'Main Admin'
            },
            {
                name: 'Employee User',
                email: 'employee@infiap.local',
                password: await bcrypt.hash('Test@12345', salt),
                role: 'employee'
            }
        ];

        const createdUsers = await User.insertMany(users);
        console.log(`✓ Created ${createdUsers.length} users:`);
        
        createdUsers.forEach((user) => {
            console.log(`  - ${user.email} (${user.role})`);
        });

        console.log('\nDemo Credentials:');
        console.log('HR User:       hr.demo@infiap.local / Test@12345');
        console.log('Admin:         admin.demo@infiap.local / Test@12345');
        console.log('Super Admin:   superadmin@infiap.local / Test@12345');
        console.log('Employee:      employee@infiap.local / Test@12345');

        await mongoose.connection.close();
        console.log('\n✓ Database seeded successfully');
        process.exit(0);
    } catch (error) {
        console.error('✗ Error seeding database:', error.message);
        process.exit(1);
    }
};

seedUsers();
