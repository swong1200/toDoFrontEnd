import React from 'react';
import TaskForm from '../components/TaskForm';
import Header from '../components/Header';

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <main className="flex flex-col items-center justify-center">
        <div className="bg-black w-screen flex flex-col items-center justify-center min-h-52">
          <Header />
        </div>
        <div className="flex flex-col items-center bg-gray min-h-screen w-screen">
          <TaskForm />
        </div>
      </main>
    </div>
  );
}
