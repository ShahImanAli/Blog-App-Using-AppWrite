import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <Container>
        <article className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="relative w-full h-64 sm:h-96 lg:h-[500px] mb-8 rounded-2xl overflow-hidden shadow-2xl bg-white">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="w-full h-full object-cover"
            />

            {isAuthor && (
              <div className="absolute top-4 right-4 flex gap-2 flex-wrap">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button
                    bgColor="bg-blue-600 hover:bg-blue-700"
                    className="shadow-lg"
                  >
                    Edit
                  </Button>
                </Link>

                <Button
                  bgColor="bg-red-600 hover:bg-red-700"
                  onClick={deletePost}
                  className="shadow-lg"
                >
                  Delete
                </Button>
              </div>
            )}
          </div>

          {/* Title */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {post.title}
            </h1>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10">
            <div className="prose prose-lg max-w-none browser-css">
              {parse(post.content)}
            </div>
          </div>
        </article>
      </Container>
    </div>
  ) : null;
}
