import Link from "next/link";
import { useFetchBlogs } from "@hooks/useFetchBlogs";
import { useMemo } from "react";
import { truncateText, formatDate } from "../utils";

export default function BlogSection() {
  const [blogsData, blogsLoading] = useFetchBlogs({
    limit: 3,
  });
  const renderBlogs = useMemo(() => {
    // Display loading if still loading
    if (blogsLoading) return <div className="text-center">Loading...</div>;

    // Render each blog
    return blogsData.map((blog) => {
      // Use the formatDate utility function
      const formattedDate = formatDate(blog.created_at);

      // Rest of your code...
      return (
        <div key={blog.id} className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div
            className="archive-item scrolla-element-anim-1 scroll-animate"
            data-animate="active"
          >
            <div className="image">
              <Link legacyBehavior href={`/blog-single/${blog.slug}`}>
                <a>
                  <img
                    loading="lazy"
                    decoding="async"
                    src={blog.image}
                    alt={blog.title}
                  />
                </a>
              </Link>
            </div>
            <div className="desc">
              <div className="category lui-subtitle">
                <span>{formattedDate}</span>
              </div>
              <h5
                className="lui-title"
                style={{
                  height: "2.4em",
                  lineHeight: "1.2em",
                  overflow: "hidden",
                }}
              >
                <Link legacyBehavior href={`/blog-single/${blog.slug}`}>
                  <a>{truncateText(blog.title, 50)}</a>
                </Link>
              </h5>
              <div className="lui-text">
                <p>{truncateText(blog.content, 100)}</p>
                <div className="readmore">
                  <Link legacyBehavior href={`/blog-single/${blog.slug}`}>
                    <a className="lnk">Read more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }, [blogsLoading, blogsData]);

  return (
    <section className="lui-section lui-gradient-top" id="blog-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Latest Blog </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                my <b>Articles</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Archive */}
      <div className="v-line v-line-right">
        <div className="container">
          <div className="blog-items row">
            {renderBlogs}
          </div>
          <div className="load-more">
            <Link legacyBehavior href="/blog">
              <a
                className="btn scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>View Blog</span>
              </a>
            </Link>
          </div>
          <div className="lui-bgtitle">
            <span> Blog </span>
          </div>
        </div>
      </div>
    </section>
  );
}
