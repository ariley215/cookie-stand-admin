import Link from 'next/link';
export default function Header() {

    return (
        <header className="bg-green-500 p-8 mb-8">
        <h1 className="text-6xl">Cookie Stand Admin</h1>
        <nav>
            <Link href="/overview" className="px-1 py-2 rounded bg-green-100" >Overview</Link>
        </nav>
    </header>
    );
};
