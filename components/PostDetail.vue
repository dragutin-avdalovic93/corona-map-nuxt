<template>
    <div class="article">
        <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><MenuTopBlog msg="menu-top-corona"></MenuTopBlog></el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="article">
                    <div class="blog-detail-post">
                        <img class="thumb-img" v-bind:src="post.image">
                        <div class="blog-detail-post-inner">
                            <div class="content">
                                <h2 class="title">
                                    {{post.title}}
                                </h2>
                                <div class="metadata">
                                    <div class="created_at">
                                        <img src="../static/calendar.svg"/>
                                        {{post.created}}
                                    </div>
                                </div>
                                <div class='excerpt-container'>
                                    <p class="description">{{post.content}}</p>
                                    <p class="source">Izvor:{{post.source}}</p>
                                </div>
                            </div>
                            <div class="post-footer">
                                <div class="category">
                                    {{post.tags[0]}},{{post.tags[1]}}
                                </div>
                                <div class="read-more" @click="goBack">
                                    <a href="" target="">
                                        <span class="read">Nazad</span><i class="fa fa-angle-left"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </el-col>
        </el-row>
    </div>
</template>
<script>
    import data from 'static/data.json'
    import MenuTopBlog from "./MenuTopBlog";
    export default {
        name: 'PostDetail',
        metaInfo: {
            // Children can override the title.
            title: 'Korona virus BiH',
            // Result: My Page Title ← My Site
            // If a child changes the title to "My Other Page Title",
            // it will become: My Other Page Title ← My Site
            titleTemplate: '%s ← Blog stranica',
            // Define meta tags here.
            meta: [
                {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'description', content: 'Blog stranica'}
            ]
        },
        data() {
            return {
                posts: [],
                post: {},
                id: ""
            }
        },
        components: {
            MenuTopBlog
        },
        created() {
            this.id = this.$route.params.id;
            Object.assign(this.posts, data.posts);
            this.posts.forEach((post) => {
                if(post.id === this.id) {
                    Object.assign(this.post, post);
                }
            });
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style>
    .article {
        margin-bottom: 20px;
    }
    .blog-detail-post {
        width: auto;
        margin: auto;
        display: flex;
        flex-direction: column;
    }
    .blog-detail-post .thumb-img {
        width: 100%;
        height: auto;
        max-width: 377px;
        max-height: 228px;
    }
    @media (max-width: 2400px) {
        .blog-detail-post .thumb-img {
            max-width: 800px;
            margin: auto;
            max-height: 400px;
        }
    }
    @media (max-width: 2400px) {
        .blog-detail-post .thumb-img {
            max-width: 800px;
            margin: auto;
            max-height: 400px;
        }
    }
    @media (max-width: 1024px) {
        .blog-detail-post .thumb-img {
            max-width: 650px;
            margin: auto;
            max-height: 350px;
        }
    }
    @media (max-width: 568px) {
        .blog-detail-post .thumb-img {
            max-width: 450px;
            margin: auto;
            max-height: 350px;
        }
    }
    @media (max-width: 340px) {
        .blog-detail-post .thumb-img {
            max-width: 290px;
            margin: auto;
            max-height: 200px;
        }
    }
    .blog-detail-post .blog-detail-post-inner {
        width: 100%;
        background: #fff 0 0 no-repeat padding-box;
        color: #2b2b2b;
        padding: 0;
        cursor: pointer;
        padding: 5px;
    }
    @media (max-width: 2400px) {
        .blog-detail-post .blog-detail-post-inner {
            max-width: 800px;
            margin: auto;
        }
    }
    @media (max-width: 2400px) {
        .blog-detail-post .blog-detail-post-inner {
            max-width: 800px;
            margin: auto;
        }
    }
    @media (max-width: 1024px) {
        .blog-detail-post .blog-detail-post-inner {
            max-width: 650px;
            margin: auto;
        }
    }
    @media (max-width: 568px) {
        .blog-detail-post .blog-detail-post-inner {
            max-width: 450px;
            margin: auto;
        }
    }
    @media (max-width: 340px) {
        .blog-detail-post .blog-detail-post-inner {
            max-width: 290px;
            margin: auto;
        }
    }
    .blog-detail-post .blog-detail-post-inner .content {
        transition: color 300ms ease-in-out;
        padding: 0 0 0 0 !important;
    }
    .blog-detail-post .blog-detail-post-inner .content .metadata {
        display: flex;
        justify-content: space-between;
        padding-bottom: 25px;
    }
    .blog-detail-post .blog-detail-post-inner .content .metadata .created_at {
        display: flex;
        align-items: center;
        font-size: 12px;
        text-align: left;
        letter-spacing: 0;
        color: #4b4361;
        opacity: 1;
        transition: all 200ms ease-in-out;
    }
    .blog-detail-post .blog-detail-post-inner .content .metadata .created_at img {
        margin-right: 10px;
        width: 14px;
        height: 14px;
        margin-bottom: 2px;
    }
    .blog-detail-post .blog-detail-post-inner .content .excerpt-container {
        min-height: 90px;
    }
    @media (max-width: 1024px) {
        .blog-detail-post .blog-detail-post-inner .content .excerpt-container {
            min-height: 85px;
        }
    }
    .blog-detail-post .blog-detail-post-inner .content .title {
        overflow: hidden;
        min-height: 70px;
        margin-top: 15px;
        line-height: 1.3;
        font-size: 26px;
        font-weight: 600;
        text-align: left;
        letter-spacing: 0;
        color: #12cead;
        opacity: 1;
        transition: all 200ms ease-in-out;
        text-overflow: ellipsis;
    }
    .blog-detail-post .blog-detail-post-inner .content .description {
        transition: all 200ms ease-in-out;
        padding-bottom: 7px;
        margin-bottom: 0;
        overflow: hidden;
        text-overflow: clip;
        min-height: 78px;
        font-size: 14px;
        text-align: justify;
    }
    .blog-detail-post .blog-detail-post-inner .content .source {
        transition: all 200ms ease-in-out;
        padding-bottom: 7px;
        margin-bottom: 0;
        overflow: hidden;
        text-overflow: clip;
        font-size: 12px;
        text-align: justify;
        font-weight: bold;
    }
    @media (max-width: 1024px) {
        .blog-detail-post .blog-detail-post-inner .content .description {
            min-height: 70px;
        }
    }
    .blog-detail-post .blog-detail-post-inner .content .description p {
        text-align: left;
        opacity: 1;
        min-height: 78px;
        color: black !important;
    }
    @media (max-width: 1024px) {
        .blog-detail-post .blog-detail-post-inner .content .description p {
            min-height: 70px;
        }
    }
    .blog-detail-post .blog-detail-post-inner .post-footer {
        border-top: 2px solid rgba(139, 139, 139, 0.5);
        transition: all 300ms ease-in-out;
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
    }
    .blog-detail-post .blog-detail-post-inner .post-footer .category{
        transition: all 200ms ease-in-out;
        font-size: 16px !important;
        text-align: left;
        letter-spacing: 0;
        color: #12cead;
        opacity: 1;
        text-decoration: none;
    }
    .blog-detail-post .blog-detail-post-inner .post-footer .read-more a {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 200ms ease-in-out;
        color: #ec251a;
        text-decoration: none;
        font-size: 14px !important;
        text-align: left;
        letter-spacing: 0;
        opacity: 1;
    }
    .blog-detail-post .blog-detail-post-inner .post-footer .read-more a:hover {
        color: #12cead;
    }
    .blog-detail-post .blog-detail-post-inner .post-footer .read-more a svg {
        height: 20px;
        width: 20px;
    }
    .blog-detail-post .blog-detail-post-inner .post-footer .read-more a .read {
        font-size: 16px;
        font-weight: 400;
    }
    .blog-detail-post .blog-detail-post-inner .post-footer .shares {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .blog-detail-post .blog-detail-post-inner .post-footer .shares img {
        margin-left: 0.714rem;
        width: 1.5rem;
        height: 1.5rem;
    }

</style>
