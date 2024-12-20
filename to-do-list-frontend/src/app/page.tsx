import Header from './components/Header';
import CreateButton from './components/CreateButton';
import TaskDiv from './components/TaskDiv';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="bg-black w-screen flex flex-col items-center justify-center min-h-52">
        <Header />
      </div>
      <div className="flex flex-col items-center bg-gray min-h-screen w-screen">
        <CreateButton />
        <TaskDiv />
      </div>
    </main>
  );
}
