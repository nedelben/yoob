// توليد منشور وهمي
function generatePost() {
    const post = document.createElement("section");
    post.className = "post";
    post.innerHTML = `
      <div class="post-header">
        <div class="avatar-skeleton"></div>
        <div class="user-info">
          <div class="name-skeleton"></div>
          <div class="handle-skeleton"></div>
        </div>
        <div class="menu-skeleton"></div>
      </div>
      <div class="post-text-skeleton"></div>
      <div class="post-text-skeleton short"></div>
      <div class="post-actions">
        <i class="fa-regular fa-comment"></i>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-regular fa-bookmark"></i>
      </div>
    `;
    document.getElementById("posts-container").appendChild(post);
  }
  
  // توليد مجموعة من المنشورات دفعة واحدة
  function loadMorePosts(count = 5) {
    for (let i = 0; i < count; i++) {
      generatePost();
    }
  }
  
  // عند بداية الصفحة
  loadMorePosts();
  
  // مراقبة التمرير
  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
      loadMorePosts();
    }
  });
  
