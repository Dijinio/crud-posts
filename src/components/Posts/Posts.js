import React, { useContext, useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { PostsContext } from "../../context/posts";
import PostItem from "./PostItem";
import OptionsAndSearch from "./OptionsAndSearch";

function Posts() {
  const { posts } = useContext(PostsContext);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [paginatedPosts, setPaginatedPosts] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Copies posts to currentPosts on Component mount
  // and Updates currentPosts on Search
  useEffect(() => {
    const filteredPosts = posts.filter((post) =>
      post.title.includes(searchPhrase)
    );

    setCurrentPage(1);
    setCurrentPosts(filteredPosts);
  }, [posts, searchPhrase]);
  // Pagination Logic
  useEffect(() => {
    const paginatePosts = () => {
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;

      setPaginatedPosts(currentPosts.slice(indexOfFirstPost, indexOfLastPost));
    };

    paginatePosts();
  }, [currentPosts, currentPage, postsPerPage]);

  const handlePageChange = (e, v) => {
    setCurrentPage(v);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <Typography variant="h4" align="center">
        Posts
      </Typography>
      <OptionsAndSearch
        postsPerPage={postsPerPage}
        setPostsPerPage={setPostsPerPage}
        setSearchPhrase={setSearchPhrase}
      />
      <Grid container spacing={3}>
        {paginatedPosts.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(currentPosts.length / postsPerPage)}
        color="secondary"
        page={currentPage}
        onChange={handlePageChange}
        style={{ margin: "30px 0" }}
      />
    </>
  );
}

export default Posts;
