import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from "next";

const posts = {
    "test": "Hello world",
    "test2": "This is a blog post"
}

export const getServerSideProps: GetServerSideProps<{ blogPost: string }> = async (ctx) => {
    const id = ctx.params?.id;

    if (!id) return { notFound: true };
    // @ts-ignore
    const blogPost = posts[id];
    if (!blogPost) return { notFound: true };

    return { props: { blogPost } };
}

const BlogPost: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ blogPost }) => {
    return (
        <p>{blogPost}</p>
    )
}

export default BlogPost;

export const runtime = "experimental-edge";
