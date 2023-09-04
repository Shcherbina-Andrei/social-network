import Image from 'next/image';
import { useState } from 'react';

type User = {
  _id: string;
  username: string;
  email: string;
};

async function getUsers() {
  const res = await fetch('http://localhost:5000/users', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const users = (await getUsers()) as User[];
  return (
    <main>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <h4>{user.username}</h4>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
