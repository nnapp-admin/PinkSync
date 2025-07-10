import dbConnect from '@/lib/dbConnect';
import { User } from '@/lib/models/User';

export async function POST(request) {
  await dbConnect();

  const { fullName, whatsappNumber, ageGroup, cityLocation, forWhom } = await request.json();

  try {
    const newUser = new User({
      fullName,
      whatsappNumber,
      ageGroup,
      cityLocation,
      forWhom,
    });
    await newUser.save();
    return new Response(JSON.stringify({ success: true, message: 'User registered successfully' }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error saving user:', error);
    return new Response(JSON.stringify({ success: false, message: 'Error saving user' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}