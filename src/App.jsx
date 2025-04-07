import { Suspense, useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [bookMarked, setBookmarked] = useState([]);
  const [readingTime, setreadingTime] = useState(0);
 
  const handleBookmark = (data) => {
    // console.log('Bookmark clicked', data);
    setBookmarked([...bookMarked, data]);
  };

  const handleMarkAsRead = (time, id) => {
    // console.log("Marked as read", id);
    const newTime = readingTime + time;
    setreadingTime(newTime);
    handleRemoveBookmark(id);
  }

  const handleRemoveBookmark = (id) => {
    const newBookMarked = bookMarked.filter((marked) => marked.id !== id);
    setBookmarked(newBookMarked);
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="w-10/12 mx-auto flex gap-5">
        <div className="w-[70%]">
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-xl"></span>
            }
          >
            <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
          </Suspense>
        </div>
        <div className="w-[30%]">
          <div className="flex flex-col items-center gap-5 mt-8 rounded-lg">
            <div className="px-12 py-5 bg-[#6047EC]/10 rounded-lg border-1 border-[#6047EC] w-full">
              <h3 className="text-[#6047EC] text-2xl text-center font-bold my-3">
                Spent time on read : {readingTime} min
              </h3>
            </div>
            <div className="p-8 bg-[#111111]/5 rounded-lg w-full">
              <h3 className="text-2xl font-bold text-start">
                Bookmarked Blogs : {bookMarked.length}
              </h3>
              <div>
                {bookMarked.map((marked) => (
                  <div key={marked.id} className="p-5 bg-white rounded-lg mt-5">
                    <p className="text-lg font-semibold">{marked.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
