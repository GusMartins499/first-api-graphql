import Post from "../../../models/post";
import User from "../../../models/user";

export default {
  Post: {
    author: async (post) => await User.findById(post.author),
  },
  Query: {
    posts: async () => await Post.find(),
    post: async (_, { id }) => await Post.findById(id),
  },
  Mutation: {
    createPost: async (_, { data }) => await Post.create(data),
    updatePost: async (_, { id, data }) =>
      await Post.findOneAndUpdate(id, data, { new: true }),
    deletePost: async (_, { id }) => {
      const deleted = await Post.findOneAndDelete(id);
      return !!deleted;
    },
  },
};
