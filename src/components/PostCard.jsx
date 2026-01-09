import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block h-full group">
      <div className="h-full bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-md">
        <div className="w-full h-48 sm:h-56 overflow-hidden bg-gray-100">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-4">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-gray-700 transition-colors">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
