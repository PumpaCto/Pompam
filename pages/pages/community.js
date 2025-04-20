import Head from 'next/head';

export default function Community() {
  return (
    <>
      <Head>
        <title>Join the Pumpa Community</title>
        <meta name="description" content="Connect with Pumpa Token across social platforms" />
      </Head>
      <main className="min-h-screen p-6 bg-orange-50 text-gray-800 font-sans">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-orange-600 mb-6">
            Join the Pumpa Community
          </h1>
          <p className="text-lg mb-8 text-gray-700">
            Pumpa is more than just a token – it's a growing movement.  
            Connect with our community across your favorite platforms:
          </p>

          <div className="grid gap-4">
            <a href="https://t.me/pumpatoken" target="_blank" className="block bg-white p-4 rounded-lg shadow hover:bg-orange-100">
              Telegram
            </a>
            <a href="https://x.com/Pumpa_Cto" target="_blank" className="block bg-white p-4 rounded-lg shadow hover:bg-orange-100">
              Twitter (X)
            </a>
            <a href="https://www.tiktok.com/@pumpa.token" target="_blank" className="block bg-white p-4 rounded-lg shadow hover:bg-orange-100">
              TikTok
            </a>
            <a href="https://youtube.com/@pumpa-g2b" target="_blank" className="block bg-white p-4 rounded-lg shadow hover:bg-orange-100">
              YouTube
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
