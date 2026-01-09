import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";

import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;
      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;

        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="bg-white rounded-lg border border-gray-200 shadow-sm"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 p-4 sm:p-6 lg:p-8 space-y-5 sm:space-y-6 border-b lg:border-b-0 lg:border-r border-gray-200">
          <div>
            <Input
              label="Title"
              placeholder="Enter your post title"
              {...register("title", { required: true })}
            />
          </div>
          <div>
            <Input
              label="URL Slug"
              placeholder="post-url-slug"
              {...register("slug", { required: true })}
              onInput={(e) => {
                setValue("slug", slugTransform(e.currentTarget.value), {
                  shouldValidate: true,
                });
              }}
            />
            <p className="mt-1.5 text-xs text-gray-500">
              Auto-generated from title, but you can customize it
            </p>
          </div>
          <div>
            <RTE
              label="Content"
              name="content"
              control={control}
              defaultValue={getValues("content")}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-5 sm:space-y-6 bg-gray-50 lg:bg-transparent">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Post Settings
            </h3>

            <div className="space-y-8">
              <div>
                <Input
                  label="Featured Image"
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, image/gif"
                  {...register("image", { required: !post })}
                />
                <p className="mt-2 text-xs text-gray-500">
                  PNG, JPG or GIF (max. 5MB)
                </p>
              </div>

              {post && (
                <div className="w-full rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={appwriteService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className="w-full h-auto"
                  />
                </div>
              )}

              <div>
                <Select
                  options={["active", "inactive"]}
                  label="Status"
                  {...register("status", { required: true })}
                />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <Button
              type="submit"
              bgColor="bg-gray-900 hover:bg-gray-800"
              className="w-full text-white font-semibold py-3 rounded-md transition-colors shadow-sm"
            >
              {post ? "Update post" : "Publish post"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
