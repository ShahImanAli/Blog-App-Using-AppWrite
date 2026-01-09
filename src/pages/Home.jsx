import { useSelector } from "react-redux";
import appwriteSerive from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    appwriteSerive
      .getPosts([])
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      })
      .catch((error) => {
        setPosts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [useSelector((state) => state.auth.status)]);

  // Loading skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <Container>
          <div className="mb-8">
            <div className="h-10 bg-gray-200 rounded-md w-48 mb-2 animate-pulse"></div>
            <div className="h-5 bg-gray-200 rounded-md w-72 animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden border border-gray-200"
              >
                <div className="w-full h-48 sm:h-56 bg-gray-200 animate-pulse"></div>
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }

  if (posts.length === 0) {
    // When there is no Post to show --> Show this message
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="relative overflow-hidden w-full">
          {/* Hero Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                Share your stories with <br className="hidden sm:block" />
                <span className="text-gray-900">the world</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Create, publish, and share your thoughts with a community of
                readers. Start your blogging journey today.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/signup"
                  className="px-8 py-3.5 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-800 transition-colors shadow-sm w-full sm:w-auto text-center"
                >
                  Get started
                </Link>
                <Link
                  to="/login"
                  className="px-8 py-3.5 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-50 transition-colors border border-gray-300 w-full sm:w-auto text-center"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    // When there are Posts to show --> Show all the posts
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Latest posts
          </h1>
          <p className="text-gray-600">
            Discover stories and insights from our community
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.$id} className="animate-mymove">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
