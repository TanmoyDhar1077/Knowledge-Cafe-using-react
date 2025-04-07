import { Suspense, useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [bookMarked, setBookmarked] = useState([]);

  const handleBookmark = (data) => {
    // console.log('Bookmark clicked', data);
    setBookmarked([...bookMarked, data]);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="w-10/12 mx-auto flex gap-2">
        <div className="w-[70%]">
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-xl"></span>
            }
          >
            <Blogs handleBookmark={handleBookmark}></Blogs>
          </Suspense>
        </div>
        <div className="w-[30%]">
          <div className="flex flex-col items-center gap-3 mt-8 rounded-lg">
            <div className="px-12 py-5 bg-[#6047EC]/10 rounded-lg border-1 border-[#6047EC]">
              <h3 className="text-[#6047EC] text-2xl font-bold my-3">
                Spent time on read : 177 min
              </h3>
            </div>
            <div className="p-8 bg-[#111111]/5 rounded-lg w-[411px]">
              <h3 className="text-2xl font-bold text-start">
                Bookmarked Blogs : {bookMarked.length}
              </h3>
              <div >
              {bookMarked.map(marked => 
                  <div className="p-5 bg-white rounded-lg mt-5"><p className="text-lg font-semibold">{marked.title}</p></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
