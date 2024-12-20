import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
        <div className='bg-black w-screen flex flex-col items-center justify-center min-h-52'>

        <Header />
        </div>
        <div className="bg-gray min-h-screen w-screen"></div>
    </main>
  );
}
