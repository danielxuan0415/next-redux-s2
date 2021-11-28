import Link from 'next/link';

const IndexPage = () => {
    return (
        <>
            <Link href='/counter'><a>Counter Page!</a></Link>{' '}
            <Link href='/quote'><a>Quote Page!</a></Link>
        </>
    );
};
export default IndexPage;