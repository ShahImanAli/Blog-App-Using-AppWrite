import { Container, PostForm } from "../components";

export default function AddPost() {
  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-10 lg:py-12">
      <Container>
        <div className="max-w-6xl mx-auto px-3 sm:px-0">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1.5 sm:mb-2">
              Create new post
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Share your story with the community
            </p>
          </div>
          <PostForm />
        </div>
      </Container>
    </div>
  );
}
