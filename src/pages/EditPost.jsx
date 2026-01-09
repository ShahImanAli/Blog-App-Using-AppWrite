import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-10 lg:py-12">
      <Container>
        <div className="max-w-6xl mx-auto px-3 sm:px-0">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1.5 sm:mb-2">
              Edit post
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Update your story
            </p>
          </div>
          <PostForm post={post} />
        </div>
      </Container>
    </div>
  ) : null;
}
