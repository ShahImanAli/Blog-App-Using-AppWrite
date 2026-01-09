import { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {}, []);

  appwriteService.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <Container>
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            All Posts
          </h1>
          <p className="text-gray-600">Browse through all published articles</p>
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
