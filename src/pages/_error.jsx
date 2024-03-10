import ErrorPage from "@/components/Global/ErrorPage";

export default function Error({ statusCode }) {
    return <ErrorPage statusCode={statusCode} />;
}

export async function getServerSideProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

    return {
        props: {
            statusCode
        }
    };
}