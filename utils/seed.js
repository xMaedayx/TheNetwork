const connection = require('../config/connection');
const { Comment, Member } = require('../models');
const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await Comment.deleteMany({});

  // Drop existing students
  await Member.deleteMany({});

  // Create empty array to hold the students
  const members = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {
    // Get some random3 assignment objects using a helper function that we imported from ./data
    const assignments = getRandomAssignments(20);

    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];
  

    members.push({
      first,
      last,
    });
  }

  // Add students to the collection and await the results
  await Member.collection.insertMany(members);

  // Add courses to the collection and await the results
  await Comment.collection.insertOne({
    commentName: 'UCLA',
    inPerson: false,
    members: [...members],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(members);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
