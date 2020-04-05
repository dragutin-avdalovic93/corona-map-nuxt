<template>
      <div class="container">
        <paginate
        v-if="posts.length"
        name="blogs"
        :list="posts"
        :per="6"
        tag="div"
      >
        <div class="grid-container">
          <div class="blog-post-small" v-for="blog in paginated('blogs')" v-bind:key="blog.id">
            <img class="thumb-img" v-bind:src="blog.image" @click="visitPost(blog.id)">
            <div class="blog-post-small-inner">
              <div class="content">
                <h2 class="title" @click="visitPost(blog.id)">
                  {{blog.title}}
                </h2>
                <div class="metadata">
                  <div class="created_at">
                    <img src="../../static/calendar.svg"/>
                    {{blog.created}}
                  </div>
                </div>
                <div class='excerpt-container' @click="visitPost(blog.id)">
                  <p class="description">{{blog.description}}</p>
                </div>
              </div>
              <div class="post-footer">
                <div class="category">
                  {{blog.tags[0]}},{{blog.tags[1]}}
                </div>
                <div class="read-more" @click="visitPost(blog.id)">
                  <a @click="visitPost(blog.id)">
                    <span class="read">Pročitaj Više </span><i class="fa fa-angle-right"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </paginate>
      <paginate-links
        for="blogs"
        @change="onLangsPageChange"
        :async="false"
        :show-step-links="true"
        :step-links="{
        next: 'Sledeća',
        prev: 'Prethodna'
      }"
        :classes="{
        'ul': 'pagination',
        'ul > li': 'page-item',
        'ul > li > a': 'page-link',
      }"
      >
      </paginate-links>
    </div>
</template>

<script>
import data from 'static/data.json'
export default {
  layout: 'blog',
  data () {
    return {
      posts: [],
      paginate: ['blogs']
    }
  },
  methods: {
    visitPost(id) {
      this.$router.push('/post/' + id);
    },
    onLangsPageChange() {
      window.scrollTo(0, 0);
    }
  },
  created(){
    Object.assign(this.posts, data.posts);
  }
}
</script>

