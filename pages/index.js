import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pumpa Token</title>
        <meta name="description" content="Pumpa Token Official Site" />
      </Head>
      <main className="min-h-screen bg-white text-gray-900 font-sans">
        <section className="text-center py-20 bg-orange-100">
          <Image
            src="/pumpa-logo.png"
            alt="Pumpa Token Logo"
            width={128}
            height={128}
            className="mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold text-orange-600 mb-4">
            Pumpa Token – Your Last Chance, Your Real Chance
          </h1>
          <p className="text-lg max-w-xl mx-auto text-gray-700">
            A new crypto-anime experience built by and for the underdogs.
          </p>
        </section>
      </main>
    </>
  );
}
