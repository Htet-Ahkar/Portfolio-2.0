import Image from "next/image";
import Link from "next/link";
//Dependencies
import moment from "moment";
import axios from "axios";

const blogs = ({ data }) => {
  //Increase ViewCounts
  const increaseView = async (id) => {
    await axios.put(`/api/blogs/${id}/viewCount`);
  };

  return (
    <div
      className="grid gap-5 grid-cols-1 min-h-screen px-5 py-12 bg-bg text-secondaryText 
    dark:bg-dark-bg dark:text-dark-secondaryText
      sm:px-20
      md:px-12 md:grid-cols-2
      lg:grid-cols-3"
    >
      {data.length > 0
        ? data.map((blog) => (
            <div
              key={blog._id}
              className="w-full h-blogMobileCard flex flex-col justify-between items-center rounded-md shadow-lg py-5 px-5
            dark:border dark:border-white dark:shadow-none
            "
            >
              {/* Image and text container */}
              <div className="w-full flex flex-col items-center mb-2">
                {/* Image */}
                {blog.selectedFiles[0] === undefined ? (
                  <div className="h-64">{`There's no feature image.`}</div>
                ) : (
                  <div className="w-80 h-64 relative">
                    <Image
                      src={blog.selectedFiles[0]}
                      alt={blog.title}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-md"
                      placeholder="empty"
                    />
                  </div>
                )}
                {/* Headers and snippet */}
                <div
                  className="flex flex-col gap-5 justify-between items-center w-full text-center pt-3 mt-2 overflow-clip
              dark:border-t dark:border-t-white"
                >
                  <h1 className="text-xl font-boldr w-full font-bold">
                    {blog.title}
                  </h1>
                  <p className="text-base text-gray-600">{blog.snippet}</p>
                </div>
              </div>
              {/* Date , Views and Button Container */}
              <div className="flex flex-col justify-between items-center gap-4 mb-2">
                {/* Date and Views */}
                <div className="w-full flex gap-5">
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="fill-primary
                    dark:fill-dark-primary"
                    >
                      <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                    </svg>
                    <span
                      className="text-sm text-gray-700
              dark:text-gray-400"
                    >
                      {moment(blog.createdAt).format("DD MMM, YYYY")}
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="fill-primary
                    dark:fill-dark-primary"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>
                    <span
                      className="text-sm text-gray-700
              dark:text-gray-400"
                    >
                      {blog.viewCount == 0
                        ? `Be The First.`
                        : `${blog.viewCount} ${
                            blog.viewCount > 1 ? `views` : `view`
                          }`}
                    </span>
                  </div>
                </div>
                {/* Button */}
                <button
                  className="w-24 h-10 bg-primary text-primaryText rounded-md text-base font-semibold hover:scale-105 focus:scale-95
              dark:bg-dark-primary dark:text-dark-primaryText"
                  onClick={() => {
                    increaseView(blog._id);
                  }}
                >
                  <Link href={`/blogs/${blog._id}`}>Read More</Link>
                </button>
              </div>
            </div>
          ))
        : `Sorry!!! There's Nothing to Show!!!`}
    </div>
  );
};

export default blogs;

export async function getStaticProps() {
  const {
    data: { data },
  } = await axios.get("https://portfolio-client-pink.vercel.app/api/blogs");

  return {
    props: {
      data,
    },
    revalidate: 10, // In seconds
  };
}
