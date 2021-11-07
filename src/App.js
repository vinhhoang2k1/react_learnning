import { useEffect, useState } from "react";

function App() {
  const tabs = ["posts", "comments", "albums"];
  const [posts, setPost] = useState([]);
  const [type, setType] = useState("posts");
  const [goToTop, setGoToTop] = useState(false);
  // console.log(posts);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPost(posts);
      });
  }, [type]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setGoToTop(true);
      } else {
        setGoToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return (
      // window.removeEventListener("scroll", handleScroll)
      console.log("remove listen")

    )
  }, []);

  return (
    <div>
      {/* {console.log(posts)} */}
      {tabs.map((tab) => {
        return (
          <>
            <button
              key={tab}
              style={
                type === tab
                  ? {
                      background: "#333",
                      color: "#fff",
                    }
                  : {}
              }
              onClick={() => setType(tab)}
            >
              {tab}
            </button>
          </>
        );
      })}
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title || post.id}</li>;
        })}
      </ul>
      {goToTop && (
        <button
          key={goToTop}
          style={{
            position: "fixed",
            padding: 10,
            bottom: 20,
            right: 20
          }}
        >
          Go To Top
        </button>
      )}
    </div>
  );
}
export default App;