<style>
  .container {
    margin-top: 40px;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(100px, auto);
    margin-bottom: 20px;
  }
  .pagination {
    margin-top: 30px;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 30px;
    min-height: 40px;

  }
  .page-item {
    list-style-type: none;
  }
  .page-item .page-link{
    color: white;
    background-color: grey;
    border-color: grey;
  }
  .page-item.active .page-link {
    color: #fff;
    background-color: #0ddac2;
    border-color: #0ddac2;
  }
  .number a {
    border-radius: 5px;
  }
  .page-item:first-child .page-link {
    margin-left: 0;
    border-top-left-radius: 5px !important;
    border-bottom-left-radius: 5px !important;
    border-bottom-right-radius: 0 !important;
    border-top-right-radius: 0 !important;
    background-color: grey;
  }
  .page-link {
    padding: 10px 20px;
    cursor: pointer;
  }
  .page-link:hover {
    color: #fff;
    background-color: #0ddac2;
    border-color: #0ddac2;
  }
  .page-item:last-child .page-link {
    margin-left: 0;
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 5px !important;
    border-top-right-radius: 5px !important;
    background-color: grey;
  }
  .page-item:last-child .page-link:hover {
    background: #0ddac2;
  }
  .page-item:first-child .page-link:hover {
    background: #0ddac2;
  }
  @media (max-width: 1024px) {
    .grid-container {
      display: grid;
      max-width: unset;
      grid-template-columns: repeat(2, 1fr) !important;
      grid-gap: 20px;
      grid-auto-rows: minmax(100px, auto);
      margin-bottom: 20px;
    }
  }
  @media (max-width: 768px) {
    .grid-container {
      display: grid;
      max-width: unset;
      grid-template-columns: repeat(1, 1fr) !important;
      grid-gap: 20px;
      grid-auto-rows: minmax(100px, auto);
      margin: 10px auto 20px auto;
    }
  }
  @media (max-width: 1024px) {
    .number {
      display: none !important;
    }
    .pagination {
      justify-content: center;
    }
  }
  .blog-post-small {
    width: auto;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
  .blog-post-small .thumb-img {
    width: 100%;
    height: auto;
    max-width: 377px;
    max-height: 228px;
  }
  @media (max-width: 2400px) {
    .blog-post-small .thumb-img {
      max-width: unset;
    }
  }
  @media (max-width: 2400px) {
    .blog-post-small .thumb-img {
      max-width: 400px;
    }
  }
  @media (max-width: 1024px) {
    .blog-post-small .thumb-img {
      max-width: 460px;
    }
  }
  @media (max-width: 568px) {
    .blog-post-small .thumb-img {
      max-width: 340px;
    }
  }
  @media (max-width: 340px) {
    .blog-post-small .thumb-img {
      max-width: 300px;
    }
  }
  .blog-post-small .blog-post-small-inner {
    background: #fff 0 0 no-repeat padding-box;
    color: #2b2b2b;
    padding: 0;
    cursor: pointer;
    padding: 5px;
  }
  @media (max-width: 2400px) {
    .blog-post-small .blog-post-small-inner {
      max-width: 390px;
    }
  }
  @media (max-width: 1050px) {
    .blog-post-small .blog-post-small-inner {
      max-width: 450px;
    }
  }
  @media (max-width: 568px) {
    .blog-post-small .blog-post-small-inner {
      max-width: 330px;
    }
  }
  @media (max-width: 340px) {
    .blog-post-small .blog-post-small-inner {
      max-width: 290px;
    }
  }
  .blog-post-small .blog-post-small-inner:hover .content .title {
    color: #0ddac2;
  }
  .blog-post-small .blog-post-small-inner:hover .post-footer .read-more a {
    color: #0ddac2;
  }
  .blog-post-small .blog-post-small-inner .content {
    transition: color 300ms ease-in-out;
    padding: 0 0 0 0 !important;
  }
  .blog-post-small .blog-post-small-inner .content .metadata {
    display: flex;
    justify-content: space-between;
    padding-bottom: 25px;
  }
  .blog-post-small .blog-post-small-inner .content .metadata .created_at {
    display: flex;
    align-items: center;
    font-size: 12px;
    text-align: left;
    letter-spacing: 0;
    color: #4b4361;
    opacity: 1;
    transition: all 200ms ease-in-out;
  }
  .blog-post-small .blog-post-small-inner .content .metadata .created_at img {
    margin-right: 10px;
    width: 14px;
    height: 14px;
    margin-bottom: 2px;
  }
  .blog-post-small .blog-post-small-inner .content .excerpt-container {
    max-height: 90px;
    min-height: 90px;
  }
  @media (max-width: 1024px) {
    .blog-post-small .blog-post-small-inner .content .excerpt-container {
      max-height: 85px;
      min-height: 85px;
    }
  }
  .blog-post-small .blog-post-small-inner .content .title {
    max-height: 70px;
    overflow: hidden;
    min-height: 70px;
    padding-top: 15px;
    margin: 0;
    line-height: 1.2;
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    letter-spacing: 0;
    color: #423b57;
    opacity: 1;
    transition: all 200ms ease-in-out;
    text-overflow: ellipsis;
  }
  .blog-post-small .blog-post-small-inner .content .title:hover {
    color: #12cead;
  }
  .blog-post-small .blog-post-small-inner .content .description {
    transition: all 200ms ease-in-out;
    padding-bottom: 7px;
    margin-bottom: 0;
    margin-top: 0;
    overflow: hidden;
    text-overflow: clip;
    max-height: 70px;
    min-height: 70px;
    font-size: 14px;
    text-align: justify;
    color: #2b2b2b;
  }
  @media (max-width: 1024px) {
    .blog-post-small .blog-post-small-inner .content .description {
      max-height: 70px;
      min-height: 70px;
    }
  }
  .blog-post-small .blog-post-small-inner .content .description p {
    text-align: left;
    opacity: 1;
    max-height: 78px;
    min-height: 78px;
    color: black !important;
  }
  @media (max-width: 1024px) {
    .blog-post-small .blog-post-small-inner .content .description p {
      max-height: 70px;
      min-height: 70px;
    }
  }
  .blog-post-small .blog-post-small-inner .post-footer {
    border-top: 2px solid rgba(139, 139, 139, 0.5);
    transition: all 300ms ease-in-out;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }
  .blog-post-small .blog-post-small-inner .post-footer .category{
    transition: all 200ms ease-in-out;
    font-size: 14px !important;
    text-align: left;
    letter-spacing: 0;
    color: #12cead;
    opacity: 1;
    text-decoration: none;
  }
  /*.blog-post-small .blog-post-small-inner .post-footer .category:hover {*/
  /*    color: #423b57;*/
  /*}*/
  .blog-post-small .blog-post-small-inner .post-footer .read-more a {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 200ms ease-in-out;
    color: #2b2b2b;
    text-decoration: none;
    font-size: 14px !important;
    text-align: left;
    letter-spacing: 0;
    opacity: 1;
  }
  .blog-post-small .blog-post-small-inner .post-footer .read-more a:hover {
    color: #12cead;
  }
  .blog-post-small .blog-post-small-inner .post-footer .read-more a i {
    font-size: 20px;
    margin-left: 5px;
    color: #2b2b2b;
  }
  .blog-post-small .blog-post-small-inner .post-footer .read-more a .read {
    font-size: 14px;
    font-weight: 400;
  }
  .blog-post-small .blog-post-small-inner .post-footer .shares {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .blog-post-small .blog-post-small-inner .post-footer .shares img {
    margin-left: 0.714rem;
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
