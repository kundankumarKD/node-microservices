const express = require('express');
const User = require('../models/User');
const router = express.Router();
const amqp = require('amqplib');

async function publishToQueue(queue, message) {
  const connection = await amqp.connect('amqp://rabbitmq');
  const channel = await connection.createChannel();
  await channel.assertQueue(queue, { durable: false });
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
  setTimeout(() => {
    channel.close();
    connection.close();
  }, 500);
}

router.post('/', async (req, res) => {
  const user = await User.create(req.body);
  await publishToQueue('user_created', user);
  res.json(user);
});

router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

module.exports = router;
