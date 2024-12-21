'use client'
import React, { useState, useEffect } from 'react';
import route from '../api/route';
import TaskCard from './TaskCard';

type Props = {};

interface Task {
    id: number;
    title: string;
    color: string;
    completed: boolean
}

export default function TaskDiv({}: Props) {
  const [data, setData] = useState<Task[]>([]);
  
  const getInitialTasks = ()=> {
    route.getTasks().then((result)=> {
        setData(result.data)
    }).catch((err)=> console.log(err))
  }

  useEffect(() => {
    getInitialTasks();
  }, []);

  

  {console.log(data)}
    return (
    
      <div className="w-max flex flex-col items-center">
        <div className="grid grid-cols-2 gap-96 text-white">
          <p>Tasks</p>
          <p>Completed</p>
        </div>
        <div className='text-white'>
            {data && data.map((task)=> {
                return (
                    <TaskCard key={task.id} title={task.title} id={task.id} />
                )
            })}
        </div>
      </div>
    );
}
